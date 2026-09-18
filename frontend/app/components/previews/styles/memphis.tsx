import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MemphisPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Memphis Milano 81 Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent2,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${1 * s}px ${8 * s}px`,
                transform: "rotate(-1.5deg)",
              }}
            >
              MEMPHIS★81
            </span>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              MILANO DESIGN
            </span>
          </div>
          <span style={{ fontSize: 7 * s, fontWeight: 900, color: p.accent2 }}>
            Sottsass &amp; Co. ✿
          </span>
        </div>

        {/* Central Geometric Memphis Showcase Card with Hard Colored Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2.5px solid ${p.ink}`,
            borderRadius: 16 * s,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.accent2}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Floating Memphis Shapes */}
          <div
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              display: "flex",
              gap: 3 * s,
            }}
          >
            <div
              style={{
                width: 14 * s,
                height: 14 * s,
                borderRadius: "50%",
                background: p.accent,
                border: `1.5px solid ${p.ink}`,
              }}
            />
            <div
              style={{
                width: 12 * s,
                height: 12 * s,
                background: p.accent2,
                border: `1.5px solid ${p.ink}`,
                transform: "rotate(45deg)",
              }}
            />
          </div>

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
              Bacterio Pattern &amp; Terrazzo
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 900,
                color: p.ink,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              Squiggles, Laminate &amp; Pastel Attitude
            </h3>
            <p
              style={{
                fontSize: 6.5 * s,
                fontWeight: 600,
                color: p.muted,
                lineHeight: 1.4,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              Iconic 1980s Italian radical design: bold cartoon outlines, pastel geometry, and cheerful defiance of solemn modernism.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 8 * s,
              paddingTop: 6 * s,
              borderTop: `2px dashed ${p.ink}33`,
            }}
          >
            <span style={{ fontSize: 6.5 * s, fontWeight: 800, color: p.accent }}>
              Carlton Bookcase · 1981
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
                borderRadius: 999,
              }}
            >
              DISCOVER OBJECT →
            </button>
          </div>
        </div>

        {/* Footer Memphis Dotted Ribbon */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            color: p.ink,
          }}
        >
          <span>✦ TEAL &amp; PINK GEOMETRY</span>
          <span>✦ SQUIGGLES &amp; SQUARS</span>
          <span>✦ RADICAL MILAN</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
