"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Shapes, Compass, Layers, ShieldCheck, X } from "lucide-react";
import { APPLE_EASE, APPLE_SPRING, DUR, revealVariants, staggerContainer } from "@/lib/motion";

const teamMembers = [
    {
        name: "Rohit Verma",
        role: "Head Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        bio: "Award-winning architect with a passion for sustainable luxury."
    },
    {
        name: "Priya Desai",
        role: "Interior Design Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
        bio: "Creating spaces that blend functionality with breathtaking aesthetics."
    },
    {
        name: "Amit Kulkarni",
        role: "Director of Sales",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
        bio: "Ensuring a seamless and transparent experience for every client."
    }
];

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);

    return (
        <main className="bg-monte-beige min-h-screen">

            {/* ═══ HERO: CREATIVE VISIONARIES BENTO ═══ */}
            <section className="relative h-[100dvh] flex items-center pt-52 md:pt-64 overflow-hidden bg-[#070707]">

                {/* Decorative background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            opacity: [0.05, 0.1, 0.05],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-monte-gold/5 blur-[120px] rounded-full"
                    />
                </div>

                <div className="relative z-10 w-full max-w-[1440px] xl:max-w-[1500px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 xl:gap-32">

                    {/* ── LEFT content block: Typography ── */}
                    <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 space-y-6 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: APPLE_EASE }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            {/* Category label — Symmetrical on Mobile */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 mb-4 md:mb-6">
                                <div className="w-12 h-[1.5px] bg-monte-gold/80" />
                                <span className="text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase text-monte-gold">
                                    Human-Centric Leadership
                                </span>
                                <div className="w-12 h-[1.5px] bg-monte-gold/80 lg:hidden" />
                            </div>

                            {/* Main heading — Balanced Cinematic Presence */}
                            <h1 className="font-serif leading-[0.98] tracking-tight text-monte-beige mb-6 md:mb-10">
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className="block text-monte-beige/40 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
                                >
                                    Meet the
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="block text-monte-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl -mt-1 md:-mt-2 font-light italic"
                                >
                                    Visionaries
                                </motion.span>
                            </h1>

                            {/* Refined Stats Row — Refined Scale & Symmetry */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: DUR.lux, delay: 0.4, ease: APPLE_EASE }}
                                className="flex items-center justify-center lg:justify-start gap-6 md:gap-10"
                            >
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-monte-gold to-transparent" />
                                <div className="flex items-center gap-4 md:gap-5">
                                    <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-monte-gold leading-none">15+</span>
                                    <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-monte-beige/40 leading-none mt-1">Design Experts</span>
                                </div>
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-monte-gold to-transparent" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: DUR.cinematic, delay: 0.6, ease: APPLE_EASE }}
                                className="text-sm md:text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg xl:max-w-xl mt-6 md:mt-10 font-light text-center lg:text-left"
                            >
                                The architects of ambition, shaping India&apos;s luxury real estate landscape with precision, heart, and heritage.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* ── RIGHT visual composition block: Architectural Mosaic (Non-Image) ── */}
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] w-full flex items-center justify-center lg:justify-end -mt-24 lg:-mt-24">
                        <div className="relative w-full h-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] flex items-center justify-center">

                            {/* Central Abstract SVG Motif — Kinetic Blueprint */}
                            <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                                >
                                    {/* Interlocking Golden Squares */}
                                    <div className="absolute inset-0 border-[1px] border-monte-gold/40 rotate-45" />
                                    <div className="absolute inset-4 border-[0.5px] border-monte-gold/20" />
                                    <div className="absolute inset-8 border-[1.5px] border-monte-gold/10 -rotate-12" />

                                    {/* Architectural Crosshair Lines */}
                                    <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-monte-gold/20" />
                                    <div className="absolute left-1/2 top-0 w-[0.5px] h-full bg-monte-gold/20" />
                                </motion.div>
                            </div>

                            {/* Floating Glass Influence Cards */}
                            <div className="relative z-10 w-full grid grid-cols-2 gap-8 md:gap-12">

                                {/* Card 1: Precision */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: DUR.cinematic, delay: 0.3, ease: APPLE_EASE }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-4 md:p-6 group hover:border-monte-gold/30 transition-colors"
                                >
                                    <Compass className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] md:text-xs tracking-[.4em] uppercase text-monte-gold font-bold">Precision</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Card 2: Heritage */}
                                <motion.div
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: DUR.cinematic, delay: 0.5, ease: APPLE_EASE }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-4 md:p-6 group lg:translate-y-12 hover:border-monte-gold/30 transition-colors"
                                >
                                    <ShieldCheck className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] md:text-xs tracking-[.4em] uppercase text-monte-gold font-bold">Heritage</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Card 3: Innovation */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: DUR.cinematic, delay: 0.7, ease: APPLE_EASE }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-4 md:p-6 group lg:-translate-y-4 hover:border-monte-gold/30 transition-colors"
                                >
                                    <Layers className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] md:text-xs tracking-[.4em] uppercase text-monte-gold font-bold">Innovation</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                                {/* Card 4: Humanity */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: DUR.cinematic, delay: 0.9, ease: APPLE_EASE }}
                                    className="col-span-1 aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-4 md:p-6 group lg:translate-y-8 hover:border-monte-gold/30 transition-colors"
                                >
                                    <Shapes className="w-6 h-6 md:w-12 md:h-12 text-monte-gold/60 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] md:text-xs tracking-[.4em] uppercase text-monte-gold font-bold">Humanity</span>
                                    <div className="mt-6 md:mt-8 w-6 h-[1px] bg-monte-gold/20" />
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolled Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-monte-gold/50 to-transparent" />
                </motion.div>
            </section>

            {/* Founder Spotlight */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-24 px-4 md:px-8 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants() as any}
                        className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden shadow-2xl shadow-monte-charcoal/5"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                            alt="Aditya Shingri"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: DUR.cinematic, ease: APPLE_EASE }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <span className="text-xs md:text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">Managing Director</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-monte-charcoal mb-4 md:mb-6">Aditya Shingri</h2>
                        <p className="text-base md:text-lg text-monte-taupe mb-4 md:mb-6 leading-relaxed">
                            &quot;Real estate is not just about land and concrete; it&apos;s about creating ecosystems where families thrive and legacies are built. My vision for SHINGRI Developers is to bring world-class living standards to our roots, blending global design with local sensibilities.&quot;
                        </p>
                        <p className="text-base md:text-lg text-monte-taupe mb-6 md:mb-8 leading-relaxed">
                            With over a decade of experience in urban planning and luxury development, Aditya leads with a philosophy of &apos;Quality First&apos;, ensuring that every project stands as a landmark of excellence.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <a href="#" className="p-2 border border-monte-border rounded-full hover:bg-monte-charcoal hover:border-monte-charcoal hover:text-monte-ivory text-monte-taupe transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 border border-monte-border rounded-full hover:bg-monte-charcoal hover:border-monte-charcoal hover:text-monte-ivory text-monte-taupe transition-colors"><Twitter size={20} /></a>
                            <a href="mailto:adityashingri7@gmail.com" className="p-2 border border-monte-border rounded-full hover:bg-monte-charcoal hover:border-monte-charcoal hover:text-monte-ivory text-monte-taupe transition-colors"><Mail size={20} /></a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Grid */}
            <section className="py-12 md:py-24 px-4 md:px-8 lg:px-24 bg-monte-ivory border-t border-monte-border/20">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-monte-charcoal mb-8 md:mb-16">Leadership Team</h2>
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={revealVariants() as any}
                            className="bg-monte-beige p-6 rounded-[32px] shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left border border-monte-border/30 hover:border-monte-gold/30 cursor-pointer"
                            whileHover={{ y: -10, transition: { ...APPLE_SPRING } }}
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative h-64 w-64 md:h-80 md:w-full mb-6 rounded-full md:rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mx-auto bg-monte-sand">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-monte-charcoal mb-1">{member.name}</h3>
                            <p className="text-xs md:text-sm uppercase tracking-widest text-monte-gold mb-4 font-bold">{member.role}</p>
                            <p className="text-monte-taupe text-sm leading-relaxed">{member.bio}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <Footer />

            {/* Cinematic Member Detail Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-monte-charcoal/60 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ ...APPLE_SPRING, duration: DUR.cinematic }}
                            className="relative w-full max-w-4xl bg-monte-beige rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-monte-charcoal backdrop-blur-md transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                                <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-monte-beige via-transparent to-transparent md:hidden" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: DUR.cinematic, ease: APPLE_EASE }}
                                >
                                    <span className="text-xs md:text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">
                                        {selectedMember.role}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-serif text-monte-charcoal mb-6">
                                        {selectedMember.name}
                                    </h2>
                                    <div className="w-12 h-1 bg-monte-gold/30 mb-8" />
                                    <p className="text-base md:text-lg text-monte-taupe leading-relaxed mb-8 italic">
                                        &quot;{selectedMember.bio}&quot;
                                    </p>

                                    <div className="flex gap-4">
                                        <a href="#" className="p-3 border border-monte-border/60 rounded-full hover:bg-monte-charcoal hover:text-monte-ivory transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="p-3 border border-monte-border/60 rounded-full hover:bg-monte-charcoal hover:text-monte-ivory transition-all">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="p-3 border border-monte-border/60 rounded-full hover:bg-monte-charcoal hover:text-monte-ivory transition-all">
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
