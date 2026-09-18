import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function RacingTelemetryPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "#08090C", // Dark cockpit
          color: p.ink,
          fontFamily: p.display,
          padding: `${10 * s}px`,
        }}
      >
        {/* Carbon Fiber 45° Weave Background Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 0, transparent 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.4) 0, rgba(0,0,0,0.4) 1px, transparent 0, transparent 4px)",
            pointerEvents: "none",
          }}
        />

        {/* Top Sequential Shift Light Strip */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            gap: 4 * s,
            marginBottom: 6 * s,
            background: "#111318",
            padding: `${4 * s}px ${12 * s}px`,
            borderRadius: 4 * s,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Green -> Yellow -> Red Sequential Shift LEDs */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
            const isRed = i >= 11;
            const isYellow = i >= 7 && i < 11;
            const color = isRed ? "#FF1801" : isYellow ? "#FFD32A" : "#00FF66";
            const lit = i <= 12;
            return (
              <div
                key={i}
                style={{
                  width: 6 * s,
                  height: 6 * s,
                  borderRadius: "50%",
                  background: lit ? color : "rgba(255,255,255,0.1)",
                  boxShadow: lit ? `0 0 6px ${color}` : "none",
                }}
              />
            );
          })}
        </div>

        {/* Central Cockpit Telemetry Hub */}
        <div className="relative z-10 my-auto flex items-center justify-between" style={{ padding: `${4 * s}px 0` }}>
          {/* Left Telemetry: Speed & Sector Delta */}
          <div
            className="flex flex-col"
            style={{
              flex: 1,
              background: "#12151C",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4 * s,
              padding: `${8 * s}px`,
            }}
          >
            <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.1em" }}>SPEED KM/H</span>
            <div style={{ fontSize: 24 * s, fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>284</div>
            <div className="flex items-center" style={{ gap: 4 * s, marginTop: 4 * s }}>
              <span style={{ fontSize: 5.5 * s, color: p.muted }}>DELTA</span>
              <span style={{ fontSize: 7 * s, color: "#00FF66", fontWeight: 700 }}>-0.184s</span>
            </div>
          </div>

          {/* Center Digital Tachometer & Gear Indicator */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              width: 100 * s,
              height: 80 * s,
              margin: `0 ${8 * s}px`,
              background: "radial-gradient(circle, #1B1E28 0%, #0F1117 100%)",
              border: `2px solid ${p.accent}`,
              borderRadius: 8 * s,
              boxShadow: `0 0 20px rgba(255,24,1,0.35)`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 6 * s, color: p.accent, fontWeight: 800, letterSpacing: "0.1em" }}>
              GEAR
            </div>
            <div style={{ fontSize: 34 * s, fontWeight: 900, color: "#FFFFFF", lineHeight: 0.9 }}>
              5
            </div>
            <div style={{ fontSize: 6.5 * s, color: "#FFD32A", fontWeight: 700, marginTop: 2 * s }}>
              8,450 RPM
            </div>
          </div>

          {/* Right Telemetry: Tire Temperatures */}
          <div
            className="flex flex-col"
            style={{
              flex: 1,
              background: "#12151C",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4 * s,
              padding: `${8 * s}px`,
              textAlign: "right",
            }}
          >
            <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.1em" }}>TIRE TEMP</span>
            <div style={{ fontSize: 13 * s, fontWeight: 800, color: "#00FF66", lineHeight: 1.2 }}>98°C</div>
            <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 4 * s }}>
              FL 98° / FR 102°
            </div>
          </div>
        </div>

        {/* Bottom Lap Timer Bar */}
        <div
          className="relative z-10 flex items-center justify-between"
          style={{
            background: "#12151C",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 3 * s,
            padding: `${4 * s}px ${8 * s}px`,
            fontSize: 6 * s,
            letterSpacing: "0.08em",
          }}
        >
          <div>
            <span style={{ color: p.muted }}>LAP: </span>
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>14/58</span>
          </div>
          <div>
            <span style={{ color: p.muted }}>BEST: </span>
            <span style={{ color: "#FFD32A", fontWeight: 700 }}>01:21.842</span>
          </div>
          <div>
            <span style={{ color: p.muted }}>MODE: </span>
            <span style={{ color: p.accent, fontWeight: 700 }}>STRAT 2 (RACE)</span>
          </div>
        </div>

        <div className="relative z-10">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
