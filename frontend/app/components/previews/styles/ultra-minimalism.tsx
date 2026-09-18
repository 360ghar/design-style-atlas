import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function UltraMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${18 * s}px ${20 * s}px`,
        }}
      >
        {/* Top Folio: microscopic text, zero embellishment */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 6 * s,
            color: p.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Archive</span>
          <span>N° 01</span>
        </div>

        {/* Pure typographic statement over vast whitespace */}
        <div className="my-auto max-w-[85%]">
          <div
            style={{
              fontFamily: p.display,
              fontSize: 13 * s,
              fontWeight: 400,
              color: p.ink,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Spatial Reduction &amp; Primary Notation
          </div>

          <div
            style={{
              height: 1,
              background: `${p.ink}15`,
              margin: `${12 * s}px 0`,
              width: "100%",
            }}
          />

          <div
            className="flex flex-col"
            style={{
              gap: 4 * s,
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.6,
            }}
          >
            <div>01 · Primary void</div>
            <div>02 · Typographic coordinate</div>
            <div>03 · Zero ornament</div>
          </div>
        </div>

        {/* Footer single blue link accent — sole color in the style */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 6.5 * s,
            color: p.muted,
          }}
        >
          <span>Monograph</span>
          <span
            style={{
              color: p.accent2,
              textDecoration: "underline",
              textUnderlineOffset: 2 * s,
            }}
          >
            Read index →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
