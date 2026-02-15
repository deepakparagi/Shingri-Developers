"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <section className="relative py-24 overflow-hidden flex items-center bg-monte-accent">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
            // style={{ backgroundImage: "url('/images/dubai-marina.jpg')" }} // Placeholder
            >
                <div className="absolute inset-0 bg-monte-accent" />
            </div>

            {/* Marquee Text */}
            <div className="relative z-10 w-full overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-3xl sm:text-5xl md:text-7xl font-sans font-semibold text-monte-black tracking-tight">
                                Luxury Residences starting from ₹ 35 Lakhs • Interest-Free Options •&nbsp;
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
