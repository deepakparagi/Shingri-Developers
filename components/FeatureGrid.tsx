"use client";

import { Shield, Coins, TrendingUp, Building2, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";

const APPLE_EASE = EASE;

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: APPLE_EASE } },
};

export default function FeatureGrid() {
    return (
        // Changed bg to monte-sand for Light Theme
        <section className="bg-monte-sand py-16 md:py-24 text-monte-text-primary">
            <div className="container-global">
                {/* Why India */}
                <div className="mb-24 relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-monte-gold/5 rounded-full blur-[120px] -z-10" />

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.65, ease: APPLE_EASE }}
                        className="text-3xl md:text-5xl font-serif text-monte-text-primary mb-12 md:mb-16 text-center md:text-left"
                    >
                        Why Invest with SHINGRI?
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col gap-6 p-6 md:p-8 rounded-3xl bg-white border border-monte-border hover:shadow-lg transition-all duration-500 group relative overflow-hidden shadow-sm"
                                variants={itemAnim}
                                whileHover={{ y: -6, transition: { duration: 0.3, ease: APPLE_EASE } }}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-monte-sand flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-monte-border relative z-10 text-monte-text-primary group-hover:text-monte-gold">
                                    <item.icon size={28} strokeWidth={1.5} className="transition-colors duration-500" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-serif text-monte-text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-monte-text-body leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bento Discovery */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.65, ease: APPLE_EASE }}
                        className="text-3xl md:text-5xl font-serif text-monte-text-primary mb-12 text-center md:text-left"
                    >
                        Discover Properties
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                        {/* Luxury Villas - Vertical */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: 0.05, duration: 0.65, ease: APPLE_EASE }}
                            // Darkened placeholder background
                            className="col-span-1 md:row-span-2 bg-white/5 rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto border border-white/10 flex flex-col justify-end p-6"
                        >
                            <Image src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" alt="Luxury Villas" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0 pointer-events-none" />
                            <div className="relative z-10 text-white">
                                <h3 className="text-2xl font-serif drop-shadow-lg !text-white">Luxury Villas</h3>
                            </div>
                        </motion.div>

                        {/* Penthouse Suites - Square */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: 0.1, duration: 0.65, ease: APPLE_EASE }}
                            className="col-span-1 md:row-span-1 bg-white/5 rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto border border-white/10 flex flex-col justify-end p-6"
                        >
                            <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" alt="Penthouses" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0 pointer-events-none" />
                            <div className="relative z-10 text-white">
                                <h3 className="text-xl font-serif drop-shadow-lg !text-white">Penthouses</h3>
                            </div>
                        </motion.div>

                        {/* Apartments - Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: 0.15, duration: 0.65, ease: APPLE_EASE }}
                            className="col-span-1 md:col-span-2 md:row-span-1 bg-white/5 rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto border border-white/10 flex flex-col justify-end p-6"
                        >
                            <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Apartments" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0 pointer-events-none" />
                            <div className="relative z-10 text-white">
                                <h3 className="text-2xl font-serif drop-shadow-lg !text-white">Apartments</h3>
                            </div>
                        </motion.div>

                        {/* Catalog Download - Redesigned */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: 0.18, duration: 0.65, ease: APPLE_EASE }}
                            className="col-span-1 md:col-span-1 md:row-span-1 bg-black border border-white/10 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-white/5 transition-all group h-48 md:h-auto py-8 md:py-0 shadow-sm relative overflow-hidden"
                            whileHover={{ y: -4, transition: { duration: 0.28, ease: APPLE_EASE } }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="text-center relative z-10 flex flex-col items-center">
                                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/40 transition-all duration-300">
                                    <ArrowDown size={24} className="text-white group-hover:translate-y-1 transition-transform duration-300" />
                                </div>
                                <p className="text-sm text-white uppercase tracking-[0.2em] font-medium !text-white">Download Catalog</p>
                            </div>
                        </motion.div>

                        {/* Off-Plan Projects */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: 0.22, duration: 0.65, ease: APPLE_EASE }}
                            className="col-span-1 md:col-span-2 md:row-span-1 bg-white/5 rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto border border-white/10 flex flex-col justify-end p-6"
                        >
                            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Off-plan" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-0 pointer-events-none" />
                            <div className="relative z-10 text-white">
                                <h3 className="text-xl font-serif !text-white">Off-Plan Projects</h3>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const items = [
    { icon: Shield, title: "RERA Approved", desc: "100% compliant projects." },
    { icon: Coins, title: "High Appreciation", desc: "Prime locations with growth." },
    { icon: TrendingUp, title: "Best ROI", desc: "Proven track record." },
    { icon: Building2, title: "World-Class Quality", desc: "International standards." },
];
