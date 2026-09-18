import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AfrofuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Cosmic tribal header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{
              fontFamily: p.display,
              fontSize: 10 * s,
              fontWeight: 900,
              background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
              WAKANDA.SYS
            </span>
            <span style={{
              background: `${p.accent2}22`,
              color: p.accent2,
              border: `1px solid ${p.accent2}55`,
              fontSize: 5.5 * s,
              fontWeight: 700,
              padding: `${1 * s}px ${6 * s}px`,
              borderRadius: 99,
            }}>
              ✧ STELLAR
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.accent, fontFamily: p.display }}>◈ ◈ ◈</span>
        </div>

        {/* Central Ancestral-Futurist Panel */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent}44`,
            borderRadius: 6 * s,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Geometric pattern accent */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            background: `repeating-linear-gradient(45deg, ${p.accent}08 0px, ${p.accent}08 4px, transparent 4px, transparent 12px)`,
          }} />
          <div style={{ fontSize: 6 * s, fontWeight: 800, color: p.accent, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            Ancestral Future Protocol
          </div>
          <h3 style={{
            fontFamily: p.display,
            fontSize: 14 * s,
            fontWeight: 900,
            lineHeight: 1.15,
            margin: `${4 * s}px 0 ${6 * s}px 0`,
          }}>
            Heritage Meets Cosmos
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Kente geometry, Adinkra symbolism, and cosmic metallics forged into digital interfaces.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span style={{
              background: p.accent,
              color: p.bg,
              fontSize: 6.5 * s,
              fontWeight: 800,
              padding: `${4 * s}px ${14 * s}px`,
              borderRadius: 4 * s,
            }}>
              Enter the Archive
            </span>
            <span style={{ color: p.accent2, fontSize: 6 * s, fontWeight: 700 }}>
              ✦ Sun Ra Station
            </span>
          </div>
        </div>

        {/* Footer cosmic strip */}
        <div
          className="flex items-center justify-between"
          style={{ fontSize: 5.5 * s, color: p.muted, borderTop: `1px solid ${p.accent}33`, paddingTop: 4 * s, letterSpacing: "0.08em", textTransform: "uppercase" as const }}
        >
          <span>◆ GOLD METALLICS</span>
          <span>◆ ADINKRA GEOMETRY</span>
          <span style={{ color: p.accent2 }}>◆ COSMIC PALETTE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
