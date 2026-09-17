import { memo } from "react";
import Link from "next/link";
import type { StyleMeta } from "../lib/styles";
import { StylePreview } from "./previews";

function StyleCardInner({ style, index }: { style: StyleMeta; index: number }) {
  return (
    <article className="group flex flex-col border border-[#111110]/15 bg-white transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111110]">
      <Link
        href={`/styles/${style.slug}`}
        className="block border-b border-[#111110]/15"
        aria-label={`View ${style.name} DESIGN.md`}
      >
        <StylePreview meta={style} />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#111110]/45">
            {String(index + 1).padStart(3, "0")} · {style.category}
          </p>
        </div>
        <Link href={`/styles/${style.slug}`} className="mt-1 w-fit">
          <h3 className="text-[17px] font-bold leading-tight tracking-tight group-hover:underline group-hover:underline-offset-4">
            {style.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-[#111110]/65">
          {style.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {style.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="border border-[#111110]/15 px-1.5 py-0.5 font-mono text-[10px] text-[#111110]/60"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/styles/${style.slug}`}
          className="mt-4 inline-flex items-center gap-1 border-t border-[#111110]/15 pt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] hover:gap-2"
        >
          View DESIGN.md <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export const StyleCard = memo(StyleCardInner);
