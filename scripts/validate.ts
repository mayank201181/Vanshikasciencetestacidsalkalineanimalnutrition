// Structural + self-consistency checks for all authored content.
// Run: npm run validate   (node --experimental-strip-types scripts/validate.ts)
import { MCQ_SET_1 } from "../lib/content/mcq-set1.ts";
import { MCQ_SET_2 } from "../lib/content/mcq-set2.ts";
import { MCQ_SET_3 } from "../lib/content/mcq-set3.ts";
import { MCQ_SET_4 } from "../lib/content/mcq-set4.ts";
import { QA_SET_1 } from "../lib/content/qa-set1.ts";
import { QA_SET_2 } from "../lib/content/qa-set2.ts";
import { GUIDE_AA } from "../lib/content/guide-aa.ts";
import { GUIDE_AN } from "../lib/content/guide-an.ts";
import { gradeQA, tokens, keywordMatches } from "../lib/grade.ts";
import { SECTIONS } from "../lib/sections.ts";
import type { MCQ, QA, QuestionSet, GuideSection } from "../lib/types.ts";

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const SECTION_IDS = new Set(SECTIONS.map((s) => s.id));
const FIGURES = new Set(["digestive-lettered", "digestive-named", "villus", "ph-scale"]);
const ORDER = { warmup: 0, core: 1, challenge: 2 } as const;
const seen = new Set<string>();

function checkCommon(q: MCQ | QA, setTopic: string) {
  if (seen.has(q.id)) err(`${q.id}: duplicate id`);
  seen.add(q.id);
  if (!SECTION_IDS.has(q.section)) err(`${q.id}: unknown section ${q.section}`);
  if (!q.section.startsWith(`${q.topic}-`)) err(`${q.id}: topic ${q.topic} doesn't match section ${q.section}`);
  if (setTopic !== "mixed" && q.topic !== setTopic) err(`${q.id}: topic ${q.topic} in a ${setTopic} set`);
  if (!(q.difficulty in ORDER)) err(`${q.id}: bad difficulty`);
  if (q.figure && !FIGURES.has(q.figure)) err(`${q.id}: unknown figure ${q.figure}`);
  if (!q.question?.trim()) err(`${q.id}: empty question`);
  if (q.table) {
    const w = q.table.headers.length;
    q.table.rows.forEach((r, i) => r.length !== w && err(`${q.id}: table row ${i} has ${r.length} cells, expected ${w}`));
  }
}

function checkMcqSet(set: QuestionSet<MCQ>, prefix: string, n: number) {
  if (set.questions.length !== n) err(`${set.id}: ${set.questions.length} questions, expected ${n}`);
  const pos = [0, 0, 0, 0];
  let longest = 0;
  let last = 0;
  set.questions.forEach((q, i) => {
    const want = `${prefix}-q${String(i + 1).padStart(2, "0")}`;
    if (q.id !== want) err(`${set.id}[${i}]: id ${q.id}, expected ${want}`);
    checkCommon(q, set.topic);
    if (q.options.length !== 4) err(`${q.id}: ${q.options.length} options`);
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) err(`${q.id}: duplicate options`);
    if (!(q.answerIndex >= 0 && q.answerIndex < q.options.length)) err(`${q.id}: answerIndex ${q.answerIndex} out of range`);
    if (q.optionFeedback?.length !== q.options.length) err(`${q.id}: optionFeedback has ${q.optionFeedback?.length} entries`);
    q.optionFeedback?.forEach((f, j) => (!f || f.trim().length < 12) && err(`${q.id}: optionFeedback[${j}] too short`));
    if (!q.explanation || q.explanation.length < 60) err(`${q.id}: explanation too short`);
    const wantHints = q.difficulty === "warmup" ? 1 : q.difficulty === "core" ? 2 : 3;
    if (!q.hints?.length) err(`${q.id}: no hints`);
    else if (q.hints.length < wantHints) warn(`${q.id}: ${q.hints.length} hints (want ${wantHints} for ${q.difficulty})`);
    pos[q.answerIndex]++;
    const lens = q.options.map((o) => o.length);
    if (lens[q.answerIndex] === Math.max(...lens) && lens.filter((l) => l === Math.max(...lens)).length === 1) longest++;
    if (ORDER[q.difficulty] < last) warn(`${q.id}: difficulty goes down (${q.difficulty} after harder)`);
    last = ORDER[q.difficulty];
    // the correct option's own feedback must not read like a rejection
    const fb = q.optionFeedback?.[q.answerIndex] ?? "";
    if (/^(wrong|incorrect|no[,.]|not quite)/i.test(fb.trim())) err(`${q.id}: feedback for the CORRECT option reads like a rejection`);
    q.optionFeedback?.forEach((f, j) => {
      if (j !== q.answerIndex && /^(correct|yes|right)\b/i.test(f.trim())) err(`${q.id}: feedback for WRONG option ${j} reads like a confirmation`);
    });
  });
  const diff = { warmup: 0, core: 0, challenge: 0 };
  set.questions.forEach((q) => diff[q.difficulty]++);
  console.log(`${set.id}: answer positions ${pos.join("/")}, correct-is-longest ${longest}/${set.questions.length}, difficulty ${diff.warmup}/${diff.core}/${diff.challenge}`);
  if (longest > set.questions.length * 0.4) warn(`${set.id}: correct option is the longest in ${longest}/${set.questions.length} questions`);
}

function checkQaSet(set: QuestionSet<QA>, prefix: string, n: number) {
  if (set.questions.length !== n) err(`${set.id}: ${set.questions.length} questions, expected ${n}`);
  set.questions.forEach((q, i) => {
    const want = `${prefix}-q${String(i + 1).padStart(2, "0")}`;
    if (q.id !== want) err(`${set.id}[${i}]: id ${q.id}, expected ${want}`);
    checkCommon(q, set.topic);
    if (q.marks !== q.markScheme.length) err(`${q.id}: marks ${q.marks} != ${q.markScheme.length} points`);
    if ((q.hints?.length ?? 0) < 1) err(`${q.id}: no hints`);
    if (!q.commonError) err(`${q.id}: no commonError`);
    q.markScheme.forEach((mp, j) => {
      if (!mp.feedback || mp.feedback.length < 15) err(`${q.id} point ${j + 1}: feedback missing/short`);
      if (!mp.keywords.length) err(`${q.id} point ${j + 1}: no keywords`);
      mp.keywords.forEach((k) => k !== k.toLowerCase() && warn(`${q.id} point ${j + 1}: keyword not lower-case: "${k}"`));
    });
    // self-test 1: the model answer must earn every point
    const model = gradeQA(q, q.modelAnswer);
    model.credited.forEach((c, j) => !c && err(`${q.id}: MODEL ANSWER misses point ${j + 1} ("${q.markScheme[j].point}")`));
    // self-test 2: copying the question must earn nothing (error);
    // copying the data table too is only a warning — e.g. naming an anomalous value needs the number itself
    const stemText = q.question;
    const tableText = q.table ? q.table.headers.join(" ") + " " + q.table.rows.flat().join(" ") : "";
    gradeQA(q, stemText).credited.forEach((c, j) => {
      if (!c) return;
      const hits = q.markScheme[j].keywords.filter((k) => keywordMatches(tokens(stemText), k));
      err(`${q.id}: copying the QUESTION earns point ${j + 1} via ${JSON.stringify(hits)}`);
    });
    if (tableText) {
      gradeQA(q, stemText + " " + tableText).credited.forEach((c, j) => {
        if (!c) return;
        const hits = q.markScheme[j].keywords.filter((k) => keywordMatches(tokens(stemText + " " + tableText), k));
        warn(`${q.id}: copying the question + table earns point ${j + 1} via ${JSON.stringify(hits)}`);
      });
    }
  });
  console.log(`${set.id}: ${set.questions.length} questions, ${set.questions.reduce((s, q) => s + q.marks, 0)} marks`);
}

function checkGuide(g: GuideSection[], topic: "aa" | "an") {
  const want = SECTIONS.filter((s) => s.topic === topic).map((s) => s.id);
  const got = g.map((s) => s.id);
  if (JSON.stringify(want) !== JSON.stringify(got)) err(`guide-${topic}: section ids ${got.join(",")} != ${want.join(",")}`);
  g.forEach((s) => {
    if (s.topic !== topic) err(`${s.id}: topic ${s.topic}`);
    for (const f of ["heading", "lesson", "body", "whyItWorks", "examTip", "thinkDeeper"] as const) if (!s[f]?.trim()) err(`${s.id}: missing ${f}`);
    if (!s.discovery?.problem || !s.discovery?.idea) err(`${s.id}: missing discovery`);
    if ((s.keyPoints?.length ?? 0) < 3) err(`${s.id}: ${s.keyPoints?.length ?? 0} keyPoints`);
    if (s.figure && !FIGURES.has(s.figure)) err(`${s.id}: unknown figure ${s.figure}`);
    if (!s.diagram && !s.figure) warn(`${s.id}: no diagram or figure`);
    if (s.diagram) {
      const d = s.diagram;
      if (!/viewBox=/.test(d)) err(`${s.id}: diagram missing viewBox`);
      if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(d)) err(`${s.id}: diagram missing xmlns`);
      if (!/role="img"/.test(d) || !/aria-label=/.test(d)) warn(`${s.id}: diagram missing role/aria-label`);
      if (/<script|<style|href=|\$\{/.test(d)) err(`${s.id}: diagram contains forbidden markup`);
      if (!d.trim().startsWith("<svg")) err(`${s.id}: diagram doesn't start with <svg`);
    }
    const words = s.body.split(/\s+/).length;
    if (words < 120) warn(`${s.id}: body only ${words} words`);
  });
  console.log(`guide-${topic}: ${g.length} sections`);
}

checkMcqSet(MCQ_SET_1, "s1", 25);
checkMcqSet(MCQ_SET_2, "s2", 25);
checkMcqSet(MCQ_SET_3, "s3", 25);
checkMcqSet(MCQ_SET_4, "s4", 25);
checkQaSet(QA_SET_1, "w1", 10);
checkQaSet(QA_SET_2, "w2", 10);
checkGuide(GUIDE_AA, "aa");
checkGuide(GUIDE_AN, "an");

const all = [MCQ_SET_1, MCQ_SET_2, MCQ_SET_3, MCQ_SET_4, QA_SET_1, QA_SET_2].flatMap((s) => s.questions as (MCQ | QA)[]);
const perSection = new Map<string, number>();
all.forEach((q) => perSection.set(q.section, (perSection.get(q.section) ?? 0) + 1));
console.log("questions per section:", Object.fromEntries([...perSection.entries()].sort()));

if (warnings.length) console.log(`\n⚠️  ${warnings.length} warnings:\n- ` + warnings.join("\n- "));
if (errors.length) {
  console.log(`\n❌ ${errors.length} errors:\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log(`\n✅ All content checks passed (${all.length} questions).`);
