import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EInkPaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${12 * s}px ${16 * s}px`,
        }}
      >
        {/* E-reader top bar: book title & battery */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `1px solid ${p.ink}22`,
            paddingBottom: 4 * s,
            fontSize: 6 * s,
            color: p.muted,
          }}
        >
          <span>Chapter IV · The Architecture of Silence</span>
          <span>Battery 84% · 11:20 AM</span>
        </div>

        {/* Pure book serif reading canvas */}
        <div className="my-auto" style={{ padding: `${8 * s}px 0` }}>
          <div style={{ fontSize: 5.5 * s, letterSpacing: "0.2em", color: p.muted, textTransform: "uppercase" as const }}>
            MONOCHROME ESSENTIAL
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 16 * s,
              fontWeight: 600,
              lineHeight: 1.15,
              margin: `${4 * s}px 0 ${8 * s}px 0`,
            }}
          >
            The Kindle &amp; Print Calm
          </h2>
          <p style={{ fontSize: 7 * s, lineHeight: 1.65, color: p.ink }}>
            Warm paper grounds, book serif typography set at reading sizes, hairline rules, and zero blinking distractions. Three-hour sessions without eye strain.
          </p>
        </div>

        {/* Progress reading bar */}
        <div style={{ borderTop: `1px solid ${p.ink}22`, paddingTop: 5 * s }}>
          <div className="flex items-center justify-between" style={{ fontSize: 5.5 * s, color: p.muted, marginBottom: 3 * s }}>
            <span>Page 142 of 320</span>
            <span>44% read · 1 hr 12 min left</span>
          </div>
          <div style={{ height: 3 * s, background: `${p.ink}22`, borderRadius: 99 }}>
            <div style={{ width: "44%", height: "100%", background: p.ink, borderRadius: 99 }} />
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
