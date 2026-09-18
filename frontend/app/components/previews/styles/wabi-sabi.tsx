import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function WabiSabiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Kintsugi tea master header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.ink}15`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 8.5 * s, fontWeight: 500, letterSpacing: "0.08em" }}>
            侘寂 · SEN NO RIKYŪ
          </span>
          <span style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700 }}>
            KINTSUGI GOLD REPAIR ✦
          </span>
        </div>

        {/* Asymmetric Broken-Bowl Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: `${18 * s}px ${12 * s}px ${24 * s}px ${8 * s}px`,
            border: `1px solid ${p.ink}15`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Gold fissure line */}
          <svg viewBox="0 0 100 12" style={{ width: 80 * s, marginBottom: 4 * s }}>
            <path d="M0 6 L30 2 L50 8 L75 3 L100 6" fill="none" stroke={p.accent} strokeWidth="1.6" />
          </svg>
          <div style={{ fontSize: 5.5 * s, color: p.accent, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            Beauty in Imperfection
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 500,
              lineHeight: 1.2,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            The Mended Ceramic Bowl
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Cracked stoneware joined with real gold lacquer, weathered cedar, moss in the margins, and serene asymmetry.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                color: p.accent,
                fontSize: 6 * s,
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 999,
              }}
            >
              Contemplate 🍵
            </span>
            <span style={{ fontSize: 5.5 * s, color: p.muted }}>
              Impermanent · Incomplete
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}12`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>WEATHERED WOOD</span>
          <span>GOLD LACQUER JOINERY</span>
          <span style={{ color: p.accent }}>MOSS MARGINS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
