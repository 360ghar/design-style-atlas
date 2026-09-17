import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PlayfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ padding: large ? "24px 48px" : "14px 26px", background: p.bg, backgroundImage: `radial-gradient(${p.accent}55 1.6px, transparent 1.7px), radial-gradient(${p.accent2}55 1.6px, transparent 1.7px)`, backgroundSize: "22px 22px, 36px 36px", backgroundPosition: "0 0, 10px 12px" }}>
        <div style={{ position: "relative", background: p.surface, border: `3px solid ${p.ink}`, borderRadius: 20, boxShadow: `5px 5px 0 ${p.ink}`, padding: large ? "20px 22px 18px" : "12px 13px 11px", maxWidth: large ? 400 : 230, transform: "rotate(-1.5deg)" }}>
          <span style={{ position: "absolute", top: large ? -14 : -10, right: large ? 18 : 12, background: p.accent2, color: p.surface, border: `3px solid ${p.ink}`, borderRadius: 999, padding: large ? "4px 14px" : "2px 9px", fontFamily: p.display, fontSize: large ? 10 : 6.5, fontWeight: 800, letterSpacing: "0.06em", transform: "rotate(5deg)", boxShadow: `3px 3px 0 ${p.ink}` }}>★ STICKER</span>
          <span style={{ position: "absolute", bottom: large ? -13 : -9, left: large ? -14 : -10, background: p.accent, color: p.surface, border: `3px solid ${p.ink}`, borderRadius: "50%", width: large ? 34 : 22, height: large ? 34 : 22, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 16 : 10, transform: "rotate(-8deg)", boxShadow: `3px 3px 0 ${p.ink}` }}>✿</span>
          <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 27 : 16, lineHeight: 1.02, letterSpacing: "-0.01em", color: p.ink }}>Squishy but<br /><span style={{ color: p.accent, textDecoration: "underline wavy", textDecorationThickness: 3, textUnderlineOffset: 4 }}>sturdy!</span></div>
          <div style={{ color: p.muted, fontSize: large ? 10.5 : 7, marginTop: large ? 8 : 5, fontWeight: 600 }}>Plush frames, candy fills, ink outlines.</div>
          <div className="flex items-center gap-2" style={{ marginTop: large ? 12 : 8 }}>
            <span style={{ background: p.accent, color: p.surface, border: `3px solid ${p.ink}`, borderRadius: 999, padding: large ? "7px 20px" : "4px 12px", fontFamily: p.display, fontSize: large ? 10.5 : 7, fontWeight: 800, letterSpacing: "0.05em", boxShadow: `4px 4px 0 ${p.ink}` }}>BOING →</span>
            <span className="pv-float" style={{ background: p.accent2, color: p.surface, border: `3px solid ${p.ink}`, borderRadius: "50%", width: large ? 34 : 21, height: large ? 34 : 21, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 15 : 9, boxShadow: `4px 4px 0 ${p.ink}` }}>◍</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
