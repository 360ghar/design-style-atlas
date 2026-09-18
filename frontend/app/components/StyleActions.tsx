"use client";

import { useEffect, useRef, useState } from "react";
import { copyText, downloadText } from "../lib/clipboard";

type CopyKind = "full" | "slim" | "tailwind" | "cssvars";

const KIND_LABEL: Record<CopyKind, string> = {
  full: "Full DESIGN.md",
  slim: "Slim prompt",
  tailwind: "Tailwind snippet",
  cssvars: "CSS variables",
};

export function StyleActions({ slug }: { slug: string }) {
  const [copiedKind, setCopiedKind] = useState<CopyKind | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<CopyKind | null>(null);
  const success = copiedKind ? `${KIND_LABEL[copiedKind]} copied to clipboard.` : null;
  const rawUrl = `/designs/${slug}/DESIGN.md`;
  const apiUrl = `/api/${slug}.json`;
  const downloadName = `${slug}-DESIGN.md`;
  const rawCache = useRef<{ slug: string; promise: Promise<string> } | null>(null);
  const apiCache = useRef<{
    slug: string;
    promise: Promise<{
      slim: string;
      full: string;
      tokens: { cssVars: string; tailwind: string };
    }>;
  } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    rawCache.current = null;
    apiCache.current = null;
  }, [slug]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function fetchRaw(): Promise<string> {
    if (rawCache.current?.slug === slug) return rawCache.current.promise;
    const promise = fetch(rawUrl).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    });
    rawCache.current = { slug, promise };
    return promise;
  }

  async function fetchApi(): Promise<{
    slim: string;
    full: string;
    tokens: { cssVars: string; tailwind: string };
  }> {
    if (apiCache.current?.slug === slug) return apiCache.current.promise;
    const promise = fetch(apiUrl).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    });
    apiCache.current = { slug, promise };
    return promise;
  }

  function markCopied(kind: CopyKind) {
    setCopiedKind(kind);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopiedKind(null);
    }, 2200);
  }

  async function copyKind(kind: CopyKind) {
    setError(null);
    setBusy(kind);
    try {
      let text: string;
      if (kind === "full") {
        text = await fetchRaw();
      } else {
        const api = await fetchApi();
        text =
          kind === "slim"
            ? api.slim
            : kind === "tailwind"
              ? api.tokens.tailwind
              : api.tokens.cssVars;
      }
      await copyText(text);
      markCopied(kind);
    } catch {
      setError("Copy failed — use Download or View raw instead.");
    } finally {
      setBusy(null);
    }
  }

  async function download() {
    setError(null);
    try {
      const text = await fetchRaw();
      downloadText(text, downloadName);
    } catch {
      setError("Download failed — use View raw instead.");
    }
  }

  const btn =
    "inline-flex items-center gap-1.5 border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer disabled:opacity-60";

  const copyBtn = (kind: CopyKind, primary = false) => (
    <button
      key={kind}
      type="button"
      disabled={busy !== null}
      onClick={() => copyKind(kind)}
      title={
        kind === "slim"
          ? "Under 1500 tokens — for tight context windows"
          : kind === "full"
            ? "Complete DESIGN.md"
            : kind === "tailwind"
              ? "theme.extend snippet"
              : ":root CSS variables"
      }
      className={
        primary
          ? `${btn} border-[#111110] bg-[#111110] text-white hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white`
          : `${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`
      }
    >
      {busy === kind
        ? "…"
        : copiedKind === kind
          ? "✓ Copied!"
          : kind === "full"
            ? "⧉ Copy full"
            : kind === "slim"
              ? "⧉ Copy slim"
              : kind === "tailwind"
                ? "{ } Tailwind"
                : ":root CSS vars"}
    </button>
  );

  return (
    <div>
      <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#111110]/50 dark:text-white/50">
        Copy as
      </p>
      <div className="flex flex-wrap gap-2">
        {copyBtn("full", true)}
        {copyBtn("slim")}
        {copyBtn("tailwind")}
        {copyBtn("cssvars")}
        <button
          type="button"
          onClick={download}
          className={`${btn} border-[#111110] bg-white text-[#111110] hover:bg-[#111110] hover:text-white dark:border-white/30 dark:bg-[#141416] dark:text-white dark:hover:bg-white dark:hover:text-[#0c0c0e]`}
        >
          ↓ Download
        </button>
        <a
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`}
        >
          View raw ↗
        </a>
        <a
          href={apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`}
        >
          JSON ↗
        </a>
        <a
          href={`/api/${slug}.contract.json`}
          target="_blank"
          rel="noopener noreferrer"
          title="Machine token contract — used by the audit CLI and MCP get_contract"
          className={`${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`}
        >
          Contract ↗
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
            . Slim fits tight contexts. File: <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-[var(--ink)]">/designs/{slug}/DESIGN.md</code>
          </>
        )}
      </p>
    </div>
  );
}
