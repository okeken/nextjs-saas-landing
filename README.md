# 
seo-nextjs-starter  Nextjs Starter SaaS Landing Page Template for Next.js (App Router)

A **production-ready SaaS landing page** built with **Next.js App Router**, **Tailwind CSS**, and **TypeScript** — with **SEO correctness**, a **professional UI design system**, and **monorepo-friendly structure** baked in.

Clone it, customise it, ship it.

---

## 🚀 Overview

| Light | Dark |
|---|---|
| ![Light Mode](https://raw.githubusercontent.com/okeken/nextjs-saas-landing/refs/heads/main/apps/web/public/screenshots/nextjs-seo-landing-page.png) | ![Dark Mode](https://raw.githubusercontent.com/okeken/nextjs-saas-landing/refs/heads/main/apps/web/public/screenshots/nextjs-seo-template-dark.png) |


This project is **SEO-first**, but it is not a throwaway template.

It comes with:

* a **professional UI design system** (consistent tokens, spacing, components)
* a **monorepo-friendly structure** (works in Turborepo / pnpm workspaces)
* a **clean SaaS-ready layout** that scales beyond a single page

The landing page is intentionally minimal in structure, but **production-grade** in setup — so search engines, performance tools, and teams get exactly what they expect.

---

## ✨ Features

### Next.js 16 ready

* Built and tested against **Next.js 16 (App Router)**
* Uses the stable Metadata API, `robots.ts`, and `sitemap.ts`
* No reliance on deprecated Pages Router patterns

### Professional UI design system

This project is backed by a **real, production-grade UI system**:

* Radix UI primitives (accessibility-first)
* Design tokens & variants via `class-variance-authority`
* Tailwind CSS + `tailwind-merge`
* Icon system with Lucide
* Form system using React Hook Form + Zod
* Dark / light mode support

The same UI system is used across apps and packages — not rebuilt per project.

### Monorepo-ready architecture

Designed to work naturally inside a **Turborepo / pnpm workspace**:

* Shared UI package (`@metallicjs/ui`)
* Shared utilities & types
* Clean package boundaries
* Storybook for isolated UI development

This makes it suitable for real SaaS teams, not just single-page demos.

### SEO-first architecture (primary)

* App Router metadata API
* Correct OpenGraph & Twitter cards
* `robots.ts` and `sitemap.ts`
* Crawl-safe layout structure
* Performance-friendly defaults

### Developer experience & tooling (secondary)

* Storybook 9 (runs independently of Next.js)

* UI components developed in isolation

* Vite-powered Storybook for fast feedback

* Playwright & Vitest ready

* Next.js 14+

* TypeScript (strict)

* ESLint + Prettier

* Storybook 9

* Playwright & Vitest ready

---

## 📦 Included pages & sections

* Navbar
* Hero
* Features
* CTA section
* Footer
* Pricing page example

You can remove or replace sections freely — nothing is coupled.

---

## 🗂 Project structure (monorepo-friendly, simplified)

```txt
apps/
  web/                # SaaS marketing site (Next.js App Router)

packages/
  ui/                 # @metallicjs/ui (design system)
    components/
    hooks/
    lib/
    styles/
    storybook/

  shared/             # shared utilities & types
```

The UI package can be reused across multiple apps without modification.

---

## 🧑‍💻 Getting started

### Run the web app (Next.js 16)

```bash
pnpm install
pnpm dev
```

Open:

[http://localhost:3000](http://localhost:3000)

### Run Storybook (UI package)

```bash
cd packages/ui
pnpm storybook
```

Storybook runs independently at:

[http://localhost:6006](http://localhost:6006)

---

## 🛠 Customisation

Common places you’ll edit:

* `app/(website)/page.tsx` – landing page content
* `app/(website)/layout.tsx` – metadata & layout
* `components/` – UI sections
* `public/` – images, favicons
* `styles/` – Tailwind & global styles

Nothing here is hidden or locked behind configuration.

---

## 🧭 Philosophy

* SEO correctness before visual polish

* Design systems over ad-hoc UI

* Monorepo-friendly by default

* Free should be production-usable

* Free should be genuinely useful

* Pro should be optional

* No dark patterns

* No artificial limitations

If this helps you ship something real, that’s already success.

---

## 🤝 Contributing

Issues and pull requests are welcome.
If you spot something incorrect or missing, feel free to open a discussion.

---

## 📄 License

MIT License © 2025

---

### Made with care by an indie builder

If you find this useful in your work, feel free to ⭐️ the repository — it helps others discover it and keeps the project moving.

