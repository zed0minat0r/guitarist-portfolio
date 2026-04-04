# Nigel Audit — Dan Neoclassical Guitarist Portfolio
**Date:** 2026-04-04  
**Auditor:** Nigel (strict UX/design auditor)  
**Benchmark:** Premium independent artist portfolio sites  
**Scope:** index.html, style.css, main.js — current state (bio live, music/gallery coming soon)

---

## Overall Score: 5.8 / 10

> Honest benchmark: this is better than a free Wix template, but not yet at the level where a real music industry contact would be impressed. The bones are solid — the execution has meaningful gaps that would cause a visitor to leave within 60 seconds.

---

## Category Scores

| Category | Score | Notes |
|---|---|---|
| Visual Design | 6.2 | Good palette and font pairing; no real photograph, no visual proof of artistry |
| Mobile UX (375px) | 5.5 | Functional but cramped; several layout choices hurt mobile credibility |
| Content Quality | 4.5 | Bio text is AI-sounding and impersonal; two entire sections are empty |
| Typography | 6.5 | Playfair + Inter is a legitimate choice; sizing and hierarchy mostly correct |
| Performance | 6.0 | Clean, no bloat; but two Google Fonts families + no image optimization strategy |
| Accessibility | 5.5 | Some good moves (aria-labels, reduced-motion) undercut by real gaps |
| Overall Feel | 5.5 | Looks like a placeholder. A real user sees "coming soon" twice and leaves. |

---

## Visual Design — 6.2

**What works:**
- Black/gold/cream palette is appropriate for a neoclassical genre and avoids the generic blue-tech look.
- Playfair Display for display headings is a defensible, classical-feeling choice.
- The animated staff lines in the hero are a thematic touch that sets this apart from a generic portfolio.
- Scroll-triggered reveal animations are clean and non-gimmicky.
- Card hover states and button micro-interactions are polished.

**Issues:**
- **The "D" avatar is a critical credibility failure.** A real artist page always has a photograph. A gold circle with a letter reads as an unfinished placeholder to every visitor — no exceptions. This alone drops the site's perceived professionalism by a full grade.
- **Zero visual proof of musicianship.** No instrument in frame, no live performance photo, no album art, no waveform. The design signals nothing about what Dan actually sounds like or looks like on stage.
- **Hero background is visually thin.** The five faint staff lines and floating note glyphs are subtle to the point of being nearly invisible on most screens. The hero reads as a flat black void with centered text — the animation adds polish but does not add weight.
- **Music cards are decorative but dishonest.** "Untitled Track I / Coming Soon" with a lock icon signals a broken product, not an artist building momentum. Placeholder cards with generic SVG icons dilute the design language.
- **The gallery section is three identical dashed boxes.** There is no differentiation between slots; they convey nothing except absence.
- **Social links go to `#`.** Broken links damage trust instantly and permanently with any serious contact visiting the site.

---

## Mobile UX (375px) — 5.5

**What works:**
- Burger menu is implemented correctly — closes on outside click, locks body scroll, aria-expanded is toggled.
- Bio card stacks vertically with centered text — correct responsive behavior.
- Music cards collapse to single column — correct.
- Gallery switches to 2-column at 480px — reasonable.

**Issues:**
- **At 375px, hero name `clamp(4rem, 22vw, 6rem)` renders at ~82.5px.** "Dan" is three letters. At this size on mobile, the name takes up a substantial portion of the viewport and pushes the CTA button close to the fold — it reads as oversized, not dramatic.
- **"Explore My Work" CTA scrolls to the bio, not to any actual work.** On mobile especially, a user who taps this expects music or performance clips. Landing on a text bio is a mismatch of expectation.
- **Contact card `align-items: center` with `text-align: center` on mobile** — the email address is centered but it's a `mailto:` link with no surrounding context explaining what it's for. The section heading says "For bookings, collaborations, or just to say hello" but this is desktop-only comfortable copy; on mobile it's three stacked text blocks before you reach the actual email.
- **No tap target audit.** Social link icons are 48x48px (correct), but the burger spans only ~32px of visual area. The 4px padding helps but the effective tap zone is borderline.
- **Mobile nav slides from right but has no close button.** Users who don't know to tap outside or a link will look for an X. The burger does not animate to an X on open (no CSS transforms on the spans for open state).
- **Section padding collapses to 72px at 480px** — still generous, but the visual breathing room on mobile creates an odd "lots of space, nothing to look at" experience given the empty sections.

---

## Content Quality — 4.5

**What works:**
- The bio text makes an effort to ground Dan in a classical lineage (Bach, Paganini, Vivaldi). This is the right narrative framing for a neoclassical guitarist.
- The tags (Neoclassical, Fingerstyle, Composer, Classical Technique, Electric Guitar) are accurate genre signals.

**Issues:**
- **The bio reads as AI-generated marketing copy, not a human voice.** Phrases like "relentless pursuit of beauty," "fluency and intention," "architectural — layered, deliberate, and expressive" are grammatically correct but feel generic. A real visitor (label A&R, booker, fan) wants to know: where has Dan performed? What does he sound like specifically? What gear does he use? What composers most shaped him? None of this is present.
- **"Based on the East Coast" is vague to the point of uselessness.** City or region matters for booking inquiries. An agent looking at this doesn't know if Dan is in NYC, DC, or rural Maine.
- **"This portfolio is the beginning of something larger" is a closing line that signals incompleteness**, not ambition. It is honest but tells a visitor there is nothing here yet.
- **"dan@example.com" is a placeholder email that will 404 on click.** A user who actually wants to book Dan clicks this, gets a bounce or nothing, and never comes back.
- **Two of four nav sections are coming soon.** A portfolio with 50% of its navigation absent is not ready for public distribution.
- **"Untitled Track I" and "Untitled Track II"** — even as placeholders, these titles add nothing. Better to remove the section entirely than to display placeholder track names.
- **No call to action beyond the hero.** There is no newsletter sign-up, no "notify me when music drops," no Linktree-style link aggregation. A visitor who wants to follow Dan's progress has no mechanism to do so.

---

## Typography — 6.5

**What works:**
- Playfair Display (display/heading) and Inter (body) is a well-established pairing — classical authority + modern readability.
- `font-weight: 300` on body text is appropriate for a dark background and the Inter family.
- `line-height: 1.7` on body is comfortable.
- `-webkit-font-smoothing: antialiased` is set.
- Preconnect to Google Fonts is included — correct loading optimization.
- `clamp()` on heading sizes is a modern, correct approach.

**Issues:**
- **`font-size: 0.7rem` for section labels** (e.g., "About", "Discography") is 11.2px — below the WCAG-recommended 12px minimum for body text. These labels are decorative but strain readability on mobile.
- **`letter-spacing: 0.3em` on section labels** is aggressive. At 11.2px with 0.3em tracking, individual letters are nearly unreadable on some mobile screens.
- **The hero pre-heading "Guitarist & Composer" and the subtitle "Neoclassical Guitarist" say the same thing in two consecutive lines.** This is redundant and weakens the hero hierarchy. One should go or be replaced with something more specific.
- **No vertical rhythm system.** Margin/padding values are ad hoc (`20px`, `28px`, `44px`, `52px`, `60px`) rather than derived from a base unit. This creates minor but visible inconsistencies in section spacing.
- **`display: block` on all SVGs** is correct, but the tag `font-size: 0.7rem` is repeated in multiple places without a CSS custom property — makes it hard to update systematically.

---

## Performance — 6.0

**What works:**
- Zero external JavaScript dependencies — main.js is vanilla and minimal (107 lines).
- No CSS framework bloat.
- IntersectionObserver is used correctly with `unobserve` after animation — no persistent observers.
- Passive scroll listener on nav scroll handler.
- `prefers-reduced-motion` is respected in the reveal animation system.
- `display=swap` on Google Fonts is used (implied by the standard URL pattern) — prevents render-blocking.
- `overflow-x: hidden` on body prevents horizontal scroll on mobile.

**Issues:**
- **No `<meta name="description">` tag.** SEO and social sharing metadata is absent. When someone shares this URL, platforms will have no description to show.
- **No Open Graph / Twitter Card tags.** The portfolio will share as a blank card with no image on social media.
- **No favicon.** A browser tab with no icon signals unfinished work immediately to any technical contact.
- **Two Google Fonts families loaded** with four variant weights/styles for Playfair Display and three for Inter. This is 7 font file requests minimum. The site doesn't use Playfair 400-italic extensively — the font load could be trimmed.
- **No `lang` attribute used throughout** — wait, `<html lang="en">` is present. This is correct.
- **No structured data / JSON-LD.** For a musician, schema.org `MusicGroup` or `Person` markup would improve search visibility significantly with minimal effort.

---

## Accessibility — 5.5

**What works:**
- `<html lang="en">` is set.
- `aria-label` on burger button and social links.
- `aria-hidden="true"` on decorative SVGs and the staff animation.
- `aria-expanded` is toggled correctly on the burger.
- `prefers-reduced-motion` query in JS disables animations for users who need it.
- Semantic HTML landmarks (`<nav>`, `<section>`, `<footer>`).

**Issues:**
- **Color contrast: `var(--text-muted)` (#888 on #0a0a0a)** has a contrast ratio of approximately 4.0:1 — below the WCAG AA requirement of 4.5:1 for normal text. This color is used for nav links (default state), section sub-headings, gallery slot labels, and footer text. Multiple elements fail AA.
- **The "D" avatar has `aria-label="Dan — Neoclassical Guitarist"` on a `<div>`**, which is not a landmark or interactive element. Screen readers may not announce this without an explicit `role`.
- **No skip-to-content link.** Keyboard users must tab through the full nav before reaching main content. This is a standard accessibility requirement.
- **Mobile nav has no focus trap.** When the mobile menu is open, keyboard focus can escape the nav panel into the background content. Focus should be trapped within the open menu.
- **The scroll indicator (`<div class="hero__scroll-indicator">`) is `aria-hidden` but contains no interactive element** — this is correct, but the animated line provides no keyboard-accessible cue that there is content below the fold.
- **`<button class="nav__burger">` has no visible focus style** visible in the CSS (no `:focus-visible` rule). Keyboard users get no indication of which element is focused.
- **Tag `<span>` elements in bio have no semantic meaning.** For genre tags, `<ul>/<li>` would be more appropriate, or they should have a visible label grouping them.
- **Contact section has no `<address>` or appropriate landmark wrapping the email** — minor, but a missed semantic opportunity.

---

## Overall Feel — 5.5

A real user landing on this page in 2026 sees:

1. A dramatic dark hero with a name — promising.
2. They scroll. A text bio about someone they have never heard of, with no photo, no audio, no video.
3. They scroll. Three placeholder music cards labeled "Coming Soon."
4. They scroll. Three empty gallery boxes labeled "Coming Soon."
5. They scroll. A contact email that goes to `dan@example.com`.
6. They leave.

The design has taste. The color choices are deliberate. The font pairing is correct. The animation system is clean. But without actual content — a photograph, a single piece of audio, a real email — this is a framework, not a portfolio. A real booker or label contact visiting today would not take it seriously.

The bar for "genuinely impressive" in 2026 is high: think Mateus Asato's old site, Tommy Emmanuel's current presence, or even a well-executed Bandzoogle page. Those pages lead with sound or image, not text.

---

## Top 3 Priorities for v2

### 1. Add a real photo — or any visual proof of artistry (Critical)
Replace the "D" avatar with a photograph. If no professional photo exists, even a high-quality phone shot in good light is better than the letter D in a gold circle. Extend this to the hero section: a subtle full-width image or video background of Dan performing would transform the site's credibility instantly. The gallery section should not launch until it has at least 3 real photos.

### 2. Replace or remove "Coming Soon" sections (Critical)
Do not link to sections that have no content. If music is not ready, remove the Music section from the nav and the page entirely — or replace it with a single SoundCloud/YouTube embed of even one rough recording. Do not display "Untitled Track I." A single real track beats three placeholder cards every time. The gallery should be hidden from the nav until real photos exist. A portfolio with 50% placeholder content signals to every visitor that the artist is not ready.

### 3. Fix the real email address, broken social links, and missing meta tags (High)
`dan@example.com` is a bounce address. Every social link goes to `#`. These are not design issues — they are functional failures that make the site useless as a professional contact point. Alongside this: add `<meta name="description">`, Open Graph tags, and a favicon. These take 15 minutes and make every share of the URL look professional instead of blank.

---

*Audit by Nigel — strict from a real user's perspective. Score starts at 5.0 for "it loads and looks intentional." This site earns 5.8: real design taste, real structural thinking, but no content to back it up yet.*
