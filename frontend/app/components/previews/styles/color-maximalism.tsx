import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ColorMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const swatches = [p.bg, p.accent, p.accent2, p.surface];
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg }}>
        <div
          style={{
            background: p.surface,
            borderBottom: `3px solid ${p.ink}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 14px" : "6px 8px",
            gap: large ? 10 : 6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 4 }}>
            <span
              style={{
                background: p.ink,
                color: p.surface,
                fontFamily: p.display,
                fontSize: large ? 12 : 8,
                padding: large ? "5px 10px" : "3px 7px",
                border: `3px solid ${p.ink}`,
                borderRadius: 10,
              }}
            >
              MAX!
            </span>
            {[
              { label: "YELLOW", bg: p.bg },
              { label: "PINK", bg: p.accent },
              { label: "BLUE", bg: p.accent2 },
            ].map((chip) => (
              <span
                key={chip.label}
                style={{
                  background: chip.bg,
                  color: p.ink,
                  fontFamily: p.body,
                  fontWeight: 800,
                  fontSize: large ? 9 : 6,
                  letterSpacing: "0.08em",
                  padding: large ? "5px 11px" : "3px 7px",
                  border: `3px solid ${p.ink}`,
                  borderRadius: 999,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>
          <span
            style={{
              background: p.accent,
              color: p.surface,
              fontFamily: p.body,
              fontWeight: 800,
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.06em",
              padding: large ? "6px 14px" : "4px 9px",
              border: `3px solid ${p.ink}`,
              borderRadius: 12,
              boxShadow: `4px 4px 0 ${p.ink}`,
            }}
          >
            GO →
          </span>
        </div>
        <div
          style={{
            flex: 1,
            background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accent2} 100%)`,
            borderBottom: `3px solid ${p.ink}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: large ? "20px 16px" : "10px 10px",
          }}
        >
          <div
            style={{
              background: p.surface,
              color: p.ink,
              border: `3px solid ${p.ink}`,
              borderRadius: 18,
              boxShadow: large ? `8px 8px 0 ${p.ink}` : `5px 5px 0 ${p.ink}`,
              padding: large ? "16px 20px" : "8px 12px",
              maxWidth: large ? 420 : 230,
              width: "100%",
              transform: "rotate(-1deg)",
            }}
          >
            <div style={{ display: "flex", gap: large ? 6 : 4, marginBottom: large ? 8 : 5 }}>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  fontFamily: p.body,
                  fontWeight: 900,
                  fontSize: large ? 9 : 6,
                  letterSpacing: "0.1em",
                  padding: large ? "4px 10px" : "2px 6px",
                  border: `3px solid ${p.ink}`,
                  borderRadius: 999,
                }}
              >
                DOPAMINE UX
              </span>
              <span
                style={{
                  background: p.accent2,
                  color: p.surface,
                  fontFamily: p.body,
                  fontWeight: 900,
                  fontSize: large ? 9 : 6,
                  letterSpacing: "0.1em",
                  padding: large ? "4px 10px" : "2px 6px",
                  border: `3px solid ${p.ink}`,
                  borderRadius: 999,
                }}
              >
                100% COLOR
              </span>
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: large ? 34 : 17,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              TASTE THE RAINBOW
            </div>
            <div
              style={{
                fontFamily: p.body,
                fontSize: large ? 12 : 7.5,
                fontWeight: 500,
                color: p.muted,
                marginTop: large ? 6 : 4,
              }}
            >
              One saturated field per chapter. White cards float on top.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", borderBottom: `3px solid ${p.ink}` }}>
          {[p.bg, p.accent, p.accent2, p.bg, p.accent, p.accent2].map((c, i) => (
            <span key={i} style={{ flex: 1, background: c, height: large ? 10 : 6 }} />
          ))}
        </div>
        <div
          style={{
            background: p.surface,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 14px 20px" : "6px 8px 13px",
            gap: large ? 10 : 6,
          }}
        >
          <div style={{ display: "flex", gap: large ? 7 : 4 }}>
            {swatches.map((c) => (
              <span
                key={c}
                style={{
                  background: c,
                  border: `3px solid ${p.ink}`,
                  borderRadius: 10,
                  width: large ? 34 : 20,
                  height: large ? 34 : 20,
                  boxShadow: `3px 3px 0 ${p.ink}`,
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: large ? 8 : 5 }}>
            <span
              style={{
                background: p.ink,
                color: p.surface,
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.06em",
                padding: large ? "7px 16px" : "4px 10px",
                border: `3px solid ${p.ink}`,
                borderRadius: 12,
              }}
            >
              SHOP DROP
            </span>
            <span
              style={{
                background: p.bg,
                color: p.ink,
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.06em",
                padding: large ? "7px 16px" : "4px 10px",
                border: `3px solid ${p.ink}`,
                borderRadius: 12,
                boxShadow: `4px 4px 0 ${p.ink}`,
              }}
            >
              LOOKBOOK
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
