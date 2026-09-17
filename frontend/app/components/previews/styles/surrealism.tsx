import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SurrealismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#EDE6D8 55%,#C9BFA9)", color: "#2B2620" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.25em", color: "#7A7468", zIndex: 2 }}>
          <span>GALERIE</span><span>SALLE Nº 3</span><span>1929</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="pv-float" style={{ width: large ? 90 : 54, height: large ? 64 : 38, background: "#F7F2E7", borderRadius: "50%", boxShadow: "0 24px 40px rgba(43,38,32,.3)", border: "1px solid #2B262055" }} />
          <div style={{ width: 2, height: 36 * s, background: "#2B262066" }} />
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: large ? 17 : 10 }}>“this is not a landing page.”</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 8 * s }}>
            <span style={{ background: "#2B2620", color: "#EDE6D8", fontSize: 6 * s, padding: `${4 * s}px ${12 * s}px`, borderRadius: 999 }}>Enter the dream →</span>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 5.5 * s, letterSpacing: "0.3em", color: "#7A7468", zIndex: 2, borderTop: "1px solid #2B262033" }}>
          <span>Nº 3 — THE FLOATING EGG</span><span>OIL · 1929</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
