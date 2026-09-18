import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MaterialExpressivePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Material 3 Expressive Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                width: 14 * s,
                height: 14 * s,
                borderRadius: 5 * s,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8 * s,
                fontWeight: 900,
              }}
            >
              M3
            </span>
            <span style={{ fontFamily: p.display, fontSize: 9 * s, fontWeight: 700 }}>
              Expressive
            </span>
          </div>
          <span
            style={{
              background: `${p.accent2}25`,
              color: p.accent2,
              borderRadius: 999,
              padding: `${2 * s}px ${8 * s}px`,
              fontSize: 6 * s,
              fontWeight: 700,
            }}
          >
            Tonal Palette
          </span>
        </div>

        {/* Supersized Chunky Container Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 24 * s,
            padding: `${16 * s}px`,
            boxShadow: `0 ${8 * s}px ${24 * s}px ${p.ink}0d`,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
            CHUNKY &amp; UNMISTAKABLY ALIVE
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 800,
              lineHeight: 1.15,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Bouncy Emotional Shapes
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Supersized rounded corners, coordinated tonal container families, and playful FAB morph physics.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${6 * s}px ${16 * s}px`,
                borderRadius: 16 * s,
              }}
            >
              Expressive FAB
            </span>
            <span
              style={{
                background: `${p.accent2}20`,
                color: p.ink,
                fontSize: 6 * s,
                fontWeight: 600,
                padding: `${6 * s}px ${14 * s}px`,
                borderRadius: 16 * s,
              }}
            >
              Tonal Button
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}10`,
            paddingTop: 4 * s,
          }}
        >
          <span>MATERIAL DESIGN 3</span>
          <span style={{ color: p.accent }}>BOUNCY SPRING PHYSICS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
