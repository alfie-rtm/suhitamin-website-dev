# Handoff: Suhit Amin Personal Brand Website

## Overview
Full personal brand website for Suhit Amin — Forbes 30 Under 30, exited founder of Saulderson Media, angel investor, TEDx speaker. The site is a single-page scrolling experience with immersive scroll animations, a dark-to-light mode transition triggered by a hero scroll-zoom, and macOS folder-style navigation embedded in the hero.

Inspired by: stevenbartlett.com, waabi.ai, goatagency.com, damngoodbrands.com

---

## About the Design Files
The files bundled in this package are **design references created in HTML/JSX** — high-fidelity interactive prototypes showing intended look, feel, and behaviour. They are **not production code to copy directly**.

The task is to **recreate these designs in the existing codebase** (`alfie-rtm/suhit-website`) which uses:
- Next.js 16.2 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion 12
- TypeScript

Translate all inline styles and JSX logic into Tailwind utility classes, Framer Motion animations, and TypeScript components matching the existing file structure.

---

## Fidelity
**High-fidelity.** These are pixel-accurate prototypes with final colours, typography, spacing, interactions, and animation timings. Recreate the UI as close to pixel-perfect as possible using the codebase's existing libraries.

---

## Design Tokens

### Colours
| Token | Hex | Usage |
|---|---|---|
| `--background` | `#000711` | Page background — deep midnight navy |
| `--background-alt` | `#0a1018` | Alternate dark sections (Story, Newsletter, Marquee) |
| `--background-gradient` | `#0a1530` | Hero overlay, card hover, Speaking section |
| `--foreground` | `#ffffff` | Primary text |
| `--foreground-2` | `rgba(255,255,255,0.80)` | Secondary text |
| `--foreground-3` | `rgba(255,255,255,0.60)` | Tertiary / italic emphasis |
| `--foreground-4` | `rgba(255,255,255,0.40)` | Muted |
| `--accent` | `#0066ff` | Electric blue — eyebrows, dots, CTAs, hover |
| `--accent-soft` | `#5694ff` | Softer blue |
| `--surface-light` | `#f2f4f8` | Light mode surface — cool blue-tinted white |
| `--surface-light-alt` | `#eaedf3` | Light mode alternate section |
| `--surface-light-deep` | `#e4e8f0` | Light mode marquee / darker alt |
| `--border` | `rgba(255,255,255,0.10)` | Standard border (dark mode) |
| `--border-light` | `rgba(8,16,30,0.10)` | Standard border (light mode) |

### Typography
- **Primary font:** `Saira` (variable font, wght 100–900) — ALL headings, body, nav, eyebrows, UI copy. Variable font files included: `fonts/Saira-VariableFont.ttf` + `fonts/Saira-Italic-VariableFont.ttf`
- **Monospace:** system mono — year labels, project numbers only
- **No Playfair Display** — Saira only throughout

| Style | Size | Weight | Transform | Tracking | Usage |
|---|---|---|---|---|---|
| Hero | `clamp(5rem,9.5vw,10.5rem)` | 800 | uppercase | -0.04em | Hero name |
| Display h2 | `clamp(2.5rem,5vw,4.5rem)` | 700 | none | -0.03em | Section headings |
| h3 | `clamp(1.75rem,2.5vw,2.25rem)` | 700 | none | -0.02em | Card headings |
| Eyebrow | `11px` | 600 | uppercase | 0.3em | Section labels — always `#0066ff` |
| Body XL | `17–18px` | 400 | none | 0 | Hero/section body |
| Body | `14–15px` | 400 | none | 0 | Card body |
| Mono | `12px` | 400 | none | 0.05em | Year labels, project numbers |
| Caption | `10–11px` | 400 | none | 0 | Meta, footnotes |

**Italic emphasis:** use `font-style: italic; font-weight: 300` on inline `<em>` inside headings — always dimmed (`rgba(255,255,255,0.45)` dark / `rgba(8,16,30,0.40)` light)

### Spacing
- Section vertical padding: `py-32` (128px)
- Section horizontal padding: `px-6 md:px-12` (24px / 48px)
- Max content width: `max-w-7xl` (1280px)
- Card padding: `p-10 md:p-14` (40px / 56px)

### Border Radius
- **Minimum: 2px** — sharp, angular feel throughout
- No pill/rounded-full shapes on any element
- Buttons: `border-radius: 2px`
- Cards: `border-radius: 2px`
- Inputs: `border-radius: 2px`

### Buttons
- **Primary CTA:** `background: #0066ff; color: #fff; border-radius: 2px` — on hover, sweeps `#f2f4f8` from left to right (via `::before` pseudo-element), text colour transitions to `#08101e`
- **No outline/ghost buttons** — solid fill only

---

## Screens / Views

### 1. Hero Section (`app/components/Hero.tsx`)

**Purpose:** Full-screen opening with immersive scroll-zoom and macOS folder navigation. The hero drives the entire page's dark↔light mode transition.

**Layout:** `min-height: 420vh` with a sticky `height: 100vh` inner panel. Content centred horizontally and vertically. Scroll triggers a 3-phase animation.

**Content:**
- Eyebrow: `"Forbes 30 Under 30 — Exited Founder"` — `#0066ff`, 11px, uppercase, tracking-[0.3em]
- Heading: `"SUHIT AMIN."` — all white (`#ffffff`), no accent colour on any letter. Font: Saira 800, `clamp(5rem,9.5vw,10.5rem)`, uppercase, tracking-tight
- Subtitle: `"Built and sold a multi-7-figure agency. Now I write, invest, and help operators build category-defining companies."` — `rgba(255,255,255,0.65)`, 16px
- Tag pills: Founder / Investor / Speaker / Operator — `border: 1px solid rgba(255,255,255,0.15)`, 2px radius

**Scroll animation (3 phases, use Framer Motion `useScroll` + `useTransform`):**

Phase 1 (scroll 0→45% of section):
- Entire content block scales from `1` → `9` (`transform: scale()`, `transform-origin: center center`)
- Eyebrow, subtitle, tags fade out (`opacity: 1 → 0`)
- Blobs fade out
- Folder icons fade out

Phase 2 (scroll 45→75%):
- The letter "T" in "SUHIT" continues to scale independently (`scale(1)` → `scale(8)`, `transform-origin: center bottom`)
- All other letters fade out (`opacity: 1 → 0`)
- "T" remains white, fills viewport

Phase 3 (scroll 75→90%):
- Dark overlay fades in (`opacity: 0 → 1`, background `#000711`)
- At 88%+ scroll progress: trigger `onLightMode(true)` — all subsequent sections switch to light mode
- At <88%: `onLightMode(false)` — dark mode

**Background elements:**
- 3 animated glow blobs (absolute positioned, CSS keyframe animation):
  - Left: 800×800px, `rgba(0,102,255,0.22)`, `top:50%, left:-120px`, 9s float
  - Right: 700×700px, `rgba(0,102,255,0.16)`, `top:50%, right:-100px`, 11s float
  - Top-centre: 500×500px, `rgba(86,148,255,0.12)`, `top:8%, left:50%`, 7s float
  - All: `border-radius: 50%`, `filter: blur(40px)` or Tailwind `blur-3xl`
  - Float keyframe: subtle `translateY` ±8% + `scale` ±10%, `ease-in-out infinite`
- Gradient vignette overlay: `linear-gradient(to bottom, rgba(0,7,17,0.55) 0%, transparent 35%, rgba(0,7,17,0.7) 100%)`
- Grain texture: fixed, SVG fractalNoise, `opacity: 0.035`, `mix-blend-mode: overlay`

**Video background (TODO — slot exists):**
- `<video autoPlay muted loop playsInline>` absolutely positioned, `object-fit: cover`, `opacity: 0.25`, z-index below blobs
- Replace `src` with Suhit's atmospheric footage

**macOS Folder Navigation:**
4 folders positioned absolutely around the hero text. Each is a clickable anchor linking to a section. They fade out during the scroll-zoom.

Folder component anatomy:
```
<a href="#section-id">
  <div class="folder-tab" />    ← small rounded tab above body
  <div class="folder-body">     ← frosted glass rectangle
    <div class="folder-icon" /> ← blue gradient accent block + lines
  </div>
  <span class="folder-label" />
</a>
```

Folder styles:
- Tab: `width:34px, height:12px, background:rgba(255,255,255,0.10), border:1px solid rgba(255,255,255,0.20), border-radius:4px 4px 0 0`
- Body: `width:86px, height:70px, background:rgba(255,255,255,0.09), border:1px solid rgba(255,255,255,0.22), border-radius:0 4px 4px 4px, backdrop-filter:blur(16px), box-shadow:0 4px 16px rgba(0,0,0,0.3)`
- Body hover: `background:rgba(255,255,255,0.16), box-shadow:0 8px 32px rgba(0,102,255,0.25)`
- Inner icon: blue gradient block (`#0066ff → #5694ff`) + 2 white lines
- Label: `font-size:10px, uppercase, tracking:0.16em, color:rgba(255,255,255,0.65)`, text-shadow for legibility
- Hover: `translateY(-5px) scale(1.08)`, label brightens to `#fff`

Folder positions (relative to centre of hero text):
| Label | X offset | Y offset |
|---|---|---|
| Projects | -52% | -185% |
| Investing | +38% | -195% |
| Content | -55% | +118% |
| Speaking | +40% | +108% |

---

### 2. Marquee Strip (`app/components/Marquee.tsx`)
Dark/light aware. Infinite horizontal scroll, 28s linear.

Items: `Forbes 30 Under 30 ✦ TEDx Speaker ✦ Scottish Young Edge Award ✦ Saulderson Media — Acquired ✦ The Diary of an Entrepreneur ✦ Angel Investor`

- Font: Saira 700, 18px, uppercase, tracking 0.2em
- Dark: `rgba(255,255,255,0.65)`, bg `#0a1018`
- Light: `rgba(8,16,30,0.55)`, bg `#e4e8f0`
- Hover: text brightens + text-shadow glow
- Separator `✦`: `#0066ff`, 22px, glow text-shadow: `0 0 12px rgba(0,102,255,0.7), 0 0 28px rgba(0,102,255,0.4)`
- Borders: top + bottom `1px solid` (dark: `rgba(255,255,255,0.08)`, light: `rgba(8,16,30,0.10)`)

---

### 3. Projects (`app/components/Projects.tsx`)
Dark/light aware. 2-column grid.

- Section eyebrow: `"What I'm building"`
- Heading: `"Four bets,"` + `<em>one mission.</em>` (italic, weight 300, dimmed)
- Grid: `display:grid, grid-template-columns:1fr 1fr, gap:1px, background: grid-border-colour` — the `gap+background` trick creates hairline borders between cards
- 4 cards: Saulderson Media / Angel Portfolio / YouTube / Consulting
- Card hover: background shifts from page-bg to `--background-gradient` (#0a1530 dark / #eaedf3 light), title transitions to `#0066ff`
- "Learn more →" arrow shifts `translateX(4px)` on hover
- Card padding: 56px

---

### 4. Videos / Content (`app/components/Videos.tsx`) ← NEW SECTION
Dark/light aware. YouTube content showcase.

- Section eyebrow: `"The Content"`
- Heading: `"No fluff."` + `<em>No sponsors.</em>`
- `"View Channel →"` link: `#0066ff`, underline, top-right of section header
- `"Watch Now"` bar: full-width dark bar (`bg:#08101e` dark, `bg:#fff` light), SVG play triangle, hover opacity 88%
- 4-column video grid: `16/9` aspect-ratio thumbnails, gradient placeholder bg, play icon appears on hover, duration badge bottom-left, number badge top-right
- Social channel links below grid: YouTube / LinkedIn / X / Newsletter in `#0066ff`

---

### 5. Dark Interlude ← NEW SECTION
A dramatic all-dark beat between light sections. Forces dark background regardless of lightMode state.

- Background: always `#000711`
- Centre glow blob: 600×600px, `rgba(0,102,255,0.18)`, `blur(40px)`
- Eyebrow: `"The Mission"`
- Heading: `"ZERO TO EXIT."` — Saira 800, `clamp(2.5rem,5vw,4.5rem)`, uppercase, white
- Sub: `"Then do it again."` — italic, weight 300, `rgba(255,255,255,0.35)`, smaller
- Vertical line: 1px wide, 64px tall, `linear-gradient(to bottom, #0066ff, transparent)`, centred below text
- Entry animation: scroll-triggered `opacity + translateY` reveal

---

### 6. Story (`app/components/Story.tsx`)
Dark/light aware. Alternating timeline layout.

- Eyebrow: `"The Story"`
- Heading: `"From a hospital ward"` + `<em>to an exit.</em>`
- Vertical centre line: 1px, `linear-gradient(to bottom, transparent, border-colour, transparent)`
- 6 milestones: 2014 / 2017 / 2019 / 2020 / 2023 / 2025
- Alternating left/right layout — even items left-aligned, odd items right-aligned
- Timeline dot: 12×12px circle, `#0066ff`, ring: `box-shadow: 0 0 0 4px [section-bg]`
- Year labels: monospace, 12px, `#0066ff`

---

### 7. Testimonials (`app/components/Testimonials.tsx`)
Dark/light aware. 2-column grid.

- Opening quotation mark: Saira 800, 64px, `#0066ff`
- Card border: 2px radius
- Dark card bg: `linear-gradient(135deg, #0a1530, #000711)`
- Light card bg: `linear-gradient(135deg, #eaecf5, #f2f4f8)`

---

### 8. Speaking (`app/components/Speaking.tsx`)
Dark/light aware. 2-column: text left, 2×2 tile grid right.

- CTA button: solid `#0066ff` → hover `#f2f4f8` (left-to-right sweep, text to `#08101e`)
- Stage tiles: 1:1 aspect ratio, frosted glass, `backdrop-filter:blur(8px)`, 2px radius
- Currently text placeholders: TEDx / Forbes / Web Summit / Slush — replace with real SVG logos

---

### 9. Newsletter (`app/components/Newsletter.tsx`)
Dark/light aware. Single centred column.

- Eyebrow: `"Newsletter"`
- Heading: `"The unfiltered"` + `<em>playbook.</em>`
- Email input: `border-radius:2px`, focus border `#0066ff`
- Subscribe button: same left-to-right blue→light sweep as primary CTA

---

### 10. Footer (`app/components/Footer.tsx`)
Dark/light aware. 3-column grid.

- Logo: `assets/logo.png` — `filter:invert(1)` dark mode, `filter:invert(0)` light mode
- 3 email addresses: hello@ / speaking@ / invest@suhitamin.com
- Hover on all links: `color: #0066ff`

---

## Interactions & Behaviour

### Scroll-triggered dark↔light mode
- State: single `lightMode: boolean` at page level, passed as prop to all sections
- Triggered by hero scroll progress > 88%
- When `lightMode = true`: all sections switch colour tokens simultaneously via prop
- Body element: `class="light"` toggled — drives global background + text colour via CSS

### Navigation
- **No traditional nav bar** — macOS folder icons in the hero ARE the navigation
- Folders fade out as scroll-zoom begins
- In-page anchor links (`href="#section-id"`)
- Smooth scroll: `html { scroll-behavior: smooth }`

### Card hover effects
- Cursor-tracking border glow: on `mousemove`, calculate cursor position as % of card dimensions, apply `radial-gradient` as card border background
- Wrapper: `padding:1px`, inner card sits inside — the padding "shows" the gradient border
- On `mouseleave`: reset to flat `rgba(255,255,255,0.10)` border

### CTA button sweep animation
```css
.cta {
  background: #0066ff; color: #fff;
  position: relative; overflow: hidden; isolation: isolate;
}
.cta::before {
  content: '';
  position: absolute; inset: 0; left: -101%;
  background: #f2f4f8;
  transition: left 0.38s cubic-bezier(0.4,0,0.2,1);
  z-index: -1;
}
.cta:hover { color: #08101e; }
.cta:hover::before { left: 0; }
```

### Nav link underline animation
```css
.nav-link::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 0; height: 1px; background: currentColor;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}
.nav-link:hover::after { width: 100%; }
```

---

## Assets

| File | Description | Usage |
|---|---|---|
| `assets/logo.png` | "SUHIT AMIN" logotype, Saira SemiBold, all-caps, black on white | Footer + any future nav. `filter:invert(1)` on dark bg |
| `fonts/Saira-VariableFont.ttf` | Saira upright, wght 100–900 | All text |
| `fonts/Saira-Italic-VariableFont.ttf` | Saira italic, wght 100–900 | Italic `<em>` in headings |
| Hero video | TODO — not yet supplied | `<video autoPlay muted loop>` at `opacity:0.25`, below blobs |
| Hero portrait | TODO — B&W editorial cutout of Suhit | Behind/alongside folder nav |

---

## Files in This Package

```
design_handoff_suhit_website/
├── README.md                  ← This file
├── index.html                 ← Full interactive prototype (all sections)
├── Nav.jsx                    ← Bottom-floating nav (reference only — replaced by folders)
├── Hero.jsx                   ← Hero + scroll animation + folder nav
├── Marquee.jsx                ← Infinite credential strip
├── Projects.jsx               ← 4-tile project grid
├── Videos.jsx                 ← YouTube/content section
├── Story.jsx                  ← Timeline section
├── Testimonials.jsx           ← Quote cards
├── Speaking.jsx               ← Speaking CTA + stage tiles
├── Newsletter.jsx             ← Email capture
├── Footer.jsx                 ← Contact + social
└── assets/
    └── logo.png               ← SUHIT AMIN logotype
```

**To preview the prototype:** open `index.html` in a browser. Scroll through the hero to see the zoom animation and dark→light transition.

---

## Implementation Notes for Claude Code

1. **Font loading:** Saira is not on Google Fonts in variable format — use `next/font/local` pointing to the TTF files, or host via Fontshare (`https://api.fontshare.com/v2/css?f[]=saira@1,900,700,600,500,400,300&display=swap`)

2. **Scroll animation:** Use Framer Motion's `useScroll` + `useTransform` for the hero. The section should be `height: 420vh` with a `position: sticky` inner panel — this gives you 420vh of scroll travel while keeping the visual fixed.

3. **Light mode:** Implement as a React context at the root level, consumed by all section components. The hero fires a callback when `scrollProgress > 0.88`.

4. **Tailwind v4:** CSS custom properties are defined in `globals.css` under `@theme inline`. Add the new light-mode tokens there. Do NOT use `tailwind.config.js`.

5. **The "gap-as-border" grid trick:** `display:grid; gap:1px; background:[border-colour]` — each grid child has `background:[card-colour]`, making the gap appear as a border line. This is how project cards get hairline borders between them.

6. **Folder nav z-index:** The folder `<a>` elements must sit above the text (`z-index: 2`) but fade out (`opacity → 0`) before the scroll-zoom makes them unclickable (`pointer-events: none` when opacity < 0.05).
