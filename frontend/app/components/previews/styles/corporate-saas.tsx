import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CorporateSaaSPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = large
    ? { nav: 9, badge: 8, hero: 26, sub: 10.5, btn: 9, proof: 8, metric: 11, metricLabel: 7.5, logo: 8, featTitle: 9.5, featBody: 8.5 }
    : { nav: 5.5, badge: 5, hero: 14.5, sub: 6.5, btn: 6, proof: 5.5, metric: 7, metricLabel: 5, logo: 5.5, featTitle: 6, featBody: 5.5 };
  const padX = large ? 20 : 12;
  const hairline = `${p.ink}14`;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body, overflow: "hidden", paddingBottom: large ? 22 : 15 }}
      >
        {/* SaaS topbar with trial CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: large ? 14 : 8, padding: large ? "12px 20px" : "7px 12px", borderBottom: `1px solid ${hairline}`, background: p.bg }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 4 }}>
            <span style={{ width: large ? 18 : 12, height: large ? 18 : 12, borderRadius: 5, background: p.accent, color: p.bg, fontSize: large ? 11 : 7, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>◍</span>
            <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 12 : 7.5, letterSpacing: "-0.01em" }}>Acme</span>
          </div>
          <div style={{ display: "flex", gap: large ? 12 : 6, fontSize: fs.nav, color: p.muted, fontWeight: 500 }}>
            <span>Product</span>
            <span>Solutions</span>
            <span>Pricing</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: large ? 10 : 5 }}>
            <span style={{ fontSize: fs.nav, color: p.muted, fontWeight: 500 }}>Sign in</span>
            <span style={{ background: p.accent, color: p.bg, borderRadius: 8, padding: large ? "7px 14px" : "4px 9px", fontSize: fs.btn, fontWeight: 600, boxShadow: `0 2px 12px ${p.accent}40` }}>Start free →</span>
          </div>
        </div>

        {/* metric hero + dashboard */}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: large ? 16 : 9, padding: large ? "14px 20px 12px" : `8px ${padX}px 7px`, background: `linear-gradient(135deg, ${p.accent}12 0%, ${p.accent2}12 55%, ${p.surface} 100%)` }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${p.ink}0F 1px, transparent 1px), linear-gradient(90deg, ${p.ink}0F 1px, transparent 1px)`, backgroundSize: large ? "22px 22px" : "14px 14px" }} />
          <div style={{ position: "relative" }}>
            <span style={{ display: "inline-block", background: p.bg, border: `1px solid ${hairline}`, color: p.accent, borderRadius: 999, fontSize: fs.badge, fontWeight: 600, padding: large ? "4px 10px" : "2px 7px" }}>● New · Q3 ROI report</span>
            <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: fs.hero, lineHeight: 1.08, letterSpacing: "-0.02em", marginTop: large ? 8 : 5 }}>
              Software that closes<br />the quarter for you.
            </div>
            <div style={{ color: p.muted, fontSize: fs.sub, lineHeight: 1.5, marginTop: large ? 7 : 4 }}>Close books 3× faster with live forecasts and audit trails.</div>
            <div style={{ display: "flex", gap: large ? 8 : 5, marginTop: large ? 7 : 4, fontSize: fs.proof, color: p.muted, fontWeight: 500 }}>
              <span><span style={{ color: p.accent }}>★</span> 4.9 · 2,400 reviews</span>
              <span>◍ SOC 2</span>
              <span>✓ No card required</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 6, marginTop: large ? 10 : 6 }}>
              <span style={{ background: p.accent, color: p.bg, borderRadius: 8, padding: large ? "8px 16px" : "4px 10px", fontSize: fs.btn, fontWeight: 600 }}>Start free trial →</span>
              <span style={{ fontSize: fs.btn, fontWeight: 600, color: p.ink, border: `1px solid ${p.ink}22`, borderRadius: 8, padding: large ? "7px 14px" : "3px 9px", background: p.bg }}>View demo</span>
            </div>
            <div style={{ display: "flex", gap: large ? 16 : 9, marginTop: large ? 10 : 6, borderTop: `1px solid ${p.ink}12`, paddingTop: large ? 8 : 5 }}>
              {[
                ["99.99%", "uptime"],
                ["$4.2M", "saved / yr"],
                ["12k", "teams"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontWeight: 700, fontSize: fs.metric, letterSpacing: "-0.01em" }}>{v}</div>
                  <div style={{ color: p.muted, fontSize: fs.metricLabel, fontWeight: 600 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", background: p.bg, border: `1px solid ${hairline}`, borderRadius: 12, boxShadow: `0 24px 80px ${p.accent}2E, 0 2px 12px ${p.ink}14`, overflow: "hidden", alignSelf: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 5 : 3, padding: large ? "8px 10px" : "5px 7px", borderBottom: `1px solid ${p.ink}12` }}>
              <span style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: 99, background: p.muted, opacity: 0.5 }} />
              <span style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: 99, background: p.muted, opacity: 0.35 }} />
              <span style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: 99, background: p.muted, opacity: 0.25 }} />
              <span style={{ marginLeft: 4, background: p.surface, border: `1px solid ${hairline}`, borderRadius: 999, padding: large ? "2px 8px" : "1px 6px", fontSize: fs.metricLabel, color: p.muted }}>acme.app/overview</span>
              <span style={{ marginLeft: "auto", fontSize: fs.metricLabel, fontWeight: 700, color: p.accent }}>✓ Audit ready</span>
            </div>
            <div style={{ padding: large ? 10 : 6 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: large ? 8 : 5 }}>
                <div style={{ background: p.surface, border: `1px solid ${hairline}`, borderRadius: 8, padding: large ? "7px 9px" : "4px 6px" }}>
                  <div style={{ fontSize: fs.metricLabel, color: p.muted, fontWeight: 600 }}>MRR</div>
                  <div style={{ fontWeight: 700, fontSize: fs.metric }}>$1.2M <span style={{ color: p.accent, fontSize: fs.metricLabel }}>+18%</span></div>
                </div>
                <div style={{ background: p.surface, border: `1px solid ${hairline}`, borderRadius: 8, padding: large ? "7px 9px" : "4px 6px" }}>
                  <div style={{ fontSize: fs.metricLabel, color: p.muted, fontWeight: 600 }}>Close time</div>
                  <div style={{ fontWeight: 700, fontSize: fs.metric }}>3.1d <span style={{ color: p.accent, fontSize: fs.metricLabel }}>−42%</span></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: large ? 5 : 3, height: large ? 52 : 30, marginTop: large ? 8 : 5 }}>
                {[38, 56, 44, 68, 52, 92, 74].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 5 ? `linear-gradient(180deg, ${p.accent}, ${p.accent2})` : `${p.accent}26` }} />
                ))}
              </div>
              <div style={{ marginTop: large ? 8 : 5, height: large ? 6 : 4, borderRadius: 99, background: p.surface, border: `1px solid ${hairline}`, overflow: "hidden" }}>
                <div style={{ width: "82%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} />
              </div>
            </div>
          </div>
        </div>

        {/* logo wall */}
        <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 7, padding: large ? "8px 20px" : `5px ${padX}px`, borderTop: `1px solid ${p.ink}12`, background: p.bg }}>
          <span style={{ fontSize: fs.metricLabel, fontWeight: 700, letterSpacing: "0.08em", color: p.muted }}>TRUSTED BY 12K TEAMS</span>
          <div style={{ display: "flex", gap: large ? 12 : 7, fontSize: fs.logo, fontWeight: 800, letterSpacing: "0.04em", color: p.muted, opacity: 0.85 }}>
            <span>VERCEL</span><span>FIGMA</span><span>NOTION</span><span>LINEAR</span>
          </div>
        </div>

        {/* feature footer */}
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: large ? 10 : 6, background: p.surface, borderTop: `1px solid ${p.ink}12`, padding: large ? "10px 20px" : `6px ${padX}px` }}>
          {[
            ["⚡", "Automate close", "Reconcile in seconds, not sprints."],
            ["☑", "Audit-ready", "SOC 2 trails on every action."],
            ["◈", "Forecast live", "Board-ready numbers daily."],
          ].map(([icon, title, body]) => (
            <div key={title} style={{ background: p.bg, border: `1px solid ${hairline}`, borderRadius: 12, padding: large ? "9px 10px" : "5px 6px", boxShadow: `0 2px 12px ${p.ink}14` }}>
              <span style={{ width: large ? 22 : 14, height: large ? 22 : 14, borderRadius: 6, background: `${p.accent}14`, color: p.accent, fontSize: large ? 12 : 8, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
              <div style={{ fontFamily: p.display, fontWeight: 600, fontSize: fs.featTitle, marginTop: large ? 6 : 3 }}>{title}</div>
              <div style={{ color: p.muted, fontSize: fs.featBody, lineHeight: 1.45, marginTop: 2 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
