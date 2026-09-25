"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_IN_OUT, EASE_OUT } from "./reveal";

const VIEWPORT = { once: true, margin: "0px 0px -100px 0px" } as const;

/** Linha 01 → 02 → 03 que se desenha sobre a grade de 3 colunas (gap-6). Só md+. */
export function StepsConnector() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mb-8 hidden h-3 md:grid md:grid-cols-3 md:gap-6" aria-hidden>
      {/* do centro da 1ª coluna ao centro da 3ª: (100% - 2·gap) / 6 de cada lado */}
      <div className="absolute top-1/2 h-px -translate-y-1/2" style={{ left: "calc((100% - 3rem) / 6)", right: "calc((100% - 3rem) / 6)", backgroundColor: "var(--border)" }}>
        <motion.div
          className="h-full origin-left"
          style={{ backgroundColor: "var(--text)" }}
          initial={reduce ? { opacity: 0 } : { transform: "scaleX(0)" }}
          whileInView={reduce ? { opacity: 1 } : { transform: "scaleX(1)" }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE_IN_OUT }}
        />
      </div>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="relative mx-auto h-3 w-3 rounded-full"
          style={{ backgroundColor: "var(--text)" }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "scale(0.6)" }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, transform: "scale(1)" }}
          viewport={VIEWPORT}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.25 }}
        />
      ))}
    </div>
  );
}
