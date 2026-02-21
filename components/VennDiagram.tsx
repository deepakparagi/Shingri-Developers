"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { APPLE_EASE } from "@/lib/motion";

// ── Animation constants ─────────────────────────────────────────
const RING_EASE = [0.22, 1, 0.36, 1] as const;
const RING_DURATION = 1.2;
const CENTER_DELAY = 0.9;

export default function VennDiagram() {
    const prefersReducedMotion = useReducedMotion();

    // ── Mobile detection for disabling heavy SVG filters ────────
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    }, []);

    return (
        <section className="relative bg-black text-white py-28 md:py-36 px-4 overflow-x-hidden">

            {/* Heading Block */}
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: APPLE_EASE }}
                    style={{ color: '#ffffff' }}
                    className="text-3xl md:text-5xl font-light tracking-tight text-center"
                >
                    Path to Smart Ownership
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: APPLE_EASE }}
                    style={{ color: '#ffffff' }}
                    className="text-sm md:text-base mt-4 text-center opacity-80"
                >
                    A strategic approach to high-yield investment
                </motion.p>
            </div>

            {/* ── SVG Venn Diagram with convergence animation ── */}
            <div className="flex justify-center items-center px-6 md:px-0 pt-8 pb-20">
                <svg
                    viewBox="0 0 600 540"
                    style={{ overflow: "visible", width: "100%", maxWidth: "640px", userSelect: "none", WebkitUserSelect: "none" }}
                    aria-label="Smart Ownership Venn Diagram"
                >
                    <defs>
                        {/* Soft white glow for center circle */}
                        <filter id="smartGlow" x="-80%" y="-80%" width="260%" height="260%">
                            <feGaussianBlur stdDeviation={isMobile ? 6 : 14} result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        {/* Pulsing glow animation — reduced on mobile */}
                        <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation={isMobile ? 8 : 22} result="blur" />
                        </filter>
                    </defs>

                    {/* ── Labels — fade in staggered after circles ── */}

                    {/* Top-Left Label — 10% Initial Payment */}
                    <motion.g
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: RING_DURATION + 0.2, ease: RING_EASE }}
                    >
                        <text x="185" y="-28" textAnchor="middle"
                            fill="rgba(255,255,255,0.85)" fontSize="11"
                            letterSpacing="2.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                            pointerEvents="none" style={{ userSelect: "none" }}>
                            10% INITIAL
                        </text>
                        <text x="185" y="-12" textAnchor="middle"
                            fill="rgba(255,255,255,0.85)" fontSize="11"
                            letterSpacing="2.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                            pointerEvents="none" style={{ userSelect: "none" }}>
                            PAYMENT
                        </text>
                    </motion.g>

                    {/* Top-Right Label — 5 Years Installment */}
                    <motion.g
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: RING_DURATION + 0.35, ease: RING_EASE }}
                    >
                        <text x="415" y="-28" textAnchor="middle"
                            fill="rgba(255,255,255,0.85)" fontSize="11"
                            letterSpacing="2.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                            pointerEvents="none" style={{ userSelect: "none" }}>
                            5 YEARS
                        </text>
                        <text x="415" y="-12" textAnchor="middle"
                            fill="rgba(255,255,255,0.85)" fontSize="11"
                            letterSpacing="1.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                            pointerEvents="none" style={{ userSelect: "none" }}>
                            INSTALLMENT
                        </text>
                    </motion.g>

                    {/* Bottom Label — Rental Income */}
                    <motion.g
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: RING_DURATION + 0.5, ease: RING_EASE }}
                    >
                        <text x="300" y="600" textAnchor="middle"
                            fill="rgba(255,255,255,0.85)" fontSize="11"
                            letterSpacing="2.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                            pointerEvents="none" style={{ userSelect: "none" }}>
                            RENTAL INCOME 15%
                        </text>
                    </motion.g>

                    {/* ── Three Rings — convergence animation ── */}

                    {/* Bottom circle — slides up from +150 */}
                    <motion.g
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: RING_DURATION, ease: RING_EASE, delay: 0.1 }}
                        style={{ willChange: "transform" }}
                    >
                        <motion.circle cx="300" cy="400" r="175"
                            fill="black"
                            initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                            whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                            whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            style={{ cursor: "pointer" }}
                        />
                    </motion.g>

                    {/* Left circle — slides in from -150 */}
                    <motion.g
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: RING_DURATION, ease: RING_EASE, delay: 0 }}
                        style={{ willChange: "transform" }}
                    >
                        <motion.circle cx="185" cy="200" r="175"
                            fill="black"
                            initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                            whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                            whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            style={{ cursor: "pointer" }}
                        />
                    </motion.g>

                    {/* Right circle — slides in from +150 */}
                    <motion.g
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: RING_DURATION, ease: RING_EASE, delay: 0.2 }}
                        style={{ willChange: "transform" }}
                    >
                        <motion.circle cx="415" cy="200" r="175"
                            fill="black"
                            initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                            whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                            whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            style={{ cursor: "pointer" }}
                        />
                    </motion.g>

                    {/* ── Glow aura behind center — fades in after convergence ── */}
                    <motion.circle cx="300" cy="267" r="105"
                        fill="rgba(255,255,255,0.10)"
                        filter={isMobile ? undefined : "url(#pulseGlow)"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0, 0.8, 0.5] }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: CENTER_DELAY, ease: "easeOut" }}
                    />

                    {/* ── Center: Smart Ownership — scales up + glows after rings land ── */}
                    <motion.circle cx="300" cy="267" r="70"
                        fill="white"
                        filter={isMobile ? undefined : "url(#smartGlow)"}
                        initial={prefersReducedMotion ? {} : { scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: CENTER_DELAY, ease: RING_EASE }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ cursor: "pointer", transformOrigin: "300px 267px" }}
                    />

                    {/* Center labels — appear after center circle */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: CENTER_DELAY + 0.3, ease: "easeOut" }}
                    >
                        <text x="300" y="260" textAnchor="middle"
                            fill="#000" fontSize="14" fontWeight="700"
                            fontFamily="Georgia, 'Times New Roman', serif">
                            Smart
                        </text>
                        <text x="300" y="281" textAnchor="middle"
                            fill="#000" fontSize="14" fontWeight="700"
                            fontFamily="Georgia, 'Times New Roman', serif">
                            Ownership
                        </text>
                    </motion.g>
                </svg>
            </div>

        </section>
    );
}

