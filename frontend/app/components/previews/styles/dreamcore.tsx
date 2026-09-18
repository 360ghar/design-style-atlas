import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DreamcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* VHS haze glow */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 40% 40%, ${p.accent2}33, transparent 70%)`, opacity: 0.8 }} />

        {/* VHS Timestamp Top Bar */}
        <div className="relative flex items-center justify-between" style={{ zIndex: 1 }}>
          <span style={{ fontFamily: "monospace", fontSize: 6.5 * s, color: p.accent, letterSpacing: "0.1em" }}>
            PLAY ▶ 00:14:38
          </span>
          <span style={{ fontFamily: "monospace", fontSize: 6 * s, color: p.accent2 }}>
            AUG. 14 1998
          </span>
        </div>

        {/* Liminal Dream Corridor Panel */}
        <div
          className="relative my-auto"
          style={{
            background: `color-mix(in srgb, ${p.surface} 80%, transparent)`,
            backdropFilter: "blur(8px)",
            border: `1px solid ${p.accent}55`,
            borderRadius: 8 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 0 ${24 * s}px ${p.accent}22`,
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
            A Half-Remembered Afternoon
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 700,
              lineHeight: 1.2,
              margin: `${4 * s}px 0 ${6 * s}px 0`,
            }}
          >
            Have you been here before?
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Empty playgrounds under an overcast sky, mall corridors with flickering fluorescents, and warm VHS scanline nostalgia.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              Step through
            </span>
            <span style={{ fontSize: 5.5 * s, color: p.accent2, fontFamily: "monospace" }}>
              [TRACKING LOCK: 94%]
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="relative flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            zIndex: 1,
          }}
        >
          <span>VHS BLUR HAZE</span>
          <span>COMFORT &amp; UNEASE</span>
          <span style={{ color: p.accent }}>SP-MODE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
