"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.status === filter);

    return (
        <main className="bg-monte-beige min-h-screen">
            <div className="max-w-screen-2xl mx-auto pt-32 pb-12 px-4 md:px-8 lg:px-24">
                <h1 className="text-4xl md:text-7xl font-serif text-monte-charcoal mb-6">Our Projects</h1>
                <p className="text-monte-taupe max-w-2xl mb-12 text-lg">
                    Discover our portfolio of exquisite developments, each a testament to luxury and architectural excellence.
                </p>

                {/* Filter Tabs & Dropdown */}
                <div className="mb-16 border-b border-monte-border/50 pb-4">
                    {/* Mobile Custom Dropdown */}
                    <div className="md:hidden relative z-50">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-monte-ivory border border-monte-border rounded-full py-4 px-8 flex justify-between items-center text-xl font-serif text-monte-charcoal shadow-sm hover:border-monte-gold transition-colors"
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
                                    className="absolute top-full left-0 right-0 mt-2 bg-monte-ivory rounded-[32px] shadow-xl border border-monte-border/50 overflow-hidden"
                                >
                                    {["All", "Ongoing", "Upcoming", "Completed"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setFilter(tab);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full py-4 px-8 text-left text-lg font-serif transition-colors hover:bg-monte-sand/50 flex justify-between items-center ${filter === tab ? "text-monte-charcoal font-medium bg-monte-sand/30" : "text-monte-taupe"
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
                                onClick={() => setFilter(tab)}
                                className={`text-lg tracking-widest uppercase transition-colors relative pb-2 ${filter === tab ? "text-monte-charcoal font-bold" : "text-monte-taupe/60 hover:text-monte-gold"
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
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {filteredProjects.map((prop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <PropertyCard property={prop} />
                                <div className="mt-4">
                                    <Link href={`/projects/${prop.slug}`} className="text-monte-charcoal hover:text-monte-gold transition-colors block">
                                        <h3 className="text-2xl font-serif">{prop.title}</h3>
                                    </Link>
                                    <p className="text-sm text-monte-taupe uppercase tracking-widest mt-1">{prop.location}</p>
                                    <span className="inline-block mt-3 px-3 py-1 bg-monte-sand/50 text-monte-charcoal text-xs font-bold uppercase tracking-widest rounded-full border border-monte-border/30">
                                        {prop.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
