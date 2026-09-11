import assert from "node:assert/strict";
import { test } from "node:test";
import type {
  Attempt,
  CompletionItem,
  Difficulty,
  ErrorItem,
  GrammarCategoryId,
  Item,
  Passage,
  ReadingItem,
} from "../types.ts";
import { drillItems, lastSeen, leastRecentFirst, nextPassage, section2Items, timedSeconds } from "./select.ts";

const noShuffle = () => 0.999; // Fisher-Yates with random near 1 keeps the original order

const explanation = { rule: "", why: "", trap: "", distractors: ["", "", "", ""] as [string, string, string, string] };

function completion(n: number, category: GrammarCategoryId = "inversion", difficulty: Difficulty = 2): CompletionItem {
  return {
    id: `st-inv-${n}`, section: "structure", category, difficulty, answer: 0, explanation,
    verified: true, addedOn: "2026-09-10", stem: "______", options: ["a", "b", "c", "d"],
  };
}

function errorItem(n: number, difficulty: Difficulty = 2): ErrorItem {
  return {
    id: `we-sva-${n}`, section: "written_expression", category: "subject_verb_agreement", difficulty, answer: 0,
    explanation: { ...explanation, corrected: "" }, verified: true, addedOn: "2026-09-10", segments: [],
  };
}

function seenAt(item: Item, at: number): Attempt {
  return { itemId: item.id, category: item.category, chosen: 0, correct: true, seconds: 10, at, mode: "drill" };
}

test("least recent first: unseen, then oldest seen", () => {
  const [a, b, c] = [completion(1), completion(2), completion(3)];
  const seen = lastSeen([seenAt(a, 50), seenAt(c, 10), seenAt(a, 20)]);
  assert.deepEqual(leastRecentFirst([a, b, c], (i) => seen.get(i.id), noShuffle).map((i) => i.id), [
    "st-inv-2", "st-inv-3", "st-inv-1",
  ]);
});

test("drill items come only from the chosen categories and are capped", () => {
  const bank = [completion(1, "inversion"), completion(2, "appositive"), completion(3, "inversion")];
  assert.deepEqual(drillItems(bank, ["inversion"], [], noShuffle).map((i) => i.id), ["st-inv-1", "st-inv-3"]);
  assert.equal(drillItems(bank, ["inversion", "appositive"], [], noShuffle, 2).length, 2);
});

test("section 2 puts completion items first, each part easier to harder, capped at 15 and 25", () => {
  const bank: Item[] = [
    errorItem(1, 3), completion(1, "inversion", 3), errorItem(2, 1), completion(2, "inversion", 1),
    ...Array.from({ length: 20 }, (_, i) => completion(100 + i)),
    ...Array.from({ length: 30 }, (_, i) => errorItem(100 + i)),
  ];
  const items = section2Items(bank, [], noShuffle);
  assert.equal(items.length, 40);
  assert.ok(items.slice(0, 15).every((i) => i.section === "structure"));
  assert.ok(items.slice(15).every((i) => i.section === "written_expression"));
  const difficulties = items.slice(0, 15).map((i) => i.difficulty);
  assert.deepEqual(difficulties, [...difficulties].sort());
});

test("a small bank gives a short section at real pace", () => {
  const items = section2Items([completion(1), errorItem(1)], [], noShuffle);
  assert.deepEqual(items.map((i) => i.section), ["structure", "written_expression"]);
  assert.equal(timedSeconds(items), 75);
});

test("the next passage is one not practiced yet, else the least recent", () => {
  const reading = (id: string): ReadingItem => ({
    id: `rd-inf-${id}`, section: "reading", category: "inference", difficulty: 2, answer: 0, explanation,
    verified: true, addedOn: "2026-09-10", prompt: "", options: ["a", "b", "c", "d"],
  });
  const passage = (id: string): Passage => ({ id, title: id, topic: "", wordCount: 0, paragraphs: [], items: [reading(id)] });
  const [p1, p2] = [passage("p1"), passage("p2")];
  assert.equal(nextPassage([p1, p2], [seenAt(p1.items[0], 5)], noShuffle)?.id, "p2");
  assert.equal(nextPassage([p1, p2], [seenAt(p1.items[0], 5), seenAt(p2.items[0], 9)], noShuffle)?.id, "p1");
  assert.equal(nextPassage([], []), null);
  assert.equal(timedSeconds(p1.items), 66);
});
