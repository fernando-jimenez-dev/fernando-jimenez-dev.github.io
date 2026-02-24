# Architecture

## Overview

- Framework: Astro
- Rendering model: static site generation
- Deployment target: GitHub Pages
- Styling model: global CSS + component-local styles

## Source Map

- `src/pages/index.astro`: route entrypoint
- `src/layouts/SiteLayout.astro`: layout shell and global stylesheet import
- `src/features/index/IndexPage.astro`: homepage composition
- `src/features/index/components/HeroSection.astro`: hero section
- `src/features/index/components/AboutSection.astro`: about section
- `src/styles/global.css`: global typography and utility classes

## Styling Boundaries

- Global typography tokens live in `src/styles/global.css`.
- Section-specific visuals belong in each section component.
- Layout spacing/composition belongs in `IndexPage.astro`.

## Typography Pipeline

Fonts are managed via Fontsource variable packages:

- `@fontsource-variable/inter`
- `@fontsource-variable/space-grotesk`
- `@fontsource-variable/jetbrains-mono`

Use CSS variables in `global.css`:

- `--font-body`
- `--font-heading`
- `--font-mono`

## About Section Contract

Desktop/tablet:

- One left muted rail for About block.
- Snapshot subsection overlays accent line and tint.
- Story remains on muted baseline rail.

Mobile:

- Vertical rails are removed.
- Snapshot tint remains to preserve emphasis.

## Non-Goals

- No runtime backend.
- No CMS by default.
- No heavy frontend framework.
- No high-motion UI patterns.
