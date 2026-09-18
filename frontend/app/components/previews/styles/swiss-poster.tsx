import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SwissPosterPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Constructivist Asymmetric Header */}
        <div className="flex items-start justify-between">
          <div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: p.ink,
              }}
            >
              Musica
              <br />
              Viva
            </div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: p.muted,
                marginTop: 3 * s,
              }}
            >
              Tonhalle Zürich · 1958
            </div>
          </div>

          {/* Bold Constructivist Numerals */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 20 * s,
                fontWeight: 900,
                color: p.accent,
                lineHeight: 0.9,
              }}
            >
              24
            </div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: p.ink,
              }}
            >
              Oktober
            </div>
          </div>
        </div>

        {/* Structural Black & Red Rule Bars */}
        <div style={{ margin: `${6 * s}px 0` }}>
          <div style={{ height: 4 * s, background: p.ink }} />
          <div style={{ height: 3 * s, background: p.accent, marginTop: 2 * s }} />
        </div>

        {/* Objective Mathematical Program Grid */}
        <div className="my-auto grid grid-cols-2" style={{ gap: 10 * s }}>
          <div>
            <div style={{ fontSize: 6.5 * s, fontWeight: 800, textTransform: "uppercase" }}>
              I. Igor Strawinsky
            </div>
            <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 1 * s }}>
              Symphonie de Psaumes (1930)
            </div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, marginTop: 2 * s }}>
              Chor und Orchester der Tonhalle
            </div>
          </div>

          <div>
            <div style={{ fontSize: 6.5 * s, fontWeight: 800, textTransform: "uppercase" }}>
              II. Béla Bartók
            </div>
            <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 1 * s }}>
              Musik für Saiteninstrumente
            </div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, marginTop: 2 * s }}>
              Leitung: Hans Rosbaud
            </div>
          </div>
        </div>

        {/* Constructivist Objective Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: p.muted,
          }}
        >
          <span>Gestaltung: J. Müller-Brockmann</span>
          <span>Vorverkauf Tonhalle-Kasse</span>
          <span style={{ color: p.accent }}>Fr. 4.– bis 16.–</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
