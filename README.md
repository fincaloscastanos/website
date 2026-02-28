# Finca Los Castaños

Website for [Finca Los Castaños](https://finca.pulpo.cloud) — a rural farm in Agaete, Gran Canaria, offering coffee tours, vacation apartments, and nature experiences.

## Tech Stack

- [Astro](https://astro.build) 5 — Static site generator
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript (strict)
- Docker + Nginx

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [localhost:4321](http://localhost:4321).

## Build

```bash
pnpm build       # Build static site to dist/
```

## Deployment

### Automatic (CI/CD)

Every push to `main` triggers a GitHub Actions workflow that:

1. Installs dependencies (`pnpm install --frozen-lockfile`)
2. Builds the site (`pnpm build`)
3. Builds a Docker image (Nginx + static files)
4. Pushes the image to `ghcr.io/tobiasbenkner/fincaloscastanos.com:latest`

No secrets to configure — authentication uses the built-in `GITHUB_TOKEN`.

### Running the Docker image

```bash
docker pull ghcr.io/tobiasbenkner/fincaloscastanos.com:latest
docker run -p 80:80 ghcr.io/tobiasbenkner/fincaloscastanos.com:latest
```

## Languages

The site supports three languages:

| Language          | Prefix | Example       |
| ----------------- | ------ | ------------- |
| Spanish (default) | —      | `/contacto`   |
| English           | `/en`  | `/en/contact` |
| German            | `/de`  | `/de/kontakt` |

## Adding a New Page

Create three files in `src/views/{name}/`:

**`{name}.route.ts`** — Route definition:

```ts
export const route = {
  key: "name",
  slugs: { es: "nombre", en: "name", de: "name" },
};
```

**`{name}.i18n.ts`** — Translations:

```ts
export const translations = {
  seo: {
    title: { es: "...", en: "...", de: "..." },
    description: { es: "...", en: "...", de: "..." },
  },
};
```

**`{name}.page.astro`** — Page component:

```astro
---
import Layout from "@/layouts/Layout.astro";
---
<Layout title="..." description="..." lang={...} routeKey="name">
  <!-- content -->
</Layout>
```

The page is automatically registered and routed.

## License

All rights reserved.
