import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ClaymorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Puffy Clay Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                borderRadius: 999,
                padding: `${2 * s}px ${10 * s}px`,
                boxShadow: `inset 2px 2px 4px ${p.surface}AA, inset -2px -2px 4px ${p.ink}33, 0 ${4 * s}px ${12 * s}px ${p.accent}44`,
              }}
            >
              CLAY★BOT
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${8 * s}px`,
                boxShadow: `inset 1px 1px 3px ${p.surface}88, 0 ${2 * s}px ${6 * s}px ${p.accent2}33`,
              }}
            >
              PUFFY 3D
            </span>
          </div>
          <span style={{ fontSize: 7 * s, fontWeight: 800, color: p.accent }}>
            Soft Toy UX ✿
          </span>
        </div>

        {/* Central Inflated 3D Clay Card with Chunky Inner Highlights */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 28 * s,
            boxShadow: `inset 3px 3px 6px ${p.surface}, inset -3px -3px 8px ${p.ink}15, 0 ${12 * s}px ${28 * s}px ${p.accent}25`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 800,
                  color: p.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Zero Outlines · Pure Inflation
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Puffy Tactile Volume
              </h3>
            </div>

            {/* Inflated Clay Blob Ball */}
            <div
              className="pv-float"
              style={{
                width: 26 * s,
                height: 26 * s,
                borderRadius: "50%",
                background: p.accent2,
                boxShadow: `inset 2px 2px 5px ${p.surface}99, inset -2px -2px 6px ${p.ink}44, 0 ${6 * s}px ${14 * s}px ${p.accent2}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: p.surface,
                fontSize: 12 * s,
              }}
            >
              ✦
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              fontWeight: 600,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            Bulbous pastel masses sculpted with dual inner highlights and soft diffuse color drop shadows. Never sharp outlines.
          </p>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.accent2 }}>
              ★ Sculpted Plasticine
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: "none",
                borderRadius: 999,
                fontFamily: p.display,
                fontSize: 7 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${16 * s}px`,
                cursor: "pointer",
                boxShadow: `inset 2px 2px 5px ${p.surface}AA, inset -2px -2px 6px ${p.ink}44, 0 ${6 * s}px ${16 * s}px ${p.accent}55`,
              }}
            >
              Squeeze Me ✦
            </button>
          </div>
        </div>

        {/* Footer Clay Note */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ 28PX PUFFY CORNERS</span>
          <span>✦ INSET WHITE HIGHLIGHTS</span>
          <span style={{ color: p.accent }}>✦ ZERO BORDERS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
