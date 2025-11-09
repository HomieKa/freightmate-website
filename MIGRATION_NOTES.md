## Migration Notes

### Overview

- Migrated the Freightmate marketing site from the legacy Next.js App Router project to a pure Vue 3 + Vite SPA.
- Preserved every public route/slug, legal page, and block of marketing content while keeping Tailwind tokens and responsive layouts intact.
- Rebuilt all React components (hero carousel, FAQ accordions, feature layouts, tracking walkthrough, integrations drawer, etc.) as Vue Single File Components under `src/components`.

### Stack Decisions

| Concern            | Vue 3 + Vite Implementation                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Framework          | Vite + Vue 3 with `src/main.ts` bootstrapping the app, `src/App.vue` as the shell, and Vue Router defined in `src/router/index.ts`.   |
| Routing            | Vue Router mirrors the Next.js route graph, including dynamic resource articles (`/resources/:slug`) and the 404 catch-all route.     |
| Styling            | Tailwind CSS + brand layers live in `src/assets/css/main.css` with configuration in `tailwind.config.ts`.                             |
| State/Data         | Pinia is registered globally for future domain stores, and Vue Query (`@tanstack/vue-query`) handles async data hooks.                |
| Head/SEO           | `@vueuse/head` plus a `usePageMeta` composable provide dynamic titles/meta tags per page.                                             |
| Forms/Validation   | Vee-Validate + Zod installed; contact page uses the Composition API helpers the same way React Hook Form previously did.              |
| HTTP / APIs        | Axios remains the HTTP client (`src/lib/analytics.ts` and future data hooks) and can be wrapped in composables as endpoints appear.   |
| Animations         | React motion utilities replaced with Vue equivalents in `src/components/animations` and helpers like `useInView`.                     |
| Analytics          | `src/lib/analytics.ts` exposes the `track()` helper for GA-style events, mirroring the original functionality.                        |
| Testing            | Vitest + jsdom + Vue Testing Library (`tests/`) provide the unit-test harness that replaced Jest/RTL from the React app.              |
| Tooling            | Flat ESLint config (`eslint.config.mjs`), Prettier 3, and Tailwind plugin linting are wired into `pnpm lint`.                         |

### Routing + Content Parity

- `src/pages` mirrors the old `app/(site)` folders (home, features, partners, resources, legal pages) using lazy-loaded route components.
- Dynamic articles (`src/pages/resources/[slug].vue`) follow Vue Router's param syntax while keeping the markdown-style copy and anchors intact.
- Static assets such as `robots.txt` and `sitemap.xml` moved to `public/` for Vite to serve directly, keeping the same crawler hints.

### Notable Porting Choices

- **Hero carousel** now uses a Vue composition-friendly interval + keyboard controls inside `components/HeroCarousel.vue`.
- **Integrations drawer** migrated to `components/partners/IntegrationsContent.vue` with the same filters/search; focus trap simplified but behaviourally identical.
- **Tracking demo** keeps the stepper UX from the React build, rebuilt with Vue reactivity in `components/tracking/TrackTraceDemo.vue`.
- **Animation helpers** (`components/animations/*`, `composables/useInView.ts`) capture fade/slide/parallax behaviour from the Framer Motion primitives.
- **Shared data** from `data/` and helpers from `lib/` moved verbatim, with TypeScript strictness enforced (no lingering `any`).

### Known Follow-ups

1. **Accessibility polish** – integrations drawer still uses a light-weight focus management approach; add a dedicated dialog/focus-trap utility if requirements tighten.
2. **Expanded tests** – only the utility spec (`tests/lib/utils.spec.ts`) exists today. Add component and interaction suites (header nav, tracking flow, integrations filters).
3. **Analytics wiring** – `track()` is a client-side stub; hook it up to GA/Segment/Snowplow when credentials are available.
4. **Backend integration** – the contact form currently validates client-side only; connect to the production API once endpoints are finalised.

### Running Locally

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm lint
pnpm test
pnpm build && pnpm preview
```

Set `VITE_SITE_URL` in `.env` for canonical URLs, sitemap origin, and social/meta tags. Use the same env prefix for any other public configuration keys.
