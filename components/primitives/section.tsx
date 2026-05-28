import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTone =
  | "default"
  | "elevated"
  | "accent-yellow"
  | "accent-pink"
  | "accent-cyan"
  | "accent-lime";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: SectionSpacing;
}

const toneMap: Record<SectionTone, string> = {
  default: "bg-[#0a0a0f] text-[#F5F5FA]",
  elevated: "bg-[#15151f] text-[#F5F5FA]",
  "accent-yellow": "bg-[#FFEB00] text-[#0a0a0f]",
  "accent-pink": "bg-[#FF2D75] text-[#0a0a0f]",
  "accent-cyan": "bg-[#00F0FF] text-[#0a0a0f]",
  "accent-lime": "bg-[#B8FF00] text-[#0a0a0f]",
};

const spacingMap: Record<SectionSpacing, string> = {
  sm: "py-12 sm:py-16",
  md: "py-20 sm:py-24",
  lg: "py-24 sm:py-32",
  xl: "py-32 sm:py-40",
};

export function Section({
  className,
  tone = "default",
  spacing = "lg",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(toneMap[tone], spacingMap[spacing], "relative", className)}
      {...props}
    />
  );
}
