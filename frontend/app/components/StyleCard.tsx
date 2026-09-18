import { memo } from "react";
import Link from "next/link";
import type { StyleMeta } from "../lib/styles";
import type { PreviewThemeMode } from "../lib/preview-theme";
import { StylePreview } from "./previews";

function StyleCardInner({
  style,
  index,
  previewTheme = "default",
  compareActive = false,
  onToggleCompare,
}: {
  style: StyleMeta;
  index: number;
  previewTheme?: PreviewThemeMode;
  compareActive?: boolean;
  onToggleCompare?: (slug: string) => void;
}) {
  return (
    <article className="group flex flex-col border border-[#111110]/15 dark:border-white/15 bg-white dark:bg-[#141416] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111110] dark:hover:shadow-[4px_4px_0_rgba(255,255,255,0.85)]">
      {/* The preview is decorative (Frame is aria-hidden). Several bespoke
          previews contain their own <a>/<button>, so it must not be wrapped in
          a link: that nests interactive elements. Instead the preview is made
          inert and a sibling overlay link covers it. */}
      <div className="relative border-b border-[#111110]/15 dark:border-white/15 overflow-hidden">
        <div inert>
          <StylePreview meta={style} previewTheme={previewTheme} />
        </div>
        <Link
          href={`/styles/${style.slug}`}
          className="absolute inset-0 z-20"
          aria-label={`View ${style.name} DESIGN.md`}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#111110]/45 dark:text-white/45">
            {String(index + 1).padStart(3, "0")} · {style.category}
          </p>
        </div>
        <Link href={`/styles/${style.slug}`} className="mt-1 w-fit">
          <h3 className="text-[17px] font-bold leading-tight tracking-tight text-[var(--ink)] group-hover:underline group-hover:underline-offset-4">
            {style.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-[#111110]/65 dark:text-white/65">
          {style.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {style.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="border border-[#111110]/15 dark:border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-[#111110]/60 dark:text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#111110]/15 dark:border-white/15 pt-3">
          <Link
            href={`/styles/${style.slug}`}
            className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)] hover:gap-2 transition-all"
          >
            View DESIGN.md <span aria-hidden="true">→</span>
          </Link>
          {onToggleCompare && (
            <button
              type="button"
              onClick={() => onToggleCompare(style.slug)}
              aria-pressed={compareActive}
              title={compareActive ? "Remove from comparison" : "Add to comparison (max 2)"}
              className={`shrink-0 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors cursor-pointer ${
                compareActive
                  ? "border-[#111110] bg-[#111110] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]"
                  : "border-[#111110]/20 dark:border-white/20 text-[#111110]/60 dark:text-white/60 hover:border-[#111110] dark:hover:border-white hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              {compareActive ? "✓ vs" : "+ vs"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export const StyleCard = memo(StyleCardInner);
