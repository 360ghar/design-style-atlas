import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MidCenturyModernPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontFamily: p.display, fontWeight: 700 }}>✳ Miller &amp; Co.</span>
          <span className="flex" style={{ gap: 8 * s, color: p.muted }}><span>Lounge</span><span>Dining</span><span>Lighting</span></span>
          <span style={{ background: p.ink, color: p.surface, borderRadius: 999, padding: `${3 * s}px ${9 * s}px` }}>Showroom</span>
        </div>
        <div className="flex flex-1 items-center" style={{ padding: `0 ${12 * s}px`, gap: 12 * s }}>
          <div style={{ width: 56 * s, height: 56 * s, flexShrink: 0, background: `conic-gradient(${p.accent} 0 8%, transparent 8% 25%, ${p.accent} 25% 33%, transparent 33% 50%, ${p.accent} 50% 58%, transparent 58% 75%, ${p.accent} 75% 83%, transparent 83%)`, borderRadius: "50%", position: "relative" }}>
            <span style={{ position: "absolute", inset: "38%", background: p.accent2, borderRadius: "50%" }} />
          </div>
          <div>
            <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15, lineHeight: 1.05 }}>Atomic<br />living.</div>
            <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 4 * s }}>teak · starburst · est. 1958</div>
            <div className="flex" style={{ gap: 4 * s, marginTop: 7 * s }}>
              {[p.accent, "#D9A441", p.accent2].map((c) => <span key={c} style={{ width: 22 * s, height: 7 * s, background: c, borderRadius: 3 }} />)}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `2px solid ${p.ink}`, fontSize: 6 * s, color: p.muted }}>
          <span>EAMES · NELSON · SAARINEN</span><span>catalog 1958 →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
