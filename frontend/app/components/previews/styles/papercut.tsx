import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PapercutPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // #F7F3EB warm beige paper
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px`,
        }}
      >
        {/* Top Paper Layer Curve (Sage Green) */}
        <div
          style={{
            position: "absolute",
            top: -20 * s,
            right: -30 * s,
            width: 180 * s,
            height: 140 * s,
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            background: p.accent2, // Sage Green
            boxShadow: `0 ${10 * s}px ${24 * s}px rgba(45,40,35,0.18)`,
            opacity: 0.9,
          }}
        />

        {/* Mid Paper Layer Curve (Terracotta) */}
        <div
          style={{
            position: "absolute",
            bottom: -30 * s,
            left: -30 * s,
            width: 220 * s,
            height: 130 * s,
            borderRadius: "60% 40% 50% 50% / 50% 60% 40% 60%",
            background: p.accent, // Terracotta #D96B43
            boxShadow: `0 -${8 * s}px ${20 * s}px rgba(45,40,35,0.15)`,
            opacity: 0.85,
          }}
        />

        {/* Central Floating White Cardstock Sheet */}
        <div
          className="relative mx-auto my-auto flex w-full flex-col justify-between"
          style={{
            maxWidth: 360 * s,
            background: p.surface, // #FFFFFF
            borderRadius: 18 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${12 * s}px ${32 * s}px rgba(45,40,35,0.16), 0 2px 6px rgba(45,40,35,0.06)`,
            zIndex: 10,
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: 6 * s }}>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.accent,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              DIMENSIONAL CRAFT
            </span>
            <span style={{ fontSize: 6 * s, color: p.muted }}>300 GSM CARDSTOCK</span>
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 15 * s,
              fontWeight: 700,
              lineHeight: 1.2,
              color: p.ink,
            }}
          >
            Stacked silhouettes with cast shadows.
          </h3>

          <p style={{ fontSize: 7 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.4 }}>
            Handcrafted layered topography creates organic tactile depth without digital harshness.
          </p>

          <div className="flex items-center" style={{ marginTop: 10 * s, gap: 8 * s }}>
            <div
              style={{
                background: p.accent,
                color: "#FFFFFF",
                fontSize: 6.5 * s,
                fontWeight: 600,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 999,
                boxShadow: `0 4px 12px rgba(217,107,67,0.35)`,
              }}
            >
              Explore Layers
            </div>
            <span style={{ fontSize: 6.5 * s, color: p.muted, fontWeight: 500 }}>Topographic Art →</span>
          </div>
        </div>

        <div className="relative z-20">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
