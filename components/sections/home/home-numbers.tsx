import * as React from "react";
import { Marquee } from "@/components/motion/marquee";
import { Star } from "lucide-react";

interface NumberItem {
  label: string;
  accent?: "yellow" | "pink" | "cyan" | "lime";
}

interface HomeNumbersProps {
  items: NumberItem[];
}

const accentMap = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
} as const;

export function HomeNumbers({ items }: HomeNumbersProps) {
  return (
    <Marquee
      speed="normal"
      pauseOnHover
      className="border-y border-[--color-border] py-8 bg-[--color-bg]"
    >
      {items.flatMap((item, i) => [
        <span
          key={`${item.label}-${i}`}
          className={`text-display-3 font-black whitespace-nowrap ${
            item.accent ? accentMap[item.accent] : "text-[--color-text]"
          }`}
        >
          {item.label}
        </span>,
        <Star
          key={`star-${i}`}
          className="h-6 w-6 flex-shrink-0 text-[--color-accent-yellow]"
          aria-hidden="true"
          fill="currentColor"
        />,
      ])}
    </Marquee>
  );
}
