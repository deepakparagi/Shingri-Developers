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
            className="rounded-[32px] hover:shadow-2xl hover:shadow-monte-gold/10 transition-all duration-700 group bg-monte-ivory"
        >
            <Link href={`/projects/${property.slug}`} className="block relative w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-[32px] overflow-hidden cursor-pointer">
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
                {/* Bottom Drawer */}
                <div className="absolute bottom-0 left-0 w-full bg-monte-ivory/95 backdrop-blur-md p-5 md:p-6 transition-all duration-500 ease-in-out md:translate-y-[15%] md:group-hover:translate-y-0 border-t border-monte-border/50">

                    {/* Price & Installment Row */}
                    <div className="flex justify-between items-start mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 w-full">
                        <div className="flex flex-col">
                            <p className="text-monte-taupe text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Price</p>
                            <p className="text-xl md:text-2xl font-serif text-monte-charcoal leading-tight">{property.price}</p>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="text-monte-taupe text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Installment</p>
                            <p className="text-base md:text-lg font-medium text-monte-charcoal leading-tight">{property.installment}</p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-monte-border/50 my-3 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-700 delay-100 origin-left" />

                    {/* Title & Initial/Bed/Area Row */}
                    <div className="flex flex-col gap-3 relative z-10">

                        {/* Title (Mobile Only) / Initial Payment (Desktop) */}
                        <div className="md:-translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl font-serif md:hidden text-monte-charcoal line-clamp-1">{property.title}</h3>
                            <div className="hidden md:block">
                                <p className="text-monte-taupe text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Initial Payment</p>
                                <p className="text-lg font-medium text-monte-charcoal">{property.initial}</p>
                            </div>
                        </div>

                        {/* Specs (Bed/Area) */}
                        <div className="flex items-center justify-between md:justify-start gap-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <div className="flex items-center gap-2 bg-monte-black/5 dark:bg-monte-white/5 text-monte-charcoal px-3 py-1.5 rounded-full border border-monte-border/30">
                                <Bed size={14} className="text-monte-gold" />
                                <span className="text-xs font-medium">{property.beds} Bed</span>
                            </div>
                            <div className="flex items-center gap-2 bg-monte-black/5 dark:bg-monte-white/5 text-monte-charcoal px-3 py-1.5 rounded-full border border-monte-border/30">
                                <Expand size={14} className="text-monte-gold" />
                                <span className="text-xs font-medium">{property.area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
