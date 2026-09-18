import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Y2KPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Millennium Cyber Chrome Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              className="pv-chrome-text"
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              CYBER·2000
            </span>
            <span
              style={{
                background: `${p.accent}15`,
                color: p.accent,
                border: `1px solid ${p.accent}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${8 * s}px`,
                boxShadow: `0 0 ${8 * s}px ${p.accent}55`,
              }}
            >
              OPTIMISTIC FUTURISM
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.accent, fontFamily: p.display }}>
            YEAR 2000 READY ★
          </span>
        </div>

        {/* Central Glossy Cyber-Player Card with Cyan Specular Glow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: `linear-gradient(180deg, ${p.surface}, ${p.bg})`,
            borderRadius: 20 * s,
            border: `1.5px solid ${p.accent}`,
            boxShadow: `0 0 ${20 * s}px ${p.accent}44, inset 0 1px 0 ${p.ink}40`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Holographic Pill Badge */}
          <div
            className="pv-float"
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              background: p.accent2,
              color: p.bg,
              border: `1.5px solid ${p.ink}`,
              borderRadius: 999,
              padding: `${2 * s}px ${8 * s}px`,
              fontSize: 6 * s,
              fontWeight: 900,
              boxShadow: `0 0 ${12 * s}px ${p.accent2}`,
            }}
          >
            ✦ MP3 DISC JOCKEY
          </div>

          <div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent2,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Early-Digital Optimism
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 900,
                color: p.ink,
                textShadow: `0 0 ${10 * s}px ${p.accent}`,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              Chrome Speculars &amp; Glossy Orbs
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Liquid mercury typography, translucent bubbly enclosures, and triumphant post-millennium digital hope.
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
            <span style={{ fontSize: 6.5 * s, color: p.accent, fontWeight: 700 }}>
              Bitrate: 128 kbps · Stereophonic
            </span>
            <button
              type="button"
              style={{
                background: `linear-gradient(180deg, ${p.accent}, ${p.accent}AA)`,
                color: p.bg,
                border: `1px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}`,
              }}
            >
              PLAY DISC ✦
            </button>
          </div>
        </div>

        {/* Footer Millennium Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ CHROME KEYLINES</span>
          <span>✦ 20PX BUBBLY PILLS</span>
          <span style={{ color: p.accent }}>✦ ZERO MATTE FLATNESS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
