"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DataTable, MCQ, QA } from "@/lib/types";
import { emptyAttempt, useStore, type SetAttempt } from "@/lib/store";
import { optionOrder } from "@/lib/optionOrder";
import { gradeQA, scorePoints, VERDICT_META } from "@/lib/grade";
import { DIFFICULTY_META, sectionHref, sectionMeta } from "@/lib/sections";
import { MarkdownLite } from "./MarkdownLite";
import { Figure } from "./Figures";
import { ShareButton } from "./ShareButton";

export type RunItem = { kind: "mcq"; q: MCQ } | { kind: "qa"; q: QA };

type Mode = "set" | "practice" | "review";
type Persist = (fn: (prev: SetAttempt) => SetAttempt) => void;

type Props = {
  /** Every mode is saved on this device and resumes where she left off.
   *  "set" also records best scores; "practice" is a guide section; "review" is the Mistakes run. */
  mode: Mode;
  /** Storage key for this run. */
  runId: string;
  /** Replaces the default "start again" (used by the Mistakes run to pick up new mistakes). */
  onRestart?: () => void;
  title: string;
  subtitle?: string;
  items: RunItem[];
  backHref: string;
  backLabel: string;
};

type Status = "todo" | "right" | "part" | "wrong";

function statusOf(item: RunItem, a: SetAttempt): Status {
  const ans = a.answers[item.q.id];
  if (ans === undefined) return "todo";
  if (item.kind === "mcq") return ans === item.q.answerIndex ? "right" : "wrong";
  const pts = a.qaPoints[item.q.id] ?? [];
  const r = scorePoints(pts);
  if (r.score >= 0.75) return "right";
  if (r.score > 0) return "part";
  return "wrong";
}

/** Score as (marks earned, marks available): MCQ = 1 mark each, written = mark points. */
function marksFor(item: RunItem, a: SetAttempt): [number, number] {
  if (item.kind === "mcq") return [a.answers[item.q.id] === item.q.answerIndex ? 1 : 0, 1];
  const pts = a.qaPoints[item.q.id] ?? [];
  return [pts.filter(Boolean).length, item.q.markScheme.length];
}

export function Runner({ mode, runId, title, subtitle, items, backHref, backLabel, onRestart }: Props) {
  const store = useStore();
  const { ready } = store;
  const [a, setA] = useState<SetAttempt>(() => emptyAttempt());
  const aRef = useRef<SetAttempt>(a);
  const [loaded, setLoaded] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // resume the saved run (every mode is saved on this device)
  useEffect(() => {
    if (!ready || loaded) return;
    const saved = store.getAttempt(runId);
    if (saved) {
      const restored = { ...emptyAttempt(), ...saved, index: Math.min(saved.index, items.length - 1) };
      aRef.current = restored;
      setA(restored);
      if (saved.completed) setShowSummary(true);
    }
    setLoaded(true);
  }, [ready, loaded, runId, store, items.length]);

  /** Apply a change to the latest attempt and save it immediately. */
  const persist: Persist = (fn) => {
    const next = { ...fn(aRef.current), updatedAt: Date.now() };
    aRef.current = next;
    setA(next);
    store.saveAttempt(runId, next);
  };

  const item = items[a.index];
  const answeredCount = items.filter((it) => a.answers[it.q.id] !== undefined).length;
  const allDone = answeredCount === items.length && items.length > 0;

  const go = (i: number) => {
    if (i < 0 || i >= items.length) return;
    persist((prev) => ({ ...prev, index: i }));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const finish = () => {
    const [got, total] = items.reduce(
      ([g, t], it) => {
        const [x, y] = marksFor(it, a);
        return [g + x, t + y];
      },
      [0, 0],
    );
    const pct = total ? Math.round((got / total) * 100) : 0;
    if (mode === "set" && !a.completed) {
      store.finishSet({ setId: runId, correct: got, total, pct, at: Date.now() });
      store.award(`${runId}:finished`, 5);
    }
    persist((prev) => ({ ...prev, completed: true }));
    setShowSummary(true);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const restart = () => {
    if (onRestart) return onRestart();
    store.resetAttempt(runId);
    const fresh = emptyAttempt();
    aRef.current = fresh;
    setA(fresh);
    setShowSummary(false);
  };

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
        Nothing here yet. <Link className="font-semibold text-indigo-600" href={backHref}>{backLabel}</Link>
      </div>
    );
  }

  if (!loaded) {
    return <div className="h-64 animate-pulse rounded-2xl bg-white" />;
  }

  if (showSummary) {
    return (
      <div ref={topRef}>
        <Summary
          mode={mode}
          title={title}
          items={items}
          attempt={a}
          onReview={(i) => {
            setShowSummary(false);
            go(i);
          }}
          onRestart={restart}
          backHref={backHref}
          backLabel={backLabel}
        />
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-20 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-bold text-slate-800">{answeredCount}</span> / {items.length} answered
        </div>
      </div>

      {/* progress bar + navigator */}
      <div className="rounded-2xl border border-slate-200 bg-white p-2.5">
        <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${(answeredCount / items.length) * 100}%` }} />
        </div>
        <div className="nav-scroll flex gap-1.5 overflow-x-auto pb-1">
          {items.map((it, i) => {
            const s = statusOf(it, a);
            const cls =
              s === "right" ? "bg-emerald-500 text-white" : s === "part" ? "bg-amber-400 text-white" : s === "wrong" ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200";
            return (
              <button
                key={it.q.id}
                onClick={() => go(i)}
                aria-label={`Question ${i + 1}`}
                className={`h-8 w-8 shrink-0 rounded-lg text-sm font-bold transition ${cls} ${i === a.index ? "ring-2 ring-indigo-500 ring-offset-2" : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {item.kind === "mcq" ? (
        <McqCard key={item.q.id} mcq={item.q} number={a.index + 1} total={items.length} mode={mode} runId={runId} attempt={a} persist={persist} />
      ) : (
        <QaCard key={item.q.id} qa={item.q} number={a.index + 1} total={items.length} mode={mode} runId={runId} attempt={a} persist={persist} />
      )}

      {/* footer navigation */}
      <div className="flex items-center justify-between gap-2">
        <button onClick={() => go(a.index - 1)} disabled={a.index === 0} className="whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-600 disabled:opacity-40">
          ← Back
        </button>
        {allDone ? (
          <button onClick={finish} className="whitespace-nowrap rounded-xl bg-emerald-600 px-4 py-2.5 font-bold text-white shadow hover:bg-emerald-700">
            See my results 🎉
          </button>
        ) : (
          <span className="text-center text-xs text-slate-400">{items.length - answeredCount} to go · ✓ saved on this device</span>
        )}
        <button
          onClick={() => {
            if (a.index < items.length - 1) go(a.index + 1);
            else {
              const firstTodo = items.findIndex((it) => a.answers[it.q.id] === undefined);
              if (firstTodo >= 0) go(firstTodo);
              else finish();
            }
          }}
          className="whitespace-nowrap rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700"
        >
          {a.index < items.length - 1 ? "Next →" : allDone ? "Finish" : "Unanswered →"}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function Badges({ q, number, total }: { q: MCQ | QA; number: number; total: number }) {
  const d = DIFFICULTY_META[q.difficulty];
  const s = sectionMeta(q.section);
  return (
    <div className="mb-3 flex flex-wrap items-center gap-1.5 text-xs font-bold">
      <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-indigo-700">
        Q{number} of {total}
      </span>
      <span className={`rounded-full px-2.5 py-1 ${d.className}`}>{d.label}</span>
      {s && (
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">
          {s.emoji} {s.label}
        </span>
      )}
      {"marks" in q && <span className="ml-auto rounded-full bg-slate-800 px-2.5 py-1 text-white">{q.marks} marks</span>}
    </div>
  );
}

function TableView({ table }: { table: DataTable }) {
  return (
    <div className="my-3 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {table.caption && <caption className="mb-1 text-left text-xs font-semibold text-slate-500">{table.caption}</caption>}
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} className="border border-slate-300 bg-slate-100 px-2 py-1.5 text-left font-semibold text-slate-800">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci} className="border border-slate-300 bg-white px-2 py-1.5 text-slate-800">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Hints({ hints, used, onUse, locked }: { hints: string[]; used: number; onUse: () => void; locked: boolean }) {
  if (!hints.length) return null;
  return (
    <div className="mt-4 space-y-2">
      {hints.slice(0, used).map((h, i) => (
        <div key={i} className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          <span className="font-bold">Hint {i + 1}: </span>
          {h}
        </div>
      ))}
      {!locked && used < hints.length && (
        <button onClick={onUse} className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800 hover:bg-amber-100">
          💡 {used === 0 ? "Need a hint?" : "Another hint"} ({used + 1}/{hints.length})
          <span className="font-normal text-amber-700/80">· costs a star</span>
        </button>
      )}
    </div>
  );
}

function ReviseLink({ section }: { section: string }) {
  const s = sectionMeta(section);
  if (!s) return null;
  return (
    <Link href={sectionHref(section)} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline">
      📖 Revise “{s.label}” in the guide
    </Link>
  );
}

type CardProps = { number: number; total: number; mode: Mode; runId: string; attempt: SetAttempt; persist: Persist };

const without = <T,>(rec: Record<string, T> | undefined, key: string): Record<string, T> => {
  const out = { ...(rec ?? {}) };
  delete out[key];
  return out;
};

function McqCard({ mcq, number, total, mode, runId, attempt, persist }: CardProps & { mcq: MCQ }) {
  const store = useStore();
  const committed = attempt.answers[mcq.id];
  const checked = typeof committed === "number";
  const [selected, setSelected] = useState<number | null>(checked ? (committed as number) : attempt.picks?.[mcq.id] ?? null);
  const used = attempt.hintsUsed[mcq.id] ?? 0;
  const order = useMemo(() => optionOrder(mcq), [mcq]);
  // When the answers are themselves diagram letters (A–I), number the choices instead of lettering them.
  const letterOptions = mcq.options.every((o) => /^[A-Z]$/.test(o.trim()));
  const labelAt = (pos: number) => (letterOptions ? String(pos + 1) : String.fromCharCode(65 + pos));
  const letterOf = (authored: number) => labelAt(order.indexOf(authored));
  const optText = (i: number) => (letterOptions ? `Letter ${mcq.options[i]}` : mcq.options[i]);
  const [earned, setEarned] = useState<number | null>(null);

  function check() {
    if (selected === null || checked) return;
    const good = selected === mcq.answerIndex;
    store.recordAnswer(mcq.id, good ? 1 : 0, good);
    const stars = good ? Math.max(1, 3 - used) : 0;
    store.award(`${runId}:${mcq.id}`, stars);
    setEarned(stars);
    persist((prev) => ({ ...prev, answers: { ...prev.answers, [mcq.id]: selected }, picks: without(prev.picks, mcq.id) }));
  }

  const right = checked && committed === mcq.answerIndex;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <Badges q={mcq} number={number} total={total} />
      <p className="text-lg font-semibold leading-snug text-slate-900">{mcq.question}</p>
      {mcq.figure && (
        <div className="diagram my-3 rounded-xl border border-slate-100 bg-slate-50 p-2">
          <Figure figure={mcq.figure} />
        </div>
      )}
      {mcq.table && <TableView table={mcq.table} />}

      <div className="mt-4 space-y-2">
        {order.map((i, pos) => {
          const isSel = selected === i;
          const isAns = i === mcq.answerIndex;
          let cls = "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40";
          if (checked) {
            if (isAns) cls = "border-emerald-500 bg-emerald-50";
            else if (isSel) cls = "border-rose-500 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-60";
          } else if (isSel) cls = "border-indigo-500 bg-indigo-50";
          return (
            <button
              key={i}
              onClick={() => {
                if (checked) return;
                setSelected(i);
                persist((prev) => ({ ...prev, picks: { ...(prev.picks ?? {}), [mcq.id]: i } }));
              }}
              disabled={checked}
              className={`flex w-full items-start gap-3 rounded-xl border-2 px-3.5 py-3 text-left transition ${cls}`}
            >
              <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${isSel && !checked ? "border-indigo-500 bg-indigo-500 text-white" : "border-slate-300 bg-white text-slate-600"}`}>
                {labelAt(pos)}
              </span>
              <span className="pt-0.5 text-slate-800">{optText(i)}</span>
              {checked && isAns && <span className="ml-auto pt-0.5">✅</span>}
              {checked && isSel && !isAns && <span className="ml-auto pt-0.5">❌</span>}
            </button>
          );
        })}
      </div>

      <Hints
        hints={mcq.hints}
        used={used}
        locked={checked}
        onUse={() => persist((prev) => ({ ...prev, hintsUsed: { ...prev.hintsUsed, [mcq.id]: (prev.hintsUsed[mcq.id] ?? 0) + 1 } }))}
      />

      {!checked && (
        <button
          onClick={check}
          disabled={selected === null}
          className="mt-5 w-full rounded-xl bg-indigo-600 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          Check my answer
        </button>
      )}

      {checked && (
        <div className="mt-5 space-y-3 animate-pop">
          {right ? (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
              <p className="font-extrabold text-emerald-800">
                ✅ Correct!{earned ? ` +${earned} ⭐` : ""}
              </p>
              <p className="mt-1 text-emerald-900">{mcq.optionFeedback[mcq.answerIndex]}</p>
            </div>
          ) : (
            <>
              <div className="rounded-xl border border-rose-300 bg-rose-50 p-4">
                <p className="font-extrabold text-rose-800">
                  ❌ Not quite — you chose {letterOf(committed as number)}: “{optText(committed as number)}”
                </p>
                <p className="mt-1 text-rose-900">
                  <span className="font-semibold">Why that’s not right: </span>
                  {mcq.optionFeedback[committed as number]}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
                <p className="font-extrabold text-emerald-800">
                  ✅ The right answer is {letterOf(mcq.answerIndex)}: “{optText(mcq.answerIndex)}”
                </p>
                <p className="mt-1 text-emerald-900">{mcq.optionFeedback[mcq.answerIndex]}</p>
              </div>
            </>
          )}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="mb-1 text-sm font-extrabold uppercase tracking-wide text-indigo-700">📘 The key idea</p>
            <MarkdownLite text={mcq.explanation} className="text-indigo-950/90" />
            {mcq.strategy && (
              <p className="mt-2 text-xs font-semibold text-indigo-700">🧠 Exam strategy: {mcq.strategy}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <ReviseLink section={mcq.section} />
            {!right && <span className="text-xs text-slate-500">🔁 Added to your Mistakes list for another go.</span>}
          </div>
        </div>
      )}
    </div>
  );
}

function QaCard({ qa, number, total, mode, runId, attempt, persist }: CardProps & { qa: QA }) {
  const store = useStore();
  const committed = attempt.answers[qa.id];
  const checked = typeof committed === "string";
  const [draft, setDraft] = useState<string>(checked ? (committed as string) : attempt.drafts?.[qa.id] ?? "");
  // save the half-typed answer as she types, so leaving the page never loses it
  const draftTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingDraft = useRef<string | null>(null);
  const persistRef = useRef(persist);
  persistRef.current = persist;
  const flushDraft = () => {
    if (draftTimer.current) clearTimeout(draftTimer.current);
    draftTimer.current = null;
    const v = pendingDraft.current;
    pendingDraft.current = null;
    if (v !== null) persistRef.current((prev) => (prev.answers[qa.id] !== undefined ? prev : { ...prev, drafts: { ...(prev.drafts ?? {}), [qa.id]: v } }));
  };
  useEffect(() => () => flushDraft(), []); // eslint-disable-line react-hooks/exhaustive-deps
  const onDraft = (v: string) => {
    setDraft(v);
    pendingDraft.current = v;
    if (draftTimer.current) clearTimeout(draftTimer.current);
    draftTimer.current = setTimeout(flushDraft, 400);
  };
  const used = attempt.hintsUsed[qa.id] ?? 0;
  const points = attempt.qaPoints[qa.id] ?? qa.markScheme.map(() => false);
  const [auto, setAuto] = useState<boolean[] | null>(null);
  const result = scorePoints(points);
  const meta = VERDICT_META[result.verdict];

  function mark() {
    if (checked || draft.trim().length < 2) return;
    const r = gradeQA(qa, draft);
    setAuto(r.credited);
    store.recordAnswer(qa.id, r.score, r.score >= 0.75);
    store.award(`${runId}:${qa.id}`, Math.max(0, r.hit - Math.min(used, r.hit)));
    if (draftTimer.current) clearTimeout(draftTimer.current);
    pendingDraft.current = null;
    persist((prev) => ({
      ...prev,
      answers: { ...prev.answers, [qa.id]: draft },
      qaPoints: { ...prev.qaPoints, [qa.id]: r.credited },
      drafts: without(prev.drafts, qa.id),
    }));
  }

  function toggle(i: number) {
    const next = points.map((v, j) => (j === i ? !v : v));
    const r = scorePoints(next);
    store.adjustAnswer(qa.id, r.score, r.score >= 0.75);
    persist((prev) => ({ ...prev, qaPoints: { ...prev.qaPoints, [qa.id]: next } }));
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <Badges q={qa} number={number} total={total} />
      <p className="whitespace-pre-line text-lg font-semibold leading-snug text-slate-900">{qa.question}</p>
      {qa.figure && (
        <div className="diagram my-3 rounded-xl border border-slate-100 bg-slate-50 p-2">
          <Figure figure={qa.figure} />
        </div>
      )}
      {qa.table && <TableView table={qa.table} />}

      <textarea
        value={draft}
        onChange={(e) => onDraft(e.target.value)}
        disabled={checked}
        rows={6}
        aria-label="Your answer"
        placeholder={`Write your answer here… (worth ${qa.marks} marks — aim for ${qa.marks} separate points)`}
        className="mt-4 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-base text-slate-900 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100"
      />

      <Hints
        hints={qa.hints}
        used={used}
        locked={checked}
        onUse={() => persist((prev) => ({ ...prev, hintsUsed: { ...prev.hintsUsed, [qa.id]: (prev.hintsUsed[qa.id] ?? 0) + 1 } }))}
      />

      {!checked && (
        <button
          onClick={mark}
          disabled={draft.trim().length < 2}
          className="mt-5 w-full rounded-xl bg-indigo-600 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          Mark my answer
        </button>
      )}

      {checked && (
        <div className="mt-5 space-y-3 animate-pop">
          <div className={`rounded-xl border p-4 ${meta.className}`}>
            <p className="text-lg font-extrabold">
              {meta.emoji} {result.hit} / {result.total} marks — {meta.label}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-slate-600">Mark scheme — point by point</p>
            <ul className="space-y-2.5">
              {qa.markScheme.map((mp, i) => {
                const got = points[i];
                const changed = auto ? auto[i] !== got : false;
                return (
                  <li key={i} className={`rounded-lg border p-3 ${got ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
                    <div className="flex items-start gap-2">
                      <span className="text-lg leading-none">{got ? "✅" : "❌"}</span>
                      <div className="flex-1">
                        <p className={`font-semibold ${got ? "text-emerald-900" : "text-rose-900"}`}>{mp.point}</p>
                        {!got && (
                          <p className="mt-1 text-sm text-rose-900/90">
                            <span className="font-semibold">What you needed: </span>
                            <MarkdownInline text={mp.feedback} />
                          </p>
                        )}
                        <button onClick={() => toggle(i)} className="mt-1.5 block text-left text-xs font-semibold text-slate-500 underline underline-offset-2 hover:text-slate-700">
                          {got ? "I didn’t really say this — remove the mark" : "The marker missed it — I did say this"}
                          {changed ? " (changed by you)" : ""}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              The computer marks by looking for the key ideas. If it missed something you really did write (or gave a mark you didn’t earn), tap the line under that point — be honest, your teacher will be!
            </p>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="mb-1 text-sm font-extrabold uppercase tracking-wide text-indigo-700">📝 Full-marks model answer</p>
            <MarkdownLite text={qa.modelAnswer} className="text-indigo-950/90" />
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <span className="font-extrabold">⚠️ Common mistake: </span>
            {qa.commonError}
          </div>
          <ReviseLink section={qa.section} />
        </div>
      )}
    </div>
  );
}

function MarkdownInline({ text }: { text: string }) {
  // feedback strings may contain **bold** — render inline without block wrappers
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

// ---------------------------------------------------------------------------

function Summary({
  mode,
  title,
  items,
  attempt,
  onReview,
  onRestart,
  backHref,
  backLabel,
}: {
  mode: Mode;
  title: string;
  items: RunItem[];
  attempt: SetAttempt;
  onReview: (i: number) => void;
  onRestart: () => void;
  backHref: string;
  backLabel: string;
}) {
  const { p } = useStore();
  let got = 0;
  let total = 0;
  const bySection = new Map<string, [number, number]>();
  items.forEach((it) => {
    const [x, y] = marksFor(it, attempt);
    got += x;
    total += y;
    const cur = bySection.get(it.q.section) ?? [0, 0];
    bySection.set(it.q.section, [cur[0] + x, cur[1] + y]);
  });
  const pct = total ? Math.round((got / total) * 100) : 0;
  const wrong = items.map((it, i) => ({ it, i, s: statusOf(it, attempt) })).filter((x) => x.s !== "right");
  const emoji = pct >= 90 ? "🏆" : pct >= 75 ? "🌟" : pct >= 50 ? "👍" : "💪";
  const message =
    pct >= 90 ? "Outstanding — you're test-ready on this!" : pct >= 75 ? "Strong work. Fix the few slips below and you're there." : pct >= 50 ? "Good effort. The mistakes below are your fastest route to marks." : "Every mistake here is a mark you'll win back on Thursday. Go through them one by one.";
  const sections = [...bySection.entries()].sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <div className="text-5xl">{emoji}</div>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-900">
          {title}: {pct}%
        </h1>
        <p className="text-slate-500">
          {got} / {total} {items[0]?.kind === "qa" ? "marks" : "correct"}
        </p>
        <p className="mx-auto mt-2 max-w-md text-slate-700">{message}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button onClick={onRestart} className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">
            {mode === "set" ? "🔄 Try this set again" : mode === "practice" ? "🔄 Practise again" : "🔁 Start a new mistakes round"}
          </button>
          {wrong.length > 0 && (
            <Link href="/review" className="rounded-xl bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-700">
              🔁 Fix my mistakes
            </Link>
          )}
          <Link href={backHref} className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
            {backLabel}
          </Link>
          <ShareButton progress={p} />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 font-extrabold text-slate-900">How you did, topic by topic</h2>
        <ul className="space-y-2">
          {sections.map(([sid, [x, y]]) => {
            const s = sectionMeta(sid);
            const f = y ? x / y : 0;
            return (
              <li key={sid} className="flex items-center gap-3">
                <span className="w-44 shrink-0 truncate text-sm text-slate-700 sm:w-56">
                  {s?.emoji} {s?.label ?? sid}
                </span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${f >= 0.8 ? "bg-emerald-500" : f >= 0.5 ? "bg-amber-400" : "bg-rose-500"}`} style={{ width: `${Math.max(4, f * 100)}%` }} />
                </div>
                <span className="w-12 text-right text-sm font-semibold text-slate-600">
                  {x}/{y}
                </span>
                {f < 0.8 && (
                  <Link href={sectionHref(sid)} className="text-xs font-semibold text-indigo-600 hover:underline">
                    revise
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {wrong.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 font-extrabold text-slate-900">Look again at these ({wrong.length})</h2>
          <ul className="space-y-2">
            {wrong.map(({ it, i, s }) => (
              <li key={it.q.id}>
                <button onClick={() => onReview(i)} className="flex w-full items-start gap-3 rounded-xl border border-slate-200 p-3 text-left hover:border-indigo-300 hover:bg-indigo-50/40">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${s === "part" ? "bg-amber-400" : "bg-rose-500"}`}>{i + 1}</span>
                  <span className="text-sm text-slate-700">{it.q.question}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
