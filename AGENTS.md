# AGENTS.md

This file captures project-specific guidance for AI coding agents working in this repository.

## Project Overview

- Personal website built with Astro.
- Static site deployed to GitHub Pages.
- Main user goal: clear technical communication, clean structure, pragmatic implementation.

## Current Tech Decisions

- Framework: Astro (`src/pages`, `src/layouts`, `src/features`).
- Styling: custom CSS (no UI framework).
- Fonts: Fontsource variable packages, not local font binaries.
- CI/CD: GitHub Actions.
- PR workflow: default template at `.github/pull_request_template.md`.

## Source Layout (Important)

- `src/pages/index.astro`: route entry.
- `src/layouts/SiteLayout.astro`: site layout wrapper and global imports.
- `src/features/index/IndexPage.astro`: homepage composition container.
- `src/features/index/components/HeroSection.astro`: hero content.
- `src/features/index/components/AboutSection.astro`: long-form about content and section-specific styling.
- `src/styles/global.css`: global typography and shared utility classes.

## Typography Rules

Use Fontsource variable families only:

- `@fontsource-variable/inter`
- `@fontsource-variable/space-grotesk`
- `@fontsource-variable/jetbrains-mono`

Global CSS variables in `src/styles/global.css`:

- `--font-body: "Inter Variable"`
- `--font-heading: "Space Grotesk Variable"`
- `--font-mono: "JetBrains Mono Variable"`

Utility classes (must remain available):

- `.font-body`
- `.font-heading`
- `.font-mono`

Do not reintroduce local `@font-face` blocks pointing to `public/fonts/*` unless explicitly requested.

## About Section Visual Contract

Implemented in `src/features/index/components/AboutSection.astro`:

- Desktop/tablet:
  - Single left vertical rail for the whole About block (`.about::before`).
  - Accent overlay line for snapshot block only (`.about-snapshot::before`).
  - Subtle snapshot tint (`.about-snapshot::after`) begins at the rail.
- Mobile (`max-width: 768px`):
  - Vertical rails removed (`.about::before` and `.about-snapshot::before` disabled).
  - Snapshot tint remains to preserve emphasis.
  - Snapshot spacing tuned to a subtle highlight, not a heavy card.

Do not move About rail ownership back to `IndexPage.astro` unless explicitly requested.

## Homepage Composition Guidance

- Keep `HeroSection` and `AboutSection` as separate feature components.
- Keep section layout concerns in `IndexPage.astro`.
- Keep section-internal visual semantics inside each section component.
- Avoid duplicate line systems across Hero/About that compete visually.

## Content/Encoding Notes

- Existing content may include legacy mojibake artifacts (for example `â€”`).
- Preserve user-authored copy unless asked to normalize text encoding/content.

## README and Docs Consistency

When architecture, stack, or workflow changes:

- Update `README.md` in the same branch.
- Keep README structure map aligned with actual folders/files.
- Keep stack section aligned with real implementation (Fontsource, layout names, etc.).

## Commit and PR Conventions

Follow Conventional Commits (from README):

- Example: `feat(site): ...`, `fix(styles): ...`, `docs(readme): ...`
- Typical scopes: `site`, `layout`, `styles`, `fonts`, `seo`, `readme`, `deploy`, `ci`

PRs should use `.github/pull_request_template.md` structure:

- Summary
- Changes
- Acceptance Criteria
- Notes
- Related

## Agent Working Preferences for This Repo

- Prefer targeted edits over broad refactors.
- Keep CSS changes localized and intentional.
- Preserve existing visual language unless user asks for redesign.
- For UI tweaks, optimize for readability first, decoration second.
- Validate with quick file-level checks (`rg`, diff) before finishing.

## Pre-Completion Checklist

Before finishing a task, verify:

- No accidental reintroduction of local font files in active CSS pipeline.
- About rail/tint behavior still matches desktop vs mobile contract.
- No unrelated files were modified.
- README/PR template/docs are updated if task changed process or structure.
