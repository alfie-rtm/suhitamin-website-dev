# Suhit Amin — Design System

> Personal brand design system for Suhit Amin: Forbes 30 Under 30, exited founder of Saulderson Media, angel investor, TEDx speaker, operator advisor.

## Sources

- **Codebase:** `alfie-rtm/suhit-website` (GitHub) — Next.js 16 / Tailwind v4 / Framer Motion personal website
- **Logo:** `assets/logo.png` — "SUHIT AMIN" logotype in Saira Semi-Bold, all-caps, black on white
- **Fonts:** `fonts/Saira-VariableFont.ttf` + `fonts/Saira-Italic-VariableFont.ttf` — uploaded by client
- **Moodboard:** https://uk.pinterest.com/alfierichardsuk/suhit-amin-branding/
- **Live site (being replaced):** https://www.suhitamin.com/

---

## Brand Overview

Suhit Amin is a **high-status founder personal brand** in the vein of Steven Bartlett. The brand communicates exceptional credibility, directness, and quiet confidence. It is editorial, dark, and premium — not startup-flashy, not corporate-sterile. It occupies the space between a luxury editorial magazine and a high-stakes operator's notebook.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Direct, no-fluff.** Every sentence earns its place. Zero hedging.
- **First-person singular.** "I built and sold…" not "We…"
- **Operator-coded.** Uses terms like "leverage points", "exit-readiness", "cheque size", "multi-7-figure", "ARR". The audience are founders, operators, investors — not consumers.
- **Honest about adversity.** The cancer-to-exit story is central; vulnerability is not weakness, it's credibility.
- **Confident without bragging.** Accolades (Forbes, TEDx) are mentioned plainly as facts, not celebrated loudly.
- **No emoji** in brand copy. One symbol used decoratively: `✦` (star/cross) in marquee separators.
- **Casing:** Section eyebrows are ALL CAPS with wide letter-spacing (`tracking-[0.3em]`). Headlines are Title Case. Body is sentence case.
- **Punctuation as accent:** "Suhit**.**" — the full-stop after the name rendered in electric blue is a key brand motif.

### Example Copy Patterns
- Eyebrows: `WHAT I'M BUILDING` / `THE STORY` / `SPEAKING` / `NEWSLETTER`
- Headlines: `"Four bets, *one mission.*"` — mix of roman + italic, the italic always dimmed or blue
- Body: `"No fluff, no sponsors, no AI-generated filler."` — punchy clauses, concrete, specific

---

## VISUAL FOUNDATIONS

### Color
| Token | Hex | Usage |
|---|---|---|
| `--background` | `#000711` | Page background — deep midnight navy |
| `--foreground` | `#ffffff` | Primary text |
| `--accent` | `#0066ff` | Electric blue — buttons, highlights, hover states, dots |
| `--accent-soft` | `#5694ff` | Softer blue for subtle contexts |
| `--accent-pale` | `#eff5ff` | Near-white blue tint for light contexts |
| `--surface` | `#151a1e` | Elevated card surfaces |
| `--section-alt` | `#0a1018` | Alternate section background (Story, Newsletter, Marquee) |
| `--section-gradient` | `#0a1530` | Gradient/hero overlay, card hover state |

### Typography
- **Display font:** Playfair Display (Google Fonts) — used for all headings. Italic variant crucial. `tracking-tight`, `leading-[0.85]` at large sizes.
- **Body/Sans font:** Saira (variable font, uploaded) — used for nav, eyebrows, body, UI copy. Clean grotesque, slightly condensed at high weights.
- **Mono:** system mono — used sparingly for year labels, project numbers (`font-mono`).
- **Scale:** Hero `text-[12vw]`, section headings `text-5xl–text-7xl`, body `text-lg–text-xl`, eyebrows `text-sm uppercase tracking-[0.3em]`
- **Italic = emphasis + colour.** Italic spans inside headlines are always slightly dimmed (`text-white/60`) or accent blue, creating visual rhythm.

### Spacing & Layout
- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-32 px-6 md:px-12`
- Internal card padding: `p-10 md:p-14`
- Grid gaps: `gap-8` (cards), `gap-px` (bordered grid)

### Backgrounds & Textures
- **Grain overlay:** Fixed, SVG fractalNoise, `opacity-[0.05]`, `mix-blend-mode: overlay` — adds premium analog texture to the dark background
- **Blue glow blobs:** Absolute-positioned `rounded-full` divs with `bg-accent/15–20` + `blur-3xl` — used in Hero, Speaking, Story sections
- **No photography background usage** in current codebase (hero portrait TBD). B&W cutout portrait planned (Steven Bartlett-style).
- **Gradient direction:** Top-to-bottom `from-[#0a1530] via-[#000711] to-[#000711]`

### Animation
- **Entry:** `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}` — standard reveal for all sections
- **Hero:** Parallax scroll via `useScroll` + `useTransform` (y: 0→40%, opacity: 1→0)
- **Stagger:** `delay: i * 0.1` on child items
- **Marquee:** CSS `translateX(-50%)` loop, 40s linear infinite
- **Scroll cue:** Bouncing vertical line, `y: [0, 8, 0]` repeat
- **Easing:** Framer default spring + `easeOut` for nav entry
- **No aggressive bounces.** Motion is confident and calm, not playful.

### Cards & Surfaces
- **Project grid cards:** `bg-[#000711]`, hover → `bg-[#0a1530]`, no explicit border-radius — full bleed within `gap-px bg-white/10` grid (gap acts as border)
- **Testimonial cards:** `border border-white/10 rounded-2xl p-10 bg-gradient-to-br from-[#0a1530] to-[#000711]`
- **Stage tiles:** `border border-white/10 rounded-2xl bg-white/5 backdrop-blur`
- **Corner radius:** `rounded-full` for pills/buttons, `rounded-2xl` for cards, `rounded-full` for glow blobs
- **No box-shadow** — depth achieved via background color layers and blur-glow

### Borders & Dividers
- Borders: `border-white/10` (standard), `border-white/5` (subtle footer), `border-white/15` (hero tag pills)
- Dividers: `border-t border-white/10`
- No colored borders or accent-color borders (borders stay neutral)

### Buttons & Interactive
- **Primary:** `rounded-full bg-accent text-white` → hover `bg-white text-accent`
- **Secondary / Nav CTA:** `rounded-full bg-white text-black` → hover `bg-accent text-white` (inverse flip)
- **Ghost pill:** `border border-white/15 text-white/70 rounded-full` — tag-style, non-interactive
- **Link hover:** `text-white/70` → `text-white` transition, or `→` arrow shifts `translate-x-1`
- **Selection highlight:** `background: var(--accent); color: #0a0a0a`

### Hover & Press States
- Card hover: background shifts darker-blue (`#000711` → `#0a1530`), title turns accent blue
- Nav links: opacity transition white/70 → white
- CTAs: full color swap (accent ↔ white)
- No scale transforms on hover/press in current codebase

### Imagery
- **Planned:** B&W high-contrast portrait cutout (hero section)
- **Vibe:** Editorial, stark, monochrome photography. No warm tones, no lifestyle stock.
- **Current codebase:** No images yet — text-only with blue glow blobs

### Iconography
No icon system in current codebase. The `→` arrow glyph and `✦` star character serve as the only "icons" — all text-based. See ICONOGRAPHY section below.

---

## ICONOGRAPHY

The Suhit Amin brand uses **zero icon libraries**. All decorative elements are text/unicode:

| Element | Character | Usage |
|---|---|---|
| Arrow | `→` | CTAs, "Learn more" links, button suffixes |
| Star/separator | `✦` | Marquee item separator |
| Quote mark | `"` (via `&ldquo;`) | Testimonial display character in Playfair Display |
| Brand dot | `.` in accent color | After "Suhit" in logo and nav — key brand motif |

No SVG icons, no icon font (Heroicons / Lucide / etc), no emoji in UI. If icons are needed in future, recommend **Lucide** (stroke, 1.5px, minimal) as the closest fit to the brand aesthetic.

**Assets in `assets/`:**
- `assets/logo.png` — Full logotype: "SUHIT AMIN" in Saira Semi-Bold, all-caps, black on white (1000×200px approx). Use on dark backgrounds with `mix-blend-mode: screen` or `filter: invert(1)`.

---

## FILE INDEX

```
/
├── README.md                      ← This file. Brand + design system overview.
├── SKILL.md                       ← Agent skill entrypoint
├── colors_and_type.css            ← CSS custom properties: colors, type, spacing
├── assets/
│   └── logo.png                   ← "SUHIT AMIN" logotype
├── fonts/
│   ├── Saira-VariableFont.ttf     ← Saira upright (wdth + wght axes)
│   └── Saira-Italic-VariableFont.ttf ← Saira italic
├── preview/                       ← Design System tab cards
│   ├── colors-base.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing-tokens.html
│   ├── shadows-surfaces.html
│   ├── buttons.html
│   ├── cards.html
│   ├── nav.html
│   ├── marquee.html
│   ├── brand-logo.html
│   └── brand-moodboard.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html             ← Full interactive website prototype
        ├── tokens.js              ← Shared design tokens
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Projects.jsx
        ├── Story.jsx
        ├── Testimonials.jsx
        ├── Speaking.jsx
        ├── Newsletter.jsx
        └── Footer.jsx
```

---

## UI Kits

### Website (`ui_kits/website/`)
High-fidelity recreation of the personal brand website. Single-page layout with scroll-linked animations (simulated in static kit). Sections: Nav → Hero → Marquee → Projects → Story → Testimonials → Speaking → Newsletter → Footer.

**Design width:** 1440px desktop, responsive to mobile.
