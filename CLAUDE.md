# CLAUDE.md — RoeBux Storefront

Instructions for Claude Code working in this repository. Read this first, every session.

## Project
RoeBux — a premium hunting field-gear storefront. Launch focus: cartridge storage (a premium made-to-order case and a practical cartridge holder) and field-ready accessories. RoeBux is operated by Essens Engineering B.V. (RoeBux is not presented as a formally separate company or registered brand unless confirmed later.)

## Stack (hard constraint)
- Shopify **Dawn** theme. The site is built in **Liquid**, **JSON templates** (`templates/*.json`), **sections/snippets** (`.liquid`), **locales** (`locales/*.json`), theme settings (`config/settings_schema.json`), and **CSS assets** (`assets/*.css`).
- **Do not** build a standalone HTML/CSS/JS website.
- **Do not** use React, Vue, Next.js, Svelte, Tailwind, or any external frontend framework or build step. **Vanilla JS only if needed, and only in a Dawn-conventional way.**

## Git / safety rules
- **Before editing files, confirm the current Git branch is `development`.**
- Work **only** on the `development` branch.
- **Never** edit, merge to, or publish `main` / the live theme.
- **Do not publish** the theme. Previews only.
- Keep changes **modular and easy to revert** (prefer new files + small, scoped edits over rewrites of large Dawn files like `header.liquid`/`footer.liquid`).
- After touching files, summarize what changed.

## Brand direction
- Feeling: **cinematic, premium, technical, clean, calm, adventurous.** Brand experience first; shopping second; conversion cues subtle (no generic conversion-first webshop feel).
- Spelling: **RoeBux** is canonical, everywhere.
- Tone: respectful, preparation-focused. **Avoid** tactical / gun-bro / violent / aggressive language (no "kill", "lethal", "combat", "weaponized", etc.).
- Positioning: RoeBux sells **cartridge storage and hunting field accessories** — **not** ammunition, **not** firearms, **not** tactical/combat gear.
- Reference brands (Blaser, KUIU, Härkila) are **directional inspiration only** — never copy layout, code, text, or assets.

## Build conventions
- **Native-first:** use Dawn/Shopify built-ins wherever possible (cart drawer, checkout, customer accounts, contact form, consent/cookie tools, variants, translation via the free Translate & Adapt app). Avoid apps unless there's a strong reason.
- Keep content **editable in the Shopify theme editor** wherever possible — do not hard-code text/images/colors/product data where a section setting or admin field will do.
- Do **not** over-customize checkout or customer-account pages — keep them native.
- Performance: mobile-first, compressed media, minimal animation, lazy loading, lean dependencies.
- Palette stays rooted in RoeBux browns/taupe/beige/off-white/dark neutrals; orange is a calm accent only; green is a product/accent color (muted olive/forest), never a full-page background or a tactical green.

## Scope / phasing
- **Phase 2 (deferred — do not build now):** wishlist / liked products, personalization configurator, German translation, blog/Field Notes, dealer/B2B, reviews, email flows, advanced filtering, file-upload custom-order form.
- **Legal pages:** placeholders only. All legal copy must be clearly marked **"Draft — requires legal review before launch."** Do not invent definitive legal/financial terms.

## Working rhythm
1. Read `CLAUDE.md`, `docs/ROEBUX_CUSTOMER_PRD.md`, and `docs/ROEBUX_DAWN_IMPLEMENTATION_CHECKLIST_v0.2.md` before coding.
2. Propose/confirm the plan for the current phase.
3. Implement only the approved phase scope.
4. **After each phase, stop and report:** files changed, what was added, what stays editable in the theme editor, how to preview/test, and any open decisions or issues.
5. Wait for approval before moving to the next phase.

## Documentation governance
- If a better, safer or more maintainable approach exists than what is documented, **do not silently replace the documented direction.** Flag it as a recommendation, briefly explain the trade-offs, and ask for approval before changing documented strategy.
- Documentation (and reports) should distinguish between: **confirmed decisions**, **assumptions**, **recommendations**, and **open questions / TBD items.** Do not let assumptions harden into implementation requirements.

## Canonical docs
- `docs/ROEBUX_CUSTOMER_PRD.md` — customer + MVP goals.
- `docs/ROEBUX_DAWN_IMPLEMENTATION_CHECKLIST_v0.2.md` — the approved build checklist (source of truth for structure, files, phases).
