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
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link href={`/projects/${property.slug}`} className="block group relative w-full h-[600px] rounded-[32px] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                        src={property.image}
                        alt="Property"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Bottom Drawer */}
                <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-8 transition-transform duration-500 translate-y-[calc(100%-0px)] group-hover:translate-y-0">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Price</p>
                            <p className="text-3xl font-serif text-monte-black">{property.price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Installment</p>
                            <p className="text-xl font-medium">{property.installment}</p>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-gray-200 my-4" />

                    <div className="flex justify-between items-center text-monte-black">
                        <div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Initial Payment</p>
                            <p className="text-xl font-medium">{property.initial}</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1" title="Bedrooms">
                                <Bed size={18} /> <span className="text-sm font-medium">{property.beds}</span>
                            </div>
                            <div className="flex items-center gap-1" title="Area">
                                <Expand size={18} /> <span className="text-sm font-medium">{property.area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
