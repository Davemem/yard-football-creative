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
