const DAY_MS = 86_400_000;

/** Days since the epoch in the user's local time zone; consecutive local dates differ by 1. */
export function localDayNumber(ts: number): number {
  return Math.floor((ts - new Date(ts).getTimezoneOffset() * 60_000) / DAY_MS);
}

/** "2026-09-10" in local time. */
export function localDateString(ts: number): string {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function daysAgoLabel(ts: number, now: number = Date.now()): string {
  const days = localDayNumber(now) - localDayNumber(ts);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

export function percent(fraction: number): string {
  return `${Math.round(fraction * 100)}%`;
}

/** "12:05" from milliseconds, rounding up so a clock never shows 0:00 early. */
export function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

/** "tomorrow", "in 3 days" for a count of days ahead. */
export function daysAheadLabel(days: number): string {
  if (days <= 0) return "today";
  return days === 1 ? "tomorrow" : `in ${days} days`;
}
