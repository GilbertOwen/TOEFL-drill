import { useEffect, useState } from "react";
import { ChooseCategories } from "./components/ChooseCategories.tsx";
import { Dashboard } from "./components/Dashboard.tsx";
import { PracticeSession } from "./components/PracticeSession.tsx";
import { Reference } from "./components/Reference.tsx";
import { TimedSession } from "./components/TimedSession.tsx";
import type { SessionPlan } from "./lib/plans.ts";

type Page = "dashboard" | "choose" | "reference";
type Screen = { page: Page } | { session: SessionPlan; id: number };

const NAV: { page: Page; label: string }[] = [
  { page: "dashboard", label: "Dashboard" },
  { page: "choose", label: "Choose categories" },
  { page: "reference", label: "Reference" },
];

export default function App() {
  const [screen, setScreen] = useState<Screen>({ page: "dashboard" });
  const home = () => setScreen({ page: "dashboard" });
  const start = (session: SessionPlan) => setScreen({ session, id: Date.now() });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [screen]);

  if ("session" in screen) {
    const { session, id } = screen;
    return session.kind === "timed" ? (
      <TimedSession key={id} title={session.title} items={session.items} seconds={session.seconds} onExit={home} />
    ) : (
      <PracticeSession key={id} mode={session.mode} title={session.title} items={session.items} onExit={home} />
    );
  }

  return (
    <>
      <header className="border-b border-stone-200">
        <nav aria-label="Main" className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
          <span className="mr-auto text-lg font-semibold tracking-tight">ITP Drill</span>
          {NAV.map(({ page, label }) => (
            <button
              key={page}
              type="button"
              aria-current={screen.page === page ? "page" : undefined}
              onClick={() => setScreen({ page })}
              className={`rounded px-1 py-1 text-sm ${
                screen.page === page
                  ? "font-semibold text-stone-900 underline decoration-2 underline-offset-8"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {screen.page === "dashboard" && <Dashboard onStart={start} onChoose={() => setScreen({ page: "choose" })} />}
        {screen.page === "choose" && <ChooseCategories onStart={start} />}
        {screen.page === "reference" && <Reference onStart={start} />}
      </main>
    </>
  );
}
