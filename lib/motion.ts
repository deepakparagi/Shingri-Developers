/**
 * ─────────────────────────────────────────────────────────────────
 * SHINGRI motion.ts  —  Apple-style animation system
 * ─────────────────────────────────────────────────────────────────
 */

// ── Global ease curves ────────────────────────────────────────────
export const EASE = [0.25, 0.46, 0.45, 0.94] as const;
export const SOFT_EASE = [0.4, 0, 0.2, 1] as const;
export const APPLE_EASE = [0.22, 1, 0.36, 1] as const; // Standard Apple cinematic ease

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

export const APPLE_SPRING = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1,
} as const;

// ── Duration tokens ──────────────────────────────────────────────
export const DUR = {
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
    cinematic: 0.8,
    lux: 1.2,
} as const;

// ── Page Transitions ─────────────────────────────────────────────
export const pageVariants = {
    initial: { opacity: 0, scale: 0.99 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: DUR.slow, ease: APPLE_EASE }
    },
    exit: {
        opacity: 0,
        scale: 1.01,
        transition: { duration: DUR.base, ease: APPLE_EASE }
    },
};

// ── Scroll-reveal: sophisticated entry ───────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...APPLE_SPRING },
    },
};

export const revealVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30, scale: 0.99 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: DUR.cinematic, delay, ease: APPLE_EASE },
    },
});

// ── Stagger container ─────────────────────────────────────────────
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren },
    },
});

// ── Headline reveals ─────────────────────────────────────────────
export const textReveal = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DUR.cinematic, ease: APPLE_EASE }
    }
};

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
    rest: { scale: 1, transition: { duration: DUR.base, ease: APPLE_EASE } },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: APPLE_EASE } },
};

// ── Micro-interactions ───────────────────────────────────────────
export const buttonTap = { scale: 0.97 };
export const buttonHover = { scale: 1.03 };
export const buttonTransition = { duration: DUR.fast, ease: APPLE_EASE };
export const magneticHover = {
    whileHover: { y: -4, scale: 1.02 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
};
