"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { MoveRight, Phone, Mail, MapPin, CheckCircle2, MessageCircle, Radio, Target, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { APPLE_EASE, APPLE_SPRING, DUR, revealVariants, staggerContainer } from "@/lib/motion";

const inputClass = `
    w-full bg-slate-50/30 border border-[#A67C52]/40 rounded-2xl px-6 py-5
    text-monte-text-primary placeholder:text-transparent text-base
    focus:outline-none focus:border-monte-gold focus:bg-white focus:ring-4 focus:ring-monte-gold/5
    transition-all duration-500 shadow-[0_2px_4px_rgba(0,0,0,0.01)] peer
`;

const labelClass = `
    absolute left-6 top-5 text-monte-text-secondary/60 text-base transition-all duration-300 pointer-events-none
    peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-monte-text-secondary/60
    peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-monte-gold
    peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-monte-text-secondary/60
`;

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;
        const whatsappMessage = `*New High-Valued Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
        window.open(`https://wa.me/918762891055?text=${whatsappMessage}`, "_blank");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    const contactDetails = [
        { icon: MapPin, label: "Visit Us", value: "Tarnal Pete, Subhas Road, Betageri-Gadag, 582102, Karnataka" },
        { icon: Phone, label: "Call Us", value: "+91 87628 91055", href: "tel:+918762891055" },
        { icon: Mail, label: "Email Us", value: "adityashingri7@gmail.com", href: "mailto:adityashingri7@gmail.com" },
    ];

    return (
        <main className="bg-monte-white min-h-screen">

            {/* ═══ HERO: THE GOLDEN GATEWAY ═══ */}
            <section className="relative min-h-[100vh] flex items-center pt-24 md:pt-28 pb-12 overflow-hidden bg-[#060606]">

                {/* Immersive Media Backdrop */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                        alt="Architectural Excellence"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Deep Cinematic Overlays */}
                    <div className="absolute inset-0 bg-[#060606]/80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent" />
                </div>

                {/* Animated Light Source Effect */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-monte-gold/5 blur-[120px] rounded-full z-0 pointer-events-none"
                />

                <div className="relative z-10 w-full max-w-[1440px] xl:max-w-[1500px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 h-full">

                    {/* ── LEFT content block: Connection Protocol ── */}
                    <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="w-8 h-[1px] bg-monte-gold" />
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-monte-gold">
                                    Gateway to Heritage
                                </span>
                            </div>

                            <h1 className="font-serif leading-[0.9] tracking-tight text-white mb-8 md:mb-12">
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className="block text-monte-beige/40 text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
                                >
                                    Let&apos;s Build
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="block text-monte-beige text-5xl sm:text-6xl md:text-7xl xl:text-8xl -mt-2 md:-mt-4"
                                >
                                    Legacy.
                                </motion.span>
                            </h1>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 pl-1">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    className="flex flex-col items-center lg:items-start"
                                >
                                    <span className="text-2xl md:text-3xl font-serif text-monte-gold italic mb-1">24h</span>
                                    <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">Response Protocol</span>
                                </motion.div>
                                <div className="w-[1px] h-10 bg-white/10 hidden md:block" />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="flex flex-col items-center lg:items-start"
                                >
                                    <span className="text-2xl md:text-3xl font-serif text-monte-gold italic mb-1">Strictly</span>
                                    <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">Confidential</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── RIGHT visual block: The Contact Monolith ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="relative w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0 h-full flex items-center"
                    >
                        <div className="w-full bg-[#080808]/40 backdrop-blur-3xl border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col gap-8 md:gap-10 relative overflow-hidden group">

                            {/* Accent Light Ray */}
                            <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-monte-gold/10 blur-[60px] rounded-full group-hover:bg-monte-gold/15 transition-colors duration-700" />

                            {/* Monolith Header */}
                            <div className="relative z-10 flex flex-col items-center lg:items-start gap-2">
                                <span className="text-[10px] tracking-[0.4em] uppercase text-monte-gold font-bold">Inquiry Pathways</span>
                                <div className="h-[2px] w-12 bg-monte-gold" />
                            </div>

                            {/* Contact Items Stack */}
                            <div className="relative z-10 flex flex-col gap-8 md:gap-10">
                                {[
                                    { icon: Target, title: "Private Suite", subtitle: "Bespoke Consultations" },
                                    { icon: Radio, title: "Global Access", subtitle: "24/7 Digital Concierge" },
                                    { icon: MessageCircle, title: "Priority Line", subtitle: "Direct Partner Access" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + (idx * 0.1) }}
                                        className="flex items-center gap-6 group/item cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-monte-gold group-hover/item:bg-monte-gold group-hover/item:text-black transition-all duration-500">
                                            <item.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-white font-serif tracking-wide group-hover/item:text-monte-gold transition-colors">{item.title}</span>
                                            <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">{item.subtitle}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Scroll Indicator (Hero context) */}
                            <div className="relative z-10 pt-4 flex items-center gap-4">
                                <div className="flex-1 h-[1px] bg-white/5" />
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll to Explore</span>
                                <div className="flex-1 h-[1px] bg-white/5" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ SPLIT LAYOUT CONTACT SECTION ═══ */}
            <section className="pt-24 md:pt-32 pb-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-white relative">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                        {/* LEFT: INFORMATION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={revealVariants() as any}
                            className="flex flex-col gap-12 sticky top-32"
                        >
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-serif text-monte-text-primary leading-[1.05]">
                                    Let&apos;s Begin<br />Your Journey.
                                </h2>
                                <div className="w-16 h-[2px] bg-monte-gold" />
                                <p className="text-xl text-monte-text-secondary max-w-md font-light">
                                    Private consultations tailored to your vision. Whether you&apos;re looking to invest or build your dream home, we&apos;re here to guide you.
                                </p>
                            </div>

                            <div className="space-y-10 py-8">
                                {contactDetails.map((detail, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-monte-sand/50 flex items-center justify-center text-monte-gold transition-colors duration-300 group-hover:bg-monte-gold group-hover:text-white shrink-0">
                                            <detail.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-xs font-bold tracking-[0.2em] text-monte-text-secondary uppercase mb-1">{detail.label}</span>
                                            {detail.href ? (
                                                <a href={detail.href} className="text-lg md:text-xl font-medium text-monte-text-primary hover:text-monte-gold transition-colors">
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg md:text-xl font-medium text-monte-text-primary max-w-xs">{detail.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-l-2 border-monte-gold/30 pl-8 py-2 mt-4">
                                <p className="text-2xl font-serif text-monte-text-primary/80 leading-relaxed">
                                    &ldquo;Every great home begins with a single conversation.&rdquo;
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT: PREMIUM FORM CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: APPLE_EASE }}
                            className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-monte-border relative overflow-hidden"
                        >
                            {/* Gold Glow Top */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-monte-gold/50 to-transparent opacity-50" />

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-20 text-center gap-6"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-monte-gold/10 flex items-center justify-center text-monte-gold mb-2">
                                            <CheckCircle2 size={40} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-4xl font-serif text-monte-text-primary">Inquiry Sent</h3>
                                        <p className="text-monte-text-secondary max-w-xs text-lg">We&apos;ve received your request and will be in touch strictly within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col gap-8"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={inputClass}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="name" className={labelClass}>Full Name</label>
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className={inputClass}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder=" "
                                            />
                                            <label htmlFor="email" className={labelClass}>Email Address</label>
                                        </div>

                                        <div className="relative group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className={`${inputClass} min-h-[160px] resize-none`}
                                                placeholder=" "
                                            />
                                            <label htmlFor="message" className={labelClass}>Tell us about your requirements...</label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="group relative w-full bg-monte-gold text-white py-6 rounded-2xl font-bold tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)]"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                Send Inquiry
                                                <MoveRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
                                            </span>
                                            {/* Button Sweep Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </button>

                                        <p className="text-center text-xs text-monte-text-secondary/40 flex items-center justify-center gap-2">
                                            <svg className="w-3 h-3 text-monte-gold/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                            Your details remain strictly confidential.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section - Clean */}
            <section className="h-[400px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://maps.google.com/maps?q=Tarnal%20Pete%2C%20Subhas%20Road%2C%20Betageri-Gadag%20582102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            <Footer />
        </main>
    );
}
