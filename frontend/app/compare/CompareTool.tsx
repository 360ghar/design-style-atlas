"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CompareView } from "../components/CompareView";
import { STYLE_DEFINITIONS } from "../lib/style-definitions";

/** Own-key check so inherited query values like `__proto__` are rejected. */
function isKnownStyle(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(STYLE_DEFINITIONS, slug);
}

export function CompareTool() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-14 font-mono text-sm">Loading comparison…</div>}>
      <CompareInner />
    </Suspense>
  );
}

function CompareInner() {
  const params = useSearchParams();
  const raw = params.get("compare") ?? "";
  const aParam = params.get("a");
  const bParam = params.get("b");
  let pair = raw.split(",").map((s) => s.trim()).filter(Boolean);
  if (pair.length < 2 && (aParam || bParam)) {
    pair = [aParam ?? "", bParam ?? ""].map((s) => s.trim()).filter(Boolean);
  }
  const [a, b] = pair;
  const valid = Boolean(a && b && isKnownStyle(a) && isKnownStyle(b));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50">
        <Link href="/" className="hover:underline">Index</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-[var(--ink)] font-semibold">Compare</span>
      </nav>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Compare styles</h1>
      <p className="mt-2 max-w-2xl font-serif text-[17px] italic text-[#111110]/70 dark:text-white/70">
        Two styles side by side. Share the URL to share the comparison.
      </p>
      <div className="mt-6">
        {valid ? (
          <CompareView a={a} b={b} />
        ) : (
          <div className="border border-dashed border-[#111110]/30 dark:border-white/30 p-10 text-center">
            <p className="font-serif text-2xl italic">Pick two styles to compare.</p>
            <p className="mt-2 text-sm text-[#111110]/60 dark:text-white/60">
              Example: <code className="font-mono text-[12px]">/compare?compare=neo-brutalism,swiss-design</code>
            </p>
            <Link href="/#catalog" className="mt-4 inline-block border border-[#111110] bg-[#111110] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]">
              Browse catalog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
