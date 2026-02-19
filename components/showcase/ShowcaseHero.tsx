import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function ShowcaseHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="h-[150vh] relative bg-monte-beige overflow-hidden">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

                {/* Typography Reveal */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="z-10 text-center mb-8 relative"
                >
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-monte-white to-monte-taupe"
                    >
                        {Array.from("Mac mini").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { y: 100, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { ease: [0.33, 1, 0.68, 1], duration: 1 }
                                    }
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Decorative Dots for 'i's - Simplified for demo, can be enhanced */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        className="absolute top-0 right-[22%] w-4 h-4 rounded-full bg-gradient-to-tr from-monte-gold to-orange-500 shadow-[0_0_20px_rgba(198,167,94,0.5)]"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
                        className="absolute top-0 right-[6%] w-4 h-4 rounded-full bg-gradient-to-tr from-monte-gold to-yellow-500 shadow-[0_0_20px_rgba(198,167,94,0.5)]"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-xl md:text-3xl font-medium text-monte-taupe mt-4 tracking-wide"
                    >
                        Smaller. Faster. More pro.
                    </motion.p>
                </motion.div>

                {/* Parallax Product Image */}
                <motion.div
                    style={{ y, scale }}
                    className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-20"
                >
                    {/* Mac Mini Placeholder */}
                    <div className="w-full h-full bg-gray-200 rounded-[20%] shadow-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 border border-white/50">
                        {/* Apple Logo Placeholder */}
                        <div className="w-16 h-16 opacity-20">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.12-1.05.05-2.31.72-3.06 1.64-.68.82-1.27 2.13-1.12 3.23 1.17.09 2.38-.92 3.11-1.75" /></svg>
                        </div>
                    </div>
                    {/* Dynamic Shadow */}
                    <motion.div
                        style={{ opacity: scrollYProgress }}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/30 blur-2xl rounded-[100%]"
                    />
                </motion.div>

            </div>
        </section>
    );
}
