import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MemphisPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          display: "flex",
          flexDirection: "column",
          minHeight: large ? 640 : undefined,
        }}
      >
        {/* striped top border — signature */}
        <div
          style={{
            height: large ? 10 : 5,
            background: `repeating-linear-gradient(90deg, ${p.ink} 0 12px, ${p.surface} 12px 24px)`,
            borderBottom: `2px solid ${p.ink}`,
            flexShrink: 0,
          }}
        />
        {/* squiggle nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: large ? "14px 28px" : "6px 10px",
            borderBottom: `2px dotted ${p.ink}`,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 5 }}>
            <span
              style={{
                width: large ? 26 : 13,
                height: large ? 26 : 13,
                borderRadius: "50%",
                background: p.accent,
                border: `2px solid ${p.ink}`,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <svg
              width={large ? 22 : 11}
              height={large ? 22 : 11}
              viewBox="0 0 20 20"
              style={{ flexShrink: 0 }}
            >
              <polygon points="10,1 19,18 1,18" fill={p.accent2} stroke={p.ink} strokeWidth="2" />
            </svg>
            <span
              style={{
                fontFamily: p.display,
                fontSize: large ? 17 : 8.5,
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              MEMPHIS&CO
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 4 }}>
            {["Work", "Play"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: large ? 12 : 6,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: `2px solid ${p.ink}`,
                  borderRadius: 999,
                  padding: large ? "6px 14px" : "2px 7px",
                  background: p.surface,
                  lineHeight: 1,
                }}
              >
                {l}
              </span>
            ))}
            <span
              style={{
                fontSize: large ? 12 : 6,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: `2px solid ${p.ink}`,
                borderRadius: large ? 12 : 7,
                padding: large ? "8px 16px" : "3px 8px",
                background: p.accent2,
                color: p.surface,
                boxShadow: large ? `4px 4px 0 ${p.ink}` : `2px 2px 0 ${p.ink}`,
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              Candy CTA
            </span>
          </div>
        </div>

        {/* confetti-shape hero */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            gap: large ? 24 : 8,
            alignItems: "center",
            padding: large ? "44px 28px 36px" : "10px 10px 8px",
          }}
        >
          {/* scattered confetti */}
          <svg
            style={{ position: "absolute", top: large ? 22 : 6, left: "4%", width: large ? 120 : 44, opacity: 1 }}
            viewBox="0 0 100 20"
          >
            <path d="M0 10 Q 12 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke={p.ink} strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div
            style={{
              position: "absolute",
              right: large ? 26 : 8,
              top: large ? 24 : 6,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: large ? 6 : 3,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                style={{
                  width: large ? 9 : 4,
                  height: large ? 9 : 4,
                  borderRadius: i % 3 === 2 ? 0 : "50%",
                  background: i % 3 === 0 ? p.accent : i % 3 === 1 ? p.accent2 : p.ink,
                  display: "inline-block",
                }}
              />
            ))}
          </div>
          <span
            style={{
              position: "absolute",
              left: large ? 300 : 108,
              bottom: large ? 18 : 4,
              width: large ? 34 : 12,
              height: large ? 34 : 12,
              borderRadius: "50%",
              border: `2px solid ${p.ink}`,
              background: p.accent,
              opacity: 0.9,
            }}
          />

          {/* headline block */}
          <div style={{ flex: "1 1 55%", position: "relative" }}>
            <div
              style={{
                fontSize: large ? 12 : 6,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: p.muted,
                marginBottom: large ? 10 : 4,
              }}
            >
              Milano 1981 — scattered with intent
            </div>
            <div style={{ fontFamily: p.display, fontSize: large ? 54 : 15, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              LOUD SHAPES,
              <br />
              SOFT PASTELS.
            </div>
            <svg style={{ display: "block", width: large ? 220 : 80, marginTop: large ? 6 : 2 }} viewBox="0 0 220 16">
              <path d="M2 10 Q 20 2, 40 10 T 80 10 T 120 10 T 160 10 T 200 10" fill="none" stroke={p.accent2} strokeWidth="6" strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: large ? 16 : 7, lineHeight: 1.5, margin: large ? "14px 0 18px" : "4px 0 6px", maxWidth: large ? 380 : 140 }}>
              Terrazzo confetti and squiggles over a strict grid. One neon jolt per view.
            </p>
            <div style={{ display: "flex", gap: large ? 12 : 5 }}>
              <span
                style={{
                  fontSize: large ? 14 : 6.5,
                  fontWeight: 800,
                  background: p.accent,
                  color: p.surface,
                  border: `2px solid ${p.ink}`,
                  borderRadius: large ? 14 : 7,
                  padding: large ? "12px 22px" : "4px 9px",
                  boxShadow: large ? `5px 5px 0 ${p.ink}` : `2px 2px 0 ${p.ink}`,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                Get started
              </span>
              <span
                style={{
                  fontSize: large ? 14 : 6.5,
                  fontWeight: 800,
                  background: p.surface,
                  color: p.ink,
                  border: `2px solid ${p.ink}`,
                  borderRadius: large ? 14 : 7,
                  padding: large ? "12px 22px" : "4px 9px",
                  boxShadow: large ? `5px 5px 0 ${p.accent2}` : `2px 2px 0 ${p.accent2}`,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                See shapes
              </span>
            </div>
          </div>

          {/* white card with pastel offset shadow */}
          <div style={{ flex: "1 1 45%", position: "relative", display: large ? "block" : "block" }}>
            <div
              style={{
                position: "absolute",
                inset: large ? "-14px -14px auto auto" : "-6px -6px auto auto",
                width: large ? 120 : 44,
                height: large ? 90 : 34,
                backgroundImage: `radial-gradient(${p.ink} 1.4px, transparent 1.4px)`,
                backgroundSize: large ? "12px 12px" : "7px 7px",
                opacity: 0.35,
              }}
            />
            <article
              style={{
                background: p.surface,
                border: `3px solid ${p.ink}`,
                borderRadius: large ? 18 : 9,
                padding: large ? 24 : 9,
                boxShadow: large ? `8px 8px 0 ${p.accent}` : `4px 4px 0 ${p.accent}`,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: large ? -16 : -7,
                  right: large ? 20 : 8,
                  fontSize: large ? 11 : 5.5,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: p.accent2,
                  color: p.surface,
                  border: `2px solid ${p.ink}`,
                  borderRadius: 999,
                  padding: large ? "5px 12px" : "2px 6px",
                }}
              >
                ★ new drop
              </span>
              <p style={{ fontSize: large ? 12 : 5.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: p.muted, margin: 0 }}>
                Kicker label
              </p>
              <h3 style={{ fontFamily: p.display, fontSize: large ? 24 : 9, lineHeight: 1.05, margin: large ? "8px 0 6px" : "3px 0 2px" }}>
                Card headline
              </h3>
              <svg style={{ display: "block", width: large ? 120 : 46 }} viewBox="0 0 120 10">
                <path d="M2 6 Q 12 1, 24 6 T 46 6 T 68 6 T 90 6 T 118 6" fill="none" stroke={p.accent} strokeWidth="4" strokeLinecap="round" />
              </svg>
              <p style={{ fontSize: large ? 14 : 6, lineHeight: 1.5, margin: large ? "10px 0 0" : "3px 0 0" }}>
                One supporting sentence in body type. Ink outlines, flat pastels.
              </p>
              {!large ? null : (
                <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                  {["● confetti", "〜 squiggle", "▲ triangle"].map((t, i) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        border: `2px solid ${p.ink}`,
                        borderRadius: 999,
                        padding: "4px 10px",
                        background: i === 0 ? p.bg : p.surface,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </div>
        </div>

        {/* black zigzag divider */}
        <div
          style={{
            height: large ? 14 : 7,
            background: `repeating-linear-gradient(-45deg, ${p.ink} 0 10px, ${p.surface} 10px 20px)`,
            borderTop: `2px solid ${p.ink}`,
            borderBottom: `2px solid ${p.ink}`,
            flexShrink: 0,
          }}
        />

        {/* terrazzo CTA footer */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: p.ink,
            color: p.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: large ? "22px 28px" : "7px 10px",
            marginBottom: large ? 22 : 14,
          }}
        >
          {[
            { l: "12%", t: "20%", b: p.accent, r: "50%" },
            { l: "30%", t: "60%", b: p.accent2, r: 0 },
            { l: "55%", t: "25%", b: p.bg, r: "50%" },
            { l: "72%", t: "65%", b: p.accent, r: 0 },
            { l: "88%", t: "30%", b: p.accent2, r: "50%" },
          ].map((s, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                left: s.l,
                top: s.t,
                width: large ? 12 : 5,
                height: large ? 12 : 5,
                borderRadius: s.r,
                background: s.b,
                opacity: 0.9,
              }}
            />
          ))}
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: p.display, fontSize: large ? 22 : 8, lineHeight: 1, letterSpacing: "-0.01em" }}>
              NEVER BORING. EVER.
            </div>
            <div style={{ fontSize: large ? 12 : 5.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.75, marginTop: large ? 6 : 2 }}>
              Terrazzo footer — pastel confetti on ink
            </div>
          </div>
          <span
            style={{
              position: "relative",
              fontSize: large ? 13 : 6,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: p.accent,
              color: p.surface,
              border: `2px solid ${p.bg}`,
              borderRadius: 999,
              padding: large ? "10px 20px" : "3px 8px",
              cursor: "pointer",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Join the party
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
