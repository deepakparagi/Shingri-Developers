/**
 * ─────────────────────────────────────────────────────────────────
 * SHINGRI motion.ts  —  Apple-style animation system
 * All easing uses cubic-bezier(0.22, 1, 0.36, 1) — smooth ease-out
 * Use transform/opacity only for 60fps performance
 * ─────────────────────────────────────────────────────────────────
 */

// ── Global ease curve ────────────────────────────────────────────
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_IN = [0.36, 0, 0.64, 0] as const;
export const EASE_INOUT = [0.45, 0, 0.55, 1] as const;

// ── Duration tokens ──────────────────────────────────────────────
export const DUR = {
    fast: 0.25,
    base: 0.5,
    slow: 0.75,
    cinematic: 1.1,
} as const;

// ── Scroll-reveal: fade up ────────────────────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DUR.slow, ease: EASE },
    },
};

// ── Scroll-reveal: fade in (no movement) ─────────────────────────
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: DUR.slow, ease: EASE },
    },
};

// ── Stagger container ─────────────────────────────────────────────
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren },
    },
});

// ── Text mask / reveal (word or line) ────────────────────────────
export const textReveal = {
    hidden: { y: "105%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: DUR.cinematic, ease: EASE },
    },
};

// ── Hero slide-up (staggered) ────────────────────────────────────
export const heroItem = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DUR.slow, delay, ease: EASE },
});

// ── Page transition ──────────────────────────────────────────────
export const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: EASE_IN } },
};

// ── Floating loop (hero cards, badges) ───────────────────────────
export const floatLoop = {
    animate: {
        y: [0, -6, 0],
        transition: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop" as const,
        },
    },
};

// ── Image / card hover scale ─────────────────────────────────────
export const imageHover = {
    rest: { scale: 1, transition: { duration: DUR.base, ease: EASE } },
    hover: { scale: 1.03, transition: { duration: 0.4, ease: EASE } },
};

// ── Button micro-interaction ─────────────────────────────────────
export const buttonTap = { scale: 0.97 };
export const buttonHover = { y: -2 };
export const buttonTransition = { duration: DUR.fast, ease: EASE };
