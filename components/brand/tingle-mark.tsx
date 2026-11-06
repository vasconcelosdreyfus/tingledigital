"use client";

import * as React from "react";
import { MARK_PATHS, MARK_PIXELS } from "./tingle-mark-data";

type Piece = keyof typeof MARK_PATHS;
const PIECES: Piece[] = ["teal", "green", "orange", "pink"]; // monta de baixo para cima

// Degradês amostrados do logo oficial.
const GRADIENTS: Record<Piece, { from: string; to: string; x2: string; y2: string }> = {
  pink: { from: "#F04A68", to: "#C9304F", x2: "0", y2: "1" },
  green: { from: "#9BBA45", to: "#6F8E2C", x2: "1", y2: "0" },
  orange: { from: "#F7901E", to: "#FDBB16", x2: "1", y2: "0" },
  teal: { from: "#14BDBF", to: "#01A3A6", x2: "0", y2: "1" },
};
const PIXEL_COLOR = "#8AAB3A";

function Defs({ id }: { id: string }) {
  return (
    <defs>
      {PIECES.map((p) => (
        <linearGradient
          key={p}
          id={`${id}-${p}`}
          x1="0"
          y1="0"
          x2={GRADIENTS[p].x2}
          y2={GRADIENTS[p].y2}
        >
          <stop offset="0" stopColor={GRADIENTS[p].from} />
          <stop offset="1" stopColor={GRADIENTS[p].to} />
        </linearGradient>
      ))}
    </defs>
  );
}

/** Símbolo estático (header, footer). */
export function TingleMark({ className }: { className?: string }) {
  const id = React.useId();
  return (
    <svg viewBox="0 0 470 374" className={className} aria-hidden focusable="false">
      <Defs id={id} />
      {MARK_PIXELS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={PIXEL_COLOR} />
      ))}
      {PIECES.map((p) => (
        <path key={p} d={MARK_PATHS[p]} fill={`url(#${id}-${p})`} fillRule="evenodd" />
      ))}
    </svg>
  );
}

/** Original brand, assembled once through CSS; identical markup for reduced motion. */
export function AnimatedTingleMark({ className }: { className?: string }) {
  return (
    <div className="hero-mark">
      <TingleMark className={className} />
    </div>
  );
}
