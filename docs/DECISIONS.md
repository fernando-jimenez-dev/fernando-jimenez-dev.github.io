# Decisions

This file records key project decisions and rationale.

## D-001: Static Astro Site

- Status: Accepted
- Decision: Build as static Astro site and deploy to GitHub Pages.
- Why: Fast, low maintenance, durable, minimal runtime complexity.

## D-002: Feature-Oriented Homepage Structure

- Status: Accepted
- Decision: Organize homepage under `src/features/index/`.
- Why: Better cohesion, easier section-level iteration, cleaner ownership.

## D-003: Fontsource Variable Fonts

- Status: Accepted
- Decision: Use Fontsource variable packages instead of local font binaries.
- Why: More reliable loading, cleaner font pipeline, simpler maintenance.

## D-004: About Section Owns Its Rail

- Status: Accepted
- Decision: Keep About vertical rail/tint logic in `AboutSection.astro`, not `IndexPage.astro`.
- Why: Visual behavior is section-specific and easier to reason about locally.

## D-005: Mobile Simplicity Over Decorative Lines

- Status: Accepted
- Decision: Remove About vertical rails on mobile while preserving a subtle snapshot tint.
- Why: Improve readability and reduce visual clutter on small screens.

## D-006: Conventional Commits + PR Template

- Status: Accepted
- Decision: Use Conventional Commits and standard PR template.
- Why: Better repo hygiene, easier review, clearer history.
