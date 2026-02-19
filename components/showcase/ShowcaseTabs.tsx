"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const tabs = [
    { id: "redesign", label: "Redesign", color: "bg-orange-500" },
    { id: "intelligence", label: "Apple Intelligence", color: "bg-purple-600" },
    { id: "silicon", label: "Apple Silicon", color: "bg-blue-500" },
];

const content = {
    redesign: {
        title: "All-new design.",
        desc: "Smaller than ever. More powerful than you can imagine.",
        gradient: "from-orange-100 to-amber-50"
    },
    intelligence: {
        title: "Apple Intelligence.",
        desc: "Personal, private, powerful.",
        gradient: "from-purple-100 to-indigo-50"
    },
    silicon: {
        title: "M4 Pro Chip.",
        desc: "A pro chip for pro workflows.",
        gradient: "from-blue-100 to-cyan-50"
    }
};

export default function ShowcaseTabs() {
    const [activeTab, setActiveTab] = useState("redesign");

    return (
        <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-beige min-h-[80vh] flex flex-col justify-center">

            {/* Tab Navigation */}
            <div className="flex justify-center mb-16">
                <div className="inline-flex bg-monte-ivory p-1 rounded-full relative border border-monte-border/30">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${activeTab === tab.id ? "text-monte-charcoal" : "text-monte-taupe hover:text-monte-white"
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-monte-gold rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Display */}
            <div className="relative h-[400px] md:h-[500px] w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-2xl shadow-monte-black/50 border border-monte-border/30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between p-12 bg-monte-ivory`}
                    >
                        <div className="md:w-1/2 space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold tracking-tight text-monte-charcoal"
                            >
                                {content[activeTab as keyof typeof content].title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl text-monte-taupe max-w-md"
                            >
                                {content[activeTab as keyof typeof content].desc}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-monte-gold text-monte-charcoal rounded-full font-medium mt-4"
                            >
                                Learn more
                            </motion.button>
                        </div>

                        <div className="md:w-1/2 h-full flex items-center justify-center relative">
                            {/* Abstract Visual Placeholder */}
                            <motion.div
                                initial={{ scale: 0.8, rotate: -5 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", duration: 0.8 }}
                                className={`w-64 h-64 rounded-3xl shadow-lg border border-monte-border/30 bg-monte-sand`}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    );
}
