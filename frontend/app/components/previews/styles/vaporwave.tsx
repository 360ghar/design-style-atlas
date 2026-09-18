import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function VaporwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Vaporwave Mall-At-Dusk Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 700,
                color: p.accent,
                letterSpacing: "0.2em",
              }}
            >
              ＡＥＳＴＨＥＴＩＣ
            </span>
            <span
              style={{
                background: `${p.accent2}18`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                borderRadius: 4 * s,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${1 * s}px ${6 * s}px`,
                letterSpacing: "0.1em",
              }}
            >
              １９９２ · リサフランク
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontFamily: p.display }}>
            フローラル SHOPS 🌴
          </span>
        </div>

        {/* Central Deserted Mall Atrium Card with Lilac Wash */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: `linear-gradient(180deg, ${p.surface}, ${p.bg})`,
            borderRadius: 8 * s,
            border: `1.5px solid ${p.accent}55`,
            boxShadow: `0 0 ${30 * s}px ${p.accent}2A, 0 ${8 * s}px ${24 * s}px ${p.bg}`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Classical Roman Bust / Column Motif */}
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  color: p.accent2,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Deserted Shopping Atrium · 21:00
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: p.ink,
                  textShadow: `0 0 ${12 * s}px ${p.accent}66`,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Helios 420 // Marble &amp; Sunset Mist
              </h3>
            </div>
            <div
              style={{
                fontSize: 16 * s,
                color: p.accent2,
                textShadow: `0 0 ${10 * s}px ${p.accent2}`,
              }}
            >
              🏛️
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.5,
              margin: `${8 * s}px 0`,
            }}
          >
            Hazy VHS tape loops, Roman statues in twilight gardens, slow chopped-and-screwed elevator jazz, and endless mall hallways.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.accent2, fontFamily: "monospace" }}>
              FORMAT: CASSETTE // SLOWED 80%
            </span>
            <button
              type="button"
              style={{
                background: "transparent",
                color: p.accent,
                border: `1px solid ${p.accent}`,
                borderRadius: 4 * s,
                fontFamily: p.display,
                fontSize: 6.5 * s,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${10 * s}px ${p.accent}44`,
              }}
            >
              ＤＯＷＮＬＯＡＤ ♫
            </button>
          </div>
        </div>

        {/* Footer Dreamy Horizon Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent2}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>✦ HAZY MALL AT DUSK</span>
          <span>✦ STATUE MOONLIGHT RIMS</span>
          <span style={{ color: p.accent }}>✦ NUMB &amp; DREAMY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
