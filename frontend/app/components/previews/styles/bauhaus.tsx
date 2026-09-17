import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const YELLOW = "#E8B90F";

export function BauhausPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 20 : 12;
  return (
    <Frame meta={meta} large={large}>
      <div style={{ background: p.bg, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", height: large ? 6 : 4 }}>
          <div style={{ flex: 1, background: p.accent }} />
          <div style={{ flex: 1, background: YELLOW }} />
          <div style={{ flex: 1, background: p.accent2 }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 20px" : "7px 10px",
            background: p.surface,
            borderBottom: `2px solid ${p.ink}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <span style={{ width: large ? 16 : 10, height: large ? 16 : 10, borderRadius: 999, background: p.accent }} />
            <span
              style={{
                width: 0,
                height: 0,
                borderLeft: `${large ? 9 : 6}px solid transparent`,
                borderRight: `${large ? 9 : 6}px solid transparent`,
                borderBottom: `${large ? 15 : 10}px solid ${p.accent2}`,
              }}
            />
            <span style={{ width: large ? 15 : 10, height: large ? 15 : 10, background: YELLOW }} />
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: large ? 13 : 8,
                letterSpacing: "0.12em",
                color: p.ink,
                marginLeft: large ? 4 : 2,
              }}
            >
              BAUHAUS
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 14 : 8 }}>
            <span
              style={{
                fontFamily: p.body,
                fontWeight: 700,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.1em",
                color: p.ink,
                background: YELLOW,
                padding: large ? "2px 6px" : "1px 4px",
                borderRadius: 0,
              }}
            >
              COURSES
            </span>
            <span
              style={{
                fontFamily: p.body,
                fontWeight: 700,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.1em",
                color: p.muted,
              }}
            >
              VISIT
            </span>
            <span
              style={{
                width: large ? 10 : 7,
                height: large ? 10 : 7,
                borderRadius: 999,
                background: p.accent2,
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            padding: large ? `20px ${pad}px` : `12px ${pad}px`,
          }}
        >
          <div style={{ position: "relative", zIndex: 2, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5, marginBottom: large ? 10 : 6 }}>
              <span style={{ width: large ? 28 : 16, height: large ? 6 : 4, background: p.accent }} />
              <span
                style={{
                  fontFamily: p.body,
                  fontWeight: 700,
                  fontSize: large ? 10 : 6.5,
                  letterSpacing: "0.15em",
                  color: p.ink,
                }}
              >
                DESSAU · 1925
              </span>
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: large ? 44 : 19,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: p.ink,
                textAlign: "left",
              }}
            >
              FORM
              <br />
              FOLLOWS
              <br />
              FUNCTION.
            </div>
            <div style={{ width: large ? 120 : 64, height: 2, background: p.ink, margin: large ? "12px 0 8px" : "8px 0 5px" }} />
            <div style={{ fontFamily: p.body, fontSize: large ? 13 : 8, color: p.muted, lineHeight: 1.4 }}>
              Circle, triangle, square — the foundation course.
            </div>
          </div>
          <div style={{ position: "relative", width: large ? 190 : 96, height: large ? 190 : 96, flexShrink: 0 }}>
            <div
              style={{
                position: "absolute",
                right: large ? 52 : 26,
                top: large ? 6 : 4,
                width: large ? 110 : 56,
                height: large ? 110 : 56,
                borderRadius: 999,
                background: p.accent,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: large ? 8 : 6,
                width: 0,
                height: 0,
                borderLeft: `${large ? 52 : 27}px solid transparent`,
                borderRight: `${large ? 52 : 27}px solid transparent`,
                borderBottom: `${large ? 88 : 46}px solid ${p.accent2}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: large ? 6 : 2,
                bottom: large ? 22 : 12,
                width: large ? 64 : 32,
                height: large ? 64 : 32,
                background: YELLOW,
                border: `2px solid ${p.ink}`,
                borderRadius: 0,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: p.ink,
            padding: large ? "10px 20px" : "7px 10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <span style={{ width: large ? 10 : 7, height: large ? 10 : 7, background: YELLOW }} />
            <span
              style={{
                fontFamily: p.body,
                fontWeight: 700,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.12em",
                color: p.surface,
              }}
            >
              VORKURS — FALL 1925
            </span>
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 11 : 7,
              letterSpacing: "0.08em",
              color: p.surface,
              background: p.accent,
              padding: large ? "8px 16px" : "5px 10px",
              borderRadius: 0,
            }}
          >
            ENROLL →
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
