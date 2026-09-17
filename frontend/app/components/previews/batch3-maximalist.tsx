import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 3 — Maximalist family (10). Layered abundance, bold collisions. */
export function MaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden px-[8%] text-center" style={{ background: "linear-gradient(140deg, #1E1B2E, #4A1140 60%, #7A1E2B)" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(#FFD802 1.2px, transparent 1.2px)", backgroundSize: "14px 14px" }} />
        <div style={{ border: `2px solid ${p.accent2}`, padding: large ? "14px 26px" : "8px 15px", position: "relative" }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17 }}>More is more</div>
          <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.3em", color: p.accent2 }}>VELVET · DAMASK · GOLD</div>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 10, position: "relative" }}>
          <span style={{ background: p.accent, fontSize: large ? 9 : 6.5, padding: "5px 14px", borderRadius: 999, fontWeight: 700 }}>Enter ↓</span>
          <span style={{ border: "1px solid #ffffff88", fontSize: large ? 9 : 6.5, padding: "5px 14px", borderRadius: 999 }}>Lookbook</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PlayfulMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(160deg, #FFF3E4, #FFE0EE 55%, #D8F4FF)" }}>
        {["🎉", "★", "◍", "✿"].map((e, i) => (
          <span key={i} className="pv-float" style={{ position: "absolute", left: `${8 + i * 24}%`, top: `${12 + (i % 2) * 60}%`, fontSize: large ? 20 : 12, animationDelay: `${i * 0.7}s` }}>{e}</span>
        ))}
        <div style={{ background: "#fff", border: "3px solid #232323", borderRadius: 24, boxShadow: "6px 6px 0 #232323", padding: large ? "14px 30px" : "8px 17px", transform: "rotate(-2deg)", textAlign: "center" }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15, color: p.accent }}>PARTY MODE: ON</div>
          <div style={{ fontSize: large ? 10 : 7 }}>confetti · stickers · zero chill</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EditorialMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-5">
        <div className="col-span-3 flex flex-col justify-center p-[7%]">
          <div style={{ color: p.accent, fontWeight: 800, fontSize: large ? 9 : 6.5, letterSpacing: "0.2em" }}>ISSUE 42 — COVER STORY</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, lineHeight: 1.02 }}>The New<br /><i>Maximalists</i></div>
          <div style={{ borderTop: "2px solid #141414", marginTop: 8, paddingTop: 6, fontSize: large ? 9 : 6.5, color: p.muted }}>Photography · Essays · 148 pages →</div>
        </div>
        <div className="col-span-2 flex flex-col justify-end p-[6%]" style={{ background: p.accent }}>
          <div style={{ border: "2px solid #fff", padding: 8, transform: "rotate(2deg)", background: "#141414", color: "#fff", fontSize: large ? 9 : 6.5 }}>“Print never died. It multiplied.”</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PsychedelicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center" style={{ background: "conic-gradient(from 40deg, #2B0A4A, #FF4FD8, #5B2EE5, #00E5CC, #2B0A4A)" }}>
        <div className="absolute inset-0 opacity-30" style={{ background: "repeating-radial-gradient(circle at 50% 120%, transparent 0 18px, #ffffff33 18px 19px)" }} />
        <div className="pv-drift" style={{ fontFamily: "Shrikhand, cursive", fontSize: large ? 34 : 19, color: "#fff", textShadow: "0 0 24px #FF4FD8, 3px 3px 0 #2B0A4A", transform: "rotate(-3deg)" }}>cosmic<br />voyage</div>
        <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.35em", color: "#fff", marginTop: 6 }}>✿ 1967 → ∞ ✿</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function TypographyMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center overflow-hidden px-[6%]" style={{ background: "#0F0F0F" }}>
        <div style={{ fontFamily: p.display, fontWeight: 900, fontSize: large ? 44 : 24, lineHeight: 0.92, color: "#F4F1EA" }}>TYPE IS<br /><span className="pv-outline-text" style={{ color: "#F4F1EA" }}>THE IMAGE</span></div>
        <div className="overflow-hidden whitespace-nowrap" style={{ borderTop: `1px solid ${p.accent}`, borderBottom: `1px solid ${p.accent}`, marginTop: 8, padding: "4px 0" }}>
          <div className="pv-marquee-fast" style={{ display: "inline-block", whiteSpace: "nowrap", color: p.accent, fontSize: large ? 10 : 7, fontWeight: 800 }}>KERN · TRACK · LEAD · KERN · TRACK · LEAD · KERN · TRACK · LEAD ·&nbsp;</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ColorMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center" style={{ background: "#FFD802" }}>
          <span style={{ fontFamily: p.display, fontSize: large ? 30 : 17, transform: "rotate(-2deg)" }}>TASTE THE</span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3" style={{ background: "#FF2E88" }}>
          {["#2B4EFF", "#00C2FF", "#fff"].map((c) => (
            <span key={c} style={{ background: c, border: "3px solid #161616", borderRadius: 14, width: large ? 54 : 32, height: large ? 54 : 32, boxShadow: "4px 4px 0 #161616" }} />
          ))}
          <span style={{ fontFamily: p.display, color: "#fff", fontSize: large ? 30 : 17 }}>RAINBOW</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function DigitalMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden p-[5%]" style={{ background: "linear-gradient(150deg, #0B0B18, #2B0A4A 55%, #FF4FD822)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #ffffff44", borderRadius: 999, padding: large ? "6px 14px" : "4px 9px", background: "#ffffff14", backdropFilter: "blur(6px)", fontSize: large ? 9 : 6.5 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00E5FF" }} /> net.player — now vibing ♪
        </div>
        <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17, marginTop: 8 }}>online<br /><span className="pv-chrome-text">4ever</span> ★</div>
        <div className="absolute bottom-[8%] right-[6%] flex gap-2">
          {["💿", "✉", "★"].map((e, i) => (
            <span key={i} className="pv-float" style={{ background: "#ffffffee", borderRadius: 12, padding: large ? 8 : 5, fontSize: large ? 14 : 9, animationDelay: `${i * 0.6}s` }}>{e}</span>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ChaosDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center justify-center overflow-hidden p-[6%]">
        <div style={{ position: "absolute", left: "6%", top: "12%", transform: "rotate(-3deg)", background: "#fff", border: "2.5px solid #141414", boxShadow: "4px 4px 0 #141414", padding: large ? 10 : 6, fontFamily: p.display, fontSize: large ? 20 : 12 }}>DROP 07</div>
        <div style={{ position: "absolute", right: "8%", top: "30%", transform: "rotate(3deg)", background: p.accent, color: "#fff", border: "2.5px solid #141414", padding: large ? "8px 14px" : "5px 9px", fontWeight: 800, fontSize: large ? 11 : 7 }}>SALE ends?!?</div>
        <div style={{ background: "#1E40FF", color: "#fff", border: "2.5px solid #141414", boxShadow: "5px 5px 0 #141414", padding: large ? "10px 22px" : "6px 13px", fontWeight: 800, fontSize: large ? 13 : 8, transform: "rotate(-1deg)", zIndex: 2 }}>SHOP THE MESS →</div>
        <div style={{ position: "absolute", bottom: "10%", left: "12%", background: "#FFD802", height: large ? 16 : 10, width: "45%", transform: "rotate(-2deg)", zIndex: 1 }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function LuxuryMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[10%] text-center" style={{ background: "radial-gradient(circle at 50% 20%, #2A1E10, #100C08 70%)" }}>
        <div style={{ border: `1px solid ${p.accent}`, outline: `1px solid ${p.accent}55`, outlineOffset: 4, padding: large ? "14px 30px" : "8px 18px" }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16, color: "#EFE3C8" }}>Maison Doré</div>
          <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.4em", color: p.accent }}>❦ EST · MDCCCLXXV ❦</div>
        </div>
        <div style={{ fontSize: large ? 9 : 6.5, fontStyle: "italic", color: p.muted, marginTop: 8 }}>velvet · lacquer · candlelight</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GraphicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]">
        <div className="absolute -right-8 -top-8 pv-spin-slow" style={{ width: large ? 130 : 80, height: large ? 130 : 80, borderRadius: "50%", background: "conic-gradient(#E30613 0 12%, transparent 12% 25%, #E30613 25% 37%, transparent 37% 50%, #E30613 50% 62%, transparent 62% 75%, #E30613 75% 87%, transparent 87%)", opacity: 0.9 }} />
        <div style={{ background: "#101010", color: "#fff", display: "inline-block", width: "fit-content", fontSize: large ? 8 : 5.5, letterSpacing: "0.2em", padding: "4px 10px" }}>LIVE · AUG 24</div>
        <div style={{ fontFamily: p.display, fontSize: large ? 38 : 21, lineHeight: 0.95, marginTop: 6 }}>NOISE<br />FEST <span style={{ color: p.accent }}>’26</span></div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <span style={{ background: p.accent, color: "#fff", fontSize: large ? 9 : 6.5, fontWeight: 800, padding: large ? "7px 18px" : "4px 11px" }}>TICKETS</span>
          <span style={{ border: "2px solid #101010", fontSize: large ? 9 : 6.5, fontWeight: 800, padding: large ? "6px 16px" : "3px 10px" }}>LINEUP</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
