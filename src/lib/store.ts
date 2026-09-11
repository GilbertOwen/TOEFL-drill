// localStorage persistence for the attempt log, and the React hook that reads it.
// All progress lives under one key. Data that cannot be read is copied aside and
// reported, never silently dropped or overwritten.

import { useSyncExternalStore } from "react";
import type { Attempt } from "../types.ts";
import { localDateString } from "./format.ts";
import { logFile, mergeAttempts, parseLog, serializeLog } from "./log.ts";

export const STORAGE_KEY = "toefl-itp-drill.log";
const SET_ASIDE_PREFIX = `${STORAGE_KEY}.set-aside.`;

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem" | "key" | "length">;

export type Notice =
  /** Stored data that could not be read was copied to these keys instead of loaded. */
  | { kind: "set-aside"; keys: string[]; reason: string | null }
  /** Storage is blocked or full, so answers live in memory only. */
  | { kind: "not-saving" };

export type LogState = {
  attempts: readonly Attempt[];
  lastExportAt: number | null;
  notice: Notice | null;
};

export type ImportResult =
  | { ok: true; added: number; duplicates: number; skipped: number }
  | { ok: false; reason: string };

export type LogStore = ReturnType<typeof createLogStore>;

export function createLogStore(storage: StorageLike | null, now: () => number = Date.now) {
  // Turns false if we hold data we could neither load nor set aside: never overwrite it.
  let writable = storage !== null;
  const listeners = new Set<() => void>();
  let state = load();

  function load(): LogState {
    const empty: LogState = { attempts: [], lastExportAt: null, notice: null };
    if (!storage) return { ...empty, notice: { kind: "not-saving" } };
    const raw = read(STORAGE_KEY);
    if (raw === null) return withSetAsideNotice(empty, null);

    const parsed = parseLog(raw);
    const loaded: LogState = parsed.ok
      ? { attempts: parsed.log.attempts, lastExportAt: parsed.log.lastExportAt, notice: null }
      : empty;
    const reason = !parsed.ok
      ? parsed.reason
      : parsed.dropped > 0
        ? `${parsed.dropped} saved ${parsed.dropped === 1 ? "answer was" : "answers were"} damaged`
        : null;
    if (reason === null) return withSetAsideNotice(loaded, null);

    // Keep the original before anything can overwrite it; if even that fails, stop writing.
    if (!write(`${SET_ASIDE_PREFIX}${now()}`, raw)) {
      writable = false;
      return { ...loaded, notice: { kind: "not-saving" } };
    }
    write(STORAGE_KEY, serializeLog(logFile(loaded.attempts, loaded.lastExportAt)));
    return withSetAsideNotice(loaded, reason);
  }

  function commit(patch: Partial<LogState>): void {
    let next: LogState = { ...state, ...patch };
    if (storage && writable) {
      if (!write(STORAGE_KEY, serializeLog(logFile(next.attempts, next.lastExportAt)))) {
        next = { ...next, notice: { kind: "not-saving" } };
      } else if (next.notice?.kind === "not-saving") {
        next = withSetAsideNotice({ ...next, notice: null }, null);
      }
    }
    publish(next);
  }

  function publish(next: LogState): void {
    state = next;
    for (const listener of listeners) listener();
  }

  function recordAttempt(attempt: Attempt): void {
    recordAttempts([attempt]);
  }

  /** Several attempts in one write, e.g. at the end of a timed section. */
  function recordAttempts(batch: readonly Attempt[]): void {
    if (batch.length === 0) return;
    commit({ attempts: [...state.attempts, ...[...batch].sort((a, b) => a.at - b.at)] });
  }

  /** Marks the log exported now and returns the file to download. */
  function exportLog(): { filename: string; text: string } {
    const at = now();
    commit({ lastExportAt: at });
    return {
      filename: `itp-drill-log-${localDateString(at)}.json`,
      text: serializeLog(logFile(state.attempts, at)),
    };
  }

  /** Merges a log file into the current log, so nothing already recorded is lost. */
  function importLog(text: string): ImportResult {
    const parsed = parseLog(text);
    if (!parsed.ok) return parsed;
    const incoming = parsed.log.attempts;
    const { attempts, added } = mergeAttempts(state.attempts, incoming);
    commit({ attempts, lastExportAt: latest(state.lastExportAt, parsed.log.lastExportAt) });
    return { ok: true, added, duplicates: incoming.length - added, skipped: parsed.dropped };
  }

  /** Another tab wrote the log: take the union so neither tab's answers are lost. */
  function syncFromStorage(): void {
    const raw = read(STORAGE_KEY);
    if (raw === null) return;
    const parsed = parseLog(raw);
    if (!parsed.ok) return;
    const { attempts, added } = mergeAttempts(parsed.log.attempts, state.attempts);
    const lastExportAt = latest(parsed.log.lastExportAt, state.lastExportAt);
    if (added > 0) {
      commit({ attempts, lastExportAt }); // we hold answers the other tab lacks
    } else if (attempts.length !== state.attempts.length || lastExportAt !== state.lastExportAt) {
      publish({ ...state, attempts, lastExportAt });
    }
  }

  /** Raw text of every set-aside copy, for download. */
  function setAsideText(): string {
    const keys = setAsideKeys();
    if (keys.length === 1) return read(keys[0]) ?? "";
    return keys.map((key) => `----- ${key} -----\n${read(key) ?? ""}`).join("\n\n");
  }

  function discardSetAside(): void {
    for (const key of setAsideKeys()) {
      try {
        storage?.removeItem(key);
      } catch {
        // Leave it; the notice will reappear on next load.
      }
    }
    if (state.notice?.kind === "set-aside") publish({ ...state, notice: null });
  }

  function withSetAsideNotice(s: LogState, reason: string | null): LogState {
    const keys = setAsideKeys();
    return keys.length > 0 ? { ...s, notice: { kind: "set-aside", keys, reason } } : s;
  }

  function setAsideKeys(): string[] {
    const keys: string[] = [];
    try {
      for (let i = 0; storage && i < storage.length; i++) {
        const key = storage.key(i);
        if (key?.startsWith(SET_ASIDE_PREFIX)) keys.push(key);
      }
    } catch {
      return [];
    }
    return keys.sort();
  }

  function read(key: string): string | null {
    try {
      return storage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  function write(key: string, value: string): boolean {
    try {
      storage?.setItem(key, value);
      return storage !== null;
    } catch {
      return false;
    }
  }

  return {
    getState: (): LogState => state,
    subscribe(listener: () => void): () => void {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    recordAttempt,
    recordAttempts,
    exportLog,
    importLog,
    syncFromStorage,
    setAsideText,
    discardSetAside,
  };
}

function latest(a: number | null, b: number | null): number | null {
  if (a === null) return b;
  if (b === null) return a;
  return Math.max(a, b);
}

function browserStorage(): StorageLike | null {
  try {
    const storage = globalThis.localStorage;
    storage.getItem(STORAGE_KEY); // throws where the browser blocks storage
    return storage;
  } catch {
    return null;
  }
}

/** The app's log, backed by this browser's localStorage. */
export const logStore: LogStore = createLogStore(browserStorage());

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) logStore.syncFromStorage();
  });
}

export function useLog(): LogState {
  return useSyncExternalStore(logStore.subscribe, logStore.getState);
}
