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

Tailwind v4 with custom theme in `src/styles/global.css`:
- **Primary:** `#7E9A47` (olive green) → `bg-primary`, `text-primary`
- **Secondary:** `#f0b96a` (gold) → `bg-secondary`, `text-secondary`
- **Fonts:** Jost (sans, body), Cormorant Garamond (serif, headings) → `font-sans`, `font-serif`

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
