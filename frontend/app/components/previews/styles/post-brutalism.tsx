import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PostBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const pad = large ? 14 : 10;
  const rows: Array<{ title: string; tag: string; accentEdge: boolean }> = [
    { title: "Brand system", tag: "FIN — 24", accentEdge: true },
    { title: "Exhibition", tag: "BER — 12", accentEdge: false },
  ];
  return (
    <Frame meta={meta} large={large}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: p.bg }}>
        {/* refined-raw nav: ruled bar, wordmark, index links, availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            background: p.surface,
            borderBottom: `1.5px solid ${p.ink}`,
            padding: large ? "9px 14px" : "7px 10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 13 : 9.5, color: p.ink, letterSpacing: "-0.02em" }}>
              STUDIO®
            </span>
            <span style={{ fontFamily: mono, fontSize: large ? 8 : 6, color: p.muted, letterSpacing: "0.1em" }}>IDX—04</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 8 }}>
            <span style={{ fontFamily: mono, fontSize: large ? 8 : 6, color: p.ink, borderBottom: `1.5px solid ${p.accent}` }}>01 Work</span>
            <span style={{ fontFamily: mono, fontSize: large ? 8 : 6, color: p.muted }}>02 Index</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: mono, fontSize: large ? 8 : 6, color: p.muted }}>
              <span style={{ width: large ? 6 : 5, height: large ? 6 : 5, borderRadius: "50%", background: p.accent2 }} />
              Q3 ●
            </span>
          </div>
        </div>

        {/* softened hard-shadow hero */}
        <div style={{ borderBottom: `1.5px solid ${p.ink}`, padding: `${pad}px ${pad}px ${pad + 2}px` }}>
          <div style={{ fontFamily: mono, fontSize: large ? 8 : 6, letterSpacing: "0.12em", color: p.muted }}>
            PORTFOLIO 2026 — RAW / REFINED
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 750,
              fontSize: large ? 27 : 19,
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              color: p.ink,
              marginTop: large ? 8 : 6,
            }}
          >
            Raw structure,
            <br />
            tailored finish.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: large ? 10 : 8 }}>
            <span
              style={{
                fontFamily: p.body,
                fontWeight: 600,
                fontSize: large ? 10 : 7.5,
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                borderRadius: 4,
                padding: large ? "6px 12px" : "4px 9px",
                boxShadow: `3px 3px 0 ${p.ink}`,
              }}
            >
              Start a project →
            </span>
            <span style={{ fontFamily: mono, fontSize: large ? 8 : 6, color: p.ink, borderBottom: `1.5px solid ${p.accent}` }}>
              See index
            </span>
          </div>
        </div>

        {/* rounded-border card row */}
        <div style={{ display: "flex", gap: large ? 10 : 7, padding: `${pad}px`, flex: 1 }}>
          {rows.map((r) => (
            <div
              key={r.title}
              style={{
                flex: 1,
                background: p.surface,
                border: `1.5px solid ${p.ink}`,
                borderLeft: r.accentEdge ? `4px solid ${p.accent}` : `1.5px solid ${p.ink}`,
                borderRadius: 4,
                padding: large ? "10px 11px" : "7px 8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: large ? 10 : 7,
              }}
            >
              <div style={{ fontFamily: mono, fontSize: large ? 7.5 : 5.5, letterSpacing: "0.1em", color: p.muted }}>
                {r.tag}
              </div>
              <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 13 : 9.5, color: p.ink, letterSpacing: "-0.01em" }}>
                {r.title}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: mono, fontSize: large ? 7.5 : 5.5, color: p.muted }}>CASE — 04</span>
                <span style={{ fontFamily: mono, fontSize: large ? 10 : 7.5, color: p.accent }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* refined footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: p.surface,
            borderTop: `1.5px solid ${p.ink}`,
            padding: large ? "8px 14px" : "6px 10px",
            fontFamily: mono,
            fontSize: large ? 7.5 : 5.5,
            letterSpacing: "0.08em",
            color: p.muted,
          }}
        >
          <span>©2026 STUDIO — SPEC 04</span>
          <span>GRID / TYPE / COLOR</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
