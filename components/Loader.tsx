"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // Extended loading time

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
                    className="fixed inset-0 z-[10000] bg-monte-black flex flex-col items-center justify-center text-white px-4 text-center"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <div className="overflow-hidden mb-4">
                        <motion.p
                            variants={item}
                            className="text-sm md:text-lg font-sans tracking-[0.3em] uppercase text-white/60"
                        >
                            Welcome to
                        </motion.p>
                    </div>

                    <div className="overflow-hidden relative flex justify-center">
                        <motion.div
                            variants={item}
                            className="relative w-64 h-32 sm:w-80 sm:h-40 md:w-96 md:h-48" // Significantly Increased Size
                        >
                            <Image
                                src="/images/logo.png"
                                alt="SHINGRI Developers"
                                fill
                                className="object-contain" // Removed filters for Original Colors
                                priority
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-monte-gold to-transparent mt-8" // Changed to Gold
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
