"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Wifi, Layers } from "lucide-react";

const features = [
    { icon: Cpu, title: "M4 Pro Chip", desc: "Outrageously fast performance." },
    { icon: Zap, title: "Ray Tracing", desc: "Hardware-accelerated graphics." },
    { icon: Wifi, title: "Wi-Fi 6E", desc: "Up to 2x faster throughput." },
    { icon: Layers, title: "Unified Memory", desc: "Run huge apps effortlessly." },
];

export default function ShowcaseFeatures() {
    return (
        <section className="py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6">
                        Supercharged.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl">
                        The M4 chip brings incredible speed and capability to everything you do.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
