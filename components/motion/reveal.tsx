"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
// Dispara uma vez, quando o bloco passa 100px da borda de baixo.
const VIEWPORT = { once: true, margin: "0px 0px -100px 0px" } as const;

function itemVariants(reduce: boolean | null, delay = 0): Variants {
  // Reduced motion: só fade, sem deslocamento.
  return {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(16px)" },
    visible: {
      opacity: 1,
      ...(reduce ? {} : { transform: "translateY(0px)" }),
      transition: { duration: 0.5, ease: EASE_OUT, delay },
    },
  };
}

type Tag = "div" | "li" | "ol";
type RevealProps = Omit<React.ComponentPropsWithoutRef<"div">, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> & {
  as?: Tag;
  delay?: number;
};

/** Bloco único que sobe + aparece ao entrar na tela. */
export function Reveal({ as = "div", delay = 0, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      {...rest}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={itemVariants(reduce, delay)}
    >
      {children}
    </M>
  );
}

/** Grupo em cascata: os filhos RevealItem entram um após o outro. */
export function RevealGroup({ as = "div", stagger = 0.06, delay = 0, children, ...rest }: RevealProps & { stagger?: number }) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      {...rest}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </M>
  );
}

export function RevealItem({ as = "div", children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M {...rest} variants={itemVariants(reduce)}>
      {children}
    </M>
  );
}

/** Um único pulso de escala ao entrar na tela (ex.: cadeado do Eter). */
export function PulseOnce({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className} style={{ display: "inline-flex" }}>{children}</span>;
  return (
    <motion.span
      className={className}
      style={{ display: "inline-flex" }}
      initial={{ transform: "scale(1)" }}
      whileInView={{ transform: ["scale(1)", "scale(1.25)", "scale(1)"] }}
      viewport={VIEWPORT}
      transition={{ duration: 0.4, ease: EASE_IN_OUT, delay }}
    >
      {children}
    </motion.span>
  );
}
