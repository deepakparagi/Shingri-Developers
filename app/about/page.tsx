"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Check, Star, Award, Users, Building2, MapPin, History, Shield, Compass } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-monte-beige min-h-screen">



            {/* ═══ HERO: LEGACY & ARCHITECTURAL DEPTH ═══ */}
            <section className="relative h-[100dvh] flex items-center pt-48 md:pt-72 overflow-hidden bg-[#080808]">

                {/* Animated ambient background */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    style={{ background: "radial-gradient(ellipse 80% 70% at 20% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
                />

                <div className="relative z-10 w-full max-w-[1440px] xl:max-w-[1500px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 xl:gap-32">

                    {/* ── LEFT content block: Heritage ── */}
                    <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 space-y-4 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            {/* Category label — Symmetrical on Mobile */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 mb-4 md:mb-6">
                                <div className="w-12 h-[1.5px] bg-monte-gold/80" />
                                <span className="text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase text-monte-gold">
                                    Our Story
                                </span>
                                <div className="w-12 h-[1.5px] bg-monte-gold/80 lg:hidden" />
                            </div>

                            {/* Main heading — Balanced Cinematic Presence */}
                            <h1 className="font-serif leading-[0.98] tracking-tight text-white mb-6 md:mb-10">
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className="block text-monte-beige/40 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
                                >
                                    Building
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="block text-monte-beige text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl -mt-1 md:-mt-2"
                                >
                                    Legacy
                                </motion.span>
                            </h1>

                            {/* Since 1995 Badge — Refined Scale & Symmetry */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.4 }}
                                className="flex items-center justify-center lg:justify-start gap-6 md:gap-10"
                            >
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-monte-gold to-transparent" />
                                <div className="flex items-center gap-4 md:gap-5">
                                    <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-monte-gold leading-none">30+</span>
                                    <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-white/40 leading-none mt-1">Years of Experience</span>
                                </div>
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-monte-gold to-transparent" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="text-sm md:text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg xl:max-w-xl mt-6 md:mt-10 font-light text-center lg:text-left"
                            >
                                Three decades of transforming skylines, crafting communities, and redefining what it means to live well with unparalleled vision.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* ── RIGHT visual composition block: Architectural Master Plan ── */}
                    <div className="relative h-[340px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] w-full flex items-center justify-center lg:justify-end -mt-24 lg:-mt-56">
                        <div className="relative w-full h-full max-w-[420px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] flex items-center justify-center">

                            {/* Blueprint Grid Background Layer */}
                            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            {/* Center Kinetic Timeline Motif */}
                            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                                    className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                                >
                                    {/* Concentric Circles pulse */}
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute inset-0 border border-monte-gold/40 rounded-full"
                                    />
                                    <div className="absolute inset-12 border border-monte-gold/20 rounded-full" />
                                    <div className="absolute inset-24 border border-monte-gold/10 rounded-full" />

                                    {/* Pulsing Core */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-monte-gold rounded-full blur-[4px] shadow-[0_0_15px_#d4af37]" />
                                </motion.div>
                            </div>

                            {/* Floating Legacy Cells */}
                            <div className="relative z-10 w-full grid grid-cols-2 gap-8 md:gap-12">

                                {/* Cell 1: Foundation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.4 }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center p-6 group hover:border-monte-gold/30 transition-all shadow-2xl"
                                >
                                    <History className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] text-monte-gold">1995</span>
                                    <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-white/40 mt-1">Founded</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Cell 2: Excellence */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, delay: 0.6 }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center p-6 group translate-y-8 md:translate-y-16 hover:border-monte-gold/30 transition-all shadow-2xl"
                                >
                                    <Award className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] text-monte-gold">Global</span>
                                    <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-white/40 mt-1">Standards</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Cell 3: Vision */}
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, delay: 0.8 }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center p-6 group -translate-y-4 md:-translate-y-8 hover:border-monte-gold/30 transition-all shadow-2xl"
                                >
                                    <Compass className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] text-monte-gold">Elite</span>
                                    <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-white/40 mt-1">Planning</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Cell 4: Security */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 1 }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center p-6 group translate-y-4 md:translate-y-8 hover:border-monte-gold/30 transition-all shadow-2xl"
                                >
                                    <Shield className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] text-monte-gold">Secure</span>
                                    <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-white/40 mt-1">Commitment</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            </section>

            {/* Sustainability & Innovation - Replaces Founder Spotlight */}
            <section className="px-4 md:px-8 lg:px-24 pt-20 md:pt-32 pb-10 md:pb-24">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl shadow-monte-charcoal/5"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
                                alt="Sustainable Architecture"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.98 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">Our Commitment</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-monte-text-primary mb-6">Sustainability & Innovation</h2>
                            <p className="text-lg text-monte-text-body mb-6 leading-relaxed">
                                At SHINGRI Developers, we recognize that the future of real estate lies in harmony with nature. Our projects are designed with a deep commitment to environmental stewardship, integrating renewable energy, rainwater harvesting, and green spaces into the very fabric of our communities.
                            </p>
                            <p className="text-lg text-monte-text-body mb-8 leading-relaxed">
                                We leverage cutting-edge construction technologies to minimize our carbon footprint while maximizing durability and comfort. From smart home automation to eco-friendly materials, every decision is made to ensure a healthier planet for generations to come.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-monte-sand rounded-full text-monte-text-primary"><Building2 size={24} /></div>
                                    <span className="font-medium text-monte-text-primary">Green Certified</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-monte-sand rounded-full text-monte-text-primary"><Users size={24} /></div>
                                    <span className="font-medium text-monte-text-primary">Community Centric</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Expanding Horizons (Gadag, Hubli, Dharwad) */}
            < section className="py-10 md:py-24 px-4 md:px-8 lg:px-24 bg-white text-monte-text-primary" >
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div className="md:w-1/2">
                            <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">Our Footprint</span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-monte-text-primary">Expanding Horizons</h2>
                            <p className="text-monte-text-body text-lg leading-relaxed">
                                From our roots in Belgaum, we are actively expanding our legacy across North Karnataka. We are bringing SHINGRI&apos;s signature blend of luxury and community living to new cities, creating landmarks that redefine the skyline.
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { city: "Hubli", desc: "Commercial & Residential Hubs" },
                                { city: "Dharwad", desc: "Educational & Cultural Centers" },
                                { city: "Gadag", desc: "Emerging Smart Townships" }
                            ].map((loc, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-monte-border p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all cursor-default"
                                >
                                    <div className="w-12 h-12 bg-monte-gold rounded-full flex items-center justify-center mx-auto mb-4 text-monte-charcoal">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-xl font-serif mb-2 text-monte-text-primary">{loc.city}</h3>
                                    <p className="text-xs text-monte-text-secondary uppercase tracking-wide">{loc.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Community Impact */}
            < section className="py-10 md:py-24 px-4 md:px-8 lg:px-24 bg-monte-beige" >
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
                                alt="Community Impact"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end text-white">
                                <h3 className="text-3xl font-serif mb-2 !text-white">Building Communities</h3>
                                <p className="!text-white/90 !mb-0">More than just homes, we build safe havens for families to grow.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-[11px] uppercase tracking-[0.25em] text-monte-gold mb-4 block font-bold font-sans">Social Responsibility</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-monte-text-primary mb-6">Impact Beyond Construction</h2>
                            <p className="text-lg text-monte-text-body mb-6 leading-relaxed">
                                We believe that a developer&apos;s responsibility extends beyond the boundary walls of their projects. Through various initiatives, we contribute to local infrastructure development, support educational programs, and ensure that our growth translates into prosperity for the entire region.
                            </p>
                            <div className="grid grid-cols-2 gap-8 border-t border-monte-border pt-8">
                                {[
                                    { val: "500+", label: "Families Housed" },
                                    { val: "20+", label: "Acres Developed" },
                                    { val: "10k+", label: "Trees Planted" },
                                    { val: "3", label: "Upcoming Townships" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <h4 className="text-4xl md:text-5xl font-serif text-monte-text-primary">{stat.val}</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-monte-text-secondary mt-2 font-sans">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-sand text-monte-text-primary text-center border-t border-monte-border/20">
                <h2 className="text-4xl font-serif mb-12 text-monte-text-primary">Awards & Recognition</h2>
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                    {[
                        { icon: Award, title: "Best Luxury Developer", year: "2023" },
                        { icon: Star, title: "Excellence in Design", year: "2024" },
                        { icon: Users, title: "Customer Choice Award", year: "2022" },
                        { icon: Building2, title: "Green Building Certification", year: "IGBC Gold" }
                    ].map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center gap-4 group w-36 sm:w-auto"
                        >
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-monte-gold group-hover:bg-monte-gold group-hover:text-monte-charcoal transition-colors duration-500">
                                <award.icon size={40} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-monte-text-primary">{award.title}</h3>
                                <p className="text-monte-text-secondary">{award.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Client Testimonials */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-white border-t border-monte-border/20">
                <h2 className="text-4xl font-serif text-center text-monte-text-primary mb-16">Client Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        { text: "Investing with Shingri Developers was the best decision for my portfolio. Their attention to detail and commitment to timelines is unmatched in the region.", author: "Dr. Rajesh Patil", role: "Cardiologist" },
                        { text: "The Royal Enclave is truly a masterpiece. Living here feels like a perpetual vacation. The amenities are world-class and the community is vibrant.", author: "Sneha Kulkarni", role: "Software Architect" }
                    ].map((review, i) => (
                        <div key={i} className="bg-monte-sand/30 p-8 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative border border-monte-border/30">
                            <div className="text-monte-gold mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" className="inline-block mr-1" />)}
                            </div>
                            <p className="text-monte-text-primary mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-serif text-lg text-monte-text-primary">{review.author}</h4>
                                <p className="text-sm text-monte-text-secondary uppercase tracking-widest">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            <Footer />
        </main >
    );
}
