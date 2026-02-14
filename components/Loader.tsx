"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // Extended loading time for the animation sequence

        return () => clearTimeout(timer);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            y: "-100%",
            transition: { duration: 0.8 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-monte-black flex flex-col items-center justify-center text-white"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <div className="overflow-hidden mb-2">
                        <motion.p
                            variants={item}
                            className="text-sm md:text-base font-sans tracking-[0.3em] uppercase text-white/60"
                        >
                            Welcome to
                        </motion.p>
                    </div>

                    <div className="overflow-hidden relative">
                        <motion.h1
                            variants={item}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-widest text-white relative z-10"
                        >
                            SHINGRI <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">DEVELOPERS</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
