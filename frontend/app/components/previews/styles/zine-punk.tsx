import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ZinePunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* DIY Xeroxed Zine Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.bg,
                background: p.ink,
                padding: `${1 * s}px ${6 * s}px`,
                transform: "rotate(-2deg)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              RIOT★ZINE
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.ink,
                border: `2px dashed ${p.ink}`,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
                transform: "rotate(2deg)",
              }}
            >
              ISSUE #07 · 50 COPIES
            </span>
          </div>
          <span
            style={{
              fontSize: 6.5 * s,
              fontWeight: 900,
              color: p.accent,
              textTransform: "uppercase",
            }}
          >
            NO MASTERS ★
          </span>
        </div>

        {/* Photocopied Cut & Paste Ripped Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Simulated Scotch Tape Strip */}
          <div
            style={{
              position: "absolute",
              top: -6 * s,
              right: 18 * s,
              width: 48 * s,
              height: 12 * s,
              background: `${p.ink}15`,
              borderLeft: `1px solid ${p.ink}33`,
              borderRight: `1px solid ${p.ink}33`,
              transform: "rotate(3deg)",
            }}
          />

          <div>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 900,
                background: p.accent,
                color: p.bg,
                padding: `${1 * s}px ${6 * s}px`,
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 3 * s,
              }}
            >
              GIG FLYER · TONIGHT
            </span>
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                color: p.ink,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              BASEMENT PUNK FURY
            </h2>
            <p
              style={{
                fontSize: 6.5 * s,
                fontFamily: "monospace",
                color: p.ink,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
                background: `${p.accent2}33`,
                padding: `${3 * s}px ${6 * s}px`,
                borderLeft: `2px solid ${p.ink}`,
              }}
            >
              FEATURING: THE STATIC · WIRE CUTTERS · ANARCHY DUO. $5 AT DOOR OR BRING CANNED FOOD.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 8 * s,
              paddingTop: 6 * s,
              borderTop: `2px dashed ${p.ink}`,
            }}
          >
            <span style={{ fontSize: 6 * s, fontFamily: "monospace", fontWeight: 700 }}>
              DOORS 21:00 · WAREHOUSE B
            </span>
            <button
              type="button"
              style={{
                background: p.ink,
                color: p.bg,
                border: "none",
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.accent}`,
              }}
            >
              STEAL FLYER ☠
            </button>
          </div>
        </div>

        {/* Footer Xerox Redaction Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontFamily: "monospace",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          <span>✦ XEROX CONTRAST 100%</span>
          <span>✦ TAPED RIPS</span>
          <span style={{ color: p.accent }}>✦ EARN THE ANGER</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
