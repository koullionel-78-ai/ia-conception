// Élément signature du site : une grille générée de motifs (losanges,
// croix, points) qui évoque à la fois le tissage traditionnel (le métier
// à tisser) et la génération algorithmique pixel par pixel (l'IA).
// Le rendu est déterministe (seed) pour éviter tout problème d'hydratation
// entre le serveur et le client.

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTE = ["#D4AF37", "#E5C158", "#F4D976", "#B8860B"];

function buildCells(seed, rows, cols) {
  const rng = mulberry32(seed * 9301 + 49297);
  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const r = rng();
      const shapeRoll = rng();
      const shape = shapeRoll < 0.55 ? "diamond" : shapeRoll < 0.82 ? "cross" : "dot";
      cells.push({
        row,
        col,
        shape,
        color: PALETTE[Math.floor(rng() * PALETTE.length)],
        opacity: 0.08 + r * 0.32,
        scale: 0.45 + rng() * 0.5,
      });
    }
  }
  return cells;
}

export default function WovenPattern({
  seed = 1,
  rows = 8,
  cols = 8,
  animated = false,
  className = "",
}) {
  const cellSize = 40;
  const cells = buildCells(seed, rows, cols);

  return (
    <svg
      viewBox={`0 0 ${cols * cellSize} ${rows * cellSize}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {cells.map((cell, i) => {
        const cx = cell.col * cellSize + cellSize / 2;
        const cy = cell.row * cellSize + cellSize / 2;
        const size = cellSize * cell.scale;
        const style = animated
          ? {
              transformOrigin: `${cx}px ${cy}px`,
              animationDelay: `${(cell.row + cell.col) * 28}ms`,
            }
          : undefined;
        const animClass = animated ? "animate-weave opacity-0" : "";

        if (cell.shape === "dot") {
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={size / 4}
              fill={cell.color}
              opacity={cell.opacity}
              className={animClass}
              style={style}
            />
          );
        }

        if (cell.shape === "cross") {
          const arm = size / 2;
          const thickness = Math.max(2, size / 6);
          return (
            <g key={i} className={animClass} style={style}>
              <rect
                x={cx - thickness / 2}
                y={cy - arm}
                width={thickness}
                height={arm * 2}
                fill={cell.color}
                opacity={cell.opacity}
              />
              <rect
                x={cx - arm}
                y={cy - thickness / 2}
                width={arm * 2}
                height={thickness}
                fill={cell.color}
                opacity={cell.opacity}
              />
            </g>
          );
        }

        return (
          <g key={i} className={animClass} style={style}>
            <rect
              x={cx - size / 2}
              y={cy - size / 2}
              width={size}
              height={size}
              transform={`rotate(45 ${cx} ${cy})`}
              fill={cell.color}
              opacity={cell.opacity}
            />
          </g>
        );
      })}
    </svg>
  );
}