"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { StyleMeta } from "../lib/styles";
import type { PreviewThemeMode } from "../lib/preview-theme";
import { getVibes, matchesVibes, type StyleVibes } from "../lib/vibes";
import { StyleCard } from "./StyleCard";

/** Debounce for the URL write-back so typing never blocks on navigation. */
const URL_SYNC_DEBOUNCE_MS = 150;
const PAGE_SIZE = 24;

type CatalogProps = {
  styles: StyleMeta[];
  categories: { name: string; count: number }[];
};

type VibeFilter = Partial<StyleVibes>;

const VIBE_GROUPS: {
  key: keyof StyleVibes;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "brightness",
    options: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
    ],
  },
  {
    key: "saturation",
    options: [
      { value: "saturated", label: "Saturated" },
      { value: "muted", label: "Muted" },
    ],
  },
  {
    key: "type",
    options: [
      { value: "serif", label: "Serif" },
      { value: "sans", label: "Sans" },
      { value: "mono", label: "Mono" },
    ],
  },
  {
    key: "mood",
    options: [
      { value: "playful", label: "Playful" },
      { value: "serious", label: "Serious" },
    ],
  },
];

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
          vibes={{}}
          compare={[]}
          visibleCount={PAGE_SIZE}
          onQuery={() => {}}
          onCategory={() => {}}
          onPreviewTheme={() => {}}
          onVibes={() => {}}
          onToggleCompare={() => {}}
          onClearCompare={() => {}}
          onShuffle={() => {}}
          onLoadMore={() => {}}
          onReset={() => {}}
          inputRef={{ current: null }}
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const urlQuery = searchParams.get("q") ?? "";
  const rawUrlCategory = searchParams.get("cat");
  const urlCategory =
    rawUrlCategory && categories.some((c) => c.name === rawUrlCategory)
      ? rawUrlCategory
      : null;

  const [query, setQuery] = useState(urlQuery);
  const [category, setCategory] = useState<string | null>(urlCategory);
  const [previewTheme, setPreviewTheme] = useState<PreviewThemeMode>("default");
  const [vibes, setVibes] = useState<VibeFilter>({});
  const [compare, setCompare] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Adjusting state during render (React docs pattern): URL is the source of
  // truth on back/forward navigation. Single prev-object replaces two last* states.
  const [prevUrl, setPrevUrl] = useState({ query: urlQuery, category: urlCategory });
  if (prevUrl.query !== urlQuery || prevUrl.category !== urlCategory) {
    setPrevUrl({ query: urlQuery, category: urlCategory });
    setQuery(urlQuery);
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

  // "/" focuses search from anywhere on the catalog page.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName?.toLowerCase();
      if (e.key === "/" && tag !== "input" && tag !== "textarea") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleVibe(key: keyof StyleVibes, value: string) {
    setVibes((prev) => ({
      ...prev,
      [key]: prev[key] === value ? undefined : (value as never),
    }));
    setVisibleCount(PAGE_SIZE);
  }

  function toggleCompare(slug: string) {
    setCompare((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length >= 2
          ? [prev[1], slug]
          : [...prev, slug]
    );
  }

  function shuffle() {
    const pool = styles;
    if (pool.length === 0) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    router.push(`/styles/${pick.slug}`);
  }

  return (
    <CatalogUI
      styles={styles}
      categories={categories}
      query={query}
      category={category}
      previewTheme={previewTheme}
      vibes={vibes}
      compare={compare}
      visibleCount={visibleCount}
      onQuery={(q) => {
        setQuery(q);
        setVisibleCount(PAGE_SIZE);
      }}
      onCategory={(name) => {
        setCategory((prev) => (name === null ? null : prev === name ? null : name));
        setVisibleCount(PAGE_SIZE);
      }}
      onPreviewTheme={setPreviewTheme}
      onVibes={toggleVibe}
      onToggleCompare={toggleCompare}
      onClearCompare={() => setCompare([])}
      onShuffle={shuffle}
      onLoadMore={() => setVisibleCount((c) => c + PAGE_SIZE)}
      onReset={() => {
        setQuery("");
        setCategory(null);
        setPreviewTheme("default");
        setVibes({});
        setCompare([]);
        setVisibleCount(PAGE_SIZE);
      }}
      inputRef={inputRef}
    />
  );
}

function CatalogUI({
  styles,
  categories,
  query,
  category,
  previewTheme,
  vibes,
  compare,
  visibleCount,
  onQuery,
  onCategory,
  onPreviewTheme,
  onVibes,
  onToggleCompare,
  onClearCompare,
  onShuffle,
  onLoadMore,
  onReset,
  inputRef,
  readOnly = false,
}: CatalogProps & {
  query: string;
  category: string | null;
  previewTheme: PreviewThemeMode;
  vibes: VibeFilter;
  compare: string[];
  visibleCount: number;
  onQuery: (q: string) => void;
  onCategory: (name: string | null) => void;
  onPreviewTheme: (mode: PreviewThemeMode) => void;
  onVibes: (key: keyof StyleVibes, value: string) => void;
  onToggleCompare: (slug: string) => void;
  onClearCompare: () => void;
  onShuffle: () => void;
  onLoadMore: () => void;
  onReset: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  readOnly?: boolean;
}) {
  const slugToIndex = useMemo(
    () => new Map(styles.map((s, i) => [s.slug, i] as const)),
    [styles]
  );

  const vibeCache = useMemo(() => {
    const m = new Map<string, ReturnType<typeof getVibes>>();
    for (const s of styles) m.set(s.slug, getVibes(s));
    return m;
  }, [styles]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return styles.filter((s) => {
      if (category && s.category !== category) return false;
      if (!matchesVibes(s, vibes, vibeCache)) return false;
      if (!q) return true;
      const hay =
        `${s.name} ${s.description} ${s.category} ${s.tags.join(" ")} ${s.slug.replace(/-/g, " ")}`.toLowerCase();
      return q.split(/\s+/).every((tok) => hay.includes(tok));
    });
  }, [styles, query, category, vibes, vibeCache]);

  const visible = results.slice(0, visibleCount);
  const hasMore = visibleCount < results.length;
  const vibeActiveCount = Object.values(vibes).filter(Boolean).length;

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!hasMore || readOnly) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) onLoadMore();
      },
      { rootMargin: "600px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore, onLoadMore, readOnly, visibleCount]);

  return (
    <div>
      <div className="sticky top-14 z-30 -mx-4 border-y border-[#111110]/15 dark:border-white/15 bg-[#fafaf8]/95 dark:bg-[#0c0c0e]/95 px-4 py-3 backdrop-blur transition-colors sm:-mx-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2.5">
          <label className="flex items-center gap-3 border border-[#111110] dark:border-white/30 bg-white dark:bg-[#141416] px-4 py-3 focus-within:shadow-[3px_3px_0_#111110] dark:focus-within:shadow-[3px_3px_0_rgba(255,255,255,0.85)] transition-all">
            <span aria-hidden="true" className="font-mono text-sm text-[#111110]/50 dark:text-white/50">⌕</span>
            <input
              ref={inputRef}
              type="search"
              autoComplete="off"
              enterKeyHint="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              readOnly={readOnly}
              placeholder="Search all design styles…  (try “brutal”, “neon”, “serif” — press / to focus)"
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

            <div className="flex items-center gap-2">
              {/* Shuffle */}
              <button
                type="button"
                onClick={onShuffle}
                title="Open a random style"
                className="border border-[#111110]/20 dark:border-white/20 bg-white dark:bg-[#141416] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#111110]/70 dark:text-white/70 hover:border-[#111110] dark:hover:border-white hover:text-[#111110] dark:hover:text-white cursor-pointer transition-colors"
              >
                ⤨ Shuffle
              </button>
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

          {/* Vibe Filter Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[#111110]/10 dark:border-white/10 pt-2" role="group" aria-label="Filter by vibe">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50">
              Vibe{vibeActiveCount > 0 ? ` (${vibeActiveCount})` : ""}:
            </span>
            {VIBE_GROUPS.map((g) => (
              <span key={g.key} className="flex items-center gap-1">
                {g.options.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => onVibes(g.key, o.value)}
                    aria-pressed={vibes[g.key] === o.value}
                    className={`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors cursor-pointer ${
                      vibes[g.key] === o.value
                        ? "border-[#111110] bg-[#111110] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]"
                        : "border-[#111110]/20 dark:border-white/20 text-[#111110]/60 dark:text-white/60 hover:border-[#111110] dark:hover:border-white"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </span>
            ))}
            {vibeActiveCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  for (const g of VIBE_GROUPS) {
                    if (vibes[g.key]) onVibes(g.key, vibes[g.key] as string);
                  }
                }}
                className="font-mono text-[10px] uppercase tracking-[0.08em] underline underline-offset-4 text-[#111110]/60 dark:text-white/60 cursor-pointer"
              >
                Clear vibes
              </button>
            )}
          </div>

          {/* Compare tray */}
          {compare.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 border border-[#111110] dark:border-white/30 bg-white dark:bg-[#141416] px-3 py-2">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em]">
                Compare ({compare.length}/2):
              </span>
              {compare.map((slug) => (
                <button
                  key={slug}
                  type="button"
                  onClick={() => onToggleCompare(slug)}
                  title="Remove from comparison"
                  className="border border-[#111110]/30 dark:border-white/30 px-2 py-0.5 font-mono text-[10.5px] hover:border-[#111110] dark:hover:border-white cursor-pointer"
                >
                  {slug} ✕
                </button>
              ))}
              <span className="flex-1" />
              <button
                type="button"
                onClick={onClearCompare}
                className="font-mono text-[10.5px] uppercase tracking-[0.1em] underline underline-offset-4 cursor-pointer"
              >
                Clear
              </button>
              <Link
                href={`/compare?compare=${compare.join(",")}`}
                className={`border px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  compare.length === 2
                    ? "border-[#111110] bg-[#111110] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]"
                    : "border-[#111110]/20 dark:border-white/20 opacity-60 pointer-events-none"
                }`}
                aria-disabled={compare.length !== 2}
              >
                Open 2-up →
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50" role="status" aria-live="polite">
          {results.length === styles.length && vibeActiveCount === 0
            ? `Showing all ${styles.length} styles`
            : `${results.length} of ${styles.length} styles${query ? ` for “${query}”` : ""}${category ? ` in ${category}` : ""}${vibeActiveCount > 0 ? ` · ${vibeActiveCount} vibe filter${vibeActiveCount > 1 ? "s" : ""}` : ""}`}
          {results.length > visible.length ? ` · showing ${visible.length}` : ""}
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
          <>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((s) => (
                <StyleCard
                  key={s.slug}
                  style={s}
                  index={slugToIndex.get(s.slug) ?? 0}
                  previewTheme={previewTheme}
                  compareActive={compare.includes(s.slug)}
                  onToggleCompare={onToggleCompare}
                />
              ))}
            </div>
            {hasMore && (
              <div ref={sentinelRef} className="mt-8 text-center">
                <button
                  type="button"
                  onClick={onLoadMore}
                  className="border border-[#111110] bg-transparent px-6 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#111110] hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-[#0c0c0e] cursor-pointer transition-colors"
                >
                  Load more ({results.length - visible.length} left)
                </button>
              </div>
            )}
          </>
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
