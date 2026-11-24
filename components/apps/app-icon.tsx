import Image from "next/image";
import type { AppEntry } from "@/types/app";
import { cn } from "@/lib/utils";

/** Ícone oficial no formato de app (cantos 22%), mesmo tamanho e borda para todas as aplicações. */
export function AppIcon({
  app,
  size = 56,
  className,
  decorative = false,
}: {
  app: AppEntry;
  size?: number;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square shrink-0 overflow-hidden rounded-[22%] shadow-sm",
        className
      )}
      style={{ border: "1px solid var(--border)" }}
      aria-hidden={decorative || undefined}
    >
      <Image
        src={app.icon.src}
        alt={decorative ? "" : app.icon.alt}
        width={size}
        height={size}
        sizes="120px"
        unoptimized={app.icon.unoptimized || app.icon.src.endsWith(".svg")}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
