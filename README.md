# alexandertucker.me

Personal site built with [Astro](https://astro.build), hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # opens http://localhost:4321 and reloads as you edit
```

## Where things live

| To change | Edit |
| --- | --- |
| Name and overview | `src/pages/index.astro` |
| A project | `src/content/projects/<name>.md` (rename the file to change its URL) |
| Footer links (email, LinkedIn, GitHub) | `src/layouts/Base.astro` |
| Photo next to your name | add it to `public/images/` and set `portrait` in `src/pages/index.astro` |
| Résumé | drop `resume.pdf` into `public/` |
| Colors and type | `src/styles/global.css` (tokens at the top) |
| Images and PDFs | put them in `public/images/` or `public/files/`, link as `/images/x.png` |

Search for `TODO` to find every placeholder.

## Add a project

Create `src/content/projects/my-project.md`:

```markdown
---
title: Project title
summary: One or two sentences shown on the index.
status: In progress      # In progress | Draft | Complete
role: Sole author
methods: [Method one, Method two]
updated: 2026-11-01
order: 4                 # lower numbers appear first
---

## The question
...
```

It appears at `/projects/my-project/`. Math works in LaTeX: `$x_i$` inline, `$$ ... $$` for display.

## Deploy

1. Create a public repo named `<your-username>.github.io` and push this folder to `main`.
2. Repo **Settings > Pages > Source: GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site (`.github/workflows/deploy.yml`).

## Custom domain

`public/CNAME` already contains `alexandertucker.me`. If you end up with a different domain, change
that file and the `site` value in `astro.config.mjs`.

At your registrar (Namecheap), under Advanced DNS:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-username>.github.io.` |

Then in **Settings > Pages**, enter the domain and tick **Enforce HTTPS** once the check passes.
