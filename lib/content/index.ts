import type { GuideSection, MCQ, QA, QuestionSet, SectionId, TopicId } from "../types";
import { MCQ_SET_1 } from "./mcq-set1";
import { MCQ_SET_2 } from "./mcq-set2";
import { MCQ_SET_3 } from "./mcq-set3";
import { MCQ_SET_4 } from "./mcq-set4";
import { QA_SET_1 } from "./qa-set1";
import { QA_SET_2 } from "./qa-set2";
import { GUIDE_AA } from "./guide-aa";
import { GUIDE_AN } from "./guide-an";

export const MCQ_SETS: QuestionSet<MCQ>[] = [MCQ_SET_1, MCQ_SET_2, MCQ_SET_3, MCQ_SET_4];
export const QA_SETS: QuestionSet<QA>[] = [QA_SET_1, QA_SET_2];

export type AnySet = { kind: "mcq"; set: QuestionSet<MCQ> } | { kind: "qa"; set: QuestionSet<QA> };

export const ALL_SETS: AnySet[] = [
  ...MCQ_SETS.map((set) => ({ kind: "mcq" as const, set })),
  ...QA_SETS.map((set) => ({ kind: "qa" as const, set })),
];

export function getSet(id: string): AnySet | undefined {
  return ALL_SETS.find((s) => s.set.id === id);
}

export const GUIDES: Record<TopicId, GuideSection[]> = { aa: GUIDE_AA, an: GUIDE_AN };

export function guideSection(id: SectionId | string): GuideSection | undefined {
  return [...GUIDE_AA, ...GUIDE_AN].find((s) => s.id === id);
}

export interface IndexedQuestion {
  kind: "mcq" | "qa";
  q: MCQ | QA;
  setId: string;
  setTitle: string;
  number: number;
}

function build(): Record<string, IndexedQuestion> {
  const idx: Record<string, IndexedQuestion> = {};
  for (const { kind, set } of ALL_SETS) {
    set.questions.forEach((q, i) => {
      idx[q.id] = { kind, q, setId: set.id, setTitle: set.title, number: i + 1 };
    });
  }
  return idx;
}

export const QUESTION_INDEX: Record<string, IndexedQuestion> = build();

export function lookup(qid: string): IndexedQuestion | undefined {
  return QUESTION_INDEX[qid];
}

/** Every question, for per-section mastery and practice-by-section. */
export const ALL_QUESTIONS: IndexedQuestion[] = Object.values(QUESTION_INDEX);

export function questionsForSection(section: string): IndexedQuestion[] {
  return ALL_QUESTIONS.filter((x) => x.q.section === section);
}
