"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import * as React from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    // reducedMotion="user": Framer desliga transform/layout quando o sistema pede menos movimento.
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: !reduce }}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
