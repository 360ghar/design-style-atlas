import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MidCenturyModernPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Herman Miller Showroom Header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1.5px solid ${p.accent}55`, paddingBottom: 4 * s }}>
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span style={{ fontFamily: p.display, fontSize: 9 * s, fontWeight: 700, color: p.accent }}>
              ✶ HERMAN MILLER · 1958
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            EAMES &amp; NELSON
          </span>
        </div>

        {/* Central Teak & Starburst Showcase */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 8 * s,
            border: `1px solid ${p.accent}33`,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${6 * s}px ${20 * s}px ${p.ink}0f`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                PALM SPRINGS MODERNISM
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 ${5 * s}px 0`,
                  color: p.ink,
                }}
              >
                Teak, Mustard &amp; Starburst
              </h3>
            </div>
            {/* Starburst clock icon */}
            <div style={{ fontSize: 16 * s, color: p.accent2, lineHeight: 1 }}>
              ✶
            </div>
          </div>

          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Tapered peg legs, atomic starburst motifs, warm teak grain, mustard and avocado organic geometry.
          </p>

          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 999,
              }}
            >
              Browse Lounge
            </span>
            <span style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 600 }}>
              Form follows function
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1.5px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>TEAK &amp; MUSTARD</span>
          <span>ATOMIC STARBURST CLOCK</span>
          <span style={{ color: p.accent }}>OPTIMISTIC MODERN</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
