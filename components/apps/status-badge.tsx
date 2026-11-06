import { CalendarCheck, CircleCheck, FlaskConical, Hammer } from "lucide-react";
import type { AppStatusKind } from "@/types/app";
import { cn } from "@/lib/utils";

// Positivo = azul, nunca verde (daltonismo verde-vermelho). Cor nunca é o único sinal: ícone + texto sempre.
const STYLE: Record<AppStatusKind, { color: string; Icon: typeof CircleCheck }> = {
  publicado: { color: "var(--status-published)", Icon: CircleCheck },
  teste: { color: "var(--status-test)", Icon: FlaskConical },
  realizado: { color: "var(--text-secondary)", Icon: CalendarCheck },
  desenvolvimento: { color: "var(--text-muted)", Icon: Hammer },
};

export function StatusBadge({
  kind,
  label,
  className,
}: {
  kind: AppStatusKind;
  label: string;
  className?: string;
}) {
  const { color, Icon } = STYLE[kind];
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 text-xs font-medium", className)}
      style={{ color }}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {label}
    </span>
  );
}
