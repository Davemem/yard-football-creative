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

## 7.2 Primary Email Enquiry Form Aligned to the Agreed Contact Workflow

### Page Scope

The primary email enquiry flow should live on `contact.html` as the clearest direct-contact destination for the site.

### Contact Form Contract

The primary contact form should now include:

- `name`
- `email`
- `enquiryType`
- `message`

This keeps the form small while giving Yard enough context to reply clearly.

### Workflow Alignment

The contact form should:

- submit through the existing static AJAX workflow
- keep `contact@yardfc.com` as the delivery destination
- show visible validation, pending, success, and error states
- explain that the enquiry is sent by email
- provide a direct email fallback on the page itself

### Copy and Transparency Rules

The contact page should clearly state:

- what kinds of messages belong here
- what information is submitted
- that Yard can reply by email after submission
- that users can email directly if the form fails

### Frontend Reuse Rule

The JavaScript should move toward a shared enquiry-form handler rather than a contact-page-only implementation so the later registration-interest form can reuse the same behaviour without duplicating validation logic.

## 7.3 Registration-Interest Form Flow for Programs and Pathway Enquiries

### Page Scope

The registration-interest flow should live on `programs.html` so visitors can act directly from the pathway page instead of being forced back to general contact for every next step.

### Form Contract

The registration-interest form should include:

- `name`
- `email`
- `interestType`
- `message`

This matches the shared field-restraint rule while giving just enough context for Yard to reply meaningfully.

### Routing Rule

The `Programs` page should route:

- hero CTA into the registration-interest section
- community-pathway interest CTA into the same section
- elite-pathway next-step CTA into the same section

This creates one clear pathway-specific conversion destination instead of scattering users across multiple competing actions.

### Workflow Rule

The form should:

- submit through the same static email workflow as the main contact form
- deliver to `contact@yardfc.com`
- reuse the shared enquiry-form behaviour for validation and status messaging
- keep a direct fallback path to the main contact page for broader collaboration or non-program contact

## 7.4 Trust Through Coach or Staff Bios Grounded in Approved Source Material

### Source Boundary

The current approved source material does not provide full individual bios for a wider staff group.
It does provide enough to add a legitimate founder-credibility layer drawn from the existing Yard story.

### v1 Trust Approach

The first trust implementation should therefore use:

- a combined founder profile
- lived football and coaching experience
- the existing safe-environment motivation

This is a safer v1 move than inventing individual credentials, clubs, or role histories that have not been approved.

### Page Placement

The founder-credibility layer should strengthen `about.html` because that page already carries the source story and is the clearest place for visitors to evaluate who is behind Yard.

## 7.5 Testimonials or Social-Proof Sections Using Only Approved Proof Signals

### Proof Rule

The current repository still does not include approved participant testimonials.
The v1 proof layer should therefore use:

- founder lived experience
- visible current activity
- access to current programs and events
- Instagram as the primary current-activity proof destination

### Implementation Rule

Proof sections should make Yard feel active and legitimate without claiming outcomes, participant numbers, or quotes that are not currently supported by the source material.

## 7.6 Safeguarding and Values Guidance Where It Materially Improves Trust

### Source Boundary

The repository does not yet include a formal safeguarding policy or approved detailed safeguarding procedure page.

### v1 Guidance Rule

The trust layer should therefore use:

- approved safety language from the existing Yard story
- belonging and connection values from the canonical source copy
- clear, practical placement close to enquiry pathways

This keeps the site youth-aware and trustworthy without overstating operational policy detail that has not been approved for publication.
