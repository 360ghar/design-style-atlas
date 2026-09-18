import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ParallaxPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const t = meta.preview;
  const pad = large ? 16 : 10;
  return (
    <Frame meta={meta} large={large}>
      <style>{`@keyframes px-mist{0%{transform:translateX(-8%)}50%{transform:translateX(8%)}100%{transform:translateX(-8%)}}@media (prefers-reduced-motion:reduce){.px-anim{animation:none!important}}`}</style>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: t.bg, color: t.ink, fontFamily: t.body }}
      >
        {/* sky + stars + sun */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg,${t.bg} 0%,${p.surface} 46%,${t.surface} 72%,${t.bg} 100%)` }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.7, backgroundImage: "radial-gradient(rgba(240,246,255,0.7) 1px,transparent 1px)", backgroundSize: large ? "22px 22px" : "14px 14px", maskImage: "linear-gradient(180deg,black 0%,transparent 45%)", WebkitMaskImage: "linear-gradient(180deg,black 0%,transparent 45%)" }} />
        <div aria-hidden style={{ position: "absolute", top: large ? 26 : 16, right: large ? 30 : 18, width: large ? 40 : 24, height: large ? 40 : 24, borderRadius: "50%", background: t.accent, boxShadow: `0 0 ${large ? 36 : 22}px ${t.accent}` }} />

        {/* layered depth nav */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${large ? 10 : 7}px ${pad}px` }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <span aria-hidden style={{ display: "grid", placeItems: "center", width: large ? 22 : 15, height: large ? 22 : 15, borderRadius: "50%", background: t.accent, color: t.bg, fontSize: large ? 12 : 8, fontWeight: 800 }}>▲</span>
            <span style={{ fontFamily: t.display, fontWeight: 800, fontSize: large ? 11 : 7, letterSpacing: "0.08em" }}>SUMMIT</span>
            <span style={{ fontSize: large ? 9 : 6, color: t.muted, letterSpacing: "0.1em", fontWeight: 600 }}>2,480M</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 6 : 4 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: 999, background: i === 1 ? t.accent2 : "rgba(240,246,255,0.25)" }} />
            ))}
            <span style={{ fontSize: large ? 9 : 6, fontWeight: 700, color: t.bg, background: t.accent, borderRadius: 999, padding: large ? "4px 10px" : "2px 7px", minHeight: 0 }}>Book</span>
          </div>
        </div>

        {/* multi-plane hero */}
        <div style={{ position: "relative", flex: 1, padding: `0 ${pad}px` }}>
          <span style={{ display: "inline-block", fontSize: large ? 8 : 5.5, fontWeight: 700, letterSpacing: "0.12em", color: t.accent2, border: "1px solid rgba(240,246,255,0.14)", background: "rgba(14,26,43,0.55)", borderRadius: 999, padding: large ? "3px 9px" : "2px 6px" }}>
            CH.02 — RIDGELINE · LAYER 3/6
          </span>
          <p style={{ margin: `${large ? 7 : 4}px 0 0`, fontFamily: t.display, fontWeight: 800, fontSize: large ? 30 : 18, lineHeight: 1.02, textShadow: "0 2px 18px rgba(4,10,20,0.6)" }}>
            Depth you
            <br />
            <span style={{ color: t.accent }}>can feel.</span>
          </p>
          <p style={{ margin: `${large ? 6 : 3}px 0 0`, fontSize: large ? 10.5 : 7, lineHeight: 1.5, color: t.ink, opacity: 0.9, maxWidth: large ? 260 : 170 }}>
            Six planes drift at 0.1×–0.6× over the vista.
          </p>
          {/* floating near plate */}
          <div style={{ marginTop: large ? 10 : 6, display: "flex", gap: large ? 8 : 5, alignItems: "center", background: "rgba(22,39,61,0.82)", border: "1px solid rgba(240,246,255,0.14)", borderRadius: 12, padding: large ? "8px 10px" : "5px 7px", boxShadow: "0 16px 48px rgba(4,10,20,0.45)", backdropFilter: "blur(4px)", maxWidth: large ? 300 : 200 }}>
            <span aria-hidden style={{ width: large ? 26 : 17, height: large ? 26 : 17, borderRadius: 8, background: `linear-gradient(135deg,${t.accent},${t.accent2})`, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: large ? 9.5 : 6.5, fontWeight: 700 }}>Basecamp plate rides near</p>
              <p style={{ margin: 0, fontSize: large ? 8.5 : 6, color: t.muted }}>Scrim on · text never mid-depth</p>
            </div>
            <span style={{ marginLeft: "auto", fontSize: large ? 9 : 6, fontWeight: 800, color: t.accent }}>→</span>
          </div>
        </div>

        {/* vista layers */}
        <div aria-hidden style={{ position: "relative", height: large ? 92 : 58, marginTop: large ? 8 : 5 }}>
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "brightness(1.08) saturate(0.85)", opacity: 0.9 }}>
            <path d="M0 42 L35 18 L60 36 L95 8 L130 34 L165 20 L200 34 L200 60 L0 60 Z" fill={`${p.surface}cc`} />
          </svg>
          <div className="px-anim" style={{ position: "absolute", left: "-10%", right: "-10%", top: large ? 30 : 18, height: large ? 22 : 14, background: "linear-gradient(180deg,transparent,rgba(14,26,43,0.6))", filter: "blur(3px)", animation: "px-mist 20s ease-in-out infinite" }} />
          <svg viewBox="0 0 200 50" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transform: "translateY(18%)" }}>
            <path d="M0 34 L30 22 L55 30 L85 12 L120 30 L150 20 L200 32 L200 50 L0 50 Z" fill={t.surface} />
            <path d="M0 44 L45 28 L80 40 L125 26 L170 40 L200 34 L200 50 L0 50 Z" fill={p.bg} />
          </svg>
          <span aria-hidden style={{ position: "absolute", bottom: large ? 10 : 6, left: "12%", fontSize: large ? 9 : 6, color: t.ink }}>▲</span>
          <span aria-hidden style={{ position: "absolute", bottom: large ? 14 : 8, left: "14%", width: 2, height: large ? 8 : 5, background: t.accent2 }} />
        </div>

        {/* depth-scale footer */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: large ? 8 : 5, padding: `${large ? 8 : 5}px ${pad}px`, background: "rgba(11,20,32,0.9)", borderTop: "1px solid rgba(240,246,255,0.14)" }}>
          {[0.1, 0.25, 0.45, 0.6].map((r, i) => (
            <span key={r} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: large ? 7.5 : 5, fontWeight: 700, letterSpacing: "0.08em", color: i === 3 ? t.accent : t.muted }}>
              <span style={{ width: large ? 14 : 9, height: 3, borderRadius: 999, background: i === 3 ? t.accent : "rgba(240,246,255,0.2)" }} />
              L{i + 1}
            </span>
          ))}
          <span style={{ marginLeft: "auto", fontSize: large ? 7.5 : 5, fontWeight: 700, letterSpacing: "0.1em", color: t.muted }}>0.1×–0.6× · STILL FALLBACK OK</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
