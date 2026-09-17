import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DigitalMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 14 : 10;
  const fsHero = large ? 34 : 21;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* gradient mesh + starfield, tokens only */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(220px 120px at 15% 10%, ${p.accent}55, transparent 70%), radial-gradient(240px 130px at 88% 18%, ${p.accent2}55, transparent 70%), radial-gradient(300px 160px at 50% 110%, ${p.surface}, transparent 70%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(${p.ink}55 1px, transparent 1px)`,
            backgroundSize: large ? "16px 16px" : "12px 12px",
          }}
        />

        {/* browser-chrome bar */}
        <div
          className="relative flex items-center gap-2"
          style={{ padding: `${large ? 8 : 6}px ${pad}px`, borderBottom: `1px solid ${p.accent}44` }}
        >
          <span style={{ display: "flex", gap: 4 }}>
            {[p.accent, p.accent2, p.muted].map((c, i) => (
              <span key={i} style={{ width: large ? 9 : 7, height: large ? 9 : 7, borderRadius: "50%", background: c }} />
            ))}
          </span>
          <span
            style={{
              flex: 1,
              background: p.surface,
              border: `1px solid ${p.accent}55`,
              borderRadius: 999,
              padding: large ? "3px 10px" : "2px 8px",
              fontSize: large ? 9 : 7,
              color: p.muted,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            ✦ net.player/4ever — online ★
          </span>
          <span
            style={{
              fontSize: large ? 8 : 6.5,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: p.bg,
              background: p.accent,
              borderRadius: 999,
              padding: large ? "4px 10px" : "3px 7px",
              boxShadow: `0 0 14px ${p.accent}`,
            }}
          >
            JOIN
          </span>
        </div>

        {/* glitch hero */}
        <div className="relative" style={{ padding: `${large ? 10 : 7}px ${pad}px 0`, textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: `1px solid ${p.ink}44`,
              borderRadius: 999,
              padding: large ? "4px 12px" : "3px 8px",
              background: `${p.surface}CC`,
              fontSize: large ? 8.5 : 6.5,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: p.ink,
            }}
          >
            <span
              className="pv-blink"
              style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent2, boxShadow: `0 0 8px ${p.accent2}` }}
            />
            NOW VIBING ♪ — 128 ONLINE
          </div>
          <div
            className="pv-chrome-text"
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: fsHero,
              lineHeight: 0.95,
              marginTop: large ? 6 : 4,
              textShadow: `0 0 18px ${p.accent}88, 0 0 42px ${p.accent2}66`,
            }}
          >
            ONLINE
            <br />
            4EVER ★
          </div>
          <div style={{ fontSize: large ? 9.5 : 7.5, color: p.muted, marginTop: 3 }}>
            gradients + glass + stickers in <span style={{ color: p.accent, fontWeight: 800 }}>every viewport</span>
          </div>
          {/* floating stickers */}
          <span
            className="pv-float"
            style={{
              position: "absolute",
              left: "4%",
              top: large ? 34 : 26,
              transform: "rotate(-10deg)",
              background: p.ink,
              color: p.bg,
              borderRadius: 8,
              padding: large ? "4px 7px" : "3px 5px",
              fontSize: large ? 12 : 9,
              boxShadow: `3px 3px 0 ${p.accent2}`,
            }}
          >
            💿
          </span>
          <span
            className="pv-float"
            style={{
              position: "absolute",
              right: "5%",
              top: large ? 44 : 32,
              transform: "rotate(9deg)",
              background: p.ink,
              color: p.bg,
              borderRadius: 8,
              padding: large ? "4px 7px" : "3px 5px",
              fontSize: large ? 12 : 9,
              boxShadow: `3px 3px 0 ${p.accent}`,
              animationDelay: "0.7s",
            }}
          >
            ★
          </span>
        </div>

        {/* ticker */}
        <div
          style={{
            marginTop: large ? 8 : 6,
            borderTop: `1px solid ${p.accent2}66`,
            borderBottom: `1px solid ${p.accent2}66`,
            background: `${p.surface}DD`,
            color: p.accent,
            fontSize: large ? 8 : 6.5,
            fontWeight: 800,
            letterSpacing: "0.14em",
            padding: "3px 0",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          ✦ NEW DROP ✦ PIXEL PACK ✦ GUESTBOOK OPEN ✦ 24HR RAVE ✦ NEW DROP ✦
        </div>

        {/* widget grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr 1fr",
            gap: large ? 8 : 6,
            padding: `${large ? 8 : 6}px ${pad}px`,
            flex: 1,
          }}
        >
          <div
            style={{
              background: `${p.surface}EE`,
              border: `1px solid ${p.accent}77`,
              borderRadius: 12,
              padding: large ? 8 : 6,
              boxShadow: `0 0 16px ${p.accent}44`,
            }}
          >
            <div style={{ fontSize: large ? 7.5 : 6, fontWeight: 800, letterSpacing: "0.12em", color: p.accent }}>♪ PLAYER</div>
            <div style={{ fontSize: large ? 10 : 8, fontWeight: 800, marginTop: 2 }}>rave_mix_05.mp3</div>
            <div style={{ height: 4, borderRadius: 999, background: `${p.muted}44`, marginTop: 6, overflow: "hidden" }}>
              <div style={{ width: "68%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} />
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
              {["◀", "▶", "✦"].map((g, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: large ? 9 : 7,
                    background: i === 1 ? p.accent : p.ink,
                    color: p.bg,
                    borderRadius: 999,
                    padding: large ? "3px 8px" : "2px 6px",
                    fontWeight: 800,
                  }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              background: p.ink,
              color: p.bg,
              borderRadius: 12,
              padding: large ? 8 : 6,
              boxShadow: `4px 4px 0 ${p.accent2}`,
            }}
          >
            <div style={{ fontSize: large ? 7.5 : 6, fontWeight: 800, letterSpacing: "0.12em" }}>✉ GUESTBOOK</div>
            <div style={{ fontSize: large ? 9 : 7.5, marginTop: 3, lineHeight: 1.35 }}>
              <b>pixelfiend:</b> this site ate!! ★★★
            </div>
            <div
              style={{
                marginTop: 5,
                fontSize: large ? 8 : 6.5,
                fontWeight: 800,
                background: p.bg,
                color: p.ink,
                borderRadius: 999,
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              SIGN IT ✎
            </div>
          </div>
          <div
            style={{
              background: `${p.surface}EE`,
              border: `1px solid ${p.accent2}77`,
              borderRadius: 12,
              padding: large ? 8 : 6,
              boxShadow: `0 0 16px ${p.accent2}44`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: large ? 7.5 : 6, fontWeight: 800, letterSpacing: "0.12em", color: p.accent2 }}>◷ CLOCK</div>
            <div style={{ fontFamily: p.display, fontSize: large ? 16 : 12, fontWeight: 900 }}>02:47</div>
            <div style={{ fontSize: large ? 8 : 6.5, color: p.muted }}>★ 8,412 visits ★</div>
          </div>
        </div>

        {/* status footer */}
        <div
          className="relative flex items-center gap-2"
          style={{
            margin: `0 ${pad}px ${pad}px`,
            background: `${p.surface}EE`,
            border: `1px solid ${p.ink}33`,
            borderRadius: 999,
            padding: large ? "5px 6px 5px 10px" : "4px 4px 4px 8px",
            fontSize: large ? 8 : 6.5,
            fontWeight: 700,
          }}
        >
          <span className="pv-blink" style={{ width: 7, height: 7, borderRadius: "50%", background: p.accent, boxShadow: `0 0 8px ${p.accent}` }} />
          <span style={{ color: p.ink }}>server: sparkly</span>
          <span style={{ color: p.muted }}>• lag: 12ms</span>
          <span style={{ flex: 1 }} />
          <span style={{ background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})`, color: p.bg, borderRadius: 999, padding: large ? "4px 12px" : "3px 8px", fontWeight: 900 }}>
            GET ACCESS ↓
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
