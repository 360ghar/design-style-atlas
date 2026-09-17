import type { StyleMeta } from "../../lib/styles";
import { STYLE_DEFINITIONS } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";
import { StyleLandingPage } from "./StyleLandingPage";
import { StyleComponentKit } from "./StyleComponentKit";
import { Frame, Meta } from "./frame";

export { StyleLandingPage, StyleComponentKit, Frame, Meta };

export function StylePreview({
  meta,
  large,
  previewTheme = "default",
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
}) {
  const baseDef = STYLE_DEFINITIONS[meta.slug];
  if (!baseDef) {
    const p = meta.preview;
    return (
      <Frame meta={meta} large={large} previewTheme={previewTheme}>
        <div className="flex h-full flex-col justify-center px-[8%]">
          <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15 }}>
            {meta.name}
          </div>
          <div style={{ color: p.muted, fontSize: large ? 11 : 7.5 }}>
            {meta.description}
          </div>
        </div>
        <Meta meta={meta} large={large} previewTheme={previewTheme} />
      </Frame>
    );
  }

  const def = resolvePreviewTheme(baseDef, previewTheme);

  return (
    <Frame meta={meta} large={large} previewTheme={previewTheme}>
      <StyleLandingPage def={def} large={large} previewTheme={previewTheme} />
      <Meta meta={meta} large={large} previewTheme={previewTheme} />
    </Frame>
  );
}
