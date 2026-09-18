import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DeconstructivismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // Dark titanium #141619
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px`,
        }}
      >
        {/* Background 15-degree Sheared Laser Plane */}
        <div
          style={{
            position: "absolute",
            top: -40 * s,
            right: -20 * s,
            width: 220 * s,
            height: 280 * s,
            background: "#20242A",
            transform: "rotate(14deg) skewX(-12deg)",
            border: `1.5px solid ${p.accent2}`,
            zIndex: 1,
            opacity: 0.7,
          }}
        />

        {/* Laser Crimson Slash Line */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: -20 * s,
            width: "120%",
            height: 2 * s,
            background: p.accent, // Laser Crimson #FF2A55
            transform: "rotate(-18deg)",
            boxShadow: `0 0 12px ${p.accent}`,
            zIndex: 2,
          }}
        />

        {/* Header with Broken Grid Offsets */}
        <div className="relative z-10 flex items-center justify-between">
          <div
            style={{
              fontFamily: p.display,
              fontSize: 7 * s,
              fontWeight: 900,
              color: p.ink,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transform: "skewX(-6deg)",
            }}
          >
            DECONSTRUCT // ARCHITECTURE
          </div>
          <div
            style={{
              fontSize: 6 * s,
              background: p.accent,
              color: "#FFFFFF",
              fontWeight: 800,
              padding: `${2 * s}px ${6 * s}px`,
              transform: "rotate(4deg)",
            }}
          >
            NON-ORTHOGONAL
          </div>
        </div>

        {/* Central Fragmented Structural Canvas */}
        <div className="relative z-10 my-auto flex flex-col" style={{ padding: `${8 * s}px 0` }}>
          {/* Overlapping Angled Plane Title */}
          <div style={{ transform: "rotate(-3deg) skewX(-4deg)", marginBottom: 6 * s }}>
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 20 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
              }}
            >
              FRAGMENTED
              <br />
              <span style={{ color: p.accent }}>DISEQUILIBRIUM</span>
            </h2>
          </div>

          {/* Floating Titanium Card Module with Shear Angles */}
          <div
            style={{
              background: "rgba(32, 36, 42, 0.92)",
              border: "1.5px solid #4E5868",
              padding: `${8 * s}px ${12 * s}px`,
              transform: "rotate(2deg)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
              maxWidth: 320 * s,
            }}
          >
            <div style={{ fontSize: 6 * s, color: p.accent, fontWeight: 700, textTransform: "uppercase" }}>
              PLANE COLLISION 14.8°
            </div>
            <p style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 2 * s, lineHeight: 1.35 }}>
              Defying standard Cartesian grids with titanium cantilevers, angular shear, and kinetic tension.
            </p>
          </div>
        </div>

        {/* Bottom Coordinates Strip */}
        <div className="relative z-10 flex items-center justify-between" style={{ fontSize: 5.5 * s, color: p.muted }}>
          <span>VECTOR: [32.4, -14.8, 88.0]</span>
          <span style={{ color: p.accent }}>ZAHA / LIBESKIND AXIS</span>
        </div>

        <div className="relative z-10">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
