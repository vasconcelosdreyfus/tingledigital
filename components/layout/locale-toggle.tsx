"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const [active, setActive] = React.useState<"pt" | "en">("pt");

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[--color-border] bg-[--color-surface]/50 p-1 text-xs",
        className
      )}
    >
      {(["pt", "en"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setActive(locale)}
          className={cn(
            "rounded-full px-3 py-1 font-semibold uppercase tracking-wider transition-colors",
            active === locale
              ? "bg-[--color-text] text-[--color-bg]"
              : "text-[--color-text-muted] hover:text-[--color-text]"
          )}
          aria-pressed={active === locale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
