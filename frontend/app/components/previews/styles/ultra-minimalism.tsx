import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function UltraMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const hairline = `1px solid ${p.ink}1A`;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: p.bg,
          display: "flex",
          flexDirection: "column",
          fontFamily: p.body,
        }}
      >
        {/* nav — near-invisible index / contact */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: large ? "18px 28px 0" : "11px 16px 0",
            fontSize: large ? 10 : 7,
            letterSpacing: "0.04em",
            color: p.muted,
          }}
        >
          <span style={{ color: p.ink }}>atelier — n°4</span>
          <span style={{ display: "flex", gap: large ? 16 : 10 }}>
            <span>index</span>
            <span>contact</span>
          </span>
        </div>

        {/* hero — gallery statement */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: large ? "0 32px" : "0 20px",
            minHeight: 0,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: large ? 420 : 260 }}>
            <div style={{ fontSize: large ? 9 : 6.5, color: p.muted, letterSpacing: "0.12em" }}>
              ( 04 )
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 400,
                fontSize: large ? 21 : 13,
                lineHeight: 1.25,
                color: p.ink,
                marginTop: large ? 10 : 6,
                whiteSpace: "nowrap",
              }}
            >
              untitled, no. 4
            </div>
            <div style={{ fontSize: large ? 11 : 7.5, color: p.ink, opacity: 0.72, marginTop: large ? 8 : 5 }}>
              oil on canvas — 2026
            </div>
            <div
              style={{
                background: p.ink,
                opacity: 0.16,
                height: 1,
                width: large ? 116 : 72,
                margin: large ? "14px auto 0" : "9px auto 0",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: large ? 14 : 9,
                marginTop: large ? 14 : 9,
                fontSize: large ? 10 : 7,
              }}
            >
              <span style={{ color: p.accent2, textDecoration: "underline", textUnderlineOffset: 3 }}>
                view exhibition
              </span>
              <span
                style={{
                  color: p.ink,
                  border: `1px solid ${p.ink}55`,
                  padding: large ? "6px 12px" : "4px 8px",
                  lineHeight: 1,
                }}
              >
                request list
              </span>
            </div>
          </div>
        </div>

        {/* signature — exhibition meta + hairline + whisper footer */}
        <div style={{ padding: large ? "0 28px 30px" : "0 16px 20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: large ? 10 : 7,
              color: p.muted,
            }}
          >
            <span>galerie nord — oct 12 / nov 03</span>
            <span>12 works</span>
          </div>
          <div style={{ borderTop: hairline, margin: large ? "10px 0 8px" : "7px 0 6px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: large ? 9 : 6.5,
              color: p.muted,
            }}
          >
            <span>© 2026 — all rights reserved</span>
            <span style={{ color: p.accent2 }}>hello@atelier-nord.com</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
