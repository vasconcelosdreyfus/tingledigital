"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RotateCw, Plus } from "lucide-react";
import { TingleMark } from "./tingle-mark";

/** Real brand artwork, with bounded pointer response and an accessible manual composition. */
export function BrandPlayground() {
  const t = useTranslations("immersive");
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const area = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0),
    py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 90, damping: 24 });
  const y = useSpring(py, { stiffness: 90, damping: 24 });
  return (
    <div
      className="brand-playground"
      ref={area}
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== "mouse") return;
        const box = area.current?.getBoundingClientRect();
        if (!box) return;
        px.set((event.clientX - box.left - box.width / 2) * 0.05);
        py.set((event.clientY - box.top - box.height / 2) * 0.05);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <span className="playground-label">{t("playgroundLabel")}</span>
      <div className="brand-orbit orbit-one" aria-hidden />
      <div className="brand-orbit orbit-two" aria-hidden />
      <Plus className="registration-mark mark-one" size={18} aria-hidden />
      <Plus className="registration-mark mark-two" size={18} aria-hidden />
      <motion.div
        className="brand-sculpture"
        style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}
      >
        <motion.div
          className="brand-plane plane-back"
          animate={{ rotate: expanded ? -24 : -12, scale: expanded ? 1.08 : 1 }}
          transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="brand-plane plane-middle"
          animate={{ rotate: expanded ? 22 : 9 }}
          transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="brand-plane plane-front"
          animate={{ rotate: expanded ? -6 : 0 }}
          transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <TingleMark className="sculpture-mark" />
        </motion.div>
      </motion.div>
      <span className="playground-caption">{t("playgroundCaption")}</span>
      <button
        className="composition-button"
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-pressed={expanded}
      >
        <RotateCw size={15} aria-hidden />
        {expanded ? t("recompose") : t("play")}
      </button>
    </div>
  );
}
