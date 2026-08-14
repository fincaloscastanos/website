# Finca Los Castaños

Website for [Finca Los Castaños](https://fincaloscastanos.com) — a rural farm in the Valle de Agaete, Gran Canaria, offering coffee tours, vacation apartments, and nature experiences.

## Tech Stack

- [Astro](https://astro.build) 5 — Static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — via the `@tailwindcss/vite` plugin
- [astro-icon](https://github.com/natemoo-re/astro-icon) — twemoji (flags), lucide (UI icons)
- [marked](https://marked.js.org) — Markdown rendering
- TypeScript (strict mode)
- pnpm — package manager
- GitHub Actions — CI/CD

## Prerequisites

You need three things installed before you can work on this project.

### 1. Git

Used to clone the repository and manage changes.

| OS      | Install                                                                       |
| ------- | ----------------------------------------------------------------------------- |
| macOS   | `brew install git` (or `xcode-select --install`)                              |
| Windows | Download from [git-scm.com](https://git-scm.com/download/win)                  |
| Linux   | `sudo apt install git` (Debian/Ubuntu) or `sudo dnf install git` (Fedora)      |

Verify:

```bash
git --version
```

Set your identity once (used for commit authorship):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 2. Node.js 24

The CI pipeline builds with **Node.js 24**, so use the same major version locally to avoid surprises.

| OS      | Install                                                                                   |
| ------- | ----------------------------------------------------------------------------------------- |
| macOS   | `brew install node@24` — or use a version manager (recommended, see below)                 |
| Windows | Download the LTS installer from [nodejs.org](https://nodejs.org)                           |
| Linux   | Use a version manager, or [NodeSource](https://github.com/nodesource/distributions)        |

**Recommended:** install via a version manager so you can switch versions per project:

```bash
# nvm (macOS / Linux) — https://github.com/nvm-sh/nvm
nvm install 24
nvm use 24

# fnm (cross-platform, faster) — https://github.com/Schniz/fnm
fnm install 24
fnm use 24
```

Verify:

```bash
node --version   # should print v24.x.x
```

### 3. pnpm

This project uses **pnpm** (pinned to `10.28.2` via the `packageManager` field). Do **not** use `npm install` or `yarn` — it would create a conflicting lockfile.

The easiest way is Corepack, which ships with Node.js and picks up the pinned version automatically:

```bash
corepack enable
corepack prepare pnpm@10.28.2 --activate
```

Alternatively, install it globally:

```bash
npm install -g pnpm@10.28.2
```

Verify:

```bash
pnpm --version   # should print 10.28.2
```

### Recommended editor setup

[VS Code](https://code.visualstudio.com) with these extensions:

- **Astro** (`astro-build.astro-vscode`) — syntax highlighting, IntelliSense, formatting
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — class autocompletion

## Getting Started

```bash
# 1. Clone the repository
git clone git@github.com:fincaloscastanos/website.git
cd website

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321). The dev server hot-reloads on every file change.

No environment variables or secrets are needed for local development — the site is fully static.

## Commands

| Command        | Description                                            |
| -------------- | ------------------------------------------------------ |
| `pnpm install` | Install all dependencies                               |
| `pnpm dev`     | Start the dev server at `localhost:4321` with HMR      |
| `pnpm build`   | Build the production site to `dist/`                   |
| `pnpm preview` | Serve the built site from `dist/` locally              |
| `pnpm astro`   | Run the Astro CLI directly (e.g. `pnpm astro check`)   |

Before opening a pull request, make sure `pnpm build` completes without errors.

## Project Structure

```
src/
├── pages/           # Astro routing ([...slug] catch-all, sitemap, robots.txt)
├── views/           # Page content — auto-discovered by the registry
│   └── {name}/
│       ├── {name}.page.astro    # Page component
│       ├── {name}.route.ts      # Route slugs per language
│       └── {name}.i18n.ts       # Translations
├── components/      # Reusable components
│   ├── ui/          # UI primitives (Container, PrivacyGate, PrivacyMap, SubNav, …)
│   ├── Header.astro, Footer.astro, LanguageSwitcher.astro
│   └── SeoHead.astro
├── layouts/         # Layout.astro (fonts, SEO, analytics)
├── lib/             # Core logic (i18n system, registry, navbar config, types)
├── data/            # Static data (site.ts)
├── styles/          # global.css (Tailwind theme + design tokens)
└── assets/          # Images (logo, OG images)

public/              # Static files served as-is (favicons, PDFs, hero.mp4, CNAME)
docs/                # Internal documents (contracts, etc.)
.github/workflows/   # CI/CD pipelines
```

## Languages

The site supports three languages. **English is the default** and is served without a URL prefix.

| Language           | Prefix | Example       |
| ------------------ | ------ | ------------- |
| English (default)  | —      | `/contact`    |
| Spanish            | `/es`  | `/es/contacto`|
| German             | `/de`  | `/de/kontakt` |

The language list and default are defined in `src/lib/i18n.ts`.

## Adding a New Page

Create three files in `src/views/{name}/` — the registry picks them up automatically via `import.meta.glob`, no manual registration needed.

**`{name}.route.ts`** — route slug per language:

```ts
import type { RouteDefinition } from "@/lib/types";

export const route: RouteDefinition = {
  key: "name",
  slugs: { en: "name", es: "nombre", de: "name" },
};
```

**`{name}.i18n.ts`** — translations:

```ts
export const translations = {
  navigationLabel: { en: "…", es: "…", de: "…" },
  seo: {
    title: { en: "…", es: "…", de: "…" },
    description: { en: "…", es: "…", de: "…" },
  },
};
```

**`{name}.page.astro`** — the page component:

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout title="..." description="..." lang={...} routeKey="name">
  <!-- content -->
</Layout>
```

To show the page in the navigation, add its route key to `src/lib/navbar.ts`.

## Design

The visual identity follows the CI/CD document (`design.md`). Design tokens live in `src/styles/global.css`:

- **Salbeigrün** `#8BA888` — buttons, highlights, links, accent sections (`primary`, `accent`)
- **Warmgold** `#D4A84B` — CTA buttons on dark backgrounds, warm accents (`secondary`)
- **Hellbeige** `#F5E6CA` — warm section backgrounds (`secondary-light`, `surface-warm`)
- **Hellgrau** `#F0EFED` — neutral section backgrounds (`surface`)
- **Dunkelbraun** `#3D1E0E` — quote text, decorative accents (`brown-dark`)

**Fonts:** Raleway (Light/Regular/Bold) for headings and body (`font-sans`), Oooh Baby for cursive subtitles (`font-serif`). Both are self-hosted via `@fontsource`.

More conventions are documented in [`CLAUDE.md`](./CLAUDE.md).

## Deployment

Everything runs through GitHub Actions — there is nothing to deploy by hand.

### Production

Pushing to `main` triggers `.github/workflows/gh-pages.yml`:

1. Install dependencies (`pnpm install --frozen-lockfile`)
2. Build the site (`pnpm build`)
3. Publish `dist/` to **GitHub Pages** → [fincaloscastanos.com](https://fincaloscastanos.com)

The custom domain is configured via `public/CNAME`. No secrets required — the workflow uses the built-in `GITHUB_TOKEN`.

### Preview deployments

Pushing to any branch other than `main` triggers `.github/workflows/deploy.yml`, which deploys a preview to **Cloudflare Pages** and posts the preview URL as a comment on the matching open pull request. Preview deployments are cleaned up by `.github/workflows/cleanup-preview.yml`.

This requires the repository secret `CLOUDFLARE_API_TOKEN` (already configured; only relevant if you fork the project).

## Contributing

1. Create a branch off `main`: `git checkout -b feature/my-change`
2. Make your changes and verify locally with `pnpm dev`
3. Run `pnpm build` to make sure the production build passes
4. Push the branch and open a pull request — a preview deployment is posted automatically
5. After review, merge into `main` — production deploys on its own

## Credits

Third-party photos, icons and fonts are attributed in [`CREDITS.md`](./CREDITS.md).

## License

All rights reserved.
