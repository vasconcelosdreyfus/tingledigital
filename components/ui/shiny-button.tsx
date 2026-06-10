"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "relative isolate inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium overflow-hidden cursor-pointer transition-all duration-300 shiny-cta",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .shiny-cta {
          --shine: rgba(255, 255, 255, 0.9);
          --highlight: var(--text);
          background:
            linear-gradient(var(--bg), var(--bg)) padding-box,
            conic-gradient(from var(--gradient-angle), transparent, var(--highlight) 10%, var(--shine) 20%, var(--highlight) 30%, transparent 40%) border-box;
          border: 1px solid transparent;
          color: var(--text);
          animation: shiny-rotate-gradient 3s linear infinite;
        }
        .shiny-cta:hover {
          --shine: var(--text);
        }
        @keyframes shiny-rotate-gradient {
          to {
            --gradient-angle: 360deg;
          }
        }
      `}</style>
    </button>
  );
}
