# CONTRIBUTING.md

## Working Rules
- read `LAWS.md` before making structural changes
- read `ROADMAP.md` before adding new work
- read `PHASE_0_DIRECTION.md` and `PHASE_1_FOUNDATION.md` before changing organisation, content, or structural direction
- document major decisions
- avoid scope drift
- preserve existing working behaviour unless change is intentional

## Workflow
1. understand the current structure
2. identify the page or system purpose
3. propose or implement the smallest clean change
4. confirm consistency with laws and roadmap
5. update docs if structure changes

## Governance Baseline

The repository governance set is:
- `README.md` for project purpose and core goals
- `LAWS.md` for non-negotiable rules
- `ROADMAP.md` for canonical execution order
- `ARCHITECTURE.md` for structural direction
- `BRAND.md` for positioning and brand guardrails
- `CONTENT_STRATEGY.md` for page jobs and content rules
- `PHASE_0_DIRECTION.md` for asset-led design direction
- `PHASE_1_FOUNDATION.md` for mission, audiences, programs, and conversion goals
- `PHASE_2_INFORMATION_ARCHITECTURE.md` for the five-page v1 sitemap, navigation, page-purpose, CTA, and footer baseline
- `PHASE_3_BRAND_SYSTEM.md` for the brand-system decisions that translate the asset library into website-ready colour, typography, component, spacing, image, voice, and theme rules
- `PHASE_4_CORE_CONTENT.md` for the sequential Phase 4 copy drafting that preserves `assets/YARD.pdf` as the canonical website-content source
- `PHASE_6_CORE_PAGE_BUILD.md` for the Phase 6 frontend, CMS-model, and content-entry decisions for `Programs` and `Events`

Contributors should keep these documents aligned when making foundational changes.

## Commit Style
Use clear commits, for example:
- `feat: build programs overview page`
- `refactor: unify section spacing system`
- `docs: define brand and content strategy`
- `fix: improve mobile nav accessibility`

## Pull Request Expectations
Any PR should state:
- what changed
- why it changed
- whether architecture changed
- whether docs were updated
- whether mobile/accessibility was reviewed
