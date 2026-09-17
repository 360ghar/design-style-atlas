import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 6 — Type-Led + Cut & Paste + Handmade (20). */
export function KineticTypographyPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[6%] text-center">
        <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17, lineHeight: 1.05 }}>WORDS THAT <span style={{ background: p.accent, color: "#0E0E0E", padding: "0 8px" }}>MOVE</span></div>
        <div className="overflow-hidden whitespace-nowrap" style={{ width: "100%", marginTop: 8 }}>
          <div className="pv-marquee" style={{ display: "inline-block", fontSize: large ? 10 : 7, color: p.muted, letterSpacing: "0.2em" }}>SLIDE · SCRAMBLE · KARAOKE · REPEAT · SLIDE · SCRAMBLE · KARAOKE · REPEAT ·&nbsp;</div>
        </div>
        <div style={{ fontSize: large ? 9 : 6, fontFamily: "monospace", marginTop: 6, color: p.accent }}>▶ replay line_04 [motion: on]</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function TypographyFirstPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="mx-auto flex h-full max-w-[76%] flex-col justify-center">
        <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.25em", color: "#74706A" }}>CHAPTER THREE</div>
        <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: large ? 22 : 13, lineHeight: 1.35, marginTop: 6 }}>Good typography is invisible. You notice it only when the measure is wrong, the leading pinches, or the <i>emphasis</i> arrives a beat late.<sup style={{ color: "#2B4EFF" }}>1</sup></div>
        <div style={{ borderTop: "1px solid #1B1A17", marginTop: 8, paddingTop: 5, fontSize: large ? 8 : 5.5, color: "#74706A" }}>1. Bringhurst, <i>Elements of Typographic Style</i>, §2.1 →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function VariableFontsPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[8%]">
        <div style={{ fontWeight: 900, fontSize: large ? 40 : 23, letterSpacing: "-0.02em", fontStretch: "125%" }}>Fluid</div>
        <div style={{ fontWeight: 300, fontSize: large ? 40 : 23, letterSpacing: "0.08em", fontStretch: "60%" }}>weightless</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
          <span style={{ fontSize: large ? 8 : 5.5, fontFamily: "monospace" }}>wght</span>
          <span style={{ flex: 1, height: 4, borderRadius: 2, background: "linear-gradient(90deg,#ddd,#141414)", position: "relative" }}>
            <span style={{ position: "absolute", left: "68%", top: -5, width: 14, height: 14, borderRadius: "50%", background: "#E30613", border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,.3)" }} />
          </span>
          <span style={{ fontSize: large ? 8 : 5.5, fontFamily: "monospace" }}>840</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function OversizedTypographyPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center overflow-hidden px-[5%]">
        <div style={{ fontFamily: p.display, fontSize: large ? 64 : 36, lineHeight: 0.88, letterSpacing: "-0.02em" }}>GO<br /><span className="pv-outline-text" style={{ color: p.ink }}>HUGE</span><br /><span style={{ color: p.accent }}>OR GO →</span></div>
        <div style={{ fontSize: large ? 8 : 5.5, fontFamily: "monospace", color: p.muted, marginTop: 6 }}>Nº 001 — SCALE AS SPECTACLE</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CollagePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <div style={{ position: "absolute", left: "8%", top: "14%", width: "34%", height: "44%", background: "#0F4C81", transform: "rotate(-5deg)", border: "3px solid #fff", boxShadow: "3px 4px 0 rgba(28,27,26,.85)" }} />
        <div style={{ position: "absolute", right: "10%", top: "30%", width: "30%", height: "38%", background: p.accent, transform: "rotate(4deg)", border: "3px solid #fff", boxShadow: "3px 4px 0 rgba(28,27,26,.85)", clipPath: "polygon(2% 6%, 97% 0, 100% 94%, 0 100%)" }} />
        <div style={{ position: "relative", background: "#fff", padding: large ? "8px 20px" : "5px 12px", fontFamily: p.display, fontSize: large ? 18 : 11, transform: "rotate(-2deg)", boxShadow: "4px 4px 0 #1C1B1A" }}>cut · paste · <i style={{ color: p.accent }}>ship</i></div>
        <div style={{ position: "absolute", bottom: "12%", left: "14%", background: "rgba(200,180,140,.8)", width: large ? 70 : 44, height: large ? 20 : 13, transform: "rotate(-8deg)", borderLeft: "1px dashed #fff", borderRight: "1px dashed #fff" }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ScrapbookPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center justify-center gap-[4%] px-[8%]">
        {[["— mall, '04", "-3deg", "◍"], ["— camp!!", "2.5deg", "✿"]].map((c, i) => (
          <div key={c[0]} style={{ background: "#fff", padding: large ? 8 : 5, paddingBottom: large ? 22 : 14, transform: `rotate(${c[1]})`, boxShadow: "0 6px 16px rgba(59,54,46,.2)", width: "38%", textAlign: "center" }}>
            <div style={{ background: i ? "#5B7E6B" : "#B3541E", height: large ? 70 : 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 26 : 15, color: "#fff" }}>{c[2]}</div>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: large ? 13 : 8, marginTop: 4 }}>{c[0]}</div>
          </div>
        ))}
        <div style={{ position: "absolute", bottom: "10%", right: "10%", fontFamily: "Caveat, cursive", fontSize: large ? 14 : 9, color: "#B3541E", transform: "rotate(-4deg)" }}>xoxo, summer →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ZinePunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]" style={{ backgroundImage: "radial-gradient(#00000022 1px, transparent 1px)", backgroundSize: "5px 5px" }}>
        <div style={{ display: "inline-block", background: "#111", color: "#fff", fontFamily: "Impact", fontSize: large ? 26 : 15, padding: "2px 10px", transform: "rotate(-2deg)" }}>NO FUTURE?</div>
        <div style={{ display: "inline-block", background: p.accent, color: "#fff", fontFamily: "Impact", fontSize: large ? 26 : 15, padding: "2px 10px", transform: "rotate(1.5deg)", marginTop: 4, width: "fit-content" }}>MAKE ONE.</div>
        <div style={{ fontFamily: "monospace", fontSize: large ? 9 : 6, marginTop: 8 }}>GIGS: <b>fri</b> <s>sat — sold out</s> <b>sun</b> · $5 · all ages · <span style={{ background: "#111", color: "#fff", padding: "0 5px" }}>DIY OR DIE</span></div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function RisographPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center overflow-hidden px-[8%]" style={{ backgroundImage: "radial-gradient(#00000018 1px, transparent 1px)", backgroundSize: "4px 4px" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 3, top: 3, fontFamily: "Archivo Black", fontSize: large ? 34 : 19, color: "#0078BF", opacity: 0.75 }}>SOY INK</div>
          <div style={{ position: "relative", fontFamily: "Archivo Black", fontSize: large ? 34 : 19, color: "#FF6655", mixBlendMode: "multiply" }}>SOY INK</div>
          <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
            {[["#FF6655", "PINK"], ["#0078BF", "TEAL"], ["#232323", "INK"]].map((s) => (
              <span key={s[0]} style={{ background: s[0], color: "#fff", fontSize: large ? 8 : 5.5, fontWeight: 800, padding: "3px 9px" }}>● {s[1]}</span>
            ))}
          </div>
          <div style={{ fontSize: large ? 8 : 5.5, fontFamily: "monospace", marginTop: 6, color: "#555" }}>ED. OF 100 · 3 DRUMS · MISREGISTERED WITH LOVE</div>
        </div>
        <div style={{ position: "absolute", right: "8%", top: "16%", width: large ? 90 : 54, height: large ? 90 : 54, borderRadius: "50%", background: "#0078BF", mixBlendMode: "multiply", opacity: 0.8 }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function HalftonePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#141414 1.4px, transparent 1.4px)", backgroundSize: "9px 9px", opacity: 0.2 }} />
        <div style={{ position: "relative", border: "3px solid #141414", background: "#fff", padding: large ? 12 : 7, boxShadow: "6px 6px 0 #141414", transform: "rotate(-1deg)" }}>
          <div style={{ fontFamily: "Archivo Black", fontSize: large ? 26 : 15 }}>WOW! <span style={{ background: "#FFD802", padding: "0 6px", border: "2px solid #141414" }}>50% OFF!</span></div>
          <div style={{ fontSize: large ? 9 : 6.5, marginTop: 4 }}>Same dots, half the price. Act fast!!</div>
        </div>
        <div className="pv-spin-slow" style={{ position: "absolute", right: "4%", top: "8%", width: large ? 64 : 40, height: large ? 64 : 40, background: "#E30613", color: "#fff", clipPath: "polygon(50% 0,61% 12%,76% 6%,79% 21%,95% 21%,90% 35%,100% 45%,90% 55%,95% 69%,79% 69%,76% 84%,61% 78%,50% 90%,39% 78%,24% 84%,21% 69%,5% 69%,10% 55%,0 45%,10% 35%,5% 21%,21% 21%,24% 6%,39% 12%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 11 : 7, fontWeight: 900 }}>POW!</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GrainNoisePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-end overflow-hidden" style={{ background: "linear-gradient(160deg,#3A352C,#131311 70%)" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#ffffff14 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
        <div style={{ position: "relative", padding: large ? 16 : 9, color: "#EDEAE2" }}>
          <div style={{ fontFamily: "monospace", fontSize: large ? 8 : 5.5, color: "#E8FF47" }}>ISO 400 · f/2.8 · 35MM</div>
          <div style={{ fontWeight: 650, fontSize: large ? 22 : 13 }}>Shot on feeling.</div>
          <div style={{ fontSize: large ? 9 : 6, color: "#8A867C" }}>Warm blacks · soft highlights · always grain →</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function HandDrawnPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[8%] text-center">
        <div style={{ fontSize: large ? 24 : 14, fontWeight: 700 }}>this bit is <span style={{ background: "linear-gradient(transparent 55%, #FFD166 55%)", padding: "0 4px" }}>important!</span></div>
        <svg viewBox="0 0 120 14" style={{ width: large ? 200 : 120, marginTop: 2 }}><path d="M4 9 Q 30 3, 60 8 T 116 6" fill="none" stroke="#E4572E" strokeWidth="3.5" strokeLinecap="round" /></svg>
        <div style={{ fontSize: large ? 10 : 6.5, color: "#8A8178", marginTop: 6 }}>← arrows explain everything (rule nº 3)</div>
        <span style={{ border: "2.5px solid #2E2A26", borderRadius: "14px 16px 13px 17px", padding: large ? "8px 22px" : "5px 13px", fontWeight: 800, fontSize: large ? 11 : 7, marginTop: 8, transform: "rotate(-1.5deg)" }}>got it, thanks →</span>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function IllustrationLedPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2 items-center px-[8%]">
        <div>
          <div style={{ fontFamily: p.display, fontSize: large ? 24 : 14 }}>Meet Pip, your money buddy.</div>
          <div style={{ fontSize: large ? 10 : 6.5, color: p.muted, marginTop: 4 }}>Saving, explained in pictures — chapter one →</div>
          <span style={{ display: "inline-block", background: p.accent, color: "#fff", borderRadius: 12, padding: large ? "8px 20px" : "5px 12px", fontWeight: 700, fontSize: large ? 10 : 6.5, marginTop: 8 }}>Start the story</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="pv-float" style={{ width: large ? 120 : 72, height: large ? 140 : 84, background: "#FFE3C2", border: "2.5px solid #2B2620", borderRadius: "48% 52% 50% 50%", position: "relative" }}>
            <div style={{ position: "absolute", top: "30%", left: "24%", width: "14%", height: "10%", background: "#2B2620", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: "30%", right: "24%", width: "14%", height: "10%", background: "#2B2620", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "26%", left: "32%", right: "32%", height: "12%", background: "#E4572E", borderRadius: "0 0 40px 40px" }} />
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CorporateMemphisPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2 items-center px-[8%]">
        <div>
          <div style={{ fontWeight: 800, fontSize: large ? 22 : 13, letterSpacing: "-0.01em" }}>Teamwork makes the KPI work.</div>
          <div style={{ fontSize: large ? 10 : 6.5, color: p.muted, marginTop: 4 }}>Ship 10× faster with SynergyCloud™ →</div>
          <span style={{ display: "inline-block", background: p.accent, color: "#fff", borderRadius: 999, padding: large ? "8px 20px" : "5px 12px", fontWeight: 700, fontSize: large ? 10 : 6.5, marginTop: 8 }}>Get started free</span>
        </div>
        <div className="relative flex items-center justify-center">
          <div style={{ position: "absolute", width: large ? 150 : 90, height: large ? 150 : 90, background: "#E4E9FF", borderRadius: "58% 42% 55% 45%" }} />
          <div style={{ position: "relative", display: "flex", gap: large ? 14 : 8 }}>
            {[["#4D7CFE", 64], ["#FF6B9D", 80], ["#1E2A3B", 56]].map((f, i) => (
              <div key={i} style={{ width: large ? (f[1] as number) : (f[1] as number) * 0.6, height: large ? (f[1] as number) * 1.7 : (f[1] as number), background: f[0] as string, borderRadius: 999 }} />
            ))}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function OrganicBiophilicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2">
        <div style={{ background: "linear-gradient(170deg,#5B7E6B,#2E3A2F)", borderRadius: "0 50% 50% 0 / 0 30% 30% 0", margin: "5% 0 5% 8%", position: "relative" }}>
          <div className="pv-drift" style={{ position: "absolute", top: "20%", left: "30%", width: "34%", height: "30%", background: "#3E7C4F", borderRadius: "0 60% 0 60%", opacity: 0.9 }} />
        </div>
        <div className="flex flex-col justify-center p-[10%]">
          <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", color: p.accent }}>GROW SLOW</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 24 : 14 }}>Rooms that breathe.</div>
          <span style={{ background: p.accent, color: "#fff", borderRadius: "4px 20px 4px 20px", padding: large ? "8px 20px" : "5px 12px", fontSize: large ? 10 : 6.5, marginTop: 8, width: "fit-content" }}>Enter the grove →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EcoSustainablePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[8%]">
        <div style={{ display: "inline-flex", gap: 6 }}>
          {[["🌳", "1.2M trees"], ["◍", "−48% CO₂"], ["✓", "B-Corp"]].map((b) => (
            <span key={b[1]} style={{ border: "1.5px dashed #2E7D32", borderRadius: 10, padding: large ? "6px 12px" : "4px 7px", fontSize: large ? 9 : 6, fontWeight: 700 }}>{b[0]} {b[1]}</span>
          ))}
        </div>
        <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16, marginTop: 8 }}>Receipts, not promises.</div>
        <div style={{ fontSize: large ? 10 : 6.5, color: p.muted }}>Every order plants one. Track yours ↓</div>
        <div style={{ height: large ? 10 : 6, background: "#DDE5D5", borderRadius: 999, marginTop: 8 }}><div style={{ width: "72%", height: "100%", background: p.accent, borderRadius: 999 }} /></div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function JapandiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-end overflow-hidden px-[8%] pb-[7%]">
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "8%", right: "8%", backgroundImage: "linear-gradient(90deg, #33302A22 1px, transparent 1px)", backgroundSize: "25% 100%", opacity: 0.5 }} />
        <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "34%", height: large ? 90 : 54, background: "#C9B79C", borderRadius: "6px 6px 0 0" }} />
        <div style={{ position: "absolute", left: "14%", bottom: "34%", width: "10%", height: large ? 46 : 28, background: "#8C5A2B" }} />
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-end" }}>
          <div><div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: large ? 22 : 13 }}>Low. Oak. Still.</div>
          <div style={{ fontSize: large ? 9 : 6, color: "#8A8478" }}>the lounge collection →</div></div>
          <div style={{ width: large ? 34 : 22, height: large ? 52 : 32, background: "#4A5D4E", borderRadius: "50% 50% 4px 4px" }} />
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function WabiSabiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center px-[10%]">
        <div style={{ textAlign: "center" }}>
          <div style={{ width: large ? 110 : 66, height: large ? 74 : 44, margin: "0 auto", background: "#D8CFC0", borderRadius: "46% 54% 52% 48%", position: "relative", boxShadow: "0 8px 20px rgba(58,53,44,.15)" }}>
            <svg viewBox="0 0 100 60" style={{ position: "absolute", inset: 0 }}><path d="M30 5 L45 30 L38 55" fill="none" stroke={p.accent} strokeWidth="3" /></svg>
          </div>
          <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 18 : 11, marginTop: 8 }}>mended with gold.</div>
          <div style={{ fontSize: large ? 9 : 6, color: p.muted }}>侘寂 · nothing lasts, nothing is finished</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ArtDecoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[10%] text-center">
        <svg viewBox="0 0 120 26" style={{ width: large ? 190 : 115 }}><g fill="none" stroke={p.accent} strokeWidth="1.6">{[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1={10 + i * 8} y1="24" x2="60" y2="4" />)}{[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={`b${i}`} x1={110 - i * 8} y1="24" x2="60" y2="4" />)}</g><circle cx="60" cy="4" r="2.5" fill={p.accent} /></svg>
        <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17, letterSpacing: "0.12em", marginTop: 6 }}>GATSBY</div>
        <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.45em", color: p.accent }}>❖ JAZZ · 1925 ❖</div>
        <div style={{ border: `1px solid ${p.accent}`, fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", padding: large ? "7px 22px" : "4px 13px", marginTop: 10 }}>RESERVE A TABLE</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ArtNouveauPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center px-[8%]">
        <div style={{ border: `2px solid ${p.accent}`, borderRadius: "50% 50% 8px 8px", padding: large ? "16px 30px" : "9px 17px", textAlign: "center", position: "relative", width: large ? "70%" : "78%" }}>
          <svg viewBox="0 0 100 20" style={{ position: "absolute", top: -9, left: "10%", right: "10%", width: "80%" }}><path d="M0 15 Q 25 0, 50 12 T 100 8" fill="none" stroke={p.accent2} strokeWidth="2" /></svg>
          <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 24 : 14 }}>Maison Fleurette</div>
          <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", color: p.accent }}>PARFUM · 1898</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MidCenturyModernPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center px-[8%]">
        <div className="pv-spin-slow" style={{ width: large ? 90 : 54, height: large ? 90 : 54, flexShrink: 0, background: `conic-gradient(${p.accent} 0 8%, transparent 8% 25%, ${p.accent} 25% 33%, transparent 33% 50%, ${p.accent} 50% 58%, transparent 58% 75%, ${p.accent} 75% 83%, transparent 83%)`, borderRadius: "50%", position: "relative" }}>
          <span style={{ position: "absolute", inset: "38%", background: p.accent2, borderRadius: "50%" }} />
        </div>
        <div style={{ marginLeft: large ? 18 : 10 }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 24 : 14 }}>Atomic living.</div>
          <div style={{ fontSize: large ? 9 : 6, color: p.muted }}>teak · starburst · est. 1958 →</div>
          <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
            {[p.accent, "#D9A441", p.accent2].map((c) => <span key={c} style={{ width: large ? 34 : 20, height: large ? 10 : 6, background: c, borderRadius: 3 }} />)}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
