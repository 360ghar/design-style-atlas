"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { StyleMeta } from "../lib/styles";
import type { PreviewThemeMode } from "../lib/preview-theme";
import { StyleCard } from "./StyleCard";

/** Debounce for the URL write-back so typing never blocks on navigation. */
const URL_SYNC_DEBOUNCE_MS = 150;

type CatalogProps = {
  styles: StyleMeta[];
  categories: { name: string; count: number }[];
};

export function SearchCatalog({ styles, categories }: CatalogProps) {
  return (
    <Suspense
      fallback={
        <CatalogUI
          styles={styles}
          categories={categories}
          query=""
          category={null}
          previewTheme="default"
          onQuery={() => {}}
          onCategory={() => {}}
          onPreviewTheme={() => {}}
          onReset={() => {}}
          readOnly
        />
      }
    >
      <SearchCatalogSynced styles={styles} categories={categories} />
    </Suspense>
  );
}

function SearchCatalogSynced({ styles, categories }: CatalogProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlQuery = searchParams.get("q") ?? "";
  const rawUrlCategory = searchParams.get("cat");
  const urlCategory =
    rawUrlCategory && categories.some((c) => c.name === rawUrlCategory)
      ? rawUrlCategory
      : null;

  const [query, setQuery] = useState(urlQuery);
  const [category, setCategory] = useState<string | null>(urlCategory);
  const [previewTheme, setPreviewTheme] = useState<PreviewThemeMode>("default");

  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setQuery(urlQuery);
  }
  const [lastUrlCategory, setLastUrlCategory] = useState(urlCategory);
  if (urlCategory !== lastUrlCategory) {
    setLastUrlCategory(urlCategory);
    setCategory(urlCategory);
  }

  // Debounced write-back of ?q= + ?cat=.
  useEffect(() => {
    const handle = setTimeout(() => {
      const params = new URLSearchParams();
      if (query) params.set("q", query);
      if (category) params.set("cat", category);
      const next = params.toString();
      if (next !== searchParams.toString()) {
        router.replace(next ? `${pathname}?${next}` : pathname, {
          scroll: false,
        });
      }
    }, URL_SYNC_DEBOUNCE_MS);
    return () => clearTimeout(handle);
  }, [query, category, pathname, router, searchParams]);

  return (
    <CatalogUI
      styles={styles}
      categories={categories}
      query={query}
      category={category}
      previewTheme={previewTheme}
      onQuery={setQuery}
      onCategory={(name) =>
        setCategory((prev) => (name === null ? null : prev === name ? null : name))
      }
      onPreviewTheme={setPreviewTheme}
      onReset={() => {
        setQuery("");
        setCategory(null);
        setPreviewTheme("default");
      }}
    />
  );
}

function CatalogUI({
  styles,
  categories,
  query,
  category,
  previewTheme,
  onQuery,
  onCategory,
  onPreviewTheme,
  onReset,
  readOnly = false,
}: CatalogProps & {
  query: string;
  category: string | null;
  previewTheme: PreviewThemeMode;
  onQuery: (q: string) => void;
  onCategory: (name: string | null) => void;
  onPreviewTheme: (mode: PreviewThemeMode) => void;
  onReset: () => void;
  readOnly?: boolean;
}) {
  const slugToIndex = useMemo(
    () => new Map(styles.map((s, i) => [s.slug, i] as const)),
    [styles]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return styles.filter((s) => {
      if (category && s.category !== category) return false;
      if (!q) return true;
      const hay =
        `${s.name} ${s.description} ${s.category} ${s.tags.join(" ")} ${s.slug.replace(/-/g, " ")}`.toLowerCase();
      return q.split(/\s+/).every((tok) => hay.includes(tok));
    });
  }, [styles, query, category]);

  return (
    <div>
      <div className="sticky top-14 z-30 -mx-4 border-y border-[#111110]/15 dark:border-white/15 bg-[#fafaf8]/95 dark:bg-[#0c0c0e]/95 px-4 py-3 backdrop-blur transition-colors sm:-mx-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2.5">
          <label className="flex items-center gap-3 border border-[#111110] dark:border-white/30 bg-white dark:bg-[#141416] px-4 py-3 focus-within:shadow-[3px_3px_0_#111110] dark:focus-within:shadow-[3px_3px_0_rgba(255,255,255,0.85)] transition-all">
            <span aria-hidden="true" className="font-mono text-sm text-[#111110]/50 dark:text-white/50">⌕</span>
            <input
              type="search"
              autoComplete="off"
              enterKeyHint="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              readOnly={readOnly}
              placeholder="Search all design styles…  (try “brutal”, “neon”, “serif”)"
              aria-label="Search all design styles"
              className="w-full bg-transparent text-[15px] outline-none text-[var(--ink)] placeholder:text-[#111110]/40 dark:placeholder:text-white/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQuery("")}
                className="font-mono text-[11px] uppercase tracking-widest text-[#111110]/50 dark:text-white/50 hover:text-[#111110] dark:hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </label>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5" role="group" aria-label="Filter by category">
              <FilterChip label={`All (${styles.length})`} active={!category} onClick={() => onCategory(null)} />
              {categories.map((c) => (
                <FilterChip
                  key={c.name}
                  label={`${c.name} (${c.count})`}
                  active={category === c.name}
                  onClick={() => onCategory(c.name)}
                />
              ))}
            </div>

            {/* Preview Card Theming Toolbar */}
            <div
              className="flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-white dark:bg-[#141416] p-0.5 font-mono text-[10.5px]"
              role="group"
              aria-label="Card preview theme"
            >
              <span className="px-2 text-[10px] uppercase tracking-wider text-[#111110]/50 dark:text-white/50 hidden md:inline">
                Previews:
              </span>
              <button
                type="button"
                onClick={() => onPreviewTheme("default")}
                aria-pressed={previewTheme === "default"}
                title="View original style palettes"
                className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  previewTheme === "default"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#0c0c0e] font-bold"
                    : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                ✦ Original
              </button>
              <button
                type="button"
                onClick={() => onPreviewTheme("light")}
                aria-pressed={previewTheme === "light"}
                title="Preview all styles in Light mode"
                className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  previewTheme === "light"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#0c0c0e] font-bold"
                    : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                ☀️ Light
              </button>
              <button
                type="button"
                onClick={() => onPreviewTheme("dark")}
                aria-pressed={previewTheme === "dark"}
                title="Preview all styles in Dark mode"
                className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  previewTheme === "dark"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#0c0c0e] font-bold"
                    : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                🌙 Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50" role="status" aria-live="polite">
          {results.length === styles.length
            ? `Showing all ${styles.length} styles`
            : `${results.length} of ${styles.length} styles${query ? ` for “${query}”` : ""}${category ? ` in ${category}` : ""}`}
        </p>
        {results.length === 0 ? (
          <div className="mt-6 border border-dashed border-[#111110]/30 dark:border-white/30 p-10 text-center">
            <p className="font-serif text-2xl italic text-[var(--ink)]">Nothing in the archive matches.</p>
            <p className="mt-2 text-sm text-[#111110]/60 dark:text-white/60">
              Try “brutal”, “glass”, “retro”, or clear the filters.
            </p>
            <button
              type="button"
              onClick={onReset}
              className="mt-4 border border-[#111110] bg-[#111110] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white cursor-pointer transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((s) => (
              <StyleCard
                key={s.slug}
                style={s}
                index={slugToIndex.get(s.slug) ?? 0}
                previewTheme={previewTheme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors cursor-pointer ${
        active
          ? "border-[#111110] bg-[#111110] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]"
          : "border-[#111110]/20 dark:border-white/20 bg-white dark:bg-[#141416] text-[#111110]/70 dark:text-white/70 hover:border-[#111110] dark:hover:border-white hover:text-[#111110] dark:hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
