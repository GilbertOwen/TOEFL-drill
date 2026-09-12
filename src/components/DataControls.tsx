import { useRef, useState } from "react";
import { daysAgoLabel, localDateString } from "../lib/format.ts";
import { logStore, useLog, type ImportResult, type Notice } from "../lib/store.ts";
import { buttonSecondary as button, sectionHeading } from "./ui.ts";

type Message = { tone: "ok" | "error"; text: string };

/** Export and import of the whole log, plus storage warnings. Export is the only backup. */
export function DataControls() {
  const { attempts, lastExportAt, notice } = useLog();
  const fileInput = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<Message | null>(null);

  const unexported =
    lastExportAt === null ? attempts.length : attempts.filter((a) => a.at > lastExportAt).length;

  function exportNow() {
    const { filename, text } = logStore.exportLog();
    download(filename, text, "application/json");
    setMessage({ tone: "ok", text: `Saved ${count(attempts.length, "answer")} to ${filename}.` });
  }

  async function importFile(file: File) {
    setMessage(describeImport(logStore.importLog(await file.text())));
  }

  return (
    <>
      <section aria-labelledby="log-heading">
        <h2 id="log-heading" className={sectionHeading}>
          Your log
        </h2>
        {notice && <NoticeBanner notice={notice} />}
        <p className="mt-3 text-stone-700">
          {count(attempts.length, "answer")} logged · last exported{" "}
          {lastExportAt === null ? "never" : daysAgoLabel(lastExportAt)}
          {lastExportAt !== null && unexported > 0 && ` · ${unexported} since`}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <button type="button" className={button} onClick={exportNow} disabled={attempts.length === 0}>
            Export log
          </button>
          <button type="button" className={button} onClick={() => fileInput.current?.click()}>
            Import log
          </button>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = ""; // allow picking the same file again
              if (file) void importFile(file);
            }}
          />
        </div>
        {message && (
          <p role="status" className={`mt-3 ${message.tone === "error" ? "text-red-700" : "text-stone-700"}`}>
            {message.text}
          </p>
        )}
      </section>
      
      <CustomItemsControls />
    </>
  );
}

function CustomItemsControls() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<Message | null>(null);

  function exportBank() {
    // Dynamic import to avoid circular dependencies if any, or just import at top.
    import("../data/bank.ts").then(({ ITEMS, PASSAGES }) => {
      const text = JSON.stringify({ items: ITEMS, passages: PASSAGES }, null, 2);
      download(`itp-drill-bank-${localDateString(Date.now())}.json`, text, "application/json");
      setMessage({ tone: "ok", text: `Exported ${ITEMS.length} items.` });
    });
  }

  async function importCustomItems(file: File) {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      
      let items: any[] = [];
      let passages: any[] = [];
      
      if (Array.isArray(parsed)) {
        items = parsed;
      } else if (parsed && typeof parsed === "object") {
        items = Array.isArray(parsed.items) ? parsed.items : [];
        passages = Array.isArray(parsed.passages) ? parsed.passages : [];
      } else {
        throw new Error("Invalid format. Expected an array of items or { items: [], passages: [] }.");
      }

      // Merge with existing custom items in localStorage
      const raw = localStorage.getItem("toefl-itp-drill.custom-bank");
      let existingItems: any[] = [];
      let existingPassages: any[] = [];
      if (raw) {
        try {
          const existing = JSON.parse(raw);
          if (Array.isArray(existing.items)) existingItems = existing.items;
          if (Array.isArray(existing.passages)) existingPassages = existing.passages;
        } catch {
          // ignore
        }
      }

      const mergedItems = [...existingItems, ...items];
      const mergedPassages = [...existingPassages, ...passages];

      localStorage.setItem("toefl-itp-drill.custom-bank", JSON.stringify({ items: mergedItems, passages: mergedPassages }));
      
      // Reload page to re-evaluate bank.ts with new localStorage data
      window.location.reload();
    } catch (e) {
      setMessage({ tone: "error", text: `Failed to import: ${e instanceof Error ? e.message : "Unknown error"}` });
    }
  }

  function clearCustomItems() {
    if (window.confirm("Are you sure you want to delete all custom imported items from your browser?")) {
      localStorage.removeItem("toefl-itp-drill.custom-bank");
      window.location.reload();
    }
  }

  return (
    <section aria-labelledby="custom-heading" className="mt-14">
      <h2 id="custom-heading" className={sectionHeading}>
        Custom item bank
      </h2>
      <p className="mt-3 text-stone-700">
        Import JSON items generated by AI to instantly add them to your browser's practice bank.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button type="button" className={button} onClick={exportBank}>
          Export all items
        </button>
        <button type="button" className={button} onClick={() => fileInput.current?.click()}>
          Import custom items
        </button>
        <button type="button" className={`${button} text-red-700 border-red-200 hover:bg-red-50`} onClick={clearCustomItems}>
          Clear custom items
        </button>
        <input
          ref={fileInput}
          type="file"
          accept=".json,application/json"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file) void importCustomItems(file);
          }}
        />
      </div>
      {message && (
        <p role="status" className={`mt-3 ${message.tone === "error" ? "text-red-700" : "text-stone-700"}`}>
          {message.text}
        </p>
      )}
    </section>
  );
}

function NoticeBanner({ notice }: { notice: Notice }) {
  const box = "mt-3 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-amber-950";
  if (notice.kind === "not-saving") {
    return (
      <p role="alert" className={box}>
        Answers are not being saved in this browser: storage is blocked or full. Export your log
        before closing this tab.
      </p>
    );
  }
  return (
    <div role="alert" className={box}>
      <p>
        Some saved progress could not be read{notice.reason && ` because ${notice.reason}`}, so it
        was set aside instead of loaded. Nothing has been deleted.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          className={button}
          onClick={() =>
            download(`itp-drill-set-aside-${localDateString(Date.now())}.txt`, logStore.setAsideText(), "text/plain")
          }
        >
          Download set-aside data
        </button>
        <button
          type="button"
          className={button}
          onClick={() => {
            if (window.confirm("Permanently delete the set-aside data?")) logStore.discardSetAside();
          }}
        >
          Discard it
        </button>
      </div>
    </div>
  );
}

function describeImport(result: ImportResult): Message {
  if (!result.ok) return { tone: "error", text: `That file could not be imported because ${result.reason}.` };
  const parts = [`Imported ${count(result.added, "new answer")}`];
  if (result.duplicates > 0) parts.push(`${result.duplicates} already in your log`);
  if (result.skipped > 0) parts.push(`${result.skipped} damaged and skipped`);
  return { tone: "ok", text: `${parts.join("; ")}.` };
}

function count(n: number, noun: string): string {
  return `${n.toLocaleString("en-US")} ${noun}${n === 1 ? "" : "s"}`;
}

function download(filename: string, text: string, type: string): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = Object.assign(document.createElement("a"), { href: url, download: filename });
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
