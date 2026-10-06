"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

// All progress lives in this browser (localStorage) — no login needed, so the
// link can simply be opened and used. The share button sends a summary to a parent.

const KEY = "aa-an-test-prep-v1";

export interface SetAttempt {
  /** mcq: chosen option index (authored index); qa: the typed answer */
  answers: Record<string, number | string>;
  /** qa: final credited mark points (after any honest corrections) */
  qaPoints: Record<string, boolean[]>;
  /** number of hints revealed per question */
  hintsUsed: Record<string, number>;
  index: number;
  completed: boolean;
  startedAt: number;
  updatedAt: number;
}

export interface QuestionStat {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
  /** 0..1 — last score (1/0 for MCQs, fraction of marks for written) */
  lastScore: number;
  lastAt: number;
}

export interface Finished {
  setId: string;
  correct: number;
  total: number;
  pct: number;
  at: number;
}

export interface Progress {
  version: 1;
  name: string;
  attempts: Record<string, SetAttempt>;
  best: Record<string, Finished>;
  history: Finished[];
  stats: Record<string, QuestionStat>;
  /** question id → open (true) or fixed (false) */
  mistakes: Record<string, boolean>;
  stars: number;
  awarded: Record<string, true>;
  guidesRead: Record<string, true>;
  cards: Record<string, "known" | "learning">;
  plan: Record<string, true>;
  /** yyyy-mm-dd → answers given that day */
  days: Record<string, number>;
}

const EMPTY: Progress = {
  version: 1,
  name: "",
  attempts: {},
  best: {},
  history: [],
  stats: {},
  mistakes: {},
  stars: 0,
  awarded: {},
  guidesRead: {},
  cards: {},
  plan: {},
  days: {},
};

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function load(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return { ...EMPTY, ...parsed, version: 1 };
  } catch {
    return EMPTY;
  }
}

export const RANKS: { min: number; title: string; emoji: string }[] = [
  { min: 0, title: "Lab Rookie", emoji: "🧪" },
  { min: 40, title: "Litmus Learner", emoji: "📄" },
  { min: 100, title: "pH Pro", emoji: "🌈" },
  { min: 180, title: "Enzyme Expert", emoji: "✂️" },
  { min: 280, title: "Neutralisation Ninja", emoji: "🥷" },
  { min: 400, title: "Science Champion", emoji: "🏆" },
];

export function rankFor(stars: number) {
  let r = RANKS[0];
  for (const x of RANKS) if (stars >= x.min) r = x;
  const next = RANKS.find((x) => x.min > stars);
  return { ...r, next };
}

interface Store {
  ready: boolean;
  p: Progress;
  setName: (name: string) => void;
  getAttempt: (setId: string) => SetAttempt | undefined;
  saveAttempt: (setId: string, a: SetAttempt) => void;
  resetAttempt: (setId: string) => void;
  /** Record a marked answer. score is 0..1; "good" means it counts as right. */
  recordAnswer: (qid: string, score: number, good: boolean) => void;
  /** Correct the last recorded result (e.g. after an honest written-answer override). */
  adjustAnswer: (qid: string, score: number, good: boolean) => void;
  award: (key: string, stars: number) => void;
  finishSet: (f: Finished) => void;
  markGuideRead: (sectionId: string, read?: boolean) => void;
  setCard: (term: string, state: "known" | "learning") => void;
  togglePlan: (key: string) => void;
  resetAll: () => void;
}

const Ctx = createContext<Store | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [p, setP] = useState<Progress>(EMPTY);
  const [ready, setReady] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latest = useRef<Progress>(EMPTY);

  useEffect(() => {
    const loaded = load();
    latest.current = loaded;
    setP(loaded);
    setReady(true);
    const flush = () => {
      try {
        window.localStorage.setItem(KEY, JSON.stringify(latest.current));
      } catch {
        /* storage full or blocked — progress just won't persist */
      }
    };
    window.addEventListener("pagehide", flush);
    return () => window.removeEventListener("pagehide", flush);
  }, []);

  const update = useCallback((fn: (prev: Progress) => Progress) => {
    setP((prev) => {
      const next = fn(prev);
      latest.current = next;
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        try {
          window.localStorage.setItem(KEY, JSON.stringify(latest.current));
        } catch {
          /* ignore */
        }
      }, 250);
      return next;
    });
  }, []);

  const store = useMemo<Store>(
    () => ({
      ready,
      p,
      setName: (name) => update((s) => ({ ...s, name: name.slice(0, 40) })),
      getAttempt: (setId) => latest.current.attempts[setId],
      saveAttempt: (setId, a) => update((s) => ({ ...s, attempts: { ...s.attempts, [setId]: a } })),
      resetAttempt: (setId) =>
        update((s) => {
          const attempts = { ...s.attempts };
          delete attempts[setId];
          // allow stars to be earned again on a fresh attempt
          const awarded = Object.fromEntries(
            Object.entries(s.awarded).filter(([k]) => !k.startsWith(`${setId}:`)),
          ) as Record<string, true>;
          return { ...s, attempts, awarded };
        }),
      recordAnswer: (qid, score, good) =>
        update((s) => {
          const prev = s.stats[qid];
          const stat: QuestionStat = {
            attempts: (prev?.attempts ?? 0) + 1,
            correct: (prev?.correct ?? 0) + (good ? 1 : 0),
            lastCorrect: good,
            lastScore: score,
            lastAt: Date.now(),
          };
          const mistakes = { ...s.mistakes };
          if (!good) mistakes[qid] = true;
          else if (qid in mistakes) mistakes[qid] = false;
          const day = todayKey();
          return {
            ...s,
            stats: { ...s.stats, [qid]: stat },
            mistakes,
            days: { ...s.days, [day]: (s.days[day] ?? 0) + 1 },
          };
        }),
      adjustAnswer: (qid, score, good) =>
        update((s) => {
          const prev = s.stats[qid];
          if (!prev) return s;
          const stat: QuestionStat = {
            ...prev,
            correct: Math.max(0, prev.correct + (good ? 1 : 0) - (prev.lastCorrect ? 1 : 0)),
            lastCorrect: good,
            lastScore: score,
          };
          const mistakes = { ...s.mistakes };
          if (!good) mistakes[qid] = true;
          else if (qid in mistakes) mistakes[qid] = false;
          return { ...s, stats: { ...s.stats, [qid]: stat }, mistakes };
        }),
      award: (key, stars) =>
        update((s) => (s.awarded[key] || stars <= 0 ? s : { ...s, stars: s.stars + stars, awarded: { ...s.awarded, [key]: true } })),
      finishSet: (f) =>
        update((s) => {
          const prevBest = s.best[f.setId];
          const best = !prevBest || f.pct >= prevBest.pct ? f : prevBest;
          return { ...s, best: { ...s.best, [f.setId]: best }, history: [...s.history, f].slice(-60) };
        }),
      markGuideRead: (sectionId, read = true) =>
        update((s) => {
          const guidesRead = { ...s.guidesRead };
          if (read) guidesRead[sectionId] = true;
          else delete guidesRead[sectionId];
          return { ...s, guidesRead };
        }),
      setCard: (term, state) => update((s) => ({ ...s, cards: { ...s.cards, [term]: state } })),
      togglePlan: (key) =>
        update((s) => {
          const plan = { ...s.plan };
          if (plan[key]) delete plan[key];
          else plan[key] = true;
          return { ...s, plan };
        }),
      resetAll: () => update(() => ({ ...EMPTY })),
    }),
    [p, ready, update],
  );

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore must be used inside <ProgressProvider>");
  return s;
}

/** Days in a row (ending today or yesterday) with at least one answer. */
export function streak(days: Record<string, number>): number {
  let n = 0;
  const d = new Date();
  if (!days[todayKey(d)]) d.setDate(d.getDate() - 1);
  while (days[todayKey(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
