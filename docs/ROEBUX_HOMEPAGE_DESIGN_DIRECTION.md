# RoeBux — Homepage Design Direction

Target build: **Shopify Horizon v3.5.1** (block-first). Companion to `CLAUDE.md`, the Customer PRD and the implementation checklist. This is the written source of truth for the homepage's look, rhythm and art direction; the Claude Design file (`reference-assets/design/RoeBux Homepage.dc.html`) is the visual reference.

Status: **frozen "good enough for v1."** Implement by evolving the existing Horizon homepage toward this — not a from-scratch rebuild. Treat conversion guidance as directional, not rigid.

> Decision legend: **[confirmed]** locked · **[recommendation]** my advice, change freely · **[TBD]** needs approval before finalizing.

---

## 1. Visual concept — "warm, low-light, engineered calm"

RoeBux opens like the first frame of a field film — dark, warm, unhurried — then resolves into the clarity of a precision product brand. The page breathes in a deliberate rhythm of **atmosphere** (warm-dark, cinematic) alternating with **clarity** (off-white, product). Three commitments:

- **Warmth over neutrality** — browns/taupe/charcoal/off-white; every photo warm-graded. No cool greys.
- **Depth over decoration** — cinematic feeling from layered imagery, warm dark scrims and negative space — not heavy animation, not gradient washes.
- **Precision as personality** — tight typography, exact alignment, macro product detail, and a single orange accent where action or precision is signified.

Emotional target: prepared, precise, confident, in the field at first light. Positioning: not bargain utility, not tactical kit — a premium, personal, crafted field object.

## 2. Design system

**Palette [confirmed]** — primary brown `#534030`, deep brown `#45372C`, deep taupe `#5A483E`, warm taupe `#736357`, field brown `#856546`, sand `#CBB994`, off-white `#FAFAF9`, charcoal `#2E2E2E`, orange accent `#F47C00` -> hover `#D35400`.
**Field green [TBD]** — proposed muted olive `#515B44` (low chroma, harmonizes with the browns). Used sparingly only — currently the Responsible-field-use eyebrow and one product swatch. Not a background, never a tactical/bright green. Exact hex pending approval.

**Typography [confirmed]** — Montserrat headings, Roboto body. Display/hero large and tight (~64-80px, -0.02em); H1 ~44-48px; H2 ~32-36px; H3 ~22-24px; body 16-18px (line-height ~1.6); eyebrow labels ~12-13px, tracked ~0.08em in sand/muted brown.

**Header [confirmed]** — logo left -> lean nav (Shop · Custom Orders · About · Contact) -> account + cart icons right. Transparent over the hero, solid/semi-solid on scroll. No mega-menu. Logo-left keeps the hero's optical centre free for the headline.

**Buttons / CTAs [confirmed]** — one restrained primary action per screen; orange reserved for the single highest-value CTA, calm brown/off-white elsewhere; secondary as ghost/outline or text link with a small arrow. ~4px radius, generous padding, soft (not hard) shadow, subtle hover.

**Product imagery [confirmed]** — product photos sit on a **clean off-white `#FAFAF9` background with a soft warm shadow**. Product *colours* may include RoeBux Orange, muted olive, deep brown, sand/desert, or custom finishes — but the surrounding tiles must stay **calm, clean and neutral**. Avoid sand/beige/yellow product *tiles* (the background), which read muddy. Keep page warmth in the surrounding bands and type; the product photo itself sits on clean light ground. Single consistent **4:5 crop** everywhere. Current product photos are placeholder/reference (real 3D-printed samples), swappable.

**Backgrounds [recommendation]** — warm photography and material textures (canvas, walnut, stone, matte filament). Gradients are connective tissue only (a single atmosphere band) — never the Hero 1 visual or the dominant identity.

**Motion [confirmed]** — subtle, native, performance-budgeted: gentle scroll-reveal (small distance, soft easing), restrained hover micro-interactions, slow hero movement only. Respect `prefers-reduced-motion`; light on mobile. No animation libraries, no build step (Horizon-native constraint).

## 3. Brand-layer vs product-layer messaging [confirmed]

Keep top-level brand language **broad and future-proof** so adding products later needs no rebuild; keep the actual products **specific** because specificity reads premium.
- **Brand layer (future-proof):** tagline/hero/eyebrow stay at "precision field gear / made to order" level — not literally "cartridge cases." Nav says **Shop** (not "Cartridge Cases"). Pillars describe capabilities (precision fit, made to order, field-ready), not a product. About/brand story stays hunter-built/craft/3D-printed.
- **Product layer (specific, sells today):** product cards and product pages are confidently cartridge-specific.
- Collection structure [recommendation]: a top collection like *Field Storage* / *Cartridge Storage* that can gain siblings later, rather than hardcoding the whole shop to cartridges.

## 4. Homepage structure & section art direction

**Section flow [confirmed] — Featured Products is removed** (with only two products it duplicated the product-lines section; prices/swatches moved into the product-line cards). The **brand promise is folded in as a short intro above the product cards** (not a separate full-width band) so the rhythm stays strictly alternating. Order:

1. **Hero 1** [dark] — full-viewport cinematic still (video later) with a warm bottom-weighted dark scrim. Eyebrow ("PRECISION FIELD GEAR · MADE TO ORDER") + large Montserrat headline + short subline anchored lower-left, in a continuously protected dark zone (not over the bright sky). One calm primary CTA ("Shop field gear") + one ghost/text link ("Explore custom orders ->"). Headline options live as a tweak — atmospheric ("Ready before first light." / "The quiet hours decide.") and product-led ("Every round seated. Silent. Accounted for." / "Printed to your caliber. Built for the field.") [recommendation]. Emotion: arrival, anticipation.
   - **Hero subject [confirmed]:** field/preparation mood. A subtle **fine walnut wood-stocked hunting rifle, slung** on the back is allowed and on-brand (heritage/craft, Blaser-adjacent) — keep the walnut detail readable, but secondary to the landscape, never aimed, never centred, never a black tactical/scoped-prone look. The current placeholder rifle is a temp comp; brief the final still toward a warm walnut rifle slung, hunter glassing/walking. No tactical aesthetic.
2. **Brand promise + Two product lines** [light] — one short Montserrat promise line as the intro ("Made by a hunter, for hunters." or similar), then the product cards directly below. **Asymmetric [confirmed]:** the Signature Cartridge Case takes the wide column (~1.55:1) with larger title, swatch row and hover-swap to the open-case shot; the Field Holder is a smaller, offset secondary card. On mobile the Case is full-bleed, the Holder a compact row card. Prices/swatches live here. Emotion: calm clarity + instant comprehension + clear hierarchy.
3. **Why RoeBux** [dark] — deep-brown band with radial depth; three pillars (Precision Fit · Made to Order · Field-Ready Design), short header + one line each; sand eyebrows; off-white type. Emotion: trust, gravity.
4. **Custom orders** [light] — calm invitation (custom colours/logos/calibers on request, no live configurator) + one orange-accented CTA. Emotion: "this can be made for me." *(A subtle warm-atmosphere/gradient moment can live here if reintroduced without breaking the dark/light rhythm.)*
5. **Craft / process** [dark, charcoal] — Designed -> Printed -> Checked -> Shipped; engineered treatment: hairline left rules per column, mono `01-04` numerals, tight grid. Not hobbyist. Emotion: credibility, care.
6. **Responsible field use** [light] — short, respectful: preparation, order, reliability, respect for wildlife. Olive eyebrow accent. Emotion: integrity.
7. **Closing statement** [dark] — quiet final frame mirroring the hero; one calm line + one path back to the collection; gradient-flows into the brown footer as one continuous cinematic close. Emotion: resolved confidence.
8. **Footer** [dark brown] — brand mark + one-line statement, lean nav, legal links, contact email, "RoeBux is operated by Essens Engineering B.V.", socials [TBD]. **Newsletter is off as a primary conversion for MVP**; at most a subtle "Field notes — new releases, custom builds and field stories" line here [recommendation], not a newsletter hero. Build a content rhythm before collecting emails.

**Rhythm [confirmed]** — strictly alternating dark / light so no two same-temperature sections sit back to back. Alternating temperature is the single biggest lever against a "configured theme" look.

## 5. Problems this fixes (from the earlier build)

Too little colour -> real dark warm bands so brown carries the identity, not just text. Default-Shopify feel -> deliberate asymmetry (hero, product split), varied section heights, custom product cards with warm shadow, baseline-grid alignment. Weak rhythm -> alternating temperature + varied vertical padding. Weak imagery -> gradient demoted to atmosphere; Hero 1 a graded cinematic still then video; consistent 4:5 product crop on clean off-white. Button polish -> one primary + one ghost, consistently aligned. Spacing -> more macro whitespace, tighter heading type. Depth -> scrims, layering, warm grading.

## 6. Implementation notes for Claude Code (Horizon-native)

- This document + the Claude Design file are **visual blueprint only** — rebuild as **Horizon-native sections / theme blocks**, do not paste Claude Design HTML 1:1.
- Likely touched: `templates/index.json` (section/block composition + settings), `assets/roebux.css` (brand layer), `layout/theme.liquid` (global token/asset plumbing only), `config/settings_*` via the editor for color schemes and type, and section/block files only where a native block can't express the layout. Per-phase Horizon paths confirmed at the start of the phase.
- Native-first: use Horizon color schemes for the dark/light bands, native section padding/layout for rhythm, native blocks for columns/cards. Custom CSS only for the hero scrim, the warm product shadow, an atmosphere band, and the type scale. Centralize brand values as `--roebux-*` custom properties; reuse Horizon's scheme variables rather than hard-overriding.
- Keep content editor-editable. No framework, no build step, vanilla JS only if truly needed and Horizon-conventional. Work on `development`; never touch `main`/live; do not publish.
- Avoid: pure-white product cutouts, sand/beige product tiles, two equal heavy CTAs, uniform padding, gradient-as-hero, cold/grey grading, tactical aesthetics, finalizing the green hex.

## 7. Final direction

**Hybrid — cinematic open, precision payoff ("atmosphere first, precision second").** Opens cinematic to earn desire, resolves into product clarity (two product lines -> why -> custom -> craft) to earn trust and justify made-to-order pricing. Warm + cinematic + precise is a space competitors (cold-technical, bargain-utility, camo-tactical) don't occupy. Fully achievable in Horizon with native color schemes, media and product sections, and targeted custom CSS.

## 8. Related (not on the homepage)

- **Bulk deal** lives on the **product page** (Field Holder only): a calm "Set of 5 — €50 (one free)" line in the price area [figure TBD], configured as a native automatic Shopify discount (buy-4-get-1-free). Not shown on the Signature Case, not on the homepage.
- Next pages after the homepage: product page template, then Custom Orders, then About — designed in the same Claude Design project, implemented per-phase in Claude Code.
