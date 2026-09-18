import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ScandinavianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* Scandinavian Studio Folio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 600,
                color: p.ink,
                letterSpacing: "-0.01em",
              }}
            >
              København Møbler
            </span>
            <span
              style={{
                width: 5 * s,
                height: 5 * s,
                borderRadius: "50%",
                background: p.accent2,
                display: "inline-block",
              }}
            />
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontWeight: 500 }}>
            Form · Lys · Træ
          </span>
        </div>

        {/* Cozy Rounded Warmth Card with Daylight Diffuse Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 12 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${6 * s}px ${20 * s}px ${p.ink}0F`,
            border: `1px solid ${p.ink}0A`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6.5 * s,
                  color: p.accent,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Atelier Series 04
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 600,
                  color: p.ink,
                  lineHeight: 1.25,
                  margin: `${2 * s}px 0 0 0`,
                }}
              >
                Egetræ Spisestol
              </h3>
            </div>
            <span
              style={{
                fontSize: 6 * s,
                background: `${p.accent2}18`,
                color: p.accent2,
                padding: `${3 * s}px ${7 * s}px`,
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              Solid Oak
            </span>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.5,
              margin: `${8 * s}px 0`,
            }}
          >
            Crafted from slow-grown Danish timber with natural linen weave upholstery.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}08`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 8 * s, fontWeight: 600, color: p.ink }}>
              2.450 DKK
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: "none",
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 600,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
                boxShadow: `0 ${2 * s}px ${6 * s}px ${p.accent}33`,
              }}
            >
              Se detaljer
            </button>
          </div>
        </div>

        {/* Footer understated warm note */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 6 * s,
            color: p.muted,
          }}
        >
          <span>Bæredygtig produktion</span>
          <span>Dansk designarv</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
