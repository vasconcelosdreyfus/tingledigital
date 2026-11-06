"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}
export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (!visible || reduce !== false) return;
    const control = animate(0, value, {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: setCurrent,
    });
    return () => control.stop();
  }, [visible, reduce, value]);
  const format = (n: number) =>
    n.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
      <span aria-hidden>
        {prefix}
        {format(reduce ? value : current)}
        {suffix}
      </span>
    </span>
  );
}
