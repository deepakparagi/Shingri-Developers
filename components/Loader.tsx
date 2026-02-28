"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                const remaining = 100 - prev;
                return Math.min(100, prev + Math.max(1, remaining * 0.07));
            });
        }, 30);

        const timer = setTimeout(() => setLoading(false), 2800);
        return () => { clearTimeout(timer); clearInterval(progressInterval); };
    }, []);

    const circumference = 2 * Math.PI * 72;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
                    style={{ background: "#F8F4ED" }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                >
                    {/* Soft warm radial tint */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 55%)" }}
                    />

                    {/* ── Center content ── */}
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Progress Ring + Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative flex items-center justify-center mb-6"
                        >
                            {/* SVG Progress Ring */}
                            <svg className="absolute" width="180" height="180" viewBox="0 0 180 180">
                                {/* Track ring */}
                                <circle
                                    cx="90" cy="90" r="72"
                                    fill="none"
                                    stroke="rgba(198,167,94,0.12)"
                                    strokeWidth="2"
                                />
                                {/* Progress arc */}
                                <circle
                                    cx="90" cy="90" r="72"
                                    fill="none"
                                    stroke="#C6A75E"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    transform="rotate(-90 90 90)"
                                    style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
                                />
                            </svg>

                            {/* Logo with card backdrop */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 30px rgba(198,167,94,0.08)",
                                        "0 0 50px rgba(198,167,94,0.15)",
                                        "0 0 30px rgba(198,167,94,0.08)",
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center border border-[#C6A75E]/15"
                            >
                                <div className="relative w-20 h-20 md:w-24 md:h-24">
                                    <Image
                                        src="/images/logo.png"
                                        alt="SHINGRI Developers"
                                        fill
                                        className="object-contain"
                                        priority
                                        style={{ filter: 'contrast(1.3) saturate(1.2) brightness(0.9)' }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-sm md:text-base font-serif text-[#8B7740] tracking-[0.12em] mb-3"
                        >
                            Building Dreams Since 1995
                        </motion.p>

                        {/* Decorative gold line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mb-5"
                        />

                        {/* Percentage */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-xs font-semibold tracking-[0.3em] text-[#C6A75E]/80"
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>

                    {/* Corner accents */}
                    {[
                        "top-6 left-6 border-l-2 border-t-2",
                        "top-6 right-6 border-r-2 border-t-2",
                        "bottom-6 left-6 border-l-2 border-b-2",
                        "bottom-6 right-6 border-r-2 border-b-2",
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                            className={`absolute ${pos} w-8 h-8 md:w-10 md:h-10 border-[#C6A75E]/20`}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
