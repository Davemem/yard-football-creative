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

## 6.4 Minimum CMS Content Schema for `program` and `event` Entries

### Schema Files

- `cms/schemas/program.js`
- `cms/schemas/event.js`
- `cms/schemas/index.js`

### Minimum Shared Contract

Both schema types should support:

- a clear listing title
- a short category label
- a short status label for the card pill
- a summary line suitable for card rendering
- date information for ordering and previous/upcoming separation
- one approved primary CTA label and URL
- a low-complexity display-order field for manual tie-breaking

### `program` Entry Fields

The minimum `program` schema should include:

- `title`
- `category`
- `pathway`
- `statusLabel`
- `summary`
- `audience`
- `location`
- `startDate`
- `endDate`
- `primaryCtaLabel`
- `primaryCtaUrl`
- `displayOrder`

### `event` Entry Fields

The minimum `event` schema should include:

- `title`
- `category`
- `statusLabel`
- `summary`
- `location`
- `startDate`
- `endDate`
- `timeLabel`
- `primaryCtaLabel`
- `primaryCtaUrl`
- `displayOrder`

### Schema Restraint Rule

- The schema should stay narrowly focused on the Phase 6 listing-card requirements.
- Rich body content, galleries, testimonials, partners, or deeper program-page modules should not be added at this stage.
- Any later schema expansion should be justified by a documented page job or roadmap phase rather than added speculatively.

## 6.5 `Programs` Connected to API-Driven Program Entries

### Frontend Wiring

- The `Programs` page should load entries through a dedicated Sanity client script.
- The page should render only published `program` documents returned by the read-only Sanity query.
- The existing static placeholder should no longer be the only source of truth for the listings area.

### Rendering Contract

- Program entries should render through the shared listing-card template defined in Phase `6.2`.
- The frontend should map Sanity fields into the card's category, status, title, summary, meta row, and CTA.
- Date values should remain available to the existing upcoming or previous sorting logic when they are present in Sanity.

### Safety Rule

- If Sanity project configuration is not present yet, the frontend should fail quietly for now and leave the listings area untouched.
- Clear loading, empty, and API-error messaging will be formalised in Phase `6.7`.
