// The review queue: items answered wrong come back on a fixed ladder.
// wrong -> due tomorrow -> +3 days -> +7 days -> retired. Wrong again resets.
// Derived from the attempt log on every read, so it can never disagree with it.

import type { Attempt } from "../types.ts";
import { localDayNumber } from "./format.ts";

/** Days until the next review after landing on each rung. */
export const LADDER = [1, 3, 7] as const;

export type ReviewEntry = {
  itemId: string;
  /** Index into LADDER of the rung the item is on. */
  rung: number;
  /** Local day number (see localDayNumber) on which the item is due. */
  dueDay: number;
};

/**
 * Replays the log in time order. A wrong answer, in any mode, puts the item on the
 * first rung. A correct answer on or after the due day climbs one rung; climbing
 * past the last rung retires the item. Correct answers before the due day change
 * nothing, so meeting an item early in a drill cannot skip a rung.
 */
export function reviewSchedule(attempts: readonly Attempt[]): Map<string, ReviewEntry> {
  const schedule = new Map<string, ReviewEntry>();
  for (const a of attempts) {
    const day = localDayNumber(a.at);
    if (!a.correct) {
      schedule.set(a.itemId, { itemId: a.itemId, rung: 0, dueDay: day + LADDER[0] });
      continue;
    }
    const entry = schedule.get(a.itemId);
    if (!entry || day < entry.dueDay) continue;
    const rung = entry.rung + 1;
    if (rung >= LADDER.length) schedule.delete(a.itemId);
    else schedule.set(a.itemId, { itemId: a.itemId, rung, dueDay: day + LADDER[rung] });
  }
  return schedule;
}

/** Entries due on or before `today` (a local day number), longest overdue first. */
export function dueEntries(schedule: Map<string, ReviewEntry>, today: number): ReviewEntry[] {
  return [...schedule.values()].filter((e) => e.dueDay <= today).sort((a, b) => a.dueDay - b.dueDay);
}

/** The earliest due day after `today`, or null if nothing else is scheduled. */
export function nextDueDay(schedule: Map<string, ReviewEntry>, today: number): number | null {
  let next: number | null = null;
  for (const e of schedule.values()) {
    if (e.dueDay > today && (next === null || e.dueDay < next)) next = e.dueDay;
  }
  return next;
}
