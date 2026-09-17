import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AppleLiquidGlassPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: `linear-gradient(135deg, ${p.accent}22, ${p.accent2}1f), ${p.bg}`, color: p.ink, fontFamily: p.body }}>
        <div className="mx-auto flex" style={{ marginTop: `${10 * s}px`, gap: 8 * s, background: "#ffffffb8", backdropFilter: "blur(14px)", border: "1px solid #ffffff", borderRadius: 999, padding: `${4 * s}px ${10 * s}px`, fontSize: 6.5 * s, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <span>●</span><span>●</span><span>●</span><span style={{ color: p.muted }}>liquid chrome floats</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ fontFamily: p.display, fontWeight: 600, fontSize: large ? 30 : 17, letterSpacing: "-0.02em" }}>Content stays hero.</div>
          <div style={{ color: p.muted, fontSize: 7.5 * s, marginTop: 6 * s }}>Specular edges · calm spacing · refraction</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
            <span style={{ background: p.accent, color: "#fff", borderRadius: 999, padding: `${5 * s}px ${14 * s}px`, fontSize: 7 * s, fontWeight: 600 }}>Get started</span>
            <span style={{ background: "#ffffffb8", backdropFilter: "blur(14px)", border: "1px solid #ffffff", borderRadius: 999, padding: `${5 * s}px ${14 * s}px`, fontSize: 7 * s }}>Watch film</span>
          </div>
        </div>
        <div className="mx-auto flex" style={{ marginBottom: `${10 * s}px`, gap: 10 * s, background: "#ffffffb8", backdropFilter: "blur(14px)", border: "1px solid #ffffff", borderRadius: 999, padding: `${5 * s}px ${14 * s}px`, fontSize: 6.5 * s, color: p.muted, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <span>⌂</span><span>▦</span><span style={{ color: p.accent }}>●</span><span>✉</span><span>♪</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
