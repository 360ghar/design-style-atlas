import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LiminalWeirdcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Fluorescent hum flicker */}
        <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2 * s, background: p.accent, opacity: 0.5, boxShadow: `0 0 ${12 * s}px ${p.accent}` }} />

        {/* Backrooms level header */}
        <div className="relative flex items-center justify-between" style={{ zIndex: 1 }}>
          <span style={{ fontFamily: "monospace", fontSize: 6.5 * s, color: p.accent, letterSpacing: "0.1em" }}>
            [LEVEL 0 // MONO-YELLOW]
          </span>
          <span style={{ fontFamily: "monospace", fontSize: 5.5 * s, color: p.muted }}>
            DEPTH: UNKNOWN
          </span>
        </div>

        {/* Eerie Backrooms Notice Card */}
        <div
          className="relative my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.accent}55`,
            boxShadow: `0 0 ${20 * s}px ${p.bg}`,
            padding: `${14 * s}px ${16 * s}px`,
            zIndex: 1,
          }}
        >
          <div>
            <div style={{ fontSize: 5.5 * s, color: p.accent, fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
              NON-EUCLIDEAN NOTICE
            </div>
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 15 * s,
                fontWeight: 900,
                color: p.ink,
                letterSpacing: "-0.01em",
                margin: `${4 * s}px 0 ${6 * s}px 0`,
                lineHeight: 1.1,
              }}
            >
              YOU ARE HERE.
              <br />
              <span style={{ color: p.accent2 }}>NO ONE ELSE IS.</span>
            </h2>
          </div>

          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Damp carpet underfoot, infinite wallpaper partitions, and distant hums from dead fluorescent tubes.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 6 * s,
              marginTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 5.5 * s, color: p.muted, fontFamily: "monospace" }}>
              EXIT: NOT LOCATED
            </span>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontFamily: "monospace",
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${2 * s}px ${10 * s}px`,
              }}
            >
              KEEP WALKING ⏵
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="relative flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            fontFamily: "monospace",
            color: p.muted,
            zIndex: 1,
          }}
        >
          <span>60HZ FLUORESCENT HUM</span>
          <span style={{ color: p.accent }}>LIMINAL ANOMALY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
