import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function StripeInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const ff = "Sohne, Inter, Helvetica Neue, sans-serif";
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const fs = large
    ? { nav: 8, badge: 7.5, hero: 27, sub: 10.5, btn: 9, code: 8, meta: 7, foot: 9 }
    : { nav: 5.5, badge: 5, hero: 15, sub: 7, btn: 6, code: 5.5, meta: 5, foot: 6 };
  return (
    <Frame meta={meta} large={large}>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", background: "#FFFFFF", color: "#0A2540", fontFamily: ff, overflow: "hidden" }}>
        {/* §14 diagonal aurora band + faint grid */}
        <div style={{ position: "absolute", inset: "-22% -10% auto -10%", height: "70%", transform: "skewY(-7deg)", background: "linear-gradient(100deg,#635BFF 0%,#7C8CFF 32%,#00D4FF 68%,#F6F9FC 100%)" }} />
        <div style={{ position: "absolute", inset: "-22% -10% auto -10%", height: "70%", transform: "skewY(-7deg)", backgroundImage: "linear-gradient(#FFFFFF22 1px,transparent 1px),linear-gradient(90deg,#FFFFFF22 1px,transparent 1px)", backgroundSize: large ? "22px 22px" : "14px 14px" }} />
        <div style={{ position: "absolute", left: "-10%", right: "-10%", top: large ? "46%" : "44%", height: large ? 14 : 9, transform: "skewY(-7deg)", background: "#FFFFFF" }} />

        {/* striped nav — transparent over aurora */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: large ? 10 : 6, padding: large ? "12px 18px" : "7px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 6 : 4 }}>
            <span style={{ width: large ? 15 : 10, height: large ? 15 : 10, borderRadius: 4, background: "linear-gradient(135deg,#635BFF,#00D4FF)" }} />
            <span style={{ fontWeight: 700, fontSize: large ? 11 : 7, letterSpacing: "-0.02em" }}>stripe</span>
          </div>
          <div style={{ display: "flex", gap: large ? 2 : 1 }}>
            {["|", "|", "|"].map((s, i) => (
              <span key={i} style={{ width: large ? 18 : 11, height: large ? 5 : 3, borderRadius: 99, background: i === 0 ? "#635BFF" : i === 1 ? "#00D4FF" : "#F6F9FC", opacity: i === 2 ? 0.9 : 1, transform: "skewX(-18deg)", display: "inline-block", marginLeft: large ? 6 : 4 }}>{s.slice(0, 0)}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: large ? 12 : 7, fontSize: fs.nav, fontWeight: 500, color: "#0A2540" }}>
            <span>Products</span>
            <span>Developers</span>
            <span>Pricing</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: large ? 10 : 6, fontSize: fs.nav, fontWeight: 500 }}>
            <span>Sign in</span>
            <span style={{ background: "#635BFF", color: "#FFFFFF", borderRadius: 999, padding: large ? "6px 14px" : "3px 9px", fontSize: fs.btn, fontWeight: 600, boxShadow: "0 6px 12px -2px rgba(10,37,64,0.08),0 3px 7px -3px rgba(10,37,64,0.1)" }}>Start now →</span>
          </div>
        </div>

        {/* gradient hero: headline + code card */}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: large ? 16 : 9, padding: large ? "10px 18px 0" : "6px 10px 0", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", background: "#FFFFFF", border: "1px solid #E6EBF1", color: "#635BFF", borderRadius: 999, fontSize: fs.badge, fontWeight: 600, padding: large ? "4px 10px" : "2px 7px" }}>● v2 · Terminal is here</span>
            <div style={{ fontWeight: 650, fontSize: fs.hero, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: large ? 8 : 5 }}>
              Payments<br />infrastructure<br />
              <span style={{ background: "linear-gradient(90deg,#635BFF,#00D4FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>for the internet</span>
            </div>
            <div style={{ color: "#62748A", fontSize: fs.sub, lineHeight: 1.6, marginTop: large ? 8 : 4 }}>Millions of companies accept payments with clean APIs and docs developers love.</div>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 7, marginTop: large ? 10 : 6 }}>
              <span style={{ background: "#635BFF", color: "#FFFFFF", borderRadius: 8, padding: large ? "8px 16px" : "4px 10px", fontSize: fs.btn, fontWeight: 600 }}>Start payments →</span>
              <span style={{ color: "#0A2540", fontSize: fs.btn, fontWeight: 500 }}>Contact sales →</span>
            </div>
          </div>
          <div style={{ background: "#0A2540", border: "1px solid #0A2540", borderRadius: 8, padding: large ? 10 : 6, fontFamily: mono, fontSize: fs.code, lineHeight: 1.65, color: "#C4CDF5", boxShadow: "0 6px 12px -2px rgba(10,37,64,0.08),0 3px 7px -3px rgba(10,37,64,0.1),0 16px 40px rgba(99,91,255,.25)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: large ? 6 : 3, fontFamily: ff }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#00D4FF" }} />
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#635BFF" }} />
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#F6F9FC" }} />
              <span style={{ marginLeft: 4, fontSize: fs.meta, color: "#62748A" }}>checkout.js</span>
            </div>
            <div><span style={{ color: "#7AA2FF" }}>const</span> payment = <span style={{ color: "#8CE99A" }}>await</span> stripe.</div>
            <div>&nbsp;checkout.<span style={{ color: "#00D4FF" }}>create</span>({"{"}</div>
            <div>&nbsp;&nbsp;amount: <span style={{ color: "#FFD166" }}>2000</span>,</div>
            <div>&nbsp;&nbsp;currency: <span style={{ color: "#FF8AB2" }}>&apos;usd&apos;</span>,</div>
            <div>{"}"}); <span style={{ color: "#00D4FF" }}>✓ succeeded</span></div>
          </div>
        </div>

        {/* partner CTA footer */}
        <div style={{ position: "relative", marginTop: "auto", background: "#F6F9FC", borderTop: "1px solid #E6EBF1", padding: large ? "9px 18px" : "5px 10px", display: "flex", alignItems: "center", gap: large ? 10 : 6 }}>
          <div style={{ display: "flex", gap: large ? 10 : 6, fontSize: fs.meta, fontWeight: 600, letterSpacing: "0.08em", color: "#62748A" }}>
            <span>AMAZON</span><span>GOOGLE</span><span>SHOPIFY</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: large ? 10 : 6, fontSize: fs.foot, fontWeight: 600 }}>
            <span>Ready to get started?</span>
            <span style={{ background: "#635BFF", color: "#FFFFFF", borderRadius: 8, padding: large ? "6px 14px" : "3px 9px" }}>Get in touch →</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
