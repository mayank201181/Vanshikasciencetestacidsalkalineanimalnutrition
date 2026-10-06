import type { SectionId, TopicId } from "./types";

export const TOPICS: Record<TopicId, { title: string; short: string; emoji: string; color: string }> = {
  aa: { title: "Acids & Alkalis", short: "Acids", emoji: "🧪", color: "#e11d48" },
  an: { title: "Animal Nutrition", short: "Nutrition", emoji: "🍎", color: "#059669" },
};

export const SECTIONS: { id: SectionId; topic: TopicId; label: string; emoji: string }[] = [
  { id: "aa-everyday", topic: "aa", label: "Acids & alkalis around us", emoji: "🍋" },
  { id: "aa-hazards", topic: "aa", label: "Hazards & safety", emoji: "⚠️" },
  { id: "aa-indicators", topic: "aa", label: "Indicators & litmus", emoji: "📄" },
  { id: "aa-ph", topic: "aa", label: "pH scale & universal indicator", emoji: "🌈" },
  { id: "aa-neutralisation", topic: "aa", label: "Neutralisation", emoji: "⚖️" },
  { id: "aa-salts", topic: "aa", label: "Naming salts & word equations", emoji: "🧂" },
  { id: "aa-uses", topic: "aa", label: "Everyday neutralisation", emoji: "🐝" },
  { id: "aa-investigation", topic: "aa", label: "Investigating indigestion", emoji: "📊" },
  { id: "an-nutrients", topic: "an", label: "The seven nutrients", emoji: "🥗" },
  { id: "an-diet", topic: "an", label: "Balanced diet & health", emoji: "⚖️" },
  { id: "an-food-tests", topic: "an", label: "Food tests", emoji: "🧫" },
  { id: "an-system", topic: "an", label: "Digestive system", emoji: "🫃" },
  { id: "an-enzymes", topic: "an", label: "Enzymes", emoji: "✂️" },
  { id: "an-bile", topic: "an", label: "Liver, bile & pancreas", emoji: "🟢" },
  { id: "an-absorption", topic: "an", label: "Absorption & villi", emoji: "🧽" },
];

export function sectionMeta(id: string) {
  return SECTIONS.find((s) => s.id === id);
}

export function sectionHref(id: string) {
  const s = sectionMeta(id);
  return s ? `/guide/${s.topic}#${s.id}` : "/guide/aa";
}

export const DIFFICULTY_META = {
  warmup: { label: "Warm-up", className: "bg-sky-100 text-sky-800" },
  core: { label: "Core", className: "bg-violet-100 text-violet-800" },
  challenge: { label: "Challenge", className: "bg-amber-100 text-amber-900" },
} as const;

/** Test date: Thursday 8 October 2026. */
export const TEST_DATE = "2026-10-08";
