import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoPillar = "cognita" | "eter" | "consultoria" | "utilities";

interface BentoCardProps {
  pillar: BentoPillar;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  size?: "default" | "wide" | "tall";
  className?: string;
  children?: React.ReactNode;
}

const accentMap: Record<BentoPillar, { text: string; bg: string; glow: string }> = {
  cognita: {
    text: "text-[--color-accent-cyan]",
    bg: "bg-[--color-accent-cyan]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(0,240,255,0.6)]",
  },
  eter: {
    text: "text-[--color-accent-pink]",
    bg: "bg-[--color-accent-pink]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,45,117,0.6)]",
  },
  consultoria: {
    text: "text-[--color-accent-yellow]",
    bg: "bg-[--color-accent-yellow]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,235,0,0.6)]",
  },
  utilities: {
    text: "text-[--color-accent-lime]",
    bg: "bg-[--color-accent-lime]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(184,255,0,0.6)]",
  },
};

const sizeMap: Record<NonNullable<BentoCardProps["size"]>, string> = {
  default: "lg:col-span-1 lg:row-span-1",
  wide: "lg:col-span-2 lg:row-span-1",
  tall: "lg:col-span-1 lg:row-span-2",
};

export function BentoCard({
  pillar,
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "Saiba mais",
  size = "default",
  className,
  children,
}: BentoCardProps) {
  const colors = accentMap[pillar];
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-8 transition-all duration-300 hover:border-[--color-border-strong]",
        sizeMap[size],
        colors.glow,
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between">
          <p className={cn("text-eyebrow", colors.text)}>{eyebrow}</p>
          <ArrowUpRight
            className={cn("h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", colors.text)}
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 text-3xl font-bold text-balance">{title}</h3>
        <p className="mt-4 max-w-md text-base text-[--color-text-muted] leading-relaxed">
          {description}
        </p>
      </div>
      {children && <div className="mt-8 relative">{children}</div>}
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
        <span className={colors.text}>{ctaLabel}</span>
        <span className={cn("h-px w-8 transition-all group-hover:w-12", colors.bg)} />
      </div>
    </Link>
  );
}
