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

const accentMap: Record<BentoPillar, { text: string; bg: string; border: string; glow: string; bgFaded: string }> = {
  cognita: {
    text: "text-[#00F0FF]",
    bg: "bg-[#00F0FF]",
    border: "border-[#00F0FF]/30",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(0,240,255,0.6)]",
    bgFaded: "bg-[#00F0FF]/5",
  },
  eter: {
    text: "text-[#FF2D75]",
    bg: "bg-[#FF2D75]",
    border: "border-[#FF2D75]/30",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,45,117,0.6)]",
    bgFaded: "bg-[#FF2D75]/5",
  },
  consultoria: {
    text: "text-[#FFEB00]",
    bg: "bg-[#FFEB00]",
    border: "border-[#FFEB00]/30",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,235,0,0.6)]",
    bgFaded: "bg-[#FFEB00]/5",
  },
  utilities: {
    text: "text-[#B8FF00]",
    bg: "bg-[#B8FF00]",
    border: "border-[#B8FF00]/30",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(184,255,0,0.6)]",
    bgFaded: "bg-[#B8FF00]/5",
  },
};

const sizeMap: Record<NonNullable<BentoCardProps["size"]>, string> = {
  default: "lg:col-span-1 lg:row-span-1",
  wide: "lg:col-span-2 lg:row-span-1",
  tall: "lg:col-span-1 lg:row-span-2",
};

function PillarVisual({ pillar, accent }: { pillar: BentoPillar; accent: typeof accentMap[BentoPillar] }) {
  switch (pillar) {
    case "cognita":
      return (
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i % 3 === 0 ? accent.bg : "bg-[#2A2A35]",
                "group-hover:scale-y-[1.5]"
              )}
              style={{ transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
      );
    case "eter":
      return (
        <div className="flex items-end justify-between gap-1 h-8">
          {[40, 70, 30, 55, 80, 45, 65].map((h, i) => (
            <div
              key={i}
              className={cn(accent.bg, "w-1.5 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-60")}
              style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      );
    case "consultoria":
      return (
        <div className="relative h-8">
          <svg viewBox="0 0 120 32" className="w-full h-full">
            <path
              d="M 0 24 Q 30 4, 60 16 T 120 8"
              stroke="#FFEB00"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <circle cx="0" cy="24" r="3" fill="#FFEB00" />
            <circle cx="60" cy="16" r="3" fill="#FFEB00" />
            <circle cx="120" cy="8" r="3" fill="#FFEB00" />
          </svg>
        </div>
      );
    case "utilities":
      return (
        <div className="grid grid-cols-4 gap-2">
          {["AI", "IoT", "BC", "ML"].map((tech) => (
            <div
              key={tech}
              className={cn(
                "rounded-md border px-2 py-1 text-center text-[10px] font-black tracking-wider transition-colors",
                accent.border,
                accent.text,
                accent.bgFaded,
                "group-hover:scale-105"
              )}
            >
              {tech}
            </div>
          ))}
        </div>
      );
  }
}

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
  const accent = accentMap[pillar];
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-[#2A2A35] bg-[#15151f]/60 p-8 transition-all duration-300 hover:border-[#3A3A48]",
        sizeMap[size],
        accent.glow,
        className
      )}
    >
      {/* Gradient orb in corner */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
        )}
        style={{
          background: `radial-gradient(circle, ${
            pillar === "cognita" ? "#00F0FF" : pillar === "eter" ? "#FF2D75" : pillar === "consultoria" ? "#FFEB00" : "#B8FF00"
          } 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <p className={cn("text-eyebrow", accent.text)}>{eyebrow}</p>
          <ArrowUpRight
            className={cn("h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", accent.text)}
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 text-3xl font-bold text-balance text-[#F5F5FA]">{title}</h3>
        <p className="mt-4 max-w-md text-base text-[#888899] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Visual accent */}
      <div className="relative z-10 my-6">
        <PillarVisual pillar={pillar} accent={accent} />
      </div>

      {children && <div className="mt-4 relative z-10">{children}</div>}

      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold">
        <span className={accent.text}>{ctaLabel}</span>
        <span className={cn("h-px w-8 transition-all group-hover:w-12", accent.bg)} />
      </div>
    </Link>
  );
}
