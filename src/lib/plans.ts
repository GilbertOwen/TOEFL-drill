// Builds the item list and settings for each kind of session from the bank and log.

import { ITEMS, ITEM_BY_ID, PASSAGES } from "../data/bank.ts";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import type { Attempt, CategoryId, Item } from "../types.ts";
import { localDayNumber } from "./format.ts";
import { dueEntries, reviewSchedule } from "./review.ts";
import { drillItems, nextPassage, section2Items, timedSeconds } from "./select.ts";

export type PracticePlan = { kind: "practice"; mode: "drill" | "review"; title: string; items: Item[] };
export type TimedPlan = { kind: "timed"; title: string; items: Item[]; seconds: number };
export type SessionPlan = PracticePlan | TimedPlan;

export function drillPlan(categories: readonly CategoryId[], attempts: readonly Attempt[], name?: string): PracticePlan {
  const label =
    name ?? (categories.length <= 3 ? categories.map((c) => CATEGORY_BY_ID[c].label).join(", ") : `${categories.length} categories`);
  return { kind: "practice", mode: "drill", title: `Drill: ${label}`, items: drillItems(ITEMS, categories, attempts) };
}

export function reviewPlan(attempts: readonly Attempt[], now: number = Date.now()): PracticePlan {
  const due = dueEntries(reviewSchedule(attempts), localDayNumber(now));
  return { kind: "practice", mode: "review", title: "Review", items: due.flatMap((e) => ITEM_BY_ID.get(e.itemId) ?? []) };
}

export function section2Plan(attempts: readonly Attempt[]): TimedPlan {
  const items = section2Items(ITEMS, attempts);
  return { kind: "timed", title: "Timed: Section 2", items, seconds: timedSeconds(items) };
}

export function readingPlan(attempts: readonly Attempt[]): (TimedPlan & { passageTitle: string }) | null {
  const passage = nextPassage(PASSAGES, attempts);
  if (!passage) return null;
  return {
    kind: "timed",
    title: `Timed: ${passage.title}`,
    passageTitle: passage.title,
    items: passage.items,
    seconds: timedSeconds(passage.items),
  };
}
