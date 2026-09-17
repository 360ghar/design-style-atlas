import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DreamcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#D8E4EE,#E8E4D8)", color: "#3B3830" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontFamily: "monospace", fontSize: 6.5 * s, color: "#3B3830", zIndex: 2 }}>
          <span>▶ PLAY</span><span>JULY &rsquo;03 · CAM 02</span><span style={{ color: "#B3541E" }}>● REC</span>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 60px rgba(59,56,48,.35)", backgroundImage: "radial-gradient(#ffffff20 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
          <div style={{ background: "#ffffffdd", padding: `${7 * s}px`, transform: "rotate(-1.5deg)", boxShadow: "0 8px 24px rgba(59,56,48,.25)", textAlign: "center", zIndex: 2 }}>
            <div style={{ background: "#5B8DD9", height: 48 * s, width: 92 * s, display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 30 : 18 }}>🏫</div>
            <div style={{ fontFamily: "monospace", fontSize: 6 * s, color: "#B3541E", marginTop: 4 * s }}>3:47 PM · do you remember?</div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontFamily: "monospace", fontSize: 6 * s, color: "#3B3830", zIndex: 2, borderTop: "1px solid #3B383033" }}>
          <span>liminal archive · vol. 7</span><span>⏪ ◀ ▶ ⏩</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
