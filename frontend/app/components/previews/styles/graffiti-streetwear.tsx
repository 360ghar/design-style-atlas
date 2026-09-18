import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GraffitiStreetwearPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Streetwear Drop Header */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: p.display,
              fontSize: 11 * s,
              fontWeight: 900,
              background: p.accent,
              color: p.bg,
              padding: `${2 * s}px ${8 * s}px`,
              transform: "rotate(-2deg)",
            }}
          >
            DROP // 004
          </span>
          <span
            style={{
              background: p.accent2,
              color: p.bg,
              fontSize: 6 * s,
              fontWeight: 900,
              padding: `${2 * s}px ${6 * s}px`,
              borderRadius: 2 * s,
            }}
          >
            SOLD OUT
          </span>
        </div>

        {/* Wheat-paste Wall Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.accent}`,
            padding: `${12 * s}px ${14 * s}px`,
            transform: "rotate(1deg)",
          }}
        >
          <div style={{ fontSize: 5.5 * s, fontWeight: 900, color: p.accent, letterSpacing: "0.15em" }}>
            2AM CONCRETE GRAFFITI CULTURE
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 15 * s,
              fontWeight: 900,
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: `${3 * s}px 0 ${4 * s}px 0`,
            }}
          >
            Wildstyle Tags &amp; Sticker Slaps
          </h2>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.4 }}>
            Raw spray-can textures, wheat-paste layers, bold hazard typography, and sneaker drop countdowns.
          </p>
          <div className="flex items-center" style={{ gap: 6 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.ink,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${12 * s}px`,
              }}
            >
              NEXT DROP: 04:00:00
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            fontWeight: 900,
            color: p.muted,
            letterSpacing: "0.08em",
          }}
        >
          <span>TAGGED AT 2AM</span>
          <span style={{ color: p.accent }}>★ CONCRETE CREDIBILITY ★</span>
          <span>NYC / TOKYO</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
