"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DetailNav({
  prev,
  next,
}: {
  prev: { slug: string; name: string } | null;
  next: { slug: string; name: string } | null;
}) {
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowLeft" && prev) {
        e.preventDefault();
        router.push(`/styles/${prev.slug}`);
      } else if (e.key === "ArrowRight" && next) {
        e.preventDefault();
        router.push(`/styles/${next.slug}`);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, router]);

  return (
    <nav aria-label="Previous and next styles" className="mt-6 flex flex-wrap items-center gap-2">
      {prev ? (
        <Link
          href={`/styles/${prev.slug}`}
          className="border border-current px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-80 hover:opacity-100 hover:gap-2 transition-all"
        >
          ← {prev.name}
        </Link>
      ) : (
        <span className="border border-current px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-30">
          ← First
        </span>
      )}
      {next ? (
        <Link
          href={`/styles/${next.slug}`}
          className="border border-current px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-80 hover:opacity-100 transition-all"
        >
          {next.name} →
        </Link>
      ) : (
        <span className="border border-current px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-30">
          Last →
        </span>
      )}
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] opacity-50">
        tip: ← → to browse
      </span>
    </nav>
  );
}
