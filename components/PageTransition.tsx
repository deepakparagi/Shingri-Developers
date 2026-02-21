"use client";

import { motion } from "framer-motion";
import { APPLE_EASE, DUR, pageVariants } from "@/lib/motion";

/**
 * PageTransition
 * Wrap page content with a smooth opacity fade between routes.
 * Uses the global pageVariants (fade-in 350ms, fade-out 200ms).
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
