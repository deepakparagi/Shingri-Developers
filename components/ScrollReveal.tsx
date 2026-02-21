"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, APPLE_EASE } from "@/lib/motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    /** translateY distance in px — default 20 */
    y?: number;
    /** delay in seconds — default 0 */
    delay?: number;
    /** once — only animate the first time it enters viewport */
    once?: boolean;
    /** Amount of element that must be visible before triggering — 0–1 */
    amount?: number;
}

/**
 * ScrollReveal
 * Drop-in wrapper that fades + slides any content into view when it
 * enters the viewport. Uses transform/opacity only (60fps safe).
 *
 * @example
 * <ScrollReveal>
 *   <h2>Section Heading</h2>
 * </ScrollReveal>
 */
export default function ScrollReveal({
    children,
    className,
    y = 20,
    delay = 0,
    once = true,
    amount = 0.2,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y, scale: 0.99 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale: 0.99 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}
