# Design: Hilf Shipping

Editorial, quiet-luxury maritime trading house. Derived from the shipped build (app/globals.css, components/).

## World
Paper-and-navy. Alternating `--paper` / `--paper-2` bands, hairline rules instead of boxes, film grain over photography, slow confident reveals. Navy replaces black everywhere; no pure black exists in the system.

## Colour
| Token | Value | Use |
|---|---|---|
| --paper | #F5F5F4 | main background |
| --paper-2 | #ECECEA | alternating band |
| --navy | #0A0766 | headings, primary buttons, logo navy |
| --navy-900 | #06043F | dark bands: hero, cargo film, contact, footer |
| --navy-700 | #1A1780 | hover / active, placeholder tiles |
| --steel | #606060 | kickers on light |
| --grey | #5C5C62 | body copy on light (AA on paper-2) |
| --on-dark / -60 / -40 | #F5F5F4 at 100 / 68 / 44% | text on navy-900; -40 is decorative only (fails AA for small text) |
| --hairline | navy 14% (on dark: paper 20%) | all dividers |

Section order: navy-900 hero → paper → paper-2 → paper → paper-2 → paper → navy-900 (cargo) → navy-900 (contact) → navy-900 footer. Each section carries `data-nav-theme` so the header recolours.

## Type
Schibsted Grotesk 400–700. `.display` = 500, line-height 0.98, tracking -0.04em.
Hero H1 `clamp(3rem, 6.5vw, 12.5rem)` (8vw on tablet) · H2 `clamp(1.9rem, 4vw, 4.5rem)` · H3 `clamp(1.5rem, 2.4vw, 2.25rem)` · kicker 12.5px uppercase 0.16em · body 16/26 (18/29 lead on lg, max 60ch) · numerals tabular.

## Layout
Container 1500px, 24px / 40px gutters. Section padding 7rem / 9rem (10rem on statement bands). 12-col grid with asymmetric splits; numbered rows `[80px_1fr_1.4fr_40px]` (desktop), `[56px_1fr]` (tablet). Radius 0 on images and sections; 10px max on buttons.

## Motion
One easing: `cubic-bezier(0.22, 1, 0.36, 1)`, 0.8–1.1s, nothing bounces. Primitives: `.reveal` fade-up, `.reveal-lines` line-mask headlines (SplitLines measures real wrapped lines), `.reveal-curtain` clip-path image reveal (observer watches the parent because clipped nodes report zero area), `.reveal-rule` drawing hairlines, boot curtain, Lenis smooth scroll (lerp 0.1). Pinned cargo film (Motion useScroll, 700vh) at ≥768px; card list on mobile, under reduced motion and without JS. Client marquee speeds up with scroll velocity. `prefers-reduced-motion` resolves everything to final state.

## Components
Header: floating bar, hides on scroll down, theme from section underneath, full-screen navy menu below 1024px. Buttons: paper-on-navy primary, outline secondary, arrow slides 4px. Teams: tabs ≥768px (sliding underline, roving tabindex), accordion below; all panels stay in the DOM. Contact fields: bottom-border only, floating labels. Map: grayscale + 8% navy multiply, cleared on hover. Footer: giant clipped "hilf" wordmark at 6% opacity.

## Rules
- Never introduce black, gradients on text, glass cards, rounded-card grids or emoji icons.
- Custom CSS lives in `@layer components` so Tailwind utilities can override it.
- All copy lives in lib/content.ts; do not hard-code strings in components.
- Missing assets render a navy placeholder tile with the filename; layout must never depend on an asset existing.
