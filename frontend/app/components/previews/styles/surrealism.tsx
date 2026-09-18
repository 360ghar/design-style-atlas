import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SurrealismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Dalí museum header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 8.5 * s, fontStyle: "italic", color: p.accent }}>
            Le Salon des Songes
          </span>
          <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.15em" }}>
            SALLE DE PERSISTANCE · 1931
          </span>
        </div>

        {/* Poetic Dissonance Card with Floating Objects */}
        <div
          className="my-auto flex flex-col items-center text-center"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent}55`,
            borderRadius: `${18 * s}px / ${28 * s}px`,
            padding: `${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Melting Clock glyph */}
          <div style={{ fontSize: 18 * s, color: p.accent2, transform: "rotate(-12deg)", lineHeight: 1 }}>
            ⏳
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.15,
              margin: `${4 * s}px 0 ${4 * s}px 0`,
            }}
          >
            Dalí's Waiting Room
          </h2>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5, maxWidth: "85%" }}>
            Melting clocks, floating staircases, tiny silhouettes beneath vast dreamscapes, and museum manners.
          </p>
          <div style={{ marginTop: 6 * s }}>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                color: p.accent,
                fontSize: 5.5 * s,
                letterSpacing: "0.2em",
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 999,
              }}
            >
              ENTER THE UNCONSCIOUS
            </span>
          </div>
        </div>

        {/* Surrealist footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>POETIC DISSONANCE</span>
          <span style={{ color: p.accent2 }}>DREAMSCAPE SKY</span>
          <span>MAGRITTE &amp; DALÍ</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
