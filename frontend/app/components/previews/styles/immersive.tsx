import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ImmersivePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* Full-bleed hero scene */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg,${p.surface} 0%,${p.accent2} 52%,${p.bg} 100%)" }}
        />
        {/* Sun / glow — tokens only */}
        <div
          style={{
            position: "absolute",
            top: large ? "18%" : "16%",
            left: "50%",
            width: large ? 84 : 48,
            height: large ? 84 : 48,
            borderRadius: "50%",
            background: "radial-gradient(circle,${p.accent} 0%,${p.accent2} 58%,rgba(6,6,6,0) 72%)",
            transform: "translateX(-50%)",
          }}
        />
        {/* Horizon silhouette */}
        <div style={{ position: "absolute", left: "-8%", right: "-8%", top: large ? "52%" : "50%", height: large ? 10 : 6, background: p.bg }} />
        {/* Cinematic scrim + vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg,rgba(6,6,6,0.55) 0%,rgba(6,6,6,0) 34%,rgba(6,6,6,0.28) 58%,rgba(6,6,6,0.88) 100%)" }}
        />
        {/* Letterbox mattes */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: large ? 10 : 7, background: p.bg }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: large ? 22 : 16, background: p.bg }} />

        {/* Overlay nav */}
        <div
          className="relative flex items-center justify-between"
          style={{ padding: large ? "18px 20px 0" : "12px 12px 0", fontSize: large ? 7.5 : 5.5 }}
        >
          <div className="flex items-center" style={{ gap: 6 }}>
            <span style={{ width: large ? 9 : 7, height: large ? 9 : 7, borderRadius: "50%", background: p.accent, display: "block" }} />
            <span style={{ fontWeight: 800, letterSpacing: "0.18em", color: p.ink }}>ATLAS&nbsp;FILM</span>
          </div>
          <div className="flex items-center" style={{ gap: large ? 10 : 7, color: p.muted, fontWeight: 700, letterSpacing: "0.14em" }}>
            <span style={{ color: p.ink }}>ACT&nbsp;I</span>
            <span>ACT&nbsp;II</span>
            {large ? <span>ACT&nbsp;III</span> : null}
          </div>
          <div className="flex items-center" style={{ gap: 6 }}>
            <span style={{ color: p.muted, letterSpacing: "0.12em", fontWeight: 700 }}>67%</span>
            <span
              className="flex items-center justify-center"
              style={{ width: large ? 18 : 14, height: large ? 18 : 14, borderRadius: "50%", border: "1px solid ${p.ink}", color: p.ink, fontSize: large ? 8 : 6 }}
            >
              ▸
            </span>
          </div>
        </div>

        {/* Hero overlay type */}
        <div className="relative flex flex-1 flex-col justify-end" style={{ padding: large ? "0 20px 10px" : "0 12px 8px" }}>
          <div style={{ fontSize: large ? 7.5 : 5.5, letterSpacing: "0.28em", color: p.accent, fontWeight: 700 }}>
            ACT I — THE CROSSING
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontSize: large ? 38 : 20,
              lineHeight: 0.95,
              color: p.ink,
              marginTop: 4,
            }}
          >
            WALK INTO
            <br />
            THE FILM
          </div>
          <div style={{ fontSize: large ? 9 : 6.5, color: p.muted, marginTop: 5, maxWidth: large ? 300 : 190 }}>
            Scroll-driven scenes with sound-off captions. Chrome dissolves — story stays.
          </div>
          <div className="flex items-center" style={{ gap: 8, marginTop: large ? 10 : 7 }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontWeight: 800,
                fontSize: large ? 8.5 : 6,
                letterSpacing: "0.08em",
                padding: large ? "7px 12px" : "5px 9px",
                borderRadius: 999,
              }}
            >
              ENTER ACT I
            </span>
            <span
              style={{
                border: "1px solid ${p.ink}",
                color: p.ink,
                fontWeight: 700,
                fontSize: large ? 8.5 : 6,
                letterSpacing: "0.08em",
                padding: large ? "7px 12px" : "5px 9px",
                borderRadius: 999,
              }}
            >
              WATCH TRAILER
            </span>
          </div>
        </div>

        {/* Scroll-cue footer */}
        <div
          className="relative flex items-center justify-between"
          style={{ margin: "0 0 0", padding: large ? "8px 20px 10px" : "6px 12px 8px", borderTop: "1px solid ${p.surface}" }}
        >
          <div className="flex items-center" style={{ gap: 6 }}>
            <span style={{ display: "block", width: large ? 28 : 20, height: 1, background: p.accent }} />
            <span style={{ display: "block", width: large ? 44 : 30, height: 1, background: p.surface }} />
            <span style={{ fontSize: large ? 7 : 5, letterSpacing: "0.22em", color: p.muted, fontWeight: 700 }}>SCROLL</span>
          </div>
          <div style={{ fontSize: large ? 7 : 5, letterSpacing: "0.2em", color: p.muted, fontWeight: 700 }}>
            01 / 03&nbsp;&nbsp;·&nbsp;&nbsp;DOLBY&nbsp;·&nbsp;4K
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
