import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function McBlingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* McBling Glam Rhinestone Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.accent2}`,
                borderRadius: 999,
                padding: `${1 * s}px ${8 * s}px`,
                boxShadow: `0 0 ${10 * s}px ${p.accent}66`,
              }}
            >
              GLAM★CLUB
            </span>
            <span
              style={{
                background: `${p.accent2}33`,
                color: p.ink,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              RHINESTONE 2003
            </span>
          </div>
          <span style={{ fontSize: 7 * s, fontWeight: 900, color: p.accent }}>
            PARIS VIBES ✦
          </span>
        </div>

        {/* Central Fluffy Pink Glitter Card with Rhinestone Border */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 22 * s,
            border: `2px solid ${p.accent}`,
            boxShadow: `0 0 ${20 * s}px ${p.accent}33, 0 ${8 * s}px ${24 * s}px ${p.ink}15`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Gold Star Badge */}
          <div
            className="pv-float"
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              background: p.accent2,
              color: p.ink,
              border: `1.5px solid ${p.accent}`,
              borderRadius: 999,
              padding: `${2 * s}px ${8 * s}px`,
              fontSize: 6 * s,
              fontWeight: 900,
              boxShadow: `0 0 ${10 * s}px ${p.accent2}`,
            }}
          >
            ✦ THAT’S HOT
          </div>

          <div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Velour Tracksuit &amp; Flip Phones
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 800,
                color: p.ink,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              Rhinestone Pink Luxe &amp; Glamour
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Early 2000s celebrity excess: bedazzled crystals, pink velour upholstery, and glitter sparkles at maximum wattage.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.accent}22`,
            }}
          >
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.accent }}>
              💖 Limited Edition Sparkle
            </span>
            <button
              type="button"
              style={{
                background: `linear-gradient(180deg, ${p.accent}, ${p.accent}CC)`,
                color: p.surface,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}88`,
              }}
            >
              GET BEDAZZLED ✦
            </button>
          </div>
        </div>

        {/* Footer McBling Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ RHINESTONE ACCENTS</span>
          <span>✦ 22PX VELOUR PILLS</span>
          <span style={{ color: p.accent }}>✦ ZERO MATTE FLATNESS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
