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
