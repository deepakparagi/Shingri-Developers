"use client";

import { motion } from "framer-motion";
import { APPLE_EASE, APPLE_SPRING, revealVariants, DUR } from "@/lib/motion";

const mobileItems = [
    {
        label: "10% Initial Payment",
        description: "Start with just 10% upfront.",
    },
    {
        label: "5 Years Installment",
        description: "Spread payments over 5 flexible years.",
    },
    {
        label: "Rental Income 15%",
        description: "Earn up to 15% annual rental yield.",
    },
];

export default function VennDiagram() {
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

            {/* ── SVG Venn Diagram — all screen sizes ── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center px-6 md:px-0 pt-8 pb-20"
            >
                {/*
                  viewBox 600×520. Circles at r=155.
                  Centers: Left(185,200) Right(415,200) Bottom(300,400).
                  Equilateral triangle side≈240px → ~23% overlap.
                  Center circle at centroid(300,267), r=68.
                  SVG overflow:visible so labels above/below render correctly.
                */}
                <svg
                    viewBox="0 0 600 540"
                    style={{ overflow: "visible", width: "100%", maxWidth: "640px", userSelect: "none", WebkitUserSelect: "none" }}
                    aria-label="Smart Ownership Venn Diagram"
                >
                    <defs>
                        {/* Soft white glow for center circle */}
                        <filter id="smartGlow" x="-80%" y="-80%" width="260%" height="260%">
                            <feGaussianBlur stdDeviation="14" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        {/* Pulsing glow animation */}
                        <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="22" result="blur" />
                        </filter>
                    </defs>

                    {/* ── Labels ── */}
                    {/* Top-Left Label — 10% Initial Payment */}
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

                    {/* Top-Right Label — 5 Years Installment */}
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

                    {/* Bottom Label — Rental Income */}
                    <text x="300" y="600" textAnchor="middle"
                        fill="rgba(255,255,255,0.85)" fontSize="11"
                        letterSpacing="2.5" fontWeight="700" fontFamily="system-ui, sans-serif"
                        pointerEvents="none" style={{ userSelect: "none" }}>
                        RENTAL INCOME 15%
                    </text>

                    {/* ── Three Venn Circles (bottom→left→right order so fills hide inner crossing lines) ── */}

                    {/* Bottom circle — drawn first */}
                    <motion.circle cx="300" cy="400" r="175"
                        fill="black"
                        initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                        whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                        whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))", scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        style={{ cursor: "pointer" }}
                    />

                    {/* Left circle — drawn second */}
                    <motion.circle cx="185" cy="200" r="175"
                        fill="black"
                        initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                        whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                        whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))", scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        style={{ cursor: "pointer" }}
                    />

                    {/* Right circle — drawn last (topmost layer) */}
                    <motion.circle cx="415" cy="200" r="175"
                        fill="black"
                        initial={{ stroke: "rgba(255,255,255,0.30)", strokeWidth: 1 }}
                        whileHover={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))" }}
                        whileTap={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.5, filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))", scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        style={{ cursor: "pointer" }}
                    />

                    {/* ── Glow aura behind center ── */}
                    <motion.circle cx="300" cy="267" r="105"
                        fill="rgba(255,255,255,0.10)"
                        filter="url(#pulseGlow)"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* ── Center: Smart Ownership ── */}
                    <motion.circle cx="300" cy="267" r="70"
                        fill="white"
                        filter="url(#smartGlow)"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        style={{ cursor: "pointer" }}
                    />

                    {/* Center labels */}
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
                </svg>
            </motion.div>

        </section>
    );
}

