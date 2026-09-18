import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PlayfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Playful Chunky Nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2.5px solid ${p.ink}`,
                borderRadius: 14 * s,
                padding: `${2 * s}px ${8 * s}px`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
              }}
            >
              Squish!
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.ink,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              ★ STICKER DROP
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.ink }}>
            Candy Club ✿
          </span>
        </div>

        {/* Central Squishy Card with Hard Sweet Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2.5px solid ${p.ink}`,
            borderRadius: 18 * s,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.ink}`,
            padding: `${14 * s}px ${16 * s}px`,
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
                  letterSpacing: "0.1em",
                }}
              >
                Chunky &amp; Friendly
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${2 * s}px 0 0 0`,
                }}
              >
                Plush Shapes with Structural Bite
              </h3>
            </div>
            <div
              className="pv-float"
              style={{
                width: 26 * s,
                height: 26 * s,
                borderRadius: "50%",
                background: p.accent2,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              margin: `${8 * s}px 0`,
              lineHeight: 1.4,
            }}
          >
            Big rounded pill corners colliding with bold cartoon ink lines and bubblegum pop fills.
          </p>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.ink }}>
              Pack #01 · 10 Stickers
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2.5px solid ${p.ink}`,
                borderRadius: 999,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
              }}
            >
              Claim Badge ✦
            </button>
          </div>
        </div>

        {/* Footer Playful Ribbon */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 6 * s,
            fontWeight: 800,
            color: p.ink,
          }}
        >
          <span>✿ SQUISHY 18PX CORNERS</span>
          <span>● HARD 4PX SHADOWS</span>
          <span>★ BOING!</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
