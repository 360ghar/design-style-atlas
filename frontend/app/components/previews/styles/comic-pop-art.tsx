import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ComicPopArtPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Comic Masthead */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            border: `2.5px solid ${p.ink}`,
            boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
            padding: `${4 * s}px ${10 * s}px`,
          }}
        >
          <span
            style={{
              fontFamily: p.display,
              fontSize: 10 * s,
              fontWeight: 900,
              color: p.accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ACTION COMICS #88
          </span>
          <span
            style={{
              background: p.accent2,
              color: p.ink,
              border: `1.5px solid ${p.ink}`,
              fontSize: 5.5 * s,
              fontWeight: 900,
              padding: `${1 * s}px ${6 * s}px`,
            }}
          >
            APPROVED BY CODE
          </span>
        </div>

        {/* Comic Action Panels Grid */}
        <div className="my-auto grid grid-cols-2" style={{ gap: 8 * s }}>
          {/* Panel 1 */}
          <div
            style={{
              background: p.surface,
              border: `2.5px solid ${p.ink}`,
              boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
              padding: `${8 * s}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                background: p.accent2,
                border: `1.5px solid ${p.ink}`,
                fontSize: 5 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${5 * s}px`,
                width: "fit-content",
              }}
            >
              MEANWHILE...
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                lineHeight: 1,
                color: p.accent,
                margin: `${6 * s}px 0`,
                textShadow: `${1.5 * s}px ${1.5 * s}px 0 ${p.ink}`,
              }}
            >
              KRAK!
            </div>
            <p style={{ fontSize: 5.5 * s, color: p.ink, fontWeight: 700, margin: 0 }}>
              The villain's server explodes into halftones!
            </p>
          </div>

          {/* Panel 2 */}
          <div
            style={{
              background: p.accent,
              color: p.bg,
              border: `2.5px solid ${p.ink}`,
              boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
              padding: `${8 * s}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                background: p.bg,
                color: p.ink,
                border: `1.5px solid ${p.ink}`,
                fontSize: 5 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${5 * s}px`,
                width: "fit-content",
              }}
            >
              NEXT ISSUE!
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 900,
                lineHeight: 1.1,
                margin: `${6 * s}px 0`,
              }}
            >
              TO BE CONTINUED!
            </div>
            <span
              style={{
                background: p.accent2,
                color: p.ink,
                border: `1.5px solid ${p.ink}`,
                fontSize: 5.5 * s,
                fontWeight: 900,
                textAlign: "center",
                padding: `${3 * s}px 0`,
              }}
            >
              READ CHAPTER 2 →
            </span>
          </div>
        </div>

        {/* Comic Gutter Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            fontWeight: 900,
            letterSpacing: "0.08em",
            color: p.muted,
          }}
        >
          <span>★ BEN-DAY DOTS</span>
          <span>★ BURST BADGES</span>
          <span style={{ color: p.accent }}>★ 10 CENTS ONLY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
