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

## 3.5 Image Direction

### Image Principle

Yard imagery should prove that the organisation is real, football-rooted, and safe.
The site should favour authentic football environments, human energy, and grounded storytelling over generic sports-marketing polish.

### Photography Direction

Prioritise imagery that shows:
- girls and women actively playing, training, learning, or connecting through football
- real football environments such as fields, community spaces, workshops, and event settings
- moments of concentration, joy, teamwork, reflection, and progression
- intergenerational or community context where it supports trust and belonging

### Subject and Story Rules

- Images should support both community belonging and elite ambition.
- Players should look engaged and respected, not posed as generic promotional props.
- Families, coaches, and collaborators may appear when they help explain the wider Yard environment.
- Youth-facing imagery should remain responsible, respectful, and contextually appropriate.

### Composition Direction

- Prefer candid or lightly directed documentary-style moments over heavily staged team-photo energy.
- Crop for movement, posture, ball interaction, and emotional presence rather than empty background detail.
- Let negative space exist where the layout needs it, but do not force sterile minimalism.
- Favour images that can work inside editorial section layouts, not just edge-to-edge hero banners.

### Illustration and Graphic Use

- The supplied logo family and `assets/yardfc_ball_transparent.png` are approved graphic assets.
- Simple line, ball, or poster-style supporting graphics may appear only when derived from the approved asset language and not treated as a substitute for real photography.
- Graphic support should remain secondary to real football imagery when trust and proof are the page job.

### Colour and Editing Rules

- Photo treatment should stay natural and restrained.
- Avoid heavy filters, artificial HDR, intense duotones, or effects that flatten skin tone and football detail.
- Colour grading may gently harmonise with the earthy Yard palette, but should never overpower the original moment.
- Black-and-white use should be rare and purposeful.

### What to Avoid

- generic stock photos with no lived football specificity
- male-dominated imagery that conflicts with the brand mission
- overly polished academy-marketing poses
- hyper-aggressive elite imagery that erases warmth and belonging
- crowded collage treatments that make the site feel noisy

### Phase 3 Image Outcome

The image system should make Yard feel:
- active
- credible
- welcoming
- football-native
- grounded in real people and environments

It turns imagery into a trust layer, not decoration.

## 3.6 Tone of Voice Rules

### Voice Principle

Yard should sound like people who know football, care about people, and do not need hype to prove either.
The voice should balance warmth, credibility, and clarity so players, families, and partners all understand the organisation quickly.

### Core Voice Traits

- `Grounded`
  Speak from lived football reality rather than abstract brand language.
- `Warm`
  Invite people in without sounding soft or vague.
- `Direct`
  Say what Yard is, who it is for, and what happens next in plain language.
- `Credible`
  Let specificity, experience, and clear explanation do the trust-building.
- `Hopeful`
  Keep a sense of possibility and growth without drifting into empty motivation-speech.

### Sentence-Level Rules

- Prefer short-to-medium sentences over long promotional paragraphs.
- Lead with the point before expanding with story.
- Use football language when it helps clarity, but avoid insider jargon that blocks new visitors.
- Write calls to action in everyday terms such as `Explore Programs`, `Contact Yard`, or `Send Enquiry`.

### Emotional Range

- Community copy should feel welcoming, safe, and open.
- Elite copy should feel ambitious and credible without becoming exclusionary.
- Founder and story-led copy may become more reflective, but should still remain readable and purposeful.
- Contact and practical copy should become even plainer and more action-oriented.

### What the Voice Should Avoid

- startup-style disruption language
- empty empowerment slogans with no football substance
- exaggerated elite claims or academy-style bravado
- corporate partnership jargon that sounds detached from the mission
- overuse of exclamation marks, rhetorical questions, or dramatic sales phrasing

### Repeated Website Writing Rules

- answer `what is this?` early
- answer `who is it for?` clearly
- answer `what should I do next?` on every page
- keep trust and safeguarding language plain when relevant
- preserve the emotional truth of `assets/YARD.pdf` without copying its long passages everywhere

### Phase 3 Voice Outcome

The Yard voice should feel:
- modern but not trendy
- emotionally real but not sentimental
- ambitious but not intimidating
- welcoming but not vague

It should sound like a football organisation with purpose, not a template brand trying on football language.

## 3.7 Copy Examples

### Purpose of These Examples

These examples demonstrate the approved Phase 3 brand voice.
They are not the full Phase 4 page drafts and should be treated as style references for later content work.

### Homepage Hero Example

- headline: `Football environments for girls and women to belong, grow, and dream big.`
- support line: `Yard Football Creative creates meaningful community and elite experiences through storytelling, connection, and development.`
- primary CTA: `Explore Programs`
- secondary CTA: `Contact Yard`

### About Intro Example

- section heading: `What Yard Is Built On`
- body example: `Yard Football Creative grew from the backyard feeling that football could be joyful, safe, expressive, and deeply connected. We are building environments where girls and women can feel that again, whether they are joining for community, challenge, or both.`

### Programs Intro Example

- section heading: `A Place for Community and Progression`
- body example: `Our programs are designed to meet players where they are. Some come for belonging, confidence, and connection. Others come looking for challenge, development, and the next step in their football journey. Yard makes space for both.`

### Events Intro Example

- section heading: `Current Activity`
- body example: `From gala days and workshops to creative football experiences, Yard events are designed to feel active, thoughtful, and grounded in real community.`

### Contact Intro Example

- section heading: `Start the Conversation`
- body example: `If you would like to ask about a program, event, collaboration, or future opportunity, send us an enquiry and we will point you in the right direction.`

### CTA Example Set

- `Explore Programs`
- `Find Your Pathway`
- `View Events`
- `Contact Yard`
- `Send Enquiry`
- `Follow Yard on Instagram`

### Copy Behaviour Notes

- Headlines should make one promise clearly.
- Support copy should explain rather than decorate.
- CTAs should stay literal.
- Community and elite references should remain welcoming and non-competing.
- Story-led language should feel human, but still move the user toward orientation or action.

### Phase 3 Copy Outcome

These examples show the intended Yard writing style:
- clear first
- football-native
- emotionally grounded
- conversion-aware without sounding salesy

They provide a tone model for Phase 4 without pre-empting the full content draft work.

## 3.8 Theme System Rules for Multiple Logo-Driven Visual Variants

### Theme Principle

Themes should change emphasis, not identity.
Every approved theme must still feel like one Yard Football Creative product with the same structure, tone, and conversion behaviour.

### Approved Theme Families

#### Core Field

- purpose: default site theme and most neutral Yard expression
- primary asset direction: green-led logos most closely aligned to the PDF cover
- dominant colours: `Ground Mist`, `Field Depth`, `Acid Grass`, `Warm Whistle`
- role: the most stable and dependable expression for first-release use

#### Lime Signal

- purpose: brighter campaign or youth-energy variant
- primary asset direction: approved light lime logo variants such as `LOGO-1_light`
- dominant colours: `Lime Flood`, `Field Depth`, `Backyard Rust`, `Chalk White`
- role: a more energetic but still controlled variant for selected moments

#### Lavender Night

- purpose: alternate expressive theme already legitimised by the supplied dark logo set
- primary asset direction: approved purple variants such as `LOGO-5_dark` and `LOGO-10_dark`
- dominant colours: `Lavender Night`, `Violet Outline`, `Ink`, `Chalk White`
- role: an evening, poster-led expression that still respects the Yard system

### Theme Assignment Rules

- Every theme must map to a real supplied logo asset family.
- Theme names should describe the experience, but implementation must still tie back to the approved logo files.
- No theme may be created just to introduce a new colour idea without asset support.
- Themes should be implemented through tokens, not page forks or duplicated layouts.

### Shared Invariants Across All Themes

- page structure
- navigation model
- CTA hierarchy
- typography system
- spacing system
- voice and content clarity
- accessibility thresholds
- safeguarding-aware trust signals

### Theme Variation Scope

Themes may vary:
- logo choice
- accent colours
- supporting background tints
- border or outline emphasis
- selective graphic-device usage

Themes must not vary:
- page purpose
- information architecture
- interaction model
- core content order
- the meaning of the brand

### Theme Governance Rule

The default website build should begin with `Core Field`.
Other approved themes should only be activated when:
- the contrast remains strong
- the page still feels calm
- the logo choice is appropriate to the mode and context
- a human review confirms the result still feels like Yard

### Phase 3 Theme Outcome

The Yard theme system now has a clear rule set:
- one default grounded theme
- one brighter lime-led variant
- one purple-led alternate family already supported by supplied logos

That gives the project real visual flexibility without inventing brand drift.

## 3.9 Guidelines for Which Visual Elements May Change Per Theme and Which Must Remain Fixed

### Fixed System Elements

The following elements must remain fixed across all approved themes:
- page structure and section order logic
- sitemap and navigation labels
- CTA wording hierarchy
- typography families and reading behaviour
- spacing scale and layout rhythm
- semantic HTML and accessibility expectations
- form simplicity and contact-flow clarity
- tone of voice and content purpose

These are the core product rules, not theme choices.

### Theme-Variable Elements

The following elements may change by approved theme:
- selected logo file
- accent colour assignment
- background tint family
- border, underline, or outline emphasis
- supporting graphic motif intensity
- card and button surface contrast balance

Any variation must still preserve readability, hierarchy, and trust.

### Partial-Flex Elements

Some elements may shift in emphasis, but not in fundamental behaviour:
- hero composition may become more circular, more poster-like, or more restrained
- quote and story blocks may lean warmer or cooler by theme
- decorative separators may simplify or gain stronger contrast
- button fill versus outline balance may adjust when required by palette contrast

These adjustments must remain recognisably part of one shared design system.

### Non-Negotiable Restrictions

- Themes may not introduce new page templates just to look different.
- Themes may not swap to unrelated typefaces.
- Themes may not invent new logos, icon sets, or illustrations outside the approved asset language.
- Themes may not reduce contrast or soften CTA hierarchy in the name of visual variety.
- Themes may not erase the football-native grounding of the brand.

### Decision Test for Future Theme Changes

Before approving a theme-specific variation, the project should ask:
- does this improve clarity or just add difference?
- is the change supported by approved assets?
- does the page still feel like Yard at a glance?
- would the same content still work without rewriting the layout?

If the answer becomes unclear, the element should stay fixed.

### Phase 3 Variation Outcome

The Yard system now has a clear boundary:
- themes may shift atmosphere
- themes may not shift product meaning

That boundary is what prevents multi-theme support from becoming brand fragmentation.

## 3.10 Light Mode and Dark Mode Rules for Each Approved Theme Family

### Shared Mode Principle

Light and dark mode should feel like two deliberate readings of the same Yard poster system.
Mode switching must not replace the chosen theme with a generic operating-system palette.

### Shared Rules for Every Theme

- text contrast must remain strong in both modes
- logos must use approved supplied variants appropriate to the mode
- long-form reading surfaces must stay calm rather than ultra-bright or pure black
- CTA hierarchy must remain equally obvious in both modes
- decorative graphics should simplify before readability is compromised

### Core Field Mode Rules

#### Light Mode

- base surfaces: `Ground Mist`, `Chalk White`, soft green-tinted neutrals
- key structure: `Field Depth`
- accents: `Acid Grass` with selective `Warm Whistle`
- overall feel: grounded daytime poster system with strong orientation

#### Dark Mode

- base surfaces: deep field green, charcoal, restrained dark neutrals
- key structure: `Chalk White` and softened lime emphasis
- accents: `Acid Grass` used more selectively, with yellow reduced to highlight moments only
- overall feel: rich and football-native, never glowing or synthetic

### Lime Signal Mode Rules

#### Light Mode

- base surfaces: pale stone, off-white, or light grey foundations
- key structure: `Field Depth`
- accents: stronger use of `Lime Flood` with careful `Backyard Rust` support
- overall feel: energetic, youthful, and training-ground bright without losing calm

#### Dark Mode

- base surfaces: dark olive, charcoal, or muted field tones
- key structure: `Chalk White`
- accents: `Lime Flood` reduced to headings, strokes, and CTAs rather than large filled surfaces
- overall feel: controlled energy instead of neon overload

### Lavender Night Mode Rules

#### Light Mode

- base surfaces: pale lavender-grey, chalky off-white, and soft neutral support tones
- key structure: `Violet Outline` and `Ink`
- accents: purple-led emphasis with limited supporting green or clay moments where the logo family allows
- overall feel: poster-like, expressive, and still highly readable

#### Dark Mode

- base surfaces: deep violet-charcoal and muted night neutrals
- key structure: `Chalk White`
- accents: `Lavender Night` and `Violet Outline` balanced carefully so the page does not become candy-coloured
- overall feel: atmospheric evening expression with clear football seriousness

### Mode Implementation Guardrails

- Dark mode should never become brighter or busier than the matching light mode.
- If a theme requires excessive accent colour to remain legible, the palette needs revision before shipping.
- Illustrative or decorative assets should be reduced in contrast before body-copy surfaces are compromised.
- System behaviour should rely on shared tokens, not separate component logic by mode.

### Phase 3 Mode Outcome

The project now has mode rules that:
- preserve readability
- respect the approved logo families
- keep dark mode intentional rather than fashionable
- allow each theme to remain recognisable in both light and dark contexts
