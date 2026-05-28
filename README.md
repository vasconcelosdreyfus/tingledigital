# Tingle Digital

Site institucional da Tingle Digital — agência brasileira de tecnologia criativa.

## Stack

- Next.js 16 (App Router, RSC, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui · Framer Motion · Lucide React
- next-intl (PT-BR + EN) — wired in Plan 4
- Sanity (cases CMS) — wired in Plan 3
- pnpm

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

- `/` — home placeholder (definitiva no Plan 2)
- `/design-system` — preview de tokens, primitives, motion components

## Estrutura

```
app/                  rotas Next.js (App Router)
components/
  ui/                 shadcn primitives
  primitives/         Container, Section, Eyebrow, Pill
  motion/             Marquee, AnimatedCounter, TextReveal
  layout/             Header, Footer, LocaleToggle
lib/                  utils, fonts
docs/superpowers/
  specs/              design specs
  plans/              implementation plans
```

## Comandos

```bash
pnpm dev              # dev server (Turbopack)
pnpm build            # production build
pnpm tsc --noEmit     # typecheck
pnpm lint             # ESLint
```

## Deploy

- Vercel (preview deploys automáticos em cada push)
- Domínio: tingledigital.com (DNS na Hostinger, apontando para Vercel)

## Documentação interna

Spec & plans em `docs/superpowers/`. Atualmente:

- **Plan 1 (atual):** Foundation + Design System
- **Plan 2:** Marketing pages PT (Home + 7 páginas)
- **Plan 3:** Sanity CMS + Cases
- **Plan 4:** i18n + Polish + Launch
