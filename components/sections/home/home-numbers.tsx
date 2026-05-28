import * as React from "react";
import { Marquee } from "@/components/motion/marquee";
import { Star, Sparkles, Zap, TrendingUp } from "lucide-react";

interface NumberItem {
  label: string;
  accent?: "yellow" | "pink" | "cyan" | "lime";
}

interface HomeNumbersProps {
  items: NumberItem[];
}

const accentMap = {
  yellow: "text-[#FFEB00]",
  pink: "text-[#FF2D75]",
  cyan: "text-[#00F0FF]",
  lime: "text-[#B8FF00]",
} as const;

const separators = [Star, Sparkles, Zap, TrendingUp];

export function HomeNumbers({ items }: HomeNumbersProps) {
  return (
    <div className="relative border-y border-[#2A2A35] bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f] py-10">
      <Marquee speed="normal" pauseOnHover>
        {items.flatMap((item, i) => {
          const SeparatorIcon = separators[i % separators.length]!;
          return [
            <div key={`${item.label}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span
                className={`text-display-3 font-black tracking-tight ${
                  item.accent ? accentMap[item.accent] : "text-[#F5F5FA]"
                }`}
              >
                {item.label}
              </span>
            </div>,
            <SeparatorIcon
              key={`sep-${i}`}
              className="h-7 w-7 flex-shrink-0 text-[#FFEB00]"
              fill="currentColor"
              aria-hidden="true"
            />,
          ];
        })}
      </Marquee>
    </div>
  );
}
