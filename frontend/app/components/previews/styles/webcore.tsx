import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BG = "#C0C0C0";
const SURFACE = "#FFFFFF";
const INK = "#000000";
const MUTED = "#555555";
const ACCENT = "#0000EE";
const VISITED = "#551A8B";
const ACCENT2 = "#008080";
const DISPLAY = '"Times New Roman", Times, serif';
const BODY = "Arial, Helvetica, sans-serif";

export function WebcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 12 : 8;
  const gap = large ? 8 : 5;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: BG, color: INK, fontFamily: BODY }}
      >
        {/* surreal browser bar */}
        <div
          style={{
            margin: pad,
            marginBottom: 0,
            background: SURFACE,
            border: `2px outset ${BG}`,
            boxShadow: "4px 4px 0 rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})`,
              color: SURFACE,
              fontSize: large ? 9 : 6.5,
              padding: "3px 8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              ◉ welcome_to_the_web.html — Netscape
            </span>
            <span style={{ flexShrink: 0, marginLeft: 8 }}>_ □ ✕</span>
          </div>
          <div style={{ display: "flex", gap: 4, padding: large ? "6px 8px 0" : "4px 6px 0", alignItems: "center" }}>
            <span style={{ background: BG, border: `2px outset ${BG}`, fontSize: large ? 8 : 5.5, padding: "1px 6px" }}>◀ Back</span>
            <span style={{ background: BG, border: `2px outset ${BG}`, fontSize: large ? 8 : 5.5, padding: "1px 6px" }}>⟳</span>
            <span
              style={{
                flex: 1,
                background: SURFACE,
                border: `2px inset ${BG}`,
                fontSize: large ? 8 : 5.5,
                padding: "2px 6px",
                color: INK,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              http://geocities.example/~you/index.html
            </span>
            <span style={{ background: BG, border: `2px outset ${BG}`, fontSize: large ? 8 : 5.5, padding: "1px 6px", fontWeight: 700 }}>Go</span>
          </div>
          <div style={{ padding: large ? "5px 10px 7px" : "3px 8px 5px", fontSize: large ? 9 : 6.5 }}>
            <a style={{ color: ACCENT, textDecoration: "underline" }}>home</a>
            <span style={{ color: MUTED }}> · </span>
            <a style={{ color: VISITED, textDecoration: "underline" }}>directory</a>
            <span style={{ color: MUTED }}> · </span>
            <a style={{ color: ACCENT, textDecoration: "underline" }}>view source</a>
            <span style={{ color: MUTED }}> · </span>
            <a style={{ color: VISITED, textDecoration: "underline" }}>guestbook</a>
          </div>
        </div>

        {/* dreamy tiled hero */}
        <div
          className="flex min-h-0 flex-1 flex-col"
          style={{
            margin: pad,
            background: SURFACE,
            border: `2px outset ${BG}`,
            boxShadow: "4px 4px 0 rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ padding: large ? 12 : 8, paddingBottom: 0 }}>
            <div style={{ fontSize: large ? 9 : 6, color: MUTED }}>★ UNDER CONSTRUCTION ★ best viewed 800×600</div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: large ? 30 : 17, lineHeight: 1.02, marginTop: 2 }}>
              Index of /feelings/
            </div>
            <div style={{ fontSize: large ? 10 : 6.5, marginTop: 3 }}>
              tiled thumbnails, dithered dreams &amp;{" "}
              <a style={{ color: ACCENT, textDecoration: "underline" }}>view-source pride</a>.
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: gap,
              padding: large ? 12 : 8,
            }}
          >
            {[
              { bg: ACCENT2, glyph: "📁", label: "pixels/" },
              { bg: SURFACE, glyph: "✶", label: "diary.html" },
              { bg: BG, glyph: "◫", label: "mixtape" },
              { bg: ACCENT2, glyph: "❀", label: "shrine/" },
            ].map((t) => (
              <div key={t.label} style={{ border: `1px solid ${INK}`, background: t.bg, textAlign: "center" }}>
                <div style={{ fontSize: large ? 18 : 11, lineHeight: 1, paddingTop: large ? 8 : 5 }}>{t.glyph}</div>
                <div
                  style={{
                    fontSize: large ? 7.5 : 5,
                    color: t.bg === SURFACE || t.bg === BG ? ACCENT : SURFACE,
                    textDecoration: "underline",
                    padding: "2px 2px 4px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {t.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: `0 ${large ? 12 : 8}px`, fontSize: large ? 9 : 6.5, lineHeight: 1.7 }}>
            <div>
              <a style={{ color: ACCENT, textDecoration: "underline" }}>../ parent directory</a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a style={{ color: ACCENT, textDecoration: "underline" }}>diary.html</a>
              <span style={{ color: MUTED }}>12k · 1997</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a style={{ color: VISITED, textDecoration: "underline" }}>mixtape.mid ♫</a>
              <span style={{ color: MUTED }}>88k · loop</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, padding: large ? 12 : 8 }}>
            <span style={{ background: BG, border: `2px outset ${BG}`, outline: `1px solid ${INK}`, fontSize: large ? 9 : 6.5, fontWeight: 700, padding: "3px 10px" }}>
              Sign guestbook
            </span>
            <span style={{ background: BG, border: `2px outset ${BG}`, fontSize: large ? 9 : 6.5, padding: "3px 10px" }}>
              View source
            </span>
          </div>
          <div
            style={{
              marginTop: "auto",
              borderTop: `2px groove ${BG}`,
              background: BG,
              fontSize: large ? 8 : 5.5,
              padding: "3px 8px",
              display: "flex",
              justifyContent: "space-between",
              color: INK,
            }}
          >
            <span>4 objects · 56.6k modem</span>
            <span>14:02</span>
          </div>
        </div>

        {/* shrine-link footer taskbar */}
        <div
          style={{
            marginTop: "auto",
            background: BG,
            borderTop: `2px outset ${SURFACE}`,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: large ? "6px 10px" : "4px 8px",
            fontSize: large ? 8.5 : 6,
          }}
        >
          <span style={{ background: BG, border: `2px outset ${BG}`, fontWeight: 700, padding: "1px 8px", display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ background: ACCENT2, color: SURFACE, padding: "0 4px", fontSize: large ? 8 : 5.5 }}>❖</span> Start
          </span>
          <span style={{ color: MUTED, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
            <a style={{ color: ACCENT, textDecoration: "underline" }}>shrine</a> ·{" "}
            <a style={{ color: VISITED, textDecoration: "underline" }}>links</a> ·{" "}
            <a style={{ color: ACCENT, textDecoration: "underline" }}>webring ← →</a>
          </span>
          <span style={{ marginLeft: "auto", border: `1px inset ${BG}`, background: BG, padding: "1px 8px", flexShrink: 0 }}>
            ⏳ 2:47 PM
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
