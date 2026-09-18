// Fixture: plants exactly 4 violations (oversized radius, off-palette mint,
// off-palette navy background, foreign font). Tailwind arbitrary values included.

export function Card({ title }: { title: string }) {
  return (
    <article
      style={{
        borderRadius: 24, // radius violation
        background: "#00FFAA", // palette violation
      }}
      className="border-2 border-[#111111] p-6"
    >
      <h3 style={{ fontFamily: "Poppins" }}>{title}</h3> {/* fonts violation */}
      <a href="#pricing" className="bg-[#123456] text-white">Pricing</a> {/* palette violation */}
      <span style={{ borderRadius: 999 }}>ok pill</span>
    </article>
  );
}
