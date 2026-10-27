# Mishin Websites: Portfolio Site

The source for [mishinwebsites.com](https://mishinwebsites.com), the portfolio and client inquiry site for my freelance web design and development work.

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS, and deployed on Vercel.

## Features

- **Project case studies.** Each project lives in one data file (`app/data/projects.ts`). Case study pages under `/projects/[slug]` are built from it at build time with `generateStaticParams`, and include previous/next navigation.
- **Contact form.** Custom selects for project type and budget, and it opens a pre-filled email with no backend needed.
- **SEO.** Metadata API, generated Open Graph and Twitter images, `sitemap.ts` and `robots.ts`.
- **Polish.** Scroll-reveal animations, a cursor glow effect, a grid background, and custom loading, error and 404 pages.
- **Brand.** DM Sans and DM Mono through `next/font`, with a navy/blue palette set in `tailwind.config.js`.

## Project structure

```
app/
├── page.tsx                 # Home page
├── contact/page.tsx         # Contact page
├── projects/[slug]/page.tsx # Case study template
├── data/projects.ts         # All project content
├── components/              # Nav, Footer, ContactForm, Reveal, CursorGlow, …
├── lib/og-image.tsx         # Shared Open Graph image layout
├── sitemap.ts, robots.ts
└── opengraph-image.tsx, twitter-image.tsx
public/images/               # Project screenshots
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a project

Add an entry to the `projects` array in `app/data/projects.ts` with a title, slug, image and write-up. The home page and the new case study page pick it up automatically.

## Deploy

Push to `main` and Vercel builds and deploys it. No environment variables are needed.

## Tech

Next.js 14 · React 18 · TypeScript · Tailwind CSS · Vercel
