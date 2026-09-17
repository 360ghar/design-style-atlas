import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const SURF = "#C3C7CB";
const INK = "#000000";
const MUTED = "#555555";
const ACCENT = "#000080";
const RED = "#FF0000";
const TITLE_GRAD = "linear-gradient(90deg,#000080,#1084d0)";
const FONT = "'Pixelated MS Sans Serif','MS Sans Serif',Tahoma,Verdana,sans-serif";

const OUTSET = "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf";
const INSET = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";

export function Windows95Preview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const t = large
    ? { title: 12, ui: 11, tiny: 10, pad: 14, winW: "68%" as const, icon: 30, btnPad: "5px 18px" }
    : { title: 7.5, ui: 6.5, tiny: 5.5, pad: 8, winW: "78%" as const, icon: 18, btnPad: "2px 10px" };

  const chromeBtn = (size: number): React.CSSProperties => ({
    width: large ? 22 : 15,
    height: large ? 20 : 13,
    fontSize: size,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: SURF,
    color: INK,
    boxShadow: OUTSET,
    fontFamily: FONT,
    fontWeight: 700,
  });

  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ fontFamily: FONT }}>
        {/* teal desktop */}
        <div className="relative flex-1" style={{ padding: large ? 18 : 10 }}>
          {/* desktop icons */}
          <div style={{ position: "absolute", left: large ? 16 : 8, top: large ? 16 : 8, display: "flex", flexDirection: "column", gap: large ? 14 : 8 }}>
            {[["▦", "My Computer"], ["♻", "Recycle Bin"]].map(([g, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: large ? 64 : 40 }}>
                <div style={{ width: t.icon, height: t.icon, background: SURF, boxShadow: OUTSET, display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 15 : 9, color: ACCENT }}>
                  {g}
                </div>
                <span style={{ color: "#fff", fontSize: t.tiny, textAlign: "center", lineHeight: 1.2, textShadow: "1px 1px 0 #000" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* hero window */}
          <div
            style={{
              width: t.winW,
              marginLeft: "auto",
              marginRight: large ? 24 : 6,
              background: SURF,
              boxShadow: `${OUTSET}, 4px 4px 0 rgba(0,0,0,0.3)`,
              padding: 3,
            }}
          >
            {/* title bar */}
            <div style={{ background: TITLE_GRAD, color: "#fff", display: "flex", alignItems: "center", gap: 6, padding: large ? "4px 4px 4px 8px" : "2px 2px 2px 5px" }}>
              <span style={{ fontSize: t.title, fontWeight: 700, letterSpacing: "0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Welcome — Design Styles
              </span>
              <span style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <span style={chromeBtn(t.tiny)}>_</span>
                <span style={chromeBtn(t.tiny)}>□</span>
                <span style={chromeBtn(t.tiny)}>✕</span>
              </span>
            </div>

            {/* menu bar */}
            <div style={{ display: "flex", gap: large ? 12 : 7, padding: large ? "4px 8px" : "2px 5px", fontSize: t.ui, color: INK }}>
              {["File", "Edit", "View", "Help"].map((m) => (
                <span key={m}><u style={{ textDecorationStyle: "solid" }}>{m[0]}</u>{m.slice(1)}</span>
              ))}
            </div>

            {/* content */}
            <div style={{ padding: large ? "4px 12px 10px" : "2px 7px 6px" }}>
              <div style={{ fontSize: t.tiny, fontWeight: 700, color: INK, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Chicago-era pixel truth
              </div>
              <div style={{ fontSize: large ? 22 : 12, fontWeight: 700, color: INK, lineHeight: 1.1, marginTop: 2 }}>
                Gray-beveled perfection.
              </div>
              <div style={{ fontSize: t.ui, color: INK, marginTop: large ? 6 : 3 }}>
                Navy titles, outset chrome, dotted focus. Bevels are physics.
              </div>

              {/* segmented progress well */}
              <div style={{ marginTop: large ? 10 : 5, background: "#fff", boxShadow: INSET, padding: 2, height: large ? 20 : 12, display: "flex", gap: 2 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ flex: 1, background: i < 5 ? ACCENT : "transparent" }} />
                ))}
                <span style={{ position: "absolute" as const, left: -9999 }}>Copying files, 42 percent complete</span>
              </div>
              <div style={{ fontSize: t.tiny, color: MUTED, marginTop: 3 }}>Copying files… 42% — C:\STYLES\gray_bevel.dat</div>

              {/* button row */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginTop: large ? 10 : 5 }}>
                <span style={{ fontSize: t.ui, background: SURF, color: INK, boxShadow: OUTSET, outline: "1px solid #000", outlineOffset: 0, padding: t.btnPad, fontWeight: 700 }}>
                  <span style={{ outline: "1px dotted #000", outlineOffset: -1, padding: "0 2px" }}>OK</span>
                </span>
                <span style={{ fontSize: t.ui, background: SURF, color: INK, boxShadow: OUTSET, padding: t.btnPad }}>Cancel</span>
                <span style={{ fontSize: t.ui, background: SURF, color: RED, boxShadow: OUTSET, padding: t.btnPad, fontWeight: 700 }}>✕</span>
              </div>
            </div>

            {/* status bar */}
            <div style={{ display: "flex", gap: 3, padding: "0 3px 3px" }}>
              {["3 object(s)", "Teal field ready"].map((s) => (
                <span key={s} style={{ flex: 1, fontSize: t.tiny, color: MUTED, background: SURF, boxShadow: INSET, padding: large ? "3px 8px" : "1px 5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* taskbar */}
        <div style={{ background: SURF, boxShadow: "inset 0 1px #ffffff, inset 0 2px #dfdfdf", display: "flex", alignItems: "center", gap: 6, padding: large ? "5px 8px" : "3px 5px" }}>
          <span style={{ fontSize: t.ui, fontWeight: 800, color: INK, background: SURF, boxShadow: OUTSET, padding: large ? "4px 12px" : "2px 8px", display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}>
            <span style={{ width: large ? 14 : 9, height: large ? 14 : 9, background: `conic-gradient(${RED} 0 25%, #00a000 0 50%, ${ACCENT} 0 75%, #ffff00 0)`, boxShadow: INSET, display: "inline-block" }} />
            Start
          </span>
          <span style={{ fontSize: t.ui, color: INK, background: "#e4e4e4", boxShadow: INSET, padding: large ? "4px 12px" : "2px 8px", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: large ? 220 : 110 }}>
            ▦ Welcome — Design…
          </span>
          <span style={{ marginLeft: "auto", fontSize: t.ui, color: INK, background: SURF, boxShadow: INSET, padding: large ? "4px 10px" : "2px 7px", whiteSpace: "nowrap" }}>
            ◪ 14:02
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
