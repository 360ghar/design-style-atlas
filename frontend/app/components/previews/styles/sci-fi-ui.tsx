import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SciFiUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Bridge Tactical HUD Telemetry Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 900,
                color: p.accent,
                textShadow: `0 0 ${8 * s}px ${p.accent}`,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              TAC-OPS // BRIDGE 01
            </span>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                fontSize: 5.5 * s,
                padding: `${1 * s}px ${6 * s}px`,
                color: p.accent,
              }}
            >
              DEFENSE MATRIX: ONLINE
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.accent2, fontFamily: "monospace", fontWeight: 700 }}>
            ORBITAL SECTOR 07-B
          </span>
        </div>

        {/* Console Frame with Corner Brackets */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.accent}55`,
            boxShadow: `0 0 ${20 * s}px ${p.accent}22`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Cyan Corner Brackets */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 8 * s,
              height: 8 * s,
              borderTop: `2px solid ${p.accent}`,
              borderLeft: `2px solid ${p.accent}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 8 * s,
              height: 8 * s,
              borderTop: `2px solid ${p.accent}`,
              borderRight: `2px solid ${p.accent}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 8 * s,
              height: 8 * s,
              borderBottom: `2px solid ${p.accent}`,
              borderLeft: `2px solid ${p.accent}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 8 * s,
              height: 8 * s,
              borderBottom: `2px solid ${p.accent}`,
              borderRight: `2px solid ${p.accent}`,
            }}
          />

          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 5.5 * s,
                  fontWeight: 700,
                  color: p.accent2,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                TACTICAL SENSOR ARRAY
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 800,
                  color: p.ink,
                  textShadow: `0 0 ${10 * s}px ${p.accent}44`,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Deep-Space Kinetic Target Acquisition
              </h3>
            </div>
            <div
              style={{
                border: `1px solid ${p.accent2}`,
                color: p.accent2,
                fontFamily: "monospace",
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              LOCK 99.4%
            </div>
          </div>

          {/* Segmented Energy Shield Gauge */}
          <div style={{ margin: `${8 * s}px 0` }}>
            <div className="flex items-center justify-between" style={{ fontSize: 5.5 * s, color: p.muted, marginBottom: 2 * s }}>
              <span>SHIELD DEFLECTORS</span>
              <span style={{ color: p.accent }}>88% NOMINAL</span>
            </div>
            <div className="flex h-2 w-full gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{
                    background: i < 7 ? p.accent : `${p.accent}22`,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              WARP DRIVE CHARGED: 12.8 TJ
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.bg,
                border: "none",
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 800,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}`,
              }}
            >
              ENGAGE THRUST ⏵
            </button>
          </div>
        </div>

        {/* Tactical Telemetry Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>✦ 1PX CYAN HAIRLINES</span>
          <span>✦ CORNER BRACKETS</span>
          <span style={{ color: p.accent }}>✦ 0PX SHARP TACTICAL HUD</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
