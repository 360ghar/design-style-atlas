"use client";

import { useState } from "react";

export function StyleActions({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rawUrl = `/designs/${slug}/DESIGN.md`;
  const downloadName = `${slug}-DESIGN.md`;

  async function fetchRaw(): Promise<string> {
    const res = await fetch(rawUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
  }

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
    "inline-flex items-center gap-1.5 border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          className={`${btn} border-[#111110] bg-[#111110] text-white hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white`}
        >
          {copied ? "✓ Copied!" : "⧉ Copy DESIGN.md"}
        </button>
        <button
          type="button"
          onClick={download}
          className={`${btn} border-[#111110] bg-white text-[#111110] hover:bg-[#111110] hover:text-white dark:border-white/30 dark:bg-[#141416] dark:text-white dark:hover:bg-white dark:hover:text-[#0c0c0e]`}
        >
          ↓ Download DESIGN.md
        </button>
        <a
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`}
        >
          View raw ↗
        </a>
      </div>
      {error && (
        <p role="alert" className="mt-2 font-mono text-[11px] text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      <p aria-live="polite" className="mt-2 font-mono text-[11px] text-[#111110]/50 dark:text-white/50">
        {success ??
          "Paste into Codex, Claude Code, Cursor or Windsurf as "}
        {!success && <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-[var(--ink)]">@DESIGN.md</code>}
        {!success && (
          <>
            . File: <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-[var(--ink)]">/designs/{slug}/DESIGN.md</code>
          </>
        )}
      </p>
    </div>
  );
}
