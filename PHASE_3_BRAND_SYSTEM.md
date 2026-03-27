# PHASE_3_BRAND_SYSTEM.md

This document records the iterative outputs for Phase 3 in the exact order defined in `ROADMAP.md`.
It translates the approved asset baseline from `assets/YARD.pdf`, `assets/Logos/`, and `assets/yardfc_ball_transparent.png` into a repeatable brand system for the future website.
Only the supplied logo files in `assets/Logos/` may be used.
No inferred, redrawn, recoloured, remixed, or newly generated logo variants may be introduced.

## 3.1 Colour Palette

### Palette Principle

The Yard palette should feel earthy, football-native, and poster-led.
It should preserve the emotional truth of the PDF while staying flexible enough to support multiple approved logo families without turning the site into a loud theme-switching experiment.

The baseline palette therefore uses:
- restrained field and ground colours for structure
- brighter accent colours only where they create orientation or brand recognition
- enough tonal depth to support both light and dark mode later in Phase 3

### Core Neutral and Structural Colours

- `Ground Mist` — `#A6A6A6`
  The key muted grey sampled from the `assets/YARD.pdf` cover and interior pages.
  This should remain the main reference for calm, poster-like background surfaces.
- `Field Depth` — `#2E6417`
  The dark green taken from the dominant circular mark on the PDF cover.
  This is the main structural anchor for headings, dividers, and dark surfaces.
- `Chalk White` — `#FFFFFF`
  Reserved for high-contrast text and selective light-mode relief.
- `Ink` — `#111111`
  Website body text should use a near-black neutral rather than a softened grey so readability stays strong.

### Primary Accent Colours

- `Acid Grass` — `#7DD957`
  The main high-energy Yard accent from the PDF cover and green-led logo family.
  Use for high-importance emphasis, active states, and selected CTA moments.
- `Warm Whistle` — `#FFDE58`
  The handwritten yellow cue from the PDF cover.
  Use sparingly for eyebrow text, micro-highlights, and short emphasis moments.
- `Clay Ball` — `#DDA07A`
  The football colour from `assets/yardfc_ball_transparent.png`.
  Use for warm supporting accents, illustration moments, and story-led surfaces.

### Supporting Theme Expansion Colours

- `Lime Flood` — `#BFFF68`
  The bright background colour used by approved lime-led logos such as `LOGO-1_light`.
  This is suitable for high-energy theme variants, not the default long-form background.
- `Backyard Rust` — `#9D4B18`
  The small rust signature accent present in `LOGO-1_light`.
  This should be treated as a narrow supporting accent for detail, not a dominant page colour.
- `Lavender Night` — `#D99EF3`
  The soft purple field from approved dark variants such as `LOGO-5_dark`.
  This enables a legitimate alternate theme family without inventing new colour logic.
- `Violet Outline` — `#821DAC`
  The darker purple linework from the same logo family.
  Use only inside the approved purple theme family.
- `Pale Net` — `#D9F4CD`
  The pale green line colour from `assets/yardfc_ball_transparent.png`.
  This is useful for soft separators, tinted surfaces, or illustration support where a full lime accent would feel too loud.

### Usage Hierarchy

1. `Ground Mist`, `Field Depth`, `Chalk White`, and `Ink` form the stable interface foundation.
2. `Acid Grass` is the primary default brand accent.
3. `Warm Whistle` and `Clay Ball` provide selective warmth and poster character.
4. `Lime Flood`, `Backyard Rust`, `Lavender Night`, `Violet Outline`, and `Pale Net` support approved theme variation and should not overwhelm the shared Yard identity.

### Colour Ratio Guidance

- Most long-form page space should remain neutral, earthy, and quiet.
- Structural dark green should appear more often than bright lime.
- Bright accents should be concentrated around logos, headings, borders, buttons, and short highlight moments.
- Warm clay and yellow tones should act as balancing notes, not the main canvas.
- Alternate theme colours should be activated intentionally by theme choice, not mixed together on the same screen without purpose.

### Accessibility Guardrails

- Body copy must sit on high-contrast surfaces and should not use lime, yellow, or clay as paragraph text colours.
- `Acid Grass` and `Warm Whistle` should mainly be used against dark surfaces or in larger, short-form text treatments.
- Quiet background colours must stay light enough or dark enough to preserve readable contrast with `Ink` or `Chalk White`.
- Decorative colour use must never reduce CTA clarity or make the interface feel busier than the content itself.

### Phase 3 Colour Outcome

This palette keeps the website anchored to the real asset system:
- muted grey for grounded page atmosphere
- dark green and acid-lime for the clearest Yard recognition
- warm yellow and clay for memory, story, and football texture
- approved purple as a real alternate family already present in the supplied logos

The result is distinct enough to avoid generic sports-site drift while still calm enough to support content-led page design.

## 3.2 Typography Choices

### Typography Principle

Yard typography should feel clean, human, and football-native.
It should let the supplied logos carry the rough hand-drawn brand edge while the website text system stays highly readable, mobile-safe, and repeatable.

The website should therefore use a restrained two-family system:
- one condensed family for headings, labels, and directional emphasis
- one highly legible sans family for body copy, forms, and interface text

### Approved Website Typeface Roles

- `Heading and navigation family` — `Barlow Condensed`
  Use for page titles, section headings, navigation labels, buttons, and short emphasis blocks.
  Its condensed structure supports football-poster energy without relying on fake handwritten effects.
- `Body and interface family` — `Public Sans`
  Use for paragraphs, list copy, form labels, helper text, and longer informational blocks.
  It keeps the system readable and contemporary without feeling like a startup template default.

### Brand Display Rule

- The supplied Yard logos are the primary hand-drawn display expression of the brand.
- Their lettering must not be recreated as typed web headings or imitated with novelty fonts.
- Handwritten feeling on the website should come from the approved assets, short accent treatments, and layout rhythm, not from forcing all text into faux-marker typography.

### Hierarchy Model

1. `Display moments`
   Use the approved logos, hero lockups, and occasional oversized `Barlow Condensed` headings for the main atmosphere-setting moments.
2. `Section headings`
   Use `Barlow Condensed` at bold weights with strong size contrast and restrained line counts.
3. `Body copy`
   Use `Public Sans` at regular or medium weight with comfortable line-height for long-form readability.
4. `Microcopy`
   Use `Public Sans` for labels, captions, helper text, and form explanation copy so the interface remains calm and clear.

### Typographic Behaviour Rules

- Headlines should stay short, direct, and easy to scan in one or two lines where possible.
- All-caps may be used for short labels, nav items, or eyebrow text, but should be avoided for long headings and body copy.
- Paragraph width should stay moderate so story-led sections remain comfortable on mobile and desktop.
- Large heading scale shifts are encouraged, but only when the surrounding layout stays simple.
- Text alignment may vary by section, but centre alignment should be reserved for short poster-style moments rather than long reading blocks.

### Weight and Rhythm Guidance

- `Barlow Condensed` should generally use semibold, bold, or black weights for clarity and confidence.
- `Public Sans` should generally use regular, medium, and semibold weights.
- Long-form copy should prioritise generous line-height over tight magazine-style density.
- Lists, FAQs, and practical information should favour clean vertical spacing rather than decorative typography.

### What to Avoid

- default system-font styling that makes the site feel unfinished
- trendy display fonts that compete with the supplied logos
- overly geometric sans families that feel too corporate or tech-led
- serif-heavy editorial styling that weakens the football energy
- excessive font mixing beyond the approved two-family website system

### Phase 3 Typography Outcome

This typography system gives the site:
- strong condensed headings with football-poster energy
- calm, trustworthy body copy for parents, players, and partners
- a clear separation between asset-led brand expression and website reading comfort

It keeps the site distinct without making the interface harder to use.

## 3.3 Button Styles

### Button Principle

Buttons should feel direct, grounded, and unmistakably intentional.
They should borrow from the rounded label moments in `assets/YARD.pdf` without turning every CTA into a playful novelty chip.

The system should stay small:
- one strong primary button
- one quieter secondary button
- one low-emphasis text action

### Primary Button

- shape: rounded capsule with generous horizontal padding
- default treatment: dark surface with bright accent text or border-led emphasis, depending on theme contrast needs
- typography: `Barlow Condensed` in uppercase or title case, medium-to-bold weight
- use case: the main page action such as `Explore Programs`, `Contact Yard`, or `Send Enquiry`

Primary buttons should read as the clearest action on the screen without requiring oversized scale or decorative icons.

### Secondary Button

- shape: same rounded capsule structure as the primary button
- treatment: quieter surface or outline treatment that sits below the primary action
- typography: same button typography as primary for consistency
- use case: supporting actions such as `View Events` or secondary pathway jumps

Secondary buttons should feel related to the primary action, not like a different component family.

### Text Action

- shape: no capsule container
- treatment: text plus optional underline, arrow, or directional cue
- typography: `Barlow Condensed` for short directional actions, `Public Sans` only where a link sits inside paragraph copy
- use case: tertiary actions, footer links, and in-flow support links

Text actions should remain obviously clickable but visually subordinate to real CTAs.

### Size and Rhythm Rules

- Buttons should have enough height for comfortable thumb use on mobile.
- Horizontal padding should make short labels feel calm rather than cramped.
- A page should rarely introduce more than one primary button in the same viewport.
- Button groups should stack cleanly on mobile before expanding horizontally on wider screens.

### State Rules

- hover and focus states should increase clarity, not invent extra colour noise
- focus indication must be obvious and accessible
- disabled states should remain readable while clearly non-interactive
- pressed states may slightly deepen surface tone or border contrast, but should not shift to unrelated colours

### What to Avoid

- sharp-cornered enterprise-style buttons that break the softer asset rhythm
- ghost buttons so faint that CTA priority disappears
- icon-heavy buttons that make the site feel app-like instead of editorial and football-native
- multiple competing bright CTA colours on the same screen
- overly decorative shadows or gradients that were not established by the supplied assets

### Phase 3 Button Outcome

The Yard button system should feel:
- rounded but not childish
- bold but not noisy
- consistent across every page and theme
- trustworthy enough for critical contact and enquiry flows

It gives future UI work a strong CTA hierarchy without adding unnecessary component complexity.

## 3.4 Spacing System

### Spacing Principle

Yard should feel spacious, editorial, and calm.
The spacing system must preserve the poster-like breathing room established in `assets/YARD.pdf` while still supporting practical mobile scanning and conversion.

### Base Scale

Use an `8px` base rhythm with the following core steps:
- `8`
- `16`
- `24`
- `32`
- `48`
- `64`
- `96`

Additional `12` and `20` pixel moments may be used sparingly for tighter UI alignment, but the system should mostly stay on the core scale above.

### Recommended Usage

- `8-16`
  Micro spacing for icon gaps, compact labels, and tight inline relationships.
- `24-32`
  Standard spacing between small UI groups, stacked actions, and compact section elements.
- `48-64`
  Primary section padding for most mobile layouts and standard desktop content bands.
- `96`
  Large hero and major section separation where the brand needs strong atmosphere and a slower storytelling pace.

### Layout Rhythm Rules

- Sections should feel intentionally separated rather than stacked edge-to-edge.
- Story-led pages should prefer fewer sections with more breathing room over many compressed content bands.
- Repeated card grids should keep internal spacing consistent so the page still feels calm.
- CTA zones should receive extra vertical space before and after so action moments feel deliberate.

### Mobile-First Guardrails

- Mobile should never rely on desktop whitespace values scaled down awkwardly.
- Core mobile sections should usually live in the `24-48` spacing range, with hero or mission moments expanding when needed.
- Tap targets, nav rows, and form fields must maintain comfortable spacing even when the layout gets dense.
- Copy blocks should not be squeezed to fit more modules above the fold.

### Desktop Expansion Rules

- Desktop spacing should increase atmosphere, not create emptiness for its own sake.
- Wide layouts should use spacing to frame a few strong content groups rather than spreading every element apart equally.
- Large screens should preserve clear relationships between headline, supporting copy, and CTA clusters.

### What to Avoid

- cramped stacked sections that make the site feel template-like
- inconsistent margin jumps that weaken visual rhythm
- decorative empty bands with no content job
- overuse of very large gaps that make the site feel unfinished
- tiny card padding that undermines readability or touch comfort

### Phase 3 Spacing Outcome

The Yard spacing system should create:
- calm page rhythm
- strong poster-like pauses
- clear content grouping
- reliable mobile comfort

It keeps the future UI simple, consistent, and distinctly non-generic.
