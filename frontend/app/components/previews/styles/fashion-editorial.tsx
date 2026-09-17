import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FashionEditorialPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const tiny = large ? 10 : 6;
  const pad = large ? 20 : 10;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
        }}
      >
        {/* VOGUE-style nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "14px 20px" : "7px 10px",
            borderBottom: `1px solid ${p.ink}26`,
          }}
        >
          <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 16 : 9, letterSpacing: "0.08em" }}>
            MAISON
          </span>
          <span style={{ display: "flex", gap: large ? 18 : 8, fontSize: tiny, letterSpacing: "0.28em", color: p.muted, fontWeight: 600 }}>
            <span>COLLECTION</span>
            <span>RUNWAY</span>
            <span>ATELIER</span>
          </span>
          <span style={{ display: "flex", gap: large ? 12 : 6, fontSize: large ? 13 : 8, color: p.ink }}>
            <span>○</span>
            <span>◇</span>
          </span>
        </div>

        {/* Cover hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1.02fr 1fr", flex: 1, minHeight: 0 }}>
          <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(178deg, ${p.muted} 0%, ${p.ink} 78%)` }}>
            <div
              style={{
                position: "absolute",
                top: large ? 16 : 8,
                left: large ? 16 : 8,
                fontSize: tiny,
                letterSpacing: "0.3em",
                color: p.surface,
                opacity: 0.85,
              }}
            >
              N°12
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontStyle: "italic",
                fontSize: large ? 150 : 64,
                lineHeight: 1,
                color: p.surface,
                opacity: 0.92,
              }}
            >
              12
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: large ? "12px 16px" : "6px 8px" }}>
              <div style={{ borderTop: `1px solid ${p.surface}55`, paddingTop: large ? 8 : 4, display: "flex", justifyContent: "space-between", color: p.surface, fontSize: tiny, letterSpacing: "0.22em" }}>
                <span>LOOK 12 — WOOL, SILK</span>
                <span style={{ color: p.surface, opacity: 0.8 }}>SS26</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: pad, background: p.bg }}>
            <div style={{ fontSize: tiny, letterSpacing: "0.32em", color: p.muted, fontWeight: 600 }}>
              AUTUMN — ISSUE I
            </div>
            <div style={{ fontFamily: p.display, fontSize: large ? 62 : 27, lineHeight: 0.98, marginTop: large ? 12 : 6 }}>
              Silence,
              <br />
              <span style={{ fontStyle: "italic", color: p.accent2 }}>tailored.</span>
            </div>
            <div style={{ width: large ? 48 : 24, borderTop: `1px solid ${p.ink}`, margin: large ? "16px 0 12px" : "8px 0 6px" }} />
            <p style={{ margin: 0, fontSize: large ? 13 : 7, lineHeight: 1.55, color: p.muted, maxWidth: large ? 300 : 160 }}>
              Forty-eight looks. One room. Shot on film in Paris.
            </p>
            <div style={{ display: "flex", gap: large ? 10 : 5, marginTop: large ? 18 : 9 }}>
              <span
                style={{
                  background: p.accent,
                  color: p.surface,
                  fontSize: tiny,
                  letterSpacing: "0.22em",
                  fontWeight: 600,
                  padding: large ? "11px 20px" : "6px 10px",
                }}
              >
                BOOK FITTING
              </span>
              <span
                style={{
                  border: `1px solid ${p.ink}`,
                  color: p.ink,
                  fontSize: tiny,
                  letterSpacing: "0.22em",
                  fontWeight: 600,
                  padding: large ? "10px 18px" : "5px 9px",
                }}
              >
                VIEW LOOKS
              </span>
            </div>
          </div>
        </div>

        {/* Credits + CTA footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 20px 26px" : "6px 10px 20px",
            borderTop: `1px solid ${p.ink}26`,
            background: p.surface,
            fontSize: tiny,
            letterSpacing: "0.2em",
            color: p.muted,
          }}
        >
          <span>PH. L. MERIDIAN — PARIS</span>
          <span style={{ color: p.ink, fontWeight: 600 }}>
            SS26 · 48 LOOKS <span style={{ color: p.accent2 }}>→</span>
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
