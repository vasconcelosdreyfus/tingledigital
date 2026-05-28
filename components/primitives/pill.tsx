import * as React from "react";
import { cn } from "@/lib/utils";

type PillColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: PillColor;
}

const colorMap: Record<PillColor, string> = {
  default: "border-[--color-border] text-[--color-text-muted]",
  yellow:
    "border-[--color-accent-yellow]/40 text-[--color-accent-yellow] bg-[--color-accent-yellow]/5",
  pink: "border-[--color-accent-pink]/40 text-[--color-accent-pink] bg-[--color-accent-pink]/5",
  cyan: "border-[--color-accent-cyan]/40 text-[--color-accent-cyan] bg-[--color-accent-cyan]/5",
  lime: "border-[--color-accent-lime]/40 text-[--color-accent-lime] bg-[--color-accent-lime]/5",
};

export function Pill({ className, color = "default", ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
