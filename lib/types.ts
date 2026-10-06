// Core data model for the Acids & Alkalis + Animal Nutrition test-prep app.
// Content is authored as typed modules so every answer key is type-checked at build time.

export type TopicId = "aa" | "an";
export type Difficulty = "warmup" | "core" | "challenge";

/** Guide section ids. Every question points at one of these (its `section`). */
export type SectionId =
  // Acids & Alkalis
  | "aa-everyday" // acids & alkalis around us, lab acids/alkalis, bases vs alkalis
  | "aa-hazards" // hazard symbols, hazard vs risk, dilute vs concentrated, precautions
  | "aa-indicators" // litmus, making/evaluating indicators (red cabbage)
  | "aa-ph" // universal indicator and the pH scale
  | "aa-neutralisation" // acid + alkali -> salt + water, making a neutral solution, evaporating
  | "aa-salts" // naming salts, word equations, reactants/products
  | "aa-uses" // everyday neutralisation: indigestion, soil, stings, toothpaste, lakes
  | "aa-investigation" // investigating indigestion remedies: variables, results tables, means, anomalies
  // Animal Nutrition
  | "an-nutrients" // the seven nutrients and their jobs
  | "an-diet" // balanced diet, energy needs, malnutrition, deficiency, obesity, dehydration
  | "an-food-tests" // iodine, Benedict's, biuret, ethanol emulsion
  | "an-system" // organs of the digestive system and the journey of food
  | "an-enzymes" // carbohydrase/amylase, protease, lipase; what they make; where they work
  | "an-bile" // liver, gall bladder, bile & emulsification, pancreas
  | "an-absorption"; // small intestine, villi, capillaries, large intestine

/** Optional data table shown with a question (results tables, nutrition labels...). */
export interface DataTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

/** A labelled figure drawn by the app (see components/Figures.tsx). */
export type FigureKey = "digestive-lettered" | "digestive-named" | "villus" | "ph-scale";

/** Multiple-choice question. */
export interface MCQ {
  /** Globally unique, e.g. "s1-q07". */
  id: string;
  topic: TopicId;
  /** Guide section this question tests (deep-link "Revise this"). */
  section: SectionId;
  difficulty: Difficulty;
  question: string;
  /** Optional data table to read before answering. */
  table?: DataTable;
  /** Optional app-drawn figure, e.g. the lettered digestive system. */
  figure?: FigureKey;
  /** Exactly 4 options. */
  options: string[];
  /** Index into options of the single correct answer. */
  answerIndex: number;
  /**
   * One entry per option, same order as `options`.
   * Correct option: why it is right (short). Wrong options: why that option is
   * tempting and exactly why it is wrong — shown when the learner picks it.
   */
  optionFeedback: string[];
  /** The teaching explanation shown after answering (the key idea, in full). */
  explanation: string;
  /** Hint ladder, gentlest first. Never gives the answer away outright. */
  hints: string[];
  /** Named exam strategy, e.g. "Use the pH scale". */
  strategy?: string;
}

/** One credit-worthy point in a written-answer mark scheme. */
export interface MarkPoint {
  /** What earns the mark, e.g. "Evaporates the water to leave salt crystals". */
  point: string;
  /**
   * Phrases that show the point was made (lower case). The point is credited if
   * ANY phrase matches. Inside a phrase, "+" joins words that must ALL appear
   * somewhere in the answer (any order), e.g. "sodium+chloride".
   * Matching forgives small spelling slips and UK/US spellings.
   */
  keywords: string[];
  /** Teaching feedback shown if this point is missing from the answer. */
  feedback: string;
}

/** Written (question-and-answer) question, auto-marked against the mark scheme. */
export interface QA {
  /** Globally unique, e.g. "w1-q03". */
  id: string;
  topic: TopicId;
  section: SectionId;
  difficulty: Difficulty;
  question: string;
  table?: DataTable;
  figure?: FigureKey;
  /** Marks available — must equal markScheme.length. */
  marks: number;
  hints: string[];
  /** A full-mark model answer. */
  modelAnswer: string;
  markScheme: MarkPoint[];
  /** The mistake students most often make on this question. */
  commonError: string;
  strategy?: string;
}

export interface QuestionSet<Q> {
  /** e.g. "mcq-1" or "written-1". */
  id: string;
  title: string;
  subtitle: string;
  topic: TopicId | "mixed";
  questions: Q[];
}

/** A section of the revision guide. */
export interface GuideSection {
  id: SectionId;
  topic: TopicId;
  /** Which lesson on the school cover sheet / knowledge organiser this matches. */
  lesson: string;
  heading: string;
  /** AoPS-style opener: a puzzle to think about before reading. */
  discovery: { problem: string; idea: string };
  /** Markdown-lite body: **bold**, *italic*, blank-line paragraphs, "- " bullets. */
  body: string;
  /** Optional inline SVG diagram (backtick string, no backticks or "${" inside). */
  diagram?: string;
  diagramCaption?: string;
  /** Optional app-drawn figure instead of / as well as `diagram`. */
  figure?: FigureKey;
  keyPoints: string[];
  /** "Why does this work?" — the reason behind the rule. */
  whyItWorks: string;
  /** A memory trick, if a good one exists. */
  memoryTrick?: string;
  /** The mistake that loses marks in tests. */
  examTip: string;
  /** A reasoning question to stretch thinking. */
  thinkDeeper: string;
}

/** A glossary flashcard from the school's own word lists. */
export interface GlossaryCard {
  topic: TopicId;
  term: string;
  definition: string;
  /** Optional example or pronunciation help. */
  example?: string;
}
