import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FlatDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex flex-col" style={{ padding: `${10 * s}px` }}>
          <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, fontWeight: 700 }}>
            <span>■ FLATCO</span><span style={{ color: p.muted }}>Menu</span>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div style={{ background: p.accent, color: "#fff", fontSize: 6.5 * s, fontWeight: 700, padding: "3px 8px", width: "fit-content" }}>FLAT · 2D · HONEST</div>
            <div style={{ fontWeight: 700, fontSize: large ? 28 : 16, marginTop: 8 * s, lineHeight: 1.05 }}>Color does<br />the talking.</div>
            <div className="flex" style={{ gap: 6 * s, marginTop: 10 * s }}>
              <span style={{ background: p.ink, color: "#fff", padding: `${4 * s}px ${10 * s}px`, fontSize: 7 * s, fontWeight: 700 }}>Start</span>
              <span style={{ background: p.accent2, color: "#fff", padding: `${4 * s}px ${10 * s}px`, fontSize: 7 * s, fontWeight: 700 }}>Tour</span>
            </div>
          </div>
          <div style={{ fontSize: 6 * s, color: p.muted }}>no shadows were harmed →</div>
        </div>
        <div className="grid grid-rows-3">
          <div className="flex items-end" style={{ background: p.accent, padding: `${7 * s}px`, color: "#fff", fontSize: 7 * s, fontWeight: 700 }}>01 / Blue</div>
          <div className="flex items-end" style={{ background: p.accent2, padding: `${7 * s}px`, color: "#fff", fontSize: 7 * s, fontWeight: 700 }}>02 / Red</div>
          <div className="flex items-end" style={{ background: p.ink, padding: `${7 * s}px`, color: "#fff", fontSize: 7 * s, fontWeight: 700 }}>03 / Ink</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
