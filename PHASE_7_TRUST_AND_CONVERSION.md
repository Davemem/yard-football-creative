# PHASE_7_TRUST_AND_CONVERSION.md

This document records the iterative outputs for Phase 7 in the exact order defined in `ROADMAP.md`.
It builds on the Phase 5 UI system, the Phase 6 page structure, and the Phase 1 to Phase 4 brand, content, and conversion rules.

## 7.1 Shared Enquiry-Form Model for v1 Trust and Conversion Flows

### Scope

The shared enquiry-form model for v1 should cover:

- the primary direct-contact form on `contact.html`
- the registration-interest form flow on `programs.html`
- any later event or collaboration enquiry forms that reuse the same frontend pattern

### Form Purpose Rule

Every enquiry form must answer three things clearly before submission:

- what this form is for
- who should use it
- what happens after it is sent

This keeps the forms aligned to `LAW 4 — Clarity Over Design`, `LAW 15 — Forms Are Core Product Flows`, and `LAW 34 — Transparency`.

### Shared Field Restraint

All v1 enquiry forms should stay intentionally small.
Only collect information needed to understand the request and reply through `contact@yardfc.com`.

The shared v1 field model should be:

- `name`
- `email`
- `enquiryType` or `interestType` when the form needs lightweight routing context
- `message`

Optional context fields may be added only when they materially reduce follow-up friction and do not drift into speculative admin tooling.

The forms should not ask for:

- date of birth
- home address
- medical history
- school details
- excessive player profiling
- multiple-step conditional questionnaires

### Shared Behaviour Contract

Every v1 enquiry form should support:

- inline required-field validation
- a visible pending state during submission
- a clear success state after submission
- a clear error state that falls back to direct email contact
- a honeypot field or similarly low-complexity anti-spam measure

The frontend implementation should remain static-site compatible and understandable inside the existing JavaScript architecture.

### Contact Workflow Contract

The approved v1 contact workflow is:

- submit through a static form-post workflow
- route submissions to `contact@yardfc.com`
- keep the page copy explicit about what data is being sent
- provide a direct `mailto:` fallback when the form cannot be sent

No custom backend should be introduced for this phase unless a later approved phase proves the static workflow insufficient.

### CTA Routing Rule

The form system should preserve distinct intents without creating separate products:

- general contact and collaboration should route to the primary contact form
- program or pathway interest should route to the registration-interest form
- event attendance or collaboration should still have a clear path back to direct contact

### Trust Layer Relationship

Forms should not stand alone.
Each conversion page should pair form access with at least one trust layer such as:

- founder or staff credibility
- lived-experience proof
- safeguarding or values guidance
- direct contact options
- relevant location context when approved information exists

### Copy Rule

Form labels and helper copy should stay:

- plain-language
- calm
- direct
- trustworthy

They should avoid:

- hype
- vague marketing language
- admin-heavy terminology
- unnecessary friction

### v1 Reuse Rule

The implementation should reuse one frontend form pattern across pages wherever practical:

- shared field-group structure
- shared status messaging pattern
- shared validation styling
- shared submit-button behaviour

This keeps the system consistent without over-abstracting it into a framework.
