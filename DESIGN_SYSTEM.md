# 🎨 Agriculture Website Design System (Style Guide)

## 1. Core Philosophy

  * **Keywords:** Organic, Trustworthy, Fresh, Clean, Sustainable.
  * **Visual Feel:** "Farm to Table." Avoid sharp, industrial edges. Use soft curves, plenty of white space (breathing room), and high-quality natural imagery.

## 2. Color Palette (Tailwind Configuration)

Do not use default colors. Use these specific semantic colors to create a branded look.

  * **Primary (Growth & Trust):** A deep, rich forest green. Used for primary buttons, active states, and main headers.
      * *Hex:* `#2F855A` (Tailwind: `green-800`)
  * **Secondary (Soil & Earth):** A warm terracotta or clay brown. Used for accents, badges, or "Sale" tags.
      * *Hex:* `#C05621` (Tailwind: `orange-700`)
  * **Background (Canvas):** A very light cream or mint-white. Never use pure `#FFFFFF` for the main background; it is too harsh.
      * *Hex:* `#F9FAFB` or `#F0FFF4` (Tailwind: `gray-50` or `green-50`)
  * **Text (Readability):** Dark charcoal, never pure black.
      * *Hex:* `#1F2937` (Tailwind: `gray-800`)

## 3. Typography

Mixing a **Serif** (fancy) with a **Sans-Serif** (clean) font creates a high-end agricultural look.

  * **Headings (H1, H2, H3):** *Font Family: 'Merriweather' or 'Playfair Display'*
      * *Vibe:* Traditional, established, elegant.
      * *Usage:* Hero titles, Section headers.
      * *Tailwind:* `font-serif tracking-tight`
  * **Body Text (P, Span, Div):** *Font Family: 'Inter' or 'Lato'*
      * *Vibe:* Clean, modern, easy to read on mobile.
      * *Usage:* Product descriptions, blog text, menus.
      * *Tailwind:* `font-sans leading-relaxed text-gray-600`

## 4. UI Component Rules

### Buttons

  * **Primary Button (Call to Action):**
      * Background: Primary Green.
      * Text: White.
      * Shape: Fully rounded (Pill shape) or soft rounded (`rounded-lg`).
      * Hover: Slight lift and darken.
      * *Tailwind Classes:* `bg-[#2F855A] text-white px-6 py-3 rounded-full hover:bg-[#276749] transition-all hover:shadow-lg`
  * **Secondary Button (Learn More/Filter):**
      * Background: Transparent with Border.
      * Text: Primary Green.
      * *Tailwind Classes:* `border-2 border-[#2F855A] text-[#2F855A] px-6 py-3 rounded-full hover:bg-green-50 transition-colors`

### Cards (Product & Blog)

  * **Shape:** `rounded-2xl` (Large rounded corners feel more organic).
  * **Border:** No thick borders. Use subtle shadows instead.
  * **Shadow:** Low shadow by default, medium shadow on hover.
  * **Background:** Pure White `#FFFFFF` (to pop against the off-white page background).
  * *Tailwind Classes:* `bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100`

### Images

  * **Style:** Natural lighting. No flash. High saturation.
  * **Rounding:** All images should share the corner radius of their container.
  * **Overlay:** When putting text over images (like the Hero section), use a dark green gradient overlay, not black.
      * *CSS:* `bg-gradient-to-t from-black/60 to-transparent`

## 5. Spacing & Layout (Whitespace)

Agriculture needs space to breathe. Do not clutter the screen.

  * **Section Spacing:** Each major section (Hero, Shop, About) should be separated by `py-16` or `py-24` (4rem to 6rem).
  * **Grid Gaps:** Use `gap-8` (2rem) between product cards.
  * **Container:** Limit the max width so text doesn't stretch too far.
      * *Tailwind:* `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
