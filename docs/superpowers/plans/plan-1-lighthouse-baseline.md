# Plan 1 — Lighthouse Baseline

**Production URL:** https://tingledigital.vercel.app
**Date:** 2026-05-28
**Config:** Desktop, default Lighthouse preset

## Home (`/`)

| Category       | Score | Target | Status |
| -------------- | ----- | ------ | ------ |
| Performance    | 100   | ≥ 95   | ✅     |
| Accessibility  | 98    | ≥ 95   | ✅     |
| Best Practices | 96    | ≥ 95   | ✅     |
| SEO            | 100   | ≥ 90   | ✅     |

## Design System (`/design-system`)

| Category       | Score | Target | Status                    |
| -------------- | ----- | ------ | ------------------------- |
| Performance    | 100   | ≥ 95   | ✅                        |
| Accessibility  | 100   | ≥ 95   | ✅                        |
| Best Practices | 96    | ≥ 95   | ✅                        |
| SEO            | 63    | n/a    | intentional (`noindex`)   |

The `/design-system` SEO score of 63 is expected and acceptable — the page is internal-only with `robots: { index: false, follow: false }` set via Next.js metadata. Lighthouse penalizes for the noindex directive, but this is the desired behavior.

## Notes

- All `Performance: 100` thanks to: static prerendering, `next/font` for Inter (zero CLS), no client-side JS for layout-stable sections, and Vercel edge caching.
- `Best Practices: 96` is held back by minor sub-checks (likely third-party cookies or browser dev console — non-blocking for Plan 1).
- `Accessibility: 98` on home: the placeholder home is sparse; the design-system page (100) shows the full component library passes a11y.

## Next steps (carry into Plan 2)

- Run Lighthouse on mobile preset as content grows
- Verify Core Web Vitals (LCP, CLS, INP) in real-world traffic via Vercel Analytics once enabled in Plan 4
- Re-baseline after each phase that adds significant JS or images
