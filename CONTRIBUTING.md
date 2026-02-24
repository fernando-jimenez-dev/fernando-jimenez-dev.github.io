# Contributing

This project is a static Astro site with disciplined, low-noise workflows.

## Workflow

- Create feature branches from `main`.
- Use Pull Requests for all changes.
- Keep PR scope focused and small.
- Do not commit directly to `main`.

## Branch Naming

Use `type/short-description`:

- `feat/homepage-copy-refresh`
- `fix/about-mobile-spacing`
- `docs/agents-guidelines`
- `chore/dependency-bump`

## Commit Convention

Use Conventional Commits:

- `feat(site): add hero link section`
- `fix(styles): reduce snapshot tint on mobile`
- `docs(readme): update architecture section`

Common types:

- `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

Common scopes:

- `site`, `layout`, `styles`, `fonts`, `seo`, `readme`, `deploy`, `ci`

## Pull Requests

PRs should follow `.github/pull_request_template.md`.

Include:

- What changed and why
- User-visible impact (especially UI)
- Validation steps performed
- Related issue/task if applicable

## Local Validation

Run from repo root:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Quality Guardrails

- Prefer small, intentional edits over broad refactors.
- Keep visuals calm, readable, and consistent.
- Preserve mobile readability.
- Update docs when architecture/process changes.
- Avoid introducing new dependencies without clear reason.
