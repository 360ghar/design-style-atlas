import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BioluminescencePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, #081125 0%, #030712 100%)",
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px`,
        }}
      >
        {/* Floating Glowing Bioluminescent Organism Orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: 140 * s,
            height: 140 * s,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.accent}55 0%, transparent 70%)`,
            filter: `blur(${28 * s}px)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: 160 * s,
            height: 160 * s,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.accent2}44 0%, transparent 70%)`,
            filter: `blur(${35 * s}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Deep Ocean Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                width: 7 * s,
                height: 7 * s,
                borderRadius: "50%",
                background: p.accent,
                boxShadow: `0 0 12px ${p.accent}`,
              }}
            />
            <span style={{ fontSize: 7 * s, fontWeight: 700, letterSpacing: "0.08em", color: p.accent, textTransform: "uppercase" }}>
              HADAL DEPTH // 10,900M
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.muted, background: "rgba(255,255,255,0.06)", padding: `${2 * s}px ${6 * s}px`, borderRadius: 999 }}>
            LUMINESCENCE ACTIVE
          </span>
        </div>

        {/* Central Translucent Aquatic Specimen Card */}
        <div
          className="relative z-10 mx-auto my-auto flex w-full flex-col justify-between"
          style={{
            maxWidth: 380 * s,
            background: "rgba(10, 17, 40, 0.7)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: 20 * s,
            border: `1px solid ${p.accent}44`,
            boxShadow: `0 ${14 * s}px ${36 * s}px rgba(0,0,0,0.8), 0 0 ${20 * s}px ${p.accent}22`,
            padding: `${12 * s}px ${16 * s}px`,
          }}
        >
          <div style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Ethereal Deep-Sea Optics
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 16 * s,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#FFFFFF",
              marginTop: 2 * s,
              letterSpacing: "-0.02em",
            }}
          >
            Light born in the dark abyss.
          </h3>

          <p style={{ fontSize: 7 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.4 }}>
            Self-luminous cyan and marine violet light waves emitted by deep oceanic siphonophores.
          </p>

          <div className="flex items-center" style={{ marginTop: 10 * s, gap: 8 * s }}>
            <div
              style={{
                background: p.accent,
                color: "#030712",
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 999,
                boxShadow: `0 0 16px ${p.accent}88`,
              }}
            >
              Emit Light
            </div>
            <span style={{ fontSize: 6.5 * s, color: p.accent2, fontWeight: 600 }}>Photophore Data →</span>
          </div>
        </div>

        <div className="relative z-10">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
