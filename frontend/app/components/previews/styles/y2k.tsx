import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Y2KPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const chromeText: React.CSSProperties = {
    fontFamily: p.display,
    fontWeight: 900,
    letterSpacing: "0.03em",
    lineHeight: 0.95,
    background: `linear-gradient(180deg, ${p.ink} 0%, ${p.muted} 36%, ${p.ink} 50%, ${p.accent} 63%, ${p.ink} 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    filter: `drop-shadow(0 0 ${large ? 22 : 12}px ${p.accent}66)`,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* starfield + sparkle overlay (§14) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${p.ink} 1px, transparent 1.3px), radial-gradient(${p.accent} 1px, transparent 1.3px)`,
            backgroundSize: large ? "26px 26px, 52px 52px" : "18px 18px, 36px 36px",
            opacity: 0.32,
          }}
        />
        {/* lens flares + space glows */}
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 32% at 50% 118%, ${p.accent2}44, transparent 70%), radial-gradient(ellipse 46% 30% at 82% -6%, ${p.accent}33, transparent 70%), radial-gradient(ellipse 40% 26% at 12% 8%, ${p.accent2}2e, transparent 70%)` }} />
        <div className="absolute" style={{ left: "8%", right: "8%", top: large ? 118 : 72, height: 1, background: `linear-gradient(90deg, transparent, ${p.ink}aa, ${p.accent}, ${p.ink}aa, transparent)`, opacity: 0.7 }} />

        {/* bubble cluster */}
        {[
          { l: "9%", t: "22%", s: large ? 30 : 16 },
          { l: "84%", t: "26%", s: large ? 38 : 20 },
          { l: "74%", t: "66%", s: large ? 24 : 13 },
        ].map((b, i) => (
          <span
            key={i}
            className="pv-float"
            style={{
              position: "absolute",
              left: b.l,
              top: b.t,
              width: b.s,
              height: b.s,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 28%, ${p.ink}ee 0%, ${p.accent}55 42%, transparent 72%)`,
              border: `1px solid ${p.ink}88`,
              boxShadow: `0 0 14px ${p.accent}55, inset 0 1px 0 ${p.ink}aa`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        {/* chrome bubble nav */}
        <div className="relative z-10" style={{ padding: large ? "14px 18px 0" : "8px 10px 0" }}>
          <div
            className="flex items-center justify-between"
            style={{
              borderRadius: 999,
              background: `${p.surface}cc`,
              border: `1px solid ${p.ink}44`,
              boxShadow: `0 0 18px ${p.accent}33, inset 0 1px 0 ${p.ink}55`,
              padding: large ? "7px 8px 7px 12px" : "4px 5px 4px 8px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center" style={{ gap: large ? 8 : 5 }}>
              <span style={{ width: large ? 18 : 11, height: large ? 18 : 11, borderRadius: "50%", background: `linear-gradient(145deg, ${p.ink}, ${p.accent} 55%, ${p.accent2})`, boxShadow: `0 0 10px ${p.accent}88, inset 0 1px 0 ${p.ink}` }} />
              <span style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 11 : 7, letterSpacing: "0.18em", color: p.ink }}>NOVA·99</span>
            </div>
            <div className="flex items-center" style={{ gap: large ? 14 : 8, fontSize: large ? 9.5 : 6, letterSpacing: "0.16em", color: p.muted, fontWeight: 700 }}>
              <span>PODS</span>
              <span style={{ color: p.ink, textShadow: `0 0 10px ${p.accent}` }}>LOOKBOOK</span>
              {large && <span>PARTY</span>}
            </div>
            <span style={{ borderRadius: 999, padding: large ? "6px 14px" : "3px 9px", fontSize: large ? 9.5 : 6, fontWeight: 800, letterSpacing: "0.12em", color: p.bg, background: `linear-gradient(180deg, ${p.ink}, ${p.muted} 55%, ${p.ink})`, boxShadow: `0 0 14px ${p.accent}77, inset 0 1px 0 ${p.ink}`, border: `1px solid ${p.ink}88` }}>
              ✧ SHOP
            </span>
          </div>
        </div>

        {/* glossy hero type */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center" style={{ padding: large ? "10px 28px 4px" : "6px 14px 2px" }}>
          <div style={{ color: p.accent2, fontSize: large ? 10.5 : 6.5, letterSpacing: "0.42em", fontWeight: 700, textShadow: `0 0 12px ${p.accent2}` }}>
            ✧ EST · 1999 ✧
          </div>
          <h2 style={{ ...chromeText, fontSize: large ? 54 : 28, margin: large ? "8px 0 2px" : "4px 0 1px" }}>
            FUTURE
          </h2>
          <h2 style={{ ...chromeText, fontSize: large ? 54 : 28, margin: 0 }}>
            POP⋆
          </h2>
          <p style={{ color: p.muted, fontSize: large ? 12.5 : 7, margin: large ? "10px 0 0" : "5px 0 0", maxWidth: large ? 420 : 240, lineHeight: 1.5 }}>
            Frosted pods, liquid chrome and starlight — beauty-tech for the next millennium.
          </p>
          <div className="flex items-center justify-center" style={{ gap: large ? 10 : 6, marginTop: large ? 14 : 8 }}>
            <span style={{ borderRadius: 999, padding: large ? "9px 22px" : "5px 13px", fontSize: large ? 10.5 : 6.5, fontWeight: 800, letterSpacing: "0.14em", color: p.bg, background: `linear-gradient(180deg, ${p.ink} 0%, ${p.muted} 52%, ${p.ink} 100%)`, border: `1px solid ${p.ink}`, boxShadow: `0 0 20px ${p.accent}88, inset 0 1px 0 ${p.ink}` }}>
              ENTER THE POD
            </span>
            <span style={{ borderRadius: 999, padding: large ? "9px 20px" : "5px 12px", fontSize: large ? 10.5 : 6.5, fontWeight: 800, letterSpacing: "0.14em", color: p.accent, border: `1px solid ${p.accent}`, boxShadow: `0 0 16px ${p.accent}55, inset 0 0 12px ${p.accent}22`, background: `${p.surface}99` }}>
              ✧ LOOKBOOK
            </span>
          </div>

          {large && (
            <div className="flex items-stretch justify-center" style={{ gap: 10, marginTop: 16, width: "100%", maxWidth: 520 }}>
              {[
                { k: "CHROME GLOSS", v: "Liquid shine", s: "✧" },
                { k: "POD 02", v: "Frosted + glow", s: "◍" },
                { k: "STARFIELD", v: "Twinkle loop", s: "⋆" },
              ].map((c) => (
                <div key={c.k} style={{ flex: 1, borderRadius: 20, background: `${p.surface}b8`, border: `1px solid ${p.ink}44`, boxShadow: `0 0 20px ${p.accent}2e, inset 0 1px 0 ${p.ink}55`, padding: "10px 12px", textAlign: "left", backdropFilter: "blur(8px)" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: p.bg, background: `linear-gradient(145deg, ${p.ink}, ${p.accent} 60%, ${p.accent2})`, boxShadow: `0 0 10px ${p.accent2}88` }}>{c.s}</div>
                  <div style={{ marginTop: 8, fontSize: 8.5, letterSpacing: "0.2em", fontWeight: 800, color: p.accent }}>{c.k}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: p.ink, marginTop: 2 }}>{c.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* star CTA footer */}
        <div className="relative z-10 flex items-center justify-between" style={{ margin: large ? "0 18px 14px" : "0 10px 8px", borderRadius: 999, padding: large ? "7px 8px 7px 14px" : "4px 5px 4px 9px", background: `${p.surface}cc`, border: `1px solid ${p.accent}55`, boxShadow: `0 0 18px ${p.accent}44, inset 0 1px 0 ${p.ink}44`, backdropFilter: "blur(8px)" }}>
          <span style={{ fontSize: large ? 9.5 : 6, letterSpacing: "0.2em", fontWeight: 700, color: p.muted }}>
            ⋆ <span style={{ color: p.ink }}>MIDNIGHT DROP 001</span> ⋆ {large ? "FREE ORBITAL SHIPPING" : ""}
          </span>
          <span style={{ borderRadius: 999, padding: large ? "6px 16px" : "3px 10px", fontSize: large ? 9.5 : 6, fontWeight: 800, letterSpacing: "0.14em", color: p.bg, background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})`, boxShadow: `0 0 16px ${p.accent2}88` }}>
            SHOP ⋆ →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
