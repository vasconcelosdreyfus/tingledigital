import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface DisplayCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  date: string;
  href: string;
  iconColor?: string;
}

export function DisplayCards({ cards }: { cards: DisplayCardProps[] }) {
  return (
    <div className="service-card-stack">
      {cards.map((card, index) => (
        <Link
          href={card.href}
          key={card.title}
          className="service-display-card"
          style={{ "--card-index": index } as CSSProperties}
        >
          <div className="flex items-center gap-2.5">
            <span className="service-card-icon">{card.icon}</span>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <ArrowUpRight size={16} className="ml-auto" aria-hidden />
          </div>
          <p className="text-base leading-snug">{card.description}</p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {card.date}
          </p>
        </Link>
      ))}
    </div>
  );
}
