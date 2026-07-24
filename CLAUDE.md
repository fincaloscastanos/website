# Finca Los Castaños – Project Guide

## Tech Stack

- **Astro 5** (static site generator) with TypeScript strict mode
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **astro-icon** with `twemoji` (flags) and `lucide` (UI icons)
- **marked** for Markdown rendering
- **pnpm** as package manager
- **Docker** (nginx:alpine) for deployment → `ghcr.io`

## Project Structure

```
src/
├── pages/           # Astro routing ([...slug] catch-all)
├── views/           # Page content (auto-discovered by registry)
│   └── {name}/
│       ├── {name}.page.astro    # Page component
│       ├── {name}.route.ts      # Route slugs per language
│       └── {name}.i18n.ts       # Translations
├── components/      # Reusable Astro components
│   ├── ui/          # UI primitives (Container, PrivacyGate, PrivacyMap, SubNav, …)
│   ├── Header.astro, Footer.astro, LanguageSwitcher.astro
│   ├── CookieConsent.astro
│   └── SeoHead.astro
├── layouts/         # Layout.astro (fonts, SEO, analytics)
├── lib/             # Core logic
│   ├── i18n/        # i18n system (registry, resolver, types)
│   ├── i18n.ts      # Re-export barrel
│   ├── registry.ts  # Main registry instance
│   ├── navbar.ts    # Navigation config
│   └── types.ts     # Shared types
├── data/            # Static data (site.ts)
├── styles/          # global.css (Tailwind theme)
└── assets/          # Images (logo, OG images)
```

## i18n

Three languages: **en** (default), **es**, **de**.

Adding a new page:
1. Create `src/views/{name}/{name}.page.astro`
2. Create `src/views/{name}/{name}.route.ts` with slugs per language
3. Create `src/views/{name}/{name}.i18n.ts` with translations
4. The registry auto-discovers everything via `import.meta.glob`

## Styling

Tailwind v4 with custom theme in `src/styles/global.css`. Full CI/CD specs in `design.md`.

### Color Tokens

Dark theme — emerald green surfaces, warm gold accents. Contrast ratios are against `background`.

| Token | HEX | Name | Usage |
|-------|-----|------|-------|
| `background` | `#207657` | Smaragdgrün | Page background |
| `surface` | `#1A6249` | Smaragd dunkel | Alternating sections, cards |
| `surface-warm` | `#16523D` | Smaragd tief | Highlighted sections (formerly `bg-accent`) |
| `surface-deep` | `#123D2D` | Tannengrün | Header (solid), footer |
| `text` | `#FFFFFF` | Weiß | Body text, headings — 5.5:1 ✓ AA |
| `text-muted` | `#D5E3D9` | Grünweiß | Secondary text — 4.6:1 ✓ AA |
| `accent` | `#E8C46A` | Warmgold hell | Links, cursive subtitles — 3.3:1 (large text only) |
| `secondary` | `#D4A84B` | Warmgold | Button fills — pair with `text-secondary-foreground` |
| `secondary-foreground` | `#0F3527` | Dunkelgrün | Text on gold fills — 6.6:1 ✓ AA |
| `primary` | `#ACBE9D` | Salbei-Graugrün | Lines, icon tints, decoration — 2.8:1, **no body text** |
| `brown-dark` | `#E3C9A8` | Creme | Quote text, decorative accents |
| `border` | `#3D8E6E` | Smaragd hell | Borders, dividers |

Anything sitting on `secondary` (gold) needs `text-secondary-foreground` — white on gold is 2:1 and unreadable.

### Typography

- **Fonts:** Raleway (sans, body/headings) → `font-sans`, Oooh Baby (cursive, subtitles) → `font-serif`
- **Weights:** 300 (Light — uppercase headings), 400 (Regular — body), 600 (Semi-bold), 700 (Bold — buttons)
- **Section headings:** Raleway UPPERCASE, Light weight → `font-sans uppercase tracking-wider font-light`
- **Cursive subtitles:** Oooh Baby in Warmgold → `font-serif text-accent`
- **Quote text:** Raleway UPPERCASE, wide tracking, Creme → `font-sans uppercase tracking-[0.15em] text-brown-dark font-light`

### Section Pattern

Sections alternate backgrounds: `bg-background` → `bg-surface` → `bg-surface-warm`, each a step deeper into the green.
Buttons: `bg-secondary text-secondary-foreground` (gold with dark green text), hover `hover:bg-secondary-dark`.
Cards on dark sections: `bg-white/10 backdrop-blur-sm border border-border/60`.
Icon tiles: `bg-white/10` with `text-accent` icons.
Line-art assets drawn for white backgrounds need `.illustration-cream` (defined in `global.css`).

## Commands

```bash
pnpm dev        # Dev server
pnpm build      # Production build → dist/
pnpm preview    # Preview production build
```

Deployment runs via GitHub Actions on push to `main` (build → Docker image → `ghcr.io`).

## Cookie Consent & Tracking

- **Umami Analytics** — loads unconditionally in production (privacy-friendly, no consent needed)
- No marketing/ad tracking — Google Ads (gtag.js) and the cookie banner were removed
- **Consent Management** on privacy page via `ConsentRevoke.astro`
  - Toggle component: users can revoke and re-enable consent
  - Supports configurable `activeValue`/`inactiveValue` per consent key
  - Currently manages: `maps-consent` (Google Maps)

## Conventions

- **Views** follow the `{name}.page.astro` / `.route.ts` / `.i18n.ts` pattern
- **Components** use PascalCase: `Header.astro`, `LanguageSwitcher.astro`
- **Types** use `import type` for type-only imports
- English is the default language — routes without lang prefix are English
- SEO is handled by `SeoHead.astro` (hreflang, OG tags, canonical)
