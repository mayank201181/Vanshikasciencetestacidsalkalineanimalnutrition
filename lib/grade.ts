import type { QA } from "./types";

// Auto-marks a typed written answer against a mark scheme, entirely in the browser.
//
// Each mark point lists phrases ("keywords"). A point is credited when ANY phrase
// matches. Inside a phrase, "+" joins parts that must ALL appear (any order).
// Matching is deliberately forgiving of how a 12-year-old types:
//  - UK/US spellings (sulphate/sulfate, neutralize/neutralise, color/colour …)
//  - small spelling slips (1 letter for 5+ letter words, 2 for 9+)
//  - word endings: a keyword word of 5+ letters matches any word starting with it
//  - plurals, hyphens, apostrophes and arrows ("→", "->" read as "yields")
// …but it refuses a match that is negated just before it ("not red", "no bile").

const NEGATORS = new Set([
  "not", "no", "never", "isnt", "doesnt", "dont", "cant", "cannot", "wont", "arent",
  "wasnt", "werent", "didnt", "shouldnt", "without", "neither", "nor",
]);
const FILLERS = new Set(["the", "a", "an", "and", "of", "to", "it", "is", "are", "its", "into", "in"]);

const SPELLING: [RegExp, string][] = [
  [/sulph/g, "sulf"],
  [/neutraliz/g, "neutralis"],
  [/neutralz/g, "neutralis"],
  [/\bcolor/g, "colour"],
  [/\bfeces/g, "faeces"],
  [/\bfaces\b/g, "faeces"],
  [/\besophag/g, "oesophag"],
  [/\bfiber/g, "fibre"],
  [/cataly[sz]/g, "catalys"],
  [/emulsiz/g, "emulsis"],
  [/analyz/g, "analys"],
  [/\bvapor\b/g, "vapour"],
  [/\bliter/g, "litre"],
  [/\bcentimeter/g, "centimetre"],
  [/\bgray\b/g, "grey"],
  [/\bcm3\b/g, "cm"],
  // common science misspellings
  [/\bamal[aiy]?[sz]e/g, "amylase"],
  [/\bamyl[ae]?ze/g, "amylase"],
  [/\bamilase/g, "amylase"],
  [/\bprotien/g, "protein"],
  [/\bbenedics?\b/g, "benedicts"],
  [/\bbiuret?te\b/g, "biuret"],
  [/\bbuiret/g, "biuret"],
  [/\bvilli?e?s\b/g, "villi"],
  [/\bvillous\b/g, "villus"],
  [/\bemulsif/g, "emulsif"],
  [/\bindigest?ion/g, "indigestion"],
  [/\bant[ia]acid/g, "antacid"],
  [/\bant[ie]-?acid/g, "antacid"],
];

export function normalise(input: string): string {
  let s = ` ${input.toLowerCase()} `;
  s = s.replace(/(→|⟶|⇒|=>|-+>|—>|–>)/g, " yields ");
  s = s.replace(/[’'`]/g, "");
  s = s.replace(/\bph\s*(?:=|:)?\s*(\d)/g, "ph $1");
  s = s.replace(/[^a-z0-9.\s]/g, " ");
  // keep decimal points only between digits (34.5), drop full stops
  s = s.replace(/(?<!\d)\.|\.(?!\d)/g, " ");
  for (const [re, to] of SPELLING) s = s.replace(re, to);
  return s.replace(/\s+/g, " ").trim();
}

export function tokens(input: string): string[] {
  const n = normalise(input);
  return n ? n.split(" ") : [];
}

/** Edit distance where swapping two neighbouring letters ("protien") counts as one slip. */
function lev(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

const isNumber = (s: string) => /^\d+(\.\d+)?$/.test(s);

/** Does one answer word match one keyword word? */
export function wordMatch(a: string, k: string): boolean {
  if (a === k) return true;
  if (isNumber(k)) return isNumber(a) && Number(a) === Number(k);
  if (isNumber(a)) return false;
  if (a === `${k}s` || a === `${k}es`) return true;
  if (k.length < 4) return false;
  if (a.startsWith(k)) return true; // stems: acid → acidic, evaporat → evaporating
  if (k.length < 5) return false;
  const tol = k.length >= 9 ? 2 : 1;
  if (Math.abs(a.length - k.length) <= tol && lev(a, k) <= tol) return true;
  if (a.endsWith("s") && lev(a.slice(0, -1), k) <= tol) return true;
  // misspelt stem, e.g. "nutralisation" vs keyword "neutralis"
  if (k.length >= 6 && a.length > k.length - 1) {
    for (const len of [k.length - 1, k.length, k.length + 1]) {
      if (len <= a.length && lev(a.slice(0, len), k) <= 1) return true;
    }
  }
  return false;
}

/** Find a phrase (sequence of keyword words) in the answer, not negated. */
function phraseFound(answer: string[], phrase: string[]): boolean {
  if (!phrase.length) return false;
  const guard = !NEGATORS.has(phrase[0]);
  for (let i = 0; i < answer.length; i++) {
    if (!wordMatch(answer[i], phrase[0])) continue;
    let pos = i;
    let ok = true;
    for (let j = 1; j < phrase.length; j++) {
      let next = pos + 1;
      // allow one small filler word between phrase words ("blue and black", "surface of area")
      if (next < answer.length && !wordMatch(answer[next], phrase[j]) && FILLERS.has(answer[next])) next++;
      if (next >= answer.length || !wordMatch(answer[next], phrase[j])) {
        ok = false;
        break;
      }
      pos = next;
    }
    if (!ok) continue;
    if (guard) {
      const before = [answer[i - 1], answer[i - 2]];
      if (before.some((w) => w && NEGATORS.has(w))) continue;
    }
    return true;
  }
  return false;
}

/** Does a keyword entry (possibly "part+part") match the answer tokens? */
export function keywordMatches(answer: string[], keyword: string): boolean {
  const parts = keyword.split("+").map((p) => tokens(p)).filter((p) => p.length);
  if (!parts.length) return false;
  return parts.every((p) => phraseFound(answer, p));
}

export type Verdict = "full" | "good" | "partial" | "none";

export interface QAResult {
  credited: boolean[];
  hit: number;
  total: number;
  score: number; // 0..1
  verdict: Verdict;
}

export function verdictFor(score: number): Verdict {
  if (score >= 0.999) return "full";
  if (score >= 0.5) return "good";
  if (score > 0) return "partial";
  return "none";
}

export function gradeQA(qa: Pick<QA, "markScheme">, answer: string): QAResult {
  const total = qa.markScheme.length || 1;
  const toks = tokens(answer);
  if (answer.trim().length < 3) {
    return { credited: qa.markScheme.map(() => false), hit: 0, total, score: 0, verdict: "none" };
  }
  const credited = qa.markScheme.map((mp) => mp.keywords.some((kw) => keywordMatches(toks, kw)));
  return scorePoints(credited);
}

export function scorePoints(credited: boolean[]): QAResult {
  const total = credited.length || 1;
  const hit = credited.filter(Boolean).length;
  const score = hit / total;
  return { credited, hit, total, score, verdict: verdictFor(score) };
}

export const VERDICT_META: Record<Verdict, { label: string; emoji: string; className: string }> = {
  full: { label: "Full marks!", emoji: "🏆", className: "border-emerald-300 bg-emerald-50 text-emerald-800" },
  good: { label: "Good — a few points missing", emoji: "👍", className: "border-sky-300 bg-sky-50 text-sky-800" },
  partial: { label: "Partly there", emoji: "🟡", className: "border-amber-300 bg-amber-50 text-amber-800" },
  none: { label: "Not yet — learn the points below", emoji: "🔴", className: "border-rose-300 bg-rose-50 text-rose-800" },
};
