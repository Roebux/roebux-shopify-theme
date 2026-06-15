# RoeBux — Shopify Theme Implementation Checklist

Version: v0.2.1 · Status: approved strategic direction; Phase 0/1 in progress
Theme base: **Shopify Horizon v3.5.1** (not Dawn). See §0a — confirmed 2026-06-08.
Changes in v0.2: brand-first reframing — conversion guidance is now directional, not a hard requirement. See §A.
Changes in v0.2.1: theme base corrected from Dawn to Horizon; §1 file inventory superseded by §0a mapping.
Brand spelling: **RoeBux** (canonical, everywhere)
Entity: Essens Engineering B.V. · Footer line: "RoeBux is operated by Essens Engineering B.V."

> This is a build checklist, not a spec freeze. Items marked **TBD** must be confirmed before launch.
> All legal copy is placeholder and marked **REQUIRES LEGAL REVIEW**.
> Native-first: prefer Shopify/Horizon built-ins; no apps unless there is a strong reason.

---

## 0a. Theme base correction (v0.2.1 — confirmed decision)

**The repository theme is Shopify Horizon v3.5.1, not Dawn.** The original docs specified Dawn as a hard constraint, but the committed theme (mislabeled "Dawn base theme" in git) is Horizon — Shopify's current flagship and Dawn's successor. Confirmed direction (2026-06-08): **build on Horizon, keep everything native and editable.** Horizon satisfies every technical constraint (pure Liquid + JSON + sections/blocks + theme settings + CSS, fully theme-editor editable, no frameworks/build step); only the literal word "Dawn" changes.

**What this changes:**
- Horizon is **block-first**. Page content is composed from *theme blocks* (`blocks/*.liquid`, ~90 of them) configured via the theme editor and stored in `templates/*.json` and `sections/*-group.json`. Favor configuring blocks/sections over authoring new Liquid.
- The **§1 file/section inventory below is written for Dawn and is superseded.** Use the mapping table here; per-phase Horizon file references will be confirmed at the start of each phase rather than locked now (so Dawn assumptions don't harden into requirements).
- **Transparent + sticky header is native in Horizon** (`sections/header.liquid` settings: `enable_transparent_header_home/_product/_collection`, `color_scheme_transparent`, `enable_sticky_header`). The "most custom part of Dawn" risk is largely retired — it's a settings + color-scheme exercise.

**Dawn → Horizon mapping (for the sections this build uses):**

| Checklist (Dawn) reference | Horizon equivalent |
|---|---|
| `sections/header.liquid` + `snippets/header-drawer.liquid` | `sections/header.liquid` + `sections/header-group.json` (logo/menu/search/account are theme blocks; drawer is native) |
| `sections/footer.liquid` | `sections/footer.liquid` + `sections/footer-utilities.liquid` + `sections/footer-group.json` (blocks: menu, text, social-links, email-signup, payment-icons, policy-list) |
| `assets/base.css` link in `layout/theme.liquid` | `snippets/stylesheets.liquid` (links `base.css`; `roebux.css` linked here) |
| Hero: `sections/image-banner.liquid` / `video.liquid` | `sections/hero.liquid` (+ `layered-slideshow.liquid`, `media-with-content.liquid`) |
| `sections/rich-text.liquid` | text blocks inside a `section.liquid` group (rich-text block) |
| `sections/multicolumn.liquid` / `collage.liquid` | `section.liquid` group with `_card` / `media` blocks; `collection-links.liquid` |
| `sections/featured-collection.liquid` | `sections/product-list.liquid` (collection) / `sections/featured-product.liquid` |
| `snippets/card-product.liquid` | `blocks/_product-card*.liquid` + `sections/section-rendering-product-card.liquid` |
| `sections/image-with-text.liquid` | `sections/media-with-content.liquid` |
| `sections/collapsible-content.liquid` (specs/FAQ) | `blocks/_accordion-row.liquid` (accordion blocks) |
| `templates/product.json` + `sections/main-product.liquid` | `templates/product.json` + `sections/product-information.liquid` |
| `templates/collection.json` + `main-collection-product-grid.liquid` | `templates/collection.json` + `sections/main-collection.liquid` + `product-list.liquid` |
| `snippets/cart-drawer.liquid` | native cart drawer + `sections/main-cart.liquid` (blocks: `_cart-products`, `_cart-summary`) |
| `assets/roebux.css` | unchanged — `assets/roebux.css`, linked once via `snippets/stylesheets.liquid` |

> Fonts in Horizon: heading/subheading/body/accent roles via theme settings (`type_*_font`). RoeBux set: **Montserrat** (heading/subheading/accent) + **Roboto** (body). Color schemes live in `config/settings_data.json` `color_schemes` and are edited in the theme editor.

---

## A. Experience priorities (governs every design decision)

RoeBux v1 is a **cinematic, premium brand experience first**, a shop second. It must be understandable and shoppable, but it should never read as a conversion-first generic Shopify store. Conversion notes below are **directional, not hard rules** — apply judgment and creative freedom.

Priority order:

1. **Brand experience first** — cinematic, clean, premium, technical, calm, adventurous; not overly sales-driven.
2. **Shopping experience second** — clear product paths, clean navigation, easy discovery, native cart/checkout, no aggressive sales language.
3. **Conversion elements stay subtle** — CTAs exist where natural; no forced "primary/secondary CTA" structure everywhere; buttons don't dominate the visual hierarchy; the experience stays calm and premium.
4. **Lead-time & customization cues are present but understated** — available cleanly (especially on product pages); product cards stay calm, not information-heavy; avoid badge/label/widget clutter.
5. **Homepage = premium brand landing page with commerce integrated** — not a standard direct-response webshop.
6. **Creative freedom preserved** — strategic input is guidance; improve hierarchy, layout and copy where useful; aim for one coherent high-end experience rather than treating every note as a constraint.

The "understand within ~5 seconds" goal stays as a *comprehension* aim (what RoeBux is, that products are made-to-order/practical, that it's premium and respectful, that you can shop or request custom) — not as a prompt to optimize aggressively for clicks.

---

## 0. Ground rules (apply to every phase)

- Work only on the `development` branch. Never edit `main`/live directly.
- Keep changes modular and Horizon-conventional. Summarize changed files after each step.
- Anything content-like (text, images, product data, colors, fonts) stays editable in the Shopify **theme editor** or **admin** — do not hard-code where a section setting will do.
- Tone: premium, technical, clean, calm, adventurous. No tactical/gun-bro language; no violent/aggressive hunting language; nothing implying ammunition or firearms sales; no cheap-webshop feeling.
- Reference sites are **directional inspiration only** — never copy layout, source code, text, visual assets or brand-specific patterns. Blaser → cinematic premium hero, technical/adventurous feel, transparent header. KUIU → clean product/shopping flow, technical confidence. Härkila → premium hunting atmosphere and field imagery.
- Photos in the project folder are **placeholder/reference only** — show type, function, approximate look. Wire them in as easily swappable theme/section assets.
- **Challenge risky items, don't silently rework them.** If a checklist item looks technically risky, unnecessarily complex, not Horizon-native, or likely to cause maintenance issues, keep the original intent, propose a simpler Horizon-native alternative, explain why, and get approval before changing direction. Distinguish **confirmed decisions / assumptions / recommendations / open TBD** when reporting.
- Provisional product names (keep flexible, avoid hard-coding final naming):
  - **RoeBux Signature Cartridge Case** (premium, made-to-order)
  - **RoeBux Field Cartridge Holder** (practical, accessible)

---

## 1. File / section / template inventory

> ⚠️ **Superseded — read as intent, not as literal file paths.** This section was written for Dawn. The Dawn filenames below (`sections/*.liquid`, `snippets/card-product.liquid`, `assets/base.css`, etc.) are **not the Horizon paths.** Use the **§0a Dawn→Horizon mapping table** for the actual Horizon files (block-first: `blocks/*.liquid`, `sections/*-group.json`, `snippets/stylesheets.liquid`, etc.). Per-phase Horizon paths are confirmed at the start of each phase. What remains valid here is the *intent* of each area (what it contains, the **[M]/[N]/[A]/[L]** posture, the copy/tone). References to "Dawn" in this section mean "the corresponding Horizon file per §0a."

Legend: **[M]** modify existing theme file · **[N]** new file · **[A]** admin/editor config only (no code) · **[L]** leave native, light touch only

### Theme config & global styling
- `config/settings_schema.json` **[M]** — configure or support **color schemes** and **font defaults** (Montserrat headings / Roboto body) and button/corner/spacing defaults through Horizon theme settings where possible; prefer Horizon-native settings over hard-coded styling. Add global brand settings only if a native setting can't express it.
- `config/settings_data.json` **[A]** — saved values (managed via editor; commit the result).
- `assets/base.css` **[M, sparingly]** — only global tokens that can't live in schemes; avoid sprawling edits.
- `assets/roebux.css` **[N]** — small dedicated stylesheet for brand-specific bits (transparent header behaviour, process section, caliber chips). Linked once from `layout/theme.liquid`.
- `layout/theme.liquid` **[M]** — link `roebux.css`; favicon; meta/social-share image hook; nothing structural.
- `locales/en.default.json` **[M]** / `locales/nl.json` **[prepare for later]** — EN strings first. Keep the structure ready for Dutch translation; add **Translate & Adapt** (free first-party) **after** the English MVP structure works, not before.

**Locked color roles (define as Horizon color schemes):**
| Role | Value | Notes |
|---|---|---|
| Page background | `#FAFAF9` off-white | dominant |
| Surface / cards | `#FAFAF9` / very light taupe | airy |
| Primary text | `#2E2E2E` charcoal / `#45372C` | high contrast |
| Heading / brand brown | `#534030` | logo color |
| Secondary / borders | `#CBB994` beige, `#5A483E` taupe, `#856546` | warm neutrals |
| Action / accent | `#F47C00` → hover `#D35400` | **accent only**, used calmly — not a dominant UI color |
| Dark section bg | `#45372C` / `#2E2E2E` | used sparingly for cinematic contrast |
| **Field green (product + subtle accent)** | **TBD muted olive/forest** | must harmonize with `#534030 #45372C #856546 #CBB994 #FAFAF9 #2E2E2E`; not bright/saturated/military; no full-page green backgrounds |

> **Do not use inconsistent or truncated branding-sheet hex values** (e.g. truncated `#5372C`, `#C8894`). Use only confirmed palette values unless the user approves a new color. The muted olive/forest green product/accent color is allowed, but its exact hex is **TBD** and must not be finalized without user approval.

### Header
- `sections/header.liquid` **[M]** — transparent over the first section (hero), solid/semi-solid on scroll using brand dark-brown or off-white; sticky; logo left, lean nav right, account + cart icons. Lean nav: **Shop · Custom Orders · About · Contact**. Keep any header CTA understated.
- `snippets/header-drawer.liquid` **[M]** — clean mobile slide menu (no full-screen mega menu).
- `assets/roebux.css` **[M]** — transparent/scroll states, overlay legibility.

### Footer
- `sections/footer.liquid` **[M, mostly via blocks]** — brand mark + one-line brand statement, lean nav, **legal links live here** (Shipping, Returns, Privacy, Cookie, Terms), contact email, the operated-by legal line "RoeBux is operated by Essens Engineering B.V.", social links **[TBD]**, newsletter **[TBD — default off for MVP]**.

### Homepage
- `templates/index.json` **[M]** — assemble the sections (§3 below) from editable sections/blocks; sequenced as a brand landing page with commerce integrated.
- Hero: `sections/video.liquid` **[M]** or `sections/image-banner.liquid` **[M]** — cinematic media + overlay for legibility; CTA(s) present but understated, no forced primary/secondary split; mobile fallback uses a gradient/still.
- Brand promise strip: `sections/rich-text.liquid` **[M]**.
- Two product lines: `sections/multicolumn.liquid` or `sections/collage.liquid` **[M]** (or a small **[N]** `sections/product-lines.liquid` if the native blocks feel constrained).
- Featured products: `sections/featured-collection.liquid` **[M]** (or two `featured-product` blocks).
- Why RoeBux pillars: `sections/multicolumn.liquid` **[M]** (Precision Fit · Made to Order · Field-Ready Design).
- Custom orders teaser: `sections/image-with-text.liquid` **[M]**.
- Craft / process: `sections/multicolumn.liquid` **[M]** styled as Designed → Printed → Checked → Shipped (or **[N]** `sections/process-steps.liquid` for the numbered look).
- Responsible field use: `sections/rich-text.liquid` **[M]**.
- Closing brand section: `sections/image-banner.liquid` / `rich-text` **[M]** — a calm closing statement with a natural path back to the collection (not a hard-sell final CTA).

### Collection / Shop page
- `templates/collection.json` **[M]** + `sections/main-collection-product-grid.liquid` **[M, light]** — minimal filters at launch, generous spacing, no sale labels.
- `snippets/card-product.liquid` **[M]** — large image, clean price, clear line distinction (Signature vs Field). Keep cards calm: caliber / "made to order" as a quiet typographic detail, not a stack of badges.

### Product page
- `templates/product.json` **[M]** + `sections/main-product.liquid` **[M]** — gallery, title, short premium description, **caliber option**, **color option** (incl. green), price, add-to-cart, dispatch note (ships 5–7 working days, made-to-order), specs block, compatibility/caliber block, what's included, custom-request CTA → Custom Orders page, FAQ accordion. This is the right place for lead-time and customization detail to live in full.
  - Use Horizon's native **collapsible content / accordion** blocks for specs + FAQ.
  - Variant **color swatches**: prefer Shopify's native swatch support (option metafield / taxonomy) so green/brown/black/orange render as swatches without an app.
- Custom logo / special requests: **not** a configurator — route to the Custom Orders page.

### Cart / winkelwagen
- `snippets/cart-drawer.liquid` **[L, style only]** + `templates/cart.json` / `sections/main-cart-items.liquid` / `sections/main-cart-footer.liquid` **[L, style only]** — keep native drawer; brand it lightly.

### Checkout
- **[L] native only.** Configure via Shopify checkout **branding editor** (logo, colors, fonts). No code. Deeper changes need Shopify Plus — out of scope.

### Customer accounts / my account
- **[L] native.** Decide mode (see Risks): "new customer accounts" (passwordless, Shopify-hosted, minimal styling) vs "classic" (`templates/customers/*` editable). Recommendation: **new customer accounts** for MVP simplicity; do **not** over-customize.

### Content pages
- Custom Orders: `templates/page.custom-orders.json` **[N]** — intro + what can be customized + info-to-provide + lead time + **native contact form**. "Email us your logo" for files (no upload app at MVP).
- About: `templates/page.about.json` **[N]** — hunter-built story, craft, 3D-printing as a strength; image-with-text + rich-text.
- Contact: `templates/page.contact.json` **[M/N]** — native contact form.
- FAQ: `templates/page.faq.json` **[N]** using `sections/collapsible-content.liquid` **[M]**.

### Legal pages (placeholders — **REQUIRES LEGAL REVIEW**)
- `Shipping`, `Returns`, `Privacy Policy`, `Cookie Policy`, `Terms & Conditions` — create as standard **pages** in admin using the default `page` template; content via page body, every page banner-flagged "Draft — requires legal review before launch." No custom templates needed.

### Consent / cookies
- **[A] native** Shopify customer-privacy / consent banner (GDPR mode for NL/EU). No app at MVP.

---

## 2. Order of implementation

1. **Phase 0 — Setup (no theme edits).** Confirm GitHub ↔ Horizon connection; create/confirm `development` branch; create temporary `.myshopify.com`; keep the structure ready for Dutch translation later (add **Translate & Adapt** after the English MVP structure works, not now); inspect Horizon section/block/setting structure.
2. **Phase 1 — Foundations.** Configure color schemes + fonts + buttons through Horizon theme settings where possible (avoid unnecessary hard-coded styling); logo + favicon; `roebux.css` linked; **header** (transparent/sticky) + **footer**.
3. **Phase 2 — Homepage.** Build the sections via editable sections/blocks as a cinematic brand landing page; mobile hero fallback.
4. **Phase 3 — Commerce templates.** Product template, collection/shop, native cart drawer styling.
5. **Phase 4 — Content & legal.** About, Custom Orders, Contact, FAQ; placeholder legal pages; enable native cookie banner.
6. **Phase 5 — Catalog & config.** Add 2 products with provisional caliber/color options + specs; configure payments and flat-rate shipping; choose account mode.
7. **Phase 6 — QA & launch prep.** Mobile-performance pass; checkout test; then DNS migration (test on Shopify domain → prepare DNS → **preserve Microsoft mail records** → cut over → verify roebux.com + email → only then retire WordPress/Cloud86 hosting, never the domain registration prematurely; keep Cloud86 live until confirmed).

---

## 3. Homepage sections (purpose recap)

Sequenced as a premium brand landing page with commerce woven in. CTAs appear where natural and stay understated.

1. **Hero** — cinematic brand impression. "Precision Storage. Built for the Field." + subline. A calm way into the collection (and, where natural, a custom-order path) — no dominant button block. Mobile fallback = brand gradient/still.
2. **Brand promise strip** — one calm line: what RoeBux is.
3. **Two product lines** — Signature Case vs Field Holder, one differentiator each; understated made-to-order/practical cue.
4. **Featured products** — two large premium cards, clean pricing, no sale styling.
5. **Why RoeBux** — Precision Fit · Made to Order · Field-Ready Design.
6. **Custom orders** — logo/color/caliber possible via request; calm invitation, not a hard pitch.
7. **Craft / process** — Designed → Printed → Checked → Shipped (engineered, controlled).
8. **Responsible field use** — short, respectful: preparation, order, reliability.
9. **Closing brand statement** — a calm sign-off with a natural path back to the collection.

---

## 4. Product-line presentation

- **Signature Cartridge Case** — the signature/core product. Lead gallery with the branded-lid hero look; emphasize precision per-caliber fit, secure latches, made-to-order finish, optional logo. Price anchor ~€49.95 **[TBD]**. Personalization handled via Custom Orders, not on-product.
- **Field Cartridge Holder** — accessible entry product. Compact grab-and-go organizer with engraved-caliber detail; from ~€12.50 **[TBD]**. Copy focuses on practical field organization. **Do not claim RoeBux original IP** — the design is licensed/externally sourced (Bambu Lab platform); describe by function, track licensing internally **[TBD: licensing confirmation]**.

---

## 5. Native vs custom vs app — quick map

| Capability | Approach |
|---|---|
| Cart drawer / cart page | **Native Horizon**, style only |
| Checkout | **Native Shopify**, branding editor only |
| Customer accounts | **Native Shopify**, minimal styling |
| Contact / Custom Orders form | **Native Horizon contact form** |
| Variants (caliber, color) | **Native** product options; native color swatches |
| Cookie/consent banner | **Native Shopify** privacy tools |
| EN→NL translation | **Translate & Adapt** (free first-party) — **added later**, after the English MVP works |
| Wishlist / liked products | **Deferred — post-MVP**, not built now |
| Personalization configurator | **Deferred**; Custom Orders page covers launch |

---

## 6. What must stay editable in the theme editor

- All homepage section content: hero media/copy/overlay/CTAs, every section's text and images, pillar/process blocks.
- Header: logo, nav links, transparency/scroll color choice, optional CTA.
- Footer: brand line, nav, legal links, contact email, social links, newsletter toggle.
- Colors (via schemes), fonts, button styles, corner radius, section spacing.
- Product template block order and the specs/FAQ accordion content.
- Collection layout, filters on/off, card style.
- Legal/content page bodies (edited as pages in admin).

---

## 7. Risks & mitigations

- **Drifting into conversion-first generic-shop feel.** Risk: too many buttons/badges/labels erode the premium brand experience. Mitigation: treat conversion notes as directional; keep CTAs and product-card detail understated; review each section against §A before shipping.
- **Transparent-over-hero header.** In Horizon this is **largely native** (header settings `enable_transparent_header_home/_product/_collection`, `color_scheme_transparent`, `enable_sticky_header`) — see §0a, the old "most custom part of Dawn" risk is mostly retired. Remaining risk: contrast/legibility on light heroes and the mobile menu overlay. Mitigation: configure the transparent + sticky settings and a dedicated transparent color scheme; test light and dark hero media; ensure overlay/contrast for accessibility; keep any small overrides in `roebux.css`.
- **Variant combinatorics** (calibers × colors). Risk: large SKU count, messy admin. Mitigation: start with a controlled launch caliber list and a small color set; revisit per-product mapping **[TBD]**; consider color as swatch + caliber as dropdown.
- **Color swatches without an app.** Risk: native swatch support depends on correct option/metafield setup. Mitigation: validate native swatch path early in Phase 5; fall back to clearly-labeled text options if needed (still no app).
- **Customer-account mode choice.** Risk: "new accounts" can't be deeply themed; switching modes later is disruptive. Mitigation: decide in Phase 0/5; default to new accounts, accept native styling.
- **Checkout limits.** Risk: requests for checkout customization that need Plus. Mitigation: set expectation now — branding only on standard plan.
- **Green misuse.** Risk: drifting toward generic dark-green hunting look. Mitigation: green = product option + occasional subtle accent only; no large green backgrounds; muted olive/forest only; lock the green hex against the brown/beige palette before use.
- **Performance.** Risk: hero video + heavy images on mobile. Mitigation: compressed media, mobile fallback image, minimal animation, lazy loading, lean app count.
- **Legal exposure.** Risk: placeholder policy text going live. Mitigation: every legal page flagged "requires review"; made-to-order return-rights wording confirmed against EU/NL law before launch.
- **DNS / email.** Risk: breaking Microsoft mail or the domain during migration. Mitigation: preserve mail DNS records, test on Shopify domain first, keep Cloud86 live until cutover confirmed, never cancel domain registration prematurely.
- **Placeholder assets mistaken for final.** Risk: reference photos shipping as final. Mitigation: keep all imagery as swappable section/theme assets; track which are placeholders.

---

## 8. Future / post-MVP features (do not build now)

- Wishlist / liked products (prefer custom metafield/localStorage over an app when revisited).
- Full personalization configurator.
- German translation.
- Blog / Field Notes, Dealer / B2B, reviews, email flows, advanced filtering, additional categories.
- Custom-order form with file upload (logo upload) app.

---

## 9. Still missing before code-complete / launch

Brand: final logo/favicon/social-share files; use only confirmed palette values (do not use inconsistent/truncated branding-sheet hex values); final **green hex** (pending approval).
Product: final names; materials, dimensions, weight, capacity; caliber-per-product mapping; final caliber list; final color list/combos; licensing confirmation for the Field Holder; final pricing.
Variants: confirm caliber + color option model and swatch approach.
Legal/commercial: returns/privacy/cookie/terms copy; KVK/VAT; EU/NL made-to-order return rights; shipping carrier + rates; payment methods; country scope.
Technical: hero video asset; mobile fallback; account mode decision; DNS migration plan + Microsoft mail records; GitHub/Horizon connection confirmation.

> None of these block building the **theme structure** with labeled placeholders, but they do block a real launch.

---

## 10. Next step

On approval, begin **Phase 0** (setup, no theme edits), then **Phase 1** foundations. I will summarize changed files and how to preview after each phase.
