import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DarkAcademiaPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Bodleian Library Header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ fontFamily: p.display, fontSize: 9 * s, fontStyle: "italic", color: p.accent }}>
              The Bodleian · Tome IV
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            ANNO DOMINI MCMXXIV
          </span>
        </div>

        {/* Latin Epigraph & Leatherbound Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1px solid ${p.accent}55`,
            boxShadow: `0 ${6 * s}px ${24 * s}px ${p.ink}22`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Wax seal simulation */}
          <div
            style={{
              position: "absolute",
              top: 10 * s,
              right: 12 * s,
              width: 18 * s,
              height: 18 * s,
              borderRadius: "50%",
              background: p.accent,
              color: p.surface,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 8 * s,
              fontFamily: p.display,
              fontWeight: 700,
              boxShadow: `0 2px 6px ${p.accent}66`,
            }}
          >
            ✦
          </div>
          <div style={{ fontSize: 5.5 * s, color: p.accent2, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
            EPISTULA AD DISCIPULUM
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
              margin: `${4 * s}px 0 ${6 * s}px 0`,
              color: p.ink,
            }}
          >
            Carpe Noctem, O Socii
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Candlelit libraries, oxblood leather bindings, brass reading lamps, and Garamond verses penned in the dead of night.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                color: p.accent,
                fontSize: 5.5 * s,
                letterSpacing: "0.15em",
                padding: `${4 * s}px ${12 * s}px`,
                textTransform: "uppercase" as const,
              }}
            >
              Inspect Folio
            </span>
            <span style={{ fontSize: 6 * s, color: p.muted, fontStyle: "italic" }}>
              "Per aspera ad astra"
            </span>
          </div>
        </div>

        {/* Footer Latin strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>OXBLOOD &amp; BRASS</span>
          <span>MARGINALIA ANNOTATIONS</span>
          <span style={{ color: p.accent }}>LUX IN TENEBRIS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
