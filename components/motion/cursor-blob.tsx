"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CursorBlobProps {
  className?: string;
  /** Size of the primary blob in pixels */
  size?: number;
}

export function CursorBlob({ className, size = 600 }: CursorBlobProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.6 });

  // Center each blob on the cursor by subtracting half its width/height.
  const blob1X = useTransform(springX, (v) => v - size / 2);
  const blob1Y = useTransform(springY, (v) => v - size / 2);
  const blob2X = useTransform(springX, (v) => v - (size * 0.6) / 2);
  const blob2Y = useTransform(springY, (v) => v - (size * 0.6) / 2);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouseX.set(e.clientX - r.left);
      mouseY.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute top-0 left-0 rounded-full blur-3xl will-change-transform"
        style={{
          width: size,
          height: size,
          x: blob1X,
          y: blob1Y,
          background:
            "radial-gradient(circle, rgba(255,235,0,0.35) 0%, rgba(255,45,117,0.2) 35%, rgba(0,240,255,0.1) 65%, transparent 80%)",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 rounded-full blur-3xl will-change-transform opacity-60"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          x: blob2X,
          y: blob2Y,
          background:
            "radial-gradient(circle, rgba(184,255,0,0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
