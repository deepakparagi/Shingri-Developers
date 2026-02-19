"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const SLIDE_DURATION = 6000;

    const startTimer = () => {
        setProgress(0);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % allProjects.length);
            setProgress(0);
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        startTimer();
        const progressInterval = setInterval(() => {
            setProgress((prev) => Math.min(prev + (100 / (SLIDE_DURATION / 50)), 100));
        }, 50);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            clearInterval(progressInterval);
        };
    }, [currentSlide]);

    const goTo = (index: number) => {
        setCurrentSlide(index);
    };

    const prevSlide = () => goTo((currentSlide - 1 + allProjects.length) % allProjects.length);
    const nextSlide = () => goTo((currentSlide + 1) % allProjects.length);

    const currentProject = allProjects[currentSlide];

    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], [0, 120]);
    const textY = useTransform(scrollY, [0, 600], [0, -60]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const stats = [
        { value: "30+", label: "Luxury Projects" },
        { value: "500+", label: "Happy Families" },
        { value: "1995", label: "Est. Since" },
    ];

    return (
        <section ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden bg-black">

            {/* Full-Screen Background Image with Parallax */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 w-full h-full"
                    style={{ y: imageY }}
                >
                    <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover"
                        priority
                        quality={95}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Layered Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

            {/* Noise Texture Overlay for premium feel */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto w-full"
            >


                {/* Slide Indicators - Top Right */}
                <div className="absolute top-28 right-6 md:right-12 lg:right-20 flex items-center gap-2">
                    {allProjects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="relative h-[2px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ width: i === currentSlide ? "40px" : "16px", background: "rgba(255,255,255,0.3)" }}
                        >
                            {i === currentSlide && (
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-monte-gold"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.05, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main Heading */}
                <div className="mb-8 lg:mb-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`location-${currentSlide}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-2 text-white/70 text-sm mb-4"
                        >
                            <MapPin size={14} className="text-monte-gold" />
                            <span className="tracking-widest uppercase text-xs">{currentProject.location}</span>
                        </motion.div>
                    </AnimatePresence>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-serif text-white leading-[0.9] tracking-tight"
                        >
                            The Art of<br />
                            <span className="italic text-monte-gold">Fine Living</span><br />
                            <span className="text-white/80">Redefined.</span>
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom Row — Stats + CTA + Controls */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-0">

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex items-center gap-8 md:gap-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-2xl md:text-3xl font-serif text-white">{stat.value}</span>
                                <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center gap-3 bg-monte-gold hover:bg-monte-gold-hover text-white px-7 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 shadow-[0_8px_30px_rgba(198,167,94,0.35)] hover:shadow-[0_12px_40px_rgba(198,167,94,0.5)] hover:-translate-y-0.5"
                        >
                            Enquire Now
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/projects"
                            className="group flex items-center gap-3 border border-white/30 hover:border-white/70 text-white px-7 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        >
                            View Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Slide Controls */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex items-center gap-4 text-white"
                    >
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/15 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <div className="font-serif text-base text-white/60 min-w-[52px] text-center">
                            <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
                            <span className="mx-1 text-white/30">/</span>
                            <span>{String(allProjects.length).padStart(2, "0")}</span>
                        </div>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/15 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Property Card — Desktop */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`card-${currentSlide}`}
                    initial={{ opacity: 0, x: 30, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-20 w-72"
                >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                        {/* Mini image */}
                        <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5">
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <span className="absolute bottom-3 left-3 bg-monte-gold text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                {currentProject.status}
                            </span>
                        </div>

                        <h3 className="text-white font-serif text-xl mb-1 line-clamp-1">{currentProject.title}</h3>
                        <div className="flex items-center gap-1.5 text-white/60 text-xs mb-4">
                            <MapPin size={11} />
                            <span className="line-clamp-1">{currentProject.location}</span>
                        </div>

                        <div className="border-t border-white/15 pt-4 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Starting From</p>
                                <p className="text-white font-serif text-2xl">{currentProject.price}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Area</p>
                                <p className="text-white text-sm flex items-center gap-1 justify-end">
                                    <Maximize2 size={12} /> {currentProject.area}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/40"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
