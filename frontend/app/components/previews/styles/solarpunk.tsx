import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SolarpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Greenhouse Solar Grid Header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1.5px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ fontSize: 9 * s, color: p.accent2 }}>☼</span>
            <span style={{ fontFamily: p.display, fontSize: 8.5 * s, fontWeight: 700, color: p.accent }}>
              HELIOS COMMONS
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, color: p.accent2, fontWeight: 700 }}>
            SOLAR OUTPUT: 12.8 kW · 100% CLEAN
          </span>
        </div>

        {/* Food Forest & Stained Glass Panel */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 16 * s,
            border: `1.5px solid ${p.accent}44`,
            boxShadow: `0 ${6 * s}px ${20 * s}px ${p.accent}15`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent2, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
            COMMUNITY FOOD FOREST · CELL 08
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 800,
              lineHeight: 1.15,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
              color: p.ink,
            }}
          >
            The Optimistic Green Future
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Art Nouveau organic curves meet appropriate solar technology. Interfaces grown like community gardens, not cold machines.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 999,
              }}
            >
              Harvest Ledger ☼
            </span>
            <span style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 700 }}>
              Open knowledge seed bank
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>GREENHOUSE GLASS</span>
          <span>ART NOUVEAU CURVES</span>
          <span style={{ color: p.accent2, fontWeight: 700 }}>ABUNDANCE FOR ALL</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
