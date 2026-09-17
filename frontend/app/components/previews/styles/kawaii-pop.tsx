import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function KawaiiPopPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, backgroundImage: `radial-gradient(${p.accent}33 2px, transparent 2.5px)`, backgroundSize: "20px 20px" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, fontWeight: 800 }}>
          <span>🎀 harajuku!</span><span>plush · stickers</span><span>🧺 (3)</span>
        </div>
        <div className="flex flex-1 items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ background: p.surface, border: `3px solid ${p.ink}`, borderRadius: 24, boxShadow: `4px 4px 0 ${p.accent}`, padding: `${11 * s}px ${14 * s}px`, textAlign: "center", transform: "rotate(-2deg)" }}>
            <div style={{ fontSize: large ? 14 : 9 }}>🌸 🎀 🧁</div>
            <div style={{ fontWeight: 800, fontSize: large ? 26 : 15, marginTop: 4 * s }}>cute overload!</div>
            <div style={{ background: p.accent, color: "#fff", borderRadius: 999, fontWeight: 800, fontSize: 7 * s, padding: `${4 * s}px ${12 * s}px`, marginTop: 8 * s }}>★ KAWAII →</div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ paddingBottom: `${8 * s}px`, gap: 6 * s, fontSize: 6.5 * s, fontWeight: 800 }}>
          <span style={{ background: p.accent2, border: `2px solid ${p.ink}`, borderRadius: 999, padding: `${3 * s}px ${10 * s}px` }}>✿ new</span>
          <span style={{ background: "#fff", border: `2px solid ${p.ink}`, borderRadius: 999, padding: `${3 * s}px ${10 * s}px` }}>♡ faves</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
