# Tingle Digital — Redesign Spec

**Data:** 2026-05-27
**Status:** Design approved, pending implementation plan
**Owner:** Dreyfus Vasconcelos

---

## 1. Visão Geral

Redesign completo do site institucional `tingledigital.com`. O site atual é WordPress, com conteúdo razoável mas visual que não comunica a sofisticação técnica da Tingle Digital. O novo site deve projetar **autoridade** para executivos C-level avaliando a Tingle como parceiro estratégico de tecnologia.

### Posicionamento central
> **Tingle Digital — Tecnologia com alma criativa.**
> Construímos produtos (Cognita, Eter), consultamos com impacto (Casa Brasil) e modernizamos utilities com AI + IoT.

### Objetivos
- **Primário:** Projetar autoridade técnica e credibilidade para C-level decisores
- **Secundário:** Apresentar Cognita e Eter como vitrines de capacidade
- **Terciário:** Comunicar diferencial dual: criativo + técnico ("alma criativa")

### Não-objetivos (v1)
- Blog próprio (cases ocupam esse papel)
- Área logada / dashboard
- E-commerce
- Integração com CRM (apenas form → email)

---

## 2. Público-alvo

**Persona primária:** Executivo C-level (CEO, CTO, Diretor de Inovação) de empresa média/grande, brasileiro, considerando a Tingle como parceiro para projeto estratégico de tecnologia. Busca: provas de capacidade técnica, cases reais com resultados, autoridade do time.

**Persona secundária:** Gestor público / fundação social (perfil Casa Brasil) buscando parceria de impacto social com viés tecnológico.

---

## 3. Sitemap

```
/                       Home (long-form hub)
/cognita                Página dedicada ao produto Cognita
/eter                   Página dedicada ao produto Eter
/consultoria            Braço de consultoria + cases sociais
/utilities              P&D + Hyperautomation + Improvements
/cases                  Listagem de cases (Sanity-managed)
/cases/[slug]           Detalhe de cada case (Sanity-managed)
/sobre                  Quem somos, valores, time, números
/contato                Formulário + canais diretos
```

Idiomas: `/pt/...` (padrão, sem prefixo) e `/en/...`.

---

## 4. Sistema de Design

### 4.1 Direção visual: Bold Kinetic

Dark premium como base, com **acentos vibrantes alternando entre seções** para criar a vibe kinetic. Cada pilar de serviço tem uma cor "ownada" que vira código visual ao longo do site.

### 4.2 Paleta — Electric Multi-Accent

```
--bg            #0A0A0F   preto azulado profundo, base
--surface       #15151F   cards, elevações
--border        #2A2A35   linhas, dividers
--text          #F5F5FA   corpo principal
--text-muted    #888899   legendas, secondary
--accent-yellow #FFEB00   CTAs principais, consultoria
--accent-pink   #FF2D75   Eter (produto)
--accent-cyan   #00F0FF   Cognita (produto)
--accent-lime   #B8FF00   Utilities (energia)
```

### 4.3 Tipografia — Inter mono-família

```
Display H1:     Inter 900, tracking -2px, line-height 0.95
Display H2:     Inter 800, tracking -1.5px
H3:             Inter 700
Body:           Inter 400, 16px, line-height 1.6
Caption/UI:     Inter 500, 13px
Eyebrow:        Inter 600 uppercase, 11px, tracking +1px
```

Self-hosted via `next/font/google` para zero CLS.

### 4.4 Spacing (Tailwind base 4px)

```
Sections:   py-32 (desktop) / py-20 (mobile)
Components: gap-8, p-6 default
Inline:     gap-3, gap-4
Container:  max-w-7xl, px-6 lg:px-8
```

### 4.5 Motion principles (Bold Kinetic)

1. **Marquees** entre seções (logos clientes, tags de serviços)
2. **Text reveal** — palavras-chave aparecem com slide+fade ao entrar viewport
3. **Color flash** — acentos "piscam" em hover/click (200ms)
4. **Sticky number counters** — estatísticas animam 0→valor quando visíveis
5. **Cursor reactivity** — gradient blob sutil seguindo cursor no hero (desktop only)
6. **Section hue shifts** — fundo muda de tom sutilmente entre seções
7. **`prefers-reduced-motion` respeitado** — desliga marquees e parallax, mantém fades

### 4.6 Bibliotecas de animação

- Framer Motion (componentes React)
- tailwindcss-animate (utilities)
- GSAP apenas para timelines complexas (provável: 1-2 momentos)

---

## 5. Estrutura das Páginas

### 5.1 `/` Home (long-form hub)

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | Hero | Logo + nav, headline gigante "Tecnologia com alma", CTA, cursor-reactive blob |
| 2 | Numbers Marquee | "50+ PROJETOS · 4 PRODUTOS · 10K+ PESSOAS · 6 ANOS" lateral infinito |
| 3 | Pilares (bento) | 4 cards: Cognita, Eter, Consultoria, Utilities (cores ownadas) |
| 4 | Produtos destaque | Split Cognita + Eter, mockup + CTA |
| 5 | Cases preview | 3 cases destacados (Casa Brasil, Hubz, +1) |
| 6 | Manifesto | Texto editorial grande: por que existimos |
| 7 | Logos clientes | Marquee com logos parceiros |
| 8 | CTA final | "Vamos construir algo?" → `/contato` |
| 9 | Footer | Colunas, social, idioma, ano |

### 5.2 `/cognita`

| # | Seção |
|---|-------|
| 1 | Hero do produto (headline + tagline + mockup + CTA demo) |
| 2 | O problema (texto + número) |
| 3 | A solução (grid de 4-6 features) |
| 4 | Demo visual (sequência scroll-driven) |
| 5 | Cases que usam Cognita (2-3 cards) |
| 6 | CTA final |

### 5.3 `/eter`

Mesma estrutura de `/cognita`, cor ownada pink, narrativa própria.

### 5.4 `/consultoria`

| # | Seção |
|---|-------|
| 1 | Hero: "Consultoria com impacto social e estratégico" |
| 2 | Método em 4 etapas (timeline horizontal) |
| 3 | Casa Brasil em destaque (case-story expandido) |
| 4 | Outros tipos de projeto (grid: negócios, social, marketing, eventos) |
| 5 | Depoimentos (2-3 quotes grandes) |
| 6 | CTA |

### 5.5 `/utilities`

| # | Seção |
|---|-------|
| 1 | Hero: "Modernizando energia com AI + IoT" |
| 2 | 3 pilares (P&D, Hyperautomation, Improvements) |
| 3 | Tecnologias (AI · IoT · Blockchain · ML — grade animada) |
| 4 | Cases utilities (Hubz e outros) |
| 5 | Depoimento Zé Lavaquial em destaque |
| 6 | CTA |

### 5.6 `/cases`

- Grid filtrável por pilar (Produtos · Social · Utilities · Marketing)
- Card: foto, cliente, tag, resultado-chave
- Hover: glow na cor do pilar

### 5.7 `/cases/[slug]`

- Layout editorial: hero · contexto · desafio · solução · resultado (números) · galeria · próximo case

### 5.8 `/sobre`

| # | Seção |
|---|-------|
| 1 | Hero (quem somos + foto do time) |
| 2 | Manifesto / valores (3-4 princípios) |
| 3 | Time (grid com fotos e roles) |
| 4 | Linha do tempo (6+ anos em milestones) |
| 5 | Onde estamos (mapa/endereço) |
| 6 | CTA |

### 5.9 `/contato`

| # | Seção |
|---|-------|
| 1 | Hero "Vamos conversar" |
| 2 | Formulário (nome, email, empresa, mensagem, tipo de projeto) |
| 3 | Canais diretos (email, WhatsApp, LinkedIn) |
| 4 | Endereço + mapa |

---

## 6. Stack Técnica

```
Framework:      Next.js 15 (App Router, RSC, Turbopack)
Linguagem:      TypeScript (strict)
Estilização:    Tailwind CSS v4
UI primitives:  shadcn/ui (selectivo)
Animação:       Framer Motion + tailwindcss-animate
Tipografia:     Inter via next/font
Ícones:         Lucide React
Forms:          react-hook-form + zod
i18n:           next-intl
CMS:            Sanity v3
MDX:            @next/mdx para páginas-base
Email:          Resend
Analytics:      Vercel Analytics + Plausible
Deploy:         Vercel
DNS:            Hostinger → aponta para Vercel
```

### 6.1 Por que essa stack

- **Next.js 15:** Melhor DX, melhor performance, SSR/ISR/SSG nativos, ecossistema Vercel.
- **Sanity v3:** CMS headless maduro, custom studio, grátis até 3 usuários e 100k API calls/mês.
- **next-intl:** i18n com RSC support, sem hacks.
- **Framer Motion:** Animações declarativas, integração natural com React.
- **MDX + Sanity híbrido:** Páginas que mudam pouco viram MDX (no git, com histórico). Conteúdo dinâmico (cases) vai pro CMS para edição não-técnica.

---

## 7. Content Model

### 7.1 MDX (em `content/`)

```
content/
├── home/
│   ├── home.pt.mdx
│   └── home.en.mdx
├── pages/
│   ├── cognita.pt.mdx       │  cognita.en.mdx
│   ├── eter.pt.mdx          │  eter.en.mdx
│   ├── consultoria.pt.mdx   │  consultoria.en.mdx
│   ├── utilities.pt.mdx     │  utilities.en.mdx
│   ├── sobre.pt.mdx         │  sobre.en.mdx
│   └── contato.pt.mdx       │  contato.en.mdx
└── manifesto/
    └── values.pt.mdx
```

### 7.2 Sanity schemas

```typescript
case: {
  title: localeString,
  slug: slug,
  client: string,
  pillar: 'produtos' | 'social' | 'utilities' | 'marketing',
  heroImage: image,
  excerpt: localeText,
  context: localeBlockContent,
  challenge: localeBlockContent,
  solution: localeBlockContent,
  results: [{ label, value, unit }],
  gallery: [image],
  testimonial: { quote: localeText, author, role },
  publishedAt: datetime,
  featured: boolean,
}

testimonial: {
  quote: localeText,
  author: string,
  role: string,
  company: string,
  photo: image,
}

client: {
  name: string,
  logo: image,  // white version, SVG preferred
  url: url,
}
```

### 7.3 i18n strategy

- **URLs:** `/pt/...` (padrão, sem prefixo) e `/en/...`
- **Conteúdo dinâmico (Sanity):** campos `_pt` e `_en` em todos os textos
- **Conteúdo estático (UI labels):** `messages/pt.json` e `messages/en.json`
- **Toggle no header:** `PT | EN` discreto, persiste em cookie

---

## 8. Estrutura de Pastas

```
tingledigital/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── cognita/page.tsx
│   │   ├── eter/page.tsx
│   │   ├── consultoria/page.tsx
│   │   ├── utilities/page.tsx
│   │   ├── cases/page.tsx
│   │   ├── cases/[slug]/page.tsx
│   │   ├── sobre/page.tsx
│   │   └── contato/page.tsx
│   ├── api/
│   │   └── contact/route.ts
│   └── globals.css
├── components/
│   ├── ui/                  shadcn primitives
│   ├── sections/            Hero, Bento, Marquee, etc.
│   ├── animations/          AnimatedCounter, TextReveal, etc.
│   └── layout/              Header, Footer, Nav
├── content/                 MDX files
├── studio/                  Sanity Studio
├── lib/
│   ├── sanity.ts
│   ├── i18n.ts
│   └── utils.ts
├── messages/
│   ├── pt.json
│   └── en.json
├── public/
│   └── brand/               logo SVG
├── docs/
│   └── superpowers/
│       └── specs/
└── next.config.ts
```

---

## 9. Performance Budget

- **LCP** < 2.0s (em mobile 3G simulado)
- **CLS** < 0.05
- **TBT** < 200ms
- **INP** < 200ms
- **Lighthouse:** Performance ≥ 90, A11y ≥ 95, SEO ≥ 95, Best Practices ≥ 95

### Estratégias

- `next/image` com AVIF/WebP automático
- Self-hosted fonts via `next/font` (zero CLS)
- Lazy-load Framer Motion fora do viewport inicial
- Cases page: ISR (revalidate 60s)
- Static everywhere else
- Disable animações pesadas em low-end (`navigator.deviceMemory < 4`)

---

## 10. Acessibilidade

- WCAG 2.1 AA mínimo
- Contraste verificado em todos os textos (foco em acentos neon sobre dark)
- Foco visível em todos os interactives
- `prefers-reduced-motion` desliga marquees, parallax e cursor blob
- Alt text em todas as imagens
- Form labels associados, error messages claros
- Keyboard nav 100% funcional
- Skip-to-content link no Header

---

## 11. Roadmap de Implementação

### Fase 1 — Foundation
- Scaffold Next.js + TypeScript + Tailwind
- Configurar shadcn/ui, Framer Motion, next-intl
- Git + GitHub + Vercel (preview deploys)

### Fase 2 — Design System
- Tokens CSS + Tailwind config
- Inter via `next/font`
- Componentes base: Button, Container, Section, Eyebrow, Marquee, AnimatedCounter, TextReveal
- Layout: Header (toggle PT/EN), Footer

### Fase 3 — Home
- 9 seções
- MDX content em PT (copy gerada)
- Animações Framer Motion
- 21st.dev MCP: hero blob, bento, marquee logos

### Fase 4 — Páginas de Produto e Institucionais
- `/cognita` e `/eter`
- `/consultoria` e `/utilities`
- `/sobre` e `/contato` (forms com Resend)

### Fase 5 — Cases via Sanity
- Setup Sanity Studio
- Schemas
- `/cases` listagem + `/cases/[slug]` detalhe
- Seed: 3 cases (Casa Brasil, Hubz, +1)

### Fase 6 — i18n + Polish + Deploy
- Tradução EN completa
- SEO (metadata, OG, sitemap, robots)
- Analytics (Vercel + Plausible)
- Lighthouse audit + correções
- DNS Hostinger → Vercel
- Lançamento em `tingledigital.com`

---

## 12. Critérios de Aceitação

- [ ] Lighthouse: Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] Mobile responsive sem quebras a partir de 375px
- [ ] PT e EN ambos funcionando com toggle
- [ ] Form de contato envia email real (Resend)
- [ ] CMS Sanity acessível e editável
- [ ] Cases dinâmicos renderizando
- [ ] `prefers-reduced-motion` respeitado
- [ ] Sem console errors em produção
- [ ] DNS apontando para Vercel
- [ ] HTTPS via Vercel automático

---

## 13. Riscos & Mitigações

| Risco | Probabilidade | Mitigação |
|-------|---------------|-----------|
| 21st.dev gerar componentes que não casam com paleta | Média | Passar tokens de cor no prompt; refinar via `component_refiner` |
| Animações pesadas matarem performance mobile | Média | Lazy-load Framer; desabilitar em low-end |
| Sanity grátis bater limite | Baixa | Projeto pequeno, free tier suficiente por anos |
| DNS Hostinger demorar pra propagar | Média | Usar `staging.tingledigital.com` antes do switch final |
| Cases com pouco conteúdo na launch | Alta | Seed 3 cases sólidos antes de divulgar |

---

## 14. Decisões Tomadas

| Decisão | Escolha | Por quê |
|---------|---------|---------|
| Objetivo principal | Autoridade/credibilidade | Público C-level pesquisa fornecedores |
| Público primário | C-level / diretores | Decisores de parcerias estratégicas |
| Hero de serviços | Produtos próprios (Cognita, Eter) | Provam capacidade técnica |
| Estrutura | Hub + páginas dedicadas (8 rotas) | Melhor SEO, profundidade onde importa |
| Visual | Bold Kinetic + dark | Impactante, com movimento (pedido explícito) |
| Paleta | Electric Multi-Accent | Cores ownadas por pilar viram código visual |
| Tipografia | Inter mono-família | Coesão máxima, padrão tech moderno |
| Idiomas | PT-BR + EN | Expansão internacional preparada |
| Copy | Eu escrevo | Cliente não tem material pronto |
| Brand | Mantém logo, redesigna resto | Logo já reconhecido, resto é livre |
| Deploy | Vercel | Melhor stack pra Next.js, grátis no início |
| DNS | Hostinger (mantém) | Dono já tem, basta apontar |
| Stack | Next.js 15 + TS + Tailwind v4 | State of the art para marketing sites |
| Content | MDX + Sanity híbrido | Estático onde muda pouco, CMS pra cases/blog |
| i18n | next-intl | RSC-compatible, idiomático |
| Email | Resend | Simples, generoso free tier |

---

## 15. Próximo Passo

Invocar `superpowers:writing-plans` para transformar este design em plano de implementação detalhado e executável.
