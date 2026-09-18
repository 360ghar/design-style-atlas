import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MinimalBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* Gallery Placard Heavy 2px Outer Frame */}
        <div
          className="flex h-full flex-col justify-between"
          style={{
            border: `2px solid ${p.ink}`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          {/* Header Folio Coordinates */}
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 6 * s,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderBottom: `2px solid ${p.ink}`,
              paddingBottom: 6 * s,
            }}
          >
            <span>PAVILION 08</span>
            <span>34.0522° N / 118.2437° W</span>
          </div>

          {/* Monolithic Central Statement */}
          <div className="my-auto">
            <div
              style={{
                fontSize: 6.5 * s,
                fontWeight: 700,
                color: p.muted,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 4 * s,
              }}
            >
              MONOLITHIC EXHIBIT
            </div>
            <h1
              style={{
                fontFamily: p.display,
                fontSize: 18 * s,
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: p.ink,
                margin: 0,
              }}
            >
              MASS &amp;
              <br />
              EMPTY VOID.
            </h1>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.5,
                margin: `${6 * s}px 0 0 0`,
                maxWidth: "85%",
              }}
            >
              Cast concrete slab. No decorative surface. Presence generated exclusively by scale and perimeter.
            </p>
          </div>

          {/* Single Electric Blue Text Action Link */}
          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `2px solid ${p.ink}`,
              paddingTop: 6 * s,
              fontSize: 6 * s,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            <span>EDITION OF ONE</span>
            <span
              style={{
                color: p.accent2,
                textDecoration: "underline",
                textUnderlineOffset: 2 * s,
                cursor: "pointer",
              }}
            >
              READ MONOGRAPH →
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
