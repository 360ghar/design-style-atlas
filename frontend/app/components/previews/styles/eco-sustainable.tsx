import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EcoSustainablePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Certification header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1.5px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span style={{
              background: p.accent,
              color: p.surface,
              fontSize: 6 * s,
              fontWeight: 800,
              padding: `${1 * s}px ${6 * s}px`,
              borderRadius: 3 * s,
            }}>
              1% FOR THE PLANET
            </span>
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
              TerraCraft
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700 }}>
            CERTIFIED B-CORP Ⓑ
          </span>
        </div>

        {/* Kraft Impact Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}18`,
            borderRadius: 8 * s,
            padding: `${12 * s}px ${14 * s}px`,
            boxShadow: `0 ${4 * s}px ${12 * s}px ${p.ink}08`,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
            Patagonia-Grade Environmental Ledger
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 13 * s,
              fontWeight: 800,
              lineHeight: 1.15,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Honest Climate Receipts
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Recycled-paper textures, forest green accents, carbon metric counters, and repair-first consumer stewardship.
          </p>
          {/* Metrics row */}
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <div style={{
              background: `${p.accent}15`,
              border: `1px solid ${p.accent}33`,
              borderRadius: 4 * s,
              padding: `${4 * s}px ${8 * s}px`,
            }}>
              <div style={{ fontSize: 10 * s, fontWeight: 800, color: p.accent, fontFamily: p.display }}>2,840 kg</div>
              <div style={{ fontSize: 4.5 * s, color: p.muted, textTransform: "uppercase" as const }}>CO₂ Offset</div>
            </div>
            <div style={{
              background: `${p.accent2}15`,
              border: `1px solid ${p.accent2}33`,
              borderRadius: 4 * s,
              padding: `${4 * s}px ${8 * s}px`,
            }}>
              <div style={{ fontSize: 10 * s, fontWeight: 800, color: p.accent2, fontFamily: p.display }}>100%</div>
              <div style={{ fontSize: 4.5 * s, color: p.muted, textTransform: "uppercase" as const }}>Post-Consumer Recycled</div>
            </div>
          </div>
        </div>

        {/* Footprint ledger footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}18`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>KRAFT &amp; CREAM GROUND</span>
          <span>REPAIR OVER REPLACEMENT</span>
          <span style={{ color: p.accent, fontWeight: 700 }}>ZERO GREENWASHING</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
