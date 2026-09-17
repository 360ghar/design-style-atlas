"use client";

import { useState } from "react";

export function StyleActions({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rawUrl = `/designs/${slug}/DESIGN.md`;
  // NOTE: a bare `DESIGN.md` download name would lose the style identity
  // when several files land in ~/Downloads (and collides on re-download).
  // `<slug>-DESIGN.md` keeps the "@DESIGN.md" contract (substring match)
  // while staying unique per style.
  const downloadName = `${slug}-DESIGN.md`;

  async function fetchRaw(): Promise<string> {
    const res = await fetch(rawUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
  }

  /** iOS-safe fallback: fixed + readonly + opacity-0 + 16px font avoids
   *  zoom/focus jumps; setSelectionRange covers Safari selection quirks. */
  function legacyCopy(text: string): void {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.readOnly = true;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "0";
    ta.style.opacity = "0";
    ta.style.fontSize = "16px";
    document.body.appendChild(ta);
    ta.focus({ preventScroll: true });
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } finally {
      document.body.removeChild(ta);
    }
    if (!ok) throw new Error("execCommand copy returned false");
  }

  function markCopied() {
    setCopied(true);
    setSuccess("DESIGN.md copied to clipboard.");
    setTimeout(() => {
      setCopied(false);
      setSuccess(null);
    }, 2000);
  }

  async function copy() {
    setError(null);
    // Fetch ONCE, then try modern clipboard → legacy fallback on the same text.
    // (The old code re-fetched inside the catch: double network cost, and a
    // second failure mode if the first fetch had actually succeeded.)
    let text: string;
    try {
      text = await fetchRaw();
    } catch {
      setError("Copy failed — use Download or View raw instead.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      markCopied();
    } catch {
      try {
        legacyCopy(text);
        markCopied();
      } catch {
        setError("Copy failed — use Download or View raw instead.");
      }
    }
  }

  async function download() {
    setError(null);
    try {
      const text = await fetchRaw();
      const blob = new Blob([text], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      // iOS Safari ignores `a.download` for cross-origin/blob URLs, so open
      // the blob in a new tab as a fallback target — the user can Share/Save.
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadName;
      if (isIOS) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    } catch {
      setError("Download failed — use View raw instead.");
    }
  }

  const btn =
    "inline-flex items-center gap-1.5 border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          className={`${btn} border-[#111110] bg-[#111110] text-white hover:bg-transparent hover:text-[#111110]`}
        >
          {copied ? "✓ Copied!" : "⧉ Copy DESIGN.md"}
        </button>
        <button
          type="button"
          onClick={download}
          className={`${btn} border-[#111110] bg-white hover:bg-[#111110] hover:text-white`}
        >
          ↓ Download DESIGN.md
        </button>
        <a href={rawUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border-[#111110]/30 bg-transparent hover:border-[#111110]`}>
          View raw ↗
        </a>
      </div>
      {error && (
        <p role="alert" className="mt-2 font-mono text-[11px] text-red-700">
          {error}
        </p>
      )}
      <p aria-live="polite" className="mt-2 font-mono text-[11px] text-[#111110]/50">
        {success ??
          "Paste into Codex, Claude Code, Cursor or Windsurf as "}
        {!success && <code>@DESIGN.md</code>}
        {!success && (
          <>
            . File: <code>/designs/{slug}/DESIGN.md</code>
          </>
        )}
      </p>
    </div>
  );
}
