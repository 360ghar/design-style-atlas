import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CassetteFuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Rack-Mount Plastic Bezel Chassis */}
        <div
          className="relative mx-auto flex w-full flex-col"
          style={{
            maxWidth: 420 * s,
            background: p.surface,
            borderRadius: 8 * s,
            border: "2px solid #544F43",
            boxShadow: `inset 2px 2px 0px rgba(255,255,255,0.4), inset -2px -2px 0px rgba(0,0,0,0.3), 0 ${8 * s}px ${20 * s}px rgba(0,0,0,0.25)`,
            padding: `${8 * s}px`,
          }}
        >
          {/* Top Stamped Model Badge */}
          <div
            className="flex items-center justify-between"
            style={{
              marginBottom: 6 * s,
              fontSize: 6 * s,
              fontFamily: p.display,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: p.muted,
              textTransform: "uppercase",
            }}
          >
            <span>MU-TH-UR 6000 // CORE DECK</span>
            <span style={{ color: p.accent, fontWeight: 800 }}>TAPE NO. 0482-B</span>
          </div>

          {/* Recessed CRT Monitor Well with Amber Phosphor Display */}
          <div
            className="relative overflow-hidden"
            style={{
              background: "#14120C",
              borderRadius: 6 * s,
              border: "2px solid #363229",
              padding: `${8 * s}px ${10 * s}px`,
              boxShadow: "inset 0 0 16px rgba(0,0,0,0.9)",
            }}
          >
            {/* Scanlines Effect */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(18, 16, 12, 0) 50%, rgba(0, 0, 0, 0.45) 50%)",
                backgroundSize: "100% 3px",
                pointerEvents: "none",
                opacity: 0.8,
              }}
            />

            {/* CRT Text Header */}
            <div className="flex items-center justify-between" style={{ fontFamily: p.display, color: "#FFB000", fontSize: 6.5 * s }}>
              <span>SYSTEM: ONLINE</span>
              <span>BUFFER: 98.4%</span>
            </div>

            {/* Main Telemetry Wave / Tape Spool Readout */}
            <div style={{ margin: `${6 * s}px 0`, fontFamily: p.display }}>
              <div style={{ color: "#FFB000", fontSize: 9 * s, fontWeight: 700, textShadow: "0 0 8px rgba(255,176,0,0.6)" }}>
                &gt; NOSTROMO TELEMETRY ACTIVE_
              </div>
              <div style={{ color: "#C48A00", fontSize: 6 * s, marginTop: 2 * s }}>
                SEQ: 0184 // FREQ: 142.85 MHz // FLIGHT VECTOR: STABLE
              </div>
            </div>

            {/* Phosphor Bar Gauge */}
            <div
              className="flex items-center"
              style={{
                gap: 3 * s,
                marginTop: 4 * s,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 5 * s,
                    background: i <= 9 ? "#FFB000" : "rgba(255,176,0,0.2)",
                    boxShadow: i <= 9 ? "0 0 4px #FFB000" : "none",
                    borderRadius: 1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Lower Hardware Controls Deck: Rocker Switches + Tape Buttons */}
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 8 * s,
              paddingTop: 6 * s,
              borderTop: "1px solid rgba(84, 79, 67, 0.4)",
            }}
          >
            {/* Rocker Switch Cluster */}
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <div
                style={{
                  background: p.accent,
                  color: "#FFFFFF",
                  padding: `${3 * s}px ${8 * s}px`,
                  borderRadius: 3 * s,
                  fontSize: 6 * s,
                  fontFamily: p.display,
                  fontWeight: 700,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                PWR ON
              </div>
              <div
                style={{
                  background: "#4A453A",
                  color: "#D6CEAF",
                  padding: `${3 * s}px ${8 * s}px`,
                  borderRadius: 3 * s,
                  fontSize: 6 * s,
                  fontFamily: p.display,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                REC
              </div>
            </div>

            {/* Tape Counter Digits */}
            <div
              className="flex items-center"
              style={{
                background: "#1A1A18",
                color: "#FFB000",
                fontFamily: p.display,
                padding: `${2 * s}px ${6 * s}px`,
                borderRadius: 3 * s,
                fontSize: 7 * s,
                letterSpacing: "0.15em",
                border: "1px solid #544F43",
              }}
            >
              0 4 8 2
            </div>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
