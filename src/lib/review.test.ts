import assert from "node:assert/strict";
import { test } from "node:test";
import type { Attempt } from "../types.ts";
import { localDayNumber } from "./format.ts";
import { dueEntries, nextDueDay, reviewSchedule } from "./review.ts";

// Noon UTC stays inside the same local date in every time zone from UTC-11 to UTC+11.
const DAY0 = Date.UTC(2026, 8, 10, 12);
const D = localDayNumber(DAY0);

function on(day: number, correct: boolean, itemId = "we-sva-001"): Attempt {
  return {
    itemId,
    category: "subject_verb_agreement",
    chosen: 0,
    correct,
    seconds: 30,
    at: DAY0 + day * 86_400_000,
    mode: "review",
  };
}

test("a wrong answer puts the item on the first rung, due tomorrow", () => {
  assert.deepEqual(reviewSchedule([on(0, false)]).get("we-sva-001"), { itemId: "we-sva-001", rung: 0, dueDay: D + 1 });
});

test("an item answered correctly first time never enters the queue", () => {
  assert.equal(reviewSchedule([on(0, true), on(5, true)]).size, 0);
});

test("a correct answer before the due day changes nothing", () => {
  assert.equal(reviewSchedule([on(0, false), on(0, true)]).get("we-sva-001")?.dueDay, D + 1);
});

test("the full ladder: tomorrow, then +3, then +7, then retired", () => {
  const log = [on(0, false), on(1, true)];
  assert.deepEqual(reviewSchedule(log).get("we-sva-001"), { itemId: "we-sva-001", rung: 1, dueDay: D + 4 });
  log.push(on(4, true));
  assert.deepEqual(reviewSchedule(log).get("we-sva-001"), { itemId: "we-sva-001", rung: 2, dueDay: D + 11 });
  log.push(on(11, true));
  assert.equal(reviewSchedule(log).has("we-sva-001"), false);
});

test("a late review counts from the day it was answered", () => {
  const entry = reviewSchedule([on(0, false), on(9, true)]).get("we-sva-001");
  assert.deepEqual(entry, { itemId: "we-sva-001", rung: 1, dueDay: D + 12 });
});

test("wrong again resets to tomorrow, even after retiring", () => {
  const midLadder = [on(0, false), on(1, true), on(4, false)];
  assert.deepEqual(reviewSchedule(midLadder).get("we-sva-001"), { itemId: "we-sva-001", rung: 0, dueDay: D + 5 });
  const retired = [on(0, false), on(1, true), on(4, true), on(11, true), on(30, false)];
  assert.deepEqual(reviewSchedule(retired).get("we-sva-001"), { itemId: "we-sva-001", rung: 0, dueDay: D + 31 });
});

test("due entries are the overdue and due-today ones, longest overdue first", () => {
  const schedule = reviewSchedule([on(0, false, "a"), on(2, false, "b"), on(3, false, "c")]);
  // due days: a = D+1, b = D+3, c = D+4
  assert.deepEqual(dueEntries(schedule, D + 3).map((e) => e.itemId), ["a", "b"]);
  assert.equal(nextDueDay(schedule, D + 3), D + 4);
  assert.equal(nextDueDay(schedule, D + 4), null);
});
