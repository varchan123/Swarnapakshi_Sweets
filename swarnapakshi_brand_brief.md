# SWARNAPAKSHI SWEETS — AI CODER BRIEF
## Complete Design System + Page-by-Page Build Instructions

---

## 0. BRAND IDENTITY SNAPSHOT

**Business:** Swarnapakshi Sweets & Snacks — Traditional South Indian sweet shop
**Est.:** 1985 | **Location:** Adyar, Chennai
**Tagline:** *"Where Every Bite Tells A Story"* / *"Tradition in Every Bite"* / *"Heritage of Taste"*
**Phone:** +91 7395943676
**Instagram:** @swarnapakshi_sweets
**Address:** No. 12/1, 3rd Cross Street, Teachers Colony, Kasturibai Nagar, Adyar, Chennai – 600020
**Landmark:** Opp. Baby Hug Store

---

## 1. DESIGN TOKENS

### Color Palette
```
--color-deep-green:     #1A3A2A   /* Primary dark background */
--color-forest-green:   #2D5A3D   /* Logo ring, accents */
--color-gold:           #D4A017   /* Primary gold — logo text, borders */
--color-amber-gold:     #E8B84B   /* Logo background circle, warm gold */
--color-cream:          #F5EDD6   /* Parchment background, light sections */
--color-off-white:      #FAF6EE   /* Text on dark backgrounds */
--color-burnt-sienna:   #8B3A1A   /* Decorative border accents */
--color-lotus-pink:     #E8A0B4   /* Accent from lotus motifs */
--color-dark-overlay:   rgba(10, 28, 18, 0.85) /* Hero overlays */
```

### Typography
```
Display / Hero:    "Cinzel Decorative" or "Cormorant SC" — ALL CAPS, wide tracking
                   → Used for: "WHERE EVERY BITE TELLS A STORY", section titles
Subheading:        "Playfair Display" — elegant serif, italic variants
                   → Used for: taglines, product names
Script / Accent:   "Pinyon Script" or "Great Vibes"
                   → Used for: "Sweets & Snacks | Anjarai Petti | Café" style labels
Body:              "Lato" or "Crimson Text" — clean, readable
                   → Used for: descriptions, addresses, small print
```

### Visual Language
- **Ornamental borders:** Gold filigree / rust-red double-line borders on all sections (reference: index_page.png corner flourishes)
- **Motif library:** Peacock (Swarnapakshi bird), Lotus flower, Marigold flowers, Kolam-style patterns
- **Textures:** Aged parchment (cream sections), dark teal silk/velvet (product sections)
- **Photo treatment:** Images in white polaroid-style frames OR soft-glowing spotlight on dark green background
- **Logo:** Always circular — forest green ring with gold inner circle, peacock illustration, arched "SWARNAPAKSHI" text

---

## 2. PAGE STRUCTURE & SECTION-BY-SECTION INSTRUCTIONS

---

### SECTION 1 — NAVBAR
```
Style: Transparent on scroll → solid deep-green (#1A3A2A) on scroll
Left:  Logo (circular badge, 48px)
Center: Nav links — HOME | OUR STORY | MENU | GALLERY | OCCASIONS | CONTACT
        Font: Cinzel, tracked, small caps, gold color on hover
Right: WhatsApp CTA button — gold background, green icon, "Order Now"
Mobile: Hamburger menu, full-screen overlay with same links
```

---

### SECTION 2 — HERO
```
INSPIRATION FILE: index_page.png + hero_element.jpeg
ANIMATION FRAMES: /hero_frames/ folder (use all frames in sequence for smooth playback)

Layout:
- Full viewport height
- Background: Dark charcoal-to-cream gradient (top dark, bottom parchment)
  exactly like index_page.png
- Ornamental gold + rust-red filigree border frames the entire hero
  (corner flourishes, continuous line border) — replicate border style
  from index_page.png precisely
- Center-top: Circular logo badge (gold/green)
- Below logo: Display headline in Cinzel Decorative, ALL CAPS, white:
    "WHERE EVERY BITE
     TELLS A STORY"
- Below headline: Subtext in spaced uppercase, muted gold:
    "SERVING TRADITION SINCE 1985"
- Below subtext: 4 trust pills in a row, small caps, gold:
    AUTHENTIC RECIPES · HANDCRAFTED WITH LOVE · PREMIUM INGREDIENTS · FAMILY TRADITION
- Below center area: Large faded text "ABOUT US / SWARNAPAKSHI SWEETS"
  acting as a scroll hint
- Bottom strip: Marigold flower arrangement peeking up from bottom edge

Animation (built from /hero_frames/ image sequence):
- Load all frames from the hero_frames folder in filename order
- Play them as a canvas or CSS animation loop at 24fps for smooth playback
- Layer this animation BEHIND the text content, centered or right-aligned
  depending on aspect ratio
- Text content sits on top with a subtle dark overlay so it remains readable
- On page load: headline fades in after frame 1 plays (approx 300ms delay)
- Trust pills slide in left-to-right with 150ms stagger after headline appears
- Filigree border draws itself (SVG stroke animation) simultaneously with text
- Loop the frame animation continuously and seamlessly
- On mobile: scale the frame animation down, keep it centered, 
  reduce opacity to 40% so text stays dominant
```

---

### SECTION 3 — OUR STORY (ABOUT US)
```
INSPIRATION FILE: about_us_and_locations_inspo.png

Layout:
- Full parchment (#F5EDD6) background with subtle aged texture
- Same gold + rust ornamental border framing as hero
- Two-column on desktop: left = text, right = image
- Heading: "SWARNAPAKSHI SWEETS" in Cinzel + "Heritage of Taste" in script below
- Body: 3–4 paragraphs about the 1985 founding, family tradition, Adyar roots,
  handcrafted methods. Use warm, storytelling tone.
  Example: "Since 1985, from our humble kitchen in Adyar, we have carried 
  forward the sacred art of traditional sweet-making..."
- Right column: Circular-cropped or ornate-framed shop/family photo
- Bottom accent: Marigold/lotus illustrated divider
```

---

### SECTION 4 — SIGNATURE SWEETS (FEATURED MENU)
```
INSPIRATION FILE: menu_section_begingin.png (deep green + gold frame)

Layout:
- Background: Deep green (#1A3A2A) with subtle dark texture
- Gold ornamental border frame around the section (same as menu_section_begingin.png)
- Section heading centered: "OUR SWEETS" in Cinzel white + "A Taste of Tradition" 
  in gold script below
- Grid: 3 columns × 2 rows of product cards
- Each card:
    • White polaroid-style frame (reference photo_gallery_inspo.png style)
    • Product photo inside frame
    • Product name in Playfair Display
    • One-line description in Lato
    • "From ₹XX" price in gold
- Hover: Card lifts with gold glow shadow
- Categories filter strip above grid: ALL | LADOOS | BARFIS | HALWA | SNACKS | SEASONAL
- CTA below grid: "View Full Menu →" in gold outlined button
```

---

### SECTION 5 — MENU ITEM DETAIL PANEL
```
INSPIRATION FILE: menu_item_details.png

Layout (when a menu item is clicked / or a dedicated menu page):
- Dark teal background (#1A3A2A to #2D5A3D gradient)
- Large centered product hero image with dramatic spotlight lighting
- Flanked by illustrated lotus flowers on both sides (reference menu_item_details.png)
- Product name in Cinzel white, ALL CAPS with glow effect
- Watermark brand name scrolling behind in large faded text
- Below: Description, key ingredients, available sizes/weights
- WhatsApp order button: gold, prominent
- The "lotus flanking" motif is a KEY visual device — reuse across all product spotlights
```

---

### SECTION 6 — PHOTO GALLERY
```
INSPIRATION FILE: photo_gallery_inspo.png

Layout:
- Background: Dark forest green (#1A3A2A) with subtle texture + gold dust particles
- Section title: "OUR WORLD" in Cinzel white, centered, with gold underline flourish
- Gallery style: Polaroid / Instax-style white-bordered frames, slightly rotated 
  (±3–5°), arranged in TWO staggered vertical columns with overlap
  (replicate the exact layout from photo_gallery_inspo.png)
- Center of section: Large illustrated pink lotus flower as a decorative anchor
- Photos include mix of: product shots, shop interior, packaging, handcrafting, 
  festive moments, customers
- Bottom of polaroids: Optional handwritten-style caption in script font
- Hover: Polaroid straightens and scales up slightly
- "Load More" at bottom in gold text

Content categories to show:
  - Our Sweets (closeups)
  - Our Store (interior)
  - Making of (hands crafting)
  - Packaging
  - Festivals & Events
  - Happy Customers
```

---

### SECTION 7 — OCCASIONS / USE CASES
```
No specific inspo file — design based on brand palette

Layout:
- Parchment (#F5EDD6) background
- Section title: "MADE FOR EVERY MOMENT" in Cinzel + subtitle in script
- 4 visual tiles in a 2×2 grid (large, editorial):
    1. 🎊 Weddings & Engagements
    2. 🪔 Festivals (Diwali, Pongal, Navratri)
    3. 🏢 Corporate Gifting
    4. 🛕 Pooja & Ceremonies
- Each tile: Dark green background, gold-bordered, icon + title + 
  "Custom Orders Welcome" text
- Each tile has a WhatsApp deep-link CTA pre-filled with the occasion type
```

---

### SECTION 8 — WHY US / PROMISE STRIP
```
Layout:
- Full-width dark green banner
- 4 columns with illustrated icons:
    🌿 Fresh Daily          — No day-old sweets
    🤲 Handcrafted          — Made by hand, not machines  
    🥛 Pure Ingredients     — No artificial preservatives
    📦 Custom Boxes         — Gift packaging available
- Gold icon + white heading + muted text
- Thin gold border top and bottom
```

---

### SECTION 9 — TESTIMONIALS
```
Layout:
- Parchment background
- Section title: "WHAT OUR FAMILY SAYS" in Cinzel
- 3 cards in a row, each with:
    • Gold quotation mark (large, decorative)
    • Review text in Crimson Text italic
    • Reviewer name in small caps
    • Gold star row (★★★★★)
    • Subtle cream card background with gold border
- Auto-scroll/carousel on mobile
```

---

### SECTION 10 — ORDER / CONTACT
```
Layout:
- Split screen: left = map + address, right = contact details
- Map: Embedded Google Maps centered on Adyar location
- Right side on dark green:
    • Logo centered
    • Address in styled block
    • Phone number large and tappable
    • WhatsApp button (green, prominent)
    • Instagram link
    • Opening hours
- Decorative lotus divider above section
```

---

### SECTION 11 — FOOTER
```
- Dark green background (#1A3A2A)
- Logo centered top
- Three columns: Quick Links | Connect | Hours
- "Made with ❤️ in Adyar, Chennai" in gold script
- Gold ornamental border top edge
- Copyright in small caps
```

---

## 3. GLOBAL DESIGN RULES FOR AI CODER

```
1. BORDERS EVERYWHERE: Every major section should have the gold + rust-red 
   double-line ornamental border. This is the brand's strongest visual signature.
   Use SVG or CSS border-image with the filigree pattern.

2. PEACOCK MOTIF: Use the peacock illustration (from logo) as a watermark/
   background element in at least 3 sections. Opacity 5–10%.

3. LOTUS AS DIVIDER: Use the pink lotus illustration as a section divider 
   between every 2nd section. SVG or PNG with transparent background.

4. NO FLAT COLORS: Every background should have a subtle texture — 
   either parchment grain (cream sections) or silk/velvet noise (dark sections).

5. GOLD GLOWS: Any interactive element (buttons, cards on hover) should 
   emit a soft gold box-shadow glow, not a harsh outline.

6. MOBILE-FIRST: The polaroid gallery and card grids should collapse to 
   single-column on mobile. Filigree borders should scale down gracefully.

7. WHATSAPP CTAs: Every section that drives orders should have a WhatsApp 
   floating button or inline button. Pre-fill message: "Hi Swarnapakshi! 
   I'd like to place an order."

8. SCROLL BEHAVIOR: Smooth scroll, sections fade+slide in on viewport entry.
   Use Intersection Observer or equivalent.

9. PERFORMANCE: Lazy-load all gallery images. Use WebP format where possible.

10. NO DARK MODE: This site should always render in its warm traditional palette.
    Ignore prefers-color-scheme.
```

---

## 4. ASSETS INVENTORY

| File | Use In |
|------|--------|
| `logo.jpg` | Navbar, Hero, Footer, Watermarks |
| `hero_element.jpeg` | Hero section background collage |
| `hero_element_animation.mp4` | Hero animation reference / background video |
| `index_page.png` | Hero layout + border style reference |
| `about_us_and_locations_inspo.png` | About Us section layout reference |
| `menu_section_begingin.png` | Menu section opener reference |
| `menu_item_details.png` | Individual product spotlight reference |
| `photo_gallery_inspo.png` | Gallery polaroid layout reference |

---

## 5. STARTER PROMPT FOR AI CODER

Paste this as your **first message** into v0, Bolt, Lovable, or Claude Code:

---

> Build a single-page website for **Swarnapakshi Sweets**, a traditional South Indian sweet shop in Adyar, Chennai, established in 1985.
>
> **Design direction:** Heritage luxury. Think a traditional Indian sweet shop elevated to the aesthetic quality of a premium brand — deep forest greens, aged parchment creams, and rich amber golds. Ornamental filigree borders on every section. A peacock (the brand mascot) appears as a watermark motif. Lotus flowers as section dividers. All typography in Cinzel Decorative (display) + Playfair Display (subheads) + Pinyon Script (accents).
>
> Use the attached brand brief for all colors, fonts, section structure, and design rules. Use the reference images only for **visual inspiration** — do not copy layouts exactly, but capture the mood: parchment textures on light sections, dark silk-green on product sections, gold glow on interactive elements, and polaroid-style photo frames in the gallery.
>
> **Sections in order:**
> Navbar → Hero → Our Story → Signature Sweets → Photo Gallery → Occasions → Why Us → Testimonials → Contact → Footer
>
> Make it mobile-first, smooth-scroll, with section fade-in animations. Include a sticky WhatsApp CTA. No dark mode. Use placeholder images where real photos are needed.

---

*Brief prepared for Swarnapakshi Sweets website build — May 2026*
