import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function OrganicBiophilicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 22 : 12;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, fontFamily: p.body, color: p.ink }}>
        {/* leaf nav */}
        <div className="flex items-center justify-between" style={{ padding: `${large ? 12 : 7}px ${pad}px`, borderBottom: `1px solid ${p.muted}33` }}>
          <div className="flex items-center" style={{ gap: large ? 7 : 4 }}>
            <span style={{ width: large ? 18 : 11, height: large ? 18 : 11, background: p.accent, borderRadius: "0 70% 0 70%", display: "block" }} />
            <span style={{ fontFamily: p.display, fontWeight: 600, fontSize: large ? 13 : 8 }}>Fern & Field</span>
          </div>
          <div className="flex items-center" style={{ gap: large ? 12 : 7, color: p.muted, fontSize: large ? 9 : 6 }}>
            <span className="hidden @sm:inline">Grove</span>
            <span className="hidden @sm:inline">Rooms</span>
            <span style={{ background: p.accent, color: p.surface, borderRadius: 999, padding: large ? "5px 12px" : "3px 8px", fontWeight: 600 }}>Visit</span>
          </div>
        </div>
        {/* earthy hero with arches */}
        <div className="grid flex-1 grid-cols-1 @md:grid-cols-[1.1fr_0.9fr]" style={{ gap: large ? 14 : 8, padding: `${large ? 16 : 9}px ${pad}px` }}>
          <div className="flex flex-col justify-center">
            <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.22em", fontWeight: 700, color: p.accent }}>GROW SLOW · EST. GROVE</div>
            <div style={{ fontFamily: p.display, fontWeight: 500, lineHeight: 1.05, fontSize: large ? 30 : 16, marginTop: large ? 8 : 4 }}>
              Rooms that<br />breathe<span style={{ color: p.accent2 }}>.</span>
            </div>
            <p style={{ color: p.muted, fontSize: large ? 10.5 : 6.5, lineHeight: 1.5, marginTop: large ? 8 : 4 }}>Arched light, moss keylines, and space to grow.</p>
            <div className="flex flex-wrap" style={{ gap: large ? 8 : 5, marginTop: large ? 12 : 7 }}>
              <span style={{ background: p.accent, color: p.surface, borderRadius: "4px 16px 4px 16px", padding: large ? "8px 16px" : "5px 10px", fontSize: large ? 9.5 : 6, fontWeight: 600 }}>Enter the grove →</span>
              <span style={{ border: `1.5px solid ${p.accent}`, color: p.accent, borderRadius: "4px 16px 4px 16px", padding: large ? "8px 16px" : "5px 10px", fontSize: large ? 9.5 : 6, fontWeight: 600 }}>Sun rooms</span>
            </div>
          </div>
          <div className="hidden @md:flex items-end justify-center" style={{ gap: large ? 8 : 5 }}>
            <div style={{ width: "46%", height: "100%", background: p.accent, borderRadius: `${large ? 60 : 36}px ${large ? 60 : 36}px 10px 10px`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 30%, ${p.ink}55)` }} />
              <div style={{ position: "absolute", bottom: large ? 10 : 6, left: large ? 10 : 6, right: large ? 10 : 6, background: p.surface, borderRadius: "4px 14px 4px 14px", padding: large ? 7 : 4 }}>
                <div style={{ fontSize: large ? 7 : 4.5, letterSpacing: "0.14em", fontWeight: 700, color: p.accent }}>SUN GLADE</div>
                <div style={{ fontFamily: p.display, fontSize: large ? 10 : 6 }}>Morning light</div>
              </div>
            </div>
            <div className="flex flex-col" style={{ gap: large ? 8 : 5, width: "34%", height: "100%" }}>
              <div style={{ flex: 1.2, background: p.surface, border: `1px solid ${p.muted}44`, borderRadius: "4px 18px 4px 18px", padding: large ? 8 : 5 }}>
                <div style={{ width: large ? 20 : 12, height: large ? 20 : 12, background: p.accent2, opacity: 0.85, borderRadius: "0 70% 0 70%" }} />
                <div style={{ fontFamily: p.display, fontSize: large ? 10 : 6, marginTop: 4 }}>Clay & moss</div>
                <div style={{ color: p.muted, fontSize: large ? 8 : 5 }}>Earth palette</div>
              </div>
              <div style={{ flex: 0.8, background: p.ink, borderRadius: "4px 18px 4px 18px", padding: large ? 8 : 5 }}>
                <div style={{ color: p.surface, fontFamily: p.display, fontSize: large ? 12 : 7 }}>96–130</div>
                <div style={{ color: p.surface, opacity: 0.7, fontSize: large ? 7.5 : 4.5 }}>px of air per room</div>
              </div>
            </div>
          </div>
        </div>
        {/* stat footer */}
        <div className="flex flex-wrap items-center justify-between gap-2" style={{ margin: `0 ${pad}px ${large ? 12 : 7}px`, background: p.surface, border: `1px solid ${p.muted}44`, borderRadius: "4px 18px 4px 18px", padding: `${large ? 9 : 5}px ${large ? 14 : 8}px` }}>
          {[
            ["12k", "plants rooted"],
            ["98%", "daylight rooms"],
            ["4.9", "guest calm ★"],
          ].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: p.display, fontWeight: 600, fontSize: large ? 13 : 8 }}>{v}</div>
              <div style={{ color: p.muted, fontSize: large ? 8 : 5 }}>{l}</div>
            </div>
          ))}
          <span style={{ background: p.bg, border: `1px solid ${p.muted}44`, borderRadius: 999, padding: large ? "5px 12px" : "3px 8px", fontSize: large ? 8.5 : 5.5, fontWeight: 600, color: p.accent }}>◍ dappled light</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
