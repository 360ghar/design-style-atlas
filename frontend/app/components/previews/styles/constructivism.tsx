import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ConstructivismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Dynamic Diagonal Slogan Banner */}
        <div
          style={{
            position: "absolute",
            top: 20 * s,
            left: -30 * s,
            width: "120%",
            background: "#121212",
            color: "#FFFFFF",
            transform: "rotate(-7deg)",
            padding: `${4 * s}px 0`,
            textAlign: "center",
            fontFamily: p.display,
            fontSize: 7 * s,
            letterSpacing: "0.15em",
            fontWeight: 800,
            textTransform: "uppercase",
            boxShadow: `0 ${4 * s}px 0px ${p.accent}`,
            zIndex: 1,
          }}
        >
          AVANT-GARDE MANIFESTO // EL LISSITZKY // BEAT THE WHITES
        </div>

        {/* Central Constructivist Geometric Composition */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-center"
          style={{
            maxWidth: 420 * s,
            padding: `0 ${16 * s}px`,
            marginTop: 18 * s,
          }}
        >
          <div className="relative flex items-center justify-between">
            {/* Massive Diagonal Red Wedge piercing circle */}
            <div className="relative" style={{ width: 140 * s, height: 110 * s }}>
              {/* Black Circle Target */}
              <div
                style={{
                  position: "absolute",
                  right: 10 * s,
                  top: 15 * s,
                  width: 70 * s,
                  height: 70 * s,
                  borderRadius: "50%",
                  background: "#121212",
                  border: `3px solid ${p.bg}`,
                }}
              />
              {/* Red Wedge Triangle */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 25 * s,
                  width: 0,
                  height: 0,
                  borderTop: `${25 * s}px solid transparent`,
                  borderBottom: `${25 * s}px solid transparent`,
                  borderLeft: `${90 * s}px solid ${p.accent}`,
                  transform: "rotate(18deg)",
                  filter: "drop-shadow(3px 3px 0px #121212)",
                }}
              />
            </div>

            {/* Industrial Typography Block */}
            <div className="flex flex-col" style={{ maxWidth: 200 * s }}>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 22 * s,
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "#121212",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                }}
              >
                PRODUCE
                <br />
                <span style={{ color: p.accent }}>NOT REPRODUCE</span>
              </div>
              <p
                style={{
                  fontSize: 7 * s,
                  color: p.muted,
                  marginTop: 6 * s,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  textTransform: "uppercase",
                }}
              >
                Art into technology. The construction of space through dynamic diagonal momentum.
              </p>

              {/* Action Button */}
              <div
                style={{
                  marginTop: 8 * s,
                  alignSelf: "flex-start",
                  background: p.accent,
                  color: "#FFFFFF",
                  fontFamily: p.display,
                  fontSize: 7 * s,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: `${4 * s}px ${12 * s}px`,
                  border: "2px solid #121212",
                  boxShadow: "3px 3px 0px #121212",
                }}
              >
                FORWARD →
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
