import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function StripeInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const ff = "Sohne, Inter, Helvetica Neue, sans-serif";
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const fs = large
    ? { nav: 8, badge: 7.5, hero: 27, sub: 10.5, btn: 9, code: 8, meta: 7, foot: 9 }
    : { nav: 5.5, badge: 5, hero: 15, sub: 7, btn: 6, code: 5.5, meta: 5, foot: 6 };
  return (
    <Frame meta={meta} large={large}>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", background: p.bg, color: p.ink, fontFamily: ff, overflow: "hidden" }}>
        {/* §14 diagonal aurora band + faint grid */}
        <div style={{ position: "absolute", inset: "-22% -10% auto -10%", height: "70%", transform: "skewY(-7deg)", background: "linear-gradient(100deg,${p.accent} 0%,${p.accent} 32%,${p.accent2} 68%,${p.surface} 100%)" }} />
        <div style={{ position: "absolute", inset: "-22% -10% auto -10%", height: "70%", transform: "skewY(-7deg)", backgroundImage: "linear-gradient(${p.bg}22 1px,transparent 1px),linear-gradient(90deg,${p.bg}22 1px,transparent 1px)", backgroundSize: large ? "22px 22px" : "14px 14px" }} />
        <div style={{ position: "absolute", left: "-10%", right: "-10%", top: large ? "46%" : "44%", height: large ? 14 : 9, transform: "skewY(-7deg)", background: p.bg }} />

        {/* striped nav — transparent over aurora */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: large ? 10 : 6, padding: large ? "12px 18px" : "7px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 6 : 4 }}>
            <span style={{ width: large ? 15 : 10, height: large ? 15 : 10, borderRadius: 4, background: "linear-gradient(135deg,${p.accent},${p.accent2})" }} />
            <span style={{ fontWeight: 700, fontSize: large ? 11 : 7, letterSpacing: "-0.02em" }}>stripe</span>
          </div>
          <div style={{ display: "flex", gap: large ? 2 : 1 }}>
            {["|", "|", "|"].map((s, i) => (
              <span key={i} style={{ width: large ? 18 : 11, height: large ? 5 : 3, borderRadius: 99, background: i === 0 ? p.accent : i === 1 ? p.accent2 : p.surface, opacity: i === 2 ? 0.9 : 1, transform: "skewX(-18deg)", display: "inline-block", marginLeft: large ? 6 : 4 }}>{s.slice(0, 0)}</span>
            ))}
          </div>
          <div className="hidden @sm:flex" style={{ gap: large ? 12 : 7, fontSize: fs.nav, color: p.muted, fontWeight: 500 }}>
            <span>Products</span>
            <span>Solutions</span>
            <span>Developers</span>
            <span>Pricing</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: large ? 10 : 6, fontSize: fs.nav, fontWeight: 500 }}>
            <span className="hidden @sm:inline">Sign in</span>
            <span style={{ background: p.accent, color: p.bg, borderRadius: 999, padding: large ? "6px 14px" : "3px 9px", fontSize: fs.btn, fontWeight: 600, boxShadow: "0 6px 12px -2px rgba(10,37,64,0.08),0 3px 7px -3px rgba(10,37,64,0.1)", whiteSpace: "nowrap" }}>Start now →</span>
          </div>
        </div>

        {/* gradient hero: headline + code card */}
        <div
          className="grid grid-cols-1 @md:grid-cols-[1.1fr_0.9fr]"
          style={{ position: "relative", gap: large ? 16 : 9, padding: large ? "10px 18px 0" : "6px 10px 0", alignItems: "center" }}
        >
          <div>
            <span style={{ display: "inline-block", background: p.bg, border: `1px solid ${p.ink}15`, color: p.accent, borderRadius: 999, fontSize: fs.badge, fontWeight: 600, padding: large ? "4px 10px" : "2px 7px" }}>● v2 · Terminal is here</span>
            <div style={{ fontWeight: 650, fontSize: fs.hero, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: large ? 8 : 5 }}>
              Payments<br />infrastructure<br />
              <span style={{ background: `linear-gradient(90deg,${p.accent},${p.accent2})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>for the internet</span>
            </div>
            <div style={{ color: p.muted, fontSize: fs.sub, lineHeight: 1.6, marginTop: large ? 8 : 4 }}>Millions of companies accept payments with clean APIs and docs developers love.</div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: large ? 10 : 6, marginTop: large ? 10 : 6 }}>
              <span style={{ background: p.accent, color: p.bg, borderRadius: 8, padding: large ? "8px 16px" : "4px 10px", fontSize: fs.btn, fontWeight: 600 }}>Start payments →</span>
              <span style={{ color: p.ink, fontSize: fs.btn, fontWeight: 500 }}>Contact sales →</span>
            </div>
          </div>
          <div style={{ background: p.ink, border: `1px solid ${p.ink}`, borderRadius: 8, padding: large ? 10 : 6, fontFamily: mono, fontSize: fs.code, lineHeight: 1.65, color: `${p.accent}33`, boxShadow: "0 6px 12px -2px rgba(10,37,64,0.08),0 3px 7px -3px rgba(10,37,64,0.1),0 16px 40px rgba(99,91,255,.25)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: large ? 6 : 3, fontFamily: ff }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: p.accent2 }} />
              <span style={{ width: 6, height: 6, borderRadius: 99, background: p.accent }} />
              <span style={{ width: 6, height: 6, borderRadius: 99, background: p.surface }} />
              <span style={{ marginLeft: 4, fontSize: fs.meta, color: p.muted }}>checkout.js</span>
            </div>
            <div><span style={{ color: `${p.accent2}99` }}>const</span> payment = <span style={{ color: p.accent2 }}>await</span> stripe.</div>
            <div>&nbsp;checkout.<span style={{ color: p.accent2 }}>create</span>({"{"}</div>
            <div>&nbsp;&nbsp;amount: <span style={{ color: p.accent }}>2000</span>,</div>
            <div>&nbsp;&nbsp;currency: <span style={{ color: `${p.accent2}cc` }}>&apos;usd&apos;</span>,</div>
            <div>{"}"}); <span style={{ color: p.accent2 }}>✓ succeeded</span></div>
          </div>
        </div>

        {/* partner CTA footer */}
        <div style={{ position: "relative", marginTop: "auto", background: p.surface, borderTop: `1px solid ${p.ink}15`, padding: large ? "9px 18px" : "5px 10px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: large ? 10 : 6 }}>
          <div style={{ display: "flex", gap: large ? 10 : 6, fontSize: fs.meta, fontWeight: 600, letterSpacing: "0.08em", color: p.muted }}>
            <span>AMAZON</span><span>GOOGLE</span><span>SHOPIFY</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: large ? 10 : 6, fontSize: fs.foot, fontWeight: 600 }}>
            <span className="hidden @sm:inline">Ready to get started?</span>
            <span style={{ background: p.accent, color: p.bg, borderRadius: 8, padding: large ? "6px 14px" : "3px 9px", whiteSpace: "nowrap" }}>Get in touch →</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
