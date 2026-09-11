import assert from "node:assert/strict";
import { test } from "node:test";
import type { Attempt, CategoryId } from "../types.ts";
import { median, slowCategories, statsByCategory, statusOf, weakCategories, weakestCategories } from "./stats.ts";

let clock = Date.UTC(2026, 8, 10, 12);

/** One attempt per result, in time order: true = correct. */
function answers(category: CategoryId, results: boolean[], seconds = 30): Attempt[] {
  return results.map((correct) => ({
    itemId: `x-${category}`,
    category,
    chosen: 0,
    correct,
    seconds,
    at: clock++,
    mode: "drill",
  }));
}

/** `right` correct answers out of `total`, wrong ones first. */
function score(category: CategoryId, right: number, total: number, seconds = 30): Attempt[] {
  return answers(category, [...Array(total - right).fill(false), ...Array(right).fill(true)], seconds);
}

test("median handles odd, even, and empty lists", () => {
  assert.equal(median([3, 1, 2]), 2);
  assert.equal(median([4, 1, 3, 2]), 2.5);
  assert.equal(median([]), 0);
});

test("recent accuracy covers only the last 10 attempts", () => {
  const s = statsByCategory(score("inversion", 10, 20)).get("inversion")!;
  assert.equal(s.attempts, 20);
  assert.equal(s.accuracy, 0.5);
  assert.equal(s.recentAttempts, 10);
  assert.equal(s.recentAccuracy, 1);
});

test("median time uses the recent window", () => {
  const log = [...answers("inversion", Array(10).fill(true), 90), ...answers("inversion", Array(10).fill(true), 20)];
  assert.equal(statsByCategory(log).get("inversion")!.medianSeconds, 20);
});

test("fewer than 3 attempts is untested, not weak", () => {
  const stats = statsByCategory(score("appositive", 0, 2));
  assert.equal(statusOf(stats.get("appositive")), "untested");
  assert.equal(statusOf(undefined), "untested");
  assert.deepEqual(weakCategories(stats.values()), []);
});

test("weak means recent accuracy below 80%, weakest first", () => {
  const stats = statsByCategory([
    ...score("inversion", 7, 10),
    ...score("appositive", 5, 10),
    ...score("noun_clause", 8, 10),
  ]);
  assert.deepEqual(
    weakCategories(stats.values()).map((s) => s.category),
    ["appositive", "inversion"],
  );
  assert.equal(statusOf(stats.get("noun_clause")), "ok");
});

test("slow means accurate but over 45 s for grammar or 80 s for reading", () => {
  const stats = statsByCategory([
    ...score("verb_form", 9, 10, 50),
    ...score("preposition", 9, 10, 44),
    ...score("inference", 9, 10, 70),
    ...score("main_idea", 9, 10, 95),
    ...score("word_order", 5, 10, 90), // slow and inaccurate: weak wins
  ]);
  // main_idea is 95/80 = 19% over its limit, verb_form 50/45 = 11%: furthest over first.
  assert.deepEqual(
    slowCategories(stats.values()).map((s) => s.category),
    ["main_idea", "verb_form"],
  );
  assert.equal(statusOf(stats.get("preposition")), "ok");
  assert.equal(statusOf(stats.get("inference")), "ok");
  assert.equal(statusOf(stats.get("word_order")), "weak");
});

test("weakest set: weak first, then early misses, untried, early hits, then the rest; drillable only", () => {
  const stats = statsByCategory([
    ...score("inversion", 5, 10), // weak, drillable
    ...score("appositive", 2, 10), // weak but no items
    ...score("noun_clause", 9, 10), // fine
    ...score("verb_form", 0, 1), // unranked, one miss
    ...score("word_form", 1, 1), // unranked, one hit
  ]);
  const drillable: CategoryId[] = ["noun_clause", "word_form", "verb_form", "inversion", "redundancy", "preposition"];
  assert.deepEqual(weakestCategories(stats, drillable, 4), ["inversion", "verb_form", "redundancy", "preposition"]);
  assert.deepEqual(weakestCategories(stats, drillable, 6), [
    "inversion",
    "verb_form",
    "redundancy",
    "preposition",
    "word_form",
    "noun_clause",
  ]);
  assert.deepEqual(weakestCategories(stats, ["noun_clause"], 5), ["noun_clause"]);
});
