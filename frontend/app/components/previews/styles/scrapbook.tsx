import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ScrapbookPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 18 : 10;
  const fsXl = large ? 30 : 17;
  const fsMd = large ? 14 : 9;
  const fsXs = large ? 11 : 7;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: "#F3EDE2",
          color: "#3B362E",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Karla, Inter, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* washi-tab nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: large ? 8 : 5,
            padding: `${large ? 10 : 6}px ${pad}px`,
          }}
        >
          <span style={{ fontFamily: "Caveat, Georgia, serif", fontWeight: 700, fontSize: large ? 18 : 11 }}>
            ✿ Our Album
          </span>
          {(["1998", "2004", "Now"] as const).map((t, i) => (
            <span
              key={t}
              style={{
                fontFamily: "Caveat, Georgia, serif",
                fontWeight: 600,
                fontSize: fsXs,
                padding: large ? "2px 10px" : "1px 6px",
                background: i === 1 ? "#B3541E" : i === 2 ? "#5B7E6B" : "#FFFDF6",
                color: i === 0 ? "#3B362E" : "#FFFDF6",
                transform: `rotate(${i === 0 ? -3 : i === 1 ? 2 : -1.5}deg)`,
                boxShadow: "0 2px 6px rgba(59,54,46,0.15)",
                borderRadius: 2,
              }}
            >
              {t}
            </span>
          ))}
          <span style={{ flex: 1 }} />
          <span
            style={{
              background: "#B3541E",
              color: "#FFFDF6",
              fontFamily: "Caveat, Georgia, serif",
              fontWeight: 700,
              fontSize: fsXs,
              padding: large ? "4px 12px" : "2px 8px",
              borderRadius: 999,
              boxShadow: "0 3px 8px rgba(59,54,46,0.2)",
            }}
          >
            + Add page
          </span>
        </div>

        {/* photo-cluster hero with captions */}
        <div style={{ flex: 1, display: "flex", gap: large ? 14 : 8, padding: `0 ${pad}px`, alignItems: "center", minHeight: 0 }}>
          <div style={{ flex: "1.1", minWidth: 0 }}>
            <div
              style={{
                display: "inline-block",
                fontFamily: "Caveat, Georgia, serif",
                fontWeight: 600,
                fontSize: fsXs,
                background: "#FFFDF6",
                color: "#6F675E",
                padding: large ? "2px 8px" : "1px 5px",
                transform: "rotate(-2deg)",
                boxShadow: "0 2px 6px rgba(59,54,46,0.15)",
              }}
            >
              ★ summer, kept forever
            </div>
            <div style={{ fontFamily: "Caveat, Georgia, serif", fontWeight: 700, fontSize: fsXl, lineHeight: 1.02, marginTop: large ? 6 : 3 }}>
              Every ticket,
              <br />
              every <span style={{ color: "#B3541E" }}>sun-faded</span> day.
            </div>
            <div style={{ fontSize: fsMd, color: "#6F675E", marginTop: large ? 6 : 3, lineHeight: 1.4 }}>
              Polaroids, stubs &amp; margin notes — June 12, lake house.
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: large ? 10 : 6 }}>
            {[
              { cap: "— mall, '04", bg: "#B3541E", glyph: "◍", rot: "-4deg" },
              { cap: "— camp!!", bg: "#5B7E6B", glyph: "✿", rot: "3deg" },
            ].map((c) => (
              <div
                key={c.cap}
                style={{
                  position: "relative",
                  background: "#FFFDF6",
                  padding: large ? 7 : 4,
                  paddingBottom: large ? 20 : 12,
                  width: large ? 108 : 62,
                  transform: `rotate(${c.rot})`,
                  boxShadow: "0 6px 18px rgba(59,54,46,0.15)",
                  borderRadius: 3,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -7,
                    left: "50%",
                    width: large ? 44 : 26,
                    height: large ? 13 : 8,
                    background: "#B3541E",
                    opacity: 0.75,
                    transform: "translateX(-50%) rotate(-3deg)",
                    borderRadius: 1,
                  }}
                />
                <div
                  style={{
                    background: c.bg,
                    height: large ? 72 : 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: large ? 26 : 15,
                    color: "#FFFDF6",
                    borderRadius: 2,
                  }}
                >
                  {c.glyph}
                </div>
                <div style={{ fontFamily: "Caveat, Georgia, serif", fontWeight: 600, fontSize: large ? 13 : 8, marginTop: 3 }}>
                  {c.cap}
                </div>
                <div style={{ fontSize: large ? 8 : 5.5, color: "#6F675E", letterSpacing: "0.08em" }}>06 · 12 · 04 ★</div>
              </div>
            ))}
          </div>
        </div>

        {/* sticker footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: large ? 8 : 5,
            margin: `${large ? 10 : 6}px ${pad}px ${large ? 12 : 7}px`,
            background: "#FFFDF6",
            border: "1.5px dashed #6F675E",
            borderRadius: 6,
            padding: large ? "7px 10px" : "4px 6px",
            boxShadow: "0 6px 18px rgba(59,54,46,0.12)",
          }}
        >
          <span style={{ fontSize: large ? 14 : 9 }}>♥</span>
          <span style={{ fontSize: fsXs, color: "#6F675E" }}>
            <b style={{ color: "#3B362E" }}>128 pages</b> · print-ready · xoxo, summer →
          </span>
          <span style={{ flex: 1 }} />
          <span
            style={{
              background: "#5B7E6B",
              color: "#FFFDF6",
              fontSize: fsXs,
              fontWeight: 700,
              padding: large ? "4px 12px" : "2px 7px",
              borderRadius: 999,
            }}
          >
            ★ RSVP
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
