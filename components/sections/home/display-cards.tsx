"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconColor?: string;
  index?: number;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconColor = "var(--text)",
  index = 0,
}: DisplayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl px-5 py-4 backdrop-blur-sm transition-all duration-500 cursor-default",
        className
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--surface-elevated) 75%, transparent)",
        border: "2px solid var(--border)",
        boxShadow: "0 4px 20px -4px color-mix(in srgb, var(--text) 8%, transparent)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="relative inline-flex items-center justify-center rounded-full p-1.5 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: "color-mix(in srgb, var(--text) 10%, transparent)" }}
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </span>
        <p className="text-lg font-semibold" style={{ color: iconColor }}>{title}</p>
      </div>
      <p className="text-base leading-snug" style={{ color: "var(--text)" }}>{description}</p>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{date}</p>
    </motion.div>
  );
}

export function DisplayCards({ cards }: { cards: DisplayCardProps[] }) {
  return (
    <div className="group grid [grid-template-areas:'stack'] place-items-center opacity-100">
      {cards.map((card, index) => {
        // First card stays put, others spread on group hover
        const baseTransform =
          index === 0
            ? "group-hover:-translate-y-14"
            : index === 1
            ? "translate-x-12 translate-y-10 group-hover:-translate-y-2 group-hover:translate-x-12"
            : "translate-x-24 translate-y-20 group-hover:translate-y-6 group-hover:translate-x-24";
        const grayscaleClass =
          index < 2
            ? "grayscale-[100%] group-hover:grayscale-0 before:absolute before:inset-0 before:rounded-xl before:bg-blend-overlay before:transition-opacity before:duration-700 group-hover:before:opacity-0"
            : "";
        return (
          <DisplayCard
            key={index}
            {...card}
            index={index}
            className={cn(
              "[grid-area:stack] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              baseTransform,
              grayscaleClass
            )}
          />
        );
      })}
    </div>
  );
}
