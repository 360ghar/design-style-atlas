import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const COLLECTION = [
  { numeral: "I", label: "Haute Joaillerie", detail: "Vault Nº 1" },
  { numeral: "II", label: "Grands Crus", detail: "Vault Nº 2" },
  { numeral: "III", label: "Palais Suites", detail: "Vault Nº 3" },
];

export function LuxuryMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = (s: number, l: number) => (large ? l : s);
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${p.surface}, ${p.bg} 72%)`,
          fontFamily: p.body,
          color: p.ink,
        }}
      >
        {/* Crest bar */}
        <div
          className="flex items-center justify-between"
          style={{ borderBottom: `1px solid ${p.accent}55`, padding: large ? "10px 20px" : "6px 12px" }}
        >
          <span style={{ fontSize: fs(5.5, 8), letterSpacing: "0.28em", color: p.muted }}>EST · MDCCCLXXV</span>
          <span
            className="flex items-center gap-2"
            style={{ fontFamily: p.display, fontSize: fs(9, 14), fontWeight: 700, color: p.ink }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: large ? 22 : 15,
                height: large ? 22 : 15,
                border: `1px solid ${p.accent}`,
                transform: "rotate(45deg)",
                fontSize: fs(6, 9),
                color: p.accent,
              }}
            >
              <span style={{ transform: "rotate(-45deg)" }}>M</span>
            </span>
            Maison Doré
          </span>
          <span
            style={{
              fontSize: fs(5.5, 8),
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: p.accent,
              border: `1px solid ${p.accent}`,
              borderRadius: 999,
              padding: large ? "5px 12px" : "3px 8px",
              cursor: "pointer",
            }}
          >
            MEMBERS
          </span>
        </div>

        {/* Ceremonial hero */}
        <div className="flex flex-col items-center text-center" style={{ padding: large ? "16px 28px 10px" : "10px 16px 6px" }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span style={{ width: large ? 44 : 26, height: 1, background: p.accent }} />
            <span style={{ fontSize: fs(5.5, 8), letterSpacing: "0.32em", fontWeight: 700, color: p.accent }}>
              ❦ &nbsp;HAUTE COLLECTION&nbsp; ❦
            </span>
            <span style={{ width: large ? 44 : 26, height: 1, background: p.accent }} />
          </div>
          <div style={{ fontFamily: p.display, fontWeight: 700, lineHeight: 1.02, fontSize: fs(21, 38), marginTop: large ? 8 : 5 }}>
            Opulence,
            <span style={{ fontStyle: "italic", fontWeight: 500, color: p.accent }}> Composed</span>
          </div>
          <div style={{ fontStyle: "italic", fontSize: fs(7.5, 11), color: p.muted, marginTop: large ? 6 : 3 }}>
            Black lacquer · gold leaf · candlelight — treasure rooms with a docent.
          </div>
        </div>

        {/* Jewel-box card row */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: large ? 12 : 7, padding: large ? "10px 24px 4px" : "6px 12px 2px" }}
        >
          {COLLECTION.map((c, i) => (
            <div
              key={c.numeral}
              style={{
                background: p.surface,
                border: `1px solid ${p.accent}${i === 1 ? "" : "66"}`,
                outline: `1px solid ${p.accent}33`,
                outlineOffset: 3,
                borderRadius: 4,
                padding: large ? "12px 10px 10px" : "7px 6px 6px",
                textAlign: "center",
                boxShadow: `0 14px 34px rgba(0,0,0,0.55), inset 0 0 18px ${p.accent}26`,
                position: "relative",
              }}
            >
              {i === 1 && (
                <span
                  style={{
                    position: "absolute",
                    top: -7,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: fs(5, 7),
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    background: p.accent2,
                    color: p.ink,
                    borderRadius: 999,
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  CURATED
                </span>
              )}
              <div style={{ fontFamily: p.display, fontSize: fs(11, 17), color: p.accent, lineHeight: 1 }}>{c.numeral}</div>
              <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: fs(8, 12), marginTop: 4 }}>{c.label}</div>
              <div style={{ fontSize: fs(6, 8.5), letterSpacing: "0.18em", color: p.muted, marginTop: 3 }}>{c.detail}</div>
            </div>
          ))}
        </div>

        {/* Concierge CTA */}
        <div
          className="flex items-center justify-center"
          style={{ gap: large ? 12 : 8, marginTop: "auto", padding: large ? "12px 20px 16px" : "7px 12px 10px" }}
        >
          <span style={{ fontSize: fs(6.5, 9.5), fontStyle: "italic", color: p.muted }}>Private concierge awaits —</span>
          <span
            style={{
              fontFamily: p.display,
              fontSize: fs(6.5, 9.5),
              letterSpacing: "0.24em",
              fontWeight: 700,
              color: p.accent,
              border: `1px solid ${p.accent}`,
              borderRadius: 999,
              padding: large ? "9px 20px" : "6px 13px",
              background: p.bg,
              cursor: "pointer",
              boxShadow: `inset 0 0 0 1px ${p.accent}40, inset 0 0 14px ${p.accent}26`,
              whiteSpace: "nowrap",
            }}
          >
            REQUEST INVITATION
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
