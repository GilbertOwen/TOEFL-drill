import { useEffect, useEffectEvent } from "react";
import type { AnswerIndex } from "../types.ts";

export type SessionCommand =
  | { type: "choose"; index: AnswerIndex }
  | { type: "next" }
  | { type: "prev" }
  | { type: "exit" };

/** 1-4 or A-D answer, Enter/Space/Right next, Left back, Escape exit. */
export function commandFor(event: KeyboardEvent): SessionCommand | null {
  if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return null;
  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest("input, textarea, select, [contenteditable]")) return null;

  const key = event.key.toLowerCase();
  if (key.length === 1 && "1234abcd".includes(key)) {
    const index = "1234".includes(key) ? "1234".indexOf(key) : "abcd".indexOf(key);
    return { type: "choose", index: index as AnswerIndex };
  }
  if (key === "escape") return { type: "exit" };
  if (key === "arrowright") return { type: "next" };
  if (key === "arrowleft") return { type: "prev" };
  if (key === "enter") {
    // Other focused controls (Exit, Back, links) activate natively. Answer options and
    // the Next button are handled here, and preventDefault stops a second, native click.
    if (target?.closest("button, a, summary") && !target.closest("[data-answer-option], [data-session-next]")) {
      return null;
    }
    return { type: "next" };
  }
  return null;
}

/** Routes session keys to `onCommand` while the calling component is mounted. */
export function useSessionKeys(onCommand: (command: SessionCommand) => void): void {
  const handle = useEffectEvent((event: KeyboardEvent) => {
    const command = commandFor(event);
    if (!command) return;
    event.preventDefault();
    onCommand(command);
  });
  useEffect(() => {
    const listener = (event: KeyboardEvent) => handle(event);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);
}

/** Seconds since a performance.now() mark, to 0.1 s, capped so an idle tab can't skew medians. */
export function secondsSince(mark: number): number {
  return Math.min(600, Math.round((performance.now() - mark) / 100) / 10);
}
