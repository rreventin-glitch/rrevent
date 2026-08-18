# RR EVENT Website Design System

## Overview
Premium luxury wedding planning and event management website for RR EVENT, a high-end event agency in Begusarai, Bihar, India.

**Design Aesthetic:** Luxury Editorial | Premium Indian Wedding Brand | Dark Cinematic | Gold Accents

---

## Brand Colors

### Primary Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Dark Background | #090807 | Main page background |
| Dark Strong | #120d0c | Stronger dark areas |
| Gold | #d6b46b | Primary accent color |
| Gold Strong | #f3d08d | Bright gold highlights |
| Gold Soft | #9d7943| Muted gold tones |
| Ivory | #f5efe5 | Primary text color |
| Text | #f2ece3 | Body text |
| Muted | rgba(245, 239, 229, 0.78) | Secondary text |

### Gradient Backgrounds
- **Panel:** rgba(20, 16, 14, 0.76)
- **Panel 2:** rgba(30, 23, 18, 0.9)
- **Soft Overlay:** rgba(255, 255, 255, 0.06)
- **Shadow:** rgba(0, 0, 0, 0.4)
- **Success:** #cfe4bf

---

## Typography

### Font Families
- **Serif (Headers):** Cormorant Garamond (400, 500, 600, 700)
- **Sans-serif (Body):** Manrope (400, 500, 600, 700, 800)

### Type Scale

#### Hero Section
- **Eyebrow Script:** 
  - Size: clamp(1.8rem, 2.8vw, 2.8rem)
  - Font: Cormorant Garamond, italic, weight 600
  - Color: #f7ddab (gold)
  - Usage: "We Create" introductory phrase

- **Main Heading (H1):**
  - Size: clamp(3.2rem, 6.4vw, 7rem)
  - Font: Cormorant Garamond, weight 700
  - Color: #f3d08d (gold strong)
  - Line Height: 0.9
  - Letter Spacing: -0.05em
  - Text Shadow: 0 0 18px rgba(214, 180, 107, 0.25)

- **Subtitle:**
  - Size: 1.15rem
  - Font: Manrope, weight 500
  - Color: rgba(255, 248, 236, 0.9)

#### Section Headers (H2)
- Size: clamp(2.6rem, 4vw, 4rem)
- Font: Cormorant Garamond, weight 700
- Color: #f3d08d (gold strong)
- Line Height: 0.95

#### Card Titles (H3)
- Size: 2rem
- Font: Cormorant Garamond
- Color: #f3d08d (gold strong)
- Line Height: 1

#### Body Text
- Size: 0.92rem - 1.03rem
- Font: Manrope
- Color: rgba(245, 239, 229, 0.8)
- Line Height: 1.6

---

## Spacing & Layout

### Container
- Max Width: 1200px
- Padding: calc(100% - 32px) / 2
- Uses CSS `min()` for responsive sizing

### Section Padding
- Default: 80px (top & bottom)
- Mobile: 20px - 40px

### Gap/Spacing Units
- Small: 8px, 10px, 12px
- Medium: 18px, 20px, 22px
- Large: 30px, 40px, 60px, 80px

### Grid Systems
- **Service Grid:** 5 columns (desktop) → 3 (tablet) → 2 (mobile)
- **Portfolio Grid:** 3 columns (desktop) → 2 (tablet) → 1 (mobile)
- **Stats Grid:** 4 columns (desktop) → 2 (tablet)
- **Footer Grid:** Auto-fit with 280px minimum

---

## Component Design

### Hero Section
- **Min Height:** 820px (desktop)
- **Background:** Full-screen video (hero.mp4)
- **Overlay:** Radial gradient with dark vignette
- **Content Layout:** Two-column grid (left: copy, right: visual)
- **Video Styling:**
  - Position: Absolute, full coverage
  - Object-fit: Cover
  - Object-position: Center
  - Z-index: 0

#### Hero Heading (Inline Layout)
- **Desktop:** "We Create" and main heading on same line
- **Mobile:** Stacked vertically
- **Display:** Flexbox with baseline alignment
- **Gap:** 12px between elements
- **Flex Wrap:** Enabled for responsive stacking

### Buttons
- **Base:** Flexbox, 999px border-radius
- **Padding:** 0.9rem 1.5rem
- **Font Weight:** 700
- **Transitions:** Transform 0.25s, box-shadow 0.25s

#### Button Variants
- **Primary:** Gold gradient background, dark text
  - Background: linear-gradient(135deg, #d9bf7c, #f2d693 40%, #d4ad60 80%)
  - Box Shadow: 0 12px 30px rgba(224, 184, 104, 0.25)

- **Secondary:** Dark with gold border
  - Background: rgba(15, 12, 11, 0.72)
  - Border: 1px solid rgba(214, 180, 107, 0.55)
  - Color: #f5efe5

- **Hover State:** translateY(-1px)

### Service Cards
- **Layout:** Grid-based
- **Min Height:** 260px (image) + 60px (content)
- **Border Radius:** 22px
- **Background:** rgba(17, 13, 11, 0.7)
- **Border:** 1px solid var(--border)
- **Box Shadow:** 0 18px 35px rgba(0, 0, 0, 0.14)
- **Hover:** translateY(-4px), enhanced shadow

### Portfolio Items
- **Min Height:** 360px
- **Border Radius:** 24px
- **Overlay:** Dark with category tag
- **Hover Effect:** Scale 1.08 on image, opacity transition

### Badge Components
- **Style:** Rounded pill with border
- **Background:** Semi-transparent dark
- **Border:** 1px solid gold with opacity
- **Font Size:** 0.7rem - 0.95rem
- **Color:** Gold accent

### Navigation Bar
- **Min Height:** 90px (desktop), 78px (tablet)
- **Position:** Sticky
- **Background on Scroll:** rgba(9, 8, 7, 0.72) with backdrop blur

#### Navigation Menu
- **Desktop:** Horizontal flex layout
- **Mobile:** Dropdown absolute positioned
- **Animation:** Underline effect on hover

---

## Animations & Transitions

### Reveal Animation
- **Initial:** opacity: 0, translateY(24px)
- **Final:** opacity: 1, translateY(0)
- **Duration:** 0.8s ease
- **Trigger:** IntersectionObserver (on scroll)

### Hover Transitions
- **Duration:** 0.25s - 0.5s ease
- **Scale:** Max 1.08 (images)
- **Opacity:** Smooth transitions
- **Transform:** Subtle Y-axis movement

### Floating Elements
- **Petal Animation:** 18s linear infinite
- **Float Up Animation:** Linear keyframe animation
- **Opacity:** Fades in/out for depth

### Text Animations
- **Gold Icon Glow:** 0 0 18px rgba(214, 180, 107, 0.25)
- **Text Shadow:** Various depths for hierarchy

---

## Responsive Design Breakpoints

### Desktop (1024px+)
- Full two-column layouts
- Large typography
- Visible floating contact icons (fixed right)
- Full navigation visible

### Tablet (768px - 1023px)
- Adjusted grid columns (2-3)
- Centered layouts
- Navigation becomes hamburger menu
- Touch-friendly button sizes

### Mobile (Below 768px)
- Single column layouts
- Responsive typography (clamp values)
- Bottom fixed contact bar
- Hamburger navigation
- Stacked hero heading

---

## Specific Section Guidelines

### Hero Section
- Full video background with dark overlay
- Text positioned on left (desktop) or center (mobile)
- Inline heading: "We Create UNFORGETTABLE WEDDINGS & EVENTS"
- Trust badges with icons
- Two CTA buttons (Get Quote, Explore)
- Client social proof strip (avatars + count)

### Services Section
- Section tag: "— WHAT WE DO —"
- Header: "Our Premium Services"
- Subheader: "End To End Wedding & Event Solutions"
- 5 service cards with:
  - Image with gradient overlay
  - Icon badge
  - Title (H3)
  - Description
  - "Explore" CTA link

### Portfolio Section
- Filterable grid
- Category buttons: All, Wedding, Engagement, Birthday, Corporate, Decoration
- Items with overlay on hover
- Category tags visible on hover

### Stats Section
- 4 stats in grid (responsive)
- Each stat: icon, number (animated counter), label
- Icon styling: circular with border

### Testimonials Section
- 4-column carousel (desktop), 2-column (tablet)
- Quote mark icon on each card
- Client avatar
- Star rating
- Text content

### Footer
- Multi-column layout
- Brand section with tagline
- Service area links
- Social links
- Contact information
- SEO phrase section
- Copyright & policies

---

## Accessibility Considerations

- **ARIA Labels:** Navigation, buttons, image alt text
- **Semantic HTML:** Proper heading hierarchy, section elements
- **Color Contrast:** Gold on dark backgrounds meet WCAG standards
- **Focus States:** Visible focus indicators for keyboard navigation
- **Touch Targets:** Min 48px for mobile buttons
- **Form Accessibility:** Proper label associations

---

## Performance Optimizations

- **Video Background:** Autoplay, muted, loop (no audio file)
- **Image Optimization:** Unsplash CDN with quality parameters
- **Lazy Loading:** Scroll-triggered animations
- **CSS Grid/Flexbox:** Modern, performant layouts
- **Backdrop Filter:** Blur effects on modern browsers
- **Text Rendering:** Font-display: swap for web fonts

---

## CSS Custom Properties (Variables)

```css
:root {
  --bg: #090807;
  --bg-strong: #120d0c;
  --panel: rgba(20, 16, 14, 0.76);
  --panel-2: rgba(30, 23, 18, 0.9);
  --soft: rgba(255, 255, 255, 0.06);
  --soft-2: rgba(255, 255, 255, 0.1);
  --gold: #d6b46b;
  --gold-strong: #f3d08d;
  --gold-soft: #9d7943;
  --ivory: #f5efe5;
  --text: #f2ece3;
  --muted: rgba(245, 239, 229, 0.78);
  --shadow: rgba(0, 0, 0, 0.4);
  --border: rgba(214, 180, 107, 0.35);
  --success: #cfe4bf;
}
```

---

## Files & Structure

```
g:\EVENT\RR EVENT\
├── index.html          # Main HTML structure
├── styles.css          # Complete design system & styling
├── script.js           # Interactivity & animations
├── DESIGN.md           # This file - design documentation
└── ASSETS/
    └── hero.mp4        # Background video for hero section
```

---

## Brand Voice & Visual Storytelling

- **Premium Quality:** Every detail reflects luxury and refinement
- **Storytelling:** Visual hierarchy guides through narrative
- **Emotion:** Gold tones evoke warmth, celebration, luxury
- **Indian Wedding Heritage:** Elegance meets modern editorial
- **Trust & Expertise:** Sophisticated presentation builds confidence
- **Cinematic Quality:** Video backgrounds and smooth animations

---

## Future Enhancements

- [ ] Dark/light mode toggle
- [ ] Additional video backgrounds for sections
- [ ] Interactive timeline for wedding event flow
- [ ] 3D elements for premium feel
- [ ] Advanced filtering for portfolio
- [ ] Client testimonial video carousel
- [ ] Live event countdown
- [ ] AR try-on for decoration styles

---

**Last Updated:** August 18, 2026
**Version:** 1.0
**Designer:** AI Design System
