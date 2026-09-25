"use client";

import * as React from "react";
import type { AppEntry, AppStatusKind } from "@/types/app";
import { AppCard } from "@/components/apps/app-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type FilterId = "todos" | "publicados" | "eventos" | "teste";

const FILTERS: { id: FilterId; label: string; kinds: AppStatusKind[] | null }[] = [
  { id: "todos", label: "Todos", kinds: null },
  { id: "publicados", label: "Publicados", kinds: ["publicado"] },
  { id: "eventos", label: "Em eventos (realizado)", kinds: ["realizado"] },
  { id: "teste", label: "Em teste e desenvolvimento", kinds: ["teste", "desenvolvimento"] },
];

export function AppsShowcase({ apps }: { apps: AppEntry[] }) {
  const [active, setActive] = React.useState<FilterId>("todos");
  const kinds = FILTERS.find((f) => f.id === active)?.kinds ?? null;
  const visible = kinds ? apps.filter((a) => kinds.includes(a.status.kind)) : apps;

  return (
    <div>
      <div role="group" aria-label="Filtrar aplicações por status" className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const count = f.kinds ? apps.filter((a) => f.kinds?.includes(a.status.kind)).length : apps.length;
          const pressed = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]",
              )}
              style={
                pressed
                  ? { backgroundColor: "var(--text)", color: "var(--bg)", border: "1px solid var(--text)" }
                  : { color: "var(--text-secondary)", border: "1px solid var(--border)" }
              }
            >
              {f.label}
              <span className="ml-1.5 tabular-nums opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length === 1 ? "1 aplicação exibida" : `${visible.length} aplicações exibidas`}
      </p>

      <RevealGroup key={active} stagger={0.06} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((app) => (
          <RevealItem key={app.slug} className="min-w-0" data-app={app.slug}>
            <AppCard app={app} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
