"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { ALL_SETS } from "@/lib/content";
import { TOPICS } from "@/lib/sections";

export default function BankPage() {
  const { p, ready } = useStore();
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">📝 Question bank</h1>
        <p className="mt-1 text-slate-600">
          4 multiple-choice sets of 25 and 2 written sets of 10. Every answer is marked instantly with a full explanation — and anything you get wrong goes on your Mistakes list.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {ALL_SETS.map(({ kind, set }) => {
          const best = p.best[set.id];
          const att = p.attempts[set.id];
          const answered = att ? Object.keys(att.answers).length : 0;
          const inProgress = ready && att && !att.completed && answered > 0;
          const tag = set.topic === "mixed" ? "Both topics" : TOPICS[set.topic].title;
          const counts = {
            warmup: set.questions.filter((q) => q.difficulty === "warmup").length,
            core: set.questions.filter((q) => q.difficulty === "core").length,
            challenge: set.questions.filter((q) => q.difficulty === "challenge").length,
          };
          return (
            <Link
              key={set.id}
              href={`/set/${set.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${kind === "mcq" ? "bg-indigo-50 text-indigo-700" : "bg-fuchsia-50 text-fuchsia-700"}`}>
                  {kind === "mcq" ? `Multiple choice · ${set.questions.length}` : `Written answers · ${set.questions.length}`}
                </span>
                <span className="text-xs font-semibold text-slate-500">{tag}</span>
              </div>
              <h2 className="mt-2 text-lg font-extrabold text-slate-900 group-hover:text-indigo-700">{set.title}</h2>
              <p className="text-sm text-slate-600">{set.subtitle}</p>
              <p className="mt-2 text-xs text-slate-500">
                {counts.warmup} warm-up · {counts.core} core · {counts.challenge} challenge
                {kind === "qa" && ` · ${set.questions.reduce((s, q) => s + ("marks" in q ? q.marks : 0), 0)} marks`}
              </p>
              <div className="mt-3 flex items-center justify-between">
                {ready && best ? (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-bold text-emerald-700">Best: {best.pct}%</span>
                ) : inProgress ? (
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-sm font-bold text-amber-700">
                    In progress · {answered}/{set.questions.length}
                  </span>
                ) : (
                  <span className="text-sm text-slate-400">Not started</span>
                )}
                <span className="font-bold text-indigo-600">{inProgress ? "Resume →" : best ? "Open →" : "Start →"}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
        <p className="font-bold text-slate-800">How marking works</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Multiple choice: pick an answer and press <strong>Check</strong>. If it’s wrong you’ll see why your choice was wrong, the right answer, and the key idea.</li>
          <li>Written: type your answer and press <strong>Mark my answer</strong>. Each mark-scheme point is ticked or crossed, with what you needed for any point you missed, plus a full-marks model answer.</li>
          <li>Hints cost a star, so try first! ⭐ 3 stars for a right answer with no hints.</li>
        </ul>
      </div>
    </div>
  );
}
