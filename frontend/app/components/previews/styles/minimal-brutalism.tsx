import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MinimalBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div style={{ background: p.bg, color: p.ink, fontFamily: p.body, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* whisper nav — 2px rules, wordmark + index */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: `${7 * s}px ${12 * s}px`, borderTop: `2px solid ${p.ink}`, borderBottom: `2px solid ${p.ink}`, background: p.surface, fontFamily: mono, fontSize: 7.5 * s }}>
          <span style={{ fontWeight: 700, letterSpacing: "0.08em" }}>STUDIO&nbsp;KA</span>
          <span style={{ color: p.muted }}>INDEX <span style={{ color: p.accent2 }}>01</span></span>
        </div>
        {/* hero room */}
        <div style={{ flex: 1, padding: `${14 * s}px ${12 * s}px ${10 * s}px`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: mono, fontSize: 7 * s, color: p.muted }}>EXHIBIT — 01</div>
          <div style={{ fontFamily: p.display, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.02, fontSize: (large ? 30 : 19) * (large ? 1 : 1), marginTop: 6 * s }}>
            One room.
            <br />
            One work.
          </div>
          {/* one raw rule */}
          <div style={{ height: 2, background: p.ink, marginTop: 10 * s, width: "100%" }} />
          {/* minimal spec list */}
          <div style={{ fontFamily: mono, fontSize: 7 * s, color: p.muted, marginTop: 8 * s, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: `${4 * s}px 0`, borderBottom: `2px solid ${p.ink}` }}>
              <span>FRAME — 2PX INK</span>
              <span style={{ color: p.ink }}>→</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: `${4 * s}px 0`, borderBottom: `2px solid ${p.ink}` }}>
              <span>TYPE — GROTESK 700</span>
              <span style={{ color: p.ink }}>→</span>
            </div>
          </div>
          {/* ghost CTA */}
          <div style={{ marginTop: 10 * s }}>
            <span style={{ display: "inline-block", border: `2px solid ${p.accent}`, fontFamily: mono, fontSize: 7 * s, letterSpacing: "0.14em", padding: `${6 * s}px ${12 * s}px`, background: p.surface, color: p.ink }}>
              ENTER →
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
