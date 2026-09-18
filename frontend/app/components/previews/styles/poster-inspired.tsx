import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PosterInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.surface,
          fontFamily: p.body,
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Poster Top Shouting Banner */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: p.display,
              fontSize: 9 * s,
              fontWeight: 900,
              background: p.accent,
              color: p.surface,
              padding: `${1 * s}px ${6 * s}px`,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ONE NIGHT ONLY
          </span>
          <span
            style={{
              fontFamily: p.display,
              fontSize: 7 * s,
              fontWeight: 900,
              background: p.accent2,
              color: p.accent,
              padding: `${1 * s}px ${8 * s}px`,
              textTransform: "uppercase",
            }}
          >
            OCTOBER 24 ★ LIVE
          </span>
        </div>

        {/* Massive Poster Display Title */}
        <div className="my-auto overflow-hidden">
          <div
            style={{
              fontFamily: p.display,
              fontSize: 24 * s,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: p.surface,
            }}
          >
            SONIC
            <br />
            REVOLT
          </div>

          <div
            style={{
              marginTop: 6 * s,
              borderTop: `3px solid ${p.surface}`,
              paddingTop: 4 * s,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 7 * s, fontWeight: 800, textTransform: "uppercase" }}>
              THE PALLADIUM THEATRE · LONDON
            </div>
            <div
              style={{
                background: p.surface,
                color: p.accent,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 8 * s,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              DOORS 19:00
            </div>
          </div>
        </div>

        {/* Poster Bottom Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.surface}`,
            paddingTop: 4 * s,
            fontSize: 6 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          <span>FEATURING SOUND SYSTEM COLLECTIVE</span>
          <span style={{ background: p.accent, color: p.surface, padding: `${2 * s}px ${8 * s}px` }}>
            TICKETS £18
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
