import type { ReactNode } from "react";
import type { StyleMeta } from "../../lib/styles";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";
import { STYLE_DEFINITIONS } from "../../lib/style-definitions";

/**
 * Shared frame for every preview.
 * - On catalog cards (large = false): sets 4 / 3 aspect ratio with crisp containment.
 * - On detail / studio pages (large = true): provides expansive height and scrollable canvas.
 * - Supports light, dark, and default preview themes.
 */
export function Frame({
  meta,
  large,
  previewTheme = "default",
  children,
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
  children: ReactNode;
}) {
  const baseDef = STYLE_DEFINITIONS[meta.slug];
  const resolved = baseDef ? resolvePreviewTheme(baseDef, previewTheme) : null;
  const p = resolved ? resolved.preview : meta.preview;

  return (
    <div
      className="style-preview relative w-full overflow-hidden transition-colors duration-150"
      style={{
        background: p.bg,
        color: p.ink,
        aspectRatio: large ? undefined : "4 / 3",
        minHeight: large ? 640 : undefined,
        fontFamily: p.body,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function Meta({
  meta,
  large,
  previewTheme = "default",
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
}) {
  const baseDef = STYLE_DEFINITIONS[meta.slug];
  const resolved = baseDef ? resolvePreviewTheme(baseDef, previewTheme) : null;
  const p = resolved ? resolved.preview : meta.preview;

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-1.5 px-2 py-1 font-mono uppercase z-10 transition-colors"
      style={{
        fontSize: large ? 9 : 7.5,
        letterSpacing: "0.14em",
        background: p.surface,
        color: p.muted,
        borderTop: `1px solid ${p.ink}22`,
        borderRight: `1px solid ${p.ink}22`,
      }}
    >
      <span
        className="inline-block rounded-full"
        style={{ width: 6, height: 6, background: p.accent }}
      />
      {meta.slug}
    </div>
  );
}
