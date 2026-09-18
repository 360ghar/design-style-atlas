import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PlasticineClayPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // Warm clay table #F3EFE6
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px`,
        }}
      >
        {/* Playful Floating Clay Blob Accents */}
        <div
          style={{
            position: "absolute",
            top: -10 * s,
            right: 15 * s,
            width: 48 * s,
            height: 48 * s,
            borderRadius: "50%",
            background: p.accent2, // Sky Blue #38B6FF
            boxShadow: `inset 2px 3px 6px rgba(255,255,255,0.8), inset -3px -3px 8px rgba(0,0,0,0.15), 0 ${8 * s}px ${16 * s}px rgba(45,43,40,0.14)`,
          }}
        />

        {/* Top Header Pill */}
        <div className="flex items-center justify-between">
          <div
            style={{
              background: "#FFB800", // Sunny clay yellow
              color: "#2D2B28",
              padding: `${3 * s}px ${10 * s}px`,
              borderRadius: 999,
              fontSize: 6 * s,
              fontWeight: 800,
              boxShadow: `inset 1px 2px 4px rgba(255,255,255,0.7), 0 3px 8px rgba(45,43,40,0.1)`,
            }}
          >
            STOP-MOTION STUDIO
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 700, color: p.muted }}>Aardman Style</span>
        </div>

        {/* Central Molded Plasticine Tablet Card */}
        <div
          className="relative mx-auto my-auto flex w-full flex-col justify-between"
          style={{
            maxWidth: 380 * s,
            background: "#FFFFFF",
            borderRadius: 24 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `inset 2px 3px 6px rgba(255,255,255,0.9), inset -3px -4px 8px rgba(0,0,0,0.08), 0 ${12 * s}px ${28 * s}px rgba(45,43,40,0.12)`,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s, marginBottom: 4 * s }}>
            <span style={{ fontSize: 10 * s }}>🎨</span>
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.accent, textTransform: "uppercase" }}>
              Handmade Tactile Depth
            </span>
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 16 * s,
              fontWeight: 800,
              lineHeight: 1.15,
              color: p.ink,
            }}
          >
            Pillowy, finger-pressed volumes.
          </h3>

          <p style={{ fontSize: 7 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.4 }}>
            Soft matte plasticine modeling clay with diffuse contact shadows and squishy spring physics.
          </p>

          {/* Chunky Clay Button Cluster */}
          <div className="flex items-center" style={{ marginTop: 10 * s, gap: 8 * s }}>
            <div
              style={{
                background: p.accent, // Clay Coral #FF5E3A
                color: "#FFFFFF",
                fontSize: 7 * s,
                fontWeight: 800,
                padding: `${5 * s}px ${14 * s}px`,
                borderRadius: 999,
                boxShadow: `inset 1px 2px 4px rgba(255,255,255,0.6), inset -2px -3px 6px rgba(0,0,0,0.2), 0 6px 14px rgba(255,94,58,0.35)`,
              }}
            >
              Squish Me!
            </div>
            <div
              style={{
                background: "#E8E2D5",
                color: p.ink,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${5 * s}px ${12 * s}px`,
                borderRadius: 999,
                boxShadow: `inset 1px 2px 3px rgba(255,255,255,0.7), inset -1px -2px 4px rgba(0,0,0,0.1)`,
              }}
            >
              Mold Shapes
            </div>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
