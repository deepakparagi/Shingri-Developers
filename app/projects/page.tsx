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
        <main className="bg-monte-white min-h-screen">
            <div className="pt-32 pb-12 px-4 md:px-8 lg:px-24">
                <h1 className="text-4xl md:text-7xl font-serif text-monte-black mb-6">Our Projects</h1>
                <p className="text-gray-600 max-w-2xl mb-12">
                    Discover our portfolio of exquisite developments, each a testament to luxury and architectural excellence.
                </p>

                {/* Filter Tabs & Dropdown */}
                <div className="mb-16 border-b border-gray-200 pb-4">
                    {/* Mobile Custom Dropdown */}
                    <div className="md:hidden relative z-50">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-white border border-gray-200 rounded-full py-4 px-8 flex justify-between items-center text-xl font-serif text-monte-black shadow-sm hover:border-monte-black transition-colors"
                        >
                            <span>{filter} Projects</span>
                            <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                                >
                                    {["All", "Ongoing", "Upcoming", "Completed"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setFilter(tab);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full py-4 px-8 text-left text-lg font-serif transition-colors hover:bg-gray-50 flex justify-between items-center ${filter === tab ? "text-monte-black font-medium bg-gray-50" : "text-gray-500"
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
                                className={`text-lg tracking-widest uppercase transition-colors relative ${filter === tab ? "text-monte-black font-medium" : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {tab}
                                {filter === tab && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-4 left-0 w-full h-[2px] bg-monte-black"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredProjects.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PropertyCard property={prop} />
                            <div className="mt-4">
                                <Link href={`/projects/${prop.slug}`} className="hover:text-monte-gold transition-colors block">
                                    <h3 className="text-2xl font-serif">{prop.title}</h3>
                                </Link>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">{prop.location}</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-widest rounded-full">
                                    {prop.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
