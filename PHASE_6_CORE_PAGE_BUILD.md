# PHASE_6_CORE_PAGE_BUILD.md

This document records the iterative outputs for Phase 6 in the exact order defined in `ROADMAP.md`.
It builds on the static frontend completed in Phase 5 and keeps the Phase 1 to Phase 4 content, IA, and brand rules in force while the first content-managed page flows are introduced.

## 6.3 Initial API CMS Model for v1 `Programs` and `Events`

### Chosen Model

The initial API CMS model for v1 should be:

- `Sanity Content Lake` as the content source for `program` and `event` entries
- `Sanity CDN API` as the read-only frontend delivery path
- browser-side `fetch()` reads from the public content API for `Programs` and `Events`
- no separate custom backend for the first CMS pass unless a later phase proves it is required

### Why This Is the Best Fit for v1

- It matches the roadmap's static-first frontend boundary.
- It keeps the editable scope intentionally narrow to `Programs` and `Events`.
- It supports a read-only public content API without forcing a custom admin system.
- It gives non-technical editors a real CMS interface instead of requiring repository edits.
- It fits the later roadmap references to CMS project configuration, dataset IDs, and publishing workflow review.

### v1 Integration Boundary

- The website should treat the CMS as a read-only published-content source.
- Only `Programs` and `Events` should be CMS-managed in this first pass.
- Core evergreen pages such as `Home`, `About`, and `Contact` should remain file-authored for now.
- The frontend should request only the fields needed to render the listing cards and related calls to action.

### Frontend Delivery Rule

- The v1 site should fetch published entries directly from the CMS API.
- The fetch layer should stay small, framework-free, and understandable inside the existing static-site JavaScript.
- If the CMS is unavailable or returns no published entries, the frontend must fall back to clear empty or error messaging rather than breaking the page.

### Editorial Rule

- The CMS choice is approved only because it keeps editing focused and simple for non-technical users.
- If the configured studio, fields, or publishing flow become confusing in practice, that should be treated as a product problem to fix in later phases.
