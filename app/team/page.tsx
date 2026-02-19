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

            {/* ═══ HERO: HUMAN-CENTRIC LEADERSHIP ═══ */}
            <section className="relative min-h-screen pt-32 flex overflow-hidden bg-[#070707]">

                {/* Ambient glow — left */}
                <div className="pointer-events-none absolute -top-20 left-0 w-[500px] h-[500px] rounded-full bg-[rgba(212,175,55,0.03)] blur-[100px]" />

                {/* ── LEFT: TYPOGRAPHY ── */}
                <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 pb-32 lg:pb-24">

                    {/* Thin gold decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="w-12 h-[1.5px] mb-8 origin-left"
                        style={{ background: "rgba(212,175,55,0.75)" }}
                    />

                    {/* Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-[11px] font-bold tracking-[0.35em] uppercase mb-8 block"
                        style={{ color: "rgba(212,175,55,0.8)" }}
                    >
                        Our People
                    </motion.span>

                    {/* Main heading */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.1, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                            className="font-serif leading-[0.88]"
                        >
                            <span
                                className="block text-[12vw] sm:text-[8vw] lg:text-7xl xl:text-8xl"
                                style={{ color: "#ffffff" }}
                            >
                                Meet the
                            </span>
                            <span
                                className="block text-[12vw] sm:text-[8vw] lg:text-7xl xl:text-8xl mt-1"
                                style={{ color: "rgba(212,175,55,0.88)" }}
                            >
                                Visionaries
                            </span>
                        </motion.h1>
                    </div>

                    {/* Supporting text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.75 }}
                        className="text-base md:text-lg mt-8 max-w-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                        The minds shaping India&apos;s luxury real estate landscape — one landmark at a time.
                    </motion.p>

                    {/* Stat row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center gap-8 mt-12"
                    >
                        <div>
                            <p className="text-2xl font-serif" style={{ color: "rgba(212,175,55,0.85)" }}>15+</p>
                            <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>Experts</p>
                        </div>
                        <div className="w-[1px] h-8" style={{ background: "rgba(255,255,255,0.1)" }} />
                        <div>
                            <p className="text-2xl font-serif" style={{ color: "rgba(212,175,55,0.85)" }}>30+</p>
                            <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>Years</p>
                        </div>
                    </motion.div>
                </div>

                {/* ── RIGHT: PORTRAIT MONTAGE ── */}
                <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden mt-8 lg:mt-0">
                    {/* Gradient: fades left into the dark bg */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#070707] via-[#070707]/30 to-transparent pointer-events-none" />
                    {/* Gradient: fades bottom */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070707]/70 to-transparent pointer-events-none" />

                    {/* 2-column portrait grid — staggered heights */}
                    <div className="absolute inset-0 flex gap-3 p-4 items-stretch">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3 w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.4 }}
                                className="relative flex-[3] rounded-2xl overflow-hidden min-h-0"
                            >
                                <Image src={teamMembers[0].image} alt={teamMembers[0].name} fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs tracking-[0.15em] text-white/50 uppercase">{teamMembers[0].role}</p>
                                    <p className="text-white text-sm font-serif mt-0.5">{teamMembers[0].name}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.65 }}
                                className="relative flex-[2] rounded-2xl overflow-hidden min-h-0"
                            >
                                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Team" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]" />
                            </motion.div>
                        </div>
                        {/* Column 2 — top-offset */}
                        <div className="flex flex-col gap-3 w-1/2 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.55 }}
                                className="relative flex-[2] rounded-2xl overflow-hidden min-h-0"
                            >
                                <Image src={teamMembers[1].image} alt={teamMembers[1].name} fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs tracking-[0.15em] text-white/50 uppercase">{teamMembers[1].role}</p>
                                    <p className="text-white text-sm font-serif mt-0.5">{teamMembers[1].name}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.75 }}
                                className="relative flex-[3] rounded-2xl overflow-hidden min-h-0"
                            >
                                <Image src={teamMembers[2].image} alt={teamMembers[2].name} fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs tracking-[0.15em] text-white/50 uppercase">{teamMembers[2].role}</p>
                                    <p className="text-white text-sm font-serif mt-0.5">{teamMembers[2].name}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
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
