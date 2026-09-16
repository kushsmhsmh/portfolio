# kushagra.dev

Personal portfolio and blog, built with Next.js (App Router), Tailwind CSS v4,
Framer Motion, and MDX.

## Stack

- **Next.js 16** + TypeScript, App Router
- **Tailwind CSS v4** for styling (design tokens in `app/globals.css`)
- **Framer Motion** for scroll reveals and the hero animation
- **MDX** blog posts, stored as files in `content/posts/*.mdx` (frontmatter:
  `title`, `date`, `summary`, `tags`) — no CMS, no database
- **next-themes** for the light/dark toggle

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All real content lives in plain files, not scattered across components:

- `content/site.ts` — name, tagline, bio, contact links
- `content/experience.ts` — work experience + activities/leadership + education
- `content/projects.ts` — project cards and detail pages
- `content/posts/*.mdx` — blog posts. Add a new file here to publish a post;
  it's picked up automatically by `/blog`.

## Deploying

Built to deploy zero-config on [Vercel](https://vercel.com/new). Before going
live, set the `NEXT_PUBLIC_SITE_URL` environment variable to the real domain
(used by `app/sitemap.ts`, `app/robots.ts`, and the RSS feed at
`/blog/rss.xml`) — see `content/site.ts`.

```bash
npm run build
npm run start
```
