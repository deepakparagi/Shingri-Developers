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

            {/* ═══ HERO: ARCHITECTURAL RECONSTRUCTION ═══ */}
            <section className="relative h-[100dvh] flex items-center pt-52 md:pt-64 overflow-hidden bg-[#0a0a0a]">

                {/* Subtle ambient glow - intentional positioning */}
                <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[rgba(212,175,55,0.03)] blur-[120px]" />
                <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(212,175,55,0.02)] blur-[100px]" />

                <div className="container-global relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 xl:gap-32">

                    {/* ── LEFT content block ── */}
                    <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 space-y-6 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            {/* Category label — Symmetrical on Mobile */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 mb-4 md:mb-6">
                                <div className="w-12 h-[1.5px] bg-monte-gold/80" />
                                <span className="text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase text-monte-gold">
                                    Portfolio
                                </span>
                                <div className="w-12 h-[1.5px] bg-monte-gold/80 lg:hidden" />
                            </div>

                            {/* Main heading — Balanced Cinematic Presence */}
                            <h1 className="font-serif leading-[0.98] tracking-tight text-monte-beige mb-6 md:mb-10">
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className="block text-monte-beige/40 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
                                >
                                    Our
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="block text-monte-beige text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl -mt-1 md:-mt-2"
                                >
                                    Projects
                                </motion.span>
                            </h1>

                            {/* Gold divider + stats row — Centered Balance */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.4 }}
                                className="flex items-center justify-center lg:justify-start gap-6 md:gap-10"
                            >
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-monte-gold to-transparent" />
                                <div className="flex items-center gap-4 md:gap-5">
                                    <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-monte-beige leading-none">30+</span>
                                    <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-monte-beige/40 leading-none mt-1">Developments</span>
                                </div>
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-monte-gold to-transparent" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="text-sm md:text-lg lg:text-xl text-monte-beige/50 leading-relaxed max-w-lg xl:max-w-xl mt-6 md:mt-10 font-light text-center lg:text-left"
                            >
                                From heritage residences to landmark towers — each development is a testament to unparalleled craftsmanship and architectural vision.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* ── RIGHT visual composition block — Balanced Scaling ── */}
                    <div className="relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] w-full flex items-center justify-center lg:justify-end -mt-24 lg:-mt-20">
                        <div className="relative w-full h-full max-w-[420px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px]">
                            {/* Card 1 — Center Focus Highlight */}
                            {/* Card 1 — Villa Project */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: -4, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="absolute left-[0%] top-[10%] w-[48%] h-[58%] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 group cursor-pointer border border-white/5"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
                                    alt="Villa project"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#060606] via-[#060606]/70 to-transparent z-10" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="flex flex-col gap-1 mb-2">
                                        <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-monte-beige/40 uppercase">Villa project</span>
                                        <span className="text-[10px] md:text-[11px] tracking-[0.2em] text-monte-beige/80 uppercase">Luxury Villa</span>
                                    </div>
                                    <p className="text-monte-beige text-xl md:text-2xl font-serif text-left drop-shadow-xl font-medium">Emerald Estate</p>
                                </div>
                            </motion.div>

                            {/* Card 2 — Penthouse Project */}
                            <motion.div
                                initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 4, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                className="absolute right-[5%] top-[0%] w-[48%] h-[58%] rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] z-10 group cursor-pointer border border-white/5"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                                    alt="Penthouse project"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#060606] via-[#060606]/80 to-transparent z-10" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="flex flex-col gap-1 mb-2">
                                        <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-monte-beige/40 uppercase">Penthouse project</span>
                                        <span className="text-[10px] md:text-[11px] tracking-[0.2em] text-monte-beige/80 uppercase">Concept</span>
                                    </div>
                                    <p className="text-monte-beige text-lg md:text-xl font-serif text-left drop-shadow-xl font-medium">Sky Residences</p>
                                </div>
                            </motion.div>

                            {/* Card 3 — Apartment Project */}
                            <motion.div
                                initial={{ opacity: 0, rotate: 3, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 2, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.7 }}
                                className="absolute right-[15%] bottom-[5%] w-[48%] h-[58%] rounded-2xl overflow-hidden shadow-[0_35px_70px_rgba(0,0,0,0.9)] z-30 group cursor-pointer border border-white/5"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
                                    alt="Apartment project"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#060606] via-[#060606]/80 to-transparent z-10" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="flex flex-col gap-1 mb-2">
                                        <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-monte-beige/40 uppercase">Apartment project</span>
                                    </div>
                                    <p className="text-monte-beige text-lg md:text-xl font-serif text-left drop-shadow-xl font-medium">The Orchid</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom border line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </section>

            <div className="container-global pt-24 md:pt-32 pb-8 md:pb-12">

                {/* Filter Tabs & Dropdown */}
                <div className="mb-8 md:mb-12 border-b border-monte-border/30 pb-4">
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
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-24 border-t border-white/10">
                            {[
                                { val: "12+", label: "Ongoing Projects" },
                                { val: "25k+", label: "Safe Communities" },
                                { val: "15+", label: "Awards Won" },
                                { val: "30+", label: "Years Experience" },
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h4 className="text-3xl md:text-5xl font-serif text-monte-gold mb-2">{s.val}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
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
