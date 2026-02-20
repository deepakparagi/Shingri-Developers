# Monte Web — Shingri Developers Portal

A state-of-the-art, premium real estate web application built for **Shingri Developers**. This platform is designed to evoke luxury, trust, and architectural excellence through a minimal yet high-impact user interface.

## 🏗️ Technical Architecture & Stack

This project is built using a modern, performance-oriented stack:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) — Leveraging React 19 for cutting-edge performance and seamless routing.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) — A utility-first approach with modern CSS features for rapid and consistent UI development.
- **Animation Engine**: [Framer Motion 12](https://www.framer.com/motion/) — Powering high-fidelity transitions, staggered entrances, and physics-based interactions.
- **UX Sophistication**: [Lenis Smooth Scroll](https://lenis.darkroom.engineering/) — Providing a silky-smooth scrolling experience across all devices.
- **Icons**: [Lucide React](https://lucide.dev/) — A clean and consistent iconography system.
- **Language**: [TypeScript](https://www.typescriptlang.org/) — Ensuring type safety and codebase scalability.

## 🎨 UI Excellence & Design Philosophy

The UI is a masterclass in **Minimal Luxury**. Every element is meticulously crafted to provide a "premium" feel:

### 1. Aesthetic Palette
- **Primary**: `Monte Beige` — A warm, sophisticated background that balances the high-contrast elements.
- **Accent**: `Monte Gold` — Used sparingly for statistics, key CTAs, and highlights to signify luxury.
- **Foundational**: `Deep Black/Charcoal` — Used in overlays and typography to create depth and authority.

### 2. The Hero Experience
The landing experience features a dynamic, full-bleed carousel:
- **Parallax Depth**: Background images shift at a synchronized rate (40% scroll speed), creating a 3D depth effect.
- **Animated Typography**: Headlines utilize a mix of weights (Light, Serif, Bold) with masked text reveal animations.
- **Micro-Interactions**: Floating project cards and interactive statistics that count up upon entry.
- **Navigation Controls**: Custom-designed sliders with glassmorphic backgrounds and hover-responsive buttons.

### 3. Navigation & Search
- **Glassmorphic Header**: A sticky navbar that transitions from transparent to a dark, blurred "glass" effect upon scrolling.
- **Full-Screen Overlays**: Both the search interface and mobile menu utilize immersive, full-screen `backdrop-blur-3xl` overlays for total user focus.
- **Active States**: Links feature animated underlines that slide in, providing clear spatial awareness.

### 4. Component Ecosystem
- **Property Cards**: Clean, minimal cards with subtle lift-on-hover effects and clear metadata presentation.
- **Feature Grids**: Highlighting USPs with staggered reveal animations and curated spacing.
- **Trust Section**: A section dedicated to credentials, using clean layouts to build user confidence.
- **Venn Diagram**: A custom-coded SVG visualization to represent overlapping values or services.

## 🚀 How it Works

1. **Routing**: Uses the Next.js App Router for optimized server-side rendering and client-side transitions.
2. **Animation Flow**: 
    - `PageTransition.tsx` & `template.tsx` handle global entry/exit animations.
    - `ScrollReveal.tsx` ensures elements fade or slide in as they enter the viewport.
3. **Data Management**: Centralized data in `/data/projects.ts` allows for easy updating of the property showcase.
4. **Scrolling**: Lenis is initialized in `SmoothScroll.tsx` to normalize scroll behavior across different browsers and hardware.

## 🛠️ Development

To start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

---

*Crafted with precision for Shingri Developers.*
