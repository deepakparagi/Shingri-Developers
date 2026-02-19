"use client";

import { Shield, Coins, TrendingUp, Building2, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FeatureGrid() {
    return (
        <section className="bg-monte-ivory py-24 px-4 md:px-8 lg:px-24">
            <div className="max-w-screen-2xl mx-auto">
                {/* Why India */}
                <div className="mb-24 relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-monte-gold/10 rounded-full blur-3xl -z-10" />

                    <h2 className="text-3xl md:text-5xl font-serif text-monte-charcoal mb-16 text-center md:text-left">Why Invest with SHINGRI?</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col gap-6 p-8 rounded-3xl bg-monte-sand/50 border border-monte-border/50 hover:bg-monte-sand transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-md"
                                variants={itemAnim}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-monte-ivory flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-monte-border/30 relative z-10 text-monte-charcoal group-hover:text-monte-gold">
                                    <item.icon size={28} strokeWidth={1.5} className="transition-colors duration-500" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-serif text-monte-charcoal mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-sm text-monte-taupe leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bento Discovery */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-serif text-monte-charcoal mb-12 text-center md:text-left">Discover Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                        {/* Luxury Villas - Vertical */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}

                            className="col-span-1 md:row-span-2 bg-monte-sand rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto"
                        >
                            <Image src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" alt="Luxury Villas" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-monte-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white relative z-10">
                                <h3 className="text-2xl font-serif">Luxury Villas</h3>
                            </div>
                        </motion.div>

                        {/* Penthouse Suites - Square */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}

                            className="col-span-1 md:row-span-1 bg-monte-ivory rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto"
                        >
                            <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" alt="Penthouses" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-monte-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white relative z-10">
                                <h3 className="text-xl font-serif">Penthouses</h3>
                            </div>
                        </motion.div>

                        {/* Apartments - Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}

                            className="col-span-1 md:col-span-2 md:row-span-1 bg-monte-beige rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto"
                        >
                            <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Apartments" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-monte-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white relative z-10">
                                <h3 className="text-2xl font-serif">Apartments</h3>
                            </div>
                        </motion.div>

                        {/* Catalog Download */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}

                            className="col-span-1 md:col-span-1 md:row-span-1 bg-monte-gold border border-monte-gold/50 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-monte-gold-hover transition-colors text-monte-charcoal group h-48 md:h-auto py-8 md:py-0 shadow-sm hover:shadow-md"
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full border border-monte-charcoal/20 flex items-center justify-center mx-auto mb-4 group-hover:border-monte-charcoal/50 transition-colors">
                                    <ArrowDown size={20} />
                                </div>
                                <p className="text-sm uppercase tracking-widest font-medium">Download Catalog</p>
                            </div>
                        </motion.div>

                        {/* Off-Plan Projects */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}

                            className="col-span-1 md:col-span-2 md:row-span-1 bg-monte-sand/30 rounded-3xl relative overflow-hidden group cursor-pointer h-52 sm:h-64 md:h-auto"
                        >
                            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Off-plan" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-monte-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white relative z-10">
                                <h3 className="text-xl font-serif">Off-Plan Projects</h3>
                            </div>
                        </motion.div>

                        {/* Sea View Removed */}

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
