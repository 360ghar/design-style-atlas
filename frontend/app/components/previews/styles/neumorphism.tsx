import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NeumorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* Soft Extruded Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 700,
                color: p.ink,
                letterSpacing: "-0.01em",
              }}
            >
              Tactile Audio Unit
            </span>
            <span
              style={{
                background: p.bg,
                color: p.accent,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${2 * s}px ${8 * s}px`,
                boxShadow: `${2 * s}px ${2 * s}px ${4 * s}px ${p.ink}18, -${2 * s}px -${2 * s}px ${4 * s}px ${p.surface}`,
              }}
            >
              EXTRUDED
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontWeight: 600 }}>
            Soft UI · 432 Hz
          </span>
        </div>

        {/* Central Soft Extruded Sculpted Card with Dual Shadows */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.bg,
            borderRadius: 18 * s,
            boxShadow: `${6 * s}px ${6 * s}px ${14 * s}px ${p.ink}1C, -${6 * s}px -${6 * s}px ${14 * s}px ${p.surface}`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 700,
                  color: p.accent,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Zero-Border Sculpture
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 700,
                  color: p.ink,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Dual Soft-Shadow Plastic
              </h3>
            </div>

            {/* Extruded Round Knob Dial */}
            <div
              style={{
                width: 28 * s,
                height: 28 * s,
                borderRadius: "50%",
                background: p.bg,
                boxShadow: `${4 * s}px ${4 * s}px ${8 * s}px ${p.ink}1C, -${4 * s}px -${4 * s}px ${8 * s}px ${p.surface}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: p.accent,
                fontSize: 11 * s,
              }}
            >
              ⏵
            </div>
          </div>

          {/* Pressed Inset Well Slider */}
          <div
            style={{
              background: p.bg,
              borderRadius: 10 * s,
              boxShadow: `inset ${3 * s}px ${3 * s}px ${6 * s}px ${p.ink}1C, inset -${3 * s}px -${3 * s}px ${6 * s}px ${p.surface}`,
              padding: `${8 * s}px ${12 * s}px`,
              margin: `${10 * s}px 0`,
            }}
          >
            <div className="flex items-center justify-between" style={{ fontSize: 6 * s, color: p.muted, fontWeight: 600 }}>
              <span>ACOUSTIC RESONANCE</span>
              <span style={{ color: p.accent }}>78%</span>
            </div>
            {/* Extruded Slider Thumb */}
            <div
              style={{
                height: 4 * s,
                background: `${p.ink}15`,
                borderRadius: 999,
                marginTop: 4 * s,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "78%",
                  height: "100%",
                  background: p.accent,
                  borderRadius: 999,
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6 * s, color: p.muted, fontWeight: 600 }}>
              Tactile Haptic Feedback
            </span>
            <button
              type="button"
              style={{
                background: p.bg,
                color: p.accent,
                border: "none",
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `${4 * s}px ${4 * s}px ${8 * s}px ${p.ink}1A, -${4 * s}px -${4 * s}px ${8 * s}px ${p.surface}`,
              }}
            >
              Engage Pulse
            </button>
          </div>
        </div>

        {/* Footer Neumorphic Note */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>✦ NO BORDERS — SHADOWS SHAPE FORM</span>
          <span>✦ SOFT EXTRUDED PLASTIC</span>
          <span style={{ color: p.accent }}>✦ TACTILE CALM</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
