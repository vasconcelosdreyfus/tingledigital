"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconColor?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconColor = "var(--text)",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl px-4 py-3 backdrop-blur-sm transition-all duration-700",
        className
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--surface-elevated) 70%, transparent)",
        border: "2px solid var(--border)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="relative inline-block rounded-full p-1"
          style={{ backgroundColor: "color-mix(in srgb, var(--text) 12%, transparent)" }}
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </span>
        <p className="text-lg font-medium" style={{ color: iconColor }}>{title}</p>
      </div>
      <p className="text-base" style={{ color: "var(--text)" }}>{description}</p>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{date}</p>
    </div>
  );
}

interface DisplayCardsItem extends DisplayCardProps {}

export function DisplayCards({ cards }: { cards: DisplayCardsItem[] }) {
  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {cards.map((card, index) => {
        const baseTransform =
          index === 0
            ? "hover:-translate-y-10"
            : index === 1
            ? "translate-x-12 translate-y-10 hover:-translate-y-1"
            : "translate-x-24 translate-y-20 hover:translate-y-10";
        return (
          <DisplayCard
            key={index}
            {...card}
            className={cn("[grid-area:stack] transition-all duration-700", baseTransform)}
          />
        );
      })}
    </div>
  );
}
