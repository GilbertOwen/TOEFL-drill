import { useMemo } from "react";
import { countItems } from "../data/bank.ts";
import { GROUPS, categoriesInGroup } from "../data/categories.ts";
import { percent } from "../lib/format.ts";
import { drillPlan, type SessionPlan } from "../lib/plans.ts";
import { statsByCategory, statusOf, type Status } from "../lib/stats.ts";
import { useLog } from "../lib/store.ts";
import { buttonSecondary } from "./ui.ts";

const STATUS: Record<Status, { label: string; tone: string }> = {
  untested: { label: "Not ranked yet", tone: "bg-stone-200 text-stone-700" },
  weak: { label: "Weak", tone: "bg-red-100 text-red-900" },
  slow: { label: "Slow but correct", tone: "bg-amber-100 text-amber-900" },
  ok: { label: "On track", tone: "bg-green-100 text-green-900" },
};

/** Every category's rule, with your numbers beside it. */
export function Reference({ onStart }: { onStart: (plan: SessionPlan) => void }) {
  const { attempts } = useLog();
  const stats = useMemo(() => statsByCategory(attempts), [attempts]);

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Category reference</h1>
      <p className="mt-2 text-stone-700">The rule behind each category, with your recent results.</p>
      {GROUPS.map((group) => (
        <section key={group.id} className="mt-12" aria-labelledby={`group-${group.id}`}>
          <h2 id={`group-${group.id}`} className="text-lg font-semibold">
            {group.label} <span className="font-normal text-stone-500">· {group.subtitle}</span>
          </h2>
          <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
            {categoriesInGroup(group.id).map((c) => {
              const s = stats.get(c.id);
              const status = STATUS[statusOf(s)];
              const items = countItems({ category: c.id });
              return (
                <article key={c.id} id={c.id} className="py-6">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="text-lg font-semibold">{c.label}</h3>
                    {items > 0 && (
                      <button type="button" className={buttonSecondary} onClick={() => onStart(drillPlan([c.id], attempts))}>
                        Drill this · {items} {items === 1 ? "item" : "items"}
                      </button>
                    )}
                  </div>
                  <p className="mt-2 max-w-prose leading-relaxed text-stone-800">{c.description}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-600">
                    <span className={`rounded px-2 py-0.5 font-medium ${status.tone}`}>{status.label}</span>
                    {s ? (
                      <span>
                        {percent(s.recentAccuracy)} last {s.recentAttempts} · {percent(s.accuracy)} overall · {s.attempts}{" "}
                        {s.attempts === 1 ? "answer" : "answers"} · {Math.round(s.medianSeconds)} s median
                      </span>
                    ) : (
                      <span>Not practiced yet</span>
                    )}
                    {items === 0 && <span>· no items in the bank yet</span>}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
