"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

const speedMap = {
  slow: "60s",
  normal: "40s",
  fast: "20s",
};

export function Marquee({
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative flex w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee",
          direction === "right" && "motion-safe:[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee",
          direction === "right" && "motion-safe:[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
      </div>
    </div>
  );
}
