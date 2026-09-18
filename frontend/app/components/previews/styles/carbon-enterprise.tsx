import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CarbonEnterprisePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* IBM Carbon header bar */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            padding: `${5 * s}px ${10 * s}px`,
            borderBottom: `2px solid ${p.accent}`,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <div style={{ width: 4 * s, height: 12 * s, background: p.accent }} />
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
              IBM Carbon // Cloud
            </span>
          </div>
          <div className="flex items-center" style={{ gap: 8 * s, fontSize: 6 * s, color: p.muted }}>
            <span>Clusters</span>
            <span>Telemetry</span>
            <span style={{ color: p.accent }}>us-east-1</span>
          </div>
        </div>

        {/* Enterprise strict data grid */}
        <div className="my-auto" style={{ padding: `${6 * s}px 0` }}>
          <div style={{ fontSize: 5.5 * s, color: p.muted, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 3 * s }}>
            SYSTEM ORCHESTRATION · 16PX MINI-UNITS
          </div>
          <div style={{ fontFamily: p.display, fontSize: 13 * s, fontWeight: 700, lineHeight: 1.15 }}>
            Enterprise Zero-Decoration Rigor
          </div>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45, margin: `${5 * s}px 0` }}>
            Strict 2x grid, zebra data tables, 0px radius, high-density telemetry.
          </p>
          {/* Data table */}
          <div style={{ border: `1px solid ${p.ink}22` }}>
            <div className="flex items-center" style={{
              background: p.surface,
              padding: `${4 * s}px ${8 * s}px`,
              borderBottom: `1px solid ${p.ink}22`,
              fontSize: 5.5 * s,
              fontWeight: 700,
            }}>
              <span style={{ flex: 2 }}>NODE ID</span>
              <span style={{ flex: 1 }}>LOAD</span>
              <span style={{ flex: 1 }}>STATUS</span>
            </div>
            {[
              { id: "worker-09-dal10", load: "42.8%", status: "RUNNING" },
              { id: "ingress-02-fra04", load: "78.1%", status: "HEALTHY" },
            ].map((row, i) => (
              <div key={i} className="flex items-center" style={{
                padding: `${3 * s}px ${8 * s}px`,
                borderBottom: i === 0 ? `1px solid ${p.ink}11` : "none",
                background: i % 2 === 1 ? `${p.surface}88` : "transparent",
                fontSize: 6 * s,
              }}>
                <span style={{ flex: 2, fontFamily: "monospace" }}>{row.id}</span>
                <span style={{ flex: 1, color: p.muted }}>{row.load}</span>
                <span style={{ flex: 1, color: p.accent, fontWeight: 700 }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between" style={{
          fontSize: 5.5 * s,
          color: p.muted,
          borderTop: `1px solid ${p.ink}22`,
          paddingTop: 4 * s,
        }}>
          <span>IBM PLEX MONO · 2X GRID</span>
          <span style={{ color: p.accent }}>● 99.999% SLA MET</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
