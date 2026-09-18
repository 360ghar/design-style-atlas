import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FrutigerAeroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Frutiger Aero Nature-Tech Glossy Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 700,
                color: p.ink,
                letterSpacing: "0.05em",
              }}
            >
              Aero·Nature OS
            </span>
            <span
              style={{
                background: `linear-gradient(180deg, ${p.accent2}33, ${p.accent}22)`,
                color: p.accent,
                border: `1px solid ${p.surface}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${1 * s}px ${8 * s}px`,
                boxShadow: `0 ${2 * s}px ${8 * s}px ${p.accent}33, inset 0 1px 0 ${p.surface}`,
              }}
            >
              ECO-GLASS V4
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.accent2, fontWeight: 700 }}>
            Dewy Daylight 💧
          </span>
        </div>

        {/* Central Glossy Aqua Bubble Card with Inset Top Highlight */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: `linear-gradient(180deg, ${p.surface}, ${p.bg})`,
            borderRadius: 24 * s,
            border: `1.5px solid ${p.surface}`,
            boxShadow: `0 ${12 * s}px ${36 * s}px ${p.accent}22, inset 0 1.5px 0 ${p.surface}`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Water Droplet Orb */}
          <div
            className="pv-float"
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              width: 24 * s,
              height: 24 * s,
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 35%, ${p.surface}, ${p.accent2})`,
              boxShadow: `0 ${4 * s}px ${12 * s}px ${p.accent2}66, inset 0 1px 0 ${p.surface}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10 * s,
            }}
          >
            🌿
          </div>

          <div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.accent,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Dewy Glass &amp; Sky Blue Horizons
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 700,
                color: p.ink,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              Glossy Aqua Bubbles &amp; Optimism
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Translucent aero glass, soft sunlight reflections, lush green ecology, and buoyant mid-2000s technological hope.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.accent}15`,
            }}
          >
            <span style={{ fontSize: 6.5 * s, color: p.accent, fontWeight: 600 }}>
              Purity Index: 99.4%
            </span>
            <button
              type="button"
              style={{
                background: `linear-gradient(180deg, ${p.accent}, ${p.accent2})`,
                color: p.surface,
                border: `1px solid ${p.surface}`,
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 ${4 * s}px ${12 * s}px ${p.accent}44, inset 0 1px 0 ${p.surface}88`,
              }}
            >
              Explore Biosphere 💧
            </button>
          </div>
        </div>

        {/* Footer Dewy Aero Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}22`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            color: p.muted,
          }}
        >
          <span>✦ 24PX BUBBLE ROUNDING</span>
          <span>✦ TOP GLASS HIGHLIGHT</span>
          <span style={{ color: p.accent }}>✦ ZERO GRIT OR NOISE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
