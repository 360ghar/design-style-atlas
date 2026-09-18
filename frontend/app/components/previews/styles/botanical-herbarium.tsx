import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BotanicalHerbariumPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // Aged Tea-Stained Parchment #F5EFE1
          color: p.ink, // Moss Green Ink #1F3024
          fontFamily: p.body,
          padding: `${10 * s}px`,
        }}
      >
        {/* Double-Line Archival Plate Border with Corner Marks */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-between"
          style={{
            maxWidth: 420 * s,
            border: `1px solid ${p.ink}44`,
            padding: `${8 * s}px ${12 * s}px`,
            background: p.surface, // #EFE8D6
            boxShadow: `0 4px 16px rgba(31,48,36,0.08)`,
          }}
        >
          {/* Top Herbarium Folio Header */}
          <div
            className="flex items-center justify-between"
            style={{
              borderBottom: `1px solid ${p.ink}33`,
              paddingBottom: 4 * s,
              fontSize: 6 * s,
              fontFamily: p.display,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: p.muted,
            }}
          >
            <span>HERBARIUM UNIVERSITATIS // FOLIO 184</span>
            <span style={{ color: p.accent, fontStyle: "italic" }}>Tabula XLVIII</span>
          </div>

          {/* Central Botanical Specimen Plate */}
          <div className="relative my-auto flex items-center justify-between" style={{ padding: `${6 * s}px 0` }}>
            {/* Pressed Botanical Leaf / Fern Illustration Silhouette */}
            <div
              className="flex items-center justify-center"
              style={{
                width: 110 * s,
                height: 85 * s,
                border: `1px dashed ${p.ink}33`,
                background: "rgba(245, 239, 225, 0.6)",
                padding: `${6 * s}px`,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 32 * s, color: p.accent2, lineHeight: 1 }}>🌿</span>
                <div style={{ fontSize: 5 * s, color: p.muted, fontStyle: "italic", marginTop: 2 * s }}>
                  Specimen no. 0842-B
                </div>
              </div>
            </div>

            {/* Naturalist Archive Notes */}
            <div className="flex flex-col" style={{ maxWidth: 210 * s }}>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 15 * s,
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.15,
                  color: p.ink,
                }}
              >
                Monstera deliciosa
              </div>

              <div
                style={{
                  fontSize: 6.5 * s,
                  color: p.accent,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: 2 * s,
                }}
              >
                Fam. Araceae // Liebm. 1849
              </div>

              <p style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.45 }}>
                Collected in tropical rainforest canopies. Dried, mounted, and cataloged for the royal herbarium archive.
              </p>
            </div>
          </div>

          {/* Bottom Museum Mounting Label Stamp */}
          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}33`,
              paddingTop: 4 * s,
              fontSize: 5.5 * s,
              color: p.muted,
              fontFamily: p.display,
            }}
          >
            <span>HABITAT: OAXACA, MEXICO</span>
            <span>LEGIT: DR. E. WARMING // 1892</span>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
