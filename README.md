# SEO Next.js Starter – Next.js SaaS Landing Page Template

A production-ready SaaS landing page built with **Next.js App Router**, **Tailwind CSS**, and **TypeScript** — with **SEO correctness**, a **professional UI design system**, and a **monorepo-friendly** structure baked in.

**Clone it, customise it, ship it.**

> If this repo saves you time, please ⭐️ **star it** — it helps others discover it.

---

| Light                                                                                                                                               | Dark                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Light Mode](https://raw.githubusercontent.com/okeken/nextjs-saas-landing/refs/heads/main/apps/web/public/screenshots/nextjs-seo-landing-page.png) | ![Dark Mode](https://raw.githubusercontent.com/okeken/nextjs-saas-landing/refs/heads/main/apps/web/public/screenshots/nextjs-seo-template-dark.png) |

---

## 1-minute local setup

### Requirements

* Node.js >= 20
* pnpm (recommended via Corepack)

### Run it

```bash
git clone https://github.com/okeken/nextjs-saas-landing.git
cd nextjs-saas-landing
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

> If you got it running in under 1 minute, consider ⭐️ starring the repo 🙂

---

## Use This Template 

Fork this repo and make changes:

[https://github.com/okeken/nextjs-saas-landing/fork](https://github.com/okeken/nextjs-saas-landing/fork)

### Option B — Clone

```bash
git clone https://github.com/okeken/nextjs-saas-landing.git
```

---

## About This Template

The SEO Next.js Starter helps you quickly set up a robust, SEO-friendly web application using Next.js App Router. It prioritises search engine fundamentals, performance, and a strong UI system so you can move fast without cutting corners.

---

## Features

### SEO-first architecture

* App Router Metadata API (layout and page metadata)
* Correct Open Graph & Twitter cards
* `robots.ts` and `sitemap.ts` out of the box
* Crawl-safe layout structure and performance-friendly defaults

### Next.js 16 ready

* Built and tested against Next.js 16 (App Router)
* Uses stable Metadata API, `robots.ts`, `sitemap.ts`

### Professional UI design system

* Radix UI primitives (accessibility-first)
* Tailwind CSS with `class-variance-authority` and `tailwind-merge`
* Icon system with Lucide
* Forms via React Hook Form + Zod
* Dark / light mode support

### Monorepo-friendly

* Turborepo / pnpm workspace structure
* Shared UI package `@metallicjs/ui`
* Shared utilities & types
* Storybook for isolated UI development

### DX & Tooling

* TypeScript (strict), ESLint, Prettier
* Storybook 9 (Vite) – runs independently of Next.js
* Ready for Vitest/Playwright (add tests as needed)

---

## Getting Started

1. Prerequisites

* Node.js >= 20
* pnpm (enforced via preinstall). If needed, enable Corepack: `corepack enable`

2. Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

3. Storybook (UI package)

```bash
cd packages/ui
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006)

4. Configure environment variables

* Copy the example env file and fill in your values:

```bash
cp apps/web/.env.example apps/web/.env.local
```

* Variables:

  * NEXT_PUBLIC_SITE_URL
  * NEXT_PUBLIC_SITE_NAME
  * NEXT_PUBLIC_TWITTER_HANDLE
  * NEXT_PUBLIC_TAG_LINE
  * NEXT_PUBLIC_CURRENCY (optional, defaults to USD)

5. Optional: edit config directly

* `apps/web/config/index.ts` reads from env and defines `SITE` constants used across the app.

---

## Environment Variables

These are read by the app and used to generate metadata, OG images, robots, and sitemap:

```ini
# public site url (no trailing slash in production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# your product/brand name
NEXT_PUBLIC_SITE_NAME=MySaas

# your Twitter/X handle (optional)
NEXT_PUBLIC_TWITTER_HANDLE=@mysaas

# short tagline used in OG image/footer
NEXT_PUBLIC_TAG_LINE=Production-ready marketing system

# optional currency code used in pricing/components
NEXT_PUBLIC_CURRENCY=USD
```

Place them in `apps/web/.env.local` (for local dev) or configure them in your hosting provider (e.g., Vercel) for production.

### Vercel Environment Variables

1. Open your project in Vercel
2. Settings → Environment Variables
3. Add the keys above with appropriate values
4. Redeploy to apply changes

---

## Technical Details

### Metadata management

* App Router metadata is defined via layout/page exports and dedicated files:

  * `apps/web/app/robots.ts` – disallows crawling in non-production; sets sitemap and host
  * `apps/web/app/sitemap.ts` – generates entries for static routes and MDX blog posts with accurate `lastModified`
  * `apps/web/app/layout.tsx` and route-level metadata exports

### Open Graph image generation

* Uses the built-in Next.js OG Image API (`next/og`)
* Endpoint: `/api/og`
* Query params:

  * `title` – overrides the default title (clamped to 70 chars)
  * `subtitle` – optional secondary text (clamped to 120 chars)
  * `theme` – `dark` | `light` (defaults to `dark`)
* Example:

  * `/api/og?title=Hello&subtitle=World&theme=light`

---

## Included pages & sections

* Navbar, Hero, Features, CTA, Footer
* Pricing page example
* Blog (MDX) scaffold

You can remove or replace sections freely — nothing is tightly coupled.

---

## Project structure (simplified)

```text
apps/
  web/                # SaaS marketing site (Next.js App Router)

packages/
  ui/                 # @metallicjs/ui (design system)
    components/
    hooks/
    lib/
    styles/

  shared/             # shared utilities & types
```

---

## Customisation

Common places you’ll edit:

* `apps/web/app/(website)/page.tsx` – landing page content
* `apps/web/app/(website)/layout.tsx` – metadata & layout
* `apps/web/app/(website)/_components` – UI sections
* `apps/web/public` – images, favicons
* `packages/ui` – shared components/styles (used across apps)

---

## Contributing

Issues and pull requests are welcome. If you spot something incorrect or missing, please open an issue or PR.

---

## License

MIT License © 2025

---

Made with care by an indie builder. If this helps, a ⭐️ helps others discover it!
