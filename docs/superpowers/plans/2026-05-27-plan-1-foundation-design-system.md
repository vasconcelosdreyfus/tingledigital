# Tingle Digital — Plano 1: Foundation + Design System

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold the Next.js 15 project, install all dependencies, configure tooling, set up Vercel preview deploys, and build the foundational design system (tokens, fonts, base components, header/footer).

**Architecture:** Next.js 15 App Router with TypeScript strict mode. Tailwind CSS v4 with custom theme extension for the Electric Multi-Accent palette. Inter font self-hosted via `next/font`. Component library built on shadcn/ui primitives, animations via Framer Motion. Project lives in `/Users/dreyfusvasconcelos/apps/tingledigital/`.

**Tech Stack:** Next.js 15, TypeScript 5, Tailwind CSS v4, shadcn/ui, Framer Motion, next-intl (config only here), Lucide React, pnpm.

**Spec reference:** `docs/superpowers/specs/2026-05-27-tingledigital-redesign-design.md`

**Deliverable:** A deployed-to-Vercel Next.js app with a working `/design-system` preview page showing all foundational components in action. Lighthouse Performance ≥ 95 on that page.

---

## File Structure

By the end of this plan, the project tree will look like:

```
tingledigital/
├── .gitignore
├── .env.local                 # (gitignored — empty initially)
├── .env.example
├── README.md
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts          # if Tailwind v4 needs it; otherwise theme in globals.css
├── postcss.config.mjs
├── components.json             # shadcn/ui config
├── eslint.config.mjs
├── app/
│   ├── layout.tsx              # root layout
│   ├── page.tsx                # placeholder home (replaced in Plan 2)
│   ├── design-system/
│   │   └── page.tsx            # preview of all components
│   └── globals.css             # tokens + base styles
├── components/
│   ├── ui/                     # shadcn primitives (added on demand)
│   │   └── button.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── locale-toggle.tsx
│   ├── primitives/
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── eyebrow.tsx
│   │   └── pill.tsx
│   └── motion/
│       ├── marquee.tsx
│       ├── animated-counter.tsx
│       └── text-reveal.tsx
├── lib/
│   ├── utils.ts                # cn helper from shadcn
│   └── fonts.ts                # next/font config
├── docs/
│   └── superpowers/
│       ├── specs/
│       └── plans/
└── public/
    └── brand/
        └── logo-placeholder.svg
```

---

## Task 1: Scaffold Next.js project

**Files:**

- Create: entire project skeleton at `/Users/dreyfusvasconcelos/apps/tingledigital/`

- [ ] **Step 1: Verify working directory is empty (or only has docs/)**

Run:

```bash
ls -la /Users/dreyfusvasconcelos/apps/tingledigital/
```

Expected: only `docs/` directory (and `.git/` if initialized).

- [ ] **Step 2: Scaffold Next.js**

Run from `/Users/dreyfusvasconcelos/apps/`:

```bash
cd /Users/dreyfusvasconcelos/apps && pnpm create next-app@latest tingledigital-tmp --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*" --turbopack --use-pnpm
```

When prompted, choose:

- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Turbopack: Yes
- Import alias: `@/*`

- [ ] **Step 3: Merge scaffolded files into existing directory**

```bash
cd /Users/dreyfusvasconcelos/apps
# Move everything from tingledigital-tmp into tingledigital, preserving docs/
rsync -a --exclude='docs' tingledigital-tmp/ tingledigital/
rm -rf tingledigital-tmp
```

- [ ] **Step 4: Verify scaffolding**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
ls -la
```

Expected files: `package.json`, `tsconfig.json`, `next.config.ts`, `app/`, `public/`, `node_modules/`, etc.

- [ ] **Step 5: Smoke test dev server**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital && pnpm dev
```

Expected: server starts on `http://localhost:3000`, default Next.js welcome page renders.
Then Ctrl+C to stop.

- [ ] **Step 6: Commit**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
git add -A
git commit -m "feat: scaffold Next.js 15 project with TS, Tailwind, App Router"
```

---

## Task 2: Configure TypeScript strict mode

**Files:**

- Modify: `tsconfig.json`

- [ ] **Step 1: Open `tsconfig.json` and ensure strict settings**

Replace `tsconfig.json` with:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] },
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital && pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add tsconfig.json
git commit -m "chore: enable strict TypeScript settings"
```

---

## Task 3: Install core dependencies

**Files:**

- Modify: `package.json`

- [ ] **Step 1: Install runtime deps**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm add framer-motion lucide-react clsx tailwind-merge class-variance-authority
```

- [ ] **Step 2: Install dev deps**

```bash
pnpm add -D @types/node prettier prettier-plugin-tailwindcss
```

- [ ] **Step 3: Verify package.json has all deps**

Run:

```bash
cat package.json | grep -E "(framer-motion|lucide-react|clsx|tailwind-merge|class-variance-authority|prettier)"
```

Expected: all six packages present.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: install core deps (framer-motion, lucide-react, cva, prettier)"
```

---

## Task 4: Create `lib/utils.ts` with `cn` helper

**Files:**

- Create: `lib/utils.ts`

- [ ] **Step 1: Create the utility file**

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/utils.ts
git commit -m "feat: add cn utility for className merging"
```

---

## Task 5: Configure design tokens in CSS

**Files:**

- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css` with token-based theme**

Replace entire contents of `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* === COLORS === */
  --color-bg: #0a0a0f;
  --color-surface: #15151f;
  --color-surface-elevated: #1a1a26;
  --color-border: #2a2a35;
  --color-border-strong: #3a3a48;

  --color-text: #f5f5fa;
  --color-text-muted: #888899;
  --color-text-subtle: #5a5a6a;

  --color-accent-yellow: #ffeb00;
  --color-accent-pink: #ff2d75;
  --color-accent-cyan: #00f0ff;
  --color-accent-lime: #b8ff00;

  /* Pillar mappings (semantic) */
  --color-pillar-consultoria: var(--color-accent-yellow);
  --color-pillar-eter: var(--color-accent-pink);
  --color-pillar-cognita: var(--color-accent-cyan);
  --color-pillar-utilities: var(--color-accent-lime);

  /* === TYPOGRAPHY === */
  --font-sans: var(--font-inter), system-ui, -apple-system, sans-serif;

  /* === SPACING / RADII === */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}

@layer base {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
    font-feature-settings: "cv11", "ss01", "ss03";
    min-height: 100vh;
  }

  ::selection {
    background-color: var(--color-accent-yellow);
    color: var(--color-bg);
  }

  /* Reduced motion baseline */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }

  /* Display headlines — Bold Kinetic */
  .text-display-1 {
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -0.04em;
  }

  .text-display-2 {
    font-size: clamp(2.25rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .text-display-3 {
    font-size: clamp(1.75rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .text-eyebrow {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}
```

- [ ] **Step 2: Verify build still works**

```bash
pnpm tsc --noEmit && pnpm next build --no-lint
```

Expected: build succeeds (warnings OK, errors not).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add Electric Multi-Accent design tokens and base styles"
```

---

## Task 6: Setup Inter font via `next/font`

**Files:**

- Create: `lib/fonts.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `lib/fonts.ts`**

Create file:

```typescript
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});
```

- [ ] **Step 2: Wire font into root layout**

Replace `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tingle Digital — Tecnologia com alma criativa",
    template: "%s · Tingle Digital",
  },
  description:
    "Construímos produtos, consultamos com impacto e modernizamos utilities com AI + IoT. Tecnologia com alma criativa.",
  metadataBase: new URL("https://tingledigital.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify dev server renders with Inter**

```bash
pnpm dev
```

Open `http://localhost:3000` — text should be rendered in Inter. Ctrl+C to stop.

- [ ] **Step 4: Commit**

```bash
git add lib/fonts.ts app/layout.tsx
git commit -m "feat: configure Inter font via next/font with all weights"
```

---

## Task 7: Initialize shadcn/ui and add Button primitive

**Files:**

- Create: `components.json`
- Create: `components/ui/button.tsx`

- [ ] **Step 1: Initialize shadcn**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm dlx shadcn@latest init -y -d
```

When prompted:

- Style: Default
- Base color: Neutral
- Use CSS variables: Yes

This creates `components.json`. Open and verify it points to `app/globals.css`.

- [ ] **Step 2: Add Button**

```bash
pnpm dlx shadcn@latest add button -y
```

This creates `components/ui/button.tsx`.

- [ ] **Step 3: Customize Button variants for our design**

Replace `components/ui/button.tsx` with:

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-accent-yellow] text-[--color-bg] hover:bg-[--color-accent-yellow]/90 hover:shadow-[0_0_32px_rgba(255,235,0,0.4)] focus-visible:ring-[--color-accent-yellow]",
        secondary:
          "bg-[--color-surface] text-[--color-text] border border-[--color-border] hover:border-[--color-border-strong] hover:bg-[--color-surface-elevated]",
        ghost:
          "text-[--color-text] hover:bg-[--color-surface] hover:text-[--color-accent-yellow]",
        link:
          "text-[--color-accent-yellow] underline-offset-4 hover:underline",
        outline:
          "border border-[--color-text] text-[--color-text] hover:bg-[--color-text] hover:text-[--color-bg]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-base rounded-md",
        lg: "h-14 px-8 text-lg rounded-lg",
        xl: "h-16 px-10 text-xl rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

- [ ] **Step 4: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add components.json components/ui/button.tsx
git commit -m "feat: add shadcn/ui setup and custom Button with brand variants"
```

---

## Task 8: Create `Container` primitive

**Files:**

- Create: `components/primitives/container.tsx`

- [ ] **Step 1: Create Container**

Create `components/primitives/container.tsx`:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: keyof React.JSX.IntrinsicElements;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export function Container({
  className,
  size = "lg",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return React.createElement(Component, {
    className: cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizeMap[size], className),
    ...props,
  });
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/primitives/container.tsx
git commit -m "feat: add Container primitive with size variants"
```

---

## Task 9: Create `Section` primitive

**Files:**

- Create: `components/primitives/section.tsx`

- [ ] **Step 1: Create Section**

Create `components/primitives/section.tsx`:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "elevated" | "accent-yellow" | "accent-pink" | "accent-cyan" | "accent-lime";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: SectionSpacing;
}

const toneMap: Record<SectionTone, string> = {
  default: "bg-[--color-bg] text-[--color-text]",
  elevated: "bg-[--color-surface] text-[--color-text]",
  "accent-yellow": "bg-[--color-accent-yellow] text-[--color-bg]",
  "accent-pink": "bg-[--color-accent-pink] text-[--color-bg]",
  "accent-cyan": "bg-[--color-accent-cyan] text-[--color-bg]",
  "accent-lime": "bg-[--color-accent-lime] text-[--color-bg]",
};

const spacingMap: Record<SectionSpacing, string> = {
  sm: "py-12 sm:py-16",
  md: "py-20 sm:py-24",
  lg: "py-24 sm:py-32",
  xl: "py-32 sm:py-40",
};

export function Section({
  className,
  tone = "default",
  spacing = "lg",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(toneMap[tone], spacingMap[spacing], "relative", className)}
      {...props}
    />
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/primitives/section.tsx
git commit -m "feat: add Section primitive with tone and spacing variants"
```

---

## Task 10: Create `Eyebrow` and `Pill` primitives

**Files:**

- Create: `components/primitives/eyebrow.tsx`
- Create: `components/primitives/pill.tsx`

- [ ] **Step 1: Create Eyebrow**

Create `components/primitives/eyebrow.tsx`:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: EyebrowColor;
}

const colorMap: Record<EyebrowColor, string> = {
  default: "text-[--color-text-muted]",
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
};

export function Eyebrow({ className, color = "default", ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
```

- [ ] **Step 2: Create Pill**

Create `components/primitives/pill.tsx`:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

type PillColor = "default" | "yellow" | "pink" | "cyan" | "lime";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: PillColor;
}

const colorMap: Record<PillColor, string> = {
  default: "border-[--color-border] text-[--color-text-muted]",
  yellow: "border-[--color-accent-yellow]/40 text-[--color-accent-yellow] bg-[--color-accent-yellow]/5",
  pink: "border-[--color-accent-pink]/40 text-[--color-accent-pink] bg-[--color-accent-pink]/5",
  cyan: "border-[--color-accent-cyan]/40 text-[--color-accent-cyan] bg-[--color-accent-cyan]/5",
  lime: "border-[--color-accent-lime]/40 text-[--color-accent-lime] bg-[--color-accent-lime]/5",
};

export function Pill({ className, color = "default", ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/primitives/eyebrow.tsx components/primitives/pill.tsx
git commit -m "feat: add Eyebrow and Pill primitives with pillar color variants"
```

---

## Task 11: Create `Marquee` motion component

**Files:**

- Create: `components/motion/marquee.tsx`

- [ ] **Step 1: Create Marquee**

Create `components/motion/marquee.tsx`:

```typescript
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

const speedMap = {
  slow: "60s",
  normal: "40s",
  fast: "20s",
};

export function Marquee({
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee",
          direction === "right" && "motion-safe:[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee",
          direction === "right" && "motion-safe:[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add `marquee` keyframes to globals.css**

Append to `app/globals.css`:

```css
@layer utilities {
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .animate-marquee {
    animation: marquee linear infinite;
  }
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/motion/marquee.tsx app/globals.css
git commit -m "feat: add Marquee component with configurable speed/direction"
```

---

## Task 12: Create `AnimatedCounter` motion component

**Files:**

- Create: `components/motion/animated-counter.tsx`

- [ ] **Step 1: Create AnimatedCounter**

Create `components/motion/animated-counter.tsx`:

```typescript
"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  formatter?: (n: number) => string;
}

export function AnimatedCounter({
  value,
  duration = 1.5,
  className,
  prefix = "",
  suffix = "",
  formatter,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const display = useTransform(spring, (latest) => {
    const num = Math.round(latest);
    return formatter ? formatter(num) : num.toLocaleString("pt-BR");
  });

  React.useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  const [text, setText] = React.useState("0");
  React.useEffect(() => {
    return display.on("change", setText);
  }, [display]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/motion/animated-counter.tsx
git commit -m "feat: add AnimatedCounter triggered by viewport"
```

---

## Task 13: Create `TextReveal` motion component

**Files:**

- Create: `components/motion/text-reveal.tsx`

- [ ] **Step 1: Create TextReveal**

Create `components/motion/text-reveal.tsx`:

```typescript
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  stagger = 0.04,
  delay = 0,
  as = "p",
}: TextRevealProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/motion/text-reveal.tsx
git commit -m "feat: add TextReveal with word-staggered viewport animation"
```

---

## Task 14: Create placeholder logo SVG

**Files:**

- Create: `public/brand/logo-placeholder.svg`

- [ ] **Step 1: Create placeholder logo**

Create `public/brand/logo-placeholder.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 32" fill="none">
  <text x="0" y="24" font-family="Inter, sans-serif" font-weight="900" font-size="24" letter-spacing="-1" fill="#F5F5FA">tingle</text>
  <circle cx="124" cy="20" r="6" fill="#FFEB00"/>
</svg>
```

- [ ] **Step 2: Commit**

```bash
git add public/brand/logo-placeholder.svg
git commit -m "feat: add placeholder logo SVG (to be replaced with brand asset)"
```

---

## Task 15: Create `LocaleToggle` placeholder

**Files:**

- Create: `components/layout/locale-toggle.tsx`

> Note: In Plan 4 (i18n) this will be wired to next-intl. For now it's a UI-only placeholder.

- [ ] **Step 1: Create LocaleToggle**

Create `components/layout/locale-toggle.tsx`:

```typescript
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const [active, setActive] = React.useState<"pt" | "en">("pt");

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[--color-border] bg-[--color-surface]/50 p-1 text-xs",
        className
      )}
    >
      {(["pt", "en"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setActive(locale)}
          className={cn(
            "rounded-full px-3 py-1 font-semibold uppercase tracking-wider transition-colors",
            active === locale
              ? "bg-[--color-text] text-[--color-bg]"
              : "text-[--color-text-muted] hover:text-[--color-text]"
          )}
          aria-pressed={active === locale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/layout/locale-toggle.tsx
git commit -m "feat: add LocaleToggle UI placeholder (wiring in Plan 4)"
```

---

## Task 16: Create `Header` layout component

**Files:**

- Create: `components/layout/header.tsx`

- [ ] **Step 1: Create Header**

Create `components/layout/header.tsx`:

```typescript
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/cognita", label: "Cognita" },
  { href: "/eter", label: "Eter" },
  { href: "/consultoria", label: "Consultoria" },
  { href: "/utilities", label: "Utilities" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[--color-border]/60 bg-[--color-bg]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container size="xl" className="flex h-16 items-center justify-between gap-8">
        <Link
          href="/"
          aria-label="Tingle Digital — home"
          className="flex items-center gap-2"
        >
          <Image
            src="/brand/logo-placeholder.svg"
            alt="Tingle Digital"
            width={120}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[--color-text-muted] hover:text-[--color-text] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle className="hidden sm:inline-flex" />
          <Button size="sm" asChild>
            <Link href="/contato">Fale conosco</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/layout/header.tsx
git commit -m "feat: add Header with scroll-elevated background and nav"
```

---

## Task 17: Create `Footer` layout component

**Files:**

- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Create Footer**

Create `components/layout/footer.tsx`:

```typescript
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { LocaleToggle } from "@/components/layout/locale-toggle";

const columns = [
  {
    title: "Produtos",
    items: [
      { href: "/cognita", label: "Cognita" },
      { href: "/eter", label: "Eter" },
    ],
  },
  {
    title: "Serviços",
    items: [
      { href: "/consultoria", label: "Consultoria" },
      { href: "/utilities", label: "Utilities" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { href: "/cases", label: "Cases" },
      { href: "/sobre", label: "Sobre" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[--color-border] bg-[--color-bg]">
      <Container size="xl" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-6">
            <Image
              src="/brand/logo-placeholder.svg"
              alt="Tingle Digital"
              width={140}
              height={32}
            />
            <p className="max-w-sm text-sm text-[--color-text-muted]">
              Tecnologia com alma criativa. Construímos produtos, consultamos com
              impacto e modernizamos utilities.
            </p>
            <LocaleToggle />
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-eyebrow text-[--color-text-muted] mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[--color-text] hover:text-[--color-accent-yellow] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 border-t border-[--color-border] pt-8 text-xs text-[--color-text-subtle]">
          <p>© {year} Tingle Digital. Todos os direitos reservados.</p>
          <p>CNPJ · contato@tingledigital.com</p>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: add Footer with columns and brand block"
```

---

## Task 18: Update root layout to include Header + Footer

**Files:**

- Modify: `app/layout.tsx`

- [ ] **Step 1: Update root layout**

Replace `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tingle Digital — Tecnologia com alma criativa",
    template: "%s · Tingle Digital",
  },
  description:
    "Construímos produtos, consultamos com impacto e modernizamos utilities com AI + IoT. Tecnologia com alma criativa.",
  metadataBase: new URL("https://tingledigital.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[--color-bg] text-[--color-text] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[--color-accent-yellow] focus:px-4 focus:py-2 focus:text-[--color-bg]"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
pnpm tsc --noEmit && pnpm next build --no-lint
```

Expected: success.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: wire Header + Footer + skip-link into root layout"
```

---

## Task 19: Create `/design-system` preview page

**Files:**

- Create: `app/design-system/page.tsx`

- [ ] **Step 1: Create the preview page**

Create `app/design-system/page.tsx`:

```typescript
import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Pill } from "@/components/primitives/pill";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/motion/marquee";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <Eyebrow color="yellow">Design System v1</Eyebrow>
          <h1 className="text-display-1 mt-4 text-balance">
            Bold Kinetic foundations
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[--color-text-muted]">
            Tokens, primitives, layout and motion components used across the site.
            This page is internal and not indexed.
          </p>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>01 · Colors</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Electric Multi-Accent</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: "yellow", label: "Consultoria" },
              { name: "pink", label: "Eter" },
              { name: "cyan", label: "Cognita" },
              { name: "lime", label: "Utilities" },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-[--color-border] p-4"
              >
                <div
                  className="aspect-square w-full rounded-lg mb-3"
                  style={{ backgroundColor: `var(--color-accent-${c.name})` }}
                />
                <p className="text-eyebrow">{c.name}</p>
                <p className="text-sm text-[--color-text-muted] mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>02 · Typography</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Inter family</h2>
          <div className="space-y-8">
            <div>
              <p className="text-eyebrow text-[--color-text-subtle] mb-2">
                display-1 / Inter 900
              </p>
              <p className="text-display-1">Tecnologia com alma.</p>
            </div>
            <div>
              <p className="text-eyebrow text-[--color-text-subtle] mb-2">
                display-2 / Inter 800
              </p>
              <p className="text-display-2">Construímos futuros.</p>
            </div>
            <div>
              <p className="text-eyebrow text-[--color-text-subtle] mb-2">
                display-3 / Inter 700
              </p>
              <p className="text-display-3">Para C-level que escolhe parceiros.</p>
            </div>
            <div>
              <p className="text-eyebrow text-[--color-text-subtle] mb-2">
                body / Inter 400
              </p>
              <p className="max-w-2xl text-base text-[--color-text]">
                Construímos produtos, consultamos com impacto e modernizamos
                utilities com AI + IoT. Tecnologia com alma criativa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>03 · Buttons</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Variants & sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>04 · Pills & Eyebrows</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Tags por pilar</h2>
          <div className="flex flex-wrap gap-3">
            <Pill color="yellow">Consultoria</Pill>
            <Pill color="pink">Eter</Pill>
            <Pill color="cyan">Cognita</Pill>
            <Pill color="lime">Utilities</Pill>
            <Pill>Default</Pill>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>05 · Marquee</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Texto rolando lateral</h2>
        </Container>
        <Marquee className="border-y border-[--color-border] py-6">
          {["50+ PROJETOS", "4 PRODUTOS", "10.000+ PESSOAS", "6 ANOS", "★"].map(
            (t) => (
              <span
                key={t}
                className="text-display-3 text-[--color-text-muted] flex items-center gap-12"
              >
                {t}
              </span>
            )
          )}
        </Marquee>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>06 · Animated counters</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Conta ao entrar no viewport</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={50} suffix="+" />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-2">
                Projetos
              </p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={4} />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-2">
                Produtos
              </p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={10000} suffix="+" />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-2">
                Pessoas
              </p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={6} suffix="+" />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-2">Anos</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>07 · Text reveal</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Palavras animam ao entrar</h2>
          <TextReveal
            as="h2"
            text="Tecnologia com alma criativa para quem constrói o amanhã."
            className="text-display-2 max-w-3xl text-balance"
          />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Replace default home with a redirect note**

Replace `app/page.tsx`:

```typescript
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Section spacing="xl">
      <Container>
        <Eyebrow color="yellow">Em construção · Plan 2</Eyebrow>
        <h1 className="text-display-1 mt-4 text-balance">
          Tingle Digital.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[--color-text-muted]">
          A home definitiva é construída no Plano 2. Por enquanto, confira o{" "}
          <Link
            href="/design-system"
            className="text-[--color-accent-yellow] underline underline-offset-4"
          >
            design system
          </Link>
          .
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/design-system">Ver design system</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Smoke test in browser**

```bash
pnpm dev
```

Open:

- `http://localhost:3000/` — placeholder home renders, link to design system works
- `http://localhost:3000/design-system` — all 7 component sections render correctly

Verify:

- Inter font loaded
- Header is fixed at top, becomes blurred on scroll
- Footer renders at bottom with columns
- Marquee animates
- Counters animate from 0 when scrolled into view
- TextReveal animates word-by-word
- All buttons are clickable and styled correctly

Ctrl+C to stop.

- [ ] **Step 4: Build & verify production output**

```bash
pnpm next build
```

Expected: build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add app/design-system/page.tsx app/page.tsx
git commit -m "feat: add /design-system preview page and placeholder home"
```

---

## Task 20: Setup Prettier and `.gitignore` polish

**Files:**

- Create: `.prettierrc.json`
- Modify: `.gitignore`

- [ ] **Step 1: Create Prettier config**

Create `.prettierrc.json`:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 90,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- [ ] **Step 2: Append project-specific ignores**

Append to `.gitignore`:

```
# project-specific
.env.local
.env*.local
.vercel
.idea
.vscode
*.tmp
```

- [ ] **Step 3: Format codebase**

```bash
pnpm dlx prettier --write "**/*.{ts,tsx,json,css,md}" --ignore-path .gitignore
```

- [ ] **Step 4: Verify build still works after formatting**

```bash
pnpm tsc --noEmit && pnpm next build --no-lint
```

Expected: success.

- [ ] **Step 5: Commit**

```bash
git add .prettierrc.json .gitignore
git commit -m "chore: add Prettier config with Tailwind plugin"
git add -A
git commit -m "chore: format codebase with Prettier"
```

---

## Task 21: Create `README.md`

**Files:**

- Create: `README.md`

- [ ] **Step 1: Write README**

Create `README.md`:

```markdown
# Tingle Digital

Site institucional da Tingle Digital — agência brasileira de tecnologia criativa.

## Stack

- Next.js 15 (App Router, RSC, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui · Framer Motion · Lucide React
- next-intl (PT-BR + EN) — wired in Plan 4
- Sanity (cases CMS) — wired in Plan 3
- pnpm

## Desenvolvimento

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

Abra `http://localhost:3000`.

- `/` — home placeholder (definitiva no Plan 2)
- `/design-system` — preview de tokens, primitives, motion components

## Estrutura

\`\`\`
app/ rotas Next.js (App Router)
components/
ui/ shadcn primitives
primitives/ Container, Section, Eyebrow, Pill
motion/ Marquee, AnimatedCounter, TextReveal
layout/ Header, Footer, LocaleToggle
lib/ utils, fonts
docs/superpowers/
specs/ design specs
plans/ implementation plans
\`\`\`

## Comandos

\`\`\`bash
pnpm dev # dev server (Turbopack)
pnpm build # production build
pnpm tsc --noEmit # typecheck
pnpm lint # ESLint
\`\`\`

## Deploy

- Vercel (preview deploys automáticos em cada push)
- Domínio: tingledigital.com (DNS na Hostinger, apontando para Vercel)

## Documentação interna

Spec & plans em `docs/superpowers/`. Atualmente:

- **Plan 1 (este):** Foundation + Design System
- **Plan 2:** Marketing pages PT (Home + 7 páginas)
- **Plan 3:** Sanity CMS + Cases
- **Plan 4:** i18n + Polish + Launch
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with stack, structure, and plan roadmap"
```

---

## Task 22: Initialize GitHub remote and push

> **Note:** This task requires the user to be authenticated with `gh` CLI and to have permission to create repos.

**Files:** none (remote operation)

- [ ] **Step 1: Verify gh authenticated**

```bash
gh auth status
```

Expected: logged in as user. If not, run `gh auth login` first.

- [ ] **Step 2: Create remote repo**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
gh repo create tingledigital --private --source=. --remote=origin --description "Tingle Digital — institutional website (Next.js 15)"
```

- [ ] **Step 3: Push initial branch**

```bash
git branch -M main
git push -u origin main
```

- [ ] **Step 4: Verify push**

```bash
gh repo view --web
```

Browser opens the new repo. Verify all files pushed.

---

## Task 23: Setup Vercel deployment

> **Note:** This task requires the user to have a Vercel account and `vercel` CLI installed, or to do this via web UI.

**Files:** none initially (CLI may create `.vercel/`)

- [ ] **Step 1: Install Vercel CLI if needed**

```bash
pnpm dlx vercel --version
```

If not installed, this auto-installs. Otherwise verify version.

- [ ] **Step 2: Link project to Vercel**

```bash
cd /Users/dreyfusvasconcelos/apps/tingledigital
pnpm dlx vercel link
```

Follow prompts:

- Set up and deploy: Yes
- Which scope: select user's personal account or team
- Link to existing project: No
- Project name: `tingledigital`
- Directory: `.`
- Framework auto-detected: Next.js

- [ ] **Step 3: Deploy preview**

```bash
pnpm dlx vercel
```

This creates a preview deploy. Note the preview URL printed in output.

- [ ] **Step 4: Open preview URL and verify**

Open the printed `https://tingledigital-xxx.vercel.app` URL.

Verify:

- `/` renders correctly
- `/design-system` renders all 7 sections
- No console errors
- Header fixed and scroll-elevated
- Animations work

- [ ] **Step 5: Promote to production**

```bash
pnpm dlx vercel --prod
```

Note the production URL: `https://tingledigital.vercel.app` (or similar).

- [ ] **Step 6: Commit `.vercel/`**

The `.vercel/` directory should already be in `.gitignore` (added in Task 20). Verify:

```bash
cat .gitignore | grep vercel
```

Expected: `.vercel` listed.

If not, add it:

```bash
echo "\n.vercel" >> .gitignore
git add .gitignore && git commit -m "chore: ignore .vercel/"
git push
```

---

## Task 24: Run Lighthouse audit

**Files:** none (verification only)

- [ ] **Step 1: Run Lighthouse on preview URL**

```bash
pnpm dlx -p @lhci/cli@latest lhci collect \
  --url=https://tingledigital.vercel.app/ \
  --url=https://tingledigital.vercel.app/design-system \
  --numberOfRuns=1
```

(Alternatively, use Chrome DevTools Lighthouse tab manually.)

- [ ] **Step 2: Verify scores meet target**

Open the resulting HTML reports in `.lighthouseci/`.

Expected (for both URLs, mobile config):

- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 90 (acceptable — content is sparse on placeholder)

If any score fails, debug:

- Performance: check image sizes, font loading, JS bundle (`pnpm next build` → check `.next/analyze` if needed)
- Accessibility: missing alt, low contrast, missing focus
- Best Practices: HTTPS, console errors
- SEO: meta tags, mobile viewport

- [ ] **Step 3: Document scores**

Create `docs/superpowers/plans/plan-1-lighthouse-baseline.md`:

```markdown
# Plan 1 — Lighthouse Baseline

URL: https://tingledigital.vercel.app/design-system
Date: <fill in today's date>
Config: mobile, slow 4G

- Performance: <score>
- Accessibility: <score>
- Best Practices: <score>
- SEO: <score>

Notes:

- <any flagged issues and mitigation>
```

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/plans/plan-1-lighthouse-baseline.md
git commit -m "docs: record Lighthouse baseline after Plan 1"
git push
```

---

## Acceptance Criteria

Plan 1 is complete when all of these are true:

- [ ] Next.js 15 project scaffolded at `/Users/dreyfusvasconcelos/apps/tingledigital/`
- [ ] TypeScript strict mode enabled, `pnpm tsc --noEmit` passes
- [ ] All dependencies installed (framer-motion, lucide-react, cva, etc.)
- [ ] Design tokens defined in `app/globals.css`
- [ ] Inter font loaded via `next/font`, no layout shift
- [ ] shadcn/ui initialized, custom Button created
- [ ] Primitives created: Container, Section, Eyebrow, Pill
- [ ] Motion components created: Marquee, AnimatedCounter, TextReveal
- [ ] Layout components created: Header (scroll-elevated), Footer, LocaleToggle
- [ ] Root layout wires Header + Footer + skip-link
- [ ] `/design-system` preview page renders all components correctly
- [ ] `pnpm next build` succeeds with no errors
- [ ] Code formatted with Prettier
- [ ] README written
- [ ] GitHub repo created and pushed
- [ ] Vercel project linked, preview + production deploys working
- [ ] Lighthouse: Performance ≥ 95 on both `/` and `/design-system` (mobile)
- [ ] No console errors in browser

---

## Self-review

After all tasks complete, verify against the spec:

| Spec Section          | Plan Coverage                                                          |
| --------------------- | ---------------------------------------------------------------------- |
| 4.1 Bold Kinetic      | Motion components (Marquee, TextReveal) — ✅                           |
| 4.2 Palette           | Tokens in `globals.css` — ✅                                           |
| 4.3 Typography        | Inter via `next/font` + utility classes — ✅                           |
| 4.4 Spacing           | Section spacing variants — ✅                                          |
| 4.5 Motion principles | Marquee + reveals + counters + reduced-motion media query — ✅         |
| 4.6 Animation libs    | Framer Motion installed — ✅                                           |
| 6 Stack               | All deps installed except next-intl/Sanity (deferred to Plan 3/4) — ✅ |
| 8 Folder structure    | Matches plan — ✅                                                      |
| 9 Performance budget  | Lighthouse target enforced — ✅                                        |
| 10 Accessibility      | Skip-link, prefers-reduced-motion, focus rings — ✅                    |

Items deliberately deferred to later plans:

- next-intl wiring → Plan 4
- Sanity setup → Plan 3
- MDX content → Plan 2
- Resend email → Plan 2 (form)
- Analytics → Plan 4
- Full SEO metadata → Plan 4
- Domain switchover → Plan 4

---

## Next plan

After Plan 1 acceptance, write **Plan 2: Marketing Pages PT** covering the Home plus `/cognita`, `/eter`, `/consultoria`, `/utilities`, `/sobre`, and `/contato`.
