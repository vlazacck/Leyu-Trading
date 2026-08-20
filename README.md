#  Leyu Teff — Export Website

A production-ready B2B export website for a premium Ethiopian teff flour/grain
exporter, built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion,
React Router, React Hook Form, TanStack React Query, and Sanity.io.

## Getting started

```bash
npm install
npm run dev
```

The site runs immediately with realistic **mock content** (see
`src/lib/mockData.ts`) even with no CMS connected, so you can preview and
iterate on design without setting up Sanity first.

## Connecting Sanity.io

1. Create a Sanity project (`npm create sanity@latest` in a separate folder,
   or reuse an existing one) and copy the schema files from
   `src/sanity/schemas/*` into that studio's `schemaTypes`.
2. Copy `.env.example` to `.env` and fill in your project ID and dataset:
   ```
   VITE_SANITY_PROJECT_ID=xxxxxxx
   VITE_SANITY_DATASET=production
   ```
3. Once `VITE_SANITY_PROJECT_ID` is set, the app automatically switches from
   mock data to live GROQ queries (`src/lib/queries.ts`) via
   `src/lib/hooks.ts`.
4. Populate one `siteSettings` document, one `homePage` document, and your
   `product`, `benefit`, and `agent` entries in the Studio.

## Replacing placeholder photography

The hero and product cards currently use lightweight illustrations/color
blocks as stand-ins for licensed photography (see the comment in
`src/components/Hero.tsx`). Upload your own product photos to Sanity's
`image` fields and swap in `<img src={urlForImage(...)} />` once available —
`urlForImage` is already set up in `src/lib/sanity.ts`.

## Project structure

```
src/
  components/   Navbar, Hero, ProductCard, BenefitCard, AgentCard,
                ContactForm, Footer, SectionTitle
  pages/        Home, Products, ProductDetail, About, Contact
  lib/          sanity client, GROQ queries, React Query hooks, mock data
  sanity/schemas/  siteSettings, homePage, product, agent, benefit, seo
  types/        shared TypeScript interfaces
```

## Notes

- Contact form spam protection uses a honeypot field; wire the `onSubmit`
  handler in `src/components/ContactForm.tsx` to your real backend/email
  service.
- `robots.txt` and canonical/OG meta are scaffolded in `index.html` and
  `public/robots.txt` — add a generated `sitemap.xml` at build/deploy time.
