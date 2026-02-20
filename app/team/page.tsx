"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

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
    return (
        <main className="bg-monte-beige min-h-screen">

            {/* ═══ HERO: CREATIVE VISIONARIES BENTO ═══ */}
            <section className="relative min-h-[110dvh] lg:min-h-[105dvh] pt-32 pb-20 md:pt-40 md:pb-24 flex items-center overflow-hidden bg-[#070707]">

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
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="container-global relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* ── LEFT: TYPOGRAPHY ── */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-center">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "3.5rem" }}
                                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                                className="h-[2px] mb-8 bg-monte-gold/60"
                            />

                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block text-monte-gold"
                            >
                                Human-Centric Leadership
                            </motion.span>

                            <div className="relative mb-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                    className="font-serif leading-[1.05]"
                                >
                                    <span className="block text-[14vw] sm:text-[10vw] lg:text-7xl xl:text-8xl text-white">
                                        Meet the
                                    </span>
                                    <span className="block text-[14vw] sm:text-[10vw] lg:text-7xl xl:text-8xl mt-2 text-monte-gold/90 font-light italic">
                                        Visionaries
                                    </span>
                                </motion.h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.8 }}
                                className="text-base md:text-xl text-white/40 max-w-lg leading-relaxed mb-12 font-light"
                            >
                                The architects of ambition, shaping India&apos;s luxury real estate landscape with precision, heart, and heritage.
                            </motion.p>

                            {/* Refined Stats Row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="flex items-center gap-12"
                            >
                                <div className="group cursor-default">
                                    <p className="text-3xl md:text-4xl font-serif text-monte-gold mb-1 transition-transform duration-500 group-hover:-translate-y-1">15+</p>
                                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-bold group-hover:text-monte-gold/50 transition-colors">Design Experts</p>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10" />
                                <div className="group cursor-default">
                                    <p className="text-3xl md:text-4xl font-serif text-monte-gold mb-1 transition-transform duration-500 group-hover:-translate-y-1">30+</p>
                                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-bold group-hover:text-monte-gold/50 transition-colors">Years of Heritage</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* ── RIGHT: CREATIVE BENTO MONTAGE ── */}
                        <div className="w-full lg:w-[55%] h-[500px] sm:h-[600px] md:h-[750px] relative mt-8 lg:mt-0">
                            {/* Bento Grid Container - Optimized for mobile/desktop */}
                            <div className="grid grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 gap-3 md:gap-4 h-full">

                                {/* Item 1: Large Featured Member (Rohit) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                                    className="col-span-2 lg:col-span-8 lg:row-span-7 relative rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-2xl"
                                >
                                    <Image
                                        src={teamMembers[0].image}
                                        alt={teamMembers[0].name}
                                        fill
                                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                                        <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-monte-gold uppercase mb-1 md:mb-2 font-bold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 italic">{teamMembers[0].role}</p>
                                        <h3 className="text-xl md:text-3xl font-serif text-white">{teamMembers[0].name}</h3>
                                    </div>
                                </motion.div>

                                {/* Item 2: Vertical Profile (Priya) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                                    className="col-span-1 lg:col-span-4 lg:row-span-8 relative rounded-2xl md:rounded-[2rem] overflow-hidden group"
                                >
                                    <Image
                                        src={teamMembers[1].image}
                                        alt={teamMembers[1].name}
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-monte-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                                        <p className="text-[8px] md:text-[9px] tracking-[0.2em] text-white/60 uppercase mb-1">{teamMembers[1].role}</p>
                                        <h3 className="text-lg md:text-xl font-serif text-white">{teamMembers[1].name}</h3>
                                    </div>
                                </motion.div>

                                {/* Item 3: Wide Bottom (Amit) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                                    className="col-span-1 lg:col-span-7 lg:row-span-5 relative rounded-2xl md:rounded-[2rem] overflow-hidden group"
                                >
                                    <Image
                                        src={teamMembers[2].image}
                                        alt={teamMembers[2].name}
                                        fill
                                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-50" />
                                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                                        <p className="text-[8px] md:text-[9px] tracking-[0.2em] text-white/60 uppercase mb-1">{teamMembers[2].role}</p>
                                        <h3 className="text-lg md:text-xl font-serif text-white">{teamMembers[2].name}</h3>
                                    </div>
                                </motion.div>

                                {/* Item 4: Detail / Abstract Square */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="hidden sm:block lg:col-span-5 lg:row-span-4 relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm group"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop"
                                        alt="Architecture"
                                        fill
                                        className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <p className="text-[8px] md:text-[10px] tracking-[0.4em] text-monte-gold uppercase mb-1 md:mb-2">Since</p>
                                            <p className="text-xl md:text-2xl font-serif text-white">1995</p>
                                        </div>
                                    </div>
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
            <section className="py-12 md:py-24 px-4 md:px-8 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
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
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-monte-beige p-6 rounded-[32px] shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left border border-monte-border/30 hover:border-monte-gold/30"
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
                </div>
            </section>

            <Footer />
        </main>
    );
}
