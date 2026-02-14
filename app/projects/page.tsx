"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.status === filter);

    return (
        <main className="bg-monte-white min-h-screen">
            <Header />
            <div className="pt-32 pb-12 px-4 md:px-8 lg:px-24">
                <h1 className="text-4xl md:text-7xl font-serif text-monte-black mb-6">Our Projects</h1>
                <p className="text-gray-600 max-w-2xl mb-12">
                    Discover our portfolio of exquisite developments, each a testament to luxury and architectural excellence.
                </p>

                {/* Filter Tabs */}
                <div className="flex gap-8 mb-16 border-b border-gray-200 pb-4">
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
