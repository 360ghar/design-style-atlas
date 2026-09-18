import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NinetiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Nickelodeon 90s Kid-TV Header */}
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
                padding: `${1 * s}px ${8 * s}px`,
                transform: "rotate(-2deg)",
              }}
            >
              SLIME★TIME
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              1993 ENERGY
            </span>
          </div>
          <span style={{ fontSize: 7 * s, fontWeight: 900, color: p.ink }}>
            BOOMBOX BEATS ⚡
          </span>
        </div>

        {/* Central Fresh-Prince Checkerboard Card with 5px Hard Black Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            borderRadius: 16 * s,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Zigzag Cartoon Accent */}
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 900,
                  color: p.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Saturday Morning TV Cartoons
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
                Boombox Blocks &amp; Squiggles
              </h3>
            </div>
            <div
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 9 * s,
                padding: `${2 * s}px ${6 * s}px`,
                transform: "rotate(4deg)",
              }}
            >
              RAD!
            </div>
          </div>

          <p
            style={{
              fontSize: 6.5 * s,
              fontWeight: 600,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            Chunky geometric collisions, vibrant purple and teal contrast, zigzags, and unapologetic childhood nostalgia.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `2px dashed ${p.ink}`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6.5 * s, fontWeight: 900, color: p.accent }}>
              Tape Deck #04 · Side A
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              PLAY CASSETTE ✦
            </button>
          </div>
        </div>

        {/* Footer 90s Ribbon */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 900,
            textTransform: "uppercase",
            color: p.ink,
          }}
        >
          <span>✦ PURPLE &amp; TEAL</span>
          <span>✦ 5PX HARD SHADOW</span>
          <span style={{ color: p.accent }}>✦ ZERO ADULT SERIOUSNESS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
