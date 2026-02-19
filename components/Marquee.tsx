"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <section className="relative py-4 overflow-hidden flex items-center bg-monte-accent text-monte-text-primary">
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
                            KBS Developers • Building Legacy Since 1995 •&nbsp;
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
