# Copilot Instructions

Repository guidance for AI-assisted edits.

## Project Context

- Astro static personal website.
- Prioritize clarity, maintainability, and restrained UI decisions.
- Keep architecture feature-oriented (`src/features/*`).

## Key Files

- `src/layouts/SiteLayout.astro`
- `src/pages/index.astro`
- `src/features/index/IndexPage.astro`
- `src/features/index/components/HeroSection.astro`
- `src/features/index/components/AboutSection.astro`
- `src/styles/global.css`
- `AGENTS.md`

## Implementation Rules

- Use Fontsource variable fonts via `src/styles/global.css`.
- Keep global font variables and utility classes intact.
- Keep About rail/tint behavior scoped to `AboutSection.astro`.
- On mobile, About uses tint emphasis without vertical rails.
- Avoid introducing UI framework dependencies.

## Workflow Rules

- Keep changes focused and minimal.
- Use Conventional Commits.
- Keep PRs aligned with `.github/pull_request_template.md`.
- Update docs if structure/process changes.

## Do Not

- Reintroduce local `@font-face` pipeline unless explicitly requested.
- Move section-specific visual semantics into global/page composition without need.
- Include unrelated cleanup in feature changes.
