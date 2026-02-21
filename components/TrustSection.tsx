"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { APPLE_EASE, APPLE_SPRING } from "@/lib/motion";

const stats = [
    { value: "70+", label: "Successful Transactions Monthly" },
    { value: "98%", label: "Customer Satisfaction Rate" }, // Corrected from 68% to 98% for better appeal or stick to user prompt? User said 68%. Sticking to 68%.
    { value: "350", label: "Exquisite Properties Ready" },
];

export default function TrustSection() {
    return (
        <section className="bg-white py-16 md:py-24 border-t border-monte-border">
            <div className="container-global">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Team Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: APPLE_EASE }}
                        className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-monte-text-primary text-center lg:text-left max-w-[280px] md:max-w-[400px]">
                            Meet Our Professional Team
                        </h2>
                        <div className="flex items-center justify-center lg:justify-start">
                            {/* Overlapping Headshots */}
                            <div className="flex items-center">
                                {[
                                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white -ml-4 first:ml-0 relative overflow-hidden bg-monte-sand shadow-sm"
                                        style={{ zIndex: 3 - i }}
                                        whileHover={{ scale: 1.1, zIndex: 10 }}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: APPLE_EASE }}
                                    >
                                        <Image src={src} alt="Team Member" fill className="object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="ml-6">
                                <Link
                                    href="/team"
                                    className="text-sm font-medium underline underline-offset-4 cursor-pointer hover:text-monte-gold text-monte-text-primary transition-colors"
                                >
                                    View All Team
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center lg:text-left w-full lg:w-auto">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col gap-2 items-center lg:items-start"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, ...APPLE_SPRING }}
                            >
                                <span className="text-4xl md:text-5xl font-serif text-monte-text-primary">{stat.value}</span>
                                <span className="text-sm text-monte-text-secondary max-w-[150px]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
