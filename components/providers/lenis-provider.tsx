"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import * as React from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    // reducedMotion="user": Framer desliga transform/layout quando o sistema pede menos movimento.
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          lerp: 0.12,
          duration: 0.9,
          smoothWheel: !reduce,
          anchors: reduce ? { immediate: true } : true,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
