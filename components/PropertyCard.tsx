"use client";

import Image from "next/image";
import { Bed, Expand } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

interface PropertyProps {
    slug?: string;
    image: string;
    price: string;
    installment: string;
    initial: string;
    beds: number;
    area: string;
    title?: string;
    location?: string;
    status?: string;
}

export default function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-[32px] hover:shadow-2xl hover:shadow-monte-black/10 transition-all duration-700 group"
        >
            <Link href={`/projects/${property.slug}`} className="block relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={property.image}
                        alt="Property"
                        fill
                        className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 will-change-transform"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Bottom Drawer */}
                <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-8 transition-all duration-500 ease-in-out md:translate-y-[20%] md:group-hover:translate-y-0 border-t border-white/50">
                    <div className="flex justify-between items-end mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Price</p>
                            <p className="text-3xl font-serif text-monte-black">{property.price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Installment</p>
                            <p className="text-xl font-medium">{property.installment}</p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-gray-200 my-4 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-700 delay-100 origin-left" />

                    <div className="flex justify-between items-center text-monte-black relative z-10">
                        <div className="md:-translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-2xl font-serif md:hidden">{property.title}</h3>
                            {/* Only showing title on mobile as desktop has different layout intention or maybe I should show title? Expected behavior: Drawer slides up to reveal details. */}
                            <div className="hidden md:block">
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Initial Payment</p>
                                <p className="text-xl font-medium">{property.initial}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <div className="flex items-center gap-2 bg-gray-100 text-monte-black px-3 py-1 rounded-full" title="Bedrooms">
                                <Bed size={16} /> <span className="text-sm font-medium">{property.beds} Bed</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 text-monte-black px-3 py-1 rounded-full" title="Area">
                                <Expand size={16} /> <span className="text-sm font-medium">{property.area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
