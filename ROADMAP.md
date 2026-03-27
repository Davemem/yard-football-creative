# ROADMAP.md

This roadmap is designed to stop premature design drift and ensure the website is built in the right order.

## Phase 0 — Visual and Structural Direction
Goal: define the initial UI direction early so the build has a clear visual and structural target.

Sub-phases:
- [x] 0.1 review of current `assets/` materials
- [x] 0.2 initial homepage structure concept
- [x] 0.3 initial page layout direction for core pages
- [ ] 0.4 early visual theme options
- [ ] 0.5 early approach for how multiple logo-based themes could influence colour, typography, layout emphasis, and graphic treatments
- [ ] 0.6 early approach for how light and dark mode should behave across those themes
- [ ] 0.7 rough section ordering for key journeys
- [ ] 0.8 notes on how existing artifacts should influence UI decisions

Completion notes:
- `0.1` complete: reviewed `assets/YARD.pdf`, the `assets/Logos/` family, and the supporting football-ball mark; removed the stale remote scaffold so Phase 0 can proceed from the supplied brand assets instead of an outdated landing page.
- `0.2` complete: documented the early homepage framework, from a logo-led hero through pathway orientation, founder trust, current activity, and final conversion.
- `0.3` complete: established early page families and shared layout rules in `PHASE_0_DIRECTION.md` and `ARCHITECTURE.md` without locking the later Phase 2 sitemap too early.

This phase should draw on existing artifacts in the `assets/` folder, including:
- logo files
- brand/reference PDFs
- event and information documents
- any existing visual explorations or layout references

The initial visual direction should also anticipate a future theme system built from multiple brand logos stored in `assets/logo/`.
That system should support both light and dark mode variants where appropriate, using the approved logo-based style options.

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

## Phase 2 — Information Architecture
Goal: design the structure of the site before deep UI work.

Deliverables:
- sitemap
- navigation structure
- page list
- page purposes
- CTA map
- footer structure
- footer social link plan for Instagram and Facebook

Suggested core pages:
- Home
- About
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

## Phase 3 — Brand System
Goal: define how the site should feel and speak.

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

## Phase 4 — Core Content Drafting
Goal: write the website before over-designing it.

Deliverables:
- headline and subheadline for home page
- value proposition blocks
- about copy
- program descriptions
- FAQs
- contact copy
- placeholder testimonials or proof sections
- footer copy and social link labels for Instagram and Facebook
- contact page copy for a simple email enquiry form
- homepage Instagram section copy and CTA linking to the `@yardfc` account

Exit criteria:
- each page has draft copy
- copy is clear, trustworthy, and audience-specific

Human review steps:
- review draft copy against page purpose and CTA intent
- confirm the copy supports the proposed page structure

## Phase 5 — Baseline UI Framework
Goal: convert the current baseline site into a structured design system.

Deliverables:
- layout primitives
- shared section components
- button system
- card system
- form styles
- responsive navigation
- footer component
- social icon link treatment for the footer
- homepage social feed section pattern
- theme tokens or styling architecture that can support toggleable logo-based themes
- a safe default theme and a repeatable pattern for adding more themes from `assets/logo/`
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

## Phase 6 — Core Page Build
Goal: complete the first usable public version.

Deliverables:
- home page complete
- about page complete
- programs overview complete
- community page complete
- elite page complete
- contact / expression of interest page complete
- footer with Instagram and Facebook icon links complete
- email contact form complete
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
- confirm visual theme consistency across the built pages
- review the theme toggle behaviour across multiple logo-based themes before launch
- review light/dark mode behaviour across supported themes before launch
- review the homepage Instagram section for usefulness, performance, and visual fit

## Phase 7 — Trust and Conversion Layer
Goal: increase legitimacy and make action easy.

Deliverables:
- enquiry forms
- registration interest form
- email enquiry form connected to the agreed contact workflow
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
- confirm the footer social links and contact form feel useful, visible, and trustworthy

## Phase 8 — Technical Hardening
Goal: make the site robust before scaling.

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

Exit criteria:
- the site is stable, fast, accessible, and measurable
- the deployment setup is ready for production rollout without ad hoc infrastructure decisions

Human review steps:
- complete human QA for accessibility, responsiveness, and visual polish
- review form behaviour and conversion paths end-to-end
- review hosting, backend, and DNS decisions with a human decision-maker before production cutover

## Phase 9 — Launch
Goal: publish a clean, focused v1.

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
- confirm the live domain, redirects, and contact flows work on real devices

## Deployment Direction

Recommended v1 deployment approach:
- use Cloudflare as the primary deployment platform for frontend hosting
- use Cloudflare Workers only if lightweight backend behaviour is needed for forms, integrations, or simple server-side logic
- keep `yardfc.com` registered with Namecheap
- move DNS management to Cloudflare for production by updating the domain nameservers at Namecheap

Why this is the current recommended path:
- it is well suited to static and frontend-first sites
- it supports custom domains, SSL, preview deployments, and lightweight backend functions in one workflow
- it is a more cost-effective paid path than the previously considered Vercel setup
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
- add `yardfc.com` to Cloudflare
- update the Namecheap nameservers to the Cloudflare-assigned nameservers
- connect the apex domain `yardfc.com` to the production project
- connect `www.yardfc.com` and redirect it to the preferred canonical domain
- manage production DNS records from Cloudflare once the zone is active

Backend guidance for v1:
- prefer no separate backend if the site is primarily content-led
- if forms or integrations require server-side logic, use a minimal serverless layer first
- only introduce a separate backend platform when workflows, data storage, or admin requirements clearly justify it

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
- expand the logo-based theme library as new approved brand assets are added to `assets/logo/`

Rule:
No post-launch growth work should be added without documenting the purpose in architecture and roadmap docs.
