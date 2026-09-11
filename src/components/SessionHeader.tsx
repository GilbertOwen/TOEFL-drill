import type { ReactNode } from "react";
import { buttonQuiet } from "./ui.ts";

export function SessionHeader(props: { title: string; progress?: string; clock?: ReactNode; onExit: () => void }) {
  const { title, progress, clock, onExit } = props;
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-1 px-4 py-2.5 sm:px-6">
        <p className="font-semibold">{title}</p>
        {progress && <p className="tabular-nums text-stone-600">{progress}</p>}
        <div className="ml-auto flex items-center gap-3">
          {clock}
          <button type="button" className={buttonQuiet} onClick={onExit}>
            Exit <kbd className="hidden sm:inline">Esc</kbd>
          </button>
        </div>
      </div>
    </header>
  );
}

export function KeyHints({ timed = false }: { timed?: boolean }) {
  return (
    <p className="mt-10 hidden text-center text-sm text-stone-500 sm:block">
      <kbd>1</kbd>–<kbd>4</kbd> or <kbd>A</kbd>–<kbd>D</kbd> to answer · <kbd>Enter</kbd> next
      {timed && (
        <>
          {" "}
          · <kbd>←</kbd> back
        </>
      )}{" "}
      · <kbd>Esc</kbd> exit
    </p>
  );
}
