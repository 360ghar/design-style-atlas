import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 5 — Soft & Dimensional + Product & SaaS + Atmosphere (20). */
export function GlassmorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "linear-gradient(130deg, #FF6B9D, #6C5CE7 50%, #00E5FF)" }}>
        <div className="pv-drift" style={{ position: "absolute", left: "8%", top: "12%", width: large ? 120 : 70, height: large ? 120 : 70, borderRadius: "50%", background: "#FFD802aa", filter: "blur(2px)" }} />
        <div style={{ position: "absolute", right: "6%", bottom: "8%", width: large ? 150 : 90, height: large ? 150 : 90, borderRadius: "50%", background: "#00E5FF88", filter: "blur(2px)" }} />
        <div style={{ position: "relative", background: "rgba(255,255,255,.18)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.4)", borderRadius: 20, padding: large ? "16px 26px" : "9px 15px", boxShadow: "0 12px 40px rgba(0,0,0,.2)", color: "#fff", width: large ? "62%" : "68%" }}>
          <div style={{ fontSize: large ? 9 : 6.5, opacity: 0.85 }}>◍ Balance — June</div>
          <div style={{ fontSize: large ? 28 : 16, fontWeight: 700 }}>$12,480.22</div>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            <span style={{ background: "#fff", color: "#6C5CE7", borderRadius: 999, fontSize: large ? 9 : 6, fontWeight: 700, padding: "4px 12px" }}>Send</span>
            <span style={{ border: "1px solid #ffffff88", borderRadius: 999, fontSize: large ? 9 : 6, padding: "4px 12px" }}>Request</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function NeumorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const sh = "6px 6px 12px #B8BCC4, -6px -6px 12px #FFFFFF";
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center gap-[6%] px-[8%]">
        <div style={{ background: "#E0E5EC", borderRadius: "50%", width: large ? 110 : 64, height: large ? 110 : 64, boxShadow: sh, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ background: "#E0E5EC", borderRadius: "50%", width: large ? 64 : 38, height: large ? 64 : 38, boxShadow: "inset 4px 4px 8px #B8BCC4, inset -4px -4px 8px #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 20 : 12, color: "#4D7CFE" }}>▶</span>
        </div>
        <div>
          <div style={{ fontSize: large ? 9 : 6.5, color: "#8A94A6", letterSpacing: "0.2em" }}>NOW PLAYING</div>
          <div style={{ fontWeight: 700, fontSize: large ? 16 : 10, color: "#4A5568" }}>Soft Circuitry</div>
          <div className="flex gap-2" style={{ marginTop: 8 }}>
            {["⏮", "⏸", "⏭"].map((b, i) => (
              <span key={b} style={{ background: "#E0E5EC", borderRadius: "50%", width: large ? 34 : 22, height: large ? 34 : 22, boxShadow: i === 1 ? "inset 3px 3px 6px #B8BCC4, inset -3px -3px 6px #fff" : sh, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 12 : 8, color: i === 1 ? "#4D7CFE" : "#4A5568" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ClaymorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center gap-[5%] px-[7%]">
        {[p.accent, p.accent2, "#FF8FB1"].map((c, i) => (
          <div key={c} className={i === 1 ? "pv-float" : undefined} style={{ background: c, borderRadius: large ? 28 : 18, padding: large ? 14 : 8, width: large ? "30%" : "31%", textAlign: "center", color: "#fff", boxShadow: "inset 2px 2px 4px rgba(255,255,255,.7), inset -3px -3px 8px rgba(0,0,0,.15), 8px 8px 16px rgba(255,107,157,.3)" }}>
            <div style={{ fontSize: large ? 24 : 14 }}>◍</div>
            <div style={{ fontWeight: 800, fontSize: large ? 12 : 7.5 }}>{["Save", "Play", "Grow"][i]}</div>
            <div style={{ fontSize: large ? 9 : 6, opacity: 0.9 }}>{["$4.2k", "128h", "+32%"][i]}</div>
          </div>
        ))}
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SkeuomorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ background: "linear-gradient(180deg,#3A3A3A,#1E1E1E)" }}>
        <div style={{ background: "linear-gradient(180deg,#F5F1E8,#D8D2C2)", borderRadius: 12, padding: large ? 16 : 9, width: large ? "64%" : "70%", boxShadow: "0 14px 40px rgba(0,0,0,.6), inset 0 1px 0 #fff", border: "1px solid #8A8478" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 8 : 5.5, color: "#7A766E", letterSpacing: "0.2em" }}><span>● ● ●</span><span>STEREO · FM 88.1</span></div>
          <div style={{ background: "#1A2415", borderRadius: 8, marginTop: 6, padding: large ? 10 : 6, border: "3px inset #999", fontFamily: "monospace", color: "#7CFF6B", fontSize: large ? 12 : 7.5, textShadow: "0 0 8px #7CFF6B" }}>88.1 MHz ▮▮▮▮▯ VOL 7</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 8 }}>
            {[18, 26, 18].map((s, i) => (
              <span key={i} style={{ width: large ? s + 8 : s, height: large ? s + 8 : s, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #fff, #999 60%, #555)", boxShadow: "0 3px 6px rgba(0,0,0,.5), inset 0 -2px 4px rgba(0,0,0,.4)" }} />
            ))}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function BentoGridPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-4 grid-rows-2 gap-3 p-[5%]">
        <div className="col-span-2 row-span-2" style={{ background: p.ink, color: "#fff", borderRadius: 14, padding: large ? 14 : 8 }}>
          <div style={{ fontSize: large ? 9 : 6, color: p.accent2 }}>✦ FLAGSHIP</div>
          <div style={{ fontWeight: 700, fontSize: large ? 18 : 10.5 }}>Everything, one view.</div>
          <div style={{ marginTop: 6, borderRadius: 8, height: large ? 60 : 32, background: "linear-gradient(120deg,#4D7CFE,#FF6B9D)" }} />
        </div>
        {[["▲ 99.99%", "uptime"], ["◍ 4.9", "rating"], ["⏱ 0.04s", "p95"]].map((s) => (
          <div key={s[0]} style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 14, padding: large ? 10 : 6 }}>
            <div style={{ fontWeight: 800, fontSize: large ? 14 : 8.5 }}>{s[0]}</div>
            <div style={{ fontSize: large ? 8 : 5.5, color: p.muted }}>{s[1]}</div>
          </div>
        ))}
        <div style={{ background: p.accent, color: "#fff", borderRadius: 14, padding: large ? 10 : 6, fontWeight: 700, fontSize: large ? 11 : 7 }}>Try free →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CardBasedUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-3 gap-2 p-[5%]">
        {[["#2563EB", "Design tokens"], ["#7C3AED", "Motion guide"], ["#059669", "A11y checklist"]].map((c) => (
          <div key={c[1]} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(15,23,42,.08)" }}>
            <div style={{ background: c[0], height: large ? 44 : 26 }} />
            <div style={{ padding: large ? 8 : 5 }}>
              <div style={{ fontWeight: 650, fontSize: large ? 9 : 6 }}>{c[1]}</div>
              <div style={{ fontSize: large ? 8 : 5, color: p.muted, marginTop: 2 }}>⦿ 12 saves · 4 min</div>
            </div>
          </div>
        ))}
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CorporateSaaSPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col px-[7%] py-[5%]">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong style={{ fontSize: large ? 11 : 7 }}>◍ Acme</strong>
          <span style={{ background: p.accent, color: "#fff", borderRadius: 8, fontSize: large ? 9 : 6, padding: large ? "6px 14px" : "4px 9px", fontWeight: 600 }}>Start free →</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: large ? 24 : 14, letterSpacing: "-0.02em", marginTop: 8, lineHeight: 1.1 }}>Software that closes<br />the quarter for you.</div>
        <div style={{ display: "flex", gap: 8, marginTop: 6, fontSize: large ? 8 : 5.5, color: p.muted }}>
          <span>★ 4.9 · 2,400 reviews</span><span>◍ SOC 2</span><span>✓ No card required</span>
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: 6, opacity: 0.7, fontSize: large ? 8 : 5.5, fontWeight: 700, color: p.muted }}>
          {["VERCEL", "FIGMA", "NOTION", "LINEAR"].map((l) => <span key={l}>{l}</span>)}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function StripeInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden">
        <div style={{ position: "absolute", inset: "-20% -10% auto -10%", height: "72%", transform: "skewY(-7deg)", background: "linear-gradient(100deg,#FF8A3D,#FF5CA8 35%,#635BFF 70%,#00D4FF)" }} />
        <div className="relative grid h-full grid-cols-2 gap-2 p-[7%]">
          <div>
            <div style={{ fontWeight: 300, fontSize: large ? 24 : 14, color: "#0A2540", lineHeight: 1.1 }}>Payments infrastructure for the internet</div>
            <span style={{ display: "inline-block", background: "#635BFF", color: "#fff", borderRadius: 999, fontSize: large ? 9 : 6, padding: large ? "7px 16px" : "4px 10px", marginTop: 8 }}>Start now →</span>
          </div>
          <div style={{ background: "#0A2540", borderRadius: 10, padding: large ? 10 : 6, fontFamily: "monospace", fontSize: large ? 8 : 5.5, color: "#C4CDF5", boxShadow: "0 16px 40px rgba(10,37,64,.3)" }}>
            <div><span style={{ color: "#7AA2FF" }}>const</span> payment = <span style={{ color: "#8CE99A" }}>await</span> stripe.</div>
            <div> .checkout.create({"{"}</div>
            <div>&nbsp;&nbsp;amount: <span style={{ color: "#FFD166" }}>2000</span>,</div>
            <div>&nbsp;&nbsp;currency: <span style={{ color: "#FF8AB2" }}>{`'usd'`}</span>,</div>
            <div>{"}"}); <span style={{ color: "#00D4FF" }}>✓</span></div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function LinearInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[8%] text-center" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, #5E6AD244, #08090A 70%)" }}>
        <div style={{ fontSize: large ? 9 : 6, color: "#8A8F98", border: "1px solid #ffffff18", borderRadius: 999, padding: "3px 12px" }}>✦ Linear method — now in beta</div>
        <div style={{ fontWeight: 650, fontSize: large ? 26 : 15, letterSpacing: "-0.02em", marginTop: 8 }}>Issue tracking,<br />minus the drag.</div>
        <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
          <span style={{ background: "#5E6AD2", borderRadius: 6, fontSize: large ? 9 : 6, padding: large ? "7px 16px" : "4px 10px", fontWeight: 600 }}>Start building</span>
          <span style={{ border: "1px solid #ffffff22", borderRadius: 6, fontSize: large ? 9 : 6, padding: large ? "7px 16px" : "4px 10px", color: "#B9BEC7" }}>⌘K Live demo</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function NotionInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full">
        <div className="w-[30%] p-[4%]" style={{ background: "#F7F7F5", fontSize: large ? 9 : 6 }}>
          <div style={{ color: "#9B9A93" }}>◍ Workspace</div>
          {["📄 Roadmap", "📅 Calendar", "✅ Tasks", "📚 Wiki"].map((t) => (
            <div key={t} style={{ padding: "3px 6px", borderRadius: 4, marginTop: 3, background: t.includes("Road") ? "#E9E9E8" : "transparent" }}>{t}</div>
          ))}
        </div>
        <div className="flex-1 p-[6%]">
          <div style={{ fontSize: large ? 22 : 13 }}>🗺</div>
          <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: large ? 20 : 12 }}>Q3 launch plan</div>
          <div style={{ marginTop: 6, background: "#FFF8E6", border: "1px solid #F0E2B6", borderRadius: 6, padding: large ? 8 : 5, fontSize: large ? 9 : 6 }}>💡 Tip — press <span style={{ fontFamily: "monospace", background: "#eee", padding: "0 5px", borderRadius: 3 }}>/</span> for commands</div>
          <div style={{ marginTop: 6, fontSize: large ? 9 : 6 }}><span style={{ color: "#9B9A93" }}>▸▸ </span>Toggle: launch checklist (4/6) ▾</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GradientDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center" style={{ background: "linear-gradient(140deg,#2B0A4A,#7C5CFF 45%,#00E5FF 90%)" }}>
        <div className="pv-drift" style={{ position: "absolute", width: large ? 220 : 130, height: large ? 220 : 130, borderRadius: "50%", background: "#FF4FD888", filter: "blur(40px)" }} />
        <div style={{ position: "relative", background: "rgba(255,255,255,.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.35)", borderRadius: 24, padding: large ? "16px 34px" : "9px 19px", color: "#fff" }}>
          <div style={{ fontWeight: 800, fontSize: large ? 26 : 15 }}>Feel the gradient</div>
          <div style={{ fontSize: large ? 10 : 6.5, opacity: 0.9 }}>mesh · glow · drift — 20s loop</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function AuroraGlowPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg,#02040A,#050914 60%,#0A1A24)" }}>
        <svg viewBox="0 0 200 60" style={{ position: "absolute", top: "6%", width: "110%" }}>
          <path className="pv-drift" d="M-10 40 Q 40 5, 100 30 T 210 20" fill="none" stroke="#00E5A0" strokeWidth="5" opacity="0.55" strokeLinecap="round" />
          <path d="M-10 48 Q 40 12, 100 38 T 210 28" fill="none" stroke="#7C5CFF" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "18px 18px", opacity: 0.3 }} />
        <div style={{ position: "relative", border: "1px solid rgba(0,229,160,.4)", borderRadius: 16, background: "#0A122088", padding: large ? "12px 26px" : "7px 15px", textAlign: "center", boxShadow: "0 0 40px rgba(0,229,160,.25)" }}>
          <div style={{ fontSize: large ? 9 : 6, letterSpacing: "0.3em", color: "#00E5A0" }}>● LIVE — KP 5</div>
          <div style={{ fontWeight: 700, fontSize: large ? 18 : 11 }}>Tonight over Tromsø</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function HolographicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ background: "radial-gradient(circle at 50% 30%, #1E1E2E, #0D0D14 75%)" }}>
        <div style={{ width: large ? "46%" : "52%", aspectRatio: "8/5", borderRadius: 14, background: "conic-gradient(from 200deg,#FF7AD9,#FFD802,#7DF9FF,#7C5CFF,#FF7AD9)", padding: 2, boxShadow: "0 12px 48px rgba(125,249,255,.3)", transform: "rotate(-4deg)" }}>
          <div style={{ background: "#0D0D14ee", borderRadius: 12, height: "100%", padding: large ? 12 : 7, color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 8 : 5.5, color: "#8E8AB0" }}><span>HOLO · 001/100</span><span>❖</span></div>
            <div className="pv-chrome-text" style={{ fontWeight: 900, fontSize: large ? 22 : 13 }}>CHROMA</div>
            <div style={{ fontFamily: "monospace", fontSize: large ? 8 : 5.5, color: "#7DF9FF" }}>◍ ◍ ◍ ◍ SEALED</div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function LiquidChromePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="pv-drift" style={{ position: "absolute", width: large ? 240 : 140, height: large ? 120 : 70, borderRadius: "45% 55% 60% 40%", background: "linear-gradient(120deg,#fff,#9fb3c8 40%,#5b6b7c 55%,#dfe7ee 75%,#fff)", filter: "blur(1px)" }} />
        <div className="pv-chrome-text" style={{ position: "relative", fontWeight: 900, fontSize: large ? 40 : 23, letterSpacing: "0.02em" }}>MERCURY</div>
        <div style={{ position: "relative", fontSize: large ? 9 : 6, letterSpacing: "0.4em", color: "#8E8E99" }}>Y2K · LUXE · Nº 7</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ThreeDWebDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden" style={{ background: "radial-gradient(circle at 50% 70%, #2B2350, #0B0B12 75%)" }}>
        <div className="absolute inset-x-0 bottom-0 h-[36%]" style={{ backgroundImage: "linear-gradient(#7C5CFF33 1px, transparent 1px), linear-gradient(90deg, #7C5CFF33 1px, transparent 1px)", backgroundSize: "22px 22px", transform: "perspective(300px) rotateX(55deg)", transformOrigin: "bottom" }} />
        <div className="pv-float" style={{ width: large ? 110 : 64, height: large ? 110 : 64, borderRadius: "28%", background: "linear-gradient(140deg,#B9A8FF,#5E3FD4 60%,#231A5E)", boxShadow: "0 30px 60px rgba(0,0,0,.6), 0 0 40px rgba(124,92,255,.5), inset 0 2px 6px #ffffff88", transform: "rotate(-12deg)" }} />
        <div style={{ marginTop: 10, fontSize: large ? 9 : 6, fontFamily: "monospace", color: "#B9A8FF", border: "1px solid #7C5CFF66", borderRadius: 999, padding: "3px 12px" }}>◍ DRAG TO ORBIT · 60 FPS</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ImmersivePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-end overflow-hidden p-[6%]" style={{ background: "linear-gradient(180deg,#2B1A08 0%,#8A4A12 45%,#060606 100%)" }}>
        <div style={{ position: "absolute", top: "16%", left: "50%", width: large ? 70 : 42, height: large ? 70 : 42, borderRadius: "50%", background: "radial-gradient(circle,#FFE9B8,#FF9A3D 60%,transparent 70%)", transform: "translateX(-50%)" }} />
        <div style={{ background: "#000", height: large ? 8 : 5, margin: "0 -8%" }} />
        <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", color: "#E8FF47", marginTop: 8 }}>ACT I — THE CROSSING</div>
        <div style={{ fontFamily: "Anton, sans-serif", fontSize: large ? 28 : 16, color: "#F5F3EC" }}>WALK INTO THE FILM</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ScrollytellingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col justify-center p-[8%]">
          <div style={{ fontSize: large ? 8 : 5.5, fontFamily: "monospace", color: p.accent }}>STEP 2 OF 5 ●●○○○</div>
          <div style={{ fontWeight: 700, fontSize: large ? 16 : 10, marginTop: 4 }}>The river moved first.</div>
          <div style={{ fontSize: large ? 9 : 6, color: p.muted, marginTop: 4 }}>Scroll — the map fills as the story unfolds.</div>
          <div style={{ height: 3, background: "#E5E2D8", marginTop: 8, borderRadius: 2 }}><div style={{ width: "40%", height: "100%", background: p.accent, borderRadius: 2 }} /></div>
        </div>
        <div style={{ background: "#0F4C81", margin: "6%", borderRadius: 12, border: "1px solid #111", boxShadow: "0 8px 24px rgba(0,0,0,.15)", position: "relative", overflow: "hidden" }}>
          <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d="M10 70 Q 40 60, 55 40 T 90 25" fill="none" stroke="#fff" strokeWidth="3" />
            <circle cx="55" cy="40" r="5" fill={p.accent === "#2B4EFF" ? "#FF5C00" : p.accent} />
          </svg>
          <div style={{ position: "absolute", bottom: 6, left: 8, color: "#fff", fontSize: large ? 8 : 5.5, fontFamily: "monospace" }}>PINNED GRAPHIC — LIVE</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ParallaxPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden" style={{ background: "linear-gradient(180deg,#0E1A2B,#3A5A8C 55%,#FFC24B 130%)" }}>
        <div style={{ position: "absolute", top: "14%", right: "12%", width: large ? 44 : 26, height: large ? 44 : 26, borderRadius: "50%", background: "#FFC24B", boxShadow: "0 0 30px #FFC24B" }} />
        <svg viewBox="0 0 200 70" style={{ position: "absolute", bottom: "22%", width: "100%" }}><path d="M0 50 L40 20 L70 45 L110 10 L150 42 L200 25 L200 70 L0 70 Z" fill="#16273D" /></svg>
        <svg viewBox="0 0 200 50" style={{ position: "absolute", bottom: 0, width: "100%" }}><path d="M0 35 L50 10 L90 32 L140 8 L200 30 L200 50 L0 50 Z" fill="#0B1420" /></svg>
        <div style={{ position: "absolute", bottom: "8%", left: "8%", background: "#0B1420cc", color: "#fff", borderRadius: 12, padding: large ? "8px 14px" : "5px 9px", fontSize: large ? 9 : 6 }}>▲ 2,480m — layer 4/6 · scroll ↓</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
