# ValetXpress Mobile Detailing — Nottingham

A high-converting, premier mobile car valeting & detailing web application for **ValetXpress Notts**, serving Nottingham, West Bridgford, Beeston, Derby, and the East Midlands.

Built with **React**, **JavaScript**, and **Tailwind CSS**, strictly adhering to **SADP Architecture Concepts** (Separation of Concerns, Atomic/Modular Component Hierarchy, Data-Driven Design, and Pure State/Utilities).

---

## 🎨 Design System & Visual Style

Based on a **High-Contrast Clean & Dark Hybrid** aesthetic:
- **Pristine Hygiene & Precision:** Alabaster foundation (`#F8FAFC` & `#FFFFFF`) conveying showroom cleanliness and water-repellent perfection.
- **Automotive Power & Contrast:** Deep midnight charcoal (`#0F172A`) anchoring the hero, navigation, review clusters, and footer.
- **Conversion-Driven Accents:** Warm Amber Gold (`#F59E0B` & `#D97706`) with ceramic gloss inner micro-highlights for CTAs and tier highlights.
- **Trust Architecture:** Clean Electric Blue (`#2563EB`) for verified review badges, postcode validation chips, water & power indicators, and duration metadata.

### Typography
- **Headlines & Display:** `Plus Jakarta Sans` (weights 700 and 800) with tight tracking (`-0.02em` to `-0.03em`).
- **Body & Package Specs:** `Inter` (weights 400, 500, 600) for high legibility under sunlight/outdoor conditions.
- **Category Labels:** `Plus Jakarta Sans` uppercase with expanded tracking (`0.08em`).

---

## 🏗️ SADP Architecture & Folder Structure

```
frontend/
├── public/
│   └── images/                     # Self-contained high-res detailing photography
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable Presentation Components (Atoms/Molecules)
│   │   │   ├── Badge.jsx           # Trust pills, category chips, rating badges
│   │   │   ├── Button.jsx          # Primary amber gloss, dark secondary, outline
│   │   │   ├── Card.jsx            # Level 1 elevation with hover depth
│   │   │   ├── Modal.jsx           # Accessible dialogs
│   │   │   ├── SectionHeader.jsx   # Consistent label-caps + H2 headline headers
│   │   │   └── StarRating.jsx      # Google 5-star rating clusters
│   │   ├── interactive/            # Interactive Widgets & State-Driven Modules
│   │   │   ├── BeforeAfterSlider.jsx   # Draggable touch/mouse before & after split
│   │   │   ├── CoverageMapVisual.jsx   # Nottingham & Derbyshire schematic route map
│   │   │   ├── PostcodeCheckerWidget.jsx # Instant Nottingham postcode lookup
│   │   │   └── VehicleSizeSelector.jsx # Dynamic size switcher (Hatch/Saloon/SUV/Van)
│   │   └── sections/               # Feature / Page Section Organisms
│   │       ├── Navbar.jsx          # Sticky header with quick phone & WhatsApp CTA
│   │       ├── Hero.jsx            # Dark charcoal hero with floating van spec badge
│   │       ├── Steps.jsx           # "Spotless Car in 3 Simple Steps"
│   │       ├── Pricing.jsx         # "Transparent Valeting Packages" (4 tiers)
│   │       ├── PetHairBanner.jsx   # Specialist dog hair extraction banner
│   │       ├── BeforeAfterSection.jsx # 3 Interactive before & after comparison cards
│   │       ├── Reviews.jsx         # Rated 5.0 on Google (12 verified reviews)
│   │       ├── BookingSection.jsx  # Areas covered + "Request Your Valet Slot" form
│   │       ├── FaqSection.jsx      # Expandable accordion for common questions
│   │       ├── StickyMobileBar.jsx # Fixed bottom action sheet for mobile viewports
│   │       └── Footer.jsx          # Midnight charcoal basement with legal & links
│   ├── data/                       # Decoupled Data Layer (Single Source of Truth)
│   │   ├── areasData.js            # Nottingham & Derbyshire postcodes (NG1-NG25, DE)
│   │   ├── beforeAfterData.js      # Comparison card data, images, labels, descriptions
│   │   ├── companyData.js          # Brand metadata, phone, WhatsApp, opening hours
│   │   ├── faqsData.js             # Client questions & comprehensive answers
│   │   ├── packagesData.js         # Valeting tiers, size pricing matrices, add-ons
│   │   ├── reviewsData.js          # Google 5-star customer testimonials
│   │   └── stepsData.js            # 3-step booking flow instructions
│   ├── hooks/                      # Custom React Hooks (Business Logic & State)
│   │   ├── useBeforeAfter.js       # Handles slider position, touch & mouse drag
│   │   └── useBookingForm.js       # Form state, validation, live price calculation
│   ├── utils/                      # Pure Utility Functions
│   │   ├── formatters.js           # Currency and telephone number formatters
│   │   ├── postcodeRules.js        # UK Nottinghamshire postcode coverage rules
│   │   └── whatsapp.js             # Encoded WhatsApp URL generator with quote details
│   ├── styles/                     # CSS & Styling
│   │   └── index.css               # Tailwind directives, animations & custom sliders
│   ├── App.jsx                     # Root application assembler
│   └── main.jsx                    # React 18 mounting
├── tailwind.config.js              # Design system tokens (colors, fonts, elevations)
├── postcss.config.js               # PostCSS config
├── package.json                    # Dependencies & scripts
└── vite.config.js                  # Vite configuration
```

---

## ⚡ Key Features

1. **Instant WhatsApp Pre-filled Quotes:**
   - Any booking or inquiry directly generates a structured, pre-formatted WhatsApp message containing vehicle size, service, postcode, and preferred day/time.
2. **Interactive Before/After Sliders:**
   - Real-time touch and mouse draggable split sliders showcasing alloy wheel de-ironising, interior pet hair wet extraction, and snow foam gloss.
3. **Dynamic Vehicle Sizing Matrix:**
   - One-click switching between Hatchback, Saloon, SUV/4x4, and Commercial Van with instant live price updates across all packages.
4. **Live Nottingham Postcode Verification:**
   - Instant feedback for NG1 through NG16+ primary postcodes (zero travel surcharge) and extended Nottinghamshire/Derbyshire zones.
5. **100% Mobile Optimized with Sticky Action Bar:**
   - Floating quick-call and WhatsApp action bar on mobile devices (<768px).
6. **Confetti Booking Feedback:**
   - Celebratory visual feedback on inquiry submission.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server with Hot Module Replacement
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
