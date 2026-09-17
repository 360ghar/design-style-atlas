import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PlayfulMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = (v: number) => (large ? v * 1.7 : v);
  const spring = "cubic-bezier(0.34,1.56,0.64,1)";
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* §14 confetti + polka-dot texture, loud at ~20% */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.2,
            backgroundImage: `radial-gradient(${p.accent} 2.2px, transparent 2.6px), radial-gradient(${p.accent2} 1.8px, transparent 2.2px)`,
            backgroundSize: "22px 22px, 30px 30px",
            backgroundPosition: "0 0, 11px 13px",
          }}
        />
        {/* scattered confetti decals */}
        {[
          { e: "🎉", l: "4%", t: "30%", r: "-12deg", d: "0s" },
          { e: "★", l: "90%", t: "26%", r: "14deg", d: "0.6s" },
          { e: "●", l: "12%", t: "72%", r: "0deg", d: "1.1s" },
          { e: "✿", l: "84%", t: "70%", r: "10deg", d: "0.3s" },
          { e: "◆", l: "68%", t: "18%", r: "20deg", d: "0.9s" },
        ].map((c, i) => (
          <span
            key={i}
            className="pv-float pointer-events-none absolute"
            style={{
              left: c.l,
              top: c.t,
              transform: `rotate(${c.r})`,
              fontSize: s(i % 2 ? 11 : 14),
              color: i % 2 ? p.accent2 : p.accent,
              animationDelay: c.d,
            }}
          >
            {c.e}
          </span>
        ))}

        {/* candy nav */}
        <div
          className="relative z-10 flex items-center justify-between"
          style={{
            background: p.surface,
            borderBottom: `3px solid ${p.ink}`,
            padding: `${s(6)}px ${s(10)}px`,
          }}
        >
          <div className="flex items-center" style={{ gap: s(6) }}>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: s(11),
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                padding: `${s(2)}px ${s(8)}px`,
                transform: "rotate(-4deg)",
                boxShadow: `2px 2px 0 ${p.ink}`,
              }}
            >
              POP!
            </span>
            <span className="flex items-center" style={{ gap: s(4) }}>
              {["Fun", "Games", "Snacks"].map((l, i) => (
                <span
                  key={l}
                  style={{
                    fontSize: s(7.5),
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: `2px solid ${p.ink}`,
                    borderRadius: 999,
                    padding: `${s(2)}px ${s(7)}px`,
                    background: i === 0 ? p.accent2 : p.surface,
                    color: i === 0 ? p.surface : p.ink,
                    transform: `rotate(${i === 1 ? 2 : -2}deg)`,
                  }}
                >
                  {l}
                </span>
              ))}
            </span>
          </div>
          <span
            className="pv-wobble"
            style={{
              fontFamily: p.display,
              fontWeight: 800,
              fontSize: s(8.5),
              background: p.accent,
              color: p.surface,
              border: `2px solid ${p.ink}`,
              borderRadius: 999,
              padding: `${s(4)}px ${s(10)}px`,
              boxShadow: `3px 3px 0 ${p.ink}`,
              animationDuration: "1.6s",
            }}
          >
            Join the party →
          </span>
        </div>

        {/* confetti hero */}
        <div className="relative z-10 flex flex-col items-center text-center" style={{ padding: `${s(10)}px ${s(12)}px ${s(4)}px` }}>
          <span
            style={{
              fontSize: s(7.5),
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: p.surface,
              background: p.ink,
              borderRadius: 999,
              padding: `${s(2)}px ${s(8)}px`,
              transform: "rotate(-2deg)",
            }}
          >
            ★ confetti interfaces ★
          </span>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 800,
              fontSize: s(24),
              lineHeight: 1.02,
              marginTop: s(4),
            }}
          >
            <span style={{ display: "inline-block", transform: "rotate(-3deg)" }}>PARTY</span>{" "}
            <span style={{ display: "inline-block", transform: "rotate(2deg)", color: p.accent }}>
              MODE:
            </span>{" "}
            <span style={{ display: "inline-block", transform: "rotate(-2deg)", color: p.accent2 }}>
              ON
            </span>
          </div>
          {/* squiggle underline */}
          <svg width={s(120)} height={s(10)} viewBox="0 0 120 10" style={{ marginTop: s(1) }} aria-hidden="true">
            <path
              d="M2 6 Q 10 1, 18 6 T 34 6 T 50 6 T 66 6 T 82 6 T 98 6 T 118 6"
              fill="none"
              stroke={p.accent}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex items-center" style={{ gap: s(6), marginTop: s(5) }}>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: s(9),
                background: p.accent,
                color: p.surface,
                border: `2.5px solid ${p.ink}`,
                borderRadius: 999,
                padding: `${s(5)}px ${s(12)}px`,
                boxShadow: `4px 4px 0 ${p.ink}, 0 4px 24px ${p.accent}`,
                transition: `transform 200ms ${spring}`,
              }}
            >
              Get started
            </span>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: s(9),
                background: p.surface,
                color: p.ink,
                border: `2.5px solid ${p.ink}`,
                borderRadius: 999,
                padding: `${s(5)}px ${s(12)}px`,
                boxShadow: `4px 4px 0 ${p.ink}`,
              }}
            >
              See stickers
            </span>
          </div>
        </div>

        {/* sticker cards */}
        <div
          className="relative z-10 grid flex-1 grid-cols-3 items-start"
          style={{ gap: s(8), padding: `${s(8)}px ${s(12)}px ${s(16)}px` }}
        >
          {[
            { t: "Mascots", d: "3 pals min.", e: "🐸", bg: p.accent, tilt: "-2deg" },
            { t: "Candy UI", d: "Boing on tap.", e: "🍬", bg: p.accent2, tilt: "2deg" },
            { t: "Zero chill", d: "Loud & proud.", e: "⚡", bg: p.surface, tilt: "-2deg" },
          ].map((c) => (
            <div
              key={c.t}
              className="relative"
              style={{
                background: p.surface,
                border: `3px solid ${p.ink}`,
                borderRadius: s(14),
                padding: `${s(8)}px ${s(6)}px ${s(6)}px`,
                transform: `rotate(${c.tilt})`,
                boxShadow: `5px 5px 0 ${p.ink}`,
                textAlign: "center",
              }}
            >
              {/* washi-tape corner */}
              <span
                className="absolute"
                style={{
                  top: -s(6),
                  left: "50%",
                  width: s(34),
                  height: s(10),
                  marginLeft: -s(17),
                  background: c.bg,
                  border: `2px solid ${p.ink}`,
                  transform: "rotate(-4deg)",
                  borderRadius: 2,
                  opacity: 0.95,
                }}
              />
              {/* overlap badge */}
              <span
                className="absolute flex items-center justify-center"
                style={{
                  top: -s(8),
                  right: -s(6),
                  width: s(20),
                  height: s(20),
                  borderRadius: 999,
                  background: c.bg,
                  border: `2.5px solid ${p.ink}`,
                  fontSize: s(10),
                  boxShadow: `2px 2px 0 ${p.ink}`,
                }}
              >
                {c.e}
              </span>
              <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: s(10.5), marginTop: s(4) }}>
                {c.t}
              </div>
              <div style={{ fontSize: s(8), color: p.muted, marginTop: 1 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
