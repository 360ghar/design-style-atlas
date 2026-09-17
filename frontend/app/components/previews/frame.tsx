import type { ReactNode } from "react";
import type { StyleMeta } from "../../lib/styles";

/**
 * Shared frame for every preview. Pass `large` on detail pages for a denser
 * composition; catalog cards use the compact default.
 */
export function Frame({
  meta,
  large,
  children,
}: {
  meta: StyleMeta;
  large?: boolean;
  children: ReactNode;
}) {
  const p = meta.preview;
  return (
    <div
      className="style-preview relative w-full overflow-hidden"
      style={{
        background: p.bg,
        color: p.ink,
        aspectRatio: large ? "16 / 9" : "4 / 3",
        fontFamily: p.body,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function Meta({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-1.5 px-2 py-1 font-mono uppercase"
      style={{
        fontSize: large ? 9 : 8,
        letterSpacing: "0.14em",
        background: p.surface,
        color: p.muted,
        borderTop: `1px solid ${p.ink}22`,
        borderRight: `1px solid ${p.ink}22`,
      }}
    >
      <span
        className="inline-block rounded-full"
        style={{ width: 7, height: 7, background: p.accent }}
      />
      {meta.slug}
    </div>
  );
}
