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
            className="rounded-[32px] hover:shadow-2xl hover:shadow-monte-gold/10 transition-all duration-700 group bg-white border border-monte-border"
        >
            <Link href={`/projects/${property.slug}`} className="block relative w-full h-[480px] sm:h-[580px] md:h-[680px] rounded-[32px] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={property.image}
                        alt="Property"
                        fill
                        className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 will-change-transform"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                </div>

                {/* Bottom Drawer */}
                <div className="absolute bottom-0 left-0 w-full bg-white/97 backdrop-blur-md border-t border-monte-border transition-all duration-500 ease-in-out">

                    {/* ── Always visible: Title + Location + Status ── */}
                    <div className="px-5 md:px-6 pt-5 pb-3">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl md:text-2xl font-serif text-monte-text-primary leading-tight line-clamp-1">
                                    {property.title}
                                </h3>
                                {property.location && (
                                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-monte-text-secondary mt-1">
                                        {property.location}
                                    </p>
                                )}
                            </div>
                            {property.status && (
                                <span className="flex-shrink-0 mt-0.5 px-3 py-1 bg-monte-sand/60 text-monte-text-primary text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-monte-border">
                                    {property.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* ── Hover reveal: Price details + Specs ── */}
                    <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-48 px-5 md:px-6">
                        {/* Divider */}
                        <div className="h-[1px] w-full bg-monte-border mb-4" />

                        {/* Price, Installment, Initial */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-monte-text-caption mb-1">Price</p>
                                <p className="text-xl md:text-2xl font-serif text-monte-text-primary leading-tight">{property.price}</p>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-monte-text-caption mb-1">Initial Payment</p>
                                <p className="text-base md:text-lg font-medium text-monte-text-primary leading-tight">{property.initial}</p>
                            </div>
                        </div>

                        {/* Specs */}
                        <div className="flex items-center gap-3 pb-5">
                            <div className="flex items-center gap-2 bg-monte-sand text-monte-text-secondary px-3 py-1.5 rounded-full border border-monte-border">
                                <Bed size={13} className="text-monte-gold" />
                                <span className="text-xs font-medium">{property.beds} Bed</span>
                            </div>
                            <div className="flex items-center gap-2 bg-monte-sand text-monte-text-secondary px-3 py-1.5 rounded-full border border-monte-border">
                                <Expand size={13} className="text-monte-gold" />
                                <span className="text-xs font-medium">{property.area}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom padding when not hovered */}
                    <div className="h-4 group-hover:h-0 transition-all duration-500" />
                </div>
            </Link>
        </motion.div>
    );
}
