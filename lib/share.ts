import type { Progress } from "./store";
import { ALL_SETS, ALL_QUESTIONS } from "./content";
import { SECTIONS } from "./sections";

export interface SectionMastery {
  id: string;
  label: string;
  topic: string;
  answered: number;
  total: number;
  /** average last score over answered questions, 0..1 (NaN if none answered) */
  score: number;
}

export function sectionMastery(p: Progress): SectionMastery[] {
  return SECTIONS.map((s) => {
    const qs = ALL_QUESTIONS.filter((x) => x.q.section === s.id);
    const answered = qs.filter((x) => p.stats[x.q.id]);
    const score = answered.length
      ? answered.reduce((sum, x) => sum + (p.stats[x.q.id]?.lastScore ?? 0), 0) / answered.length
      : NaN;
    return { id: s.id, label: s.label, topic: s.topic, answered: answered.length, total: qs.length, score };
  });
}

export function openMistakes(p: Progress): string[] {
  return Object.entries(p.mistakes)
    .filter(([id, open]) => open && ALL_QUESTIONS.some((x) => x.q.id === id))
    .map(([id]) => id);
}

export function shareText(p: Progress): string {
  const who = p.name ? `${p.name}'s` : "My";
  const lines = [`📚 ${who} science test prep — Acids & Alkalis + Animal Nutrition`];
  for (const { set } of ALL_SETS) {
    const best = p.best[set.id];
    const att = p.attempts[set.id];
    if (best) lines.push(`✅ ${set.title}: best ${best.correct}/${best.total} (${best.pct}%)`);
    else if (att) {
      const n = Object.keys(att.answers).length;
      lines.push(`⏳ ${set.title}: in progress (${n}/${set.questions.length})`);
    } else lines.push(`⬜ ${set.title}: not started`);
  }
  const m = sectionMastery(p).filter((s) => s.answered >= 2 && !Number.isNaN(s.score));
  const weak = [...m].sort((a, b) => a.score - b.score).slice(0, 3).filter((s) => s.score < 0.8);
  if (weak.length) lines.push(`🎯 Needs work: ${weak.map((s) => `${s.label} (${Math.round(s.score * 100)}%)`).join(", ")}`);
  const strong = m.filter((s) => s.score >= 0.9 && s.answered >= 3).map((s) => s.label);
  if (strong.length) lines.push(`💪 Strong: ${strong.slice(0, 4).join(", ")}`);
  lines.push(`🔁 Mistakes still to fix: ${openMistakes(p).length}`);
  lines.push(`⭐ Stars: ${p.stars}`);
  return lines.join("\n");
}
