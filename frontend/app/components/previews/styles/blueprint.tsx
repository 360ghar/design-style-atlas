import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BlueprintPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px`,
        }}
      >
        {/* Millimeter CAD Drafting Grid Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(rgba(0, 229, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: `${8 * s}px ${8 * s}px, ${8 * s}px ${8 * s}px, ${40 * s}px ${40 * s}px, ${40 * s}px ${40 * s}px`,
            pointerEvents: "none",
          }}
        />

        {/* Outer Architectural Drawing Frame with Border Coordinates */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-between"
          style={{
            maxWidth: 420 * s,
            border: "2px solid #FFFFFF",
            padding: `${8 * s}px`,
          }}
        >
          {/* Top Drawing Header with Coordinates */}
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 6 * s,
              color: p.muted,
              fontFamily: p.display,
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              paddingBottom: 4 * s,
            }}
          >
            <span>GRID REF: A-04 // LAT: 45°20&apos;N</span>
            <span style={{ color: p.accent, fontWeight: 700 }}>SCALE: 1:50 METRIC</span>
            <span>DWG NO: 8441-C</span>
          </div>

          {/* Central Architectural CAD Schematic */}
          <div className="relative my-auto flex items-center justify-between" style={{ padding: `${8 * s}px 0` }}>
            {/* Geometric Vector Drafting Element */}
            <div className="relative" style={{ width: 130 * s, height: 85 * s }}>
              {/* Outer Dimension Box */}
              <div
                style={{
                  position: "absolute",
                  inset: 6 * s,
                  border: "1.5px solid #FFFFFF",
                  boxShadow: "0 0 10px rgba(0,229,255,0.2)",
                }}
              />
              {/* Diagonal Crosshair Centerlines */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  borderTop: "1px dashed #00E5FF",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  borderLeft: "1px dashed #00E5FF",
                }}
              />
              {/* Drafting Compass Arc */}
              <div
                style={{
                  position: "absolute",
                  top: 15 * s,
                  left: 15 * s,
                  width: 50 * s,
                  height: 50 * s,
                  borderRadius: "50%",
                  border: "1.5px solid #00E5FF",
                }}
              />
              {/* Dimension Arrow Callout */}
              <div
                style={{
                  position: "absolute",
                  bottom: -2 * s,
                  left: 6 * s,
                  right: 6 * s,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 5.5 * s,
                  color: "#00E5FF",
                }}
              >
                <span>|←</span>
                <span>240.00 mm</span>
                <span>→|</span>
              </div>
            </div>

            {/* Specification Callout Notes */}
            <div className="flex flex-col" style={{ maxWidth: 190 * s, fontFamily: p.display }}>
              <div style={{ color: p.accent, fontSize: 6.5 * s, fontWeight: 700 }}>
                SPECIFICATION 04.2
              </div>
              <h3 style={{ fontSize: 11 * s, fontWeight: 700, color: "#FFFFFF", marginTop: 2 * s }}>
                Structural Cyanotype
              </h3>
              <p style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.35 }}>
                Prussian blue ground etched with orthogonal CAD centerlines and revision matrices.
              </p>
            </div>
          </div>

          {/* Bottom-Right Title Block Stamp */}
          <div
            className="flex items-center justify-between"
            style={{
              background: "rgba(15, 51, 86, 0.85)",
              border: "1.5px solid #FFFFFF",
              padding: `${4 * s}px ${8 * s}px`,
              fontFamily: p.display,
              fontSize: 6 * s,
            }}
          >
            <div>
              <span style={{ color: p.muted }}>PROJECT: </span>
              <span style={{ color: "#FFFFFF", fontWeight: 700 }}>BLUEPRINT ATLAS</span>
            </div>
            <div>
              <span style={{ color: p.muted }}>STATUS: </span>
              <span style={{ color: p.accent, fontWeight: 700 }}>APPROVED FOR BUILD</span>
            </div>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
