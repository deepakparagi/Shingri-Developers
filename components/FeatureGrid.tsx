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
        <section className="bg-monte-white py-24 px-4 md:px-8 lg:px-24">
            {/* Why India */}
            <div className="mb-24">
                <h2 className="text-4xl font-serif text-monte-black mb-12 text-center md:text-left">Why Invest with SHINGRI?</h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {items.map((item, i) => (
                        <motion.div key={i} className="flex md:flex-col gap-4 items-start md:items-start p-4 md:p-0 bg-white md:bg-transparent rounded-xl md:rounded-none shadow-sm md:shadow-none" variants={itemAnim}>
                            <div className="p-3 bg-monte-white md:bg-transparent rounded-full flex-shrink-0">
                                <item.icon size={32} strokeWidth={1} className="text-monte-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bento Discovery */}
            <div>
                <h2 className="text-4xl font-serif text-monte-black mb-12 text-center md:text-left">Discover Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                    {/* Luxury Villas - Vertical */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}

                        className="col-span-1 md:row-span-2 bg-gray-200 rounded-3xl relative overflow-hidden group cursor-pointer h-64 md:h-auto"
                    >
                        <Image src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" alt="Luxury Villas" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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

                        className="col-span-1 md:row-span-1 bg-gray-300 rounded-3xl relative overflow-hidden group cursor-pointer h-64 md:h-auto"
                    >
                        <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" alt="Penthouses" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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

                        className="col-span-1 md:col-span-2 md:row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden group cursor-pointer h-64 md:h-auto"
                    >
                        <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Apartments" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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

                        className="col-span-1 md:col-span-1 md:row-span-1 bg-monte-black rounded-3xl flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors text-white group h-48 md:h-auto py-8 md:py-0"
                    >
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-4 group-hover:border-white transition-colors">
                                <ArrowDown size={20} />
                            </div>
                            <p className="text-sm uppercase tracking-widest">Download Catalog</p>
                        </div>
                    </motion.div>

                    {/* Off-Plan Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}

                        className="col-span-1 md:col-span-2 md:row-span-1 bg-gray-200 rounded-3xl relative overflow-hidden group cursor-pointer h-64 md:h-auto"
                    >
                        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Off-plan" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white relative z-10">
                            <h3 className="text-xl font-serif">Off-Plan Projects</h3>
                        </div>
                    </motion.div>

                    {/* Sea View Removed */}

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
