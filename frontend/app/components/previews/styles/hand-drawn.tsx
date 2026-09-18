import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HandDrawnPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const bg = p.bg;
  const surface = p.surface;
  const ink = p.ink;
  const muted = p.muted;
  const accent = p.accent;
  const accent2 = p.accent2;
  const display = "Caveat, Kalam, Comic Sans MS, sans-serif";
  const body = "Karla, Nunito, sans-serif";
  const pad = large ? 18 : 10;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: bg,
          color: ink,
          fontFamily: body,
        }}
      >
        {/* sketchy nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${large ? 10 : 6}px ${pad}px 0`,
          }}
        >
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: large ? 17 : 10, transform: "rotate(-2deg)" }}>
            doodle<span style={{ color: accent }}>*</span>co
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: large ? 12 : 7 }}>
            <span style={{ position: "relative", fontSize: large ? 9.5 : 6, fontWeight: 700 }}>
              features
              <svg viewBox="0 0 60 8" style={{ position: "absolute", left: 0, right: 0, bottom: -5, width: "100%" }} aria-hidden="true">
                <path d="M4 6 Q 20 2, 34 5 T 56 4" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ fontSize: large ? 9.5 : 6, fontWeight: 700, color: muted }}>pricing</span>
            <span
              style={{
                fontSize: large ? 9.5 : 6,
                fontWeight: 800,
                border: `2px solid ${ink}`,
                borderRadius: "50% 46% 52% 48% / 58% 52% 48% 54%",
                padding: large ? "4px 12px" : "2px 8px",
                transform: "rotate(1.5deg)",
              }}
            >
              start →
            </span>
          </span>
        </div>

        {/* wobbly hero card */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: `0 ${pad}px`, position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: large ? 22 : 12,
              top: large ? 18 : 10,
              fontFamily: display,
              fontSize: large ? 13 : 8,
              color: accent2,
              transform: "rotate(-8deg)",
            }}
            aria-hidden="true"
          >
            look here! ↴
          </span>
          <div
            style={{
              position: "relative",
              background: surface,
              border: `2.5px solid ${ink}`,
              borderRadius: "12px 14px 11px 15px",
              boxShadow: "0 6px 18px rgba(46,42,38,0.15)",
              padding: large ? "16px 20px" : "9px 12px",
              maxWidth: large ? 340 : 220,
              transform: "rotate(-1.5deg)",
              textAlign: "left",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -8,
                left: "50%",
                width: large ? 64 : 40,
                height: large ? 14 : 9,
                transform: "translateX(-50%) rotate(2deg)",
                background: "rgba(46,134,171,0.22)",
                borderLeft: `1.5px dashed ${accent2}`,
                borderRight: `1.5px dashed ${accent2}`,
              }}
              aria-hidden="true"
            />
            <div style={{ fontSize: large ? 8 : 5, fontWeight: 800, letterSpacing: "0.08em", color: muted }}>CHAPTER 01 — WOBBLY DEPT.</div>
            <div style={{ fontSize: large ? 22 : 13, fontWeight: 700, lineHeight: 1.1, marginTop: 4 }}>
              Ship it{" "}
              <span style={{ position: "relative", fontFamily: display, fontSize: large ? 26 : 15, background: "linear-gradient(transparent 58%, rgba(228,87,46,0.28) 58%)", padding: "0 4px" }}>
                human
                <svg viewBox="0 0 120 14" style={{ position: "absolute", left: 0, right: 0, bottom: -9, width: "100%" }} aria-hidden="true">
                  <path d="M4 9 Q30 3, 60 8 T116 6" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: large ? 10.5 : 6.5, color: ink, marginTop: large ? 12 : 8, lineHeight: 1.45 }}>
              Marker strokes, circled prices &amp; arrow doodles that point the way.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: large ? 12 : 8 }}>
              <span
                style={{
                  fontSize: large ? 10 : 6.5,
                  fontWeight: 800,
                  color: surface,
                  background: accent,
                  border: `2.5px solid ${ink}`,
                  borderRadius: "14px 16px 13px 17px",
                  padding: large ? "6px 14px" : "4px 10px",
                  transform: "rotate(-1deg)",
                }}
              >
                Get started →
              </span>
              <span style={{ fontFamily: display, fontSize: large ? 12 : 7.5, color: accent2 }}>free doodles!</span>
            </div>
          </div>
        </div>

        {/* doodle CTA footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${pad}px ${large ? 10 : 6}px`,
          }}
        >
          <svg viewBox="0 0 90 16" style={{ width: large ? 110 : 64 }} aria-hidden="true">
            <path d="M4 12 Q 30 4, 55 9 T 82 7 M74 3 L83 7 L75 13" fill="none" stroke={accent2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: large ? 9 : 5.5, color: muted, fontWeight: 700 }}>
            ← arrows explain everything <span style={{ fontFamily: display, color: accent, fontSize: large ? 12 : 7 }}>(rule nº 3)</span>
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
