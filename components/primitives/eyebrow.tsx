import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: EyebrowColor;
}

const colorMap: Record<EyebrowColor, string> = {
  default: "text-[--color-text-muted]",
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
};

export function Eyebrow({ className, color = "default", ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "text-eyebrow inline-flex items-center gap-2",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
