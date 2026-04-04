# Nigel Audit — Dan Neoclassical Guitarist Portfolio
**Date:** 2026-04-04
**Auditor:** Nigel (strict UX/design auditor)
**Benchmark:** Premium independent artist portfolio sites
**Scope:** index.html, style.css, main.js — v3 state

---

## Score History

| Version | Date | Score | Key Change |
|---|---|---|---|
| v1 | 2026-04-04 | 5.8 | Launch: bio only, placeholder music cards, no meta |
| v2 | 2026-04-04 | 6.2 | Real YouTube embed, Open Graph / Twitter Card meta, real YouTube social link |
| v3 | 2026-04-04 | 6.4 | Gallery section removed, iframe lazy-loading added, contact copy tightened, "More music coming soon" removed |

---

## Overall Score: 6.4 / 10

> v3 is a clean-up iteration, not a transformation. Removing the gallery was the right call — the page no longer leads a visitor into an empty room. The iframe now lazy-loads. The contact copy is tighter. But the three structural problems that define the ceiling have not moved: no photograph of Dan, no working contact path, and an Instagram link that goes to instagram.com's homepage. A real user who watches the YouTube video and wants to follow or book Dan hits a wall at every turn. Until there is a face, a real Instagram, and a way to reach the artist, this site cannot function as a professional portfolio.

---

## Category Scores

| Category | Score | Notes |
|---|---|---|
| Visual Design | 6.4 | Cleaner without the empty gallery; hero still has no visual anchor; "D" avatar still the biggest credibility gap |
| Mobile UX (375px) | 5.9 | Lazy-load iframe is correct; burger still has no visible X state; contact card has no actionable path on mobile |
| Content Quality | 5.3 | Gallery gone is a net positive; bio still generic; Instagram goes to homepage; YouTube channel link is `youtube.com/@` with no handle |
| Typography | 6.5 | No change — Playfair + Inter pairing holds; 0.7rem section labels still below readable threshold on mobile |
| Performance | 6.8 | `loading="lazy"` on iframe is now correct; OG meta intact; still no structured data, no canonical, no OG URL tag |
| Accessibility | 5.8 | No new accessibility work; contrast, focus trap, skip link, burger focus state all still unresolved |
| Overall Feel | 6.0 | Page is shorter and more honest; one real video, one real YouTube link, two broken social paths, zero contact options |

---

## Visual Design — 6.4

**What works:**
- Removing the gallery eliminates the most glaring absence signal. The page is now shorter and every section that exists has at least something real in it.
- Gold-on-black palette remains genre-appropriate and well-executed. Playfair Display headings hold up.
- YouTube embed container styling (gold border, shadow, rounded corners) integrates cleanly with the design language.
- Staff-line animation in the hero is still the strongest purely visual differentiator from a template.
- Scroll reveal on section entries is smooth and unobtrusive.

**Issues:**
- **The "D" avatar remains the single largest credibility failure.** This was Priority 1 in v1, Priority 1 in v2, and is still Priority 1 in v3. An artist portfolio where the artist's photograph has never appeared is not a portfolio — it is scaffolding. No amount of design work around it compensates. A visitor's first question upon seeing a "D" avatar is whether this site belongs to a real person.
- **Hero has no visual identity.** 100vh of near-black with centered text and barely-visible animated lines communicates atmosphere but not the artist. A performance photo behind the hero text — even low-opacity, even blurred — would transform the first impression from "elegant template" to "this is a real person." At 375px on mobile the hero is especially stark.
- **"Subscribe on YouTube" CTA below the embed links to `https://www.youtube.com/@`** — no channel handle appended. This link goes to YouTube's homepage. A visitor who clicks it after watching the video is taken to YouTube's generic homepage, not Dan's channel. This is a broken link that actively damages credibility at the one moment the visitor is engaged.

---

## Mobile UX (375px) — 5.9

**What works:**
- YouTube embed scales correctly via `aspect-ratio: 16/9` — no horizontal overflow, correct proportions at 375px.
- Bio card stacks and centers cleanly. Tags wrap without overflow.
- Burger closes on outside tap and on nav link tap.
- Page is now 4 sections (hero, bio, music, contact) — a shorter scroll on mobile is a real improvement.

**Issues:**
- **Burger still has no X state.** When the mobile nav is open, the three-line icon does not transform into a close indicator. Users who open the menu and look for a way to dismiss it see the same three lines. This has been flagged in every audit and remains unresolved. This is a one-function CSS fix.
- **Contact section is the final destination for a mobile visitor and it goes nowhere.** "Reach out via Instagram or YouTube" — Instagram goes to instagram.com's homepage, YouTube goes to a specific video (not a channel). A mobile user who wants to follow or contact Dan after watching the video has no working path. The contact section is the bottom of the funnel; it should not be where the funnel stops.
- **No focus trap in mobile nav.** Keyboard and assistive technology users can tab past the open menu into background content. This is both a UX and accessibility failure.
- **`font-size: 0.7rem` section labels at 375px** (11.2px effective) — still below WCAG's practical readability threshold. "DISCOGRAPHY" at 11.2px with 0.3em letter-spacing is barely legible without perfect eyesight.

---

## Content Quality — 5.3

**What works:**
- Gallery removal is an unconditional improvement. An empty section advertises absence; no section advertises nothing.
- The YouTube embed is real content. A visitor can watch Dan play. This remains the site's only genuinely credible moment.
- OG image correctly pulls the YouTube thumbnail — shares well on social platforms.
- Bio tags are accurate and specific to the genre.
- Contact copy ("Dan is currently booking select engagements") is more concrete than the previous version.

**Issues:**
- **Instagram link goes to `https://www.instagram.com` — the homepage.** This is only marginally better than linking to `#`. A visitor who taps the Instagram icon is taken to Instagram's login/explore page, not Dan's profile. Either link to a real profile or remove the Instagram icon entirely. A broken social link is worse than no social link.
- **YouTube channel link is `https://www.youtube.com/@` with no channel handle.** The "Subscribe on YouTube" CTA below the embed and the YouTube social icon in the contact section both link to real content (the specific video), but the channel-level CTA under the embed goes nowhere. This needs a real channel URL or should be removed.
- **Bio text remains generic.** Three versions in, the bio still reads as placeholder-quality writing for any neoclassical guitarist. "Relentless pursuit of beauty," "fluency and intention," "architectural — layered, deliberate" — none of these phrases distinguish Dan from any of the hundred other guitarists who could be described in identical terms. No specific pieces, influences by name, tunings, technique details, or personal voice. The bio is the only place on the site where Dan can speak — it currently says nothing specific about who he is.
- **No contact mechanism exists.** The contact section heading and body tell the visitor that Dan is booking, but there is no email, no form, no booking link, no management contact. A booking agent who watches the video and wants to hire Dan cannot proceed. The contact section is the highest-value real estate on a portfolio site; it currently functions as a dead end.
- **"Based on the East Coast" remains uselessly vague.** Booking agents plan logistics. A city or metro region is the minimum useful information.

---

## Typography — 6.5

No change from v2. Playfair Display + Inter remains the correct pairing for this genre. Outstanding issues:

- **`font-size: 0.7rem` (11.2px) for `.section__label`** is below the practical readability threshold for most users, particularly on mobile. Raising to `0.75rem` and reducing `letter-spacing` to `0.2em` would improve legibility without compromising the aesthetic.
- **`letter-spacing: 0.3em` at 11.2px** creates excessive inter-character spacing that can actually decrease readability at this size.
- **Hero redundancy:** "Guitarist & Composer" (preheading) and "Neoclassical Guitarist" (subtitle) are back-to-back restatements of the same claim with slightly different wording. One of these lines should go.
- **No vertical rhythm system.** Spacing values throughout the CSS are ad hoc (`52px`, `44px`, `36px`, `28px`, `20px` — all arbitrary). This is not a visible problem to most users but will create inconsistency at edge cases.

---

## Performance — 6.8

**Improvements in v3:**
- `loading="lazy"` is now present on the YouTube iframe. This defers iframe load until the user scrolls to the music section — the single most impactful performance improvement for a mobile visitor on a slow connection. Correctly implemented.
- OG and Twitter Card meta remain intact and correct.

**Issues that remain:**
- **No structured data / JSON-LD.** Schema.org `MusicGroup` or `Person` markup would qualify this page for rich results in Google Search. For a musician building discoverability, this is high-value and low-effort. Still absent after three versions.
- **`<meta property="og:url">` is missing.** The Open Graph implementation is otherwise complete but omits the URL property. Most OG validators flag this as an incomplete implementation.
- **No `<link rel="canonical">` tag.** GitHub Pages serves content at multiple URL variants (with/without trailing slash, http/https redirects). A canonical tag prevents split ranking signals.
- **Seven Google Fonts variant requests** (Playfair Display: 400, 400i, 600, 700; Inter: 300, 400, 500). Playfair 600 appears to be used only for `.section__heading` — dropping it in favor of 700 would reduce one font request.

---

## Accessibility — 5.8

No accessibility improvements were made in v3. All v2 issues remain:

- **`var(--text-muted)` (#888 on #0a0a0a) is ~4.0:1 contrast** — below WCAG AA (4.5:1) for normal text. Affects nav links, contact copy, footer. Raising to `#999` or `#9a9a9a` would clear the threshold without breaking the visual design.
- **No skip-to-content link.** Keyboard users must tab through the entire nav on every page load before reaching main content.
- **No focus trap in mobile nav.** Keyboard/assistive users can tab through the open mobile menu into background content — both a functional and accessibility failure.
- **`.nav__burger` has no `:focus-visible` style.** Keyboard users have no visible focus indicator on the menu toggle button.
- **Bio avatar `<div>` has `aria-label` but no `role="img"`.** Without an explicit role, screen reader behavior for this element is inconsistent across browsers.
- **Bio tags in `<span>` elements** lack semantic list structure. `<ul>/<li>` with appropriate `aria-label` on the list would be more correct.
- **`<section>` elements have no `aria-labelledby`.** Each section has a heading, but sections are not explicitly labelled for landmark navigation.

---

## Overall Feel — 6.0

A real user landing on v3:

1. Dark hero, animated staff lines — atmospheric. Reads as intentional. No face, no photo. Already a question mark.
2. Scrolls to bio. Elegant card. Gold "D" avatar. Long bio that says very little specific. Interest maintained by design quality, not by content.
3. Scrolls to music. Watches the video. **This is still the site's one genuine moment.** The music is good. The design around the video is polished.
4. Taps "Subscribe on YouTube" under the video. Lands on YouTube's homepage. Confused. Already losing them.
5. Scrolls to contact. Two social icons. Taps Instagram. Lands on instagram.com. Now actively frustrated.
6. Taps YouTube icon. Watches the video again, or closes the tab.

The net impression: "This person can play guitar. I can't find them anywhere." That is a better outcome than v1 or v2 ("This person can play guitar. The site looks unfinished.") — but only marginally.

The gallery removal shortened the page and removed a negative. The lazy-load iframe is the right implementation. The design quality is genuine and above the Squarespace template baseline. But the site still cannot close a booking, cannot get a follow, and cannot put a face to the name. A site that earns credibility with one video and then sends every interested visitor to a dead link has a funnel problem, not a design problem.

Benchmark: a musician friend's Linktree page with a YouTube link and an Instagram handle would convert more interested visitors into followers. That is the standard v4 must beat.

---

## Top 3 Priorities for v4

### 1. Fix both broken social links — or remove them (Critical)

The Instagram icon links to `https://www.instagram.com` (homepage). The "Subscribe on YouTube" CTA under the embed links to `https://www.youtube.com/@` (incomplete URL). These are not placeholder states — they are live broken links on a published site. A visitor who taps either one after watching the video is sent to an irrelevant page. This actively destroys the credibility earned by the YouTube embed. In v4: update Instagram to a real profile URL or remove the icon; update the YouTube channel CTA to a real channel URL or remove the button. One working link is worth more than three broken ones.

### 2. Replace the "D" avatar with any real photograph (Critical)

This is the fourth audit in which this is a top priority. The "D" avatar is still the first thing a visitor sees in the bio section. An artist portfolio without a photograph of the artist communicates, at a subconscious level, that the artist does not exist or does not want to be seen. A phone photo in decent lighting, a live performance still, or even a close-up of hands on strings would raise the Visual Design score and the Overall Feel score simultaneously. Extend this to the hero: even a low-opacity background image in the hero section would transform the site's first impression from "elegant dark template" to "this is a real musician."

### 3. Add a real contact mechanism (High)

The contact section says Dan is booking but provides no way to actually book him. Add at minimum a `mailto:` link — even a formatted booking inquiry email — so that a visitor who wants to hire Dan can take a concrete action. If a public email is not desirable, a simple contact form (Formspree, Netlify Forms) requires no backend. The contact section is the bottom of every visitor's funnel; right now it is a closed door. A single working email link would immediately make this site functional as a professional portfolio rather than a design demonstration.

---

*Audit by Nigel — strict from a real user's perspective. Score starts at 5.0 for "it loads and looks intentional." v3 earns 6.4: the gallery removal and iframe lazy-load are genuine improvements; the site is shorter, cleaner, and loads faster on mobile. But the broken social links mean the only moment of real engagement — watching the video — leads immediately to a dead end. Fix the links, add a face, add a contact path. Until then, the ceiling is 6.5.*
