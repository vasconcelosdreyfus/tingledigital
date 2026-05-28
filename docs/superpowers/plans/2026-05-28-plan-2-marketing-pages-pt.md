# Tingle Digital — Plano 2: Marketing Pages PT

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete PT-BR marketing site — long-form home plus six dedicated pages (`/cognita`, `/eter`, `/consultoria`, `/utilities`, `/sobre`, `/contato`) — including a functional contact form that sends real email via Resend.

**Architecture:** Section components composed via data-driven composite pages (`ProductPage`, `ServicePage`). Content lives in TypeScript data files under `content/data/` so copy can be edited without touching component code. Forms are progressively enhanced (works without JS via server actions); validation is shared between client (zod-resolver in react-hook-form) and server (zod parse in API route). EN translation is intentionally deferred to Plan 4 — strings are written in PT-BR with i18n-friendly structure (no inline string concatenation).

**Tech Stack:** Inherits everything from Plan 1 (Next.js 16, React 19, TS strict, Tailwind v4, Framer Motion, shadcn/ui, Inter). Adds: `resend` (transactional email), `react-hook-form`, `@hookform/resolvers`, `zod`.

**Spec reference:** `docs/superpowers/specs/2026-05-27-tingledigital-redesign-design.md` — implements Section 5 (page structures) and Section 11 phases 3 + 4.

**Production baseline:** `https://tingledigital.vercel.app` (currently has placeholder `/` and `/design-system`). After this plan, all 7 marketing routes exist and the site reads as a complete (PT-only) institutional presence.

---

## File Structure

By the end of this plan, the project tree will look like (new files only — Plan 1 files remain):

```
tingledigital/
├── app/
│   ├── page.tsx                            # T19 (replaces Plan 1 placeholder)
│   ├── cognita/page.tsx                    # T21
│   ├── eter/page.tsx                       # T22
│   ├── consultoria/page.tsx                # T24
│   ├── utilities/page.tsx                  # T25
│   ├── sobre/page.tsx                      # T27
│   ├── contato/page.tsx                    # T31
│   └── api/
│       └── contact/route.ts                # T30
├── components/
│   ├── shared/
│   │   ├── page-hero.tsx                   # T2
│   │   ├── cta-section.tsx                 # T3
│   │   ├── testimonial-block.tsx           # T4
│   │   ├── feature-grid.tsx                # T5
│   │   ├── bento-card.tsx                  # T6
│   │   ├── logos-marquee.tsx               # T7
│   │   ├── numbers-strip.tsx               # T8
│   │   ├── product-split.tsx               # T9
│   │   ├── timeline.tsx                    # T10
│   │   ├── team-grid.tsx                   # T26
│   │   └── milestones.tsx                  # T26
│   ├── motion/
│   │   └── cursor-blob.tsx                 # T11
│   ├── composites/
│   │   ├── product-page.tsx                # T20
│   │   └── service-page.tsx                # T23
│   ├── sections/home/
│   │   ├── home-hero.tsx                   # T12
│   │   ├── home-numbers.tsx                # T13
│   │   ├── home-pillars.tsx                # T14
│   │   ├── home-product-spotlight.tsx      # T15
│   │   ├── home-cases-preview.tsx          # T16
│   │   ├── home-manifesto.tsx              # T17
│   │   └── home-logos.tsx                  # T18
│   └── forms/
│       └── contact-form.tsx                # T29
├── content/
│   └── data/
│       ├── home.ts                         # T19
│       ├── products/
│       │   ├── cognita.ts                  # T21
│       │   └── eter.ts                     # T22
│       ├── services/
│       │   ├── consultoria.ts              # T24
│       │   └── utilities.ts                # T25
│       ├── sobre.ts                        # T27
│       ├── contato.ts                      # T31
│       ├── testimonials.ts                 # T4 seed
│       └── clients.ts                      # T7 seed
├── lib/
│   ├── resend.ts                           # T28
│   └── validation/
│       └── contact.ts                      # T29
├── types/
│   ├── product.ts                          # T1
│   ├── service.ts                          # T1
│   ├── testimonial.ts                      # T1
│   └── case.ts                             # T1 (used minimally here, fleshed out in Plan 3)
└── .env.example                            # T28 (updated)
```

---

## Conventions

- **All content is centralized in `content/data/` modules.** Components import data, never hardcode copy.
- **Section components live in `components/sections/<page>/` when used in one place** (home), or `components/shared/` when reused.
- **Composite pages (`ProductPage`, `ServicePage`) take typed data and render the full layout.** This keeps `/cognita` and `/eter` (and `/consultoria` and `/utilities`) as tiny wrapper files.
- **Pillar colors are passed explicitly** via a `pillar: "cognita" | "eter" | "consultoria" | "utilities"` string that components map to accent tokens.
- **Forms always have non-JS fallbacks.** Server action receives the submission; client-side adds optimistic state and inline validation.
- **No new external CSS.** All styles via Tailwind utilities + existing tokens in `globals.css`.
- **Avoid premature componentization.** If a piece is used once, keep it inline. Extract only when it appears twice.

---

## Task 1: Shared TypeScript types

**Files:**
- Create: `types/product.ts`
- Create: `types/service.ts`
- Create: `types/testimonial.ts`
- Create: `types/case.ts`

- [ ] **Step 1: Create `types/testimonial.ts`**

```typescript
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  photoUrl?: string;
}
```

- [ ] **Step 2: Create `types/case.ts`**

```typescript
export type CasePillar = "produtos" | "social" | "utilities" | "marketing";

export interface CasePreview {
  slug: string;
  client: string;
  title: string;
  excerpt: string;
  heroImageUrl: string;
  pillar: CasePillar;
  resultLabel: string;
  resultValue: string;
}
```

- [ ] **Step 3: Create `types/product.ts`**

```typescript
import type { CasePreview } from "./case";
import type { Testimonial } from "./testimonial";

export type ProductPillar = "cognita" | "eter";

export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductPageData {
  pillar: ProductPillar;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  mockupImageUrl: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemStat: { value: string; label: string };
  solutionEyebrow: string;
  solutionTitle: string;
  features: ProductFeature[];
  demoEyebrow: string;
  demoTitle: string;
  demoSteps: { title: string; description: string; imageUrl: string }[];
  cases: CasePreview[];
  testimonial?: Testimonial;
  finalCtaTitle: string;
  finalCtaBody: string;
}
```

- [ ] **Step 4: Create `types/service.ts`**

```typescript
import type { CasePreview } from "./case";
import type { Testimonial } from "./testimonial";

export type ServicePillar = "consultoria" | "utilities";

export interface MethodStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceTopic {
  title: string;
  description: string;
  iconName: string;
}

export interface ServicePageData {
  pillar: ServicePillar;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  methodEyebrow: string;
  methodTitle: string;
  methodSteps: MethodStep[];
  spotlightEyebrow: string;
  spotlightTitle: string;
  spotlightBody: string;
  spotlightImageUrl: string;
  spotlightStats: { value: string; label: string }[];
  topicsEyebrow: string;
  topicsTitle: string;
  topics: ServiceTopic[];
  testimonials: Testimonial[];
  finalCtaTitle: string;
  finalCtaBody: string;
}
```

- [ ] **Step 5: Verify TypeScript**

```bash
export PATH="/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm tsc --noEmit
```
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add types/
git commit -m "feat: add shared types for products, services, testimonials, cases"
```

---

## Task 2: PageHero component

**Files:**
- Create: `components/shared/page-hero.tsx`

- [ ] **Step 1: Create the component**

```typescript
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
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/page-hero.tsx
git commit -m "feat: add PageHero shared component"
```

---

## Task 3: CtaSection component

**Files:**
- Create: `components/shared/cta-section.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: "default" | "elevated" | "accent-yellow";
}

export function CtaSection({
  title,
  body,
  primaryCta,
  secondaryCta,
  tone = "elevated",
}: CtaSectionProps) {
  return (
    <Section spacing="xl" tone={tone}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-end">
          <div>
            <h2 className="text-display-2 text-balance">{title}</h2>
            {body && (
              <p className="mt-6 max-w-xl text-lg text-[--color-text-muted] text-pretty">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Button asChild size="xl">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild size="xl" variant="ghost">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/cta-section.tsx
git commit -m "feat: add CtaSection shared component"
```

---

## Task 4: TestimonialBlock + seed data

**Files:**
- Create: `components/shared/testimonial-block.tsx`
- Create: `content/data/testimonials.ts`

- [ ] **Step 1: Create `content/data/testimonials.ts`**

```typescript
import type { Testimonial } from "@/types/testimonial";

export const testimonials: Record<string, Testimonial> = {
  fabioCasaBrasil: {
    quote:
      "A Tingle é uma parceira extremamente rica e importante para a Casa Brasil. Conseguem traduzir desafios sociais complexos em soluções criativas que realmente funcionam na ponta.",
    author: "Fábio Oliveira",
    role: "Diretor",
    company: "Casa Brasil",
  },
  zeHubz: {
    quote:
      "A expertise técnica e a visão estratégica da Tingle são diferenciais relevantes para o desenvolvimento de negócios inovadores no setor de energia.",
    author: "Zé Lavaquial",
    role: "Diretor",
    company: "Hubz",
  },
};
```

- [ ] **Step 2: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  eyebrow?: string;
  tone?: "default" | "elevated";
}

export function TestimonialBlock({
  testimonial,
  eyebrow,
  tone = "default",
}: TestimonialBlockProps) {
  return (
    <Section spacing="lg" tone={tone}>
      <Container size="md">
        {eyebrow && <Eyebrow className="mb-8">{eyebrow}</Eyebrow>}
        <blockquote className="text-display-3 text-balance">
          <span className="text-[--color-accent-yellow]">“</span>
          {testimonial.quote}
          <span className="text-[--color-accent-yellow]">”</span>
        </blockquote>
        <footer className="mt-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[--color-surface-elevated] border border-[--color-border] flex items-center justify-center text-[--color-text-muted] text-sm font-semibold">
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-[--color-text-muted]">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/testimonial-block.tsx content/data/testimonials.ts
git commit -m "feat: add TestimonialBlock + seed testimonials data"
```

---

## Task 5: FeatureGrid

**Files:**
- Create: `components/shared/feature-grid.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import {
  ArrowRight,
  Bot,
  CircuitBoard,
  Cpu,
  Gauge,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  arrow: ArrowRight,
  bot: Bot,
  circuit: CircuitBoard,
  cpu: Cpu,
  gauge: Gauge,
  layers: Layers,
  lightbulb: Lightbulb,
  lineChart: LineChart,
  lock: Lock,
  messageSquare: MessageSquare,
  network: Network,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow,
  zap: Zap,
} as const;

export type FeatureIconName = keyof typeof iconMap;

export interface FeatureItem {
  title: string;
  description: string;
  iconName: FeatureIconName;
}

type AccentColor = "yellow" | "pink" | "cyan" | "lime" | "default";

interface FeatureGridProps {
  eyebrow?: string;
  title?: string;
  items: FeatureItem[];
  accent?: AccentColor;
  columns?: 2 | 3 | 4;
  tone?: "default" | "elevated";
}

const accentMap: Record<AccentColor, string> = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
  default: "text-[--color-text]",
};

const colsMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  eyebrow,
  title,
  items,
  accent = "default",
  columns = 3,
  tone = "default",
}: FeatureGridProps) {
  return (
    <Section spacing="lg" tone={tone}>
      <Container>
        {eyebrow && <Eyebrow color={accent}>{eyebrow}</Eyebrow>}
        {title && <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{title}</h2>}
        <div className={cn("grid gap-6", colsMap[columns])}>
          {items.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={`${item.title}-${i}`}
                className="group rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-6 transition-colors hover:bg-[--color-surface]"
              >
                <Icon className={cn("h-7 w-7 mb-5", accentMap[accent])} aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[--color-text-muted] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/feature-grid.tsx
git commit -m "feat: add FeatureGrid with iconified feature cards"
```

---

## Task 6: BentoCard for pillar overview

**Files:**
- Create: `components/shared/bento-card.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoPillar = "cognita" | "eter" | "consultoria" | "utilities";

interface BentoCardProps {
  pillar: BentoPillar;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  size?: "default" | "wide" | "tall";
  className?: string;
  children?: React.ReactNode;
}

const accentMap: Record<BentoPillar, { text: string; bg: string; glow: string }> = {
  cognita: {
    text: "text-[--color-accent-cyan]",
    bg: "bg-[--color-accent-cyan]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(0,240,255,0.6)]",
  },
  eter: {
    text: "text-[--color-accent-pink]",
    bg: "bg-[--color-accent-pink]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,45,117,0.6)]",
  },
  consultoria: {
    text: "text-[--color-accent-yellow]",
    bg: "bg-[--color-accent-yellow]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(255,235,0,0.6)]",
  },
  utilities: {
    text: "text-[--color-accent-lime]",
    bg: "bg-[--color-accent-lime]",
    glow: "group-hover:shadow-[0_0_48px_-12px_rgba(184,255,0,0.6)]",
  },
};

const sizeMap: Record<NonNullable<BentoCardProps["size"]>, string> = {
  default: "lg:col-span-1 lg:row-span-1",
  wide: "lg:col-span-2 lg:row-span-1",
  tall: "lg:col-span-1 lg:row-span-2",
};

export function BentoCard({
  pillar,
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "Saiba mais",
  size = "default",
  className,
  children,
}: BentoCardProps) {
  const colors = accentMap[pillar];
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-8 transition-all duration-300 hover:border-[--color-border-strong]",
        sizeMap[size],
        colors.glow,
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between">
          <p className={cn("text-eyebrow", colors.text)}>{eyebrow}</p>
          <ArrowUpRight
            className={cn("h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", colors.text)}
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 text-3xl font-bold text-balance">{title}</h3>
        <p className="mt-4 max-w-md text-base text-[--color-text-muted] leading-relaxed">
          {description}
        </p>
      </div>
      {children && <div className="mt-8 relative">{children}</div>}
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
        <span className={colors.text}>{ctaLabel}</span>
        <span className={cn("h-px w-8 transition-all group-hover:w-12", colors.bg)} />
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/bento-card.tsx
git commit -m "feat: add BentoCard with per-pillar accent glow"
```

---

## Task 7: LogosMarquee + clients seed

**Files:**
- Create: `components/shared/logos-marquee.tsx`
- Create: `content/data/clients.ts`

- [ ] **Step 1: Create `content/data/clients.ts`**

```typescript
export interface Client {
  name: string;
  url?: string;
}

export const clients: Client[] = [
  { name: "Casa Brasil", url: "https://casabrasil.org" },
  { name: "Hubz", url: "https://hubz.com.br" },
  { name: "QBanho" },
  { name: "Setor Energético" },
  { name: "Cognita" },
  { name: "Eter" },
  { name: "The Town" },
  { name: "Tingle Studios" },
];
```

- [ ] **Step 2: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Marquee } from "@/components/motion/marquee";
import type { Client } from "@/content/data/clients";

interface LogosMarqueeProps {
  eyebrow?: string;
  title?: string;
  clients: Client[];
  tone?: "default" | "elevated";
}

export function LogosMarquee({
  eyebrow = "Confiam na Tingle",
  title,
  clients,
  tone = "elevated",
}: LogosMarqueeProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            {title && <h2 className="text-display-3 mt-4 max-w-2xl">{title}</h2>}
          </div>
        </div>
      </Container>
      <Marquee speed="slow" pauseOnHover className="border-y border-[--color-border] py-8">
        {clients.map((c) => (
          <span
            key={c.name}
            className="text-2xl font-bold text-[--color-text-muted] hover:text-[--color-text] transition-colors px-8 whitespace-nowrap"
          >
            {c.name}
          </span>
        ))}
      </Marquee>
    </Section>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/logos-marquee.tsx content/data/clients.ts
git commit -m "feat: add LogosMarquee + clients data seed"
```

---

## Task 8: NumbersStrip

**Files:**
- Create: `components/shared/numbers-strip.tsx`

- [ ] **Step 1: Create the component**

```typescript
"use client";

import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { cn } from "@/lib/utils";

export interface NumberStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent?: "yellow" | "pink" | "cyan" | "lime";
}

interface NumbersStripProps {
  stats: NumberStat[];
  tone?: "default" | "elevated";
  spacing?: "sm" | "md" | "lg";
}

const accentMap = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
  default: "text-[--color-text]",
} as const;

export function NumbersStrip({
  stats,
  tone = "default",
  spacing = "md",
}: NumbersStripProps) {
  return (
    <Section spacing={spacing} tone={tone}>
      <Container>
        <div
          className={cn(
            "grid gap-10",
            stats.length === 2 && "sm:grid-cols-2",
            stats.length === 3 && "sm:grid-cols-3",
            stats.length === 4 && "grid-cols-2 sm:grid-cols-4"
          )}
        >
          {stats.map((stat, i) => (
            <div key={`${stat.label}-${i}`}>
              <p
                className={cn(
                  "text-display-1",
                  stat.accent ? accentMap[stat.accent] : accentMap.default
                )}
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/numbers-strip.tsx
git commit -m "feat: add NumbersStrip with animated counters per stat"
```

---

## Task 9: ProductSplit

**Files:**
- Create: `components/shared/product-split.tsx`

- [ ] **Step 1: Create the component**

```typescript
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

const accentMap: Record<SplitPillar, { eyebrow: "cyan" | "pink"; text: string; bg: string; bullet: string }> = {
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
              {children ? children : (
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
                    <span className={cn("mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full", accent.bullet)} />
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
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/product-split.tsx
git commit -m "feat: add ProductSplit with optional image/content swap"
```

---

## Task 10: Timeline

**Files:**
- Create: `components/shared/timeline.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  eyebrow?: string;
  title?: string;
  steps: TimelineStep[];
  accent?: "yellow" | "pink" | "cyan" | "lime" | "default";
}

const accentMap = {
  yellow: { text: "text-[--color-accent-yellow]", bar: "bg-[--color-accent-yellow]" },
  pink: { text: "text-[--color-accent-pink]", bar: "bg-[--color-accent-pink]" },
  cyan: { text: "text-[--color-accent-cyan]", bar: "bg-[--color-accent-cyan]" },
  lime: { text: "text-[--color-accent-lime]", bar: "bg-[--color-accent-lime]" },
  default: { text: "text-[--color-text]", bar: "bg-[--color-text]" },
} as const;

export function Timeline({ eyebrow, title, steps, accent = "default" }: TimelineProps) {
  const a = accentMap[accent];
  return (
    <Section spacing="lg">
      <Container>
        {eyebrow && <Eyebrow color={accent === "default" ? "default" : accent}>{eyebrow}</Eyebrow>}
        {title && <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{title}</h2>}
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative pt-6 border-t border-[--color-border]"
            >
              <span className={cn("absolute top-0 -mt-px h-0.5 w-1/3", a.bar)} />
              <p className={cn("text-eyebrow", a.text)}>
                {String(step.number).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm text-[--color-text-muted] leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/timeline.tsx
git commit -m "feat: add Timeline with numbered steps and accent variants"
```

---

## Task 11: CursorBlob (hero gradient blob)

**Files:**
- Create: `components/motion/cursor-blob.tsx`

This is the cursor-reactive gradient blob for the home hero (Bold Kinetic motion principle 5). It uses `pointermove` + transform updates via Framer Motion's `useMotionValue` for smooth 60fps tracking without React re-renders.

- [ ] **Step 1: Create the component**

```typescript
"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CursorBlobProps {
  className?: string;
  /** Size of the primary blob in pixels */
  size?: number;
}

export function CursorBlob({ className, size = 600 }: CursorBlobProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.6 });

  // Center each blob on the cursor by subtracting half its width/height.
  const blob1X = useTransform(springX, (v) => v - size / 2);
  const blob1Y = useTransform(springY, (v) => v - size / 2);
  const blob2X = useTransform(springX, (v) => v - (size * 0.6) / 2);
  const blob2Y = useTransform(springY, (v) => v - (size * 0.6) / 2);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouseX.set(e.clientX - r.left);
      mouseY.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute top-0 left-0 rounded-full blur-3xl will-change-transform"
        style={{
          width: size,
          height: size,
          x: blob1X,
          y: blob1Y,
          background:
            "radial-gradient(circle, rgba(255,235,0,0.35) 0%, rgba(255,45,117,0.2) 35%, rgba(0,240,255,0.1) 65%, transparent 80%)",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 rounded-full blur-3xl will-change-transform opacity-60"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          x: blob2X,
          y: blob2Y,
          background:
            "radial-gradient(circle, rgba(184,255,0,0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/motion/cursor-blob.tsx
git commit -m "feat: add CursorBlob with pointer-reactive gradient orbs"
```

---

## Task 12: Home — Hero section

**Files:**
- Create: `components/sections/home/home-hero.tsx`

- [ ] **Step 1: Create the component**

```typescript
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
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-hero.tsx
git commit -m "feat: add HomeHero with cursor-blob backdrop and gradient title"
```

---

## Task 13: Home — Numbers Marquee

**Files:**
- Create: `components/sections/home/home-numbers.tsx`

The plan's Home Section 2 calls for "Numbers Marquee" — a horizontal scrolling strip of statistics. We combine our `Marquee` (already exists) with formatted strings.

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Marquee } from "@/components/motion/marquee";
import { Star } from "lucide-react";

interface NumberItem {
  label: string;
  accent?: "yellow" | "pink" | "cyan" | "lime";
}

interface HomeNumbersProps {
  items: NumberItem[];
}

const accentMap = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
} as const;

export function HomeNumbers({ items }: HomeNumbersProps) {
  return (
    <Marquee
      speed="normal"
      pauseOnHover
      className="border-y border-[--color-border] py-8 bg-[--color-bg]"
    >
      {items.flatMap((item, i) => [
        <span
          key={`${item.label}-${i}`}
          className={`text-display-3 font-black whitespace-nowrap ${
            item.accent ? accentMap[item.accent] : "text-[--color-text]"
          }`}
        >
          {item.label}
        </span>,
        <Star
          key={`star-${i}`}
          className="h-6 w-6 flex-shrink-0 text-[--color-accent-yellow]"
          aria-hidden="true"
          fill="currentColor"
        />,
      ])}
    </Marquee>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-numbers.tsx
git commit -m "feat: add HomeNumbers marquee of headline stats"
```

---

## Task 14: Home — Pillars bento

**Files:**
- Create: `components/sections/home/home-pillars.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { BentoCard } from "@/components/shared/bento-card";

interface PillarItem {
  pillar: "cognita" | "eter" | "consultoria" | "utilities";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  size?: "default" | "wide" | "tall";
}

interface HomePillarsProps {
  eyebrow: string;
  title: string;
  pillars: PillarItem[];
}

export function HomePillars({ eyebrow, title, pillars }: HomePillarsProps) {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mb-16 max-w-3xl">
          <Eyebrow color="yellow">{eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{title}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[280px]">
          {pillars.map((p) => (
            <BentoCard
              key={p.pillar}
              pillar={p.pillar}
              eyebrow={p.eyebrow}
              title={p.title}
              description={p.description}
              href={p.href}
              ctaLabel={p.ctaLabel}
              size={p.size}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-pillars.tsx
git commit -m "feat: add HomePillars bento layout with 4 pillar cards"
```

---

## Task 15: Home — Product spotlight

**Files:**
- Create: `components/sections/home/home-product-spotlight.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { ProductSplit } from "@/components/shared/product-split";

interface ProductHighlight {
  pillar: "cognita" | "eter";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
}

interface HomeProductSpotlightProps {
  eyebrow: string;
  title: string;
  products: ProductHighlight[];
}

export function HomeProductSpotlight({ eyebrow, title, products }: HomeProductSpotlightProps) {
  return (
    <>
      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 max-w-3xl text-balance">{title}</h2>
        </Container>
      </Section>
      {products.map((p, i) => (
        <ProductSplit
          key={p.pillar}
          pillar={p.pillar}
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
          bullets={p.bullets}
          cta={p.cta}
          imageRight={i % 2 === 0}
        />
      ))}
    </>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-product-spotlight.tsx
git commit -m "feat: add HomeProductSpotlight composing ProductSplits"
```

---

## Task 16: Home — Cases preview

**Files:**
- Create: `components/sections/home/home-cases-preview.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Pill } from "@/components/primitives/pill";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CasePillar } from "@/types/case";

interface CasePreviewItem {
  slug: string;
  client: string;
  title: string;
  excerpt: string;
  pillar: CasePillar;
  resultLabel: string;
  resultValue: string;
}

interface HomeCasesPreviewProps {
  eyebrow: string;
  title: string;
  cases: CasePreviewItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

const pillarPillColor: Record<CasePillar, "yellow" | "pink" | "cyan" | "lime"> = {
  produtos: "cyan",
  social: "yellow",
  utilities: "lime",
  marketing: "pink",
};

const pillarResultColor: Record<CasePillar, string> = {
  produtos: "text-[--color-accent-cyan]",
  social: "text-[--color-accent-yellow]",
  utilities: "text-[--color-accent-lime]",
  marketing: "text-[--color-accent-pink]",
};

export function HomeCasesPreview({
  eyebrow,
  title,
  cases,
  ctaHref = "/cases",
  ctaLabel = "Todos os cases",
}: HomeCasesPreviewProps) {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow color="pink">{eyebrow}</Eyebrow>
            <h2 className="text-display-2 mt-4 text-balance">{title}</h2>
          </div>
          <Link
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent-yellow] hover:underline underline-offset-4"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group flex flex-col rounded-3xl border border-[--color-border] bg-[--color-surface]/40 p-7 transition-colors hover:bg-[--color-surface]"
            >
              <div className="flex items-center justify-between">
                <Pill color={pillarPillColor[c.pillar]}>{c.client}</Pill>
                <ArrowUpRight
                  className="h-5 w-5 text-[--color-text-muted] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--color-text]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-balance">{c.title}</h3>
              <p className="mt-3 text-sm text-[--color-text-muted] leading-relaxed">
                {c.excerpt}
              </p>
              <dl className="mt-auto pt-6 border-t border-[--color-border]">
                <dt className="text-eyebrow text-[--color-text-subtle]">
                  {c.resultLabel}
                </dt>
                <dd className={cn("text-2xl font-black mt-1", pillarResultColor[c.pillar])}>
                  {c.resultValue}
                </dd>
              </dl>
            </Link>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent-yellow] hover:underline underline-offset-4"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-cases-preview.tsx
git commit -m "feat: add HomeCasesPreview with pillar-colored result tile"
```

---

## Task 17: Home — Manifesto

**Files:**
- Create: `components/sections/home/home-manifesto.tsx`

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { TextReveal } from "@/components/motion/text-reveal";

interface HomeManifestoProps {
  eyebrow: string;
  paragraphs: string[];
}

export function HomeManifesto({ eyebrow, paragraphs }: HomeManifestoProps) {
  return (
    <Section spacing="xl" tone="elevated">
      <Container size="md">
        <Eyebrow color="pink">{eyebrow}</Eyebrow>
        <div className="mt-10 space-y-10">
          {paragraphs.map((p, i) => (
            <TextReveal
              key={i}
              as="p"
              text={p}
              className="text-display-3 text-balance leading-tight"
              stagger={0.02}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-manifesto.tsx
git commit -m "feat: add HomeManifesto with word-staggered reveal paragraphs"
```

---

## Task 18: Home — Logos clients

**Files:**
- Create: `components/sections/home/home-logos.tsx`

This is a thin wrapper over `LogosMarquee` so the home keeps the same composition pattern as the other sections.

- [ ] **Step 1: Create the component**

```typescript
import * as React from "react";
import { LogosMarquee } from "@/components/shared/logos-marquee";
import type { Client } from "@/content/data/clients";

interface HomeLogosProps {
  eyebrow: string;
  title?: string;
  clients: Client[];
}

export function HomeLogos({ eyebrow, title, clients }: HomeLogosProps) {
  return <LogosMarquee eyebrow={eyebrow} title={title} clients={clients} tone="default" />;
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/sections/home/home-logos.tsx
git commit -m "feat: add HomeLogos wrapper for clients marquee"
```

---

## Task 19: Home — assemble `app/page.tsx` + home data

**Files:**
- Create: `content/data/home.ts`
- Modify: `app/page.tsx` (replace Plan 1 placeholder)

- [ ] **Step 1: Create `content/data/home.ts`**

```typescript
import { clients } from "./clients";
import type { CasePillar } from "@/types/case";

export const homeData = {
  hero: {
    eyebrow: "Tingle Digital · Agência de tecnologia criativa",
    titleLine1: "Tecnologia",
    titleLine2: "com",
    titleAccent: "alma.",
    subtitle:
      "Construímos produtos próprios, consultamos com impacto social e modernizamos utilities. Para líderes que tratam tecnologia como diferencial estratégico — não commodity.",
    primaryCta: { label: "Conheça nossos produtos", href: "#produtos" },
    secondaryCta: { label: "Fale com a gente", href: "/contato" },
  },
  numbers: {
    items: [
      { label: "50+ PROJETOS", accent: "yellow" as const },
      { label: "4 PRODUTOS ATIVOS", accent: "cyan" as const },
      { label: "10.000+ PESSOAS IMPACTADAS", accent: "pink" as const },
      { label: "6 ANOS NO MERCADO", accent: "lime" as const },
    ],
  },
  pillars: {
    eyebrow: "O que fazemos",
    title: "Quatro frentes. Uma só obsessão: construir bem.",
    items: [
      {
        pillar: "cognita" as const,
        eyebrow: "Produto · Educação",
        title: "Cognita",
        description: "Plataforma que organiza a gestão pedagógica de redes de ensino — do diário de classe ao boletim. Já em uso por dezenas de escolas.",
        href: "/cognita",
        ctaLabel: "Conhecer Cognita",
        size: "wide" as const,
      },
      {
        pillar: "eter" as const,
        eyebrow: "Produto · Privacidade",
        title: "Eter",
        description: "Messenger com criptografia ponta-a-ponta e privacidade radical. Onde \"proteção máxima\" é o padrão, não premium.",
        href: "/eter",
        ctaLabel: "Conhecer Eter",
      },
      {
        pillar: "consultoria" as const,
        eyebrow: "Consultoria",
        title: "Estratégia + impacto social",
        description: "Diagnóstico, estratégia e execução para projetos onde tecnologia precisa ter cara de impacto. Parceiros da Casa Brasil e outros.",
        href: "/consultoria",
        ctaLabel: "Ver consultoria",
      },
      {
        pillar: "utilities" as const,
        eyebrow: "Utilities",
        title: "Energia + AI + IoT",
        description: "P&D, hyperautomation e melhorias operacionais para concessionárias. AI, IoT e blockchain aplicados onde geram resultado.",
        href: "/utilities",
        ctaLabel: "Ver utilities",
        size: "wide" as const,
      },
    ],
  },
  productSpotlight: {
    eyebrow: "Em destaque",
    title: "Dois produtos. Duas teses. Uma engenharia de respeito.",
    products: [
      {
        pillar: "cognita" as const,
        eyebrow: "Cognita · Gestão escolar",
        title: "Tira a fricção da rotina de quem ensina.",
        description: "Pensado com diretores e coordenadores de escolas reais. Centraliza diário, frequência, planejamento e comunicação com famílias numa interface que respeita o tempo do educador.",
        bullets: [
          "Multi-escola e multi-perfil (rede, gestor, professor, família)",
          "Lançamento de notas e frequência em segundos",
          "Boletim e relatórios automáticos",
          "Integração com sistemas existentes da rede",
        ],
        cta: { label: "Conhecer Cognita", href: "/cognita" },
      },
      {
        pillar: "eter" as const,
        eyebrow: "Eter · Mensageiro seguro",
        title: "Suas palavras. Só suas.",
        description: "Criptografia ponta-a-ponta auditável, zero metadados retidos, código aberto. Construído para quem leva privacidade a sério — jornalistas, advogados, ativistas e quem só quer paz.",
        bullets: [
          "E2E criptografia forte por padrão",
          "Backups locais ou nuvem própria (você decide)",
          "Sem coleta de metadados ou logs de conversa",
          "Aberto à auditoria de segurança independente",
        ],
        cta: { label: "Conhecer Eter", href: "/eter" },
      },
    ],
  },
  cases: {
    eyebrow: "Cases recentes",
    title: "Trabalho que fala por si.",
    items: [
      {
        slug: "casa-brasil",
        client: "Casa Brasil",
        title: "Tecnologia a serviço de comunidades em todo o país.",
        excerpt: "Programa social que usa cultura, educação e tecnologia para incluir digitalmente populações vulneráveis.",
        pillar: "social" as CasePillar,
        resultLabel: "Pessoas alcançadas",
        resultValue: "10K+",
      },
      {
        slug: "hubz",
        client: "Hubz",
        title: "P&D em energia que conversa com o operacional.",
        excerpt: "Estratégia e execução de hyperautomation para um dos players do setor elétrico.",
        pillar: "utilities" as CasePillar,
        resultLabel: "Processos automatizados",
        resultValue: "12+",
      },
      {
        slug: "the-town",
        client: "The Town",
        title: "Analytics em tempo real para festival de música.",
        excerpt: "Plataforma de dados que entregou insights de público e operação para um dos maiores eventos do país.",
        pillar: "marketing" as CasePillar,
        resultLabel: "Eventos cobertos",
        resultValue: "3",
      },
    ],
  },
  manifesto: {
    eyebrow: "Manifesto",
    paragraphs: [
      "Tecnologia sem alma é commodity.",
      "A gente não constrói pra impressionar — constrói pra resolver. Cada linha de código, cada decisão de produto, cada conversa com cliente vem do mesmo lugar: respeito pelo problema e curiosidade pela melhor forma de atacar.",
      "Por isso somos pequenos, escolhidos e prontos pra dizer não quando não fizer sentido.",
    ],
  },
  logos: {
    eyebrow: "Confiam na Tingle",
    clients,
  },
  finalCta: {
    title: "Vamos construir algo que importe?",
    body: "Conte o problema. A gente devolve uma proposta direta, sem rodeios — em até 5 dias úteis.",
    primaryCta: { label: "Começar conversa", href: "/contato" },
    secondaryCta: { label: "Ver portfólio completo", href: "/cases" },
  },
};
```

- [ ] **Step 2: Replace `app/page.tsx`**

```typescript
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeNumbers } from "@/components/sections/home/home-numbers";
import { HomePillars } from "@/components/sections/home/home-pillars";
import { HomeProductSpotlight } from "@/components/sections/home/home-product-spotlight";
import { HomeCasesPreview } from "@/components/sections/home/home-cases-preview";
import { HomeManifesto } from "@/components/sections/home/home-manifesto";
import { HomeLogos } from "@/components/sections/home/home-logos";
import { CtaSection } from "@/components/shared/cta-section";
import { homeData } from "@/content/data/home";

export const metadata: Metadata = {
  description: homeData.hero.subtitle,
  openGraph: {
    title: "Tingle Digital — Tecnologia com alma criativa",
    description: homeData.hero.subtitle,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero {...homeData.hero} />
      <HomeNumbers items={homeData.numbers.items} />
      <span id="produtos" className="sr-only">
        Produtos
      </span>
      <HomePillars {...homeData.pillars} pillars={homeData.pillars.items} />
      <HomeProductSpotlight
        eyebrow={homeData.productSpotlight.eyebrow}
        title={homeData.productSpotlight.title}
        products={homeData.productSpotlight.products}
      />
      <HomeCasesPreview
        eyebrow={homeData.cases.eyebrow}
        title={homeData.cases.title}
        cases={homeData.cases.items}
      />
      <HomeManifesto {...homeData.manifesto} />
      <HomeLogos eyebrow={homeData.logos.eyebrow} clients={homeData.logos.clients} />
      <CtaSection
        title={homeData.finalCta.title}
        body={homeData.finalCta.body}
        primaryCta={homeData.finalCta.primaryCta}
        secondaryCta={homeData.finalCta.secondaryCta}
        tone="accent-yellow"
      />
    </>
  );
}
```

- [ ] **Step 3: Verify build and smoke-test home**

```bash
export PATH="/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -20
```

Expected: build succeeds. If errors mention strict TS issues (e.g., a `Section` prop mismatch), fix inline — the components must satisfy strict TS.

Then dev smoke:
```bash
lsof -ti:3000 2>/dev/null | xargs kill 2>/dev/null
sleep 1
pnpm dev > /tmp/dev.log 2>&1 &
sleep 7
curl -s -o /tmp/home.html -w "HOME: %{http_code}\n" http://localhost:3000/
grep -c "Tecnologia" /tmp/home.html
grep -c "Cognita" /tmp/home.html
grep -c "Casa Brasil" /tmp/home.html
kill %1 2>/dev/null; wait 2>/dev/null
```

Expected: HOME: 200, all 3 grep counts > 0.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx content/data/home.ts
git commit -m "feat: assemble home page with 9 sections and PT-BR copy"
```

---

## Task 20: ProductPage composite component

**Files:**
- Create: `components/composites/product-page.tsx`

- [ ] **Step 1: Create the composite**

```typescript
import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { HomeCasesPreview } from "@/components/sections/home/home-cases-preview";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import { cn } from "@/lib/utils";
import type { ProductPageData } from "@/types/product";

interface ProductPageProps {
  data: ProductPageData;
}

const accentByPillar = {
  cognita: { eyebrow: "cyan" as const, text: "text-[--color-accent-cyan]" },
  eter: { eyebrow: "pink" as const, text: "text-[--color-accent-pink]" },
};

export function ProductPage({ data }: ProductPageProps) {
  const accent = accentByPillar[data.pillar];

  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        pillarColor={accent.eyebrow}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />

      <Section spacing="lg" tone="elevated">
        <Container size="md">
          <Eyebrow color={accent.eyebrow}>{data.problemEyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{data.problemTitle}</h2>
          <p className="mt-8 text-lg text-[--color-text-muted] text-pretty">{data.problemBody}</p>
          <div className="mt-10 grid grid-cols-[auto_1fr] items-center gap-6">
            <p className={cn("text-display-1", accent.text)}>{data.problemStat.value}</p>
            <p className="text-eyebrow text-[--color-text-muted]">{data.problemStat.label}</p>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow={data.solutionEyebrow}
        title={data.solutionTitle}
        accent={accent.eyebrow}
        columns={data.features.length >= 6 ? 3 : 2}
        items={data.features.map((f) => ({
          title: f.title,
          description: f.description,
          iconName: f.iconName as FeatureIconName,
        }))}
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow color={accent.eyebrow}>{data.demoEyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{data.demoTitle}</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {data.demoSteps.map((step, i) => (
              <li key={i} className="rounded-3xl border border-[--color-border] bg-[--color-bg]/40 overflow-hidden">
                <div className={cn("aspect-video flex items-center justify-center text-2xl font-black opacity-30", accent.text)}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[--color-text-muted] leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {data.cases.length > 0 && (
        <HomeCasesPreview
          eyebrow="Cases que usam"
          title={`Quem está construindo com ${data.pillar === "cognita" ? "Cognita" : "Eter"}.`}
          cases={data.cases}
          ctaLabel="Ver todos"
        />
      )}

      {data.testimonial && (
        <TestimonialBlock testimonial={data.testimonial} eyebrow="Quem confia" />
      )}

      <CtaSection
        title={data.finalCtaTitle}
        body={data.finalCtaBody}
        primaryCta={{ label: "Falar com vendas", href: "/contato" }}
        secondaryCta={{ label: "Voltar para home", href: "/" }}
        tone="accent-yellow"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/composites/product-page.tsx
git commit -m "feat: add ProductPage composite consuming ProductPageData"
```

---

## Task 21: `/cognita` page

**Files:**
- Create: `content/data/products/cognita.ts`
- Create: `app/cognita/page.tsx`

- [ ] **Step 1: Create `content/data/products/cognita.ts`**

```typescript
import type { ProductPageData } from "@/types/product";
import { testimonials } from "@/content/data/testimonials";

export const cognita: ProductPageData = {
  pillar: "cognita",
  heroEyebrow: "Cognita · Plataforma de gestão escolar",
  heroTitle: "Gestão pedagógica que respeita o tempo do educador.",
  heroSubtitle:
    "Diário, frequência, boletim e comunicação com famílias numa interface que parece feita para gente que ensina — porque foi.",
  heroCtaLabel: "Solicitar demonstração",
  heroCtaHref: "/contato?produto=cognita",
  mockupImageUrl: "/brand/mockup-cognita.png",
  problemEyebrow: "O problema",
  problemTitle: "Diretor não devia ser refém de planilha.",
  problemBody:
    "Boa parte do tempo de gestão escolar evapora em conciliação de dados entre sistemas legados, planilhas paralelas e WhatsApp. O resultado é menos tempo para o que importa: pedagogia, formação e relacionamento com a família.",
  problemStat: { value: "67%", label: "do tempo da coordenação consumido por tarefas operacionais (estimativa setor)" },
  solutionEyebrow: "Como ajudamos",
  solutionTitle: "Centraliza o operacional. Devolve o tempo para o pedagógico.",
  features: [
    {
      title: "Diário e frequência em segundos",
      description: "Lançamento de presença em modo turma ou nominal, com atalhos para situações de exceção. Sem CSV, sem download.",
      iconName: "zap",
    },
    {
      title: "Boletim automático",
      description: "Calcula médias, ponderações e situação final conforme regras da rede. Imprime, envia, exporta — sem retrabalho.",
      iconName: "lineChart",
    },
    {
      title: "Famílias informadas",
      description: "Comunicados, recados e boletins entregues por canal escolhido (app, e-mail ou impresso) com confirmação de leitura.",
      iconName: "messageSquare",
    },
    {
      title: "Multi-escola, multi-perfil",
      description: "Rede com várias unidades? Hierarquia de permissões cobre direção geral, direção local, coordenação, professor e família.",
      iconName: "layers",
    },
    {
      title: "Integra com o que você já tem",
      description: "API para ERPs escolares, plataformas de avaliação externa e sistemas de matrícula. Não pedimos para você abandonar nada.",
      iconName: "network",
    },
    {
      title: "Privacidade em primeiro lugar",
      description: "Dados de menores tratados conforme LGPD e ECA Digital. Logs auditáveis, retenção configurável, exportação garantida.",
      iconName: "shield",
    },
  ],
  demoEyebrow: "Como funciona na prática",
  demoTitle: "Da matrícula ao boletim, em três grandes momentos.",
  demoSteps: [
    {
      title: "Setup",
      description: "Importamos turmas, professores e estrutura curricular existente em um workshop guiado. Você não precisa começar do zero.",
      imageUrl: "/brand/cognita-setup.png",
    },
    {
      title: "Dia-a-dia",
      description: "Professores lançam diário e notas no fluxo natural da aula. Coordenação acompanha em dashboard sem precisar pedir relatórios.",
      imageUrl: "/brand/cognita-daily.png",
    },
    {
      title: "Fechamento",
      description: "Boletim, frequência e relatórios obrigatórios saem com um clique. Família recebe pelo canal preferido.",
      imageUrl: "/brand/cognita-close.png",
    },
  ],
  cases: [
    {
      slug: "casa-brasil",
      client: "Casa Brasil",
      title: "Tecnologia a serviço de comunidades.",
      excerpt: "Cognita ajustado para a realidade de redes com baixa conectividade e necessidades específicas.",
      pillar: "social",
      heroImageUrl: "",
      resultLabel: "Escolas atendidas",
      resultValue: "12",
    },
  ],
  testimonial: testimonials.fabioCasaBrasil,
  finalCtaTitle: "Vamos colocar sua rede no fluxo certo?",
  finalCtaBody:
    "Marcamos uma conversa de 30 minutos para entender sua realidade e mostrar a Cognita ao vivo. Sem compromisso.",
};
```

- [ ] **Step 2: Create `app/cognita/page.tsx`**

```typescript
import type { Metadata } from "next";
import { ProductPage } from "@/components/composites/product-page";
import { cognita } from "@/content/data/products/cognita";

export const metadata: Metadata = {
  title: "Cognita — Plataforma de gestão escolar",
  description: cognita.heroSubtitle,
  openGraph: {
    title: "Cognita · Tingle Digital",
    description: cognita.heroSubtitle,
  },
};

export default function CognitaPage() {
  return <ProductPage data={cognita} />;
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -15
git add content/data/products/cognita.ts app/cognita/page.tsx
git commit -m "feat: add /cognita page with full PT-BR product copy"
```

---

## Task 22: `/eter` page

**Files:**
- Create: `content/data/products/eter.ts`
- Create: `app/eter/page.tsx`

- [ ] **Step 1: Create `content/data/products/eter.ts`**

```typescript
import type { ProductPageData } from "@/types/product";

export const eter: ProductPageData = {
  pillar: "eter",
  heroEyebrow: "Eter · Mensageiro com privacidade radical",
  heroTitle: "Suas palavras. Só suas.",
  heroSubtitle:
    "Criptografia ponta-a-ponta auditável, zero metadados retidos, código aberto. Construído para quem leva privacidade a sério — jornalistas, advogados, ativistas e quem só quer paz.",
  heroCtaLabel: "Baixar Eter",
  heroCtaHref: "https://eter.app",
  mockupImageUrl: "/brand/mockup-eter.png",
  problemEyebrow: "O problema",
  problemTitle: "Mensageiros gratuitos vendem você.",
  problemBody:
    "Quase todo app de mensagem usa metadados de conversa, grafo de contatos ou conteúdo para alimentar negócios paralelos — anúncios, treino de modelos, perfis de risco. Mesmo quando dizem que não. O Eter foi feito para quem não está disposto a pagar com o próprio comportamento.",
  problemStat: { value: "0", label: "metadados retidos no servidor após entrega da mensagem" },
  solutionEyebrow: "O que muda",
  solutionTitle: "Privacidade não é feature premium. É o padrão.",
  features: [
    {
      title: "Criptografia E2E forte",
      description: "Protocolo público auditado, chaves geradas no dispositivo. Nem nós conseguimos ler o que passa.",
      iconName: "lock",
    },
    {
      title: "Sem metadados retidos",
      description: "Quem fala com quem, quando e por quanto tempo: nada disso vira histórico. Mensagem entregue = registro apagado.",
      iconName: "shield",
    },
    {
      title: "Backup que respeita você",
      description: "Local ou em nuvem que VOCÊ controla. Sem servidor central guardando cópia das suas conversas.",
      iconName: "layers",
    },
    {
      title: "Código aberto",
      description: "Cliente e protocolo publicados sob licença permissiva. Auditoria independente é não só permitida — é desejada.",
      iconName: "circuit",
    },
    {
      title: "Verificação por contato",
      description: "Chaves verificáveis por QR code ou número, para garantir que ninguém está no meio da conversa.",
      iconName: "users",
    },
    {
      title: "Resistente a ordens judiciais",
      description: "Quando entregamos dados sob ordem, entregamos o que tecnicamente temos: muito pouco. Por design.",
      iconName: "shield",
    },
  ],
  demoEyebrow: "Como protege na prática",
  demoTitle: "Três camadas de defesa, do dispositivo ao recipiente.",
  demoSteps: [
    {
      title: "No dispositivo",
      description: "Chaves geradas localmente, armazenadas em enclave de hardware quando disponível. Bloqueio biométrico opcional.",
      imageUrl: "/brand/eter-device.png",
    },
    {
      title: "No transporte",
      description: "Mensagens criptografadas antes de saírem do aparelho. Servidor é mero relay — não consegue ler conteúdo.",
      imageUrl: "/brand/eter-transport.png",
    },
    {
      title: "No destino",
      description: "Decifradas só no aparelho do destinatário, validadas por par de chaves. Cópia no servidor é descartada em segundos.",
      imageUrl: "/brand/eter-destination.png",
    },
  ],
  cases: [],
  finalCtaTitle: "Pronto para conversar em paz?",
  finalCtaBody:
    "O Eter está disponível para iOS, Android e desktop. Grátis para uso pessoal, com plano para times.",
};
```

- [ ] **Step 2: Create `app/eter/page.tsx`**

```typescript
import type { Metadata } from "next";
import { ProductPage } from "@/components/composites/product-page";
import { eter } from "@/content/data/products/eter";

export const metadata: Metadata = {
  title: "Eter — Mensageiro com privacidade radical",
  description: eter.heroSubtitle,
  openGraph: {
    title: "Eter · Tingle Digital",
    description: eter.heroSubtitle,
  },
};

export default function EterPage() {
  return <ProductPage data={eter} />;
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -15
git add content/data/products/eter.ts app/eter/page.tsx
git commit -m "feat: add /eter page with full PT-BR product copy"
```

---

## Task 23: ServicePage composite

**Files:**
- Create: `components/composites/service-page.tsx`

- [ ] **Step 1: Create the composite**

```typescript
import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Timeline } from "@/components/shared/timeline";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import { cn } from "@/lib/utils";
import type { ServicePageData } from "@/types/service";

interface ServicePageProps {
  data: ServicePageData;
}

const accentByPillar = {
  consultoria: { eyebrow: "yellow" as const, text: "text-[--color-accent-yellow]", bg: "bg-[--color-accent-yellow]/10" },
  utilities: { eyebrow: "lime" as const, text: "text-[--color-accent-lime]", bg: "bg-[--color-accent-lime]/10" },
};

export function ServicePage({ data }: ServicePageProps) {
  const accent = accentByPillar[data.pillar];
  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        pillarColor={accent.eyebrow}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />

      <Timeline
        eyebrow={data.methodEyebrow}
        title={data.methodTitle}
        steps={data.methodSteps}
        accent={accent.eyebrow}
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow color={accent.eyebrow}>{data.spotlightEyebrow}</Eyebrow>
              <h2 className="text-display-2 mt-4 text-balance">{data.spotlightTitle}</h2>
              <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed text-pretty">
                {data.spotlightBody}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {data.spotlightStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className={cn("text-display-3 font-black", accent.text)}>{stat.value}</dt>
                    <dd className="text-eyebrow text-[--color-text-muted] mt-2">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={cn("aspect-[4/3] rounded-3xl overflow-hidden border border-[--color-border] flex items-center justify-center", accent.bg)}>
              <span className={cn("text-display-1 font-black opacity-30", accent.text)}>
                {data.pillar === "consultoria" ? "CB" : "⚡"}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow={data.topicsEyebrow}
        title={data.topicsTitle}
        accent={accent.eyebrow}
        columns={data.topics.length === 4 ? 4 : 3}
        items={data.topics.map((t) => ({
          title: t.title,
          description: t.description,
          iconName: t.iconName as FeatureIconName,
        }))}
      />

      {data.testimonials.length > 0 && data.testimonials[0] && (
        <TestimonialBlock testimonial={data.testimonials[0]} eyebrow="Em campo" />
      )}

      <CtaSection
        title={data.finalCtaTitle}
        body={data.finalCtaBody}
        primaryCta={{ label: "Vamos conversar", href: "/contato" }}
        secondaryCta={{ label: "Ver todos os cases", href: "/cases" }}
        tone="accent-yellow"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/composites/service-page.tsx
git commit -m "feat: add ServicePage composite consuming ServicePageData"
```

---

## Task 24: `/consultoria` page

**Files:**
- Create: `content/data/services/consultoria.ts`
- Create: `app/consultoria/page.tsx`

- [ ] **Step 1: Create `content/data/services/consultoria.ts`**

```typescript
import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const consultoria: ServicePageData = {
  pillar: "consultoria",
  heroEyebrow: "Consultoria · Tecnologia com impacto",
  heroTitle: "Estratégia que entrega. Execução que mantém o impacto vivo.",
  heroSubtitle:
    "Para projetos onde tecnologia precisa ter cara de propósito — social, educacional ou estratégico. Levamos o método e a mão na massa de quem já construiu junto da Casa Brasil e dezenas de outras frentes.",
  heroCtaLabel: "Iniciar projeto",
  heroCtaHref: "/contato?servico=consultoria",
  methodEyebrow: "Como trabalhamos",
  methodTitle: "Quatro etapas. Zero soluções de prateleira.",
  methodSteps: [
    {
      number: 1,
      title: "Diagnóstico",
      description: "Mergulhamos no contexto: entrevistas, observação de campo, leitura de dados existentes. Saímos com um mapa real do problema.",
    },
    {
      number: 2,
      title: "Estratégia",
      description: "Co-criamos a tese de solução com sua equipe. Definimos hipóteses, KPIs e risco — antes de qualquer linha de código.",
    },
    {
      number: 3,
      title: "Execução",
      description: "Time multidisciplinar (produto, eng, design) constrói em ciclos curtos com entregas validadas. Você acompanha em vez de torcer.",
    },
    {
      number: 4,
      title: "Sustentação",
      description: "Não largamos no go-live. Período de operação assistida e transferência de conhecimento para o time interno continuar.",
    },
  ],
  spotlightEyebrow: "Parceria flagship",
  spotlightTitle: "Casa Brasil — tecnologia para inclusão digital em escala nacional.",
  spotlightBody:
    "Há anos parceiros da Casa Brasil em projetos que transformam tecnologia em pertencimento. Da articulação de programas sociais até a operação digital de hubs comunitários, somos braço técnico que entende a complexidade do terreno.",
  spotlightImageUrl: "/brand/spotlight-casa-brasil.png",
  spotlightStats: [
    { value: "10K+", label: "Pessoas alcançadas em programas conjuntos" },
    { value: "12", label: "Hubs comunitários ativos com nossa estrutura" },
  ],
  topicsEyebrow: "Onde atuamos",
  topicsTitle: "Quatro frentes onde consultoria + execução fazem diferença.",
  topics: [
    {
      title: "Negócios e gestão",
      description: "Diagnóstico estratégico, redesenho de processo e tecnologia para PMs e diretores que querem decisão baseada em dado.",
      iconName: "lineChart",
    },
    {
      title: "Social e comunitário",
      description: "Projetos com fundações, ONGs e governo onde tech precisa servir gente real, em contexto real.",
      iconName: "users",
    },
    {
      title: "Marketing e comunicação",
      description: "Plataformas, automações e analytics para times de marketing que querem escalar sem perder qualidade de relação.",
      iconName: "sparkles",
    },
    {
      title: "Produção de eventos",
      description: "Tech stack completa para shows, festivais e summits — do credenciamento ao analytics em tempo real.",
      iconName: "rocket",
    },
  ],
  testimonials: [testimonials.fabioCasaBrasil],
  finalCtaTitle: "Tem um projeto difícil esperando alguém topar?",
  finalCtaBody:
    "Nossa conversa inicial é gratuita e direta. Você sai com clareza de escopo, mesmo que decida não seguir com a Tingle.",
};
```

- [ ] **Step 2: Create `app/consultoria/page.tsx`**

```typescript
import type { Metadata } from "next";
import { ServicePage } from "@/components/composites/service-page";
import { consultoria } from "@/content/data/services/consultoria";

export const metadata: Metadata = {
  title: "Consultoria",
  description: consultoria.heroSubtitle,
  openGraph: { title: "Consultoria · Tingle Digital", description: consultoria.heroSubtitle },
};

export default function ConsultoriaPage() {
  return <ServicePage data={consultoria} />;
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -10
git add content/data/services/consultoria.ts app/consultoria/page.tsx
git commit -m "feat: add /consultoria page with PT-BR service copy"
```

---

## Task 25: `/utilities` page

**Files:**
- Create: `content/data/services/utilities.ts`
- Create: `app/utilities/page.tsx`

- [ ] **Step 1: Create `content/data/services/utilities.ts`**

```typescript
import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const utilities: ServicePageData = {
  pillar: "utilities",
  heroEyebrow: "Utilities · AI · IoT · Hyperautomation",
  heroTitle: "Modernizar concessionária sem trocar o motor em pleno vôo.",
  heroSubtitle:
    "P&D aplicado, hyperautomation e melhorias operacionais para o setor de energia e saneamento. Trabalhamos com a infra que existe — adicionamos a camada que faltava.",
  heroCtaLabel: "Falar com utilities",
  heroCtaHref: "/contato?servico=utilities",
  methodEyebrow: "Como entregamos",
  methodTitle: "Pesquisa, automação e melhoria contínua.",
  methodSteps: [
    {
      number: 1,
      title: "P&D piloto",
      description: "Projetos curtos, com hipótese clara e medição rígida. Você descobre se a tese funciona antes de escalar.",
    },
    {
      number: 2,
      title: "Hyperautomation",
      description: "RPA + IA + integração entre sistemas legados. Tira a fricção dos processos que consomem o time hoje.",
    },
    {
      number: 3,
      title: "Operacional",
      description: "Recursos, manutenção, logística e atendimento — pequenos ganhos somados que pagam o projeto inteiro.",
    },
    {
      number: 4,
      title: "Governança",
      description: "Métricas, dashboards e ritos de operação para o ganho não evaporar quando a Tingle sai do projeto.",
    },
  ],
  spotlightEyebrow: "Em campo",
  spotlightTitle: "Hubz — estratégia que sai do PowerPoint e vira operação real.",
  spotlightBody:
    "Trabalhando junto da Hubz, exploramos como AI, IoT e blockchain podem entregar resultado mensurável em uma das frentes mais reguladas e críticas do país. Foco em processos com retorno em meses, não anos.",
  spotlightImageUrl: "/brand/spotlight-hubz.png",
  spotlightStats: [
    { value: "12+", label: "Processos automatizados em piloto" },
    { value: "30%", label: "Redução de tempo manual em frentes selecionadas" },
  ],
  topicsEyebrow: "Tecnologias que aplicamos",
  topicsTitle: "Sem hype. Cada tech aplicada onde gera resultado mensurável.",
  topics: [
    {
      title: "Inteligência artificial",
      description: "ML aplicado a previsão de demanda, manutenção preditiva e otimização de atendimento. Modelos próprios ou foundation.",
      iconName: "bot",
    },
    {
      title: "Internet das coisas",
      description: "Sensoriamento de campo, telemetria e gateways edge para ler o que sua infraestrutura está dizendo.",
      iconName: "network",
    },
    {
      title: "Blockchain seletivo",
      description: "Aplicado onde rastreabilidade auditável agrega — emissão de créditos, certificações, registros de medidor.",
      iconName: "lock",
    },
    {
      title: "Hyperautomation",
      description: "Composição de RPA, BPM e IA para automatizar fluxos complexos entre sistemas que não se falam.",
      iconName: "workflow",
    },
  ],
  testimonials: [testimonials.zeHubz],
  finalCtaTitle: "Quer ver o setor de energia se mover mais rápido?",
  finalCtaBody:
    "Conta seu desafio. Nas primeiras 2 semanas devolvemos um plano de prova de conceito com escopo e cronograma.",
};
```

- [ ] **Step 2: Create `app/utilities/page.tsx`**

```typescript
import type { Metadata } from "next";
import { ServicePage } from "@/components/composites/service-page";
import { utilities } from "@/content/data/services/utilities";

export const metadata: Metadata = {
  title: "Utilities",
  description: utilities.heroSubtitle,
  openGraph: { title: "Utilities · Tingle Digital", description: utilities.heroSubtitle },
};

export default function UtilitiesPage() {
  return <ServicePage data={utilities} />;
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -10
git add content/data/services/utilities.ts app/utilities/page.tsx
git commit -m "feat: add /utilities page with PT-BR service copy"
```

---

## Task 26: TeamGrid + Milestones

**Files:**
- Create: `components/shared/team-grid.tsx`
- Create: `components/shared/milestones.tsx`

- [ ] **Step 1: Create `team-grid.tsx`**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";

export interface TeamMember {
  name: string;
  role: string;
  initials?: string;
}

interface TeamGridProps {
  eyebrow: string;
  title: string;
  members: TeamMember[];
}

export function TeamGrid({ eyebrow, title, members }: TeamGridProps) {
  return (
    <Section spacing="lg" tone="elevated">
      <Container>
        <Eyebrow color="cyan">{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{title}</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="aspect-square w-full rounded-3xl bg-[--color-bg]/40 border border-[--color-border] flex items-center justify-center text-display-3 font-black text-[--color-text-subtle]">
                {m.initials ?? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <p className="mt-4 font-bold">{m.name}</p>
              <p className="text-sm text-[--color-text-muted]">{m.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Create `milestones.tsx`**

```typescript
import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

interface MilestonesProps {
  eyebrow: string;
  title: string;
  items: Milestone[];
}

export function Milestones({ eyebrow, title, items }: MilestonesProps) {
  return (
    <Section spacing="lg">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{title}</h2>
        <ol className="space-y-12 relative border-l border-[--color-border] pl-8">
          {items.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-[--color-accent-yellow] ring-4 ring-[--color-bg]" />
              <p className="text-eyebrow text-[--color-accent-yellow]">{m.year}</p>
              <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
              <p className="mt-2 max-w-2xl text-base text-[--color-text-muted] leading-relaxed">
                {m.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
git add components/shared/team-grid.tsx components/shared/milestones.tsx
git commit -m "feat: add TeamGrid and Milestones shared components"
```

---

## Task 27: `/sobre` page

**Files:**
- Create: `content/data/sobre.ts`
- Create: `app/sobre/page.tsx`

- [ ] **Step 1: Create `content/data/sobre.ts`**

```typescript
export const sobre = {
  hero: {
    eyebrow: "Sobre a Tingle",
    title: "Pequenos, escolhidos e bons no que fazem.",
    subtitle:
      "Somos uma equipe enxuta de produto, engenharia e estratégia. Há 6 anos transformando ideias em coisas reais — para clientes que não aceitam genérico.",
  },
  values: {
    eyebrow: "O que defendemos",
    title: "Quatro princípios. Em todo projeto.",
    items: [
      { title: "Respeito pelo problema", description: "Antes de propor solução, entendemos o terreno. Tecnologia vem depois." },
      { title: "Tempo do cliente é sagrado", description: "Reuniões com agenda. Entregas com prazo. Honestidade quando algo vai atrasar." },
      { title: "Pequenas peças, ciclos curtos", description: "Iterações de 1 a 3 semanas com algo demonstrável ao final. Nada de big bang." },
      { title: "Privacidade e ética em primeiro lugar", description: "Não construímos coisas que machuquem usuários. Mesmo quando o cliente pediria." },
    ],
  },
  team: {
    eyebrow: "Quem está por trás",
    title: "Time multidisciplinar. Roles que se conversam.",
    members: [
      { name: "Dreyfus Vasconcelos", role: "Sócio · Estratégia & Produto" },
      { name: "Equipe Eng", role: "Frontend, backend, mobile" },
      { name: "Equipe Produto", role: "Design, UX, pesquisa" },
      { name: "Equipe Ops", role: "Projeto, conta, financeiro" },
    ],
  },
  milestones: {
    eyebrow: "Linha do tempo",
    title: "Como chegamos aqui.",
    items: [
      { year: 2019, title: "Tingle Digital nasce.", description: "Primeiros projetos de consultoria com empresas do setor educacional." },
      { year: 2020, title: "Cognita ganha forma.", description: "A demanda por gestão escolar simples vira o nosso primeiro produto próprio." },
      { year: 2022, title: "Casa Brasil entra na história.", description: "Inicia a parceria estratégica em inclusão digital que segue até hoje." },
      { year: 2023, title: "Eter é lançado.", description: "Resposta a clientes pedindo privacidade radical. Vira produto independente." },
      { year: 2024, title: "Braço de utilities decola.", description: "Frente dedicada a energia, AI e IoT com primeiro grande cliente — Hubz." },
      { year: 2025, title: "4 produtos ativos.", description: "Portfólio diversificado, time consolidado, novos parceiros em educação e energia." },
    ],
  },
  location: {
    eyebrow: "Onde estamos",
    title: "Time distribuído com base no Brasil.",
    body: "Atendemos clientes em todo o Brasil e parceiros internacionais. Reuniões presenciais quando faz diferença — remote first quando entrega mais.",
  },
  finalCta: {
    title: "Pronto para começar um projeto?",
    body: "Conte qual desafio você quer atacar. Em até 5 dias úteis devolvemos uma proposta direta — sem floreios, com escopo e preço.",
  },
};
```

- [ ] **Step 2: Create `app/sobre/page.tsx`**

```typescript
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { TeamGrid } from "@/components/shared/team-grid";
import { Milestones } from "@/components/shared/milestones";
import { CtaSection } from "@/components/shared/cta-section";
import { sobre } from "@/content/data/sobre";

export const metadata: Metadata = {
  title: "Sobre",
  description: sobre.hero.subtitle,
  openGraph: { title: "Sobre · Tingle Digital", description: sobre.hero.subtitle },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow={sobre.hero.eyebrow}
        title={sobre.hero.title}
        subtitle={sobre.hero.subtitle}
        pillarColor="cyan"
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow color="yellow">{sobre.values.eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{sobre.values.title}</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {sobre.values.items.map((v) => (
              <div key={v.title}>
                <h3 className="text-display-3">{v.title}</h3>
                <p className="mt-4 text-lg text-[--color-text-muted] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TeamGrid
        eyebrow={sobre.team.eyebrow}
        title={sobre.team.title}
        members={sobre.team.members}
      />

      <Milestones
        eyebrow={sobre.milestones.eyebrow}
        title={sobre.milestones.title}
        items={sobre.milestones.items}
      />

      <Section spacing="lg" tone="elevated">
        <Container size="md">
          <Eyebrow>{sobre.location.eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{sobre.location.title}</h2>
          <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed">
            {sobre.location.body}
          </p>
        </Container>
      </Section>

      <CtaSection
        title={sobre.finalCta.title}
        body={sobre.finalCta.body}
        primaryCta={{ label: "Iniciar conversa", href: "/contato" }}
        secondaryCta={{ label: "Ver portfólio", href: "/cases" }}
        tone="accent-yellow"
      />
    </>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -10
git add content/data/sobre.ts app/sobre/page.tsx
git commit -m "feat: add /sobre page with manifesto values, team, and timeline"
```

---

## Task 28: Resend setup

**Files:**
- Create: `lib/resend.ts`
- Modify: `.env.example`

- [ ] **Step 1: Install resend SDK**

```bash
export PATH="/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm add resend
```

- [ ] **Step 2: Create `lib/resend.ts`**

```typescript
import "server-only";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey && process.env.NODE_ENV === "production") {
  // Don't crash in dev; warn loudly in prod logs.
  console.error("[resend] RESEND_API_KEY is missing — emails will fail in production.");
}

export const resend = apiKey ? new Resend(apiKey) : null;

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "contato@tingledigital.com";

export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "no-reply@tingledigital.com";

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!resend) {
    throw new Error("Resend is not configured (missing RESEND_API_KEY).");
  }
  return resend.emails.send({
    from: `Tingle Site <${CONTACT_FROM_EMAIL}>`,
    to: [CONTACT_TO_EMAIL],
    replyTo: payload.email,
    subject: `[Site] Novo contato — ${payload.name}`,
    text: [
      `Nome: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Empresa: ${payload.company}` : null,
      payload.projectType ? `Tipo: ${payload.projectType}` : null,
      "",
      "Mensagem:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
```

- [ ] **Step 3: Update `.env.example`**

Create or modify `.env.example`:

```bash
# Resend (transactional email for /contato form)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=contato@tingledigital.com
CONTACT_FROM_EMAIL=no-reply@tingledigital.com
```

- [ ] **Step 4: Install `server-only`**

```bash
pnpm add server-only
```

- [ ] **Step 5: Verify and commit**

```bash
pnpm tsc --noEmit
git add lib/resend.ts .env.example package.json pnpm-lock.yaml
git commit -m "feat: add Resend client for contact form delivery"
```

---

## Task 29: ContactForm + validation

**Files:**
- Create: `lib/validation/contact.ts`
- Create: `components/forms/contact-form.tsx`

- [ ] **Step 1: Install form libs**

```bash
export PATH="/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm add react-hook-form @hookform/resolvers zod
```

- [ ] **Step 2: Create `lib/validation/contact.ts`**

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório." })
    .trim()
    .min(2, "Nome muito curto.")
    .max(120, "Nome muito longo."),
  email: z
    .string({ message: "Email é obrigatório." })
    .trim()
    .email("Email inválido."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z
    .enum(["produto", "consultoria", "utilities", "outro"], {
      message: "Selecione um tipo de projeto.",
    })
    .optional(),
  message: z
    .string({ message: "Mensagem é obrigatória." })
    .trim()
    .min(20, "Mensagem muito curta (mínimo 20 caracteres).")
    .max(4000, "Mensagem muito longa (máximo 4000 caracteres)."),
  // honeypot — must remain empty
  website: z.string().max(0, "spam-detected").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

- [ ] **Step 3: Create `components/forms/contact-form.tsx`**

```typescript
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

const projectTypes = [
  { value: "produto" as const, label: "Produto (Cognita / Eter)" },
  { value: "consultoria" as const, label: "Consultoria" },
  { value: "utilities" as const, label: "Utilities · Energia" },
  { value: "outro" as const, label: "Outro" },
];

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: undefined,
      message: "",
      website: "",
    },
  });

  const [state, setState] = React.useState<SubmitState>({ kind: "idle" });

  const onSubmit = async (values: ContactInput) => {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      setState({ kind: "success" });
      reset();
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erro desconhecido";
      setState({ kind: "error", message });
    }
  };

  if (state.kind === "success") {
    return (
      <div className="rounded-3xl border border-[--color-accent-lime]/40 bg-[--color-accent-lime]/5 p-10 text-center">
        <p className="text-eyebrow text-[--color-accent-lime]">Recebida</p>
        <h3 className="text-display-3 mt-4">Sua mensagem chegou.</h3>
        <p className="mt-4 text-lg text-[--color-text-muted]">
          Em até 5 dias úteis você receberá uma resposta direta no email informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input
        type="text"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message} htmlFor="name">
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Empresa (opcional)" error={errors.company?.message} htmlFor="company">
        <input
          id="company"
          type="text"
          autoComplete="organization"
          {...register("company")}
          className={inputClass(!!errors.company)}
        />
      </Field>

      <Field label="Tipo de projeto" error={errors.projectType?.message} htmlFor="projectType">
        <select
          id="projectType"
          {...register("projectType")}
          className={inputClass(!!errors.projectType)}
        >
          <option value="">Selecione…</option>
          {projectTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className={cn(inputClass(!!errors.message), "resize-y min-h-[120px]")}
          placeholder="Conte rapidamente: contexto, problema, prazo se houver."
        />
      </Field>

      {state.kind === "error" && (
        <p className="rounded-md border border-[--color-accent-pink]/40 bg-[--color-accent-pink]/5 p-4 text-sm text-[--color-accent-pink]">
          Não foi possível enviar: {state.message}. Você pode escrever direto para contato@tingledigital.com.
        </p>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? "Enviando…" : "Enviar mensagem"}
        </Button>
        <p className="text-xs text-[--color-text-muted]">
          Resposta em até 5 dias úteis.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-eyebrow text-[--color-text-muted] mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-[--color-accent-pink]">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "block w-full rounded-md border bg-[--color-surface]/50 px-4 py-3 text-base text-[--color-text] placeholder:text-[--color-text-subtle] transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[--color-bg] focus:border-[--color-accent-yellow] focus:ring-[--color-accent-yellow]",
    hasError
      ? "border-[--color-accent-pink]"
      : "border-[--color-border] hover:border-[--color-border-strong]"
  );
}
```

- [ ] **Step 4: Verify and commit**

```bash
pnpm tsc --noEmit
git add lib/validation/contact.ts components/forms/contact-form.tsx package.json pnpm-lock.yaml
git commit -m "feat: add ContactForm with zod validation and honeypot"
```

---

## Task 30: `/api/contact` route

**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create the route**

```typescript
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido (JSON malformado)." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  if (parsed.data.website) {
    // honeypot triggered — pretend success silently
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    await sendContactEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || undefined,
      projectType: parsed.data.projectType,
      message: parsed.data.message,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao enviar email.";
    console.error("[contact] send failed:", message);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
```

- [ ] **Step 2: Verify build**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -15
```
Expected: builds (warnings about missing RESEND_API_KEY in dev are fine).

- [ ] **Step 3: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "feat: add /api/contact server route with zod parse + Resend send"
```

---

## Task 31: `/contato` page

**Files:**
- Create: `content/data/contato.ts`
- Create: `app/contato/page.tsx`

- [ ] **Step 1: Create `content/data/contato.ts`**

```typescript
export const contato = {
  hero: {
    eyebrow: "Contato",
    title: "Vamos conversar?",
    subtitle:
      "Conte o problema. A gente devolve uma proposta direta em até 5 dias úteis — com escopo, prazo e preço.",
  },
  channels: {
    eyebrow: "Canais diretos",
    title: "Se preferir não preencher formulário:",
    items: [
      {
        label: "Email",
        value: "contato@tingledigital.com",
        href: "mailto:contato@tingledigital.com",
      },
      {
        label: "WhatsApp",
        value: "Conversar agora",
        href: "https://wa.me/5511999999999",
      },
      {
        label: "LinkedIn",
        value: "Tingle Digital",
        href: "https://linkedin.com/company/tingle-digital",
      },
    ],
  },
  location: {
    eyebrow: "Onde estamos",
    title: "Time distribuído. Reuniões presenciais quando faz sentido.",
    body:
      "Atendemos clientes em todo o Brasil. Sede registrada em São Paulo. Para reuniões in-person, articulamos no momento certo do projeto.",
  },
};
```

- [ ] **Step 2: Create `app/contato/page.tsx`**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";
import { contato } from "@/content/data/contato";

export const metadata: Metadata = {
  title: "Contato",
  description: contato.hero.subtitle,
  openGraph: { title: "Contato · Tingle Digital", description: contato.hero.subtitle },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={contato.hero.eyebrow}
        title={contato.hero.title}
        subtitle={contato.hero.subtitle}
        pillarColor="yellow"
      />

      <Section spacing="lg">
        <Container size="md">
          <ContactForm />
        </Container>
      </Section>

      <Section spacing="lg" tone="elevated">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div>
              <Eyebrow>{contato.channels.eyebrow}</Eyebrow>
              <h2 className="text-display-3 mt-4">{contato.channels.title}</h2>
            </div>
            <ul className="space-y-6">
              {contato.channels.items.map((ch) => (
                <li key={ch.label}>
                  <Link
                    href={ch.href}
                    className="group flex items-baseline justify-between gap-6 border-b border-[--color-border] pb-4 hover:border-[--color-accent-yellow]"
                  >
                    <span className="text-eyebrow text-[--color-text-muted]">{ch.label}</span>
                    <span className="text-lg font-bold group-hover:text-[--color-accent-yellow] transition-colors">
                      {ch.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container size="md">
          <Eyebrow>{contato.location.eyebrow}</Eyebrow>
          <h2 className="text-display-3 mt-4 text-balance">{contato.location.title}</h2>
          <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed">
            {contato.location.body}
          </p>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
pnpm tsc --noEmit
pnpm next build 2>&1 | tail -15
git add content/data/contato.ts app/contato/page.tsx
git commit -m "feat: add /contato page with form and direct channels"
```

---

## Task 32: Full smoke test all routes

**Files:** none (verification only)

- [ ] **Step 1: Build**

```bash
export PATH="/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm next build 2>&1 | tail -25
```

Expected: build succeeds, all 7 routes prerendered (or marked as dynamic for `/api/contact`).

- [ ] **Step 2: Local smoke test all 7 marketing routes**

```bash
lsof -ti:3000 2>/dev/null | xargs kill 2>/dev/null
sleep 1
pnpm dev > /tmp/dev.log 2>&1 &
sleep 7

for route in / /cognita /eter /consultoria /utilities /sobre /contato; do
  curl -s -o /tmp/route.html -w "$route: HTTP %{http_code} (%{size_download}b)\n" "http://localhost:3000$route"
done

kill %1 2>/dev/null; wait 2>/dev/null
```

Expected: all 7 routes return HTTP 200. Sizes should range from ~20KB (small pages) to ~80KB (home).

- [ ] **Step 3: Verify form endpoint rejects bad payload**

(While dev still running — if you stopped it, restart.)

```bash
pnpm dev > /tmp/dev.log 2>&1 &
sleep 5
curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"x","email":"not-an-email","message":"too short"}' \
  -w "\nHTTP %{http_code}\n"
kill %1 2>/dev/null; wait 2>/dev/null
```

Expected: HTTP 400, body contains `"error":"Dados inválidos."` plus list of issues.

- [ ] **Step 4: Commit nothing — only verification**

No code changes. If issues found, fix in new commits or report.

---

## Task 33: Deploy + Lighthouse on all routes

**Files:**
- Create: `docs/superpowers/plans/plan-2-lighthouse.md`

- [ ] **Step 1: Deploy to Vercel**

```bash
export PATH="/Users/dreyfusvasconcelos/Library/pnpm/bin:/opt/homebrew/lib/node_modules/corepack/shims:$PATH"
cd /Users/dreyfusvasconcelos/apps/tingledigital
vercel --prod --yes 2>&1 | tail -20
```

Capture the production URL printed. Should be `https://tingledigital.vercel.app` (or alias).

- [ ] **Step 2: Lighthouse on home + /cognita as samples**

```bash
cd /tmp
pnpm dlx lighthouse@latest https://tingledigital.vercel.app/ \
  --output=json --output-path=/tmp/lh-home.json --quiet \
  --chrome-flags="--headless=new --no-sandbox" \
  --preset=desktop --only-categories=performance,accessibility,best-practices,seo

pnpm dlx lighthouse@latest https://tingledigital.vercel.app/cognita \
  --output=json --output-path=/tmp/lh-cognita.json --quiet \
  --chrome-flags="--headless=new --no-sandbox" \
  --preset=desktop --only-categories=performance,accessibility,best-practices,seo
```

- [ ] **Step 3: Extract scores**

```bash
node -e '
const routes = ["home", "cognita"];
for (const r of routes) {
  const data = require(`/tmp/lh-${r}.json`);
  const c = data.categories;
  console.log(`${r}: P=${Math.round(c.performance.score*100)} A=${Math.round(c.accessibility.score*100)} BP=${Math.round(c["best-practices"].score*100)} SEO=${Math.round(c.seo.score*100)}`);
}
'
```

- [ ] **Step 4: Document baseline**

Create `docs/superpowers/plans/plan-2-lighthouse.md`:

```markdown
# Plan 2 — Lighthouse Snapshot

Production URL: https://tingledigital.vercel.app
Date: <today>
Config: Desktop, default preset

| Route        | Perf | A11y | Best Practices | SEO |
| ------------ | ---- | ---- | -------------- | --- |
| /            | <fill>  | <fill>  | <fill>            | <fill> |
| /cognita     | <fill>  | <fill>  | <fill>            | <fill> |

Targets: Performance ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 90 on indexed pages.

Notes: <fill in any flagged issues>
```

Fill in actual scores from Step 3.

- [ ] **Step 5: Commit + push**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
git add docs/superpowers/plans/plan-2-lighthouse.md
git commit -m "docs: record Plan 2 Lighthouse snapshot"
git push
```

---

## Task 34: Update README and plan roadmap

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update README structure section**

In `README.md`, update the **Documentação interna** section to mark Plan 2 as current and add notes:

Find:
```markdown
- **Plan 1 (atual):** Foundation + Design System
- **Plan 2:** Marketing pages PT (Home + 7 páginas)
```

Replace with:
```markdown
- **Plan 1 (concluído):** Foundation + Design System
- **Plan 2 (concluído):** Marketing pages PT (Home + 6 páginas + form com Resend)
- **Plan 3:** Sanity CMS + /cases dinâmicos
- **Plan 4:** i18n EN + SEO completo + Analytics + DNS Hostinger → Vercel
```

Also update the **Comandos** section if anything new is worth documenting (none in this plan — only `pnpm dev`/`build` still apply).

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: mark Plan 2 complete in README roadmap"
git push
```

---

## Acceptance Criteria

Plan 2 is complete when all of these are true:

- [ ] All 8 routes return HTTP 200 locally and on Vercel: `/`, `/cognita`, `/eter`, `/consultoria`, `/utilities`, `/sobre`, `/contato`, `/design-system`
- [ ] Home renders 9 sections in order (Hero → Numbers → Pillars → ProductSpotlight → Cases → Manifesto → Logos → CtaFinal → Footer)
- [ ] `/cognita` and `/eter` use the same `ProductPage` composite with different data
- [ ] `/consultoria` and `/utilities` use the same `ServicePage` composite
- [ ] Contact form: client-side validation works (try blank submit and invalid email), server route rejects bad input with 400, valid input returns 200 (with RESEND_API_KEY missing in dev, the route returns 500 with friendly message — acceptable)
- [ ] All copy is in PT-BR, no Lorem Ipsum or English placeholders
- [ ] No console errors on any page
- [ ] `pnpm tsc --noEmit` is clean
- [ ] `pnpm next build` succeeds
- [ ] Lighthouse on home (desktop): Performance ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 90
- [ ] Production deploy succeeded, public URL serves new content
- [ ] All commits pushed to GitHub `main`

---

## Self-review

After all tasks complete, verify against the spec:

| Spec Section | Plan Coverage |
|--------------|---------------|
| 5.1 Home (9 sections) | T12-T19, with all 9 sections wired in `app/page.tsx` — ✅ |
| 5.2 /cognita (6 sections) | T20 composite + T21 data + page — ✅ |
| 5.3 /eter | T22 with same composite + own data — ✅ |
| 5.4 /consultoria | T23 composite + T24 — ✅ |
| 5.5 /utilities | T23 composite + T25 — ✅ |
| 5.8 /sobre | T26 (TeamGrid, Milestones) + T27 — ✅ |
| 5.9 /contato | T28-T31 (Resend + form + API + page) — ✅ |
| 7.1 MDX content model | Adapted to TypeScript data modules (`content/data/*.ts`) — same intent, simpler ergonomics for non-MDX content. MDX deferred to Plan 3 if needed for case bodies. |
| 7.3 i18n strategy | UI labels still hardcoded PT-BR — i18n wiring deferred to Plan 4 as planned. Structure (data files) is locale-ready. |

Items deliberately deferred to later plans:
- `/cases` listing and `/cases/[slug]` detail → Plan 3 (Sanity CMS)
- next-intl wiring + EN translations → Plan 4
- Analytics (Vercel + Plausible) → Plan 4
- Full SEO metadata (sitemap, robots, OG images) → Plan 4
- DNS switchover (Hostinger → Vercel for custom domain) → Plan 4
- Real photos for team and product mockups → coordinated with client; placeholders work for now

---

## Notes for the implementer

- **21st.dev MCP** is available. For visual enhancements beyond the inline code provided, the implementer can call `21st_magic_component_inspiration` for reference patterns or `21st_magic_component_refiner` against a finished section to polish it. Use judgment — the inline code is production-ready; MCP is for refinement, not regeneration.
- **Pillar accent consistency** is critical: any time `pillar` is passed as a prop, the component must map it correctly to the accent color. The map is consistent: `cognita` → cyan, `eter` → pink, `consultoria` → yellow, `utilities` → lime.
- **Don't add cases to `/cognita` and `/eter` until Plan 3.** The seed cases in `cognita.ts` (Casa Brasil) and the empty array in `eter.ts` are placeholders — Plan 3 will populate from Sanity.
- **Don't try to send real emails in dev unless you set `RESEND_API_KEY`.** The route returns a clear error; the form surfaces it.
- **WhatsApp number in `contato.ts` is a placeholder** (`5511999999999`). Replace before launch — flagged in spec's "Conteúdo a coletar" list.

---

## Next plan

After Plan 2 acceptance, write **Plan 3: Sanity CMS + Cases**. It will add the Sanity Studio under `/studio`, define the `case` / `testimonial` / `client` schemas, wire the listing `/cases` and detail `/cases/[slug]` routes, and seed 3 cases (Casa Brasil, Hubz, +1).
