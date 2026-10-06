"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore, rankFor, todayKey, type Progress } from "@/lib/store";
import { ALL_SETS, ALL_QUESTIONS, GUIDES } from "@/lib/content";
import { TEST_DATE, TOPICS } from "@/lib/sections";
import { openMistakes, sectionMastery } from "@/lib/share";
import { ShareButton } from "@/components/ShareButton";

type Task = { key: string; label: string; href: string; done?: (p: Progress) => boolean };

const guideDone = (topic: "aa" | "an") => (p: Progress) => GUIDES[topic].length > 0 && GUIDES[topic].every((s) => p.guidesRead[s.id]);
const setDone = (id: string) => (p: Progress) => !!p.best[id];

const PLAN: { day: string; title: string; tasks: Task[] }[] = [
  {
    day: "2026-10-06",
    title: "Tuesday — learn it",
    tasks: [
      { key: "guide-aa", label: "Read the Acids & Alkalis guide (≈15 min)", href: "/guide/aa", done: guideDone("aa") },
      { key: "mcq-1", label: "Set 1 · Acids & Alkalis — 25 questions", href: "/set/mcq-1", done: setDone("mcq-1") },
      { key: "guide-an", label: "Read the Animal Nutrition guide (≈15 min)", href: "/guide/an", done: guideDone("an") },
      { key: "mcq-2", label: "Set 2 · Animal Nutrition — 25 questions", href: "/set/mcq-2", done: setDone("mcq-2") },
    ],
  },
  {
    day: "2026-10-07",
    title: "Wednesday — test yourself",
    tasks: [
      { key: "mcq-3", label: "Set 3 · Mixed mock A — 25 questions", href: "/set/mcq-3", done: setDone("mcq-3") },
      { key: "written-1", label: "Written 1 · Core answers — 10 questions", href: "/set/written-1", done: setDone("written-1") },
      { key: "mcq-4", label: "Set 4 · Mixed mock B (stretch) — 25 questions", href: "/set/mcq-4", done: setDone("mcq-4") },
      { key: "written-2", label: "Written 2 · Exam-style — 10 questions", href: "/set/written-2", done: setDone("written-2") },
      { key: "fix", label: "Fix every mistake on your Mistakes list", href: "/review", done: (p) => Object.keys(p.best).length > 0 && openMistakes(p).length === 0 },
    ],
  },
  {
    day: "2026-10-08",
    title: "Thursday morning — sharpen up",
    tasks: [
      { key: "cram", label: "Read the cram sheet (10 min)", href: "/cram" },
      { key: "cards", label: "Flashcards — just the ‘still learning’ pile", href: "/flashcards" },
      { key: "last", label: "One last pass through any mistakes", href: "/review" },
    ],
  },
];

function daysUntil(dateIso: string) {
  const [y, m, d] = dateIso.split("-").map(Number);
  const test = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((test.getTime() - today.getTime()) / 86400000);
}

export default function Home() {
  const { p, ready, setName, togglePlan } = useStore();
  const [nameDraft, setNameDraft] = useState("");
  const d = daysUntil(TEST_DATE);
  const countdown =
    d > 1 ? `${d} days to go` : d === 1 ? "Test is TOMORROW" : d === 0 ? "Test day — good luck! 🍀" : "Test done — well done!";

  const answered = ALL_QUESTIONS.filter((x) => p.stats[x.q.id]).length;
  const scored = ALL_QUESTIONS.map((x) => p.stats[x.q.id]).filter(Boolean);
  const accuracy = scored.length ? Math.round((scored.reduce((s, x) => s + (x?.lastScore ?? 0), 0) / scored.length) * 100) : null;
  const mistakes = openMistakes(p).length;
  const rank = rankFor(p.stars);
  const mastery = sectionMastery(p);
  const today = todayKey();

  return (
    <div className="space-y-6">
      {/* hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Year 8 Science · Progress check</p>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
              {ready && p.name ? `Hi ${p.name}! 👋` : "Ready to ace Thursday? 👋"}
            </h1>
            <p className="mt-2 max-w-xl text-white/90">
              <strong>Acids &amp; Alkalis</strong> + <strong>Animal Nutrition</strong>: 100 multiple-choice questions, 20 written questions marked instantly, a revision guide for every lesson, flashcards from your school glossary and hands-on labs.
            </p>
          </div>
          <div className="rounded-2xl bg-white/15 px-4 py-3 text-center backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/80">Thursday 8 Oct</div>
            <div className="text-xl font-extrabold">{countdown}</div>
          </div>
        </div>
        {ready && !p.name && (
          <form
            className="mt-5 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (nameDraft.trim()) setName(nameDraft.trim());
            }}
          >
            <input
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              placeholder="What's your first name?"
              className="min-w-0 flex-1 rounded-xl border-0 bg-white px-3 py-2 text-slate-900 outline-none ring-2 ring-white/40 placeholder:text-slate-400 focus:ring-white"
            />
            <button className="rounded-xl bg-white px-4 py-2 font-bold text-indigo-700">Save</button>
          </form>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/bank" className="rounded-xl bg-white px-4 py-2.5 font-bold text-indigo-700 shadow hover:bg-indigo-50">
            📝 Start practising
          </Link>
          <Link href="/guide/aa" className="rounded-xl bg-white/15 px-4 py-2.5 font-semibold text-white ring-1 ring-white/40 hover:bg-white/25">
            📖 Revise first
          </Link>
        </div>
      </section>

      {/* stats */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Questions done" value={`${answered}/${ALL_QUESTIONS.length}`} />
        <Stat label="Accuracy" value={accuracy === null ? "—" : `${accuracy}%`} />
        <Link href="/review" className="block">
          <Stat label="Mistakes to fix" value={String(mistakes)} tone={mistakes ? "rose" : "emerald"} />
        </Link>
        <Stat label={rank.next ? `${rank.next.min - p.stars} ⭐ to ${rank.next.title}` : "Top rank!"} value={`${rank.emoji} ${p.stars}⭐`} />
      </section>

      {/* plan */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold text-slate-900">🗓️ Your 3-day plan</h2>
          <span className="text-xs text-slate-500">Ticks itself as you finish things — or tap to tick.</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {PLAN.map((day) => {
            const isToday = day.day === today;
            return (
              <div key={day.day} className={`rounded-xl border p-3 ${isToday ? "border-indigo-400 bg-indigo-50/60 ring-2 ring-indigo-200" : "border-slate-200"}`}>
                <p className="mb-2 text-sm font-extrabold text-slate-800">
                  {day.title} {isToday && <span className="ml-1 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">TODAY</span>}
                </p>
                <ul className="space-y-1.5">
                  {day.tasks.map((t) => {
                    const auto = ready && t.done ? t.done(p) : false;
                    const done = auto || !!p.plan[t.key];
                    return (
                      <li key={t.key} className="flex items-start gap-2">
                        <button
                          onClick={() => togglePlan(t.key)}
                          disabled={auto}
                          aria-label={done ? "Mark not done" : "Mark done"}
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border text-xs ${done ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white"}`}
                        >
                          {done ? "✓" : ""}
                        </button>
                        <Link href={t.href} className={`text-sm hover:text-indigo-700 hover:underline ${done ? "text-slate-400 line-through" : "text-slate-700"}`}>
                          {t.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* topics */}
      <section className="grid gap-4 md:grid-cols-2">
        {(["aa", "an"] as const).map((t) => {
          const topic = TOPICS[t];
          const sets = ALL_SETS.filter((s) => s.set.topic === t || s.set.topic === "mixed");
          return (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-2xl" style={{ background: `${topic.color}18` }}>
                  {topic.emoji}
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900">{topic.title}</h2>
                  <p className="text-sm text-slate-500">{GUIDES[t].length} guide sections · {ALL_QUESTIONS.filter((x) => x.q.topic === t).length} questions</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {mastery
                  .filter((m) => m.topic === t)
                  .map((m) => (
                    <li key={m.id}>
                      <Link href={`/practice/${m.id}`} className="flex items-center gap-2 rounded-lg px-1 py-0.5 hover:bg-slate-50">
                        <span className="w-48 shrink-0 truncate text-sm text-slate-700">{m.label}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                          {m.answered > 0 && (
                            <div
                              className={`h-full rounded-full ${m.score >= 0.8 ? "bg-emerald-500" : m.score >= 0.5 ? "bg-amber-400" : "bg-rose-500"}`}
                              style={{ width: `${Math.max(6, m.score * 100)}%` }}
                            />
                          )}
                        </div>
                        <span className="w-14 text-right text-xs text-slate-500">
                          {m.answered ? `${Math.round(m.score * 100)}%` : `0/${m.total}`}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/guide/${t}`} className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
                  📖 Guide
                </Link>
                {sets
                  .filter((s) => s.set.topic === t)
                  .map((s) => (
                    <Link key={s.set.id} href={`/set/${s.set.id}`} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      {s.set.title.split(" · ")[0]}
                    </Link>
                  ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div>
          <h2 className="font-extrabold text-emerald-900">Show a grown-up how you&apos;re doing</h2>
          <p className="text-sm text-emerald-800">Sends your best score for every set, your weakest topics and how many mistakes are left.</p>
        </div>
        <ShareButton progress={p} />
      </section>
    </div>
  );
}

function Stat({ label, value, tone = "slate" }: { label: string; value: string; tone?: "slate" | "rose" | "emerald" }) {
  const color = tone === "rose" ? "text-rose-600" : tone === "emerald" ? "text-emerald-600" : "text-slate-900";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className={`text-2xl font-extrabold ${color}`}>{value}</div>
      <div className="text-xs font-semibold text-slate-500">{label}</div>
    </div>
  );
}
