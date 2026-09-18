import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PlayfulMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Confetti Candy Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                borderRadius: 999,
                padding: `${1 * s}px ${8 * s}px`,
              }}
            >
              CONFETTI★CLUB
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              100% SUGAR
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.ink }}>
            Full Volume! ✿
          </span>
        </div>

        {/* Central Wavy Sticker Bomb Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2.5px solid ${p.ink}`,
            borderRadius: 20 * s,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}, 0 ${4 * s}px ${20 * s}px ${p.accent}2A`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Starburst Badge */}
          <div
            className="pv-float"
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              background: p.accent2,
              color: p.surface,
              border: `2px solid ${p.ink}`,
              borderRadius: 999,
              padding: `${2 * s}px ${8 * s}px`,
              fontSize: 6.5 * s,
              fontWeight: 900,
              boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
            }}
          >
            ✦ WOW!
          </div>

          <div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Dopamine Interface · Drop 03
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
              Stickers, Squiggles &amp; Joy
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                fontWeight: 600,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Chunky ink borders, bouncy hard shadows, and candy-colored dopamine triggers across every surface.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `2px solid ${p.ink}15`,
            }}
          >
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.accent2 }}>
              ★ 2,400+ Badges Available
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
              }}
            >
              Grab Sticker ✦
            </button>
          </div>
        </div>

        {/* Footer Confetti Ribbon */}
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
          <span>● CANDY ACCENTS</span>
          <span>★ 5PX HARD SHADOW</span>
          <span>✦ ZERO WHITESPACE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
