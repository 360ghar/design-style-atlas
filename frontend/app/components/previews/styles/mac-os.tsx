import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BG = "#E8E6DF";
const SURFACE = "#F2F0EB";
const INK = "#2B2B2B";
const MUTED = "#5F5B54";
const ACCENT = "#0B5FFF";
const ACCENT2 = "#FF9F00";
const DISPLAY = "Charcoal, Chicago, Geneva, sans-serif";
const BODY = "Geneva, Verdana, Helvetica Neue, sans-serif";

export function MacOSPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const menuFs = large ? 8.5 : 5.5;
  const titleFs = large ? 9 : 6.5;
  const bodyFs = large ? 9 : 6.5;
  const iconFs = large ? 22 : 13;
  const dot = large ? 9 : 6;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: BG, color: INK, fontFamily: BODY }}>
        {/* menu bar */}
        <div
          style={{
            background: SURFACE,
            borderBottom: `1px solid ${MUTED}`,
            display: "flex",
            alignItems: "center",
            gap: large ? 10 : 6,
            padding: large ? "5px 10px" : "3px 7px",
            fontSize: menuFs,
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: large ? 11 : 7 }}>&#63743;</span>
          <strong style={{ fontFamily: DISPLAY }}>Finder</strong>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Special</span>
          <span style={{ marginLeft: "auto", color: MUTED }}>Wed 2:04 PM &#8981;</span>
        </div>

        {/* aqua window hero */}
        <div className="flex-1" style={{ padding: large ? 14 : 8 }}>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${MUTED}`,
              borderRadius: 4,
              boxShadow: "0 4px 16px rgba(43,43,43,0.18)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: `repeating-linear-gradient(0deg, ${BG} 0 2px, ${SURFACE} 2px 3px)`,
                borderBottom: `1px solid ${MUTED}`,
                display: "flex",
                alignItems: "center",
                padding: large ? "6px 10px" : "4px 7px",
              }}
            >
              <div style={{ display: "flex", gap: large ? 5 : 3 }}>
                {[ACCENT2, ACCENT, MUTED].map((c) => (
                  <span
                    key={c}
                    style={{
                      width: dot,
                      height: dot,
                      borderRadius: 999,
                      background: c,
                      border: `1px solid ${INK}`,
                      display: "block",
                    }}
                  />
                ))}
              </div>
              <div style={{ flex: 1, textAlign: "center", fontFamily: DISPLAY, fontSize: titleFs }}>
                Macintosh HD
              </div>
              <div style={{ width: large ? 34 : 22 }} />
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: large ? 84 : 56,
                  borderRight: `1px solid ${MUTED}`,
                  padding: large ? 8 : 5,
                  fontSize: bodyFs,
                  display: "flex",
                  flexDirection: "column",
                  gap: large ? 5 : 3,
                }}
              >
                {["Applications", "Documents", "Music"].map((t, i) => (
                  <div
                    key={t}
                    style={{
                      borderRadius: 4,
                      padding: large ? "3px 6px" : "2px 4px",
                      background: i === 1 ? ACCENT : "transparent",
                      color: i === 1 ? SURFACE : INK,
                    }}
                  >
                    {t}
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "auto",
                    borderRadius: 999,
                    background: `linear-gradient(180deg, ${SURFACE} 0%, ${ACCENT} 55%, ${ACCENT} 100%)`,
                    color: SURFACE,
                    textAlign: "center",
                    padding: large ? "4px 6px" : "3px 4px",
                    fontWeight: 700,
                    boxShadow: `0 0 0 1px ${ACCENT}, 0 0 8px rgba(11,95,255,0.55)`,
                  }}
                >
                  Install
                </div>
              </div>

              <div style={{ flex: 1, padding: large ? 10 : 7 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: large ? 15 : 10, lineHeight: 1.1 }}>
                  Hello again, Mac.
                </div>
                <div style={{ color: MUTED, fontSize: bodyFs, marginTop: 2 }}>
                  Pinstripes, platinum, Aqua gel.
                </div>
                <div style={{ display: "flex", gap: large ? 10 : 6, marginTop: large ? 9 : 6 }}>
                  {[
                    ["\uD83D\uDCC1", "System"],
                    ["\uD83D\uDCC1", "Games"],
                    ["🗑", "Trash"],
                  ].map((f) => (
                    <div key={f[1]} style={{ textAlign: "center", fontSize: bodyFs }}>
                      <div
                        style={{
                          fontSize: iconFs,
                          background: BG,
                          border: `1px solid ${MUTED}`,
                          borderRadius: 4,
                          padding: large ? "6px 8px" : "4px 5px",
                        }}
                      >
                        {f[0]}
                      </div>
                      <div style={{ marginTop: 2 }}>{f[1]}</div>
                    </div>
                  ))}
                  <div
                    style={{
                      marginLeft: "auto",
                      alignSelf: "start",
                      fontSize: bodyFs,
                      fontWeight: 700,
                      background: ACCENT2,
                      color: INK,
                      border: `1px solid ${INK}`,
                      borderRadius: 4,
                      padding: large ? "3px 7px" : "2px 5px",
                    }}
                  >
                    9.2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* dock footer */}
        <div style={{ display: "flex", justifyContent: "center", padding: large ? "0 0 8px" : "0 0 5px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: large ? 8 : 5,
              background: SURFACE,
              border: `1px solid ${MUTED}`,
              borderRadius: 10,
              padding: large ? "5px 10px" : "3px 7px",
              boxShadow: "0 4px 16px rgba(43,43,43,0.18)",
              fontSize: large ? 14 : 9,
            }}
          >
            <span>&#9786;</span>
            <span>&#63743;</span>
            <span>&#128193;</span>
            <span>&#127911;</span>
            <span style={{ width: 1, alignSelf: "stretch", background: MUTED }} />
            <span>&#128465;</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
