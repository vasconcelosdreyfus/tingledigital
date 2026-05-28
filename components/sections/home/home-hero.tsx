"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";
import { CursorBlob } from "@/components/motion/cursor-blob";
import { ArrowRight } from "lucide-react";

interface HomeHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function HomeHero({
  eyebrow,
  titleLine1,
  titleLine2,
  titleAccent,
  subtitle,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  return (
    <Section spacing="xl" className="relative min-h-[80vh] overflow-hidden flex items-center">
      <CursorBlob className="opacity-80" size={720} />
      <Container className="relative z-10">
        <Eyebrow color="yellow" className="mb-8">{eyebrow}</Eyebrow>
        <h1 className="text-display-1 text-balance">
          <span className="block">{titleLine1}</span>
          <span className="block">
            {titleLine2}{" "}
            <span className="bg-gradient-to-r from-[--color-accent-yellow] via-[--color-accent-pink] to-[--color-accent-cyan] bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-xl text-[--color-text-muted] text-pretty">
          {subtitle}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild size="xl">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="ghost">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
