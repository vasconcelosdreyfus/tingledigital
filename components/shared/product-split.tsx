import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SplitPillar = "cognita" | "eter";

interface ProductSplitProps {
  pillar: SplitPillar;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  cta: { label: string; href: string };
  imageRight?: boolean;
  children?: React.ReactNode;
}

const accentMap: Record<
  SplitPillar,
  { eyebrow: "cyan" | "pink"; text: string; bg: string; bullet: string }
> = {
  cognita: {
    eyebrow: "cyan",
    text: "text-[--color-accent-cyan]",
    bg: "bg-[--color-accent-cyan]/10",
    bullet: "bg-[--color-accent-cyan]",
  },
  eter: {
    eyebrow: "pink",
    text: "text-[--color-accent-pink]",
    bg: "bg-[--color-accent-pink]/10",
    bullet: "bg-[--color-accent-pink]",
  },
};

export function ProductSplit({
  pillar,
  eyebrow,
  title,
  description,
  bullets,
  cta,
  imageRight = false,
  children,
}: ProductSplitProps) {
  const accent = accentMap[pillar];
  return (
    <Section spacing="lg">
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:gap-20",
            "lg:grid-cols-[1fr_1fr]"
          )}
        >
          <div className={cn(imageRight ? "lg:order-1" : "lg:order-2")}>
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-3xl border border-[--color-border] flex items-center justify-center",
                accent.bg
              )}
            >
              {children ? (
                children
              ) : (
                <span className={cn("text-display-1 font-black opacity-30", accent.text)}>
                  {pillar.toUpperCase()}
                </span>
              )}
            </div>
          </div>
          <div className={cn(imageRight ? "lg:order-2" : "lg:order-1")}>
            <Eyebrow color={accent.eyebrow}>{eyebrow}</Eyebrow>
            <h2 className="text-display-2 mt-4 text-balance">{title}</h2>
            <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed text-pretty">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-8 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base">
                    <span
                      className={cn(
                        "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                        accent.bullet
                      )}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
