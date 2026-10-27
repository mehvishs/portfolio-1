# mehvishsiddique.com

Portfolio site for Mehvish Siddique, built with [Astro](https://astro.build).

## Editing content

- **Case studies** live in `src/content/work/`, one `.mdx` file each. The file name is the URL
  (`spark-ai.mdx` → `/work/spark-ai`). The block at the top (between the `---` lines) holds the
  homepage card text, the headline and the "at a glance" details.
- **Homepage experience, about and contact** are in `src/pages/index.astro`.
- **Hero** (brick wall, keyword hover objects) is `src/components/Hero.astro`.
- **Colours and fonts** are set once in `src/styles/global.css`.

Grey striped boxes marked `[IMG: …]` are placeholders. Red dashed boxes marked "TO DO (Mehvish)" are
content to write or confirm. See `CONTENT-TODO.md`.

## Running it locally (optional)

```
npm install
npm run dev
```

## Hosting

Built for Netlify (or Cloudflare Pages): build command `npm run build`, publish folder `dist`.
`public/_redirects` sends the old Hostinger URLs to the new case study pages.
