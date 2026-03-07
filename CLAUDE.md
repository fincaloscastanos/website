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

Three languages: **es** (default), **en**, **de**.

Adding a new page:
1. Create `src/views/{name}/{name}.page.astro`
2. Create `src/views/{name}/{name}.route.ts` with slugs per language
3. Create `src/views/{name}/{name}.i18n.ts` with translations
4. The registry auto-discovers everything via `import.meta.glob`

## Styling

Tailwind v4 with custom theme in `src/styles/global.css`. Full CI/CD specs in `design.md`.

### Color Tokens

| Token | HEX | Name | Usage |
|-------|-----|------|-------|
| `primary` | `#8BA888` | Salbeigrün | Buttons, highlights, icon tints |
| `accent` | `#8BA888` | Salbeigrün | Cursive subtitles, accent sections (`bg-accent`), links |
| `secondary` | `#D4A84B` | Warmgold | CTA buttons on dark bg, warm accents |
| `secondary-light` | `#F5E6CA` | Hellbeige | Warm background sections |
| `brown` | `#7B3F1A` | Mittelbraun | Coffee illustrations |
| `brown-dark` | `#3D1E0E` | Dunkelbraun | Quote text, decorative accents |
| `surface` | `#F0EFED` | Hellgrau | Section backgrounds |
| `text` | `#444444` | Dunkelgrau | Body text |
| `text-heading` | `#2C2C2C` | Fast Schwarz | Main headings |

### Typography

- **Fonts:** Raleway (sans, body/headings) → `font-sans`, Oooh Baby (cursive, subtitles) → `font-serif`
- **Weights:** 300 (Light — uppercase headings), 400 (Regular — body), 600 (Semi-bold), 700 (Bold — buttons)
- **Section headings:** Raleway UPPERCASE, Light weight → `font-sans uppercase tracking-wider font-light`
- **Cursive subtitles:** Oooh Baby in Dunkelgrün → `font-serif text-accent`
- **Quote text:** Raleway UPPERCASE, wide tracking, Dunkelbraun → `font-sans uppercase tracking-[0.15em] text-brown-dark font-light`

### Section Pattern

Sections alternate backgrounds: `bg-background` (white), `bg-surface` (light gray), `bg-surface-warm` (beige).
Dark accent sections use `bg-accent text-white` (Dunkelgrün) with gold subtitles (`text-secondary`).
Buttons: `bg-primary text-white` (sage green) or `bg-secondary text-text-heading` (gold on dark bg).

## Commands

```bash
pnpm dev        # Dev server
pnpm build      # Production build → dist/
pnpm preview    # Preview production build
```

Deployment runs via GitHub Actions on push to `main` (build → Docker image → `ghcr.io`).

## Conventions

- **Views** follow the `{name}.page.astro` / `.route.ts` / `.i18n.ts` pattern
- **Components** use PascalCase: `Header.astro`, `LanguageSwitcher.astro`
- **Types** use `import type` for type-only imports
- Spanish is the default language — routes without lang prefix are Spanish
- SEO is handled by `SeoHead.astro` (hreflang, OG tags, canonical)
