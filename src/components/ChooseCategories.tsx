import { useMemo, useState } from "react";
import { DRILLABLE, countItems } from "../data/bank.ts";
import { CATEGORIES, GROUPS, categoriesInGroup } from "../data/categories.ts";
import { percent } from "../lib/format.ts";
import { drillPlan, type SessionPlan } from "../lib/plans.ts";
import { DRILL_SIZE } from "../lib/select.ts";
import { statsByCategory, weakestCategories } from "../lib/stats.ts";
import { useLog } from "../lib/store.ts";
import type { CategoryId } from "../types.ts";
import { buttonPrimary, buttonSecondary } from "./ui.ts";

export function ChooseCategories({ onStart }: { onStart: (plan: SessionPlan) => void }) {
  const { attempts } = useLog();
  const stats = useMemo(() => statsByCategory(attempts), [attempts]);
  const [selected, setSelected] = useState<ReadonlySet<CategoryId>>(() => new Set());
  const chosen = CATEGORIES.filter((c) => selected.has(c.id)).map((c) => c.id);
  const available = chosen.reduce((n, c) => n + countItems({ category: c }), 0);

  function toggle(id: CategoryId) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Choose categories</h1>
      <p className="mt-2 text-stone-700">
        Pick one or more. A drill shows up to {DRILL_SIZE} items, ones you have not seen first.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className={buttonSecondary} onClick={() => setSelected(new Set(weakestCategories(stats, DRILLABLE)))}>
          Select weakest 5
        </button>
        <button type="button" className={buttonSecondary} onClick={() => setSelected(new Set())} disabled={selected.size === 0}>
          Clear
        </button>
      </div>

      {GROUPS.map((group) => (
        <fieldset key={group.id} className="mt-10">
          <legend className="text-lg font-semibold">
            {group.label} <span className="font-normal text-stone-500">· {group.subtitle}</span>
          </legend>
          <div className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
            {categoriesInGroup(group.id).map((c) => {
              const items = countItems({ category: c.id });
              const s = stats.get(c.id);
              return (
                <label
                  key={c.id}
                  className={`flex items-center gap-4 py-3 ${items === 0 ? "cursor-not-allowed text-stone-400" : "cursor-pointer"}`}
                >
                  <input
                    type="checkbox"
                    className="size-5 shrink-0 accent-stone-900"
                    disabled={items === 0}
                    checked={selected.has(c.id)}
                    onChange={() => toggle(c.id)}
                  />
                  <span className="flex-1">{c.label}</span>
                  <span className="text-right text-sm text-stone-500">
                    {items === 0 ? "no items yet" : `${items} ${items === 1 ? "item" : "items"}`}
                    {s && ` · ${percent(s.recentAccuracy)} last 10`}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className="sticky bottom-0 mt-10 border-t border-stone-200 bg-stone-50/95 py-4 backdrop-blur">
        <button
          type="button"
          className={buttonPrimary}
          disabled={available === 0}
          onClick={() => onStart(drillPlan(chosen, attempts))}
        >
          {available === 0 ? "Select a category to start" : `Start drill · ${Math.min(available, DRILL_SIZE)} items`}
        </button>
      </div>
    </div>
  );
}
