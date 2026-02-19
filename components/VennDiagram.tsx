"use client";

import { motion } from "framer-motion";

export default function VennDiagram() {
    return (
        <section className="bg-monte-beige text-monte-charcoal py-16 md:py-32 px-4 overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-monte-charcoal">Path to Smart Ownership</h2>
                <p className="text-monte-taupe text-sm md:text-base">A strategic approach to high-yield investment</p>
            </div>

            {/* Responsive Venn Diagram */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center scale-90 sm:scale-100">
                {/* Center Smart Ownership Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full bg-monte-gold text-monte-charcoal shadow-[0_0_30px_rgba(198,167,94,0.3)] md:shadow-[0_0_50px_rgba(198,167,94,0.3)] border-2 border-monte-ivory"
                >
                    <span className="font-serif text-xs md:text-lg font-bold text-center leading-tight">Smart<br />Ownership</span>
                </motion.div>

                {/* Circle 1: Top Left */}
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, borderColor: "#C6A75E", zIndex: 10 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full border border-monte-border/60 flex items-center justify-center -translate-x-[85%] -translate-y-[85%] bg-monte-sand/30 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                    <span className="absolute -top-8 md:-top-8 text-[10px] md:text-sm uppercase tracking-widest text-monte-charcoal w-24 md:w-32 text-center font-bold">10% Initial Payment</span>
                </motion.div>

                {/* Circle 2: Top Right */}
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, borderColor: "#C6A75E", zIndex: 10 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full border border-monte-border/60 flex items-center justify-center -translate-x-[15%] -translate-y-[85%] bg-monte-sand/30 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                    <span className="absolute -top-8 md:-top-8 text-[10px] md:text-sm uppercase tracking-widest text-monte-charcoal w-24 md:w-32 text-center font-bold">5 Years Installment</span>
                </motion.div>

                {/* Circle 3: Bottom */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, borderColor: "#C6A75E", zIndex: 10 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full border border-monte-border/60 flex items-center justify-center -translate-x-1/2 -translate-y-[15%] bg-monte-sand/30 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                    <span className="absolute -bottom-8 md:-bottom-8 text-[10px] md:text-sm uppercase tracking-widest text-monte-charcoal w-24 md:w-32 text-center font-bold">Rental Income 15%</span>
                </motion.div>
            </div>
        </section>
    );
}
