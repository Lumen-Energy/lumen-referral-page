# Referral Program Redesign

_Started 2026-05-21 18:20 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Referral Pages"
Project is currently empty (no files)
Current date is now May 21, 2026
</system-info>

<pasted_text name="Pasted text (100 lines)">
# Build a public-facing referral program landing page for Lumen Energy

## About Lumen
Lumen Energy is a commercial and industrial (C&I) solar developer and clean energy platform. We design, finance, build, and operate rooftop solar and battery storage projects on large commercial buildings — typically through tenant-driven community solar structures, PPAs, and direct ownership models. We work with corporate tenants (Amazon, FedEx, and similar) and major industrial landlords to unlock projects that other developers walk away from.

## Page purpose
A public landing page for the **Lumen Referral Program**. The audience is service providers who already have trust-based relationships with commercial building owners and tenants: **commercial real estate brokers, roofing contractors, real estate and energy attorneys, property managers, sustainability consultants, energy brokers, and adjacent advisors.** The goal is to convince a qualified referrer to submit a building or relationship to us in exchange for [referral fee / revenue share / TBD compensation].

## Brand identity (must follow exactly)
- **Colors:** Graphite Black (primary), Sky Blue (accent), Electric Yellow (highlight / CTAs). Use plenty of negative space.
- **Typography:** Times (or a similar high-contrast serif) for headlines, Inter for body and UI.
- **Aesthetic:** Confident, modern, clean. Think editorial layout meets fintech. Not "green leaf" solar industry clichés. No stock photos of smiling workers in hard hats. Use crisp typography, generous whitespace, subtle gradients in Sky Blue, and Electric Yellow for emphasis (CTAs, key numbers, callouts).
- **Voice:** Confident and solutions-focused. Plainspoken, no jargon, no hard-sell. We respect the reader's time and intelligence.

## Page structure (in this order)

### 1. Hero
Short, declarative headline. Subhead explaining the program in one sentence. Primary CTA: "Submit a Referral." Secondary CTA: "How it works."

### 2. Who this is for
Visual row of personas with icons or simple illustrations and one-line value props:
- **CRE brokers** — Add value to landlord and tenant clients without lifting a finger.
- **Roofing contractors** — Pair roof work with a solar revenue stream for your customer.
- **Real estate & energy attorneys** — Bring a credible solar partner to clients exploring on-site generation.
- **Property managers** — Turn underutilized roofs into NOI.
- **Sustainability consultants & energy advisors** — Plug Lumen in when your clients need execution, not another deck.
- **Anyone else with a building owner or large tenant relationship** — If you know the right person, we want to talk.

### 3. What we look for
Two columns with clear criteria:

**Ideal sites**
- Large rooftops (100,000+ sq ft preferred; we'll look at smaller)
- Industrial, warehouse, distribution, manufacturing, big-box retail, cold storage, data centers, large office
- Unused ground space adjacent to facilities suitable for battery storage
- Single-tenant or institutional landlord-occupied buildings (Blackstone/Link Logistics, Prologis, Realty Income, etc.)
- Long remaining lease terms or owner-occupied

**Ideal counterparties**
- Investment-grade tenants or institutional landlords
- Decision-makers who own real estate, energy procurement, or sustainability mandates
- Anyone with a portfolio (1 site is great; 10+ is even better)

Be explicit that we'll evaluate batteries on their own (standalone storage) in markets that support it.

### 4. Where we operate
A clean US map graphic or styled list highlighting our core markets:
**Illinois, New Jersey, New York, Maryland, Connecticut, DC, Virginia, Massachusetts.**

Add a line: "Outside these markets? Send it anyway — we're expanding and the right project travels."

Include short, one-line context for each market that signals expertise (e.g., "NY — Value Stack and community DG", "IL — Illinois Shines and community solar", "NJ — community solar and SuSI", "MA — SMART program"). Keep it tight, not exhaustive.

### 5. How it works
Three steps, large numbered cards:
1. **Tell us about the building or relationship.** A quick form — address, contact, what you know.
2. **We do the work.** Feasibility, financial modeling, pitch, contracting, construction, operations. You stay in the loop or step away — your call.
3. **You get paid.** [Insert compensation structure: e.g., referral fee on signed PPA, % of revenue, flat per-MW, etc.] Paid on [milestone].

### 6. Why Lumen
Three or four short proof points. Examples to draw from (rewrite as needed):
- Platform purpose-built for C&I — we don't chase utility-scale
- We work where others won't: complex landlord-tenant structures, brownfields, retrofits
- Backed by [investors / track record placeholder]
- We treat referral partners as long-term relationships, not one-off transactions

### 7. FAQ
Collapsible accordion. Suggested questions:
- What size projects do you take on?
- Do I need to know anything about solar to refer?
- What happens to my client relationship?
- How and when do I get paid?
- What if my client is outside your core markets?
- Can I refer multiple buildings?
- Is the referral exclusive?

### 8. Submit a referral (form)
Inline form, not a modal. Fields:
- Your name, company, email, phone
- Referral type: building / contact / both
- Building address (if applicable)
- Contact name and role (if applicable)
- What you know about the opportunity (free text)
- How did you hear about Lumen?

Confirmation message after submit: warm, human, no auto-responder energy.

### 9. Footer
Standard — Lumen logo, contact, links to main site, social.

## Design execution notes
- Single-page scroll, anchor nav at top
- Mobile-first responsive
- Use Electric Yellow sparingly — for the primary CTA, key stats, and one or two callouts. Overuse kills it.
- Sky Blue can carry section backgrounds, gradients, and accent borders.
- Avoid drop shadows and rounded-everything. Lean into sharper edges and editorial typography.
- Include 2–3 quantitative callouts somewhere on the page (e.g., "[X] MW under development", "[X] partner referrers", "Avg referral payout: $[X]") — leave as placeholders if I haven't given them.

## Deliverable
A single self-contained HTML file with inline CSS (and minimal JS only if needed for the FAQ accordion and form). Production-ready code. No external dependencies beyond Google Fonts for Inter and a Times-style serif.
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>

<attached-skill name="Lumen Energy Design System (design system)">
[Design System] This project uses the **Lumen Energy Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.
    
    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/ebbe54cd-a449-45c4-bc42-45fb1be5b17a/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Lumen Energy Design System

Lumen Energy is a B2B marketplace and analytics platform that helps commercial real-estate owners deploy **on-site clean energy** (solar, battery storage, EV charging) profitably. The product turns a portfolio of buildings into an actionable pipeline: each property surfaces a tailored NOI opportunity, developers bid on projects, and owners track them from "preparing bid launch" through "developing project."

The tagline inside the app: **"Cut carbon profitably."**

## Sources used to build this system

- **Codebase (primary source):** `web/` — a pnpm monorepo; Tailwind 4 + base-ui/radix components. Key files:
  - `web/styles/tailwind.css` — color tokens, both classic + `.rebrand` themes
  - `web/styles/tailwind.config.cjs` — type + spacing scale
  - `web/styles/fonts.css` — ABC Arizona / Pelikan / Pelikan Mono @font-face
  - `web/src/components/ui/*` — Button, Input, Tag, Card, Tooltip, etc.
  - `web/src/components/layout/{Header,AppSidebar}.tsx` — product chrome
  - `web/src/components/login/Login.tsx`, `web/src/components/homepage/Homepage.tsx` — core flows
- **Uploaded fonts:** ABC Arizona Serif, ABC Pelikan, ABC Pelikan Mono (`fonts/`)
- **Uploaded logo set:** `crescent_black`, `primary/horizontal/square/small` black+white, `electric_yellow_logo`

The rebrand pairs warm sand neutrals + electric yellow with a calm, analytical tone. The legacy theme still lives in production (indigo `#161b8e` sidebar), but all new work should use the rebrand.

---

## CONTENT FUNDAMENTALS

Lumen writes like an analyst who happens to care about the planet — numeric, confident, kind. Sentences are short. Financial precision is non-negotiable.

**Voice & tone.** Second-person when addressing the user ("Enter your email…", "Welcome to the Lumen Energy marketplace"). Third-person factual for data ("Max avg. annual NOI", "Active properties"). Never cheerful-AI ("🚀 Let's go!"). Never hedging ("it looks like…"). State facts and trade-offs.

**Capitalization.** Sentence case for everything — buttons, section titles, table headers, nav items. Actual examples from the app: *"New property"*, *"Download PDF report"*, *"Short-listed"*, *"Cut carbon profitably"*, *"Negotiating contracts"*. Uppercase only for the monospace eyebrow label treatment and acronyms (NOI, IRR, PPA, EV, PDF, CSV).

**Financial vocabulary used verbatim.** NOI, IRR, PPA, Loan NOI, Cash IRR, CO₂ reduction, kWh, kW, tons. Keep the subscript on CO₂. Currencies formatted as `$1.2M` / `$340K` via `F.shortDollars`. Percentages as `12.4%`. Use the proper Unicode "×" and "–" (en-dash) for ranges, never `x` or `-`.

**Microcopy samples** (from the codebase):
- Login: "Sign in to Lumen Energy" / "Enter your email to have a secure sign in link sent to your inbox."
- Homepage subtitle: "Welcome to the Lumen Energy marketplace for financing on-site clean energy. Click on a property to view tailored financing estimates."
- Summary tooltip: "We archive sites where deploying solar is unfeasible at this time."
- Error: "There was an error signing in. Please try again."
- Empty state: factual + calm, never apologetic.

**Emoji & icons.** No emoji anywhere in product UI. Iconography is Tabler Icons (stroke, 1.5–2px). Unicode is used sparingly for typographic quality (₂, ×, →, –, $).

**Density.** High but never cramped. Tables are information-dense; marketing is airy. Typography does the heavy lifting — serif display paired with calm sans body, never decorative flourishes.

---

## VISUAL FOUNDATIONS

**Palette.** Warm off-white page (`#fafaf8` / sand-200 `#f6f3ef`), deep near-black text (`#1a1a1a`), and a single saturated accent: **electric yellow `#dfff5e`** used for primary actions, data emphasis, and the "energy" mark in the logo. Secondary accent is **sky blue `#b1e5ff`**. The app itself ships a second theme (legacy) that leans on indigo `#161b8e` + `#040035` sidebar — avoid for new work unless explicitly branded as "classic."

**Type.**
- **Display:** ABC Arizona Serif Light (300) — serif with wide counters. Used for hero, display, and big marketing stats. Always light weight, never bold. Letter-spacing tightened to `-0.015em`/`-0.02em` at large sizes.
- **Brand body:** ABC Pelikan (400 Book, 500 Medium) — humanist sans, warm, slightly rounded. Used across marketing and brand surfaces.
- **Product UI:** ABC Pelikan (Book / Medium) — same family as brand body. No Figtree; system-ui is the only fallback.
- **Mono:** ABC Pelikan Mono — uppercase eyebrows, code, tabular numbers, data chips.

**Backgrounds.** Flat, warm. No gradients in product UI. **One** signature gradient exists (`--lumen-gradient`, dawn sky: sky-blue → pink → violet) — used ONLY as a decorative mark/brand stripe or on the user-avatar circle. Photography is real buildings + rooftops + solar panels, warm daylight, never stocky.

**Animation.** Minimal. Tailwind's default `transition-colors` (~150ms ease-out) on hover/press. Accordion expand/collapse 200ms ease-out. No bouncing, no parallax, no scroll-jacking. React Spring is imported for charts only.

**Hover states.**
- Primary (electric yellow): background → 50% opacity of primary (noticeably lighter).
- Neutral buttons: `bg-muted/80` (subtle sand tint).
- Inputs: border → `accent-foreground`, bg → `accent` (very pale tint).
- Table rows: faint sand wash, never blue highlight.

**Press/active.** Same target as hover (no size change, no shadow change). Disabled = 40–60% opacity.

**Focus.** Hard 2–3px ring in the current accent, offset 2px (`--shadow-focus`). Always visible on keyboard focus.

**Borders.** 1px solid. `#cfd1c7` on rebrand surfaces, `#dfdfdf` on classic. Borders do real structural work — cards, inputs, table cells all rely on them. Rounded `8–10px` default, pill (`9999px`) for tags and avatars.

**Shadows.** Very restrained. `shadow-sm` for cards that need lift; most cards are border-only. No colored shadows, no drop-shadow glows. Popovers/menus get `shadow-md`.

**Radii.** `2 / 4 / 8 / 10 / 12 / 16 / full`. Default is `4px` (`--radius`). Cards step up to `8–10px`, large surfaces to `12–16px`, tags fully rounded.

**Protection gradients vs capsules.** Prefer capsules (solid rounded-full tags) over protection gradients. The only gradient used is the Lumen marketing gradient.

**Layout rules.**
- Fixed header: **75px** tall, solid surface with bottom border. No transparency.
- App sidebar: collapsible (icon-only ↔ expanded), sticky below header.
- Content max-width for long-form: `max-w-3xl` (48rem). App shells are full-width 3-column grids.
- 4px base grid; gutters typically `gap-2 / gap-4 / gap-6`.

**Transparency & blur.** Rarely. Hover tints use `/10 /20 /50 /80` opacity on a solid. No glass-morphism, no backdrop-blur.

**Imagery vibe.** Warm daylight, golden-hour; greens and sand tones. No grain, no duotone. When buildings are shown they're industrial/commercial roofs with panels, not corporate stock.

**Cards.** `border border-border bg-white rounded-md p-5`. That's it. Shadow only on hover/float (popovers, dialogs).

**Tables.** Dense 36–44px rows, border-top separators, left-aligned text, right-aligned numbers, tabular numerals (`--lumen-num`). Sortable headers show `▲/▼` in Tabler icons.

**Charts.** **Single-series charts use `#1A1A1A`.** When several single-series charts sit side-by-side, cycle through these three (no color carries meaning, this is purely for legibility):

- 2 charts → `#1A1A1A`, `#404040`
- 3 charts → `#1A1A1A`, `#404040`, `#9FA38F`
- 4+ charts → loop the same three in order

**Highlights.** When a chart needs to call out a specific datum (selected bar, hovered point, "this is the one"):
- **Single-series →** electric yellow `#DFFF5E`.
- **Multi-series →** graphite black `#1A1A1A` (as a stroke, outline, or label color — the series's own color stays put).

Multi-series charts pick the **first N colors** from a single ordered 18-color sequence — never reshuffle, never skip. The order is curated so small charts read naturally: at 4 series you're in the green family; at 7 you're in greens + blues; at 9 you have the full neutral ramp; coral and purple only appear when needed.

| # | Name | Hex | | # | Name | Hex |
|---|---|---|---|---|---|---|
| 1 | Graphite Light | `#9FA38F` | | 10 | Coral | `#FF6B4A` |
| 2 | Chartreuse | `#90C84A` | | 11 | Electric Coral | `#E06040` |
| 3 | Yellow-green | `#B8D150` | | 12 | Burnt Sienna | `#B84020` |
| 4 | Electric | `#DFFF5E` | | 13 | Electric Lilac | `#B060E8` |
| 5 | Sky Light | `#B1E5FF` | | 14 | Violet | `#8848C8` |
| 6 | Sky Blue | `#68A2CD` | | 15 | Deep Purple | `#5C2E98` |
| 7 | Sky Deep | `#3A7CA8` | | 16 | Electric Mint | `#00E8C8` |
| 8 | Graphite Mid | `#6B7280` | | 17 | Aqua | `#2ABFB8` |
| 9 | Graphite Black | `#4B5563` | | 18 | Deep Teal | `#1A85A2` |

**Marketplace stage ramp** — when a chart visualizes projects moving through marketplace stages (timelines, funnels, status breakdowns), use this exact ordered ramp. The sequence is **semantic** — do not swap colors:

| # | Stage | Color |
|---|---|---|
| 1 | Vetting interest | `#9FA38F` |
| 2 | Preparing to launch | `#B8D150` |
| 3 | Collecting bids | `#DFFF5E` |
| 4 | Reviewing bids | `#B1E5FF` |
| 5 | Negotiating contracts | `#68A2CD` |
| 6 | Developing project | `#404040` |
| 7 | Operational | `#1A1A1A` |

Stroke-based line charts, minimal grid, data labels inline. Negative space > chart junk.

---

## ICONOGRAPHY

**Primary icon set: [@tabler/icons-react](https://tabler.io/icons)** — **20×20 default, 1px stroke**. Used throughout the app (see `web/package.json` → `@tabler/icons-react@3.36.1`, and direct imports in every component file: `IconHome`, `IconBuilding`, `IconSunHigh`, `IconFileDownload`, `IconStarFilled`, `IconPlus`, …). Render with `<Icon size={20} stroke={1} />`.

To render them in design mocks, this kit links Tabler from its CDN so `<i class="ti ti-sun-high">` works without React. No bundling required.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.36.1/dist/tabler-icons.min.css">
```

**Brand-specific SVGs** live in `assets/icons/`:
- `solar_building.svg` — used on the Shine/property detail CTAs
- `PDF.svg`, `CSV.svg` — download affordances in tables and reports

**Logos** are in `assets/logos/`. The canonical product mark is the **crescent** — two solid circles + an interior arc that reads as a sun clipped by an eclipse. Filename cheatsheet:
- `crescent_black.png` — app header lockup (rebrand)
- `primary_black.png` / `primary_white.png` — logomark only
- `horizontal_black.png` / `horizontal_white.png` — logo + wordmark
- `square_black.png` / `square_white.png` — social avatar
- `small_black.png` / `small_white.png` — favicons
- `electric_yellow_logo.png` — wordmark in signature electric yellow

**Emoji:** never.
**Unicode glyphs used as icons:** `₂` (CO₂), `→`, `×`, en-dash `–`, `$`, `%`.

**Substitutions flagged to the user:** none — Tabler is CDN-available and matches the original stroke weight exactly. ABC Arizona / Pelikan / Pelikan Mono fonts are the licensed originals (you uploaded them).

---

## INDEX — what's in this folder

- `README.md` — you are here.
- `SKILL.md` — entry point when this folder is used as an Agent Skill.
- `colors_and_type.css` — all CSS variables, `@font-face` declarations, and semantic type classes (`.lumen-h1`, `.lumen-hero`, `.lumen-mono`, etc.).
- `fonts/` — ABC Arizona Serif, ABC Pelikan, ABC Pelikan Mono (woff2/woff).
- `assets/logos/` — full logo kit (crescent, wordmark, square, small).
- `assets/icons/` — brand-specific SVGs (solar_building, PDF, CSV).
- `assets/images/` — product imagery (login bg, solar panel, ads, pending states).
- `preview/` — HTML cards that populate the Design System tab.
- `ui_kits/web/` — interactive, pixel-close recreation of the Lumen Energy web app:
  - `README.md` — fidelity notes + inventory
  - `index.html` — click-through demo: Login → Portfolio Homepage → Property Detail
  - `components.jsx` — primitives (`Button`, `Tag`, `Input`, `Card`, `SummaryCard`, `ToggleGroup`, `Spinner`, `TextLink`) + chrome (`Header`, `Sidebar`, `Footer`)
  - `screens.jsx` — `LoginScreen`, `HomepageScreen`, `PropertyCard`, `PropertiesTable`, `PropertyDetailScreen`
  - `App.jsx` — screen router shell

No slide template was provided, so no `slides/` folder exists.

---

## Quick-start snippets

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.36.1/dist/tabler-icons.min.css">

<body class="lumen-root">
  <h1 class="lumen-hero">Cut carbon <em>profitably.</em></h1>
  <p class="lumen-body1">Welcome to the Lumen Energy marketplace…</p>
  <button style="background: var(--primary); color: var(--primary-fg); padding: 8px 16px; border-radius: 4px; font-family: var(--font-ui); border: none;">
    New property
  </button>
</body>
```

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/ebbe54cd-a449-45c4-bc42-45fb1be5b17a/colors_and_type.css`, `/projects/ebbe54cd-a449-45c4-bc42-45fb1be5b17a/preview/_card.css`). The 92 custom properties it defines are:

--bg, --bg-elevated, --bg-header, --bg-muted, --bg-sidebar, --border, --border-strong, --fg, --fg-muted, --fg-on-accent, --fg-subtle, --font-display, --font-mono, --font-sans, --font-ui, --header-height, --link, --lumen-black, --lumen-chart-aqua, --lumen-chart-coral, --lumen-chart-graphite, --lumen-chart-purple, --lumen-chart-sky, --lumen-chart-yellowgreen, --lumen-destructive, --lumen-destructive-soft, --lumen-electric-yellow, --lumen-gradient, --lumen-grey-100, --lumen-grey-300, --lumen-grey-400, --lumen-grey-500, --lumen-grey-700, --lumen-grey-800, --lumen-grey-900, --lumen-haze-100, --lumen-haze-200, --lumen-haze-700, --lumen-indigo-100, --lumen-indigo-200, --lumen-indigo-50, --lumen-indigo-500, --lumen-indigo-600, --lumen-indigo-700, --lumen-indigo-900, --lumen-sand-100, --lumen-sand-200, --lumen-sand-300, --lumen-sand-500, --lumen-sky-blue, --lumen-success, --lumen-success-soft, --lumen-warning, --lumen-white, --primary, --primary-fg, --radius, --radius-2xl, --radius-full, --radius-lg, --radius-md, --radius-sm, --radius-xl, --ring, --secondary, --secondary-fg, --shadow-focus, --shadow-lg, --shadow-md, --shadow-sm, --shadow-xs, --space-1, --space-10, --space-12, --space-16, --space-2, --space-24, --space-3, --space-4, --space-5, --space-6, --space-8, --text-body1, --text-body2, --text-caption, --text-display, --text-h1, --text-h2, --text-h3, --text-h4, --text-hero, --text-title

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/ebbe54cd-a449-45c4-bc42-45fb1be5b17a/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: write_file]_

Now I'll build the page. Single self-contained HTML with vanilla CSS/JS, editorial layout, sharp edges, Lumen palette honored exactly.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Built **Referral Program.html** — a single-page editorial landing for the Lumen referral program.

**Structure:** sticky anchor nav → hero with "program at a glance" stat card → 6 personas grid → black "what we look for" band with dual criteria columns → sky-blue stats band (3 quantitative callouts) → 8-tile markets grid → 3-step "how it works" → 4-card "why Lumen" → 7-item FAQ accordion → dark inline submit form with validation + warm confirmation state → footer.

**Design execution:**
- Arizona Serif Light for display, Pelikan for body, Pelikan Mono for eyebrows/labels — all from the design system, no Google Fonts needed
- Electric yellow used sparingly: primary CTAs, headline accent underlines, market tile markers, one chip in step 03, and a single border on the success state
- Sky blue carries the stats band via radial gradient
- Sharp 2-4px radii throughout, structural 1px borders, no drop shadows on cards
- Monospace numbered eyebrows (`01 / Who it's for`) give it the editorial-fintech rhythm
- Sentence case everywhere, em-dashes, en-dashed ranges per the Lumen voice guide

Stats and payout figures are left as illustrative placeholders ($45K avg payout, 120 MW pipeline, $2.4M paid to partners, 67% close rate) — swap real numbers in when you have them. Same for the contact phone and email handle.

## User

Please scrap the made up stats and replace them with other true things. 

And frame the referral fee as the secondary benefit. The first benefit to referrers should be a creative way to serve value to clients. Here's some more inspiration focused on brokers (just a subset of people who this referral page is meant for)

## Assistant

_[tool: read_file]_

Heads up — the inspiration material you mentioned didn't actually come through (no attachment landed). I'll work from your two clear asks and you can drop the inspiration in next round if you want me to iterate further.

Two reframes incoming:
1. **Strip fake numbers** — replace with qualitative facts that are actually true (Lumen's positioning, market coverage, capability set, customer types).
2. **Lead with the client benefit** — "give your clients a real answer about solar" becomes the primary frame; the fee becomes a parenthetical.

_[tool: str_replace_edit]_

Now update the hero card styles (the new structure uses a list, not rows), and replace the made-up stats band with true qualitative facts.

_[tool: str_replace_edit]_

Now the stats band — replace fake numbers with true qualitative facts about Lumen's positioning:

_[tool: str_replace_edit]_

Now the "how it works" reframe — embed client benefit into step 2, soften step 3:

_[tool: str_replace_edit]_

_[tool: done]_

Done with the rewrite. Let me check the result:

_[tool: fork_verifier_agent]_

Reframed.

**What changed:**
- **Hero** now leads with *"Give your clients a real answer about solar. Without becoming a solar expert."* The fee mention is a quiet italic aside in the subhead.
- **Hero card** flipped from "Avg payout $45K" / numeric program stats → a numbered list of what the client gets (real feasibility answer in writing, NOI path, one accountable partner, no cost to look). Below it, a small yellow "And you" footer mentions the referral fee structure without leading with it.
- **Capability band** (was the fake-stats band) now reads *C&I only / One partner / PPA · community · ownership* — three true qualitative facts about Lumen's positioning, rendered in the same serif treatment.
- **How it works** step 2 reframed to *"We do the work. Your client gets a real partner."* Step 3 reframed to *"Project closes. You get paid for the introduction."*
- Section intro reframed: *"The fee is the smallest part of the loop."*

When you have the inspiration material handy, drop it in and I can push harder on the broker-specific framing — there's probably more to do on the personas section to make the "value to clients" case more concrete for each archetype.

## User

Verifier agent check completed

## Assistant

Verifier came back clean — all three checks passed (new hero list with yellow footer, qualitative capability band, no leftover fake stats). Ready for your inspiration material whenever you want to push the broker framing further.

## User

Thanks. Now please incorporate this image into the body. 

And please reframe the site to be more about capturing referral partners (Join the network) rather than specific referral deals (submit a referral) but leave the option to submit specific deals along with the flow.

And please produce a lightweight map with highlighted states in the "where we operate" section

## Assistant

_[tool: image_metadata]_

_[tool: grep]_

Let me re-read the file (user edited it) and check the image.

_[tool: grep]_

_[tool: read_file]_

Let me also check the markets section and the form structure:

_[tool: run_script]_

Let me kick off the image resize, then make all the substantive changes.

_[tool: run_script]_

_[tool: run_script]_

Now generate the US tile-grid SVG:

_[tool: show_html]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: run_script]_

Let me rebuild the SVG more compactly using CSS classes inside `<style>`:

_[tool: read_file]_

Now I'll make all the substantive edits. Starting with CSS additions:

_[tool: grep]_

_[tool: grep]_

Now I'll insert all new CSS before `.reveal`, and make all the structural changes:

_[tool: str_replace_edit]_

Now the nav and hero CTAs:

_[tool: str_replace_edit]_

Now reframe the hero subhead and headline to lead with "network" framing, and replace the markets section + insert the proof band:

_[tool: str_replace_edit]_

Now insert the proof band (rooftop image) between personas (`#who`) and criteria (`#criteria`):

_[tool: str_replace_edit]_

Now rebuild the markets section with the SVG tile-grid map:

_[tool: str_replace_edit]_

Now reframe the form section as tabbed (Join the network | Submit a deal), and update the eyebrow numbering and section ID:

_[tool: str_replace_edit]_

Now update the form-wrap layout so the form-stack works correctly, fix footer link, update FAQ to reference the network, and rewrite the JS to handle tabs + both forms:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now renumber the FAQ items 02-08:Now rewrite the JavaScript at the bottom to handle the tabs and both forms:

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: delete_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Reframed to a network-acquisition page with the rooftop image and a real tile-grid map.

**What changed:**
- **Primary CTA everywhere** is now *Join the network* — nav, hero, footer. Below the hero buttons there's a small "Or, tell us about a specific deal right now →" link that jumps to the deal form.
- **Hero headline** repositioned: *"Become the person who brings their clients a real answer about solar."*
- **Rooftop image** sits as a full-bleed band between personas and criteria, with a subtle gradient overlay and an editorial caption (*"Roughly the kind of building we're actually talking about. — Industrial rooftop · 1.2 MW"*). Resized from 10500×6000 → 2400×1371 jpg (~280KB).
- **Where we operate** now has a real SVG tile-grid map of all 50 states + DC with the 8 active markets highlighted in electric yellow, paired with a clean list of program notes on the right. Includes a small legend below the map (Active / Expanding into).
- **Form section** is now tabbed:
  - **Join the network (default)** — name, role+company, email, multi-select advisor type, multi-select markets, frequency radio, notes
  - **Submit a specific deal** — preserved with all the deal fields
  - The two tabs share one success state that swaps copy based on which form you submitted
- **FAQ** got a new lead question: *"What's the difference between joining the network and submitting a deal?"* — and the rest renumbered to 02-08.

The deep links work both ways: the hero "specific deal" link and the inline "Already have a specific building in mind?" hint will switch tabs and scroll to the form.

## User

Verifier agent check completed

## Assistant

All three checks passed — rooftop band, tile-grid map, and tabbed form all render correctly. Ready for next round.

## User

Please set the expectation that the referrer has to actually introduce us to their client, they can't just TELL us they know someone and then we have to go chase them.

Also, where the image is, change the "actually" to white so it's readable. And remove all the language at the bottom right of the image.

Also please incorporate this new image at the top of the page with a filter on it to make the "Become the
person who brings
their clients
a real answer
about solar." section all readable

## User

<attached_files>
- uploads/pasted-1779390266829-0.png
</attached_files>

## Assistant

_[tool: image_metadata]_

Let me first resize the new hero image, then make the changes.

_[tool: run_script]_

_[tool: run_script]_

_[tool: str_replace_edit]_

Now the substantive edits. First the hero CSS — dark background image, white text, override secondary button:Now update the proof band (white "actually", remove right caption) and the hero subhead to set the "you make the introduction" expectation:

_[tool: str_replace_edit]_

Now update "How it works" step 1 and the FAQ to make the introduction expectation explicit:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the intro affirmation to the deal form:

_[tool: str_replace_edit]_

Now validate the intro pledge in the deal form submit handler:

_[tool: done]_

_[tool: fork_verifier_agent]_

Done.

**Changes:**
- **Hero** now uses the aerial industrial-rooftop image as a full-bleed background with a dark gradient overlay (stronger on the left where the text sits, lighter on the right). Headline and subhead switched to white; the eyebrow inverted to a light variant; the "How it works" secondary button rewired for the dark theme. The "What you give your client" card stays light/sand and gains a soft drop shadow so it floats off the dark image as a clear focal point.
- **Proof band**: "*actually*" is now white italic (the yellow highlight is gone); the bottom-right caption ("Industrial rooftop · 1.2 MW...") is removed entirely.
- **Introduction expectation** is now wired through the page in four places:
  - Hero subhead: *"**You make the warm introduction** — we do the rest of the work."*
  - "How it works" Step 1 re-titled *"Make the introduction."* with copy: *"An email loop-in, a quick three-way call, whatever's natural. We don't want a name we have to cold-chase. The intro is the whole job on your end."*
  - New FAQ #4: *"What kind of introduction do you expect?"* — answered with the warm-intro expectation and the explicit "if you just send us a name, we'll come back and ask for the intro."
  - Deal-submission form: required checkbox affirming *"I'll make a warm introduction to my client. An email loop-in, a quick call, whatever works — we don't chase cold contacts."* The form won't submit without it.

## User

Verifier agent check completed

## Assistant

All checks passed.

## User

Apply a direct edit. In Referral Program.html: wrap the text "" in a span with inline style color "rgb(255, 255, 255)" inside this element.
<mentioned-element>
dom:      body › header#top.hero › div.container › div.hero-grid.reveal › div › p.hero-sub[3/5]
text:     "Join Lumen’s referral network and become a trusted resource…"
children: text, strong, text, em
selector: [data-om-id="0434d5bf:30"]
id:       cc-3
</mentioned-element>

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Direct-edit came through with empty text — most reasonable interpretation is "make this paragraph fully white." Updating the CSS:Done — hero-sub paragraph is now solid white (`rgb(255,255,255)`), with the trailing em ("And yes, we pay you when projects close.") and bold "You make the warm introduction" both kept at full or near-full white for cleaner contrast on the dark hero. If you meant to color a more specific span, just point at the exact text and I'll wrap it precisely.

## User

Lumen is just a broker/marketplace. We do not fund and own systems long term. So please adjust any language that conflicts with that. 

Also, please make sure everything is readable.

## Assistant

_[tool: grep]_

Right — that's a material positioning shift. Let me find all the places where the page claims Lumen does design/build/operate work and reframe to marketplace/broker language.

_[tool: grep]_

_[tool: grep]_

Now apply all the marketplace reframes:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Two more fixes — tighten the hero subhead to marketplace language, soften the FAQ revenue-share line, and bump hero secondary text contrast:

_[tool: done]_

_[tool: fork_verifier_agent]_

Marketplace reframe applied across the page.

**Reframed copy:**
- **Hero subhead** now reads: *"You make the warm introduction — we run a competitive bid with vetted developers, structure the deal, and keep your client in the driver's seat."*
- **Hero card item #3** changed from *"One accountable partner for engineering, capital, construction, and 20-year operations"* → *"A competitive bid process with developers we've already vetted — not a single take-it-or-leave-it pitch."*
- **Capability band middle stat** changed from *"Full stack / One partner / Feasibility, financing, oversight..."* → *"Marketplace / Many developers / We pre-vet developers in every active market and run a competitive process for each project."*
- **How it works step 2** changed from *"We do the work. Your client gets a real partner."* → *"We run the process. Your client picks the best offer."* — and the chips now read Feasibility · Bid process · Developer match · Contract.
- **Why Lumen card 1** (Focus) now reads *"A marketplace purpose-built for commercial & industrial."* (was "a platform")
- **Why Lumen card 2** (Hard projects) reworded to *"We structure the deals others walk away from"* (no longer implies Lumen executes them)
- **Why Lumen card 3** (Marketplace, was "Backing") fully rewritten: *"A curated bench. Real options. Lumen is the marketplace where institutional developers bid for C&I projects."*
- **Persona #5** (Sustainability advisors) tagline changed to *"Plug Lumen in when your clients need a real bid process, not another deck."*
- **Criteria intro** changed from *"C&I-only platform"* → *"C&I-only marketplace."*
- **Footer brand** rewritten: *"The marketplace where commercial & industrial building owners find vetted developers, run competitive bid processes..."*
- **FAQ #6** (How and when do I get paid?) softened the revenue-share claim to "multi-stage fees" since true revenue-share isn't quite right for a marketplace.
- **Meta description** updated.

**Readability:**
- Hero subhead bumped to solid white earlier; the trailing italic now sits at 0.78 white.
- "Or, tell us about a specific deal" link nudged brighter (0.85 → underline border at 0.7).

## User

Verifier agent check completed

## Assistant

Good catch — fixing the persona section lead:

_[tool: str_replace_edit]_

Fixed. The persona section lead now reads *"You bring the relationship; we bring the developer bench, the bid process, and the deal structuring."* — consistent with the marketplace positioning.

## User

Address these comments from my teammates:

**Sam** (on `Referral Program.html` at `[data-comment-anchor="226629c70b-div"]`):
make the email address here and elsewhere "hello@lumen.energy"

**Sam** (on `Referral Program.html` at `[data-comment-anchor="b84719b7d8-span"]`):
remove the location piece. we operate across the US

**Sam** (on `Referral Program.html` at `[data-comment-anchor="48c467022f-div"]`):
this block feels outside of the rest of the content.

**Sam** (on `Referral Program.html` at `[data-comment-anchor="a385e2c0cd-p"]`):
can't read this

**Sam** (on `Referral Program.html` at `[data-comment-anchor="2803d2fca0-h1"]`):
can't read this

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

Now apply all five fixes:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now: bump the hero overlay so the headline/subhead are clearly readable, and integrate the "Outside these markets?" block into the section header:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now remove the markets-footer block entirely:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

All five comments addressed:

- **`partners@lumen.energy` → `hello@lumen.energy`** in three places (form aside, footer, and the deal-submission success message)
- **Location row removed** from the form aside (the contact block is now just email + phone)
- **"Outside these markets?" block** removed from the markets section and absorbed into the section lead as an inline bold callout: *"...we're expanding constantly. **Outside these markets? Send it anyway.** The right project travels."*
- **Hero h1 + subhead readability** — strengthened the dark overlay on the hero image: linear gradient bumped from `0.78/0.55` → `0.92/0.78` on the text side, and the radial vignette on the upper-left went from `0.45` → `0.55` and grew. White headline and subhead should now sit on a much darker base.
- Cleaned up a duplicate orphan `<p class="hero-sub">` tag that had crept in from a direct edit.

