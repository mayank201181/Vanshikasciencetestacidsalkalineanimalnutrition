"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { lookup } from "@/lib/content";
import { openMistakes } from "@/lib/share";
import { Runner, type RunItem } from "@/components/Runner";

export default function ReviewPage() {
  const { p, ready } = useStore();
  const [run, setRun] = useState<{ ids: string[]; key: number } | null>(null);
  const [filter, setFilter] = useState<"all" | "aa" | "an">("all");

  const open = useMemo(() => (ready ? openMistakes(p) : []), [p, ready]);
  const fixed = useMemo(() => Object.values(p.mistakes).filter((v) => v === false).length, [p.mistakes]);
  const filtered = open.filter((id) => filter === "all" || lookup(id)?.q.topic === filter);

  if (run) {
    const items: RunItem[] = run.ids
      .map((id) => lookup(id))
      .filter(Boolean)
      .map((x) => (x!.kind === "mcq" ? { kind: "mcq" as const, q: x!.q as never } : { kind: "qa" as const, q: x!.q as never }));
    return (
      <div className="space-y-3">
        <button onClick={() => setRun(null)} className="text-sm font-semibold text-indigo-600 hover:underline">
          ← Back to Mistakes
        </button>
        <Runner key={run.key} mode="drill" runId={`review-${run.key}`} title="🔁 Fix my mistakes" subtitle="Get it right this time and it comes off your list." items={items} backHref="/review" backLabel="🔁 Mistakes list" />
      </div>
    );
  }

  if (!ready) return <div className="h-64 animate-pulse rounded-2xl bg-white" />;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">🔁 Mistakes list</h1>
        <p className="mt-1 text-slate-600">Every question you got wrong lands here. Answer it correctly and it comes off the list (+ stars). This is the fastest way to gain marks before Thursday.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3">
          <div className="text-2xl font-extrabold text-rose-600">{open.length}</div>
          <div className="text-xs font-semibold text-rose-700">still to fix</div>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
          <div className="text-2xl font-extrabold text-emerald-600">{fixed}</div>
          <div className="text-xs font-semibold text-emerald-700">fixed</div>
        </div>
        <div className="ml-auto flex gap-1 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
          {(["all", "aa", "an"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-lg px-3 py-1.5 ${filter === f ? "bg-white text-slate-900 shadow" : "text-slate-500"}`}>
              {f === "all" ? "All" : f === "aa" ? "Acids" : "Nutrition"}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <div className="text-5xl">{Object.keys(p.stats).length ? "🎉" : "📝"}</div>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900">{Object.keys(p.stats).length ? "Nothing to fix here!" : "No mistakes yet"}</h2>
          <p className="mt-1 text-slate-600">
            {Object.keys(p.stats).length ? "Brilliant. Try another set to find any weak spots." : "Do a question set first — anything you get wrong will show up here."}
          </p>
          <Link href="/bank" className="mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white">
            📝 Question bank
          </Link>
        </div>
      ) : (
        <>
          <button
            onClick={() => setRun({ ids: filtered, key: Date.now() })}
            className="w-full rounded-2xl bg-rose-600 px-5 py-4 text-lg font-extrabold text-white shadow hover:bg-rose-700 sm:w-auto"
          >
            Fix {filtered.length} mistake{filtered.length === 1 ? "" : "s"} now →
          </button>
          <ul className="space-y-2">
            {filtered.map((id) => {
              const x = lookup(id)!;
              return (
                <li key={id} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-xs font-semibold text-slate-500">
                    {x.setTitle} · Q{x.number}
                  </div>
                  <div className="text-sm text-slate-800">{x.q.question}</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
