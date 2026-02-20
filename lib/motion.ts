/**
 * ─────────────────────────────────────────────────────────────────
 * SHINGRI motion.ts  —  Apple-style animation system
 * All easing uses cubic-bezier(0.25, 0.46, 0.45, 0.94) — smooth ease-out
 * Spring physics: 300 stiffness, 30 damping for natural response
 * ─────────────────────────────────────────────────────────────────
 */

// ── Global ease curves ────────────────────────────────────────────
export const EASE = [0.25, 0.46, 0.45, 0.94] as const;
export const SOFT_EASE = [0.4, 0, 0.2, 1] as const;

// ── Spring Physics ───────────────────────────────────────────────
export const SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
} as const;

export const SOFT_SPRING = {
    type: "spring",
    stiffness: 100,
    damping: 20,
} as const;

// ── Duration tokens ──────────────────────────────────────────────
export const DUR = {
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
    cinematic: 0.8,
} as const;

// ── Scroll-reveal: fade up ────────────────────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ...SPRING },
    },
};

// ── Stagger container ─────────────────────────────────────────────
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren },
    },
});

// ── Hero slide-up ────────────────────────────────────────────────
export const heroItem = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING, delay },
});

// ── Ambient loop (floating) ──────────────────────────────────────
export const ambientMotion = {
    animate: {
        y: [0, -10, 0],
    },
    transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
    },
};

// ── Image / card hover ────────────────────────────────────────────
export const imageHover = {
    rest: { scale: 1, transition: { duration: DUR.base, ease: EASE } },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: EASE } },
};

// ── Micro-interactions ───────────────────────────────────────────
export const buttonTap = { scale: 0.98 };
export const buttonHover = { scale: 1.02 };
export const buttonTransition = { duration: DUR.fast, ease: EASE };
export const magneticHover = {
    whileHover: { y: -4, scale: 1.02 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
};
