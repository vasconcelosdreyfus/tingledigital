import Image from "next/image";
import type { AppEntry } from "@/types/app";
import { cn } from "@/lib/utils";

/** Ícone oficial no formato de app (cantos 22%), mesmo tamanho e borda para todas as aplicações. */
export function AppIcon({ app, className }: { app: AppEntry; className?: string }) {
  return (
    <div
      className={cn("relative aspect-square shrink-0 overflow-hidden rounded-[22%] shadow-sm", className)}
      style={{ border: "1px solid var(--border)" }}
    >
      <Image
        src={app.icon.src}
        alt={app.icon.alt}
        fill
        sizes="96px"
        unoptimized={app.icon.src.endsWith(".svg")}
        className="object-cover"
      />
    </div>
  );
}
