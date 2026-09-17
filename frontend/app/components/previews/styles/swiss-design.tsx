import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SwissDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const hairline = `1px solid ${p.ink}`;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: p.bg,
          color: p.ink,
          fontFamily: p.display,
          borderRadius: 0,
          overflow: "hidden",
          textAlign: "left",
        }}
      >
        {/* §11 navigation: index number, wordmark, section links + thick black rule */}
        <div
          style={{
            borderBottom: `3px solid ${p.ink}`,
            padding: large ? "10px 14px" : "7px 9px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              fontFamily: p.display,
              fontSize: large ? 9 : 6,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span>01 / Index</span>
            <span>Atelier Suisse</span>
            <span style={{ display: "flex", gap: large ? 12 : 7 }}>
              <span>Grid</span>
              <span>Type</span>
              <span>Print</span>
            </span>
          </div>
        </div>

        {/* §5 asymmetric 12-col grid */}
        <div className="grid grid-cols-12" style={{ flex: 1, minHeight: 0 }}>
          {/* Hero: 8 cols, flush-left grotesk */}
          <div
            className="col-span-8"
            style={{
              padding: large ? "14px" : "9px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: large ? 9 : 6,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: large ? 9 : 6,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: p.muted,
              }}
            >
              Helvetica — Grotesk 1957
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 54 : 30,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textAlign: "left",
              }}
            >
              HEL—
              <br />
              VET—
              <br />
              ICA
            </div>
            {/* Red accent bar */}
            <div
              style={{
                background: p.accent,
                height: large ? 8 : 5,
                width: large ? 76 : 48,
                borderRadius: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontFamily: p.body,
                fontSize: large ? 10.5 : 6.8,
                lineHeight: 1.4,
                color: p.ink,
                maxWidth: large ? 300 : 190,
              }}
            >
              Asymmetric grid. Objective type. One decisive red.
            </p>
            {/* §§9-10 buttons: sharp, black fill + 2px outline */}
            <div style={{ display: "flex", gap: large ? 8 : 5 }}>
              <span
                style={{
                  background: p.ink,
                  color: p.surface,
                  border: `2px solid ${p.ink}`,
                  borderRadius: 0,
                  fontFamily: p.display,
                  fontSize: large ? 9 : 6,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: large ? "8px 12px" : "5px 7px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Buy Ticket
              </span>
              <span
                style={{
                  background: "transparent",
                  color: p.ink,
                  border: `2px solid ${p.ink}`,
                  borderRadius: 0,
                  fontFamily: p.display,
                  fontSize: large ? 9 : 6,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: large ? "8px 12px" : "5px 7px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Program
              </span>
            </div>
          </div>

          {/* Meta rail: 4 cols, §10 grid cells with number + title + rule */}
          <div
            className="col-span-4"
            style={{
              background: p.surface,
              borderLeft: hairline,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              minWidth: 0,
              borderRadius: 0,
            }}
          >
            <div
              style={{
                fontSize: large ? 9 : 6,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: p.muted,
                padding: large ? "10px 10px 6px" : "7px 7px 4px",
                borderBottom: hairline,
              }}
            >
              Grid / 12 col
            </div>
            {[
              { n: "01", t: "Raster" },
              { n: "02", t: "Type" },
              { n: "03", t: "Farbe" },
            ].map((row, i) => (
              <div
                key={row.n}
                style={{
                  padding: large ? "8px 10px" : "5px 7px",
                  borderBottom: i < 2 ? hairline : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: p.display,
                    fontWeight: 700,
                    fontSize: large ? 20 : 12,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {row.n}
                </span>
                <span
                  style={{
                    fontFamily: p.display,
                    fontSize: large ? 9 : 6,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {row.t}
                </span>
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div
              style={{
                background: p.accent,
                color: p.surface,
                fontSize: large ? 9 : 6,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: large ? "8px 10px" : "5px 7px",
                borderRadius: 0,
              }}
            >
              Zürich — 47.37°N
            </div>
          </div>
        </div>

        {/* §11 footer rule */}
        <div
          style={{
            borderTop: hairline,
            padding: large ? "8px 14px 18px" : "5px 9px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            fontFamily: p.display,
            fontSize: large ? 8.5 : 6,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: p.muted,
            whiteSpace: "nowrap",
          }}
        >
          <span>Flush left — ragged right</span>
          <span>12 col / 24px gutter</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
