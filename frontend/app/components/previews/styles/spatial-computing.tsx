import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const ORBS = [
  { name: "Photos", icon: "🌸", color: "#F43F5E" },
  { name: "Safari", icon: "🧭", color: "#0EA5E9" },
  { name: "Keynote", icon: "📊", color: "#F59E0B" },
  { name: "Files", icon: "📂", color: "#3B82F6" },
];

export function SpatialComputingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, #151C2C 0%, #080A10 100%)",
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Ambient Room Lighting glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 260 * s,
            height: 100 * s,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.accent}25 0%, transparent 70%)`,
            filter: `blur(${35 * s}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Floating Volumetric Glass Window */}
        <div
          className="relative mx-auto flex w-full flex-col"
          style={{
            maxWidth: 420 * s,
            background: "rgba(28, 35, 49, 0.65)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderRadius: 24 * s,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `0 ${18 * s}px ${45 * s}px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.45)`,
            padding: `${12 * s}px ${16 * s}px`,
          }}
        >
          {/* Spatial Window Header */}
          <div className="flex items-center justify-between" style={{ marginBottom: 8 * s }}>
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <span
                style={{
                  width: 8 * s,
                  height: 8 * s,
                  borderRadius: "50%",
                  background: p.accent,
                  boxShadow: `0 0 10px ${p.accent}`,
                }}
              />
              <span style={{ fontSize: 7 * s, fontWeight: 600, color: p.muted, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                VisionOS Spatial Canvas
              </span>
            </div>
            <div
              style={{
                fontSize: 6 * s,
                background: "rgba(255,255,255,0.1)",
                padding: `${2 * s}px ${6 * s}px`,
                borderRadius: 999,
                color: p.ink,
              }}
            >
              Z-Depth 24px
            </div>
          </div>

          {/* Core Content Layer */}
          <div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 700,
                lineHeight: 1.2,
                color: p.ink,
                letterSpacing: "-0.02em",
              }}
            >
              Surfaces float in physical space.
            </h3>
            <p style={{ fontSize: 7 * s, color: p.muted, marginTop: 3 * s, lineHeight: 1.4 }}>
              Light refracts across specular edges with dynamic ambient environmental response.
            </p>
          </div>

          {/* Spatial Control Pill Buttons */}
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 10 * s }}>
            <div
              style={{
                background: p.accent,
                color: "#080A10",
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 999,
                boxShadow: `0 0 16px ${p.accent}66`,
              }}
            >
              Enter Immersive
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                color: p.ink,
                fontSize: 6.5 * s,
                fontWeight: 500,
                padding: `${4 * s}px ${10 * s}px`,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Window Details
            </div>
          </div>
        </div>

        {/* Floating App Orbs Dock Bar */}
        <div
          className="relative mx-auto flex items-center"
          style={{
            marginTop: 8 * s,
            gap: 12 * s,
            background: "rgba(28, 35, 49, 0.45)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: 999,
            padding: `${6 * s}px ${14 * s}px`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {ORBS.map((orb, i) => (
            <div key={orb.name} className="flex flex-col items-center" style={{ gap: 2 * s }}>
              <div
                style={{
                  width: 22 * s,
                  height: 22 * s,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), ${orb.color})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10 * s,
                  boxShadow: i === 1 ? `0 0 14px ${p.accent}` : "0 4px 10px rgba(0,0,0,0.3)",
                  border: i === 1 ? "1.5px solid rgba(255,255,255,0.8)" : "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {orb.icon}
              </div>
              <span style={{ fontSize: 5 * s, color: p.muted }}>{orb.name}</span>
            </div>
          ))}
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
