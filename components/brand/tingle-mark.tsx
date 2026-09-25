"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
        <linearGradient key={p} id={`${id}-${p}`} x1="0" y1="0" x2={GRADIENTS[p].x2} y2={GRADIENTS[p].y2}>
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

// Cada peça chega da sua direção e encaixa no corpo.
const FROM: Record<Piece, string> = {
  teal: "translate(0px, 48px) rotate(8deg)",
  green: "translate(-48px, 0px) rotate(-8deg)",
  orange: "translate(48px, 0px) rotate(8deg)",
  pink: "translate(0px, -48px) rotate(-6deg)",
};
const HOVER: Partial<Record<Piece, string>> = {
  pink: "translate(0px, -10px) rotate(0deg)", // "braços pra cima"
};
const REST = "translate(0px, 0px) rotate(0deg)";
const SPRING = { type: "spring", duration: 0.7, bounce: 0.25 } as const;

const pieceVariants = (p: Piece, i: number): Variants => ({
  hidden: { opacity: 0, transform: FROM[p] },
  visible: { opacity: 1, transform: REST, transition: { ...SPRING, delay: 0.1 + i * 0.08 } },
  hover: { opacity: 1, transform: HOVER[p] ?? REST, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } },
});

// Pixels se soltam do corpo e voam para a esquerda; no hover, se afastam um pouco mais.
const pixelVariants = (i: number): Variants => ({
  hidden: { opacity: 0, transform: "translate(70px, 0px) scale(0.6)" },
  visible: {
    opacity: 1,
    transform: "translate(0px, 0px) scale(1)",
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.55 + i * 0.07 },
  },
  hover: {
    opacity: 1,
    transform: `translate(${-8 - i * 6}px, 0px) scale(1)`,
    transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1], delay: i * 0.03 },
  },
});

const FILL_BOX = { transformBox: "fill-box", transformOrigin: "center" } as const;

/** Símbolo que se monta na chegada. Decorativo: o nome da marca está no header. */
export function AnimatedTingleMark({ className }: { className?: string }) {
  const id = React.useId();
  const reduce = useReducedMotion();
  if (reduce) {
    // Menos movimento: símbolo já montado, só um fade.
    return (
      <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <TingleMark className={className} />
      </motion.div>
    );
  }
  return (
    <motion.svg
      viewBox="0 0 470 374"
      className={className}
      aria-hidden
      focusable="false"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ overflow: "visible" }}
    >
      <Defs id={id} />
      {MARK_PIXELS.map(([x, y, w, h], i) => (
        <motion.rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={w}
          height={h}
          fill={PIXEL_COLOR}
          variants={pixelVariants(i)}
          style={FILL_BOX}
        />
      ))}
      {PIECES.map((p, i) => (
        <motion.path
          key={p}
          d={MARK_PATHS[p]}
          fill={`url(#${id}-${p})`}
          fillRule="evenodd"
          variants={pieceVariants(p, i)}
          style={FILL_BOX}
        />
      ))}
    </motion.svg>
  );
}
