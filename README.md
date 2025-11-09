# Freightmate Vue App

Vue 3 + Vite build of the Freightmate marketing site. All routes and content were migrated from the legacy Next.js app while keeping Tailwind styling, Vue Query, Pinia, Vee-Validate, and Vitest.

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`. Environment variables use the standard Vite prefix (e.g. `VITE_SITE_URL`).

## Scripts

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `pnpm dev`     | Start Vite dev server with HMR                      |
| `pnpm build`   | Production build to `dist/`                         |
| `pnpm preview` | Preview the production build locally                |
| `pnpm lint`    | ESLint (flat config) for Vue + TypeScript           |
| `pnpm test`    | Vitest unit tests (jsdom + Testing Library helpers) |

## Architecture Notes

- **Vue-only stack**: App shell lives in `src/App.vue` with Vue Router handling the routes mapped under `src/pages/`.
- **Components**: Marketing components (hero, header, footer, animations, tracking demo, partner grids, etc.) live in `src/components/**`. Shared animation helpers remain under `components/animations/`.
- **Data & composables**: `src/data`, `src/lib`, and `src/composables` keep helper logic (e.g. `usePageMeta`, `useInView`, analytics utilities).
- **State/data fetching**: Pinia is available for future stores; Vue Query is registered globally in `src/main.ts`.
- **Styling**: Tailwind + brand tokens are defined in `src/assets/css/main.css` and `tailwind.config.ts`.
- **Testing**: Vitest is configured through `vite.config.ts` with jsdom + Testing Library utilities. Sample specs live in `tests/`.
- **Docs**: See `MIGRATION_NOTES.md` and `docs-reference/EQUIVALENCE_REPORT.md` for migration context and route mapping.

## Production Check

```bash
pnpm build
pnpm preview
```

The build emits a static `dist/` folder suitable for any static host or CDN.

## GitHub Pages Deployment

This repository is preconfigured for the `HomieKa/freightmate` GitHub Pages project site.

1. Push `main` to `https://github.com/HomieKa/freightmate`.
2. In the repository settings, open *Pages* and pick **GitHub Actions** as the source (the included `.github/workflows/deploy.yml` workflow handles everything).
3. Workflow summary:
   - Installs dependencies with pnpm, runs `pnpm build`, and uploads `dist/` as the artifact.
   - Deploys to the `gh-pages` environment so the site is available at `https://homieka.github.io/freightmate-website/`.
4. The Vite config sets `base: '/freightmate-website/'`, so any asset and router paths resolve correctly under the project page URL.

To test the GitHub Pages bundle locally, run `pnpm build` and serve the `dist/` directory (e.g., `npx serve dist`) to confirm all relative links work.
