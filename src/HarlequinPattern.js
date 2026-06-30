import "./HarlequinPattern.css";

const DEFAULT_SYMBOLS = ['+', '-', '×', '÷', '=', '%', '.', '√'];

// Each shape maps to a transform applied to the whole grid, plus a
// counter-transform applied to each symbol so it stays upright/readable.
const SHAPES = {
  square:  { grid: "",              counter: "" },
  diamond: { grid: "rotate(45deg)", counter: "rotate(-45deg)" },
};

/**
 * A full-screen, harlequin background of evenly spaced symbols.
 *
 * Props (all optional):
 *  - cols, rows:   number of columns/rows in the grid (default 25).
 *  - symbols:      array of strings to cycle through (default calculator glyphs).
 *  - cellSize:     CSS size of each square cell (default "6.6667vmin").
 *  - scale:        multiplier applied to the whole pattern (default 1.5).
 *  - shape:        cell shape — "square" or "diamond" (default "diamond").
 *  - shapeColor:   symbol color (default "#f1f3f9").
 *  - background:   page background behind the pattern (default "#0f0f1a").
 *  - blur:         0..1 CSS blur on the symbols, where 1 = 100% (default 0).
 */

// Blur amount, in px, that corresponds to a blur prop value of 1 (100%).

const MAX_BLUR_PX = 20;

function HarlequinPattern({
  cols = 25,
  rows = 25,
  symbols = DEFAULT_SYMBOLS,
  cellSize = "25vmin",
  scale = 0.5,
  shape = "square",
  shapeColor = "#f1f3f9",
  background = "#0f0f1a",
  blur = 0.25,
}) {
  const { grid: gridTransform, counter: counterTransform } =
    SHAPES[shape] || SHAPES.diamond;
  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isAlt = (row + col) % 2 === 0;
      const symbol = symbols[(row * cols + col) % symbols.length];
      cells.push(
        <div key={`${row}-${col}`} className={`harlequin-cell ${isAlt ? "a" : "b"}`}>
          <span>{symbol}</span>
        </div>
      );
    }
  }

  return (
    <div className="harlequin-wrapper" style={{ background }}>
      <div
        className="harlequin-grid"
        style={{
          "--cell": cellSize,
          "--counter-transform": counterTransform || "none",
          color: shapeColor,
          gridTemplateColumns: `repeat(${cols}, var(--cell))`,
          gridTemplateRows: `repeat(${rows}, var(--cell))`,
          transform: `${gridTransform} scale(${scale})`.trim(),
          filter: blur ? `blur(${blur * MAX_BLUR_PX}px)` : undefined,
        }}
      >
        {cells}
      </div>
    </div>
  );
}

export default HarlequinPattern;
