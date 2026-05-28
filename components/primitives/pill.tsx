import * as React from "react";
import { cn } from "@/lib/utils";

type PillColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: PillColor;
}

const colorMap: Record<PillColor, string> = {
  default: "border-[#2A2A35] text-[#888899]",
  yellow: "border-[#FFEB00]/40 text-[#FFEB00] bg-[#FFEB00]/5",
  pink: "border-[#FF2D75]/40 text-[#FF2D75] bg-[#FF2D75]/5",
  cyan: "border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/5",
  lime: "border-[#B8FF00]/40 text-[#B8FF00] bg-[#B8FF00]/5",
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
