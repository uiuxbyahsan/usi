# USI Insurance Services — Homepage Redesign (Concept)

A single-page, production-quality homepage redesign concept for USI Insurance
Services, built to the supplied speculative brief. **Not affiliated with or
endorsed by USI** — this is an unsolicited design concept.

## Stack

- **Next.js 14** (App Router) with static export (`output: 'export'`)
- **Tailwind CSS** (design tokens wired into `tailwind.config.ts`)
- **Framer Motion** for the hero entrance and scroll reveals
- **next/font** — Geist (display + body/UI)

## Run

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build + static export (output in `out/`, Netlify-ready):

```bash
npm run build
```

Deploy to Netlify with publish directory `out/` and build command `npm run build`.

## Structure

```
app/            layout, page, globals.css (tokens + glass + editorial treatments)
components/     Nav, Hero, TrustBar, SplitFeature, StatStrip, ServiceCards,
               PathPlatform, CoverageAreas, InsightsPreview, ClosingCTA,
               ReportPromo, Footer, Reveal (motion helper), icons
public/         usi-logo.png + awards/ (real recognition badges)
```

## Notes on assets & content

- **Editorial photography** lives in `public/photos/` (hero, advisors, the four
  coverage-area cards, and the report promo). These are free-license
  [Unsplash](https://unsplash.com/license) photos (no attribution required);
  swap in USI's own art direction before this goes to a prospect. The
  `.editorial` gradient class in `globals.css` remains as a styled fallback.
- **Awards row** (PATH section) uses the three real recognition badges provided,
  matching the brief: U.S. Insurance Awards, PropertyCasualty360, AXCO.
- **Insights headlines** are the placeholder titles specified in the brief —
  replace with real USI Executive Insights articles when available.
- All figures (Power of ONE history, 2026 Benchmarking stats) come straight from
  the brief; none were invented.

## Design system guardrails (enforced)

- **Amber** (`--signal`) only on CTAs, the one highlighted service card, and the
  report promo card.
- **Teal** (`--insight`) only on stat numerals and the PATH chart.
- **Frosted-navy glass** (55% ink / blur 16 / 15% paper border) only in the
  Coverage Areas section.
- `prefers-reduced-motion` disables all fades/transforms and shows final state.
- Typeface: **Geist** across the whole design (display + body), per request.

## Security note

`next` is pinned to a patched 14.2.x. A remaining npm-audit advisory is a
build-time-only transitive `postcss` used by Next's dev tooling; fully clearing
it requires a breaking major upgrade to Next 16 and is not warranted for a
static concept build.
