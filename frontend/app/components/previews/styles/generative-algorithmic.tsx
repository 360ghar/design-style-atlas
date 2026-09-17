import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GenerativeAlgorithmicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden font-mono" style={{ background: p.bg, color: p.ink, fontSize: 6 * s }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${10 * s}px`, zIndex: 2 }}>
          <span style={{ fontWeight: 700 }}>FIELD.SYS</span>
          <span style={{ color: p.muted }}>900 pts · 60fps</span>
          <span style={{ border: `1px solid ${p.ink}44`, borderRadius: 6, padding: `${2 * s}px ${8 * s}px` }}>⧉ EXPORT</span>
        </div>
        <div className="relative flex-1">
          <svg viewBox="0 0 200 90" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M-5 ${10 + i * 9} Q 60 ${i * 7}, 110 ${12 + i * 8} T 210 ${8 + i * 9}`} fill="none" stroke={i % 3 ? p.accent : p.accent2} strokeWidth="1.4" opacity="0.8" />
            ))}
          </svg>
          <div className="flex" style={{ position: "relative", gap: 6 * s, padding: `${6 * s}px ${10 * s}px` }}>
            <span style={{ border: "1px solid #ffffff33", borderRadius: 6, padding: `${3 * s}px ${8 * s}px`, background: "#00000088" }}>SEED #4821 ⧉</span>
            <span style={{ background: p.accent, color: p.bg, borderRadius: 6, padding: `${3 * s}px ${8 * s}px`, fontWeight: 700 }}>⟳ REGENERATE</span>
          </div>
        </div>
        <div style={{ padding: `${6 * s}px ${10 * s}px`, borderTop: `1px solid ${p.ink}22`, color: p.muted, zIndex: 2 }}>
          <div className="flex" style={{ gap: 10 * s }}>
            <span>noise ──●── 0.62</span><span>chaos ──●── 0.31</span><span>flow 900</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
