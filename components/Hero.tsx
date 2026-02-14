"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Star, MapPin, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % allProjects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + allProjects.length) % allProjects.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentProject = allProjects[currentSlide];

    return (
        <section className="relative min-h-[100dvh] lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-monte-white">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex-1 lg:h-full bg-monte-white text-monte-black flex flex-col justify-center px-4 md:px-8 lg:px-24 py-20 lg:py-0 relative z-10 order-2 lg:order-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hidden lg:flex items-center gap-2 mb-6">
                        <span className="w-8 h-[1px] bg-monte-black"></span>
                        <p className="text-sm font-sans tracking-wide uppercase">Building Your Dreams</p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight lg:leading-[0.9] mb-8 lg:mb-12 text-center lg:text-left mt-8 lg:mt-0">
                        The Art of <br className="hidden lg:block" />
                        Fine Living <br className="hidden lg:block" />
                        <span className="italic block lg:inline mt-2 lg:mt-0">Redefined</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-0">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact" className="px-6 py-3 lg:px-8 lg:py-4 bg-monte-black text-white rounded-full text-base lg:text-lg font-medium hover:bg-black/80 transition-all flex items-center gap-2 group">
                                Enquire Now
                                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/projects" className="flex items-center gap-4 cursor-pointer group">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border border-gray-200 relative group-hover:border-monte-black transition-colors">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop"
                                        alt="Property Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-base lg:text-lg underline underline-offset-4 decoration-1 decoration-gray-300 group-hover:decoration-monte-black transition-all">
                                    View Our Projects
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Right Media Slider */}
            <div className="w-full lg:w-1/2 h-[50dvh] lg:h-full relative bg-black overflow-hidden order-1 lg:order-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={currentProject.image}
                            alt={currentProject.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay Card - Top Right (Desktop Only) */}
                <motion.div
                    key={`price-${currentSlide}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:block absolute top-32 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 text-white z-20"
                >
                    <p className="text-3xl font-serif mb-2">{currentProject.price}</p>
                    <p className="text-sm font-sans text-white/80">{currentProject.installment}</p>
                </motion.div>

                {/* Featured Project Info - Bottom Left */}
                <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 text-white z-20 w-full pr-12 lg:pr-0">
                    <motion.div
                        key={`info-${currentSlide}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-white text-monte-black text-[10px] lg:text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                            <div className="flex items-center gap-1">
                                <Star size={14} className="fill-white" />
                                <span className="text-xs font-medium">{currentProject.status}</span>
                            </div>
                        </div>
                        <h3 className="text-2xl lg:text-4xl font-serif mb-1 line-clamp-1">{currentProject.title}</h3>
                        <div className="flex items-center gap-2 text-white/80 text-xs lg:text-sm mb-2 lg:mb-4">
                            <MapPin size={14} />
                            <span className="line-clamp-1">{currentProject.location}</span>
                        </div>

                        <div className="hidden lg:flex gap-6 border-t border-white/20 pt-4">
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-widest">Type</p>
                                <p className="font-medium">{currentProject.beds} BHK Luxury</p>
                            </div>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-widest">Size</p>
                                <p className="font-medium flex items-center gap-1"><Maximize2 size={14} /> {currentProject.area}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Slide Controls - Bottom Right */}
                <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 flex items-center gap-2 lg:gap-4 text-white z-20">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-monte-black transition-all"
                    >
                        <ArrowLeft size={16} className="lg:hidden" />
                        <ArrowLeft size={20} className="hidden lg:block" />
                    </button>
                    <span className="font-serif text-lg lg:text-xl w-12 lg:w-16 text-center">
                        0{currentSlide + 1} <span className="text-white/40 text-sm mx-1">/</span> 0{allProjects.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-monte-black transition-all"
                    >
                        <ArrowRight size={16} className="lg:hidden" />
                        <ArrowRight size={20} className="hidden lg:block" />
                    </button>
                </div>
            </div>
        </section>
    );
}
