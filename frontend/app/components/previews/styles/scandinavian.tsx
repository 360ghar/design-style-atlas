import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ScandinavianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{
          background: `linear-gradient(180deg, #FFFFFF 0%, ${p.bg} 55%, #F3EEE5 100%)`,
          color: p.ink,
          fontFamily: p.body,
        }}
      >
        {/* Light-oak hygge nav */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: large ? "14px 28px" : "8px 14px",
            background: `${p.surface}E6`,
            borderBottom: `1px solid ${p.ink}14`,
          }}
        >
          <div className="flex items-center" style={{ gap: large ? 10 : 6 }}>
            <span
              style={{
                width: large ? 22 : 13,
                height: large ? 22 : 13,
                borderRadius: 7,
                background: p.accent2,
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: large ? 12 : 7,
                fontWeight: 700,
              }}
            >
              H
            </span>
            <span style={{ fontFamily: p.display, fontWeight: 600, fontSize: large ? 14 : 8.5, letterSpacing: "-0.01em" }}>
              hygge&amp;co
            </span>
          </div>
          <div className="flex items-center" style={{ gap: large ? 8 : 5 }}>
            {["Shop", "Rooms", "Journal"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: large ? 11 : 6.5,
                  fontWeight: 500,
                  color: p.ink,
                  background: `${p.ink}0D`,
                  borderRadius: 999,
                  padding: large ? "5px 12px" : "3px 8px",
                }}
              >
                {l}
              </span>
            ))}
            <span
              style={{
                fontSize: large ? 11 : 6.5,
                fontWeight: 600,
                color: "#fff",
                background: p.accent,
                borderRadius: 999,
                padding: large ? "7px 16px" : "4px 10px",
                boxShadow: "0 8px 20px rgba(194,112,61,.30)",
                minHeight: large ? 32 : undefined,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Shop the collection
            </span>
          </div>
        </div>

        {/* Warm hero + product CTA */}
        <div
          className={large ? "grid" : "flex flex-col"}
          style={
            large
              ? { gridTemplateColumns: "1.05fr .95fr", gap: 24, padding: "30px 32px 44px", alignItems: "center", flex: 1 }
              : { gap: 8, padding: "12px 14px 26px", flex: 1, justifyContent: "center" }
          }
        >
          <div>
            <div
              style={{
                fontSize: large ? 10 : 6,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: p.muted,
              }}
            >
              Copenhagen daylight collection
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 500,
                fontSize: large ? 38 : 17,
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                marginTop: large ? 10 : 5,
              }}
            >
              Hygge, made
              <br />
              functional.
            </div>
            <p style={{ color: p.muted, fontSize: large ? 14 : 7.5, lineHeight: 1.55, marginTop: large ? 10 : 5, maxWidth: large ? 340 : 220 }}>
              Pale oak, soft daylight, and rooms that welcome you in.
            </p>
            {/* Palette dots */}
            <div className="flex items-center" style={{ gap: large ? 8 : 5, marginTop: large ? 14 : 7 }}>
              {[p.accent, p.accent2, p.muted].map((c) => (
                <span
                  key={c}
                  style={{
                    width: large ? 20 : 11,
                    height: large ? 20 : 11,
                    borderRadius: "50%",
                    background: c,
                    border: `2px solid ${p.surface}`,
                    boxShadow: "0 2px 8px rgba(46,44,41,.14)",
                  }}
                />
              ))}
              <span style={{ fontSize: large ? 11 : 6.5, color: p.muted, marginLeft: 2 }}>clay · sage · oat</span>
            </div>
            <div className="flex items-center" style={{ gap: large ? 10 : 6, marginTop: large ? 16 : 8 }}>
              <span
                style={{
                  background: p.accent,
                  color: "#fff",
                  borderRadius: 12,
                  fontSize: large ? 13 : 7,
                  fontWeight: 600,
                  padding: large ? "11px 22px" : "6px 13px",
                  boxShadow: "0 8px 30px rgba(46,44,41,.08), 0 8px 20px rgba(194,112,61,.32)",
                  minHeight: large ? 44 : undefined,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Shop oak essentials
              </span>
              <span style={{ fontSize: large ? 12 : 6.5, fontWeight: 600, color: p.accent2 }}>Our story →</span>
            </div>
          </div>

          {/* Product card */}
          <div
            style={{
              background: p.surface,
              borderRadius: 12,
              boxShadow: "0 8px 30px rgba(46,44,41,0.08)",
              padding: large ? 20 : 10,
            }}
          >
            <div
              style={{
                height: large ? 150 : 56,
                borderRadius: 10,
                background: `linear-gradient(135deg, #FFFFFF 0%, ${p.bg} 60%, #F3EEE5 100%)`,
                border: `1px solid ${p.ink}10`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* faint linen texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.5,
                  backgroundImage: `repeating-linear-gradient(0deg, ${p.ink}06 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, ${p.ink}05 0 1px, transparent 1px 5px)`,
                }}
              />
              <div className="flex items-center" style={{ position: "absolute", gap: large ? 12 : 6, left: large ? 18 : 9, bottom: large ? 16 : 8 }}>
                <span
                  style={{
                    width: large ? 64 : 30,
                    height: large ? 44 : 21,
                    borderRadius: large ? 10 : 5,
                    background: p.accent2,
                    boxShadow: "0 6px 16px rgba(46,44,41,.16)",
                  }}
                />
                <span
                  style={{
                    width: large ? 44 : 21,
                    height: large ? 58 : 27,
                    borderRadius: large ? 10 : 5,
                    background: p.accent,
                    opacity: 0.92,
                    boxShadow: "0 6px 16px rgba(46,44,41,.14)",
                  }}
                />
                <span
                  style={{
                    width: large ? 34 : 16,
                    height: large ? 34 : 16,
                    borderRadius: "50%",
                    background: p.surface,
                    border: `1px solid ${p.ink}14`,
                  }}
                />
              </div>
            </div>
            <div className="flex items-center" style={{ gap: large ? 10 : 6, marginTop: large ? 14 : 7 }}>
              <span
                style={{
                  width: large ? 30 : 16,
                  height: large ? 30 : 16,
                  borderRadius: 8,
                  background: `${p.accent}1F`,
                  color: p.accent,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: large ? 14 : 8,
                  fontWeight: 700,
                }}
              >
                ✿
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: large ? 13 : 7.5 }}>Oak lounge chair</div>
                <div style={{ color: p.muted, fontSize: large ? 11 : 6.5 }}>Oiled oak · wool · 44px comfort</div>
              </div>
              <span style={{ marginLeft: "auto", fontWeight: 700, fontSize: large ? 13 : 7.5, color: p.ink }}>$489</span>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
