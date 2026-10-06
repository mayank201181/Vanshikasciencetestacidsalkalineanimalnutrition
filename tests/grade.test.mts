import { test } from "node:test";
import assert from "node:assert/strict";
import { gradeQA, keywordMatches, tokens, normalise } from "../lib/grade.ts";

const hit = (answer: string, kw: string) => keywordMatches(tokens(answer), kw);

test("normalises spelling, arrows and pH", () => {
  assert.equal(normalise("Sodium Sulphate -> water"), "sodium sulfate yields water");
  assert.equal(normalise("pH7"), "ph 7");
  assert.equal(normalise("Benedict's"), "benedicts");
});

test("forgives small slips, stems and plurals", () => {
  assert.ok(hit("nutralisation", "neutralis"));
  assert.ok(hit("we evaporated it", "evaporat"));
  assert.ok(hit("protiens", "protein"));
  assert.ok(hit("amalyse", "amylase"));
  assert.ok(hit("oesophegus", "oesophagus"));
  assert.ok(hit("acidic", "acid"));
  assert.ok(hit("blue-black", "blue black"));
  assert.ok(hit("larger surface areas", "large surface area"));
});

test("does not over-match short words", () => {
  assert.ok(!hit("reduce", "red"));
  assert.ok(!hit("father", "fat")); // no stems for 3-letter keywords
  assert.ok(!hit("bat", "fat"));
});

test("refuses negated matches", () => {
  assert.ok(!hit("bile is not an enzyme", "enzyme"));
  assert.ok(!hit("it doesn't turn red", "turn red"));
  assert.ok(hit("it doesn't change colour", "doesnt change"));
});

test("'+' needs every part", () => {
  assert.ok(hit("blue litmus goes red in acid", "blue+red+acid"));
  assert.ok(!hit("blue litmus goes red", "blue+red+acid"));
});

test("numbers match exactly", () => {
  assert.ok(hit("the mean is 34.50 cm3", "34.5"));
  assert.ok(!hit("the mean is 345", "34.5"));
});

test("grades a written answer point by point", () => {
  const qa = {
    markScheme: [
      { point: "indicator", keywords: ["universal indicator", "ph probe"], feedback: "" },
      { point: "green", keywords: ["green", "ph 7"], feedback: "" },
      { point: "evaporate", keywords: ["evaporat"], feedback: "" },
    ],
  };
  const r = gradeQA(qa, "Add universal indicator, add alkali until it is green, then evaporate the water");
  assert.deepEqual(r.credited, [true, true, true]);
  assert.equal(r.verdict, "full");
  const r2 = gradeQA(qa, "add alkali until green");
  assert.deepEqual(r2.credited, [false, true, false]);
  assert.equal(gradeQA(qa, "").score, 0);
});
