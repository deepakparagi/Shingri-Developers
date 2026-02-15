"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-green-500" },
    { id: 3, color: "bg-blue-500" },
];

export default function PerformanceSection() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                >
                    Pro performance. <br /> <span className="text-gray-500">Across the board.</span>
                </motion.h2>
            </div>

            {/* Monitor Setup */}
            <div className="flex justify-center items-end gap-2 md:gap-4 lg:gap-8 h-[300px] md:h-[500px] relative">
                {screens.map((screen, index) => (
                    <motion.div
                        key={screen.id}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.3
                        }}
                        className={`
                            relative bg-gray-900 border-4 border-gray-800 rounded-xl overflow-hidden shadow-2xl
                            ${index === 1 ? "w-[400px] h-[300px] md:w-[600px] md:h-[450px] z-20" : "w-[300px] h-[220px] md:w-[450px] md:h-[340px] z-10 opacity-80"}
                        `}
                    >
                        {/* Screen Content - Colorful Animation */}
                        <div className="absolute inset-0 bg-black flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                    filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className={`w-[150%] h-[150%] opacity-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl`}
                            />
                            <div className="z-10 text-center">
                                <h3 className="text-xl md:text-3xl font-mono font-bold">8K Rendering</h3>
                                <p className="text-xs md:text-sm text-gray-400">ProRes 422 HQ</p>
                            </div>
                        </div>

                        {/* Screen Glare */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* Reflection on 'desk' */}
            <div className="h-32 bg-gradient-to-b from-gray-900/50 to-transparent w-full absolute bottom-0 blur-xl scale-y-[-1] opacity-30" />

        </section>
    );
}
