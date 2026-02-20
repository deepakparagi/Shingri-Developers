"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        show: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
            } 
        }
    };

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        show: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center text-monte-charcoal px-4 overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(rgba(198, 167, 94, 0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(198, 167, 94, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    {/* Radial Glow Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.05, 0.1, 0.05]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-[600px] h-[600px] rounded-full bg-monte-gold blur-[120px]"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Welcome Text */}
                        <motion.div
                            variants={itemVariants}
                            className="overflow-hidden mb-6"
                        >
                            <p className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase !text-monte-charcoal/60 font-semibold">
                                Welcome to
                            </p>
                        </motion.div>

                        {/* Logo with Enhanced Visibility */}
                        <motion.div
                            variants={logoVariants}
                            className="relative mb-8"
                        >
                            {/* Stronger Glow Effect Behind Logo */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.5, 0.3],
                                    scale: [0.95, 1.05, 0.95]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 blur-3xl bg-monte-gold/25 rounded-full"
                            />
                            
                            {/* Logo with better contrast */}
                            <div className="relative w-72 h-36 sm:w-96 sm:h-44 md:w-[420px] md:h-48 p-4 bg-gradient-to-br from-white via-monte-sand/30 to-white rounded-3xl shadow-2xl border border-monte-gold/20">
                                <Image
                                    src="/images/logo.png"
                                    alt="SHINGRI Developers"
                                    fill
                                    className="object-contain drop-shadow-xl"
                                    priority
                                    style={{ filter: 'contrast(1.1) brightness(0.95)' }}
                                />
                            </div>
                        </motion.div>

                        {/* Tagline */}
                        <motion.div
                            variants={itemVariants}
                            className="overflow-hidden mb-10"
                        >
                            <p className="text-sm md:text-base font-serif !text-monte-charcoal/70 tracking-wide">
                                Building Dreams Since 1995
                            </p>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <motion.div
                            variants={itemVariants}
                            className="w-64 md:w-80 relative"
                        >
                            {/* Progress Bar Background */}
                            <div className="h-[3px] bg-monte-charcoal/15 rounded-full overflow-hidden relative shadow-inner">
                                {/* Animated Progress */}
                                <motion.div
                                    className="h-full bg-gradient-to-r from-monte-gold via-monte-charcoal to-monte-gold rounded-full relative shadow-lg"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        animate={{
                                            x: ["-100%", "200%"]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                    />
                                </motion.div>
                            </div>

                            {/* Progress Percentage */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 text-center"
                            >
                                <span className="text-sm font-semibold !text-monte-charcoal/50 tracking-wider">
                                    {progress}%
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex items-center gap-3"
                        >
                            <motion.div
                                animate={{ scaleX: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-8 h-[2px] bg-gradient-to-r from-transparent to-monte-gold"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-2 h-2 rounded-full bg-monte-gold shadow-lg"
                            />
                            <motion.div
                                animate={{ scaleX: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="w-8 h-[2px] bg-gradient-to-l from-transparent to-monte-gold"
                            />
                        </motion.div>
                    </div>

                    {/* Corner Decorations - More Visible */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-monte-gold/40"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-monte-gold/40"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-monte-gold/40"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-monte-gold/40"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
