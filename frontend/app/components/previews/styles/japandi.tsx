import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function JapandiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Shoji grid masthead */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.ink}15`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 9 * s, letterSpacing: "0.1em", fontWeight: 500 }}>
            MOKU · 木
          </span>
          <div className="flex items-center" style={{ gap: 8 * s, fontSize: 6 * s, color: p.muted }}>
            <span>Kyoto</span>
            <span>·</span>
            <span>Copenhagen</span>
          </div>
        </div>

        {/* Warm Oak & Bouclé Showcase Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 12 * s,
            border: `1px solid ${p.ink}10`,
            boxShadow: `0 ${4 * s}px ${16 * s}px ${p.ink}06`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            Kyoto Meets Copenhagen
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 500,
              lineHeight: 1.2,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Quiet Warmth &amp; Shoji Rhythms
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Low oak furniture, textured bouclé and clay ceramics, single botanical stems, and warm wabi-sabi restraint.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                fontSize: 6 * s,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 6 * s,
              }}
            >
              Explore Living
            </span>
            <span style={{ fontSize: 6 * s, color: p.muted }}>
              Handcrafted in oak
            </span>
          </div>
        </div>

        {/* Shoji footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}12`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>NATURAL OAK &amp; CLAY</span>
          <span>SHOJI SCREEN GRID</span>
          <span style={{ color: p.accent }}>SLOW INTERIORS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
