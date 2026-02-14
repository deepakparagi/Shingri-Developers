"use client";

import { motion } from "framer-motion";

export default function VennDiagram() {
    return (
        <section className="bg-monte-black text-white pt-40 pb-24 md:py-32 px-4 overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif mb-4">Path to Smart Ownership</h2>
                <p className="text-white/60 text-sm md:text-base">A strategic approach to high-yield investment</p>
            </div>

            {/* Responsive Venn Diagram */}
            <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                {/* Center Smart Ownership Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full bg-white text-monte-black shadow-[0_0_30px_rgba(255,255,255,0.3)] md:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                    <span className="font-serif text-xs md:text-lg font-bold">Smart</span>
                    <span className="font-serif text-xs md:text-lg font-bold">Ownership</span>
                </motion.div>

                {/* Circle 1: Top Left */}
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 rounded-full border border-white/20 flex items-center justify-center -translate-x-[85%] -translate-y-[85%]"
                >
                    <span className="absolute -top-6 md:-top-8 text-[10px] md:text-sm uppercase tracking-widest text-white/80 w-24 md:w-32 text-center">10% Initial Payment</span>
                </motion.div>

                {/* Circle 2: Top Right */}
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 rounded-full border border-white/20 flex items-center justify-center -translate-x-[15%] -translate-y-[85%]"
                >
                    <span className="absolute -top-6 md:-top-8 text-[10px] md:text-sm uppercase tracking-widest text-white/80 w-24 md:w-32 text-center">5 Years Installment</span>
                </motion.div>

                {/* Circle 3: Bottom */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 rounded-full border border-white/20 flex items-center justify-center -translate-x-1/2 -translate-y-[15%]"
                >
                    <span className="absolute -bottom-6 md:-bottom-8 text-[10px] md:text-sm uppercase tracking-widest text-white/80 w-24 md:w-32 text-center">Rental Income 15%</span>
                </motion.div>
            </div>
        </section>
    );
}
