"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { EASE, DUR, SPRING, APPLE_EASE, APPLE_SPRING, magneticHover, ambientMotion, buttonHover, buttonTap, buttonTransition } from "@/lib/motion";

const SLIDE_DURATION = 8000;

// ── Staggered hero entrance ──────────────────────────────────────
const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const heroItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ...APPLE_SPRING } },
};

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // ── Parallax: background moves at 15% of scroll speed ──────
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 800], ["0%", "15%"]);

    // ── Slide Timer ─────────────────────────────────────────────
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % allProjects.length);
        }, SLIDE_DURATION);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % allProjects.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + allProjects.length) % allProjects.length);

    const currentProject = allProjects[currentSlide];

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[100dvh] lg:h-[100dvh] overflow-x-hidden lg:overflow-hidden bg-black !text-white pt-32 md:pt-40 lg:pt-32"
        >
            {/* ── 1. BACKGROUND with parallax ────────────────────────────── */}
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 1.6, ease: APPLE_EASE }}
                    className="absolute inset-0 z-0"
                    style={{ y: bgY }}
                >
                    <Image
                        src={currentProject.image}
                        alt="Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/50 lg:to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* ── 2. CONTENT ──────────────────────────────────────────────── */}
            <div className="container-global relative z-10 h-full flex flex-col lg:flex-row items-center lg:justify-between pt-6 pb-20 md:pt-10 md:pb-24 lg:pt-6 lg:pb-16 gap-8 lg:gap-0">

                {/* LEFT: Text & Stats — staggered entrance */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left h-full"
                    variants={heroContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Location Label */}
                    <motion.div
                        variants={heroItemVariants}
                        className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:mb-5 opacity-90"
                    >
                        <MapPin size={14} className="text-monte-gold" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentSlide + "-loc"}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.35, ease: EASE }}
                                className="text-[10px] md:text-xs uppercase tracking-[0.2em] !text-monte-beige font-medium"
                            >
                                {currentProject.location}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Headline — masked text reveal */}
                    <div className="mb-5 lg:mb-6 overflow-hidden">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.2 }}
                                className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none !text-monte-beige"
                            >
                                The Art of
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div animate={ambientMotion.animate} transition={ambientMotion.transition as any}>
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.3 }}
                                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none !text-monte-gold my-1 md:my-2"
                                >
                                    Fine Living
                                </motion.h1>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.4 }}
                                className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none !text-monte-beige"
                            >
                                Redefined.
                            </motion.h1>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-10 mb-6 lg:mb-8 lg:border-l-2 lg:border-monte-gold lg:pl-6 text-left"
                    >
                        {[
                            { value: "30+", label: "Luxury Projects" },
                            { value: "500+", label: "Happy Families" },
                            { value: "1995", label: "Est. Since" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-xl md:text-3xl font-bold !text-monte-gold">{stat.value}</p>
                                <p className="text-[8px] md:text-[10px] uppercase tracking-wider !text-monte-beige/80">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Buttons — with micro-interactions */}
                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 w-full sm:w-auto"
                    >
                        <motion.div
                            {...magneticHover}
                            whileTap={buttonTap}
                        >
                            <Link
                                href="/contact"
                                className="bg-monte-gold hover:bg-monte-gold-hover text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Enquire Now <ArrowUpRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div
                            {...magneticHover}
                            whileTap={buttonTap}
                        >
                            <Link
                                href="/projects"
                                className="bg-black/50 border border-white/60 backdrop-blur-sm hover:bg-white/20 !text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg"
                            >
                                View Projects <ArrowUpRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT: Floating Card & Navigation */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center h-full relative pl-0 lg:pl-16 pb-0 lg:pb-10">

                    {/* Floating Card — enters + then gently floats */}
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 28, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: DUR.slow, ease: EASE }}
                        className="relative w-full max-w-[360px] lg:max-w-[420px] h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] group z-20 mx-auto lg:mx-0 cursor-pointer"
                    >
                        {/* ── Floating idle loop ─── */}
                        <motion.div
                            className="absolute inset-0"
                            animate={ambientMotion.animate}
                            transition={ambientMotion.transition as any}
                        >
                            {/* Full Bleed Image */}
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                fill
                                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                                priority
                            />
                        </motion.div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                        {/* Status Badge */}
                        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                            <span className="bg-monte-gold/20 text-monte-gold text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-monte-gold/30 backdrop-blur-md shadow-md">
                                {currentProject.status}
                            </span>
                        </div>

                        {/* Bottom Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide + "-info"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.4, ease: EASE }}
                                className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3"
                            >
                                <h3 className="font-serif text-2xl md:text-3xl !text-white leading-tight drop-shadow-lg">
                                    {currentProject.title}
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={13} className="text-monte-gold flex-shrink-0" />
                                    <span className="text-white/70 text-xs md:text-sm tracking-wide">{currentProject.location}</span>
                                </div>
                                <div className="h-px bg-white/20 my-1" />
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-[9px] text-white/50 uppercase tracking-widest mb-0.5">Starting From</p>
                                        <p className="text-xl md:text-2xl font-semibold !text-white">{currentProject.price}</p>
                                    </div>
                                    <motion.div whileHover={buttonHover} whileTap={buttonTap} transition={buttonTransition}>
                                        <Link
                                            href="/projects"
                                            className="flex items-center gap-2 bg-white/10 hover:bg-monte-gold border border-white/20 hover:border-monte-gold text-white hover:text-black text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full transition-colors duration-300 backdrop-blur-sm flex-shrink-0"
                                        >
                                            View <ArrowUpRight size={14} />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Slider Controls */}
                    <div className="mt-5 z-30 flex items-center justify-between w-full max-w-[420px] pointer-events-auto">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-2xl !text-monte-gold">0{currentSlide + 1}</span>
                            <span className="!text-white/30 text-base mx-1">/</span>
                            <span className="!text-white/50 text-xl">0{allProjects.length}</span>
                        </div>
                        <div className="flex gap-2">
                            {[prevSlide, nextSlide].map((fn, i) => (
                                <motion.button
                                    key={i}
                                    onClick={fn}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.94 }}
                                    transition={{ duration: 0.2, ease: EASE }}
                                    className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm hover:bg-white hover:border-white !text-white hover:text-black flex items-center justify-center transition-colors duration-300"
                                >
                                    {i === 0
                                        ? <ChevronLeft size={18} />
                                        : <ChevronRight size={18} />}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hidden md:flex"
            >
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] !text-white font-light">Scroll</span>
                <motion.div
                    className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent"
                    animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
