"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.status === filter);

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setIsDropdownOpen(false);
        
        // Smooth scroll to projects section
        const projectsSection = document.getElementById('projects-grid');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="bg-monte-beige min-h-screen">

            {/* ═══ HERO: CINEMATIC PORTFOLIO SHOWCASE ═══ */}
            <section className="relative min-h-[100dvh] pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-32 lg:pb-20 flex items-center overflow-hidden bg-[#0a0a0a]">

                {/* Subtle ambient glow */}
                <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[rgba(212,175,55,0.04)] blur-[120px]" />
                <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(212,175,55,0.03)] blur-[100px]" />

                <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── LEFT: TYPOGRAPHY ── */}
                    <div className="w-full lg:w-[55%] flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                        >
                            {/* Category label */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-[1.5px]" style={{ background: "rgba(212,175,55,0.8)" }} />
                                <span className="text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: "rgba(212,175,55,0.85)" }}>
                                    Portfolio
                                </span>
                            </div>

                            {/* Main heading — stacked, oversized */}
                            <h1 className="font-serif leading-[0.9] tracking-tight" style={{ color: "#ffffff" }}>
                                <motion.span
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
                                    className="block text-[14vw] sm:text-[10vw] lg:text-[7rem] xl:text-[8rem] text-white/15"
                                >
                                    Our
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.28, ease: [0.33, 1, 0.68, 1] }}
                                    className="block text-[14vw] sm:text-[10vw] lg:text-[7rem] xl:text-[8rem] -mt-2 lg:-mt-4"
                                >
                                    Projects
                                </motion.span>
                            </h1>

                            {/* Gold divider + stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.55 }}
                                className="flex items-center gap-6 md:gap-8 mt-6 md:mt-8"
                            >
                                <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[80px]" style={{ background: "linear-gradient(to right, rgba(212,175,55,0.7), transparent)" }} />
                                {/* Counter badge */}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-serif" style={{ color: "rgba(212,175,55,0.9)" }}>30+</span>
                                    <span className="text-xs tracking-[0.25em] uppercase text-white/40">Developments</span>
                                </div>
                                <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[80px]" style={{ background: "linear-gradient(to left, rgba(212,175,55,0.7), transparent)" }} />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="text-sm md:text-base lg:text-lg text-white/40 mt-6 max-w-md leading-relaxed"
                            >
                                From heritage residences to landmark towers — each development is a testament to craftsmanship.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* ── RIGHT: FLOATING PROJECT PREVIEW CARDS ── */}
                    <div className="w-full lg:w-[45%] relative h-auto min-h-[400px] lg:min-h-[560px] flex-shrink-0 flex flex-col gap-6 lg:block">

                        {/* Card 1 — back */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 8, y: 40 }}
                            animate={{ opacity: 1, rotate: 6, y: 0 }}
                            transition={{ duration: 1.1, delay: 0.3 }}
                            className="relative w-full h-56 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-shadow duration-500 hover:shadow-black/50"
                        >
                            <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <Image
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
                                alt="Penthouse project"
                                fill
                                className="object-cover scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                            <div className="absolute bottom-6 left-6 z-30 transform transition-transform duration-500 group-hover:-translate-y-1">
                                <p className="text-[10px] tracking-[0.2em] !text-monte-gold/80 uppercase mb-2 font-medium">Penthouse</p>
                                <p className="!text-monte-gold text-xl font-serif">Sky Residences</p>
                            </div>
                        </motion.div>

                        {/* Card 2 — middle */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -4, y: 60 }}
                            animate={{ opacity: 1, rotate: -3, y: 0 }}
                            transition={{ duration: 1.1, delay: 0.45 }}
                            className="relative w-full h-56 sm:h-64 lg:absolute lg:top-16 lg:left-8 lg:w-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 group cursor-pointer transition-shadow duration-500 hover:shadow-black/50"
                        >
                            <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <Image
                                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600&auto=format&fit=crop"
                                alt="Villa project"
                                fill
                                className="object-cover scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                            <div className="absolute bottom-6 left-6 z-30 transform transition-transform duration-500 group-hover:-translate-y-1">
                                <p className="text-[10px] tracking-[0.2em] !text-monte-gold/80 uppercase mb-2 font-medium">Villa</p>
                                <p className="!text-monte-gold text-xl font-serif">Emerald Estate</p>
                            </div>
                        </motion.div>

                        {/* Card 3 — front */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 3, y: 80 }}
                            animate={{ opacity: 1, rotate: 2, y: 0 }}
                            transition={{ duration: 1.1, delay: 0.6 }}
                            className="relative w-full h-56 sm:h-64 lg:absolute lg:bottom-0 lg:right-16 lg:w-60 lg:h-72 rounded-2xl overflow-hidden shadow-2xl z-20 group cursor-pointer transition-shadow duration-500 hover:shadow-black/50"
                        >
                            <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <Image
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop"
                                alt="Apartment project"
                                fill
                                className="object-cover scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                            <div className="absolute bottom-6 left-6 z-30 transform transition-transform duration-500 group-hover:-translate-y-1">
                                <p className="text-[10px] tracking-[0.2em] !text-monte-gold/80 uppercase mb-2 font-medium">Apartment</p>
                                <p className="!text-monte-gold text-xl font-serif">The Orchid</p>
                            </div>
                        </motion.div>

                        {/* Thin gold decorative line */}
                        <div
                            className="absolute left-1/2 bottom-0 w-[1px] h-16 opacity-30"
                            style={{ background: "linear-gradient(to top, rgba(212,175,55,0.8), transparent)" }}
                        />
                    </div>
                </div>

                {/* Bottom border line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            <div className="max-w-screen-2xl mx-auto pt-12 pb-12 px-4 md:px-8 lg:px-24">

                {/* Filter Tabs & Dropdown */}
                <div className="mb-16 border-b border-monte-border/50 pb-4">
                    {/* Mobile Custom Dropdown */}
                    <div className="md:hidden relative z-50">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-white border border-monte-border rounded-full py-4 px-8 flex justify-between items-center text-xl font-serif text-monte-text-primary shadow-sm hover:border-monte-gold transition-colors"
                        >
                            <span>{filter} Projects</span>
                            <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} className="text-monte-gold" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[32px] shadow-xl border border-monte-border overflow-hidden"
                                >
                                    {["All", "Ongoing", "Upcoming", "Completed"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => handleFilterChange(tab)}
                                            className={`w-full py-4 px-8 text-left text-lg font-serif transition-colors hover:bg-monte-sand/50 flex justify-between items-center ${filter === tab ? "text-monte-text-primary font-medium bg-monte-sand/30" : "text-monte-text-secondary"
                                                }`}
                                        >
                                            {tab}
                                            {filter === tab && (
                                                <motion.div layoutId="check" className="w-2 h-2 rounded-full bg-monte-gold" />
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop Tabs */}
                    <div className="hidden md:flex gap-8">
                        {["All", "Ongoing", "Upcoming", "Completed"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleFilterChange(tab)}
                                className={`text-lg tracking-widest uppercase transition-colors relative pb-2 ${filter === tab ? "text-monte-text-primary font-bold" : "text-monte-text-secondary hover:text-monte-gold"
                                    }`}
                            >
                                {tab}
                                {filter === tab && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-monte-gold"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {filteredProjects.map((prop, index) => (
                                <motion.div
                                    key={prop.slug}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <PropertyCard property={prop} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <Footer />
        </main>
    );
}
