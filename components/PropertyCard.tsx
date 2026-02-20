"use client";

import Image from "next/image";
import { Bed, Expand } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE, SPRING } from "@/lib/motion";

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
    const [isExpanded, setIsExpanded] = useState(false);

    // Prevent navigation on first tap for mobile to show details
    const handleTap = (e: React.MouseEvent) => {
        // If it's a touch device and not expanded, expand it first
        if (!isExpanded && window.matchMedia("(max-width: 1024px)").matches) {
            e.preventDefault();
            setIsExpanded(true);
        }
    };

    return (
        <motion.div
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            whileHover={{ y: -12 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING}
            className={cn(
                "rounded-[32px] transition-all duration-700 bg-white border border-monte-border",
                isExpanded ? "shadow-2xl shadow-monte-gold/15" : "hover:shadow-xl shadow-transparent"
            )}
        >
            <Link
                href={`/projects/${property.slug}`}
                onClick={handleTap}
                className="block relative w-full h-[480px] sm:h-[580px] md:h-[680px] rounded-[32px] overflow-hidden cursor-pointer"
            >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={property.image}
                        alt="Property"
                        fill
                        className={cn(
                            "object-cover transition-transform duration-[2000ms] ease-out will-change-transform",
                            isExpanded ? "scale-110" : "scale-100"
                        )}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-700",
                        isExpanded ? "opacity-50" : "opacity-70"
                    )} />
                </div>

                {/* Bottom Drawer - WHITE BACKGROUND */}
                <div className="absolute bottom-0 left-0 w-full bg-white border-t border-monte-border/30 transition-all duration-500 ease-in-out shadow-lg">

                    {/* ── Always visible: Title + Location + Status ── */}
                    <div className="px-5 md:px-6 pt-5 pb-3">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl md:text-2xl font-serif !text-monte-charcoal leading-tight line-clamp-1">
                                    {property.title}
                                </h3>
                                {property.location && (
                                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase !text-monte-charcoal/60 mt-1">
                                        {property.location}
                                    </p>
                                )}
                            </div>
                            {property.status && (
                                <span className="flex-shrink-0 mt-0.5 px-3 py-1 bg-monte-gold/15 text-monte-gold text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-monte-gold/40">
                                    {property.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* ── Expandable area with Framer Motion ── */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: EASE }}
                                className="overflow-hidden px-5 md:px-6"
                            >
                                {/* Divider */}
                                <div className="h-[1px] w-full bg-monte-border/30 mb-4" />

                                {/* Price, Installment, Initial */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-bold uppercase tracking-widest !text-monte-charcoal/50 mb-1">Price</p>
                                        <p className="text-xl md:text-2xl font-serif !text-monte-charcoal leading-tight">{property.price}</p>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <p className="text-[10px] font-bold uppercase tracking-widest !text-monte-charcoal/50 mb-1">Initial Payment</p>
                                        <p className="text-base md:text-lg font-medium !text-monte-charcoal leading-tight">{property.initial}</p>
                                    </div>
                                </div>

                                {/* Specs */}
                                <div className="flex items-center gap-3 pb-5">
                                    <div className="flex items-center gap-2 bg-monte-sand !text-monte-charcoal px-3 py-1.5 rounded-full border border-monte-border/30">
                                        <Bed size={13} className="text-monte-gold" />
                                        <span className="text-xs font-medium">{property.beds} Bed</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-monte-sand !text-monte-charcoal px-3 py-1.5 rounded-full border border-monte-border/30">
                                        <Expand size={13} className="text-monte-gold" />
                                        <span className="text-xs font-medium">{property.area}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bottom padding when not expanded */}
                    {!isExpanded && <div className="h-4" />}
                </div>
            </Link>
        </motion.div>
    );
}
