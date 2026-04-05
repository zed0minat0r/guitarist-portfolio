# Nigel Audit — Dan Neoclassical Guitarist Portfolio
**Date:** 2026-04-04
**Auditor:** Nigel (strict UX/design auditor)
**Benchmark:** Premium independent artist portfolio sites
**Scope:** index.html, style.css, main.js — v5 state

---

## Score History

| Version | Date | Score | Key Change |
|---|---|---|---|
| v1 | 2026-04-04 | 5.8 | Launch: bio only, placeholder music cards, no meta |
| v2 | 2026-04-04 | 6.2 | Real YouTube embed, Open Graph / Twitter Card meta, real YouTube social link |
| v3 | 2026-04-04 | 6.4 | Gallery section removed, iframe lazy-loading added, contact copy tightened |
| v4 | 2026-04-04 | 6.3 | Dan's real photo added in bio avatar — strong bio credibility gain; contact still dead end |
| v5 | 2026-04-04 | 6.5 | "Coming soon" copy removed; contact copy rewritten to direct YouTube contact; bio backstory added (jam bands → bluegrass → prog); contact availability indicator retained |

---

## Overall Score: 6.5 / 10

> 5.0 = average/basic | 6.0 = generic template | 7.0 = genuinely better than most (HIGH bar) | 8.0 = user would choose this over other artist portfolios

**Note on the score:** v5 earns 6.5 — a genuine step up from v4. The bio has been materially improved: the jam band / bluegrass / progressive rock origin story is specific, credible, and gives Dan a distinct path that separates him from the typical "I grew up listening to Yngwie and practiced scales" neoclassical guitarist bio. The contact copy is now honest — it acknowledges no email is available and directs to YouTube. That's better than a fake mechanism. The apologetic "coming soon" language is gone.

The site still has a hard ceiling at 6.5 because: (1) there is no real way to contact or book Dan, (2) there is still only one piece of music evidence, and (3) a real music fan or booking agent who watches the one video and wants more is left with nowhere to go.

The design is working. The content pipeline is not.

---

## Category Scores

| Category | Score | Notes |
|---|---|---|
| Visual Design | 6.8 | Palette, type, and spacing all disciplined; hero remains anonymous |
| Mobile UX (375px) | 6.5 | Photo crops well; bio card mobile treatment is correct; centered long-form copy still hard to scan |
| Content Quality | 6.3 | Bio backstory is now genuinely good; rest of site still thin; one video |
| Typography | 7.0 | Playfair + Inter pairing is correct; sizing hierarchy clean; section labels at 0.7rem marginal on mobile |
| Animations / Polish | 6.5 | Staff lines + floating notes are tasteful; spinning avatar ring works well with real photo |
| Contact / Booking UX | 5.5 | YouTube redirect is honest but not functional as a booking path; pulsing green dot misleads |
| Overall Artist Feel | 6.5 | Bio now has real personality; one video is still the entire proof of craft |

---

## Detailed Findings

### 1. CRITICAL — Contact Section Cannot Close a Booking (Score ceiling)

The contact section says "Watch the performance above, then reach out via YouTube to connect." The primary CTA is "Watch on YouTube." There is a pulsing green availability dot labeled "Available for booking."

This is an honest admission that no email is ready — which is better than a fake form. But the user experience is broken. A booking agent who has just watched the video does not want to: leave the portfolio site → navigate to YouTube → find the video → write a comment or DM — and hope Dan checks it. That is a five-step process with no guaranteed delivery. Most agents will close the tab.

The pulsing green dot actively misleads. "Available for booking" sets an expectation that the section then cannot fulfill. If no booking mechanism exists, remove the availability indicator or change it to "Building presence — stay tuned."

**This is the single highest-impact fix available. An email address pushes this site to 7.0+.**

---

### 2. HIGH — One Video Is the Entire Music Catalog

The Music section has one embedded video. The bio promises "compositional precision," "a full-speed neoclassical run," "a held note that says more than the run did," and four distinct influences (Petrucci, Vai, Buckethead, Yngwie). These are four very different guitarists. A visitor who knows the genre will want evidence of range.

One video cannot carry that weight. The bio raises expectations that a single embed cannot meet.

**Minimum fix:** A "More on YouTube →" link below the embed costs nothing and stops the music section from feeling like the end of the catalog. If additional recordings exist, even 2–3 thumbnail cards linking to YouTube would transform this from "one video" to "a body of work."

---

### 3. HIGH — Hero Has No Visual Identity

Dan now has a real photo — it appears in the bio avatar section. The hero (full viewport, first impression) is still: dark background + animated staff lines + typography only. The background uses `dan.jpg` at `opacity: 0.18` and `grayscale(30%)`, which renders the photo so faint it reads as a texture rather than a person.

At the point where a real photo exists, there is no strong reason for the hero to remain visually anonymous. Raising the hero background image to 28–35% opacity — or placing a styled performance image as a hero element rather than a background — would immediately elevate the site's first impression from "tasteful dark template" to "real musician."

---

### 4. MEDIUM — Centered Long-Form Text on Mobile Is Hard to Scan

On mobile (375px), the contact card uses `align-items: center; text-align: center`. The contact body copy is 63 words of centered text in a narrow column. Centered long-form copy has lower readability than left-aligned — the ragged right edge at center is harder to track than a consistent left margin. The heading and CTA button being centered is fine; the paragraph body should be left-aligned even when the card is centered.

---

### 5. MEDIUM — Floating Musical Note Symbols Are Decorative Noise

Five Unicode note characters (♩♪♫) float upward through the hero at 1.8rem, staggered across an 8-second animation loop. Their horizontal positions place them across the middle of the hero — directly in the spatial field around the "Dan" name and subtitle. At the opacity levels used (~0.6 peak), they don't block readability. But they add visual noise without adding character. A single large treble clef as a watermark element behind the hero text would be more architecturally considered.

---

### 6. LOW — "Available for Booking" Indicator Without a Booking Path Is Misleading

The pulsing green dot and "Available for booking" label are strong micro-UX details — in the right context. That context is a site that can actually field a booking inquiry. Without a contact mechanism, the indicator raises a signal that the site cannot act on. Either add the mechanism, or temporarily change the label to something neutral like "Building presence — reach out via YouTube."

---

### 7. LOW — Section Labels at 0.7rem Are Marginal on Mobile

`.section__label` renders at `font-size: 0.7rem` (11.2px effective) with `letter-spacing: 0.3em`. On mobile screens this is near the floor of comfortable readability. WCAG practical guidance is 12px minimum for supplementary text. Raising to `0.75rem` resolves this with no visible design impact.

---

### 8. LOW — Open Graph Missing `og:url`

The OG meta block is otherwise complete (title, description, image, type). `og:url` is absent. This is a minor omission — add `<meta property="og:url" content="https://zed0minat0r.github.io/guitarist-portfolio/" />`.

---

### 9. LOW — Footer Has No Genre Anchor

The footer is "Dan" + copyright line. A one-line descriptor ("Progressive Rock · Neoclassical Guitar") below the name would reinforce the brand at scroll-end and give the footer purposeful content instead of a legal minimum.

---

## Top 3 Priorities to Reach 7.0

### Priority 1 — Add a Real Contact Mechanism
A working `mailto:` booking email is the single highest-value addition available. The green availability dot, the clean contact card, the confident "Available for Bookings" heading — all of this infrastructure is already built and waiting for a real action behind it. One email address unlocks the entire contact section and is estimated at +0.4 to overall score.

### Priority 2 — Add a Second Video or "More on YouTube" Link
The bio sets an expectation of range and depth. One video cannot fulfill it. Even a row of 2–3 thumbnail links to other YouTube recordings — or a styled "More Performances →" link below the embed — closes the gap between the bio's promise and the music section's delivery. Estimated at +0.2 to overall score.

### Priority 3 — Raise Hero Background Photo Opacity
Dan's real photo is now available. Use it more boldly in the hero. Raising `opacity: 0.18` to `0.28–0.35` on the hero background image — or removing the heavy `grayscale(30%)` filter — would transform the first impression from "anonymous dark design" to "real musician's site." This is a one-line CSS change. Estimated at +0.1–0.2 to overall score.

---

## What's Working Well (Do Not Break)

- **Bio backstory (v5 addition)** — "Dan started on guitar in the deep end — jam bands, where the rule is listen first and play second. Bluegrass sharpened his right hand." This is specific, credible, and distinctive. Keep it exactly.
- **"Dan absorbed all of it and built something that sounds like none of it"** — strongest line on the site. Preserve it.
- **Real photo in bio avatar with spinning gold ring** — this detail is what separates the bio section from anonymous template cards. The circular crop, the ring animation, the `grayscale(20%) contrast(1.05)` processing — all correct.
- **Playfair Display + Inter pairing** — genre-appropriate, well-weighted, readable at all sizes
- **Dark gold palette (#0a0a0a + #c9a84c + #f5f0e8)** — restrained, consistent, never over-applied
- **Gold left-border on bio intro quote** — correct use of editorial formatting; correctly converts to border-top on mobile
- **SVG section dividers** — subtle ornamental detail that adds craft
- **Mobile burger menu** — overlay, Escape-key close, body scroll-lock, ARIA states all correctly implemented
- **IntersectionObserver scroll reveal** — respects `prefers-reduced-motion`; unobserves after first fire
- **Active nav link tracking on scroll** — works correctly; most template sites miss this
- **`loading="lazy"` on iframe** — correct; meaningful on mobile connections
- **Open Graph / Twitter Card meta** — nearly complete; just add `og:url`
- **Animated staff lines concept** — thematic and restrained; the right idea for this genre

---

## What Would Push This to 7.5+

1. Working booking email or contact form
2. 2–3 performances with real titles and dates
3. Hero background photo at higher opacity (a real face in the first impression)
4. Bio already has the voice — now needs one specific composition title or technique detail
5. Real social links (only when actual accounts exist)
6. `og:url` meta tag added
7. Footer with genre descriptor

---

*Audit by Nigel — scored strictly from a real user's perspective. v5 earns 6.5: the bio origin story is the strongest content upgrade the site has seen, and the contact copy is now honest rather than broken. The ceiling is the contact section — a site that looks this professional but cannot field a booking inquiry is not yet a working portfolio tool. Fix that, add a second video reference, and this site earns 7.0.*
