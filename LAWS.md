# LAWS.md

These laws govern all work completed on the Yard Football Creative website and related systems.

---

## Core Product & Brand Laws

### LAW 1 — Mission Alignment
Every decision must support the mission:
building meaningful football environments for girls and women across community and elite spaces.

### LAW 2 — Brand Authenticity
The website must feel football-native, modern, and grounded.
It must not feel like a generic startup or template.

### LAW 3 — Simplicity First
Simple beats impressive.
Avoid unnecessary complexity in UX, code, and structure.

### LAW 4 — Clarity Over Design
Every page must answer:
- what is this?
- who is it for?
- what should I do next?

### LAW 5 — Content First
Design must support content.
No empty or filler sections.

### LAW 6 — Consistency
Maintain consistent typography, spacing, and components.

### LAW 7 — Mobile-First
Mobile usability is mandatory.

### LAW 8 — Accessibility is Mandatory
Use semantic HTML, proper contrast, and accessible patterns.

### LAW 9 — Performance is Trust
Avoid heavy dependencies and slow-loading assets.

### LAW 10 — No Drift
Do not allow the project to become generic or lose its football identity.

---

## Asset Integrity Laws

### LAW 35 — Logo Integrity
If a logo is provided, it must be used exactly as supplied.

Allowed:
- resizing
- responsive scaling
- alignment and positioning adjustments

Not allowed:
- altering colours
- changing proportions
- modifying shapes or geometry
- adding effects or overlays
- recreating or approximating the logo

The logo is a protected brand asset and must remain visually consistent across all uses.

---

## Engineering & Execution Laws

### LAW 11 — No Hallucinated Functionality
Do not invent features or behaviours not defined by the project.

### LAW 12 — Contracts Before Implementation
Work in this order:
1. structure
2. content
3. UI
4. behaviour

### LAW 13 — No Premature Complexity
Avoid over-engineering and unnecessary abstractions.

### LAW 14 — Reusability With Restraint
Reuse components where useful, but avoid early over-abstraction.

### LAW 15 — Forms Are Core Product Flows
Forms must be treated as critical user journeys.

### LAW 16 — No Hidden State
Keep behaviour explicit and understandable.

---

## Git & Automation Laws (Codex-Controlled)

### LAW 17 — Codex Owns Git Workflow
Codex must automatically manage:
- branch creation
- pulling latest changes
- committing changes
- pushing to remote

The user should not need to manually manage git for standard phase work.

### LAW 18 — Branch Per Phase/Subphase
Each roadmap phase or subphase must:
- be completed on its own branch
- use clear naming (e.g. `phase-1-architecture`, `phase-3-content`)

### LAW 19 — Automatic Pull Before Work
Codex must always pull the latest changes before starting new work.

### LAW 20 — Mandatory Commits
Codex must:
- create clean commits at logical checkpoints
- never leave important work uncommitted

### LAW 21 — Mandatory Pushes
Codex must push:
- at the end of each phase or subphase
- whenever a stable checkpoint is reached

### LAW 22 — No Dirty State
A phase cannot be considered complete if:
- there are uncommitted files
- there are known broken behaviours

### LAW 23 — Commit Clarity
Commits must clearly describe intent and reference phases.

---

## Roadmap Enforcement Laws

### LAW 24 — Roadmap is Canonical Execution Plan
All work must follow ROADMAP.md phases strictly.

### LAW 25 — Automatic Phase Completion Updates
When Codex completes a phase or subphase, it must:
- update ROADMAP.md
- mark the phase/subphase as complete
- optionally add notes on what was delivered

### LAW 26 — No Phase Skipping
Do not jump ahead or mix phases without explicit instruction.

---

## Collaboration & Codex Behaviour Laws

### LAW 27 — Full File Outputs Only
Always generate complete files, not partial diffs.

### LAW 28 — Documentation is Part of the Product
All structural decisions must be reflected in documentation.

### LAW 29 — Behaviour Preservation
Do not break existing working functionality unintentionally.

### LAW 30 — Fix Problems, Don’t Bypass Them
Fix root causes instead of implementing shortcuts.

### LAW 31 — Safe Operations Only
Avoid destructive or broad operations. Use precise changes.

---

## Privacy & Safeguarding Laws

### LAW 32 — Minimal Data Collection
Only collect necessary information.

### LAW 33 — Youth Awareness
Assume users may include minors.
Design responsibly.

### LAW 34 — Transparency
Clearly explain what users are submitting and why.

---

## Definition of Done

A task or phase is complete when:
- it aligns with mission and brand
- it improves clarity or usability
- it follows the roadmap
- it works on mobile
- it maintains consistency
- it is committed and pushed
- ROADMAP.md is updated accordingly
