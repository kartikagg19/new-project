# Angel Empire Salon & Academy

A modern, luxury web application for **Angel Empire Salon & Academy** located in Uttam Nagar, New Delhi.

Built with React 19, Vite, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Features

- **Editorial Design & Aesthetic**: Arched mirrors, rose-gold gradients, ambient lighting effects, and custom typography (`Fraunces`, `Jost`, `Rozha One`).
- **Interactive Multi-Step Booking Flow**:
  - Filter by service category (`Hair`, `Skin`, `Nails`, `Lashes & PMU`, `Body`, `Bridal`).
  - Search services with real-time price estimation in INR (₹).
  - Select preferred date, time slot, and specialist.
  - Direct 1-click confirmation via WhatsApp.
- **Academy Course Syllabi**:
  - Accordion view for Professional Makeup Artistry, Hair Styling, Hair Chemical, and Hair Cutting.
  - Basic & Advanced level curriculum breakdown.
- **Studio Photo Gallery**:
  - Real interior photography of the salon (Reception, Gold Studio, Styling Hall, Blush Lounge, Pedicure Throne, Nail Studio).
  - Interactive Lightbox with keyboard navigation.
  - Infinite auto-scrolling marquee.
- **Mobile Optimized**:
  - Floating circular booking button and responsive navigation bar.
  - Touch-friendly drawers and mobile-first layouts.

## Tech Stack

- **React 19**
- **React Router 7**
- **Vite 6**
- **Tailwind CSS 3** with `tailwindcss-animate`
- **Framer Motion 11**
- **Lenis** (Smooth scroll)
- **Lucide React** (Icons)
- **TanStack React Query**

## Project Structure

```
├── README.md
├── package.json
└── frontend/
    ├── public/
    │   ├── index.html
    │   ├── favicon.svg
    │   └── images/ (salon-1.webp to salon-6.webp)
    ├── tailwind.config.js
    ├── postcss.config.cjs
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── index.js
        ├── App.js
        ├── index.css
        ├── lib/
        │   └── scroll.js
        ├── data/
        │   └── content.js
        ├── components/
        │   ├── Logo.jsx
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── Reveal.jsx
        │   ├── Marquee.jsx
        │   ├── Lightbox.jsx
        │   ├── MobileBottomBar.jsx
        │   ├── BookingFlow.jsx
        │   └── BookingModal.jsx
        └── pages/
            ├── Landing.jsx
            ├── Salon.jsx
            └── Academy.jsx
```

## Getting Started

### 1. Install dependencies
```bash
npm install
# or
cd frontend && npm install
```

### 2. Run the development server
```bash
npm run dev
# or
npm start
```
The site will run at `http://localhost:3000/`.

### 3. Build for production
```bash
npm run build
```
Production assets are generated in `frontend/dist/`.
