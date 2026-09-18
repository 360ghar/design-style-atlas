import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AcidGraphicsPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px 0`,
        }}
      >
        {/* Top Ticker Marquee with Acid Lime High Voltage */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.accent,
            color: "#08080A",
            padding: `${3 * s}px ${12 * s}px`,
            fontFamily: p.display,
            fontSize: 7 * s,
            fontWeight: 900,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>RAVE ACID MATRIX 2026</span>
          <span>⚡ HIGH VOLTAGE ⚡</span>
          <span>CHROMETYPE // NO SLEEP</span>
        </div>

        {/* Central Kinetic Rave Flyer Composition */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-center"
          style={{
            maxWidth: 420 * s,
            padding: `0 ${14 * s}px`,
          }}
        >
          {/* Cyber Sigil / Metallic Barbed Element */}
          <div className="flex items-center justify-between" style={{ marginBottom: 6 * s }}>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 26 * s,
                fontWeight: 900,
                lineHeight: 0.9,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                textShadow: `0 0 ${12 * s}px ${p.accent}, 2px 2px 0px ${p.accent2}`,
              }}
            >
              LIQUID
              <br />
              <span style={{ color: p.accent }}>CHROME</span>
            </div>

            {/* Cyber Sigil Star Badge */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: 70 * s,
                height: 70 * s,
                borderRadius: "50%",
                border: `2px solid ${p.accent}`,
                background: "radial-gradient(circle, #22222E 0%, #08080A 80%)",
                boxShadow: `0 0 ${16 * s}px ${p.accent}88`,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 18 * s, color: p.accent }}>✦</span>
              <span style={{ fontSize: 5.5 * s, color: "#FFFFFF", fontWeight: 800, textTransform: "uppercase" }}>
                160 BPM
              </span>
            </div>
          </div>

          {/* Subversive Event / Feature Badge Cards */}
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 4 * s }}>
            <div
              style={{
                flex: 1,
                background: "#141419",
                border: `1.5px solid ${p.accent}`,
                borderRadius: 4 * s,
                padding: `${6 * s}px ${8 * s}px`,
                boxShadow: `0 0 12px ${p.accent}44`,
              }}
            >
              <div style={{ fontSize: 5.5 * s, color: p.accent2, fontWeight: 800, textTransform: "uppercase" }}>
                TRIBAL WARP
              </div>
              <div style={{ fontSize: 8 * s, fontWeight: 800, color: "#FFFFFF", marginTop: 2 * s }}>
                Subversive Energy
              </div>
            </div>

            <div
              style={{
                flex: 1,
                background: "#141419",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 4 * s,
                padding: `${6 * s}px ${8 * s}px`,
              }}
            >
              <div style={{ fontSize: 5.5 * s, color: p.muted, fontWeight: 700, textTransform: "uppercase" }}>
                TRANSMISSION
              </div>
              <div style={{ fontSize: 8 * s, fontWeight: 700, color: "#FFFFFF", marginTop: 2 * s }}>
                All-Night Voltage
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: `0 ${10 * s}px` }}>
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
