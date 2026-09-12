import { useMemo, useState } from "react";
import { ITEM_BY_ID } from "../data/bank.ts";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import { useLog } from "../lib/store.ts";
import type { Attempt } from "../types.ts";
import { Explanation } from "./Explanation.tsx";
import { ItemView } from "./ItemView.tsx";
import { buttonPrimary } from "./ui.ts";

function localDateTime(ts: number) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(ts));
}

function HistoryRow({ attempt }: { attempt: Attempt }) {
  const [expanded, setExpanded] = useState(false);
  const item = ITEM_BY_ID.get(attempt.itemId);

  if (!item) return null; // Defensive check if item was deleted

  return (
    <div className="border-b border-stone-200 py-5 last:border-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
              attempt.correct ? "bg-green-600" : "bg-red-600"
            }`}
            aria-label={attempt.correct ? "Correct" : "Incorrect"}
          >
            {attempt.correct ? "✓" : "✗"}
          </span>
          <div>
            <p className="font-semibold text-stone-800">
              {CATEGORY_BY_ID[item.category].label}
            </p>
            <p className="text-sm text-stone-500">
              {localDateTime(attempt.at)} • {attempt.mode === "drill" ? "Drill" : attempt.mode === "review" ? "Review" : "Timed test"} • {attempt.seconds}s
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
        >
          {expanded ? "Hide details" : "Review"}
        </button>
      </div>

      {expanded && (
        <div className="mt-6 rounded-xl bg-stone-50/50 p-4 ring-1 ring-inset ring-stone-200 sm:p-6">
          <ItemView item={item} chosen={attempt.chosen} revealed={true} hidePassage={false} />
          <Explanation item={item} chosen={attempt.chosen} animate={false} />
        </div>
      )}
    </div>
  );
}

export function History({ onExit }: { onExit: () => void }) {
  const { attempts } = useLog();
  const [onlyMistakes, setOnlyMistakes] = useState(false);
  const [limit, setLimit] = useState(20);

  const filtered = useMemo(() => {
    let list = attempts.slice().reverse();
    if (onlyMistakes) {
      list = list.filter((a) => !a.correct);
    }
    return list;
  }, [attempts, onlyMistakes]);

  return (
    <div className="mx-auto animate-reveal pb-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">History</h1>
          <p className="mt-2 text-stone-600">Review your past answers and explanations.</p>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900">
            <input
              type="checkbox"
              checked={onlyMistakes}
              onChange={(e) => {
                setOnlyMistakes(e.target.checked);
                setLimit(20);
              }}
              className="size-4 cursor-pointer rounded border-stone-300 text-stone-900 focus:ring-stone-900"
            />
            Show mistakes only
          </label>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-stone-200 bg-stone-50 py-16 text-center">
          <p className="text-stone-500">No history found.</p>
        </div>
      ) : (
        <div className="rounded-lg border border-stone-200 bg-white px-4 sm:px-6">
          {filtered.slice(0, limit).map((attempt, i) => (
            <HistoryRow key={`${attempt.itemId}-${attempt.at}-${i}`} attempt={attempt} />
          ))}
        </div>
      )}

      {limit < filtered.length && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setLimit((l) => l + 20)}
            className="rounded-full border border-stone-300 bg-white px-8 py-2.5 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
          >
            Load More
          </button>
        </div>
      )}

      <div className="mt-16 text-center">
        <button type="button" className={buttonPrimary} onClick={onExit}>
          Back to dashboard
        </button>
      </div>
    </div>
  );
}
