# ROADMAP.md

This roadmap is designed to stop premature design drift and ensure the website is built in the right order.

## Phase 0 — Visual and Structural Direction
Goal: define the initial UI direction early so the build has a clear visual and structural target.

Sub-phases:
- [x] 0.1 review of current `assets/` materials
- [x] 0.2 initial homepage structure concept
- [x] 0.3 initial page layout direction for core pages
- [x] 0.4 early visual theme options
- [x] 0.5 early approach for how multiple logo-based themes could influence colour, typography, layout emphasis, and graphic treatments
- [x] 0.6 early approach for how light and dark mode should behave across those themes
- [x] 0.7 rough section ordering for key journeys
- [x] 0.8 notes on how existing artifacts should influence UI decisions

Completion notes:
- `0.1` complete: reviewed `assets/YARD.pdf`, the `assets/Logos/` family, and the supporting football-ball mark; removed the stale remote scaffold so Phase 0 can proceed from the supplied brand assets instead of an outdated landing page.
- `0.2` complete: documented the early homepage framework, from a logo-led hero through pathway orientation, founder trust, current activity, and final conversion.
- `0.3` complete: established early page families and shared layout rules in `PHASE_0_DIRECTION.md` and `ARCHITECTURE.md` without locking the later Phase 2 sitemap too early.
- `0.4` complete: documented three source-grounded visual directions and recommended `Backyard Night` as the most faithful baseline to `assets/YARD.pdf`.
- `0.5` complete: defined an early theme model where approved logos drive tokens and emphasis changes while structure, clarity, and conversion patterns remain fixed.
- `0.6` complete: set the shared rules and per-theme-family light/dark behaviour so mode switching remains intentional, legible, and brand-consistent.
- `0.7` complete: documented rough section order for homepage, community, elite, partner, and contact journeys so later IA and content work can stay coherent.
- `0.8` complete: documented how `assets/YARD.pdf`, `assets/Logos/`, and `assets/yardfc_ball_transparent.png` should shape future UI decisions.
- All Phase 0 sub-phases are now complete. Human review steps remain required before Phase 0 can be considered fully signed off against its exit criteria.

This phase should draw on existing artifacts in the `assets/` folder, including:
- logo files
- brand/reference PDFs
- event and information documents
- any existing visual explorations or layout references

The initial visual direction should also anticipate a future theme system built from multiple brand logos stored in `assets/Logos/`.
That system should support both light and dark mode variants where appropriate, using the approved logo-based style options.
Only the supplied logo files in `assets/Logos/` may be used for that system.

Deliverables:
- review of current `assets/` materials
- initial homepage structure concept
- initial page layout direction for core pages
- early visual theme options
- early approach for how multiple logo-based themes could influence colour, typography, layout emphasis, and graphic treatments
- early approach for how light and dark mode should behave across those themes
- rough section ordering for key journeys
- notes on how existing artifacts should influence UI decisions

Human review steps:
- review homepage structure with stakeholders
- review proposed navigation and page hierarchy with a human decision-maker
- review 2-3 visual theme directions before selecting one
- confirm whether the UI feels football-native, modern, and credible
- confirm whether the design direction uses the existing assets well
- review whether the proposed direction can scale across a library of 10+ logos without losing consistency
- review whether light and dark mode both remain clear, accessible, and on-brand

Exit criteria:
- there is an agreed early UI direction
- the chosen structure supports the mission and content plan
- the visual direction can be carried into the brand system and page build
- the direction leaves room for a toggleable theme system based on multiple logos
- the direction supports intentional light and dark mode behaviour

## Phase 1 — Foundation Alignment
Goal: define the organisation before polishing the website.

Sub-phases:
- [x] 1.1 mission statement
- [x] 1.2 audience definitions
- [x] 1.3 service/program categories
- [x] 1.4 brand direction
- [x] 1.5 website success goals
- [x] 1.6 governance docs complete

Deliverables:
- mission statement
- audience definitions
- service/program categories
- brand direction
- website success goals
- governance docs complete

Exit criteria:
- we can describe the organisation clearly in one sentence
- we know who the first users are
- we know the first conversion actions for the site

Human review steps:
- review mission and audience definitions with a human stakeholder
- confirm the top conversion actions before moving into full IA

Completion notes:
- `1.1` complete: defined the one-sentence organisation description and captured the source vision and mission statements in `PHASE_1_FOUNDATION.md`, aligned to the connection, belonging, inspiration, and empowerment language established in `assets/YARD.pdf`.
- `1.2` complete: defined the primary audiences, first-user priority order, and audience-specific website needs in `PHASE_1_FOUNDATION.md` and aligned `BRAND.md` to the same audience model.
- `1.3` complete: defined the initial service and program category model in `PHASE_1_FOUNDATION.md` and `CONTENT_STRATEGY.md`, grounded in the offer signals from `assets/YARD.pdf` and the original static scaffold.
- `1.4` complete: sharpened the brand baseline in `PHASE_1_FOUNDATION.md` and `BRAND.md` so later IA, copy, and visual-system work inherit the same grounded, football-native, story-led direction.
- `1.5` complete: defined the v1 website success criteria and first conversion actions in `PHASE_1_FOUNDATION.md` and `README.md`, matching the roadmap requirement to know the first actions before IA begins.
- `1.6` complete: aligned the governance document set across `README.md`, `CONTRIBUTING.md`, and `PHASE_1_FOUNDATION.md` so future contributors have one clear rules-and-direction baseline.
- All Phase 1 sub-phases are now complete. The repository can move into Phase 2 after the required human review of mission, audiences, and conversion priorities.

## Phase 2 — Information Architecture
Goal: design the structure of the site before deep UI work.

Sub-phases:
- [x] 2.1 sitemap
- [x] 2.2 navigation structure
- [x] 2.3 page list
- [x] 2.4 page purposes
- [x] 2.5 CTA map
- [x] 2.6 footer structure
- [x] 2.7 header social link plan for Instagram and Facebook

Deliverables:
- sitemap
- navigation structure
- page list
- page purposes
- CTA map
- footer structure
- header social link plan for Instagram and Facebook

Suggested core pages:
- Home
- About
- Programs
- Events
- Contact 

Optional future pages:
- Partnerships
- Player Stories
- Gallery / Media
- Blog / Journal
- Camps / Clinics landing pages

Exit criteria:
- every planned page has a clear job
- navigation is simple and intuitive
- there is no overlap between pages

Human review steps:
- review sitemap and navigation with a human stakeholder
- review whether page structure feels clear on mobile first
- confirm that core pages do not overlap or compete

Completion notes:
- `2.1` complete: defined the v1 sitemap in `PHASE_2_INFORMATION_ARCHITECTURE.md`, keeping the primary structure to Home, About, Programs, Events, and Contact while reserving future expansion pages without promoting them into the first-release navigation too early.
- `2.2` complete: defined the primary navigation structure in `PHASE_2_INFORMATION_ARCHITECTURE.md` and expanded `ARCHITECTURE.md` with the Phase 2 navigation baseline, keeping the header focused on Home, About, Programs, Events, and Contact while routing deeper pathway detail into page content instead of header sprawl.
- `2.3` complete: defined the full planned page inventory in `PHASE_2_INFORMATION_ARCHITECTURE.md`, confirming that the first-release site is limited to Home, About, Programs, Events, and Contact, with community and elite handled as pathway content rather than separate pages.
- `2.4` complete: defined a single clear job for each planned page in `PHASE_2_INFORMATION_ARCHITECTURE.md` and aligned `CONTENT_STRATEGY.md` to the same five-page model so later content and UI work can separate overview, events, and contact roles without introducing extra pages.
- `2.5` complete: defined the page-by-page CTA map in `PHASE_2_INFORMATION_ARCHITECTURE.md` and aligned `ARCHITECTURE.md` to the same conversion structure so each page now has a clear primary action, supporting fallback, and route into either the `Programs` page, `Events`, or the approved `contact@yardfc.com` enquiry flow.
- `2.6` complete: defined the shared footer structure in `PHASE_2_INFORMATION_ARCHITECTURE.md`, `ARCHITECTURE.md`, and `CONTENT_STRATEGY.md`, keeping the footer anchored to the five-page site map while using in-page pathway links inside `Programs` instead of extra standalone pages.
- `2.7` complete: defined the Instagram and Facebook header social plan in `PHASE_2_INFORMATION_ARCHITECTURE.md`, aligned the same rules in `ARCHITECTURE.md` and `CONTENT_STRATEGY.md`, and added `PHASE_2_INFORMATION_ARCHITECTURE.md` to the documented governance set in `README.md` and `CONTRIBUTING.md`.
- All Phase 2 sub-phases are now complete. The information architecture baseline now covers the five-page v1 sitemap, navigation, page jobs, CTA map, footer structure, and Instagram/Facebook header social plan.

## Phase 3 — Brand System
Goal: define how the site should feel and speak.

Sub-phases:
- [x] 3.1 colour palette
- [x] 3.2 typography choices
- [x] 3.3 button styles
- [x] 3.4 spacing system
- [x] 3.5 image direction
- [x] 3.6 tone of voice rules
- [x] 3.7 copy examples
- [x] 3.8 theme system rules for multiple logo-driven visual variants
- [x] 3.9 guidelines for which visual elements may change per theme and which must remain fixed
- [x] 3.10 light mode and dark mode rules for each approved theme family
- [x] 3.11 earthy background palette guidance that allows content and CTAs to stand out clearly

Deliverables:
- colour palette
- typography choices
- button styles
- spacing system
- image direction
- tone of voice rules
- copy examples
- theme system rules for multiple logo-driven visual variants
- guidelines for which visual elements may change per theme and which must remain fixed
- light mode and dark mode rules for each approved theme family
- earthy background palette guidance that allows content and CTAs to stand out clearly

Exit criteria:
- the brand feels distinct and repeatable
- the visual system can be applied across all pages consistently
- the system supports multiple themes without fragmenting the overall brand
- light and dark mode both preserve readability, trust, and brand consistency

Human review steps:
- review colour, typography, and component direction with a human reviewer
- review whether the visual theme matches the agreed brand truth
- confirm the theme is distinctive without becoming visually noisy
- review whether multiple theme variants still feel like one coherent Yard Football Creative product
- review light and dark mode behaviour against accessibility and brand tone
- review whether subtle earthy backgrounds help the content pop rather than flattening the interface

Completion notes:
- `3.1` complete: created `PHASE_3_BRAND_SYSTEM.md` and defined the initial colour system from `assets/YARD.pdf`, the approved logo family, and `assets/yardfc_ball_transparent.png`, establishing grounded neutrals, green-led default accents, warm supporting tones, and an approved purple alternate family without inventing new logo behaviour.
- `3.2` complete: defined the website typography system in `PHASE_3_BRAND_SYSTEM.md`, choosing `Barlow Condensed` for headings and directional UI emphasis, `Public Sans` for body and interface reading, and clarifying that the supplied Yard logos remain the only hand-drawn brand display source.
- `3.3` complete: defined the CTA component direction in `PHASE_3_BRAND_SYSTEM.md`, establishing a restrained three-level button system with rounded capsule actions, clear hierarchy, mobile-safe sizing, and accessible interaction-state rules grounded in the poster-like label language of the supplied assets.
- `3.4` complete: defined the shared spacing scale and layout-rhythm rules in `PHASE_3_BRAND_SYSTEM.md`, using an 8px-led system with generous section breathing room so later UI work can stay mobile-first, content-led, and faithful to the spacious poster pacing of the PDF.
- `3.5` complete: defined the imagery rules in `PHASE_3_BRAND_SYSTEM.md`, prioritising real football environments, girls’ and women’s participation, documentary-style trust moments, responsible youth-aware presentation, and restrained use of approved graphic assets instead of generic stock or overproduced sports imagery.
- `3.6` complete: defined the tone-of-voice rules in `PHASE_3_BRAND_SYSTEM.md`, establishing a grounded, warm, direct, and credible writing standard that preserves the emotional truth of `assets/YARD.pdf` while keeping page-level copy clear for players, families, and partners.
- `3.7` complete: added brand-voice copy examples to `PHASE_3_BRAND_SYSTEM.md`, including sample hero, about, programs, events, contact, and CTA language that demonstrates the approved tone without jumping ahead into the full Phase 4 page-drafting scope.
- `3.8` complete: defined the multi-theme system in `PHASE_3_BRAND_SYSTEM.md`, establishing the `Core Field`, `Lime Signal`, and `Lavender Night` families, tying each to supplied logo directions, and locking the requirement that themes operate through shared tokens instead of duplicated page structures or invented brand variants.
- `3.9` complete: defined the fixed-versus-variable theme contract in `PHASE_3_BRAND_SYSTEM.md`, making page structure, typography, spacing, CTA hierarchy, accessibility, and content logic non-negotiable while limiting theme variation to approved logo choice, palette emphasis, and restrained atmospheric treatments.
- `3.10` complete: defined light- and dark-mode rules for `Core Field`, `Lime Signal`, and `Lavender Night` in `PHASE_3_BRAND_SYSTEM.md`, preserving strong contrast, mode-appropriate supplied logos, calm long-form surfaces, and theme continuity without falling back to generic system-dark styling.
- `3.11` complete: defined the earthy background system in `PHASE_3_BRAND_SYSTEM.md`, establishing calm grey, chalk, field, clay, and approved lavender support surfaces plus clear CTA-contrast rules so atmosphere remains subordinate to readability and action.
- All Phase 3 sub-phases are now complete. The repository now includes a documented brand system covering colour, typography, button hierarchy, spacing, imagery, voice, sample copy, theme rules, fixed-versus-variable theme boundaries, per-theme mode behaviour, and earthy background guidance.

## Phase 4 — Core Content Drafting
Goal: write the website before over-designing it.

Sub-phases:
- [x] 4.1 headline and subheadline for home page
- [x] 4.2 value proposition blocks
- [x] 4.3 about copy
- [x] 4.4 program descriptions
- [x] 4.5 contact copy
- [x] 4.6 placeholder testimonials or proof sections
- [x] 4.7 footer copy and header social icon plan for Instagram and Facebook
- [x] 4.8 contact page copy for a simple email enquiry form
- [x] 4.9 contact page copy aligned to `contact@yardfc.com`
- [x] 4.10 homepage Instagram section copy and CTA linking to the `@yardfc` account

Deliverables:
- headline and subheadline for home page
- value proposition blocks
- about copy
- program descriptions
- contact copy
- placeholder testimonials or proof sections
- footer copy and header social icon plan for Instagram and Facebook
- contact page copy for a simple email enquiry form
- contact page copy aligned to `contact@yardfc.com`
- homepage Instagram section copy and CTA linking to the `@yardfc` account

Exit criteria:
- each page has draft copy
- copy is clear, trustworthy, and audience-specific

Human review steps:
- review draft copy against page purpose and CTA intent
- confirm the copy supports the proposed page structure

Completion notes:
- FAQ drafting was removed from Phase 4 by user direction on 2026-03-27 and should not be added to the v1 content set unless that decision changes later.
- `4.1` complete: added `PHASE_4_CORE_CONTENT.md`, and updated the homepage lead so the headline and subheadline use the vision and mission statements directly from `assets/YARD.pdf` while preserving the earlier backyard-origin line as supporting homepage copy.
- `4.2` complete: added three homepage value proposition blocks to `PHASE_4_CORE_CONTENT.md`, using only the vision, mission, belonging, and safety language carried directly from `assets/YARD.pdf`.
- `4.3` complete: drafted the About page copy in `PHASE_4_CORE_CONTENT.md` using the backyard origin, belonging statement, and `Behind the Brand...` founder story from `assets/YARD.pdf`.
- `4.4` complete: added the initial program descriptions to `PHASE_4_CORE_CONTENT.md`, preserving the exact program labels and the only broad program-description language currently present in `assets/YARD.pdf` while documenting the additional operational detail that will need human input later.
- `4.5` complete: added the first contact-copy draft to `PHASE_4_CORE_CONTENT.md`, using only belonging, connection, and closing-call language from `assets/YARD.pdf` and documenting the operational contact details that will still need human input later.
- `4.6` complete: added a proof-section draft to `PHASE_4_CORE_CONTENT.md` using the founder-story lived-experience language from `assets/YARD.pdf` instead of inventing testimonials that do not exist in the supplied source materials.
- `4.7` complete: added footer copy and the header social icon plan to `PHASE_4_CORE_CONTENT.md`, keeping the footer wording directly sourced from `assets/YARD.pdf` while carrying forward the approved Instagram/Facebook icon-only header rules from Phase 2.
- `4.8` complete: added the simple email-enquiry form copy to `PHASE_4_CORE_CONTENT.md`, using only founder-story and belonging language from `assets/YARD.pdf` while leaving field labels, consent, and response-time wording as explicit human-developed placeholders.
- `4.9` complete: aligned the contact copy in `PHASE_4_CORE_CONTENT.md` to `contact@yardfc.com`, using PDF-sourced surrounding language while documenting the remaining operational email-detail gaps for later human confirmation.
- `4.10` complete: added the homepage Instagram section copy and `@yardfc` CTA to `PHASE_4_CORE_CONTENT.md`, using the final PDF storytelling line plus source-faithful support copy and documenting the visual/feed content that still needs human curation.
- All active Phase 4 sub-phases are now complete. The Phase 4 content set intentionally excludes FAQs after the user's direction on 2026-03-27.

## Phase 5 — Baseline UI Framework
Goal: convert the current baseline site into a structured design system.

Sub-phases:
- [x] 5.1 layout primitives
- [x] 5.2 shared section components
- [x] 5.3 button system
- [x] 5.4 card system
- [x] 5.5 form styles
- [x] 5.6 responsive navigation with icon-only social links
- [x] 5.7 footer component and homepage social feed section pattern
- [x] 5.8 theme tokens, default theme, and light/dark mode support

Deliverables:
- layout primitives
- shared section components
- button system
- card system
- form styles
- responsive navigation
- footer component
- icon-only social link treatment for the header
- homepage social feed section pattern
- theme tokens or styling architecture that can support toggleable logo-based themes
- a safe default theme and a repeatable pattern for adding more themes from approved files in `assets/Logos/`
- light/dark mode support within the theme token system

Exit criteria:
- the site uses a consistent reusable UI system
- mobile and desktop layouts are stable
- theme switching can be implemented without duplicating page structures
- light/dark mode can be implemented without duplicating page structures

Human review steps:
- review section spacing, visual rhythm, and mobile layouts with a human reviewer
- review whether shared components are visually consistent across pages
- confirm the UI system reflects the approved structural and visual direction
- review whether theme behaviour feels intentional rather than decorative
- review whether the light/dark toggle feels useful, legible, and coherent across themes

Completion notes:
- `5.1` complete: restored the static baseline files from `origin/main` and rebuilt them around reusable layout primitives in `index.html`, `styles.css`, and `script.js`, including a shared container, section-shell, stack, grid, and story-layout system grounded in the approved logo assets, Phase 3 typography, and Phase 4 PDF-sourced homepage copy.
- `5.2` complete: added reusable section-level UI patterns in `index.html` and `styles.css`, including a statement grid, shared story band, and full-width quote treatment that can be reused across later core pages without tying the system too early to button, card, or form-specific component logic.
- `5.3` complete: added a three-level button system in `index.html` and `styles.css`, covering primary, secondary, and text-action patterns with mobile-safe sizing, accessible focus states, and PDF-sourced placeholder labels so the CTA hierarchy now matches the documented Phase 3 button direction without pulling Phase 6 page flows forward too early.
- `5.4` complete: consolidated the repeated surface treatments into a shared card system in `index.html` and `styles.css`, giving statement panels, program blocks, and the contact callout one reusable card foundation with light modifier variants instead of separate one-off block styling.
- `5.5` complete: added the baseline form styling system in `index.html` and `styles.css`, including shared field groups, labels, inputs, textarea treatment, and accessible focus states inside a contact-form shell so later enquiry implementation can inherit a stable visual pattern instead of styling forms ad hoc.
- `5.6` complete: upgraded the header in `index.html`, `styles.css`, and `script.js` to a cleaner responsive navigation pattern and added the icon-only social treatment required by Phase 2, with Instagram linked to `@yardfc` and Facebook intentionally held as a non-linked reserved icon so no unapproved production URL is invented.
- `5.7` complete: added the first shared footer component and homepage Instagram-section pattern in `index.html` and `styles.css`, using the Phase 4 footer lines, the approved `@yardfc` CTA, and a reusable feed-preview layout that can later receive real Instagram tiles without changing the page structure.
- `5.8` complete: converted the UI framework to a token-driven theme and mode architecture in `index.html`, `styles.css`, and `script.js`, with `core-field` as the safe default theme, repeatable `lime-signal` and `lavender-night` theme slots, and stored light/dark mode support so later toggles can be added without duplicating structures or rewriting components.
- All Phase 5 sub-phases are now complete. The repository now has a reusable baseline UI framework ready to support the first full page-build pass in Phase 6.

## Phase 6 — Core Page Build
Goal: complete the first usable public version.

Sub-phases:
- [x] 6.1 finalise the frontend structure for `Programs` and `Events` pages before external content wiring
- [x] 6.2 define the minimum repeatable card pattern for program and event listings in the frontend
- [x] 6.3 choose the initial API CMS model for v1 content-managed `Programs` and `Events`
- [x] 6.4 define the minimum CMS content schema for `program` and `event` entries
- [x] 6.5 replace static placeholders on `Programs` with API-driven program entries
- [ ] 6.6 replace static placeholders on `Events` with API-driven event entries
- [ ] 6.7 add loading, empty, and API-error states for `Programs` and `Events`
- [ ] 6.8 confirm that non-technical content editing for `Programs` and `Events` is simple enough for v1 use

Deliverables:
- home page complete
- about page complete
- programs overview complete
- programs page pathway sections complete
- programs page connected to the approved API CMS for program entries
- events page connected to the approved API CMS for event entries
- contact / expression of interest page complete
- header with Instagram and Facebook links complete
- email contact form complete
- email contact form directed to `contact@yardfc.com`
- homepage Instagram integration linking to the Yard FC Instagram account
- homepage display of the most recent Instagram tiles, if supported by the approved integration path
- initial implementation of a toggleable theme experience if approved for v1, or a prepared foundation if deferred
- initial implementation of light/dark mode if approved for v1, or a prepared foundation if deferred

Exit criteria:
- a first-time visitor can understand the organisation and take action
- core pages remain usable and coherent across supported themes
- supported themes remain usable and coherent in both light and dark mode

Human review steps:
- review each completed core page for clarity, trust, and next-step logic
- review homepage, programs pages, and contact flow on mobile and desktop
- review the CMS-fed `Programs` and `Events` cards with a human reviewer for clarity, layout fit, and editorial ease
- confirm visual theme consistency across the built pages
- review the theme toggle behaviour across multiple logo-based themes before launch
- review light/dark mode behaviour across supported themes before launch
- review the homepage Instagram section for usefulness, performance, and visual fit

Completion notes:
- `6.1` complete: restructured `programs.html` and `events.html` around the approved Phase 2 page jobs before API wiring, adding clear hero orientation, pathway or activity framing, section-jump navigation, stable listing shells, and direct contact/event CTAs while keeping the existing static frontend architecture simple and mobile-first.
- `6.2` complete: defined the first shared listing-card contract in `programs.html`, `events.html`, and `styles.css`, including a reusable template shape with category, status, title, summary, meta, and CTA slots so future program and event entries can render through one repeatable frontend pattern instead of separate one-off card markup.
- `6.3` complete: added `PHASE_6_CORE_PAGE_BUILD.md` and chose Sanity Content Lake with its read-only CDN API as the initial v1 CMS model for `Programs` and `Events`, keeping the site static-first, limiting CMS scope to those two content types, and aligning the documentation baseline in `README.md` and `CONTRIBUTING.md` to the new Phase 6 decision record.
- `6.4` complete: defined the minimum `program` and `event` schema contract in `cms/schemas/`, then documented the same field baseline in `PHASE_6_CORE_PAGE_BUILD.md` so the upcoming frontend fetch work can target one small, explicit content model without speculative extra fields.
- `6.5` complete: added `cms/sanity-client.js`, wired `programs.html` to load it before the main site script, and updated `script.js` so the `Programs` listing grid now renders published Sanity `program` entries through the shared Phase 6.2 card template whenever project configuration is present.

## Phase 7 — Trust and Conversion Layer
Goal: increase legitimacy and make action easy.

Deliverables:
- enquiry forms
- registration interest form
- email enquiry form connected to the agreed contact workflow
- email enquiry form connected to `contact@yardfc.com` unless a later workflow is explicitly approved
- coach/staff bios
- testimonials or social proof
- safeguarding / values content if needed
- contact methods
- map / location context if relevant

Exit criteria:
- the site feels legitimate and action-oriented
- users can reach out without friction

Human review steps:
- review trust sections, forms, and staff/program presentation with a human reviewer
- confirm the site feels credible to players, families, and partners
- confirm the header social links and contact form feel useful, visible, and trustworthy

## Phase 8 — Technical Hardening
Goal: make the site robust before scaling.

Sub-phases:
- [ ] 8.1 harden API fetch behaviour for CMS-fed `Programs` and `Events`
- [ ] 8.2 verify environment-variable handling for API keys, dataset IDs, and CMS project configuration
- [ ] 8.3 confirm safe read-only API usage for public site content fetching
- [ ] 8.4 review webhook or rebuild strategy for CMS content publishing
- [ ] 8.5 test fallback behaviour when the CMS API is unavailable or returns no published content

Deliverables:
- SEO foundations
- metadata
- image optimisation
- analytics setup
- spam protection on forms
- performance review
- accessibility review
- legal/privacy placeholders as needed
- deployment readiness review across frontend, backend, DNS, and domain configuration
- Instagram API integration approach confirmed against current platform constraints
- API CMS integration for `Programs` and `Events` hardened for production-safe read behaviour
- content publishing/rebuild workflow confirmed for CMS-managed `Programs` and `Events`

Exit criteria:
- the site is stable, fast, accessible, and measurable
- the deployment setup is ready for production rollout without ad hoc infrastructure decisions

Human review steps:
- complete human QA for accessibility, responsiveness, and visual polish
- review form behaviour and conversion paths end-to-end
- review the live-like CMS publishing flow with a human decision-maker before production cutover
- review hosting, backend, and DNS decisions with a human decision-maker before production cutover

## Phase 9 — Launch
Goal: publish a clean, focused v1.

Sub-phases:
- [ ] 9.1 connect production environment variables for the approved API CMS
- [ ] 9.2 verify production reads for published `Programs` and `Events` entries
- [ ] 9.3 verify production publishing flow or webhook-triggered refresh for CMS updates
- [ ] 9.4 complete live QA for CMS-managed `Programs` and `Events` content updates

Deliverables:
- domain connected
- hosting configured
- production deployment platform configured
- DNS records configured for `yardfc.com`
- `www.yardfc.com` redirect strategy confirmed
- SSL certificate active
- environment variables and backend integrations verified
- final QA
- launch checklist complete
- post-launch content update plan
- production CMS publishing flow verified for `Programs` and `Events`

Exit criteria:
- site is live
- forms work
- analytics work
- mobile QA passed
- `yardfc.com` resolves correctly in production
- deployment rollback path is understood

Human review steps:
- final human review of launch-ready pages
- confirm the live site still reflects the approved structure and theme
- confirm that a non-technical editor can publish or update a `Program` and an `Event` in production without developer intervention
- confirm the live domain, redirects, and contact flows work on real devices

## Deployment Direction

Recommended v1 deployment approach:
- use Render Static Sites as the primary deployment platform for frontend hosting
- use a minimal Render web service only if lightweight backend behaviour is needed for forms, integrations, or simple server-side logic
- keep `yardfc.com` registered with Namecheap
- keep DNS management at Namecheap unless Render-specific DNS requirements make a later change necessary

Why this is the current recommended path:
- it is well suited to static and frontend-first sites
- it supports custom domains, SSL, preview deploys, and straightforward GitHub-based deployment workflows
- it can remain free for a static-site v1 on a new Render Hobby workspace
- it keeps the initial stack simple while leaving room for future growth

Deployment scope to cover before launch:
- frontend hosting and production builds
- preview deployments for review
- form/backend handling strategy
- DNS configuration for apex and `www`
- SSL certificate issuance
- redirect rules
- environment variable management
- rollback and redeploy process

Suggested DNS approach for `yardfc.com`:
- keep registrar ownership at Namecheap
- create the production site in the new Render account
- add `yardfc.com` and `www.yardfc.com` as the allowed custom domains in Render
- add the required DNS records in Namecheap based on Render's domain instructions
- connect the apex domain `yardfc.com` to the production project
- connect `www.yardfc.com` and redirect it to the preferred canonical domain if needed

Backend guidance for v1:
- prefer no separate backend if the site is primarily content-led
- if forms or integrations require server-side logic, use a minimal serverless layer first
- only introduce a separate always-on backend platform when workflows, data storage, or admin requirements clearly justify it
- prefer a read-only API CMS integration for content-managed `Programs` and `Events` before introducing a custom admin dashboard
- keep the initial CMS scope narrow to `Programs` and `Events` before expanding editable content to the rest of the site

## Phase 10 — Post-Launch Growth
Goal: expand intentionally, not randomly.

Potential work:
- dedicated landing pages for specific programs
- seasonal campaign pages
- content / journal strategy
- media gallery
- newsletter integration
- registration portal
- coach recruitment pages
- sponsorship / partner pages
- expand the logo-based theme library only when new approved brand assets are added to `assets/Logos/`

Rule:
No post-launch growth work should be added without documenting the purpose in architecture and roadmap docs.
