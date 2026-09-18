import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SteampunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at center, #2A2018 0%, #160F0A 100%)",
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px`,
        }}
      >
        {/* Ornate Victorian Riveted Brass Boiler Frame */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-between"
          style={{
            maxWidth: 420 * s,
            border: `2px solid ${p.accent}`,
            borderRadius: 6 * s,
            padding: `${8 * s}px ${12 * s}px`,
            boxShadow: `inset 0 0 20px rgba(0,0,0,0.8), 0 0 0 2px #5A4325, 0 8px 24px rgba(0,0,0,0.8)`,
            background: "rgba(35, 26, 18, 0.75)",
          }}
        >
          {/* Top Victorian Gilded Header */}
          <div
            className="flex items-center justify-between"
            style={{
              borderBottom: `1px solid ${p.accent}55`,
              paddingBottom: 4 * s,
              fontSize: 6 * s,
              color: p.accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span>⚙ LEVIATHAN STEAM APPARATUS</span>
            <span>PRESSURE: 85 PSI</span>
          </div>

          {/* Center Instrument Panel: Pressure Gauge & Typography */}
          <div className="relative my-auto flex items-center justify-between" style={{ padding: `${6 * s}px 0` }}>
            {/* Analog Dial Gauge */}
            <div
              className="relative flex flex-col items-center justify-center"
              style={{
                width: 78 * s,
                height: 78 * s,
                borderRadius: "50%",
                background: "radial-gradient(circle, #F5E8D3 0%, #D4C09A 100%)",
                border: `3px solid ${p.accent}`,
                boxShadow: `0 0 12px rgba(212,160,23,0.4), inset 0 0 10px rgba(0,0,0,0.4)`,
                color: "#1C1510",
              }}
            >
              <div style={{ fontSize: 5.5 * s, fontWeight: 700, letterSpacing: "0.05em", color: "#6A5333" }}>
                BOILER PSI
              </div>
              <div style={{ fontSize: 13 * s, fontWeight: 800, fontFamily: p.display }}>85</div>
              {/* Dial Needle Indicator */}
              <div
                style={{
                  position: "absolute",
                  width: 28 * s,
                  height: 2 * s,
                  background: "#AA2211",
                  transformOrigin: "right center",
                  transform: "rotate(-35deg) translateX(-14px)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 8 * s,
                  height: 8 * s,
                  borderRadius: "50%",
                  background: p.accent,
                  border: "1px solid #1C1510",
                }}
              />
            </div>

            {/* Victorian Typographic Legend */}
            <div className="flex flex-col" style={{ maxWidth: 200 * s }}>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 16 * s,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: p.ink,
                  textShadow: `0 2px 4px rgba(0,0,0,0.8)`,
                }}
              >
                Victorian Steam &amp; Clockwork
              </div>
              <p
                style={{
                  fontSize: 6.5 * s,
                  color: p.muted,
                  marginTop: 4 * s,
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                Burnished brass dials, interlocking bronze cogwheels, and hand-tooled leather.
              </p>

              {/* Brass Valve Action Button */}
              <div
                style={{
                  marginTop: 8 * s,
                  alignSelf: "flex-start",
                  background: `linear-gradient(180deg, #F0C450 0%, ${p.accent} 100%)`,
                  color: "#1C1510",
                  fontFamily: p.display,
                  fontSize: 6.5 * s,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: `${3 * s}px ${10 * s}px`,
                  borderRadius: 3 * s,
                  border: "1px solid #6A5333",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
                }}
              >
                ENGAGE VALVE ⚙
              </div>
            </div>
          </div>

          {/* Bottom Rivet Row */}
          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}55`,
              paddingTop: 4 * s,
              fontSize: 5.5 * s,
              color: p.muted,
            }}
          >
            <span>PATENTED MDCCCLXXXVIII</span>
            <span style={{ color: p.accent2 }}>COVENTRY LOCOMOTIVE WORKS</span>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
