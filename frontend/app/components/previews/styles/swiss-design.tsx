import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SwissDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Masthead Header with Bold Red Accent Bar */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 16 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                }}
              >
                Typografie
                <br />
                Zürich
              </div>
              <div
                style={{
                  fontSize: 6.5 * s,
                  fontWeight: 600,
                  color: p.muted,
                  letterSpacing: "0.12em",
                  marginTop: 3 * s,
                  textTransform: "uppercase",
                }}
              >
                Kunsthaus · 1965
              </div>
            </div>

            {/* Signature Swiss Red Accent Block */}
            <div
              style={{
                width: 28 * s,
                height: 28 * s,
                background: p.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: p.bg,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 14 * s,
                lineHeight: 1,
              }}
            >
              +
            </div>
          </div>

          <div
            style={{
              height: 2 * s,
              background: p.ink,
              margin: `${8 * s}px 0`,
            }}
          />
        </div>

        {/* Asymmetric 3-Column Mathematical Grid */}
        <div className="grid grid-cols-3" style={{ gap: 8 * s }}>
          <div style={{ borderTop: `1px solid ${p.ink}44`, paddingTop: 4 * s }}>
            <div style={{ fontSize: 9 * s, fontWeight: 700, color: p.ink }}>01</div>
            <div style={{ fontSize: 6.5 * s, fontWeight: 600, color: p.ink, marginTop: 2 * s }}>
              Raster
            </div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, lineHeight: 1.4, marginTop: 2 * s }}>
              Matematische Ordnung im Raum.
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${p.ink}44`, paddingTop: 4 * s }}>
            <div style={{ fontSize: 9 * s, fontWeight: 700, color: p.ink }}>02</div>
            <div style={{ fontSize: 6.5 * s, fontWeight: 600, color: p.ink, marginTop: 2 * s }}>
              Schrift
            </div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, lineHeight: 1.4, marginTop: 2 * s }}>
              Helvetica linksbündig ohne Zierrat.
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${p.ink}44`, paddingTop: 4 * s }}>
            <div style={{ fontSize: 9 * s, fontWeight: 700, color: p.ink }}>03</div>
            <div style={{ fontSize: 6.5 * s, fontWeight: 600, color: p.ink, marginTop: 2 * s }}>
              Farbe
            </div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, lineHeight: 1.4, marginTop: 2 * s }}>
              Reines Signalrot zur Akzentuierung.
            </div>
          </div>
        </div>

        {/* Technical Grid Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}22`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 600,
            color: p.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>CH-8001 Zürich</span>
          <span>Saal 3 / Ausstellung</span>
          <span style={{ color: p.accent, fontWeight: 700 }}>Eintritt Frei</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
