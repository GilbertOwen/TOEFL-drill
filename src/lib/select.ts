// Which items a session shows. Pure; randomness is injected so tests are stable.

import type { Attempt, CategoryId, CompletionItem, ErrorItem, Item, Passage } from "../types.ts";

export const DRILL_SIZE = 20;
/** Real Section 2: 15 completion items, then 25 error-identification items, in 25 minutes. */
export const SECTION2_STRUCTURE = 15;
export const SECTION2_WRITTEN = 25;
export const SECTION2_SECONDS_PER_ITEM = (25 * 60) / 40;
/** Real Section 3: 50 questions in 55 minutes. */
export const READING_SECONDS_PER_ITEM = 66;

/** When each item was last answered, by item id. */
export function lastSeen(attempts: readonly Attempt[]): Map<string, number> {
  const seen = new Map<string, number>();
  for (const a of attempts) seen.set(a.itemId, Math.max(a.at, seen.get(a.itemId) ?? 0));
  return seen;
}

/** Never-seen things first in random order, then least recently seen first. */
export function leastRecentFirst<T>(
  things: readonly T[],
  seenAt: (thing: T) => number | undefined,
  random: () => number = Math.random,
): T[] {
  const unseen = shuffle(things.filter((t) => seenAt(t) === undefined), random);
  const seen = things.filter((t) => seenAt(t) !== undefined).sort((a, b) => seenAt(a)! - seenAt(b)!);
  return [...unseen, ...seen];
}

export function drillItems(
  bank: readonly Item[],
  categories: readonly CategoryId[],
  attempts: readonly Attempt[],
  random: () => number = Math.random,
  size = DRILL_SIZE,
): Item[] {
  const wanted = new Set(categories);
  const seen = lastSeen(attempts);
  return leastRecentFirst(bank.filter((i) => wanted.has(i.category)), (i) => seen.get(i.id), random).slice(0, size);
}

/**
 * Up to 15 completion then up to 25 error-ID items, each part easier to harder as
 * on the real test. A smaller bank gives a shorter section at the same pace.
 */
export function section2Items(
  bank: readonly Item[],
  attempts: readonly Attempt[],
  random: () => number = Math.random,
): Item[] {
  const seen = lastSeen(attempts);
  const part = <T extends Item>(pool: T[], size: number) =>
    leastRecentFirst(pool, (i) => seen.get(i.id), random)
      .slice(0, size)
      .sort((a, b) => a.difficulty - b.difficulty);
  return [
    ...part(bank.filter((i): i is CompletionItem => i.section === "structure"), SECTION2_STRUCTURE),
    ...part(bank.filter((i): i is ErrorItem => i.section === "written_expression"), SECTION2_WRITTEN),
  ];
}

/** The passage least recently practiced, never-seen ones first. */
export function nextPassage(
  passages: readonly Passage[],
  attempts: readonly Attempt[],
  random: () => number = Math.random,
): Passage | null {
  const seen = lastSeen(attempts);
  const lastFor = (p: Passage) => {
    const times = p.items.map((i) => seen.get(i.id)).filter((t) => t !== undefined);
    return times.length > 0 ? Math.max(...times) : undefined;
  };
  return leastRecentFirst(passages, lastFor, random)[0] ?? null;
}

export function timedSeconds(items: readonly Item[]): number {
  const perItem = items[0]?.section === "reading" ? READING_SECONDS_PER_ITEM : SECTION2_SECONDS_PER_ITEM;
  return Math.round(items.length * perItem);
}

function shuffle<T>(list: T[], random: () => number): T[] {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
