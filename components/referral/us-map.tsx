export function USMap() {
  const states = [
    // Row 1
    { abbr: "ME", x: 704, y: 0, op: false },
    // Row 2
    { abbr: "VT", x: 640, y: 64, op: false },
    { abbr: "NH", x: 704, y: 64, op: false },
    // Row 3
    { abbr: "WA", x: 64, y: 128, op: false },
    { abbr: "ID", x: 128, y: 128, op: false },
    { abbr: "MT", x: 192, y: 128, op: false },
    { abbr: "ND", x: 256, y: 128, op: false },
    { abbr: "MN", x: 320, y: 128, op: false },
    { abbr: "WI", x: 384, y: 128, op: false },
    { abbr: "MI", x: 448, y: 128, op: false },
    { abbr: "NY", x: 576, y: 128, op: true },
    { abbr: "MA", x: 640, y: 128, op: true },
    { abbr: "RI", x: 704, y: 128, op: true },
    // Row 4
    { abbr: "OR", x: 64, y: 192, op: false },
    { abbr: "NV", x: 128, y: 192, op: false },
    { abbr: "WY", x: 192, y: 192, op: false },
    { abbr: "SD", x: 256, y: 192, op: false },
    { abbr: "IA", x: 320, y: 192, op: false },
    { abbr: "IL", x: 384, y: 192, op: true },
    { abbr: "IN", x: 448, y: 192, op: false },
    { abbr: "OH", x: 512, y: 192, op: false },
    { abbr: "PA", x: 576, y: 192, op: false },
    { abbr: "NJ", x: 640, y: 192, op: true },
    { abbr: "CT", x: 704, y: 192, op: true },
    // Row 5
    { abbr: "CA", x: 64, y: 256, op: true },
    { abbr: "UT", x: 128, y: 256, op: false },
    { abbr: "CO", x: 192, y: 256, op: false },
    { abbr: "NE", x: 256, y: 256, op: false },
    { abbr: "KS", x: 320, y: 256, op: false },
    { abbr: "MO", x: 384, y: 256, op: false },
    { abbr: "KY", x: 448, y: 256, op: false },
    { abbr: "WV", x: 512, y: 256, op: false },
    { abbr: "VA", x: 576, y: 256, op: true },
    { abbr: "MD", x: 640, y: 256, op: true },
    { abbr: "DE", x: 704, y: 256, op: false },
    // Row 6
    { abbr: "AZ", x: 128, y: 320, op: false },
    { abbr: "NM", x: 192, y: 320, op: false },
    { abbr: "OK", x: 256, y: 320, op: false },
    { abbr: "AR", x: 320, y: 320, op: false },
    { abbr: "TN", x: 384, y: 320, op: false },
    { abbr: "NC", x: 448, y: 320, op: false },
    { abbr: "SC", x: 512, y: 320, op: false },
    { abbr: "DC", x: 576, y: 320, op: true },
    // Row 7
    { abbr: "AK", x: 0, y: 384, op: false },
    { abbr: "HI", x: 64, y: 384, op: false },
    { abbr: "TX", x: 256, y: 384, op: false },
    { abbr: "LA", x: 320, y: 384, op: false },
    { abbr: "MS", x: 384, y: 384, op: false },
    { abbr: "AL", x: 448, y: 384, op: false },
    { abbr: "GA", x: 512, y: 384, op: false },
    // Row 8
    { abbr: "FL", x: 512, y: 448, op: false },
  ];

  return (
    <svg
      className="us-map"
      viewBox="0 0 768 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="US tile map — Lumen operating states highlighted"
    >
      {states.map((s) => (
        <g key={s.abbr} className={s.op ? "op" : "nm"}>
          <rect x={s.x} y={s.y} width={58} height={58} />
          <text x={s.x + 29} y={s.y + 29}>
            {s.abbr}
          </text>
        </g>
      ))}
    </svg>
  );
}
