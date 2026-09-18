import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ThreeDWebDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          perspective: "600px",
        }}
      >
        {/* Floating 3D Header Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            padding: `${4 * s}px ${10 * s}px`,
            borderRadius: 12 * s,
            transform: "rotateX(2deg) translateZ(8px)",
            boxShadow: `0 ${8 * s}px ${20 * s}px ${p.ink}22`,
          }}
        >
          <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 800 }}>
            ◈ SPATIAL
          </span>
          <span style={{ fontSize: 6 * s, color: p.accent, fontWeight: 600 }}>
            Z-DEPTH: 3
          </span>
        </div>

        {/* Stacked 3D Cards */}
        <div className="relative my-auto flex items-center justify-center" style={{ perspective: "500px" }}>
          {/* Back card */}
          <div
            style={{
              position: "absolute",
              width: "78%",
              background: `${p.accent2}22`,
              border: `1px solid ${p.accent2}44`,
              borderRadius: 14 * s,
              padding: `${14 * s}px`,
              transform: "rotateY(-6deg) rotateX(3deg) translateZ(-20px) translateX(8%)",
              opacity: 0.6,
            }}
          >
            <div style={{ fontSize: 6 * s, color: p.muted }}>Layer 02</div>
          </div>
          {/* Front card */}
          <div
            style={{
              width: "82%",
              background: p.surface,
              border: `1px solid ${p.ink}18`,
              borderRadius: 14 * s,
              padding: `${14 * s}px ${16 * s}px`,
              transform: "rotateY(4deg) rotateX(-2deg) translateZ(10px)",
              boxShadow: `0 ${12 * s}px ${32 * s}px ${p.ink}18, 0 ${4 * s}px ${8 * s}px ${p.accent2}12`,
            }}
          >
            <div style={{ fontSize: 6 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
              INTERACTIVE LAYER
            </div>
            <div style={{ fontFamily: p.display, fontSize: 13 * s, fontWeight: 800, lineHeight: 1.15, margin: `${4 * s}px 0` }}>
              Depth Feels Real
            </div>
            <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
              Perspective transforms, parallax layers, and volumetric shadows create tactile depth.
            </p>
            <div className="flex items-center" style={{ gap: 6 * s, marginTop: 8 * s }}>
              <span style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 8 * s,
              }}>
                Explore ↗
              </span>
              <span style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 600 }}>
                rotate · tilt · zoom
              </span>
            </div>
          </div>
        </div>

        {/* Footer depth meter */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 4 * s,
          }}
        >
          <span>▫ PERSPECTIVE 600px</span>
          <span style={{ color: p.accent2 }}>▫ TILT ±6°</span>
          <span>▫ SHADOW CASCADE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
