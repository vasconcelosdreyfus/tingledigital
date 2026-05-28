import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillarColor = "yellow" | "pink" | "cyan" | "lime" | "default";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  pillarColor?: PillarColor;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

const eyebrowColorMap: Record<PillarColor, "yellow" | "pink" | "cyan" | "lime" | "default"> = {
  yellow: "yellow",
  pink: "pink",
  cyan: "cyan",
  lime: "lime",
  default: "default",
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  pillarColor = "default",
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <Section spacing="xl" className="overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow color={eyebrowColorMap[pillarColor]}>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "text-display-1 mt-6 text-balance"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-2xl text-lg text-[--color-text-muted] sm:text-xl text-pretty">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="ghost">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
        {children}
      </Container>
    </Section>
  );
}
