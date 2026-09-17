import type { ReactNode } from "react";
import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 2 — Brutalist family (10). Borders, hard shadows, raw structure. */
function HardCard({ large, bg, children }: { large?: boolean; bg: string; children: ReactNode }) {
  return (
    <div style={{ background: bg, border: `2.5px solid #111`, boxShadow: large ? "5px 5px 0 #111" : "3px 3px 0 #111", padding: large ? 12 : 7 }}>
      {children}
    </div>
  );
}

export function BrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ textAlign: "left" }}>
        <div style={{ borderBottom: `3px solid ${p.ink}`, padding: large ? "8px 14px" : "5px 8px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: large ? 10 : 7, fontFamily: p.body }}>
          <strong style={{ fontFamily: p.body }}>index.html</strong>
          <span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>home</a>
            <span style={{ color: p.muted }}> / </span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>section</a>
            <span style={{ color: p.muted }}> / </span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>page</a>
          </span>
        </div>
        <div style={{ padding: large ? "12px 14px" : "7px 8px", background: p.surface, borderBottom: `2px solid ${p.ink}` }}>
          <p style={{ fontFamily: p.display, fontSize: large ? 30 : 17, margin: 0, fontWeight: 700, color: p.ink, lineHeight: 1.1 }}>Welcome to my homepage</p>
          <p style={{ fontFamily: p.body, fontSize: large ? 11 : 7, margin: large ? "6px 0 8px" : "4px 0 6px", color: p.ink }}>Made with a text editor. Best viewed at 800×600. <a style={{ color: p.accent, textDecoration: "underline" }}>about this site</a></p>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <button type="button" style={{ fontFamily: p.body, fontSize: large ? 11 : 7.5, background: "#C0C0C0", color: "#111", border: "2px outset #E8E6E1", borderRadius: 0, padding: large ? "5px 16px" : "3px 10px", cursor: "pointer" }}>Submit query</button>
            <span style={{ fontFamily: p.body, fontSize: large ? 10 : 7, color: p.accent2, fontWeight: 700 }}>[ under construction ]</span>
          </div>
        </div>
        <div style={{ padding: large ? "8px 14px" : "5px 8px" }}>
          <table style={{ borderCollapse: "collapse", fontSize: large ? 10 : 7, fontFamily: p.body, color: p.ink }}>
            <tbody>
              <tr>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px" }}>est. 1997</td>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px" }}>visitors: 004821</td>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px", color: p.muted }}>Home / Section / Page</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function NeoBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[7%]">
        <span style={{ background: p.accent2, color: "#fff", border: "2.5px solid #111", boxShadow: "3px 3px 0 #111", fontSize: large ? 9 : 6.5, fontWeight: 800, padding: "3px 10px", width: "fit-content", transform: "rotate(-2deg)" }}>★ NEW DROP</span>
        <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, lineHeight: 1, marginTop: 8 }}>LOUD.<br />PROUD.<br /><span style={{ background: p.accent, padding: "0 8px", border: "2.5px solid #111" }}>SHIPPED.</span></div>
        <div className="flex gap-2" style={{ marginTop: large ? 12 : 7 }}>
          <HardCard large={large} bg={p.accent}><span style={{ fontWeight: 800, fontSize: large ? 10 : 7 }}>GET IT →</span></HardCard>
          <HardCard large={large} bg="#fff"><span style={{ fontWeight: 800, fontSize: large ? 10 : 7 }}>DOCS</span></HardCard>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PlayfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center" style={{ padding: large ? "24px 48px" : "14px 26px", backgroundImage: `radial-gradient(${p.accent}44 1.6px, transparent 1.7px), radial-gradient(${p.accent2}44 1.6px, transparent 1.7px)`, backgroundSize: "22px 22px, 36px 36px", backgroundPosition: "0 0, 10px 12px" }}>
        <div style={{ position: "relative", background: p.surface, border: `3px solid ${p.ink}`, borderRadius: 20, boxShadow: `5px 5px 0 ${p.ink}`, padding: large ? "20px 22px 18px" : "12px 13px 11px", maxWidth: large ? 400 : 230, transform: "rotate(-1.5deg)" }}>
          <span style={{ position: "absolute", top: large ? -14 : -10, right: large ? 18 : 12, background: p.accent2, color: "#fff", border: `2.5px solid ${p.ink}`, borderRadius: 999, padding: large ? "4px 14px" : "2px 9px", fontSize: large ? 10 : 6.5, fontWeight: 800, letterSpacing: "0.06em", transform: "rotate(5deg)", boxShadow: `3px 3px 0 ${p.ink}` }}>★ STICKER</span>
          <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 27 : 16, lineHeight: 1.02, letterSpacing: "-0.01em" }}>Squishy but<br /><span style={{ color: p.accent, textDecoration: "underline wavy", textDecorationThickness: 3, textUnderlineOffset: 4 }}>sturdy!</span></div>
          <div style={{ color: p.muted, fontSize: large ? 10.5 : 7, marginTop: large ? 8 : 5, fontWeight: 600 }}>Plush frames, candy fills, ink outlines.</div>
          <div className="flex items-center gap-2" style={{ marginTop: large ? 12 : 8 }}>
            <span style={{ background: p.accent, color: "#fff", border: `2.5px solid ${p.ink}`, borderRadius: 999, padding: large ? "7px 20px" : "4px 12px", fontSize: large ? 10.5 : 7, fontWeight: 800, boxShadow: `3px 3px 0 ${p.ink}` }}>BOING →</span>
            <span className="pv-float" style={{ background: p.accent2, color: "#fff", border: `2.5px solid ${p.ink}`, borderRadius: "50%", width: large ? 32 : 20, height: large ? 32 : 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 15 : 9 }}>◍</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CorporateBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[5%]">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "3px solid #141414", paddingBottom: 6 }}>
          <strong style={{ fontSize: large ? 16 : 10 }}>GLOBEX INDUSTRIES</strong>
          <span style={{ fontSize: large ? 8 : 6, letterSpacing: "0.15em" }}>ANNUAL REPORT — FY26</span>
        </div>
        <div className="grid grid-cols-3 gap-2" style={{ marginTop: 8 }}>
          {[["REV", "$4.8B", "+12%"], ["OP-EX", "$2.1B", "−4%"], ["HC", "8,412", "+306"]].map((s) => (
            <div key={s[0]} style={{ border: "2px solid #141414", padding: large ? 8 : 5 }}>
              <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.15em", color: p.muted }}>{s[0]}</div>
              <div style={{ fontWeight: 800, fontSize: large ? 16 : 10, fontVariantNumeric: "tabular-nums" }}>{s[1]}</div>
              <div style={{ fontSize: large ? 8 : 5.5, color: p.accent, fontWeight: 700 }}>{s[2]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", fontSize: large ? 8 : 5.5, color: p.muted, fontFamily: "monospace" }}>AUDITED · ISO 9001 · §4.2 COMPLIANT</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EditorialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div style={{ background: p.ink, color: p.surface, fontSize: large ? 8 : 6, padding: "4px 10px", letterSpacing: "0.2em" }}>● BREAKING — EDITION 482</div>
        <div style={{ padding: large ? "10px 14px" : "6px 9px" }}>
          <div style={{ color: p.accent, fontWeight: 800, fontSize: large ? 9 : 6.5, letterSpacing: "0.15em" }}>FRONT PAGE</div>
          <div style={{ fontFamily: p.display, color: p.ink, fontWeight: 900, fontSize: large ? 36 : 20, lineHeight: 0.95, letterSpacing: "-0.01em" }}>CITY VOTES<br />TO GO LOUD</div>
          <div style={{ borderTop: `3px solid ${p.ink}`, marginTop: 8, paddingTop: 6, fontSize: large ? 9 : 6.5 }}>Council backs poster-scale headlines in 7–2 decision →</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MinimalBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center p-[8%]">
        <div style={{ border: "2px solid #101010", padding: large ? 26 : 14, width: "100%", maxWidth: large ? 420 : 240 }}>
          <div style={{ fontSize: large ? 9 : 6, fontFamily: "monospace", color: p.muted }}>EXHIBIT — 01</div>
          <div style={{ fontSize: large ? 30 : 17, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 6 }}>One frame.<br />One idea.</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: large ? 9 : 6, fontFamily: "monospace" }}>
            <span>STUDIO KA</span><span>→</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ColorfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div style={{ background: p.bg, padding: large ? 12 : 7, borderBottom: `4px solid ${p.ink}` }}>
          <div style={{ display: "inline-block", background: p.surface, color: p.ink, border: `3px solid ${p.ink}`, borderRadius: 12, boxShadow: `6px 6px 0 ${p.ink}`, padding: large ? "8px 14px" : "5px 9px", transform: "rotate(-1deg)" }}>
            <span style={{ fontFamily: p.display, fontSize: large ? 18 : 11 }}>FESTIVAL!</span>
          </div>
        </div>
        <div className="flex flex-1 gap-2 p-[5%]" style={{ background: p.accent }}>
          {[p.surface, p.accent2, "#00E5FF"].map((c, i) => (
            <div key={c} style={{ flex: 1, background: c, color: p.ink, border: `3px solid ${p.ink}`, borderRadius: 12, boxShadow: `6px 6px 0 ${p.ink}`, transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: large ? 11 : 7 }}>{["AUG", "SEP", "OCT"][i]}</div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function AntiDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="h-full overflow-hidden p-[5%]" style={{ fontFamily: p.body }}>
        <div style={{ fontFamily: p.display, fontSize: large ? 22 : 13 }}><i>welcome 2 my homepage</i> ☠</div>
        <div style={{ marginTop: 4, fontSize: large ? 10 : 7 }}><a style={{ color: p.accent, textDecoration: "underline" }}>click here</a> for <span className="pv-blink">NEW STUFF!!!</span> <span style={{ background: "#FFFF00" }}>updated 1998</span></div>
        <fieldset style={{ border: "2px outset #999", marginTop: 8, fontSize: large ? 9 : 6.5 }}>
          <legend>sign my guestbook</legend>
          <span style={{ border: "2px outset #ddd", background: "#ddd", padding: "2px 10px" }}>OK</span>
          <span style={{ float: "right", color: p.accent2 }}>visitors: 0001337</span>
        </fieldset>
        <div className="overflow-hidden whitespace-nowrap" style={{ fontSize: large ? 10 : 7, color: "#008000", marginTop: 6 }}><span className="pv-marquee" style={{ display: "inline-block" }}>~~~ best viewed in netscape navigator ~~~&nbsp;</span></div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PostBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[5%]">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, fontFamily: "monospace", color: p.muted }}>
          <span>STUDIO® — INDEX</span><span>AVAILABLE Q3 ●</span>
        </div>
        {[["Brand system", "FIN", p.accent], ["Exhibition", "BER", p.ink], ["Type design", "AMS", p.ink]].map((r) => (
          <div key={r[0] as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1.5px solid #1B1B1B", padding: large ? "8px 12px" : "5px 8px", marginTop: 6, background: "#fff", boxShadow: "3px 3px 0 #1B1B1B" }}>
            <span style={{ fontWeight: 650, fontSize: large ? 12 : 8 }}>{r[0]}</span>
            <span style={{ fontFamily: "monospace", fontSize: large ? 9 : 6.5, color: r[2] as string }}>{r[1]} →</span>
          </div>
        ))}
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function IndustrialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div style={{ display: "flex", justifyContent: "space-between", padding: large ? "8px 12px" : "5px 8px", borderBottom: "2px solid #555" }}>
          <span style={{ fontFamily: "Anton, sans-serif", fontSize: large ? 15 : 9, letterSpacing: "0.06em" }}>HEAVY<span style={{ color: p.accent }}>{"//"}</span>SYS</span>
          <span style={{ fontFamily: "monospace", fontSize: large ? 8 : 6, color: "#7CFF6B" }}>● NOMINAL</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 p-[5%]">
          {[["LOAD", "68%"], ["TEMP", "42°C"], ["TORQ", "9.1k"]].map((g, i) => (
            <div key={g[0]} style={{ border: "2px solid #555", padding: large ? 8 : 5 }}>
              <div style={{ fontSize: large ? 7 : 5, fontFamily: "monospace", color: p.muted }}>SPEC · {g[0]}</div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: large ? 20 : 12, color: p.accent }}>{g[1]}</div>
              <div style={{ background: "#111", height: 5, marginTop: 4 }}><div style={{ background: i === 1 ? p.accent2 : p.accent, width: i === 1 ? "42%" : "68%", height: "100%" }} /></div>
            </div>
          ))}
        </div>
        <div style={{ height: large ? 10 : 7, background: `repeating-linear-gradient(45deg, ${p.accent} 0 8px, #111 8px 16px)` }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
