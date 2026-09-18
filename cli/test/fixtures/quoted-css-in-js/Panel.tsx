// Fixture: quoted CSS-in-JS values. Every one of these must still be parsed —
// they used to be dropped because the leading quote swallowed the length.
export function Panel({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: "16px", // radius max is 6px -> violation
        boxShadow: "0 4px 12px #111111", // hard-shadow style -> blur violation
        border: "1px solid #111111", // border min is 2px -> violation
      }}
    >
      {children}
    </div>
  );
}
