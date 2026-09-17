import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LiminalWeirdcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#E4E1D8,#CFCBC0)", color: "#2B2B2B" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontFamily: "monospace", fontSize: 6.5 * s, zIndex: 2 }}>
          <span>CAM 04 · HALLWAY B</span><span style={{ color: "#C81E1E" }}>● LIVE</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="absolute inset-x-0 top-[18%] flex justify-center opacity-40" style={{ gap: "8%" }}>
            {[0, 1, 2, 3].map((i) => <span key={i} style={{ width: 16 * s, height: 6 * s, background: "#FFFDE8", boxShadow: "0 0 12px #FFFDE8" }} />)}
          </div>
          <div style={{ background: "#111", color: "#fff", fontFamily: "monospace", fontSize: 6.5 * s, padding: `${5 * s}px ${12 * s}px`, zIndex: 2 }}>LEVEL 0 — THE LOBBY</div>
          <div style={{ fontFamily: "monospace", fontSize: 6 * s, marginTop: 8 * s, color: "#C81E1E", zIndex: 2 }}>EXIT →&nbsp;&nbsp;&nbsp;YOU ARE HERE ●</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s, zIndex: 2 }}>
            <span style={{ border: "1px solid #2B2B2B", fontFamily: "monospace", fontSize: 6 * s, padding: `${4 * s}px ${12 * s}px` }}>Noclip →</span>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontFamily: "monospace", fontSize: 6 * s, zIndex: 2, borderTop: "1px solid #2B2B2B33" }}>
          <span>poolrooms · level !</span><span>hum 60hz</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
