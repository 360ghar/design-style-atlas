import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function IndustrialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Safety-Yellow Hazard Header */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <span
                style={{
                  fontFamily: p.display,
                  fontSize: 11 * s,
                  fontWeight: 900,
                  color: p.bg,
                  background: p.accent,
                  padding: `${1 * s}px ${6 * s}px`,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                TURBINE-04
              </span>
              <span
                style={{
                  fontSize: 6 * s,
                  fontWeight: 700,
                  color: p.accent,
                  border: `1px solid ${p.accent}`,
                  padding: `${1 * s}px ${5 * s}px`,
                }}
              >
                SECTOR B
              </span>
            </div>
            <span style={{ fontSize: 6 * s, fontWeight: 700, color: p.muted, fontFamily: "monospace" }}>
              7,420 RPM · NOMINAL
            </span>
          </div>

          {/* 45° Safety Hazard Stripe Divider */}
          <div
            style={{
              height: 6 * s,
              margin: `${6 * s}px 0`,
              backgroundImage: `repeating-linear-gradient(45deg, ${p.accent}, ${p.accent} ${8 * s}px, ${p.bg} ${8 * s}px, ${p.bg} ${16 * s}px)`,
              border: `1px solid ${p.accent}`,
            }}
          />
        </div>

        {/* Heavy Steel Control Unit Panel */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2px solid ${p.muted}44`,
            padding: `${10 * s}px ${12 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 5.5 * s,
                  fontWeight: 700,
                  color: p.accent2,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                CRITICAL WARNING SYS
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 900,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: p.ink,
                  lineHeight: 1.1,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                High-Voltage Bus Primary Feed
              </h3>
            </div>
            <div
              style={{
                background: p.bg,
                border: `1px solid ${p.accent2}`,
                color: p.accent2,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${2 * s}px ${6 * s}px`,
                fontFamily: "monospace",
              }}
            >
              480V / 3Φ
            </div>
          </div>

          <p
            style={{
              fontSize: 6.5 * s,
              color: p.muted,
              lineHeight: 1.4,
              margin: `${6 * s}px 0`,
            }}
          >
            Machined steel borders, high-contrast caution striping, and condensed stencil instrumentation.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.muted}33`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              PRESS RELIEF VALVE: CLOSED
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.bg,
                border: "none",
                borderRadius: 0,
                fontSize: 6.5 * s,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              MANUAL INTERLOCK
            </button>
          </div>
        </div>

        {/* Industrial Metal Stamped Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.muted}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            color: p.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>OSHA COMPLIANT SPEC</span>
          <span>PLATE #IN-8890</span>
          <span style={{ color: p.accent }}>LOCKOUT / TAGOUT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
