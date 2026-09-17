import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SolarpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontFamily: p.display, fontWeight: 700 }}>☀ Heliotrope Commons</span>
          <span style={{ color: p.muted }}>Grow · Build · Share</span>
          <span style={{ background: p.accent, color: "#fff", borderRadius: 999, padding: `${3 * s}px ${10 * s}px` }}>Join →</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div className="flex items-center" style={{ gap: 10 * s }}>
            <span style={{ width: 32 * s, height: 32 * s, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, #fff8, transparent), ${p.accent2}`, boxShadow: `0 0 24px ${p.accent2}99`, flexShrink: 0 }} />
            <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16, lineHeight: 1.05 }}>Sunlit<br />abundance.</div>
          </div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 10 * s, fontSize: 6.5 * s }}>
            {[["+212%", "solar"], ["98%", "green"], ["0", "carbon"]].map((x) => (
              <span key={x[1]} style={{ background: p.surface, border: `1px solid ${p.accent}55`, borderRadius: 999, padding: `${3 * s}px ${8 * s}px` }}><b>{x[0]}</b> {x[1]}</span>
            ))}
          </div>
          <div style={{ marginTop: 8 * s, height: 6 * s, background: `${p.accent}22`, borderRadius: 999, overflow: "hidden" }}>
            <div style={{ width: "84%", height: "100%", background: `linear-gradient(90deg, ${p.accent2}, ${p.accent})` }} />
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.accent}44`, fontSize: 6 * s, color: p.muted }}>
          <span>🌱 rooftop · mesh · orchard</span><span>grid +84%</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
