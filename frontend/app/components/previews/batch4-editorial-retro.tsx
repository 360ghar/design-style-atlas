import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 4 — Editorial & Print + Retro & Internet (20). */
export function EditorialMagazinePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="mx-auto flex h-full max-w-[86%] flex-col justify-center">
        <div style={{ textAlign: "center", fontSize: large ? 9 : 6.5, letterSpacing: "0.3em", color: p.muted }}>— THE MERIDIAN · JUNE —</div>
        <div style={{ fontFamily: p.display, fontSize: large ? 34 : 19, textAlign: "center", lineHeight: 1.05, marginTop: 4 }}>Dress Like the<br /><i>Future</i> Remembers</div>
        <div style={{ borderTop: `3px double ${p.ink}`, marginTop: 8, paddingTop: 6, display: "flex", gap: 8, fontSize: large ? 8 : 5.5, color: p.muted }}>
          <span style={{ color: p.accent, fontWeight: 800 }}>COVER STORY</span><span>Fashion week dispatch, p. 42 →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function NewspaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col px-[6%] py-[5%]">
        <div style={{ textAlign: "center", fontFamily: "Times, serif", fontWeight: 900, fontSize: large ? 22 : 13, letterSpacing: "0.02em" }}>The Daily Ledger</div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "3px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", fontSize: large ? 7 : 5, padding: "3px 0", marginTop: 4, fontFamily: "monospace" }}>
          <span>THURSDAY · 72 PAGES</span><span>PRICE: ONE COIN</span><span>☀ 21°C</span>
        </div>
        <div className="grid grid-cols-3 gap-2" style={{ marginTop: 6, fontFamily: "Georgia, serif" }}>
          {[["Markets rally", "Stocks closed at record highs as…"], ["City hall vote", "The council agreed 7–2…"], ["Weather", "Sun through Friday…"]].map((s) => (
            <div key={s[0]} style={{ borderRight: "1px solid #1A1A1A33", paddingRight: 6 }}>
              <div style={{ fontWeight: 700, fontSize: large ? 10 : 6.5 }}>{s[0]}</div>
              <div style={{ fontSize: large ? 8 : 5.5, color: "#444" }}>{s[1]}</div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FashionEditorialPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2">
        <div style={{ background: "linear-gradient(170deg, #8A847B, #3A3733 70%)", position: "relative" }}>
          <div style={{ position: "absolute", bottom: 10, left: 10, color: "#fff", fontSize: large ? 8 : 5.5, letterSpacing: "0.2em" }}>LOOK 12 — WOOL, SILK</div>
          <div style={{ position: "absolute", top: "38%", width: "100%", textAlign: "center", color: "#ffffffcc", fontSize: large ? 40 : 24 }}>◍</div>
        </div>
        <div className="flex flex-col justify-center p-[10%]">
          <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em", color: p.muted }}>AUTUMN — I</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17, lineHeight: 1.05 }}>Silence,<br />tailored.</div>
          <span style={{ border: "1px solid #1C1B1A", fontSize: large ? 8 : 5.5, letterSpacing: "0.2em", padding: large ? "8px 18px" : "5px 11px", marginTop: 10, width: "fit-content" }}>BOOK FITTING</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function PosterInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-between p-[6%]" style={{ background: "#E30613", color: "#fff" }}>
        <div style={{ border: "2px solid #fff", padding: large ? 12 : 7 }}>
          <div style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.3em" }}>ONE NIGHT ONLY</div>
          <div style={{ fontFamily: "Anton, sans-serif", fontSize: large ? 40 : 22, lineHeight: 0.95 }}>SEE THE<br />FUTURE</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", background: "#111", padding: large ? "8px 12px" : "5px 8px", fontSize: large ? 9 : 6.5, fontWeight: 800 }}>
          <span>AUG 24 · HALL B</span><span style={{ background: "#FFD802", color: "#111", padding: "1px 8px" }}>$20</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SwissPosterPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full p-[7%]">
        <div className="absolute inset-y-0 right-0 w-[30%]" style={{ background: p.accent }} />
        <div style={{ fontSize: large ? 9 : 6, fontWeight: 700, letterSpacing: "0.15em" }}>TONHALLE · 09.10</div>
        <div style={{ fontWeight: 800, fontSize: large ? 64 : 34, lineHeight: 0.9, letterSpacing: "-0.04em", marginTop: 4 }}>9<span style={{ color: p.accent }}>.</span></div>
        <div style={{ background: "#111", height: large ? 12 : 8, width: "46%", marginTop: 6 }} />
        <div style={{ fontSize: large ? 9 : 6, marginTop: 6, maxWidth: "55%" }}>Sinfoniekonzert<br />Leitung — M. Keller<br />20:00 Uhr</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function BauhausPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full items-center overflow-hidden px-[8%]">
        <div style={{ position: "absolute", left: "-4%", top: "-14%", width: large ? 150 : 90, height: large ? 150 : 90, borderRadius: "50%", background: p.accent }} />
        <div style={{ position: "absolute", right: "6%", bottom: "-10%", width: 0, height: 0, borderLeft: `${large ? 70 : 42}px solid transparent`, borderRight: `${large ? 70 : 42}px solid transparent`, borderBottom: `${large ? 110 : 66}px solid ${p.accent2}` }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
            <span style={{ width: large ? 22 : 13, height: large ? 22 : 13, borderRadius: "50%", background: p.accent }} />
            <span style={{ width: 0, height: 0, borderLeft: `${large ? 11 : 7}px solid transparent`, borderRight: `${large ? 11 : 7}px solid transparent`, borderBottom: `${large ? 20 : 12}px solid ${p.accent2}` }} />
            <span style={{ width: large ? 20 : 12, height: large ? 20 : 12, background: "#E8B90F" }} />
          </div>
          <div style={{ fontFamily: p.display, fontSize: large ? 30 : 17 }}>form follows<br />function.</div>
          <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.25em", marginTop: 6 }}>DESSAU · 1925</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MemphisPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">
        <svg style={{ position: "absolute", top: "8%", left: "6%", width: "30%" }} viewBox="0 0 100 20"><path d="M0 10 Q 12 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="#222" strokeWidth="3" /></svg>
        <div style={{ position: "absolute", right: "8%", top: "14%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
          {Array.from({ length: 12 }).map((_, i) => <span key={i} style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: "50%", background: i % 3 ? p.accent : p.accent2 }} />)}
        </div>
        <div style={{ background: "#fff", border: "3px solid #222", padding: large ? "12px 26px" : "7px 15px", textAlign: "center", boxShadow: `6px 6px 0 ${p.accent}` }}>
          <div style={{ fontFamily: p.display, fontSize: large ? 22 : 13 }}>ciao, milano!</div>
          <div style={{ fontSize: large ? 9 : 6.5 }}>squiggles · terrazzo · 1981</div>
        </div>
        <div style={{ height: 8, width: "70%", marginTop: 10, background: "repeating-linear-gradient(90deg,#222 0 10px,#fff 10px 20px)", border: "2px solid #222" }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function Y2KPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center" style={{ background: "radial-gradient(circle at 50% 120%, #2B2E8C, #0A0A1F 70%)" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px", opacity: 0.25 }} />
        {[{ l: "12%", t: "18%" }, { l: "78%", t: "24%" }, { l: "66%", t: "72%" }].map((s, i) => (
          <span key={i} className="pv-float" style={{ position: "absolute", left: s.l, top: s.t, width: large ? 34 : 20, height: large ? 34 : 20, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, #ffffffcc, #00E5FF55 60%, transparent)", border: "1px solid #ffffff88", animationDelay: `${i}s` }} />
        ))}
        <div className="pv-chrome-text" style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: large ? 36 : 20, letterSpacing: "0.04em" }}>FUTURE</div>
        <div style={{ color: "#FF7AD9", fontSize: large ? 11 : 7, letterSpacing: "0.4em", textShadow: "0 0 12px #FF7AD9" }}>✧ EST · 1999 ✧</div>
        <span className="pv-flicker" style={{ marginTop: 10, border: "1px solid #00E5FF", color: "#00E5FF", borderRadius: 999, padding: large ? "7px 22px" : "4px 13px", fontSize: large ? 10 : 6.5, boxShadow: "0 0 18px #00E5FF66" }}>ENTER THE POD</span>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function RetroInternetPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[8%] text-center" style={{ background: "#FFF8DC", backgroundImage: "radial-gradient(#d8cf9f 1px, transparent 1px)", backgroundSize: "12px 12px" }}>
        <div style={{ fontFamily: "Times, serif", fontSize: large ? 24 : 14 }}>✧･ﾟ: * Sarah&rsquo;s Homepage *:･ﾟ✧</div>
        <div style={{ fontFamily: "Verdana", fontSize: large ? 9 : 6.5, marginTop: 6 }}>welcome 2 my corner of the web!! <a style={{ color: "#0000EE", textDecoration: "underline" }}>sign my guestbook</a></div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {[`★ new poem`, `♪ midi jukebox`, `my cat`].map((b) => (
            <span key={b} style={{ fontFamily: "Verdana", fontSize: large ? 8 : 5.5, background: "#C0C0C0", border: "2px outset #fff", padding: "3px 8px" }}>{b}</span>
          ))}
        </div>
        <div style={{ fontFamily: "monospace", fontSize: large ? 8 : 5.5, marginTop: 8 }}>visitors since &rsquo;97: <b>00482133</b> · best in 800×600 · no frames, we promise</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function WebcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[4%]">
        <div style={{ background: "#fff", border: "2px outset #dfdfdf", boxShadow: "4px 4px 0 rgba(0,0,0,.3)" }}>
          <div style={{ background: "linear-gradient(90deg,#000080,#1084d0)", color: "#fff", fontSize: large ? 9 : 6.5, padding: "3px 8px", display: "flex", justifyContent: "space-between" }}>
            <span>◉ welcome_to_the_web.html</span><span>_ □ ✕</span>
          </div>
          <div style={{ padding: large ? 10 : 6, fontSize: large ? 10 : 6.5, fontFamily: "Arial" }}>
            <a style={{ color: "#0000EE", textDecoration: "underline" }}>home</a> · <a style={{ color: "#551A8B", textDecoration: "underline" }}>directory</a> · <a style={{ color: "#0000EE", textDecoration: "underline" }}>view source</a>
            <div style={{ fontFamily: "Times, serif", fontSize: large ? 20 : 12, marginTop: 4 }}>Index of /feelings/</div>
          </div>
          <div style={{ background: "#C0C0C0", borderTop: "2px groove #fff", fontSize: large ? 8 : 5.5, padding: "3px 8px", display: "flex", justifyContent: "space-between" }}>
            <span>3 objects · 56.6k modem</span><span>14:02</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function DesktopUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full p-[5%]">
        <div className="absolute left-[6%] top-[10%] text-center" style={{ fontSize: large ? 9 : 6.5, color: "#fff" }}><div style={{ fontSize: large ? 26 : 16 }}>🖥</div>My PC</div>
        <div className="absolute left-[6%] top-[48%] text-center" style={{ fontSize: large ? 9 : 6.5, color: "#fff" }}><div style={{ fontSize: large ? 26 : 16 }}>🗑</div>Trash</div>
        <div style={{ position: "absolute", right: "8%", top: "14%", width: "58%", background: "#C0C0C0", border: "2px outset #fff", boxShadow: "5px 5px 0 rgba(0,0,0,.3)" }}>
          <div style={{ background: "linear-gradient(90deg,#000080,#1084d0)", color: "#fff", fontSize: large ? 9 : 6.5, padding: "3px 8px" }}>◉ readme.txt</div>
          <div style={{ padding: 8, fontSize: large ? 9 : 6.5, fontFamily: "Tahoma" }}>Double-click anything.<br />Everything is grabbable.<br /><br /><span style={{ border: "2px outset #fff", background: "#C0C0C0", padding: "2px 12px" }}>OK</span></div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function Windows95Preview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div className="flex-1 p-[5%]">
          <div style={{ width: large ? "72%" : "80%", background: "#C3C7CB", border: "2px outset #fff", boxShadow: "4px 4px 0 rgba(0,0,0,.3)" }}>
            <div style={{ background: "linear-gradient(90deg,#000080,#1084d0)", color: "#fff", fontSize: large ? 9 : 6.5, fontWeight: 700, padding: "3px 8px", display: "flex", justifyContent: "space-between" }}>
              <span>Setup — 42% complete</span><span>✕</span>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ fontSize: large ? 9 : 6.5, fontFamily: "Tahoma" }}>Copying files…</div>
              <div style={{ border: "2px inset #fff", background: "#fff", height: large ? 16 : 11, marginTop: 6 }}>
                <div style={{ background: "#000080", width: "42%", height: "100%" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                <span style={{ fontSize: large ? 9 : 6.5, border: "2px outset #fff", padding: "2px 14px", outline: "1px dotted #000", outlineOffset: -4 }}>Cancel</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#C3C7CB", borderTop: "2px outset #fff", display: "flex", alignItems: "center", gap: 6, padding: "4px 6px" }}>
          <span style={{ fontSize: large ? 9 : 6.5, fontWeight: 800, border: "2px outset #fff", padding: "2px 8px" }}>❖ Start</span>
          <span style={{ fontSize: large ? 8 : 5.5, border: "2px inset #fff", padding: "2px 8px", background: "#ddd" }}>◉ Setup</span>
          <span style={{ marginLeft: "auto", fontSize: large ? 8 : 5.5, border: "2px inset #fff", padding: "2px 8px" }}>14:02</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MacOSPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col">
        <div style={{ background: "#fff", borderBottom: "1px solid #999", display: "flex", gap: 10, padding: "4px 10px", fontSize: large ? 8 : 5.5, fontFamily: "Geneva, Verdana" }}>
          <span>🍎</span><strong>Finder</strong><span>File</span><span>Edit</span><span>View</span><span style={{ marginLeft: "auto" }}>Wed 2:04 PM ⌕</span>
        </div>
        <div className="flex-1 p-[5%]">
          <div style={{ background: "#F2F0EB", border: "1px solid #888", borderRadius: 6, boxShadow: "0 4px 14px rgba(0,0,0,.2)", overflow: "hidden" }}>
            <div style={{ background: "repeating-linear-gradient(0deg,#E8E6DF 0 2px,#D8D5CC 2px 3px)", padding: "5px 8px", fontSize: large ? 9 : 6.5, textAlign: "center", borderBottom: "1px solid #888" }}>◉ ◉ ◉&nbsp;&nbsp;Macintosh HD</div>
            <div style={{ display: "flex", gap: 10, padding: 10 }}>
              {[["📁", "System"], ["📁", "Games"], ["🗑", "Trash"]].map((f) => (
                <div key={f[1]} style={{ textAlign: "center", fontSize: large ? 9 : 6.5 }}><div style={{ fontSize: large ? 24 : 15 }}>{f[0]}</div>{f[1]}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function TerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="h-full p-[6%] font-mono" style={{ fontSize: large ? 11 : 7.5, lineHeight: 1.7 }}>
        <div><span style={{ color: "#6A9955" }}>visitor@design</span>:<span style={{ color: "#4DD8FF" }}>~</span>$ ./browse --style brutalism</div>
        <div>▸ loading specimens… <span style={{ color: "#FFB000" }}>██████</span>░░ 78%</div>
        <div>✓ 100 styles indexed in 0.04s</div>
        <div><span style={{ color: "#6A9955" }}>visitor@design</span>:<span style={{ color: "#4DD8FF" }}>~</span>$ <span className="pv-blink">▊</span></div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function HackerAestheticPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden p-[6%] font-mono" style={{ fontSize: large ? 10 : 7 }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, #00FF41 0 1px, transparent 1px 9px)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", color: "#FF003C" }}><span>[!] INTRUSION MAP — LIVE</span><span>THREAT: ELEVATED</span></div>
        <div style={{ marginTop: 6 }}>192.168.1.1 … <span style={{ color: "#fff" }}>BREACHED</span> ✓<br />10.0.0.42 …… <span style={{ color: "#fff" }}>TRACED</span> ✓<br />access_level: <span style={{ background: "#00FF41", color: "#000", padding: "0 6px" }}>ROOT</span></div>
        <div className="pv-flicker" style={{ marginTop: 8, border: "1px solid #00FF41", padding: large ? "6px 12px" : "4px 8px", width: "fit-content" }}>[ INITIATE COUNTERMEASURE ]</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function CyberpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]" style={{ background: "linear-gradient(160deg,#0A0A12 40%,#3B0A3B 75%,#00F0FF22)" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(90deg, #00F0FF33 0 1px, transparent 1px 26px)" }} />
        <div style={{ color: p.accent, fontSize: large ? 8 : 5.5, letterSpacing: "0.25em", fontWeight: 800 }}>⚠ NIGHT CITY · WANTED LVL 3</div>
        <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, lineHeight: 1, clipPath: "polygon(0 0,100% 0,96% 100%,0 100%)", background: "#FCEE0A", color: "#0A0A12", padding: "4px 10px", width: "fit-content", marginTop: 6 }}>CHROME UP</div>
        <div style={{ fontSize: large ? 9 : 6.5, color: "#00F0FF", marginTop: 6, fontFamily: "monospace" }}>電脳 · 高科技 · 低生活 — creds: ¥48,210</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7%]" style={{ transform: "skewX(-6deg)", marginLeft: "-4%" }}>
        <div style={{ background: p.accent, height: large ? 10 : 6, width: "60%" }} />
        <div style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 900, fontSize: large ? 34 : 19, lineHeight: 1, marginTop: 6 }}>VELOCITÀ<br />400 KM/H</div>
        <div style={{ fontSize: large ? 9 : 6.5, fontWeight: 700, letterSpacing: "0.15em", marginTop: 6 }}>MANIFESTO Nº 7 — SPEED IS SACRED »»</div>
        <div style={{ display: "flex", gap: 4, marginTop: 8 }}>{[40, 70, 100].map((w) => <span key={w} style={{ background: "#141414", height: large ? 8 : 5, width: `${w * (large ? 2.4 : 1.4)}px` }} />)}</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SciFiUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-3 gap-2 p-[5%] font-mono" style={{ fontSize: large ? 8 : 5.5 }}>
        {[["NAV", "◍ ORBIT LOCK", p.accent], ["HULL", "98.2% NOMINAL", "#7CFF6B"], ["WARN", "2 CAUTIONS", "#FFB300"]].map((c) => (
          <div key={c[0]} style={{ border: `1px solid ${p.accent}66`, padding: large ? 8 : 5, position: "relative", background: "#0A122088" }}>
            <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: `2px solid ${p.accent}`, borderLeft: `2px solid ${p.accent}` }} />
            <div style={{ color: p.muted }}>{c[0]} · SYS.{c[0]}</div>
            <div style={{ color: c[2] as string, fontWeight: 700, marginTop: 4 }}>{c[1]}</div>
            <div style={{ marginTop: 6, height: 22, border: `1px solid ${p.accent}44`, background: "repeating-linear-gradient(90deg,#4DD8FF22 0 2px,transparent 2px 5px)" }} />
          </div>
        ))}
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
