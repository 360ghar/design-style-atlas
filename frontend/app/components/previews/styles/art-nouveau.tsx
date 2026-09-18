import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ArtNouveauPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Botanical ornament header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 9 * s, fontWeight: 400, fontStyle: "italic" }}>
            ❧ Maison Lalique
          </span>
          <div className="flex items-center" style={{ gap: 8 * s, fontSize: 6 * s, color: p.muted }}>
            <span>Atelier</span>
            <span style={{ color: p.accent }}>·</span>
            <span>Verre</span>
            <span style={{ color: p.accent }}>·</span>
            <span>Parfum</span>
          </div>
        </div>

        {/* Central Art Nouveau Whiplash Arch */}
        <div
          className="my-auto flex flex-col items-center text-center"
          style={{
            border: `1.5px solid ${p.accent}`,
            borderRadius: `${24 * s}px / ${32 * s}px`,
            background: p.surface,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${6 * s}px ${20 * s}px ${p.ink}0a`,
          }}
        >
          <svg viewBox="0 0 110 20" style={{ width: 90 * s, marginBottom: 3 * s }}>
            <path
              d="M10 16 C25 2, 45 18, 55 8 C65 0, 85 18, 100 4"
              fill="none"
              stroke={p.accent}
              strokeWidth="1.5"
            />
            <circle cx="55" cy="8" r="2.5" fill={p.accent2} />
          </svg>
          <div style={{
            fontFamily: p.display,
            fontSize: 15 * s,
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.15,
            color: p.ink,
          }}>
            L&apos;Heure des Nymphéas
          </div>
          <div style={{ fontSize: 5.5 * s, color: p.accent, letterSpacing: "0.22em", margin: `${3 * s}px 0`, textTransform: "uppercase" as const }}>
            Mucha · Guimard · Émile Gallé
          </div>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45, maxWidth: "88%" }}>
            Organic whiplash curves, stained glass olive and amber hues, and lyrical floral typography.
          </p>
          <div style={{ marginTop: 8 * s }}>
            <span style={{
              border: `1px solid ${p.accent2}`,
              color: p.accent2,
              fontSize: 5.5 * s,
              letterSpacing: "0.2em",
              padding: `${4 * s}px ${16 * s}px`,
              borderRadius: 999,
              fontFamily: p.display,
            }}>
              ENTRER DANS L&apos;ATELIER
            </span>
          </div>
        </div>

        {/* Métro Guimard Footer */}
        <div className="flex items-center justify-between" style={{ borderTop: `1px solid ${p.accent}33`, paddingTop: 4 * s, fontSize: 5.5 * s, color: p.muted }}>
          <span style={{ fontStyle: "italic" }}>❧ Porte Dauphine · Paris 1900</span>
          <span style={{ color: p.accent2 }}>❧ Courbes Vivantes</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
