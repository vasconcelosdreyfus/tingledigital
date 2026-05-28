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
  default: "bg-[--color-bg] text-[--color-text]",
  elevated: "bg-[--color-surface] text-[--color-text]",
  "accent-yellow": "bg-[--color-accent-yellow] text-[--color-bg]",
  "accent-pink": "bg-[--color-accent-pink] text-[--color-bg]",
  "accent-cyan": "bg-[--color-accent-cyan] text-[--color-bg]",
  "accent-lime": "bg-[--color-accent-lime] text-[--color-bg]",
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
