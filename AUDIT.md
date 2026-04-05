# Nigel Audit — Dan Neoclassical Guitarist Portfolio
**Date:** 2026-04-04
**Auditor:** Nigel (strict scoring, real-user perspective)
**Benchmark:** Real artist portfolio sites a booking agent would browse
**Scope:** index.html, style.css, main.js — current state

---

## Score History

| Version | Date | Score | Key Change |
|---|---|---|---|
| v1 | 2026-04-04 | 5.8 | Launch: bio only, placeholder music cards, no meta |
| v2 | 2026-04-04 | 6.2 | Real YouTube embed, Open Graph / Twitter Card meta, real YouTube social link |
| v3 | 2026-04-04 | 6.4 | Gallery section removed, iframe lazy-loading added, contact copy tightened |
| v4 | 2026-04-04 | 6.3 | Dan's real photo added in bio avatar — strong bio credibility gain; contact still dead end |
| v5 | 2026-04-04 | 6.5 | "Coming soon" copy removed; contact copy rewritten; bio backstory added (jam bands → bluegrass → prog) |
| v6 | 2026-04-04 | 6.3 | Re-scored strictly. Hero photo opacity 0.40 confirmed (up from prior 0.18); staff lines still near-invisible; contact still no real path; one video still the ceiling. Design is solid — content and contact are the drag. |

---

## Overall Score: 6.3 / 10

> 5.0 = average/basic | 6.0 = generic template | 7.0 = genuinely better than most (HIGH bar) | 8.0 = user would choose this over other artist portfolios

**Scoring rationale:** This site is well-built and not generic in feel. The dark/gold palette is genre-appropriate, the bio copy has genuine voice, the real photo grounds it, and the JS is clean and professional. It clears the 6.0 "generic template" bar.

It does not reach 7.0 because 7.0 means a real booking agent or music fan would think "this person is serious and I can act on my interest." That requires: (1) a real contact path, and (2) more than one video. Neither exists. The green availability dot with no booking mechanism is the most trust-damaging element on the page. A site that signals "I'm ready to book" and then provides no mechanism loses credibility it spent the rest of the page earning.

Score held at 6.3 rather than 6.5 because this re-audit looks strictly. The hero bg opacity is now 0.40 (the actual CSS confirms this), which is better than prior audits noted — that's a genuine improvement. But the contact dead-end and the single-video music section remain unresolved structural problems.

---

## Category Scores

| Category | Score | Notes |
|---|---|---|
| Visual Design | 6.5 | Cohesive palette and spacing. Hero bg at 0.40 opacity is actually working. Staff animation nearly invisible — concept wasted. |
| Mobile UX (375px) | 6.0 | No breakage. Bio card stacks correctly. Avatar scales down properly. CTA buttons go full-width. Hero name uses clamp() correctly. Contact card body copy centered on narrow column — hard to scan. |
| Content Quality | 5.5 | Bio is strong. Everything else is thin: one video, no track list, no social links, no booking path. |
| Typography | 6.5 | Playfair + Inter pairing correct and genre-appropriate. Clamp sizing smart. Section label at 0.75rem letter-spaced is marginal on mobile. |
| Animations / Polish | 6.0 | Spinning avatar ring is the standout detail. Scroll reveal is tasteful and coded well (respects prefers-reduced-motion). Staff lines pulse at opacity 0.04–0.10 — functionally invisible. Float notes reach 0.6 opacity but at 1.8rem nobody sees them at the edges. |
| Contact / Booking UX | 4.5 | "Available for booking" green dot with zero booking mechanism is the worst UX decision on the site. Actively misleading. YouTube redirect is five steps away from completing an inquiry. |
| Overall Artist Feel | 6.0 | Bio has real personality and a specific origin story. One video and no social presence limits the perceived depth of the artist. A real fan who wants more has nowhere to go. |

---

## Detailed Findings

### 1. CRITICAL — Contact Dead-End With a "Ready to Book" Signal

The contact section combines a pulsing green "Available for booking" indicator with a CTA that takes the user to watch a YouTube video. There is no email, no DM link, no form, no social link. The contact icon (an envelope SVG) reinforces the expectation of a real contact method that does not exist.

The pulsing dot is the most damaging single element on the page. It promises a working booking pipeline and delivers nothing. A booking agent who sees this leaves with less confidence in Dan than if the section simply said "building presence, more coming."

This is the single change that would move the score the most. Not a placeholder email — a real one, when available. Until then, the green dot and availability language should be removed or reworded to something honest and neutral.

---

### 2. HIGH — One Video Cannot Carry the Bio's Promise

The bio names four influences (Petrucci, Vai, Buckethead, Yngwie) and describes "compositional precision," "a full-speed neoclassical run," and "a held note that says more than the run did." These are four very different guitarists and three different playing modes. A genre-literate visitor will want to hear evidence of that range.

One YouTube embed cannot fulfill it. The music section has a "More on YouTube →" link — that's the minimum and it's good that it's there. But the link destination (the YouTube channel) needs to have content worth linking to. If the channel has more than one video, a second embed or a thumbnail row here would transform this from "one clip I posted" to "a body of work."

---

### 3. HIGH — Staff Lines and Float Notes Are Visually Inert

The animated music staff (five horizontal lines pulsing) and floating Unicode note characters are thematically smart — they ground the hero in the genre visually rather than relying purely on the photo and text. The concept works. The execution doesn't.

Staff lines animate between `opacity: 0.4` and `1.0` at a base color of `rgba(201,168,76,0.06)` to `rgba(201,168,76,0.10)`. At those values, on the dark background with the hero photo, they are not visible to a casual viewer. The floating notes reach `opacity: 0.6` but at `font-size: 1.8rem` and positioned at the extreme left and right edges of the viewport, nobody's eyes are there.

The staff concept deserves to actually be seen. Raising the staff line base opacity to 0.12–0.18 and concentrating the floating notes to a tighter horizontal band (say, 20%–80% of viewport width rather than 8%–88%) would make the musical motif register.

---

### 4. MEDIUM — Contact Body Copy Centered on Mobile

On 375px, `.contact__card` uses `align-items: center; text-align: center`. The contact message is 56 words centered in a column under 340px wide. Centered body copy at this width has poor scan-line readability. The heading and CTA can stay centered — the paragraph text should be left-aligned. This is a one-line CSS change: `text-align: left` on `.contact__message` inside the mobile breakpoint.

---

### 5. MEDIUM — No Social Links Anywhere on the Site

YouTube is linked in the music section and in the contact CTA. There are no other social or platform links — no Instagram, no SoundCloud, no Bandcamp, no Spotify, no Linktree — anywhere on the page, including the footer. A visitor who wants to follow Dan has two options: YouTube (linked twice) or nothing.

For a musician in 2026, the absence of any secondary platform link in the footer reads as "not actively building a presence" to a booker or label scout. Even one additional real link (wherever Dan actually posts) changes this significantly.

---

### 6. LOW — Footer Is Visually Abandoned

The footer is "Dan" / "Progressive Rock & Neoclassical Guitar" / copyright. The genre line is there now (good — it wasn't always) but no social links, no secondary nav, no visual weight. Given the craft of the bio section and the overall design quality, the footer feels like it was left unfinished. A row of 2–3 icon links to real social profiles here costs nothing and properly closes the page.

---

### 7. LOW — Hero Hover Zoom Is User-Invisible

`.hero:hover .hero__bg` triggers a 12-second `scale(1.05)` → `scale(1.0)` transition. The duration is so long that a user would have to hover the hero section motionless for 12 full seconds to see the effect complete. On mobile, hover doesn't apply. This code is doing essentially no work. It can stay (it's harmless) but it's not contributing to the experience.

---

## Top 3 Priorities to Reach 7.0

### Priority 1 — Fix the Contact Section
Remove the "Available for booking" green dot and availability language until a real contact mechanism exists — or replace it with something honest ("Reach out via YouTube DM or the channel About page"). The current state actively harms the site's credibility. When a real email or booking platform is ready, add it here and the entire contact infrastructure (card, heading, icon) is already built and waiting. Estimated impact: +0.4.

### Priority 2 — Add a Second Music Reference
A second YouTube embed, or a styled row of 2–3 thumbnail links to other recordings, changes the music section from "one clip" to "catalog." If no second recording exists yet, the "More on YouTube →" link already present is the minimum — but it should be styled more prominently than a small italic link. Estimated impact: +0.2.

### Priority 3 — Make the Staff Animation Visible
Raise `.staff-line` base color from `rgba(201,168,76,0.06–0.10)` to `rgba(201,168,76,0.14–0.18)`. Tighten float note positions from the viewport edges to the center zone. This is a pure CSS change that makes the genre-specific motif the site invested in actually register with a real visitor. Estimated impact: +0.1.

---

## What's Working Well (Do Not Break)

- **Hero background photo at opacity 0.40** — this is correct; the real photo is visible and grounds the hero
- **Bio origin story** — "jam bands, where the rule is listen first and play second / Bluegrass sharpened his right hand" — specific, credible, distinctive. Keep verbatim.
- **"Dan absorbed all of it and built something that sounds like none of it"** — the strongest line on the site. Preserve it.
- **Spinning conic-gradient avatar ring** — the best single detail on the page; rewards attention; looks custom
- **Real photo in bio with `grayscale(20%) contrast(1.05)` treatment** — correct processing; not over-filtered
- **Gold left-border on bio intro (converts to border-top on mobile)** — correct editorial formatting
- **Playfair Display + Inter pairing** — genre-appropriate and readable at all sizes
- **SVG ornamental section dividers** — tasteful craft detail
- **Mobile burger menu** — Escape key, overlay click, body scroll-lock, ARIA states — all correctly implemented
- **IntersectionObserver scroll reveal** — fires once, respects `prefers-reduced-motion`, clean
- **Active nav link tracking** — correctly tracks current section; most templates miss this
- **`loading="lazy"` on YouTube iframe** — correct and meaningful
- **OG / Twitter Card meta** — complete; `og:url` is present and correct in this version

---

## What Would Push This to 7.5+

1. Working booking contact (email or DM link to a real platform)
2. Second video or performance evidence
3. Social links in footer (only real accounts)
4. Staff animation visible at a glance
5. Contact body copy left-aligned on mobile
6. One specific composition title or technique in the bio (gives genre fans a hook)

---

*Audit by Nigel — v6, scored strictly from a real user and booking agent perspective. The design is above average and the bio has genuine voice. The site is held back entirely by what's missing: a contact path and more music. Both are content gaps, not design failures. Fix the green dot first — it's the most trust-damaging element on the page.*
