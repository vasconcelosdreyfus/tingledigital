# Plan 2 — Lighthouse Snapshot

**Production URL:** https://tingledigital.vercel.app
**Date:** 2026-05-28
**Config:** Desktop, default Lighthouse preset

## Scores

| Route        | Perf | A11y | Best Practices | SEO |
| ------------ | ---- | ---- | -------------- | --- |
| /            | 99   | 96   | 96             | 100 |
| /cognita     | 100  | 96   | 96             | 100 |

**Targets:** Performance ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 90 — todos passaram ✅

## Notas

- Home (99) tem 1 ponto a menos que /cognita por causa do CursorBlob com pointermove listener (mínima perda de TBT, aceitável)
- A11y 96 (target ≥ 95) — passa mas há pequenas oportunidades em contraste de elementos com `text-[--color-text-subtle]`
- Best Practices 96 (target ≥ 95) — passa, geralmente segurada por sub-checks de third-party cookies do Vercel
- SEO 100 em ambos — metadata, OpenGraph, sitemap implícito e lang="pt-BR" configurados corretamente

## Resolução do bloqueio de deploy

Plan 2 ficou ~1h travado em status UNKNOWN no Vercel. Causa raiz: o email do commit do git (`127347776+vasconcelosdreyfus@users.noreply.github.com` — email noreply do GitHub) não estava cadastrado como membro do team `Dreyfus' projects` na Vercel.

Fix aplicado:
1. Identificado email da conta Vercel via API: `vasconcelos.dreyfus@gmail.com`
2. `git config user.email "vasconcelos.dreyfus@gmail.com"`
3. `git commit --amend --reset-author --no-edit`
4. `git push --force-with-lease`
5. `vercel --prod --yes` → READY em ~40s

Para evitar repetir: o `.gitconfig` local agora aponta para o email correto. Próximos commits no projeto irão direto.

## Build output (Vercel)

```
┌ ○ /                  (home long-form, 9 seções, copy PT-BR)
├ ○ /_not-found
├ ƒ /api/contact       (server route, zod + Resend)
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

8 páginas estáticas + 1 API route dinâmica — configuração ideal.
