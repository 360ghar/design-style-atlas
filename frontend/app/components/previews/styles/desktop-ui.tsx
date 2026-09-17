import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DesktopUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const bg = "#008080";
  const surface = "#C0C0C0";
  const ink = "#111111";
  const muted = "#555555";
  const accent = "#000080";
  const accent2 = "#1084D0";
  const font = "Tahoma, Verdana, sans-serif";

  const titleSize = large ? 11 : 7.5;
  const bodySize = large ? 11 : 7;
  const labelSize = large ? 9 : 6.5;
  const iconBox = large ? 32 : 22;
  const taskH = large ? 34 : 24;

  const iconLabel: React.CSSProperties = {
    marginTop: 3,
    fontSize: labelSize,
    lineHeight: 1.1,
    color: surface,
    background: bg,
    padding: "1px 3px",
    borderRadius: 4,
    textShadow: `1px 1px 0 ${ink}`,
    whiteSpace: "nowrap",
  };

  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          background: bg,
          fontFamily: font,
          overflow: "hidden",
        }}
      >
        {/* desktop field: icon grid + open window hero */}
        <div style={{ flex: 1, display: "flex", gap: large ? 14 : 8, padding: large ? 14 : 8, minHeight: 0 }}>
          {/* desktop icon grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: large ? 14 : 8, width: large ? 72 : 48, flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: iconBox,
                  height: iconBox,
                  background: surface,
                  border: `2px solid ${ink}`,
                  boxShadow: `2px 2px 0 ${ink}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "60%", height: "48%", background: accent, border: `1px solid ${ink}` }} />
              </div>
              <div style={iconLabel}>My PC</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: iconBox,
                  height: iconBox,
                  background: surface,
                  border: `2px solid ${ink}`,
                  boxShadow: `2px 2px 0 ${ink}`,
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", left: 2, top: 2, width: "38%", height: 4, background: muted, border: `1px solid ${ink}` }} />
                <div style={{ position: "absolute", left: 2, right: 2, bottom: 2, top: 7, background: bg, border: `1px solid ${ink}` }} />
              </div>
              <div style={iconLabel}>Files</div>
            </div>
            {large ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: iconBox,
                    height: iconBox,
                    background: surface,
                    border: `2px solid ${ink}`,
                    boxShadow: `2px 2px 0 ${ink}`,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: 4,
                    gap: 2,
                  }}
                >
                  <div style={{ width: 3, height: 12, background: muted }} />
                  <div style={{ width: 3, height: 12, background: muted }} />
                  <div style={{ width: 3, height: 12, background: muted }} />
                </div>
                <div style={iconLabel}>Trash</div>
              </div>
            ) : null}
          </div>

          {/* open window hero with window chrome bar */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              background: surface,
              border: `2px solid ${ink}`,
              boxShadow: large ? `5px 5px 0 ${ink}` : `3px 3px 0 ${ink}`,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            {/* window chrome bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 4px 3px 8px",
                background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                color: surface,
                fontSize: titleSize,
                fontWeight: 700,
              }}
            >
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
                readme.txt
              </span>
              <span style={{ display: "flex", gap: 2, flexShrink: 0 }}>
                {["_", "▢", "×"].map((g) => (
                  <span
                    key={g}
                    style={{
                      width: large ? 18 : 13,
                      height: large ? 16 : 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: surface,
                      color: ink,
                      fontSize: large ? 10 : 7,
                      fontWeight: 700,
                      lineHeight: 1,
                      border: `1px solid ${ink}`,
                      boxShadow: `inset 1px 1px 0 ${surface}, inset -1px -1px 0 ${muted}`,
                    }}
                  >
                    {g}
                  </span>
                ))}
              </span>
            </div>
            {/* menu strip */}
            <div
              style={{
                display: "flex",
                gap: large ? 12 : 7,
                padding: large ? "4px 10px" : "3px 7px",
                fontSize: bodySize,
                color: ink,
                borderBottom: `1px solid ${muted}`,
              }}
            >
              {["File", "Edit", "View", "Help"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            {/* content well */}
            <div style={{ flex: 1, padding: large ? 12 : 8, minHeight: 0 }}>
              <div
                style={{
                  background: surface,
                  border: `2px inset ${muted}`,
                  padding: large ? 10 : 6,
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: large ? 16 : 10, fontWeight: 700, color: ink, lineHeight: 1.15 }}>
                  Double-click anything.
                </div>
                <div style={{ fontSize: bodySize, color: ink, marginTop: 4, lineHeight: 1.4 }}>
                  Every panel is a window.
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: large ? 10 : 6 }}>
                  <span
                    style={{
                      fontSize: bodySize,
                      fontWeight: 700,
                      color: ink,
                      background: surface,
                      border: `2px outset ${muted}`,
                      padding: large ? "3px 18px" : "2px 12px",
                      lineHeight: 1.2,
                    }}
                  >
                    OK
                  </span>
                  <span
                    style={{
                      fontSize: bodySize,
                      color: muted,
                      background: surface,
                      border: `2px outset ${muted}`,
                      padding: large ? "3px 14px" : "2px 9px",
                      lineHeight: 1.2,
                    }}
                  >
                    Cancel
                  </span>
                </div>
              </div>
            </div>
            {/* status bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: large ? "4px 8px" : "3px 6px",
                borderTop: `1px solid ${muted}`,
                fontSize: bodySize,
                color: muted,
              }}
            >
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                3 objects · click clunks
              </span>
              <span style={{ width: 10, height: 10, border: `2px outset ${muted}`, flexShrink: 0 }} />
            </div>
          </div>
        </div>

        {/* taskbar footer */}
        <div
          style={{
            height: taskH,
            flexShrink: 0,
            background: surface,
            borderTop: `2px solid ${ink}`,
            boxShadow: `inset 0 1px 0 ${surface}, inset 0 2px 0 ${muted}`,
            display: "flex",
            alignItems: "center",
            gap: large ? 8 : 5,
            padding: large ? "3px 8px 3px 96px" : "2px 6px 2px 72px",
          }}
        >
          <span
            style={{
              fontSize: bodySize,
              fontWeight: 700,
              color: ink,
              background: surface,
              border: `2px outset ${muted}`,
              padding: large ? "2px 12px" : "1px 8px",
              whiteSpace: "nowrap",
              lineHeight: 1.3,
            }}
          >
            ▦ Start
          </span>
          <span
            style={{
              fontSize: bodySize,
              color: ink,
              background: surface,
              border: `2px inset ${muted}`,
              padding: large ? "2px 10px" : "1px 7px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flex: 1,
              lineHeight: 1.3,
            }}
          >
            readme.txt
          </span>
          <span
            style={{
              fontSize: bodySize,
              color: ink,
              border: `2px inset ${muted}`,
              padding: large ? "2px 8px" : "1px 6px",
              whiteSpace: "nowrap",
              lineHeight: 1.3,
              flexShrink: 0,
            }}
          >
            {large ? "2:48 PM" : "2:48"}
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
