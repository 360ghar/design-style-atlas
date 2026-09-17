import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 8 — New styles (20). Bespoke specimens matching each DESIGN.md character. */

export function AfrofuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: `radial-gradient(circle at 80% 10%, ${p.accent2}33, transparent 45%), radial-gradient(circle at 15% 85%, ${p.accent}2e, transparent 50%)` }}>
        <div style={{ height: 6, background: `repeating-linear-gradient(90deg, ${p.accent} 0 14px, ${p.accent2} 14px 20px, ${p.ink} 20px 26px)` }} />
        <div className="flex h-full flex-col justify-center px-[8%]">
          <div style={{ fontSize: large ? 10 : 7, letterSpacing: "0.3em", color: p.accent2 }}>✦ SOL · ANCESTOR · STARSHIP</div>
          <div style={{ fontFamily: p.display, color: p.accent, fontSize: large ? 34 : 19, lineHeight: 1.02, marginTop: 6 }}>GOLD IS<br />SACRED.</div>
          <div style={{ color: p.muted, fontSize: large ? 11 : 7.5, marginTop: 6 }}>Kente geometry · mudcloth rhythm · percussion layout</div>
        </div>
        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}

export function ConversationalAIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center gap-2 px-[9%]">
        <div style={{ alignSelf: "flex-start", background: p.surface, border: `1px solid ${p.ink}1e`, borderRadius: "2px 14px 14px 14px", padding: large ? "8px 12px" : "5px 8px", fontSize: large ? 11 : 7.5, maxWidth: "80%" }}>Streaming answer — calm, cited, complete ▍</div>
        <div style={{ alignSelf: "flex-end", background: p.accent, color: "#fff", borderRadius: "14px 14px 2px 14px", padding: large ? "8px 12px" : "5px 8px", fontSize: large ? 11 : 7.5 }}>Summarize this spec for me</div>
        <div style={{ alignSelf: "flex-start", fontSize: large ? 9 : 6.5, color: p.muted, fontFamily: "monospace" }}>✓ 3 sources · 0.8s · no hallucination</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function AppleLiquidGlassPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: `linear-gradient(135deg, ${p.accent}22, ${p.accent2}1f), ${p.bg}` }}>
        <div className="mx-auto mt-[7%] flex gap-2" style={{ background: "#ffffffb8", backdropFilter: "blur(14px)", border: "1px solid #ffffff", borderRadius: 999, padding: large ? "6px 14px" : "4px 9px", fontSize: large ? 9 : 6.5, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <span>●</span><span>●</span><span>●</span><span style={{ color: p.muted }}>liquid chrome floats</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div style={{ fontFamily: p.display, fontWeight: 600, fontSize: large ? 30 : 17, letterSpacing: "-0.02em" }}>Content stays hero.</div>
          <div style={{ color: p.muted, fontSize: large ? 11 : 7.5, marginTop: 6 }}>Specular edges · calm spacing · refraction</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CarbonEnterprisePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[6%]">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, fontFamily: "monospace", color: p.muted }}><span>IBM CARBON · GRID 2X</span><span>ROW 001–004</span></div>
        <div style={{ marginTop: 8, border: `1px solid ${p.ink}33`, fontSize: large ? 10 : 7 }}>
          {[["orderstbl", "12,408", "pass"], ["users_iam", "8,412", "pass"], ["billing_eu", "−4.1%", "warn"]].map((r) => (
            <div key={r[0]} style={{ display: "flex", justifyContent: "space-between", padding: large ? "7px 10px" : "4px 7px", borderBottom: `1px solid ${p.ink}18`, fontFamily: "monospace" }}>
              <span>{r[0]}</span><span>{r[1]}</span><span style={{ color: r[2] === "warn" ? "#da1e28" : p.accent }}>● {r[2]}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", fontSize: large ? 8 : 6, color: p.muted, fontFamily: "monospace" }}>STRICT GRID · NO NONSENSE · §4.2</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CottagecorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="h-full" style={{ backgroundImage: `repeating-linear-gradient(0deg, ${p.accent}14 0 10px, transparent 10px 20px), repeating-linear-gradient(90deg, ${p.accent}14 0 10px, transparent 10px 20px)` }}>
        <div className="flex h-full flex-col items-center justify-center text-center px-[10%]">
          <div style={{ fontSize: large ? 12 : 8 }}>🌿 🍓 🌼</div>
          <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 30 : 18, lineHeight: 1.1, marginTop: 6 }}>slow living,<br />wildflowers</div>
          <div style={{ border: `1px solid ${p.ink}55`, borderRadius: 999, padding: large ? "6px 16px" : "4px 10px", fontSize: large ? 10 : 7, marginTop: 10 }}>bake · mend · gather →</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function DarkAcademiaPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full">
        <div style={{ width: 8, background: p.accent2 }} />
        <div className="flex flex-1 flex-col justify-center px-[8%]">
          <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.3em", color: p.accent }}>VOL. IV · OXFORD · MDCCCXCII</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 30 : 18, lineHeight: 1.1, marginTop: 6 }}>Candlelit<br />scholarship.</div>
          <div style={{ height: 1, background: p.accent, width: "30%", margin: large ? "12px 0 8px" : "8px 0 6px" }} />
          <div style={{ color: p.muted, fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: large ? 11 : 7.5 }}>oxblood leather · oak · lamp smoke</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function DatavizTerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[6%] font-mono">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, color: p.muted }}><span>$ mkt —live</span><span style={{ color: p.accent2 }}>● streaming</span></div>
        {[["NDX", "+1.24%", 82, p.accent2], ["SPX", "−0.31%", 44, "#FF453A"], ["BTC", "+4.02%", 92, p.accent]].map((r) => (
          <div key={r[0] as string} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, fontSize: large ? 10 : 7 }}>
            <span style={{ width: 34 }}>{r[0]}</span>
            <div style={{ flex: 1, height: 6, background: `${p.ink}14`, borderRadius: 3 }}>
              <div style={{ width: `${r[2]}%`, height: "100%", background: r[3] as string, borderRadius: 3 }} />
            </div>
            <span style={{ color: r[3] as string }}>{r[1]}</span>
          </div>
        ))}
        <div style={{ marginTop: "auto", color: p.muted, fontSize: large ? 8 : 6 }}>28px rows · 12px mono · 09:41:07.112</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EInkPaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[12%]">
        <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.25em", color: p.accent }}>CHAPTER THREE</div>
        <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15, lineHeight: 1.25, marginTop: 6 }}>The quiet page<br />holds attention.</div>
        <div style={{ color: p.muted, fontFamily: "Georgia, serif", fontSize: large ? 11 : 7.5, marginTop: 8, lineHeight: 1.6 }}>No glow, no noise — just warm paper and one serif voice. ¹</div>
        <div style={{ marginTop: 8, fontSize: large ? 8 : 6, color: p.muted }}>¹ distraction-free by design</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FintechNeobankPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[8%]">
        <div style={{ background: p.surface, border: `1px solid ${p.ink}22`, borderRadius: 16, padding: large ? 16 : 10 }}>
          <div style={{ fontSize: large ? 9 : 6.5, color: p.muted, letterSpacing: "0.15em" }}>TOTAL BALANCE</div>
          <div style={{ fontSize: large ? 34 : 20, fontWeight: 700, letterSpacing: "-0.02em" }}>$24,806<span style={{ color: p.accent }}>.12</span></div>
          <div className="flex gap-2" style={{ marginTop: 10 }}>
            <span style={{ background: p.accent, color: "#0B0D0E", fontWeight: 700, borderRadius: 999, padding: large ? "7px 18px" : "4px 11px", fontSize: large ? 10 : 7 }}>Send →</span>
            <span style={{ border: `1px solid ${p.ink}33`, borderRadius: 999, padding: large ? "7px 18px" : "4px 11px", fontSize: large ? 10 : 7 }}>Vaults</span>
          </div>
        </div>
        <div style={{ fontSize: large ? 8 : 6, color: p.muted, marginTop: 8, fontFamily: "monospace" }}>◆ metal card · 4.9% APY · instant rails</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FlatDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col justify-center p-[9%]">
          <div style={{ background: p.accent, color: "#fff", fontSize: large ? 9 : 6.5, fontWeight: 700, padding: "3px 8px", width: "fit-content" }}>FLAT · 2D · HONEST</div>
          <div style={{ fontWeight: 700, fontSize: large ? 28 : 16, marginTop: 8, lineHeight: 1.05 }}>Color does<br />the talking.</div>
          <div className="flex gap-2" style={{ marginTop: 10 }}>
            <span style={{ background: p.ink, color: "#fff", padding: large ? "7px 16px" : "4px 10px", fontSize: large ? 10 : 7, fontWeight: 700 }}>Start</span>
            <span style={{ background: p.accent2, color: "#fff", padding: large ? "7px 16px" : "4px 10px", fontSize: large ? 10 : 7, fontWeight: 700 }}>Tour</span>
          </div>
        </div>
        <div className="grid grid-rows-3">
          <div style={{ background: p.accent }} /><div style={{ background: p.accent2 }} /><div style={{ background: p.ink }} />
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FluentDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ background: `linear-gradient(140deg, ${p.accent}26, transparent 55%), ${p.bg}` }}>
        <div style={{ background: "#ffffffcc", backdropFilter: "blur(18px)", border: "1px solid #ffffff", borderRadius: 4, boxShadow: "0 12px 32px rgba(0,120,212,0.18)", padding: large ? "18px 22px" : "11px 13px", maxWidth: large ? 340 : 210 }}>
          <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.2em", color: p.accent }}>ACRYLIC · LIGHT · DEPTH</div>
          <div style={{ fontWeight: 600, fontSize: large ? 22 : 13, marginTop: 6 }}>Calm enterprise clarity.</div>
          <div style={{ marginTop: 10, height: 4, background: `${p.ink}12` }}><div style={{ width: "64%", height: "100%", background: p.accent }} /></div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FrutigerAeroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center text-center" style={{ background: `radial-gradient(circle at 50% 120%, ${p.accent2}55, transparent 60%), linear-gradient(180deg, #fff, ${p.bg})` }}>
        <div className="flex gap-2">
          {["◍", "◎", "◍"].map((g, i) => (
            <span key={i} style={{ width: large ? 44 : 26, height: large ? 44 : 26, borderRadius: "50%", background: `linear-gradient(145deg, #fff, ${p.accent2}88)`, border: "1px solid #ffffff", boxShadow: "0 6px 16px rgba(0,166,126,0.35)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#0B3B39" }}>{g}</span>
          ))}
        </div>
        <div style={{ fontWeight: 700, fontSize: large ? 26 : 15, marginTop: 8 }}>Dewy optimism 2004.</div>
        <div style={{ color: p.muted, fontSize: large ? 10 : 7 }}>gloss · water · glass fish · hope</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GeistMinimalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[7%]">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "monospace", fontSize: large ? 9 : 6.5, color: p.muted }}><span>▲ vercel/geist</span><span style={{ border: `1px solid ${p.ink}22`, borderRadius: 999, padding: "2px 8px" }}>● Ready</span></div>
        <div className="flex flex-1 flex-col items-start justify-center">
          <div style={{ fontWeight: 600, fontSize: large ? 34 : 19, letterSpacing: "-0.04em" }}>Ship<span style={{ color: p.accent }}>.</span></div>
          <div style={{ color: p.muted, fontSize: large ? 11 : 7.5, marginTop: 4 }}>Razor-thin · mono precision · zero chrome</div>
        </div>
        <div style={{ borderTop: `1px solid ${p.ink}14`, paddingTop: 8, fontFamily: "monospace", fontSize: large ? 8 : 6, color: p.muted }}>$ deploy —prod · 38s · 100/100</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function GothicVictorianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center text-center px-[10%]" style={{ background: `radial-gradient(circle at 50% 0%, ${p.accent}44, transparent 55%)` }}>
        <div style={{ border: `1px solid ${p.accent2}88`, borderRadius: "50% 50% 0 0", padding: large ? "18px 26px 14px" : "11px 15px 9px" }}>
          <div style={{ fontSize: large ? 10 : 7, letterSpacing: "0.35em", color: p.accent2 }}>❦ EST · 1888 ❦</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17, lineHeight: 1.15, marginTop: 4 }}>Haunted<br />elegance.</div>
        </div>
        <div style={{ color: p.muted, fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: large ? 10 : 7, marginTop: 8 }}>burgundy wax · iron lace · candle smoke</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function KawaiiPopPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ backgroundImage: `radial-gradient(${p.accent}33 2px, transparent 2.5px)`, backgroundSize: "20px 20px" }}>
        <div style={{ background: p.surface, border: `3px solid ${p.ink}`, borderRadius: 24, boxShadow: `4px 4px 0 ${p.accent}`, padding: large ? "18px 22px" : "11px 13px", textAlign: "center", transform: "rotate(-2deg)" }}>
          <div style={{ fontSize: large ? 14 : 9 }}>🌸 🎀 🧁</div>
          <div style={{ fontWeight: 800, fontSize: large ? 26 : 15, marginTop: 4 }}>cute overload!</div>
          <div style={{ background: p.accent, color: "#fff", borderRadius: 999, fontWeight: 800, fontSize: large ? 10 : 7, padding: large ? "7px 18px" : "4px 11px", marginTop: 8 }}>★ KAWAII →</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MaterialExpressivePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center gap-2 px-[9%]">
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: p.accent, color: "#fff", borderRadius: "16px 16px 16px 4px", padding: large ? "10px 18px" : "6px 11px", fontWeight: 700, fontSize: large ? 12 : 8 }}>Expressive</span>
          <span style={{ background: p.accent2, borderRadius: "16px 16px 4px 16px", padding: large ? "10px 18px" : "6px 11px", fontWeight: 700, fontSize: large ? 12 : 8 }}>Springy ♪</span>
        </div>
        <div style={{ background: p.surface, borderRadius: 20, padding: large ? 12 : 8, fontSize: large ? 10 : 7, color: p.muted }}>Tonal color · big shapes · playful motion · FAB +</div>
        <div style={{ alignSelf: "flex-end", width: large ? 46 : 30, height: large ? 46 : 30, borderRadius: 16, background: p.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 20 : 13 }}>＋</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function McBlingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center text-center" style={{ background: `linear-gradient(180deg, #fff, ${p.bg})` }}>
        <div style={{ fontSize: large ? 10 : 7, letterSpacing: "0.3em", color: p.accent }}>✦ ✦ JUICY ✦ ✦</div>
        <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 36 : 20, lineHeight: 1, marginTop: 4 }}>Glamour<br /><span style={{ color: p.accent }}>heist.</span></div>
        <div style={{ border: `1.5px solid ${p.accent2}`, borderRadius: 999, padding: large ? "7px 20px" : "4px 12px", fontSize: large ? 10 : 7, fontWeight: 700, marginTop: 10, boxShadow: `0 0 18px ${p.accent2}88` }}>RHINESTONES →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PolarisCommercePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[7%]">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, color: p.muted }}><span>★ SHOPIFY POLARIS</span><span>Cart (2)</span></div>
        <div className="grid grid-cols-3 gap-2" style={{ marginTop: 8 }}>
          {[["Knit", "$48"], ["Lamp", "$129"], ["Chair", "$349"]].map((x) => (
            <div key={x[0]} style={{ border: `1px solid ${p.ink}1c`, borderRadius: 8, padding: large ? 8 : 5, background: p.surface }}>
              <div style={{ height: large ? 40 : 24, borderRadius: 6, background: `${p.accent}22` }} />
              <div style={{ fontWeight: 700, fontSize: large ? 10 : 7, marginTop: 4 }}>{x[0]}</div>
              <div style={{ fontSize: large ? 9 : 6.5, color: p.muted }}>{x[1]} ★★★★★</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", background: p.accent, color: "#fff", textAlign: "center", borderRadius: 8, padding: large ? 10 : 6, fontWeight: 700, fontSize: large ? 11 : 7.5 }}>Checkout →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SolarpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[9%]">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: large ? 52 : 32, height: large ? 52 : 32, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, #fff8, transparent), ${p.accent2}`, boxShadow: `0 0 24px ${p.accent2}99` }} />
          <div>
            <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16, lineHeight: 1.05 }}>Sunlit<br />abundance.</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, fontSize: large ? 9 : 6.5 }}>
          {[["+212%", "solar"], ["98%", "green"], ["0", "carbon"]].map((s) => (
            <span key={s[1]} style={{ background: p.surface, border: `1px solid ${p.accent}55`, borderRadius: 999, padding: large ? "5px 12px" : "3px 8px" }}><b>{s[0]}</b> {s[1]}</span>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function Web3CryptoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[8%]">
        <div style={{ borderRadius: 16, padding: large ? 16 : 10, background: `linear-gradient(135deg, ${p.surface}, #0D1424)`, border: `1px solid ${p.accent}55`, boxShadow: `0 0 32px ${p.accent}33` }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, color: p.muted, fontFamily: "monospace" }}><span>◈ 0x7f…9a2c</span><span style={{ color: p.accent }}>● mainnet</span></div>
          <div style={{ fontSize: large ? 30 : 18, fontWeight: 700, marginTop: 6 }}>4.281 <span style={{ fontSize: large ? 14 : 9, color: p.muted }}>ETH</span></div>
          <div style={{ fontSize: large ? 10 : 7, color: p.accent }}>+$1,204.88 (24h) ↗</div>
        </div>
        <div className="flex gap-2" style={{ marginTop: 10 }}>
          <span style={{ flex: 1, textAlign: "center", background: p.accent, color: "#060A14", fontWeight: 700, borderRadius: 10, padding: large ? 8 : 5, fontSize: large ? 10 : 7 }}>Swap</span>
          <span style={{ flex: 1, textAlign: "center", border: `1px solid ${p.ink}33`, borderRadius: 10, padding: large ? 8 : 5, fontSize: large ? 10 : 7 }}>Bridge</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
