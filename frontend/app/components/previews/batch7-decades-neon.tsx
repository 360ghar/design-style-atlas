import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 7 — Decades + Neon & Play + Heritage + Experimental (20). */
export function SeventiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center overflow-hidden px-[8%] text-center">
        <svg viewBox="0 0 200 44" style={{ width: large ? 260 : 150 }}><g fill="none" strokeWidth="9">{["#B33A2B", "#D96C2B", "#D9A441", "#7A8450", "#8A4A2B"].map((c, i) => <path key={c} d={`M${10 + i * 6} 44 A ${80 - i * 6} ${80 - i * 6} 0 0 1 ${190 - i * 6} 44`} stroke={c} />)}</g></svg>
        <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, color: "#5B3A1E", marginTop: -6 }}>groovy, baby</div>
        <div style={{ fontSize: large ? 9 : 6, letterSpacing: "0.25em", color: p.muted }}>ORANGE · GOLD · AVOCADO ✿</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EightiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#0D0221 30%,#3B0A5E 65%,#FF2E88 130%)" }}>
        <div style={{ width: large ? 130 : 78, height: large ? 130 : 78, borderRadius: "50%", background: "linear-gradient(180deg,#FFD319,#FF2E88 70%)", position: "relative", overflow: "hidden", boxShadow: "0 0 40px #FF2E88" }}>
          {[0, 1, 2].map((i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, bottom: 6 + i * 10, height: 3 + i, background: "#0D0221" }} />)}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[30%]" style={{ backgroundImage: "linear-gradient(#00E5FF55 1px, transparent 1px), linear-gradient(90deg, #00E5FF55 1px, transparent 1px)", backgroundSize: "26px 14px", transform: "perspective(220px) rotateX(60deg)", transformOrigin: "bottom" }} />
        <div style={{ fontFamily: "Monoton, cursive", fontSize: large ? 22 : 13, color: "#fff", textShadow: "0 0 18px #00E5FF", marginTop: 6 }}>midnight drive</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function NinetiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">
        <div style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: `conic-gradient(${p.accent} 25%, transparent 25% 50%, ${p.accent2} 50% 75%, transparent 75%)`, backgroundSize: "26px 26px" }} />
        <div style={{ position: "relative", background: "#fff", border: "3px solid #222", boxShadow: "5px 5px 0 #222", padding: large ? "12px 26px" : "7px 15px", transform: "rotate(-2deg)", textAlign: "center" }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15 }}>AS IF!</div>
          <svg viewBox="0 0 120 10" style={{ width: "100%", marginTop: 2 }}><path d="M2 6 L14 3 L26 7 L38 3 L50 7 L62 3 L74 7 L86 3 L98 7 L110 3 L118 6" fill="none" stroke={p.accent2} strokeWidth="3" /></svg>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function VaporwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center" style={{ background: `linear-gradient(180deg,${p.bg} 20%,#5B2EE5 60%,#FF71CE 90%)` }}>
        <div style={{ fontFamily: p.display, fontSize: large ? 44 : 26, color: "#F5EDFF", textShadow: `3px 3px 0 ${p.accent2}` }}>ＡＥＳＴＨＥＴＩＣ</div>
        <div style={{ fontSize: large ? 9 : 6, letterSpacing: "0.3em", color: "#F5EDFF" }}>フロリダ · 1991 · mallwave</div>
        <div className="absolute inset-x-0 bottom-0 h-[34%]" style={{ backgroundImage: `linear-gradient(${p.accent2}66 1px, transparent 1px), linear-gradient(90deg,${p.accent2}66 1px, transparent 1px)`, backgroundSize: "24px 12px", transform: "perspective(200px) rotateX(62deg)", transformOrigin: "bottom" }} />
        <div style={{ position: "absolute", top: "12%", fontSize: large ? 30 : 18 }}>🗿</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SynthwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#0A0118 40%,#4A0E2E 80%,#FF2E88 140%)" }}>
        <div className="pv-flicker" style={{ width: large ? 120 : 72, height: large ? 120 : 72, borderRadius: "50%", background: "linear-gradient(180deg,#FFD319 30%,#FF2E88 75%)", boxShadow: "0 0 50px #FF2E88", overflow: "hidden", position: "relative" }}>
          {[0, 1, 2, 3].map((i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, bottom: 4 + i * 9, height: 2 + i * 1.4, background: "#0A0118" }} />)}
        </div>
        <div style={{ fontFamily: "Orbitron, monospace", fontSize: large ? 16 : 10, letterSpacing: "0.35em", color: "#fff", marginTop: 8, textShadow: "0 0 14px #FF2E88" }}>NIGHT DRIVE</div>
        <div className="absolute inset-x-0 bottom-0 h-[26%]" style={{ backgroundImage: "linear-gradient(#FFD31944 1px, transparent 1px), linear-gradient(90deg,#FFD31944 1px, transparent 1px)", backgroundSize: "30px 12px", transform: "perspective(200px) rotateX(60deg)", transformOrigin: "bottom" }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function Pixel8BitPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[8%]" style={{ fontFamily: "'Press Start 2P', monospace", backgroundImage: "repeating-linear-gradient(0deg, transparent 0 3px, #00000055 3px 4px)" }}>
        <div style={{ fontSize: large ? 16 : 10, color: "#fff" }}>READY PLAYER 1</div>
        <div style={{ fontSize: large ? 9 : 6, color: p.accent, marginTop: 8 }}>- PRESS START -</div>
        <div className="pv-blink" style={{ fontSize: large ? 12 : 8, color: "#FFD802", marginTop: 6 }}>▼ INSERT COIN ▼</div>
        <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
          {["#FF003C", "#FFD802", "#7DF9FF", "#7CFF6B"].map((c) => <span key={c} style={{ width: large ? 16 : 10, height: large ? 16 : 10, background: c, boxShadow: "2px 2px 0 #000" }} />)}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GamingUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[5%]" style={{ fontFamily: p.display }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: large ? 34 : 22, height: large ? 34 : 22, borderRadius: "50%", border: `3px solid ${p.accent2}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 10 : 6.5, fontWeight: 800 }}>42</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 8 : 5.5, color: p.muted }}><span>XP — LVL 42</span><span>8,210 / 10,000</span></div>
            <div style={{ background: "#222", height: large ? 10 : 6, clipPath: "polygon(0 0,100% 0,98% 100%,0 100%)" }}><div style={{ width: "82%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} /></div>
          </div>
          <span style={{ fontSize: large ? 9 : 6, color: p.accent2, fontWeight: 800 }}>◆ 1,240</span>
        </div>
        <div className="grid grid-cols-3 gap-2" style={{ marginTop: 8 }}>
          {[["DAILY", "common", "#8A8F98"], ["STREAK ×7", "rare", p.accent], ["BOSS DOWN", "LEGENDARY", p.accent2]].map((q) => (
            <div key={q[0]} style={{ border: `2px solid ${q[2]}`, padding: large ? 8 : 5, background: "#12161F", clipPath: "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)" }}>
              <div style={{ fontSize: large ? 7 : 4.5, color: q[2], letterSpacing: "0.15em" }}>{q[1]}</div>
              <div style={{ fontWeight: 800, fontSize: large ? 10 : 6.5 }}>{q[0]}</div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ComicPopArtPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative grid h-full grid-cols-2 gap-2 p-[5%]" style={{ backgroundImage: "radial-gradient(#141414 1.2px, transparent 1.2px)", backgroundSize: "10px 10px" }}>
        <div style={{ background: "#fff", border: "3px solid #141414", padding: large ? 10 : 6, boxShadow: "4px 4px 0 #141414" }}>
          <div style={{ background: "#FFD802", border: "2px solid #141414", fontSize: large ? 8 : 5.5, fontWeight: 800, padding: "2px 6px", width: "fit-content" }}>MEANWHILE…</div>
          <div style={{ fontFamily: "Bangers, cursive", fontSize: large ? 22 : 13, marginTop: 4 }}>ORIGIN STORY!</div>
        </div>
        <div style={{ background: "#E30613", border: "3px solid #141414", padding: large ? 10 : 6, color: "#fff", boxShadow: "4px 4px 0 #141414" }}>
          <div style={{ fontFamily: "Bangers, cursive", fontSize: large ? 22 : 13 }}>KRAKOOM!</div>
          <div style={{ fontSize: large ? 9 : 6 }}>Zero to hero in one scroll. →</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GraffitiStreetwearPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]" style={{ background: "linear-gradient(160deg,#1A1A1A,#111 70%), repeating-linear-gradient(0deg, transparent 0 26px, #ffffff08 26px 27px)" }}>
        <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: large ? 36 : 21, color: "#fff", transform: "rotate(-3deg)", textShadow: `3px 3px 0 ${p.accent2}` }}>fresh wall</div>
        <div style={{ display: "inline-flex", gap: 6, marginTop: 8 }}>
          <span style={{ background: p.accent, color: "#111", fontWeight: 800, fontSize: large ? 10 : 6.5, padding: large ? "7px 18px" : "4px 11px", transform: "rotate(-1deg)" }}>SHOP DROP 07</span>
          <span style={{ border: "1px solid #ffffff55", color: "#fff", fontSize: large ? 10 : 6.5, padding: large ? "7px 14px" : "4px 9px", fontFamily: "monospace" }}>⏱ 02:14:55</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function QuietLuxuryPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[12%] text-center">
        <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: large ? 30 : 17 }}>Cashmere, cut close.</div>
        <div style={{ fontSize: large ? 10 : 6.5, color: p.muted, marginTop: 6, maxWidth: large ? 380 : 220 }}>If you know, you know. Private appointments, autumn–winter.</div>
        <div style={{ background: "#2B2926", color: "#F7F5F0", fontSize: large ? 9 : 6, letterSpacing: "0.25em", padding: large ? "10px 30px" : "6px 17px", marginTop: 12 }}>ENQUIRE</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SurrealismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#EDE6D8 55%,#C9BFA9)" }}>
        <div className="pv-float" style={{ width: large ? 90 : 54, height: large ? 64 : 38, background: "#F7F2E7", borderRadius: "50%", boxShadow: "0 24px 40px rgba(43,38,32,.3)", border: "1px solid #2B262055" }} />
        <div style={{ width: 2, height: large ? 60 : 36, background: "#2B262066" }} />
        <div style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: large ? 16 : 10 }}>“this is not a landing page.”</div>
        <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", color: "#7A7468" }}>Nº 3 — THE FLOATING EGG</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function DreamcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#D8E4EE,#E8E4D8)" }}>
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 60px rgba(59,56,48,.35)", backgroundImage: "radial-gradient(#ffffff20 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
        <div style={{ background: "#ffffffdd", padding: large ? 10 : 6, transform: "rotate(-1.5deg)", boxShadow: "0 8px 24px rgba(59,56,48,.25)", textAlign: "center" }}>
          <div style={{ background: "#5B8DD9", height: large ? 80 : 48, width: large ? 150 : 92, display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 30 : 18 }}>🏫</div>
          <div style={{ fontFamily: "monospace", fontSize: large ? 9 : 6, color: "#B3541E", marginTop: 4 }}>JULY &rsquo;03 · 3:47 PM · do you remember?</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function LiminalWeirdcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#E4E1D8,#CFCBC0)" }}>
        <div className="absolute inset-x-0 top-[30%] flex justify-center gap-[8%] opacity-40">
          {[0, 1, 2, 3].map((i) => <span key={i} style={{ width: large ? 26 : 16, height: large ? 10 : 6, background: "#FFFDE8", boxShadow: "0 0 12px #FFFDE8" }} />)}
        </div>
        <div style={{ background: "#111", color: "#fff", fontFamily: "monospace", fontSize: large ? 10 : 6.5, padding: large ? "8px 18px" : "5px 11px" }}>LEVEL 0 — THE LOBBY</div>
        <div style={{ fontFamily: "monospace", fontSize: large ? 9 : 6, marginTop: 8, color: "#C81E1E" }}>EXIT →&nbsp;&nbsp;&nbsp;YOU ARE HERE ●</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GenerativeAlgorithmicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden p-[5%] font-mono" style={{ fontSize: large ? 9 : 6 }}>
        <svg viewBox="0 0 200 90" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M-5 ${10 + i * 9} Q 60 ${i * 7}, 110 ${12 + i * 8} T 210 ${8 + i * 9}`} fill="none" stroke={i % 3 ? p.accent : p.accent2} strokeWidth="1.4" opacity="0.8" />
          ))}
        </svg>
        <div style={{ position: "relative", display: "flex", gap: 6 }}>
          <span style={{ border: "1px solid #ffffff33", borderRadius: 6, padding: large ? "4px 10px" : "3px 8px", background: "#00000088" }}>SEED #4821 ⧉</span>
          <span style={{ background: p.accent, color: p.bg, borderRadius: 6, padding: large ? "4px 10px" : "3px 8px", fontWeight: 700 }}>⟳ REGENERATE</span>
        </div>
        <div style={{ position: "absolute", bottom: "6%", left: "5%", color: p.muted }}>flow_field · 900 pts · 60fps</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
