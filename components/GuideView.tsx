"use client";

import Link from "next/link";
import { useState } from "react";
import type { GuideSection, TopicId } from "@/lib/types";
import { GUIDES, questionsForSection } from "@/lib/content";
import { TOPICS } from "@/lib/sections";
import { useStore } from "@/lib/store";
import { MarkdownLite } from "./MarkdownLite";
import { Figure } from "./Figures";
import { ListenButton } from "./ListenButton";

function plain(md: string) {
  return md.replace(/\*\*|\*|`/g, "").replace(/^\s*\|.*\|\s*$/gm, "").replace(/^- /gm, "");
}

export function GuideView({ topic }: { topic: TopicId }) {
  const sections = GUIDES[topic];
  const t = TOPICS[topic];
  const other: TopicId = topic === "aa" ? "an" : "aa";
  const { p, ready } = useStore();
  const readCount = sections.filter((s) => p.guidesRead[s.id]).length;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-bold uppercase tracking-wide" style={{ color: t.color }}>
          Revision guide
        </p>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {t.emoji} {t.title}
        </h1>
        <p className="mt-1 text-slate-600">
          One section per lesson on your cover sheet. Try each <strong>puzzle</strong> before reading, then tick the section when you&apos;ve got it.
          {ready && (
            <span className="ml-1 font-semibold text-slate-800">
              {readCount}/{sections.length} sections done.
            </span>
          )}
        </p>
        <nav className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-slate-50">
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${p.guidesRead[s.id] ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"}`}>
                {p.guidesRead[s.id] ? "✓" : i + 1}
              </span>
              <span className="text-slate-700">{s.heading}</span>
              <span className="ml-auto shrink-0 text-xs text-slate-400">{s.lesson}</span>
            </a>
          ))}
        </nav>
      </div>

      {sections.map((s, i) => (
        <SectionCard key={s.id} s={s} n={i + 1} />
      ))}

      <div className="flex flex-wrap justify-between gap-3">
        <Link href={`/guide/${other}`} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700">
          {TOPICS[other].emoji} {TOPICS[other].title} guide →
        </Link>
        <Link href="/bank" className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white">
          📝 Test yourself
        </Link>
      </div>
    </div>
  );
}

function SectionCard({ s, n }: { s: GuideSection; n: number }) {
  const { p, markGuideRead } = useStore();
  const [reveal, setReveal] = useState(false);
  const read = !!p.guidesRead[s.id];
  const count = questionsForSection(s.id).length;
  return (
    <section id={s.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Section {n} · {s.lesson}
          </p>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.heading}</h2>
        </div>
        <ListenButton getText={() => `${s.heading}. ${plain(s.body)} Key points. ${s.keyPoints.join(". ")}`} />
      </div>

      {/* discovery puzzle */}
      <div className="mt-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
        <p className="text-sm font-extrabold text-violet-800">🧩 Puzzle first</p>
        <p className="mt-1 text-violet-950">{s.discovery.problem}</p>
        {reveal ? (
          <p className="mt-2 rounded-xl bg-white/70 p-3 text-violet-950">
            <span className="font-bold">💡 </span>
            {s.discovery.idea}
          </p>
        ) : (
          <button onClick={() => setReveal(true)} className="mt-2 rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-semibold text-white">
            I&apos;ve had a think — show me
          </button>
        )}
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_minmax(0,420px)]">
        <MarkdownLite text={s.body} />
        <div className="space-y-3">
          {s.figure && (
            <figure className="diagram rounded-2xl border border-slate-100 bg-slate-50 p-2">
              <Figure figure={s.figure} />
            </figure>
          )}
          {s.diagram && (
            <figure className="rounded-2xl border border-slate-100 bg-slate-50 p-2">
              <div className="diagram" dangerouslySetInnerHTML={{ __html: s.diagram }} />
              {s.diagramCaption && <figcaption className="mt-1 px-1 text-center text-xs text-slate-500">{s.diagramCaption}</figcaption>}
            </figure>
          )}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-extrabold text-emerald-800">✅ Key points</p>
        <ul className="mt-1.5 space-y-1">
          {s.keyPoints.map((k, i) => (
            <li key={i} className="flex gap-2 text-emerald-950">
              <span>•</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <Callout tone="sky" title="🤔 Why does this work?" text={s.whyItWorks} />
        {s.memoryTrick && <Callout tone="fuchsia" title="🧠 Memory trick" text={s.memoryTrick} />}
        <Callout tone="amber" title="⚠️ Exam tip" text={s.examTip} />
        <Callout tone="slate" title="🚀 Think deeper" text={s.thinkDeeper} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={() => markGuideRead(s.id, !read)}
          className={`rounded-xl px-4 py-2 font-semibold ${read ? "bg-emerald-600 text-white" : "border border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50"}`}
        >
          {read ? "✓ Got it" : "Tick when you've got it"}
        </button>
        {count > 0 && (
          <Link href={`/practice/${s.id}`} className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
            Practise this section ({count} questions) →
          </Link>
        )}
      </div>
    </section>
  );
}

function Callout({ tone, title, text }: { tone: "sky" | "fuchsia" | "amber" | "slate"; title: string; text: string }) {
  const cls = {
    sky: "border-sky-200 bg-sky-50 text-sky-950",
    fuchsia: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    slate: "border-slate-200 bg-slate-50 text-slate-800",
  }[tone];
  return (
    <div className={`rounded-2xl border p-4 ${cls}`}>
      <p className="text-sm font-extrabold">{title}</p>
      <MarkdownLite text={text} className="mt-1 text-[0.95rem] !text-inherit" />
    </div>
  );
}
