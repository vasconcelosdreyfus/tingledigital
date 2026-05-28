import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: EyebrowColor;
}

const colorMap: Record<EyebrowColor, string> = {
  default: "text-[#888899]",
  yellow: "text-[#FFEB00]",
  pink: "text-[#FF2D75]",
  cyan: "text-[#00F0FF]",
  lime: "text-[#B8FF00]",
};

export function Eyebrow({ className, color = "default", ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
