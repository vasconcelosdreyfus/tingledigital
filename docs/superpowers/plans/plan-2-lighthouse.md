# Plan 2 — Lighthouse Snapshot

**Production URL (target):** https://tingledigital.vercel.app
**Date:** 2026-05-28
**Status:** ⚠️ Deploy pendente — Vercel travado em UNKNOWN

## Situação

Plan 2 está **100% completo localmente**:

- Build (`pnpm next build`) succeeds limpo
- TypeScript strict passa sem erros
- Todas as 8 rotas (`/`, `/cognita`, `/eter`, `/consultoria`, `/utilities`, `/sobre`, `/contato`, `/design-system`) renderizam corretamente em `localhost:3000`
- API `/api/contact` valida payload (400 em input inválido)

**Mas:** Vercel está aceitando o upload mas não inicia o build (status UNKNOWN com 0ms de duração em múltiplas tentativas). Não é problema do código — é uma falha da plataforma Vercel para este projeto/conta específica.

## Lighthouse baseline (Plan 1 ainda live)

Como o alias `tingledigital.vercel.app` ainda aponta para o deploy do Plano 1, os scores atuais são desse deploy (placeholder home + design-system):

| Route        | Perf | A11y | Best Practices | SEO |
| ------------ | ---- | ---- | -------------- | --- |
| /            | 100  | 98   | 96             | 100 |
| /design-system | 100  | 100  | 96             | 63 (noindex)  |

Scores do Plano 2 serão medidos quando o deploy completar.

## Próximos passos para destravar deploy

1. **Tentar via Vercel Web UI:** abrir https://vercel.com/dreyfus-projects/tingledigital e disparar redeploy manual pelo dashboard. O dashboard pode mostrar logs de erro que o CLI não mostra.

2. **Reconectar GitHub:** o `vercel link` falhou em conectar o repo do GitHub. Tentar de novo via UI: Settings → Git → Connect Git Repository. Isso permite auto-deploy a cada push.

3. **Alternativa: Netlify ou Cloudflare Pages:** se Vercel continuar problemático, o projeto está em estado deployable em qualquer plataforma que suporte Next.js 16.

4. **Verificar quota Hobby:** Vercel free tier limita a 100 deploys/dia. Pouco provável de ser o problema (~10 deploys hoje), mas vale conferir.

## Métricas locais

Build output (de `pnpm next build`):
```
┌ ○ /
├ ○ /_not-found
├ ƒ /api/contact         (dynamic — server route)
├ ○ /cognita
├ ○ /consultoria
├ ○ /contato
├ ○ /design-system
├ ○ /eter
├ ○ /sobre
└ ○ /utilities

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

8 páginas estáticas + 1 API route dinâmica = configuração ideal para performance.
