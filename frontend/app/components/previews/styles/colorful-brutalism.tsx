import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ColorfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Rainbow Primary Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.ink,
                background: p.accent,
                border: `2.5px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${2 * s}px ${8 * s}px`,
                textTransform: "uppercase",
              }}
            >
              ACID★BLOCK
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
              STAGE 01
            </span>
          </div>
          <span
            style={{
              fontSize: 7 * s,
              fontWeight: 900,
              color: p.accent,
              textShadow: `${1 * s}px ${1 * s}px 0 ${p.ink}`,
            }}
          >
            SUMMER DROP ⚡
          </span>
        </div>

        {/* Central White Sticker Card with 5px Hard Black Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            borderRadius: 12 * s,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <span
                style={{
                  fontSize: 5.5 * s,
                  fontWeight: 900,
                  color: p.surface,
                  background: p.ink,
                  padding: `${1 * s}px ${5 * s}px`,
                  borderRadius: 4 * s,
                  textTransform: "uppercase",
                }}
              >
                LIVE EVENT TICKET
              </span>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${4 * s}px 0 0 0`,
                }}
              >
                Maximal Color Meets Heavy Concrete
              </h3>
            </div>
            <div
              style={{
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 9 * s,
                color: p.ink,
                padding: `${2 * s}px ${6 * s}px`,
                transform: "rotate(4deg)",
              }}
            >
              $25
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
            Clashing hyper-saturated primaries stitched together with heavy black bands and chunky borders.
          </p>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6 * s, fontWeight: 800, color: p.ink }}>
              Doors Open 20:00 · Berlin
            </span>
            <button
              type="button"
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2.5px solid ${p.ink}`,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
                borderRadius: 8 * s,
              }}
            >
              GET PASS ⚡
            </button>
          </div>
        </div>

        {/* Footer Rainbow Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2.5px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 6 * s,
            fontWeight: 900,
            color: p.surface,
            textShadow: `${1 * s}px ${1 * s}px 0 ${p.ink}`,
          }}
        >
          <span>✦ VIOLET GROUND</span>
          <span>✦ SOLAR YELLOW</span>
          <span>✦ NEON MAGENTA</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
