# AI Guardrails

This document defines rules for AI-assisted changes in this repository.

## Goals

- Keep changes small and intentional.
- Preserve design clarity and readability.
- Avoid regressions in structure, performance, and accessibility.

## Must Follow

- Respect `AGENTS.md`.
- Follow commit convention from `README.md` and `CONTRIBUTING.md`.
- Keep section-specific styles in section components.
- Keep global tokens in `src/styles/global.css`.
- Update docs when structure/process decisions change.

## Must Avoid

- Reintroducing local `@font-face` font pipeline without explicit request.
- Moving About rail behavior to page-level composition.
- Large unrelated refactors in the same PR.
- Destructive git operations unless explicitly requested.

## Validation Before Completion

- Confirm changed files are related to request.
- Confirm mobile behavior for touched UI sections.
- Confirm font classes/tokens still resolve correctly.
- Provide clear summary of what changed and why.

## Preferred Change Pattern

- Inspect target files.
- Make minimal patch.
- Verify with quick search/diff.
- Report exact files touched and expected effects.
