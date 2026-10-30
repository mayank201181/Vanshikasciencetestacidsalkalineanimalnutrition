// Mark a sample student answer against a written question's mark scheme.
// Usage: node --experimental-strip-types scripts/try-answer.ts w1-q03 "my answer text"
import { QA_SET_1 } from "../lib/content/qa-set1.ts";
import { QA_SET_2 } from "../lib/content/qa-set2.ts";
import { gradeQA, keywordMatches, tokens } from "../lib/grade.ts";

const [id, ...rest] = process.argv.slice(2);
const answer = rest.join(" ");
const qa = [...QA_SET_1.questions, ...QA_SET_2.questions].find((q) => q.id === id);
if (!qa || !answer) {
  console.log('Usage: node --experimental-strip-types scripts/try-answer.ts <qa-id> "answer"');
  process.exit(1);
}
const r = gradeQA(qa, answer);
const toks = tokens(answer);
console.log(`${qa.id}: ${r.hit}/${r.total} (${r.verdict})`);
qa.markScheme.forEach((mp, i) => {
  const matched = mp.keywords.filter((k) => keywordMatches(toks, k));
  console.log(`  ${r.credited[i] ? "✅" : "❌"} ${mp.point}${matched.length ? `   [matched: ${matched.join(" | ")}]` : ""}`);
});
