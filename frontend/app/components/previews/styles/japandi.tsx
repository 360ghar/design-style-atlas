import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function JapandiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ fontFamily: p.display, color: p.ink, fontSize: 8.5 * s }}>和北 WABI</span>
          <span className="flex" style={{ gap: 9 * s }}><span>Rooms</span><span>Craft</span><span>Journal</span></span>
          <span style={{ border: `1px solid ${p.accent}`, color: p.accent, borderRadius: 999, padding: `${2 * s}px ${8 * s}px` }}>Catalog</span>
        </div>
        <div className="relative flex flex-1 items-end overflow-hidden" style={{ padding: `0 ${12 * s}px ${8 * s}px` }}>
          <div style={{ position: "absolute", top: 0, bottom: "22%", left: "8%", right: "8%", backgroundImage: `linear-gradient(90deg, ${p.ink}22 1px, transparent 1px)`, backgroundSize: "25% 100%", opacity: 0.5 }} />
          <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "30%", height: large ? 90 : 54, background: "#C9B79C", borderRadius: "6px 6px 0 0" }} />
          <div style={{ position: "absolute", left: "14%", bottom: "30%", width: "10%", height: large ? 46 : 28, background: p.accent }} />
          <div className="relative flex w-full items-end justify-between">
            <div>
              <div style={{ fontFamily: p.display, fontSize: large ? 24 : 14, lineHeight: 1.1 }}>Low. Oak.<br />Still.</div>
              <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 4 * s, letterSpacing: "0.14em" }}>THE LOUNGE COLLECTION →</div>
            </div>
            <div style={{ width: 22 * s, height: 34 * s, background: p.accent2, borderRadius: "50% 50% 4px 4px" }} />
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6 * s, color: p.muted }}>
          <span>oiled oak · linen · stone</span><span>Kyoto — Stockholm</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
