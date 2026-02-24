# Fernando Jimenez - Personal Website

This repository contains the source code for my personal website.
It is built with Astro and deployed as a static site on GitHub Pages.

## For Recruiters

If you landed here to evaluate my profile, this website is meant to show:

- How I communicate technical ideas clearly
- How I structure a clean, maintainable frontend codebase
- How I build with a pragmatic, minimal approach

Core profile:

- Staff-Level .NET Engineer
- Practical architect mindset
- Strong DevOps and automation exposure

Website: `https://fernando-jimenez-dev.github.io`

## Purpose

This site is my online home base. It exists to:

- Centralize my public technical presence
- Publish technical writing and notes
- Host small tools and experiments I ship
- Serve as a public reference for my coding style

## Why This Repo Is Intentionally Minimal

This is a deliberate architecture choice.

- Static-first for speed, reliability, and low maintenance
- No CMS because content volume is small and controlled
- No UI framework because current UI needs are simple
- No runtime backend because the site does not need one

The goal is clarity and durability over unnecessary complexity.

## Tech Stack

- Astro (static site generation)
- Custom CSS (no UI framework)
- Fontsource variable fonts (Inter, Space Grotesk, JetBrains Mono)
- GitHub Actions (CI/CD)
- GitHub Pages (hosting)

## Technical Notes (For Future Me)

### Commands

Run all commands from the project root.

| Command | Purpose |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server (`http://localhost:4321`) |
| `npm run build` | Build static output to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands (for example `astro check`) |
| `npm run astro -- --help` | Show Astro CLI help |

### Project Structure

```text
/
|- public/          # static assets (favicon, robots)
|- src/
|  |- assets/       # source assets
|  |- features/     # feature modules (index page sections)
|  |- layouts/      # shared layout (SiteLayout.astro)
|  |- pages/        # routes (index.astro, sitemap.xml.ts)
|  |- styles/       # global styles
|- astro.config.mjs # Astro config (site URL, build settings)
|- package.json
```

### Deployment

Deployment is automated via GitHub Actions on pushes to `main`.

### Commit Convention

Use Conventional Commits:

```
type(scope): short summary

- optional detail A
- optional detail B
```

Examples:

- `feat(site): add homepage hero links`
- `fix(layout): remove viewport overflow`
- `docs(readme): improve recruiter section`

Common types:

- `feat` - new feature
- `fix` - bug fix
- `docs` - documentation only
- `style` - visual/formatting changes without behavior change
- `refactor` - code structure change without behavior change
- `perf` - performance improvement
- `test` - add/update tests
- `build` - build/dependency changes
- `ci` - CI/CD workflow changes
- `chore` - maintenance tasks
- `revert` - revert a previous commit

Common scopes in this repo:

- `site`, `layout`, `styles`, `fonts`, `seo`, `readme`, `deploy`, `ci`

### Useful Reference

- Astro docs: https://docs.astro.build
