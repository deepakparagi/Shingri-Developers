"use client";

import Image from "next/image";
import { Bed, Expand } from "lucide-react";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE, DUR, SPRING, APPLE_EASE, APPLE_SPRING, APPLE_SPRING_STIFF } from "@/lib/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // ── 3D Tilt & Glare Logic ───────────────────────────────────
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const glareX = useMotionValue(50);
    const glareY = useMotionValue(50);
    const glareOpacity = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
    const glareXSpring = useSpring(glareX, { stiffness: 150, damping: 20 });
    const glareYSpring = useSpring(glareY, { stiffness: 150, damping: 20 });
    const glareOpacitySpring = useSpring(glareOpacity, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isTouchDevice) return;
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Update glare position (as percentage)
        glareX.set((mouseX / width) * 100);
        glareY.set((mouseY / height) * 100);
        glareOpacity.set(0.4);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
        x.set(0);
        y.set(0);
        glareOpacity.set(0);
    };

    // ── Detect touch vs pointer device ──────────────────────────
    useEffect(() => {
        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        setIsTouchDevice(!canHover);
    }, []);

    // ── Collapse when tapping outside (touch devices only) ──────
    useEffect(() => {
        if (!isTouchDevice || !isExpanded) return;

        const handleOutsideClick = (e: PointerEvent) => {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        return () => document.removeEventListener("pointerdown", handleOutsideClick);
    }, [isTouchDevice, isExpanded]);

    // ── Staggered Entrance (GSAP) ───────────────────────────────
    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom-=100px",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    // ── Tap handler: toggle on touch, passthrough on desktop ────
    const handleTap = useCallback((e: React.MouseEvent) => {
        if (isTouchDevice) {
            e.preventDefault();
            setIsExpanded((prev) => !prev);
        }
    }, [isTouchDevice]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                rotateX: isTouchDevice ? 0 : rotateX,
                rotateY: isTouchDevice ? 0 : rotateY,
                perspective: "1200px",
                transformStyle: "preserve-3d",
            }}
            onMouseEnter={isTouchDevice ? undefined : () => {
                setIsExpanded(true);
                glareOpacity.set(0.4);
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={isTouchDevice ? undefined : { y: -15, scale: 1.03 }}
            whileTap={isTouchDevice ? { scale: 0.98 } : { scale: 0.97 }}
            transition={{ ...APPLE_SPRING_STIFF }}
            className={cn(
                "group relative rounded-[32px] bg-white transition-all duration-500 ease-out will-change-transform",
                isExpanded
                    ? "shadow-[0_45px_100px_rgba(0,0,0,0.2)] border border-monte-gold/40"
                    : "shadow-lg hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-monte-border hover:border-monte-gold/25"
            )}
        >
            <Link
                href={`/projects/${property.slug}`}
                onClick={handleTap}
                className="block relative w-full h-[480px] sm:h-[580px] md:h-[680px] rounded-[32px] overflow-hidden cursor-pointer"
            >
                {/* Visual Content Layer (for preserve-3d effect) */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
                    {/* Background Image */}
                    <Image
                        src={property.image}
                        alt="Property"
                        fill
                        className={cn(
                            "object-cover transition-transform ease-out will-change-transform",
                            isTouchDevice ? "duration-500" : "duration-1000",
                            isExpanded
                                ? (isTouchDevice ? "scale-[1.05]" : "scale-[1.08]")
                                : "scale-100"
                        )}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Premium Dark Overlay */}
                    <div className={cn(
                        "absolute inset-0 transition-opacity duration-700 ease-in-out",
                        "bg-gradient-to-t from-black/90 via-black/30 to-transparent",
                        isExpanded ? "opacity-70" : "opacity-85"
                    )} />

                    {/* Dynamic Glare Effect */}
                    <motion.div
                        style={{
                            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
                            opacity: glareOpacitySpring,
                            "--mouse-x": useTransform(glareXSpring, x => `${x}%`),
                            "--mouse-y": useTransform(glareYSpring, y => `${y}%`),
                        } as any}
                        className="absolute inset-0 z-10 pointer-events-none"
                    />

                    {/* Gold accent line */}
                    <div className={cn(
                        "absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-monte-gold to-transparent transition-all duration-700",
                        isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                    )} />
                </div>

                {/* Bottom Glassmorphic Drawer */}
                <div className={cn(
                    "absolute bottom-0 left-0 w-full bg-white/85 backdrop-blur-xl border-t border-white/20 shadow-2xl transition-all duration-500 will-change-transform",
                    isExpanded ? "translate-y-0" : "translate-y-[2px]"
                )}>

                    {/* Title + Location + Status */}
                    <div className="px-6 md:px-8 pt-6 pb-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <h3 className={cn(
                                    "text-2xl md:text-3xl font-serif text-monte-charcoal leading-tight line-clamp-1 transition-all duration-500",
                                    isExpanded && "text-monte-charcoal tracking-tight"
                                )}>
                                    {property.title}
                                </h3>
                                {property.location && (
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className={cn(
                                            "w-1 h-1 rounded-full bg-monte-gold transition-opacity duration-500",
                                            isExpanded ? "opacity-100" : "opacity-0"
                                        )} />
                                        <p className={cn(
                                            "text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500",
                                            isExpanded ? "text-monte-gold" : "text-monte-charcoal/50"
                                        )}>
                                            {property.location}
                                        </p>
                                    </div>
                                )}
                            </div>
                            {property.status && (
                                <motion.span
                                    animate={isExpanded ? { y: -2, scale: 1.05 } : { y: 0, scale: 1 }}
                                    transition={{ ...APPLE_SPRING }}
                                    className="flex-shrink-0 px-4 py-1.5 bg-monte-gold/15 text-monte-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-monte-gold/30 backdrop-blur-md"
                                >
                                    {property.status}
                                </motion.span>
                            )}
                        </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: 10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 10 }}
                                transition={{ ...APPLE_SPRING }}
                                className="px-6 md:px-8 overflow-hidden"
                            >
                                <div className="h-[1px] w-full bg-monte-border/20 mb-6" />

                                <div className="flex justify-between items-end mb-6">
                                    <div className="flex flex-col">
                                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-monte-charcoal/40 mb-1.5">Starting Price</p>
                                        <p className="text-2xl md:text-3xl font-serif text-monte-charcoal">{property.price}</p>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-monte-charcoal/40 mb-1.5">Initial Payment</p>
                                        <p className="text-lg md:text-xl font-medium text-monte-charcoal">{property.initial}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pb-8">
                                    <div className="group/spec flex items-center gap-2.5 bg-monte-sand/50 text-monte-charcoal px-4 py-2 rounded-full border border-monte-border/20 transition-all hover:bg-monte-sand hover:border-monte-gold/30">
                                        <Bed size={14} className="text-monte-gold transition-transform group-hover/spec:scale-110" />
                                        <span className="text-xs font-bold tracking-tight">{property.beds} Bedrooms</span>
                                    </div>
                                    <div className="group/spec flex items-center gap-2.5 bg-monte-sand/50 text-monte-charcoal px-4 py-2 rounded-full border border-monte-border/20 transition-all hover:bg-monte-sand hover:border-monte-gold/30">
                                        <Expand size={14} className="text-monte-gold transition-transform group-hover/spec:scale-110" />
                                        <span className="text-xs font-bold tracking-tight">{property.area} Sq. Ft.</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isExpanded && <div className="h-6" />}
                </div>
            </Link>
        </motion.div>
    );
}
