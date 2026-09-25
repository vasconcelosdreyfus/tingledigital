import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-eyebrow mb-6" style={{ color: "var(--text-secondary)" }}>
              {eyebrow}
            </p>
            <h1 className="text-display-1 text-balance" style={{ color: "var(--text)" }}>
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.15}>
            <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-pretty leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {subtitle}
            </p>
            </Reveal>
          )}
          {(primaryCta || secondaryCta) && (
            <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {primaryCta && (
                <Button size="lg" asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="lg" variant="secondary" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </Reveal>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
