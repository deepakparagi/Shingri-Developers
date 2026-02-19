"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { MoveRight, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const inputClass = `
    w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-5
    text-monte-text-primary placeholder:text-transparent text-base
    focus:outline-none focus:border-monte-gold focus:ring-1 focus:ring-monte-gold
    transition-all duration-300 shadow-sm peer
`;

const labelClass = `
    absolute left-5 top-5 text-monte-text-secondary text-base transition-all duration-300 pointer-events-none
    peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-monte-text-secondary
    peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-monte-gold
    peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-monte-text-secondary
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

            {/* ═══ HERO: STABLE & SAFE ═══ */}
            <section className="relative min-h-screen pt-32 flex items-center justify-center overflow-hidden bg-[#060606]">

                {/* Z-0: Background Effects */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    style={{ background: "radial-gradient(ellipse 60% 55% at 50% 55%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
                />

                {/* Z-10: Content Container */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto pb-24 select-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="flex flex-col items-center gap-6"
                    >
                        <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-monte-gold/90">
                            Get In Touch
                        </span>

                        <h1 className="font-serif text-white leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-9xl">
                            Let&apos;s Build<br />
                            <span className="text-monte-gold">Legacy.</span>
                        </h1>

                        <p className="text-white/40 max-w-lg mt-8 text-lg leading-relaxed">
                            Our team responds within 24 hours. Let&apos;s discuss your vision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══ SPLIT LAYOUT CONTACT SECTION ═══ */}
            <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-white relative">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                        {/* LEFT: INFORMATION */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: EASE }}
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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                            className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden"
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
                                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
                                            <CheckCircle2 size={40} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-4xl font-serif text-monte-text-primary">Message Sent</h3>
                                        <p className="text-monte-text-secondary max-w-xs text-lg">We&apos;ve received your inquiry and will be in touch strictly within 24 hours.</p>
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
                                            className="group relative w-full bg-monte-black text-white py-5 rounded-xl font-medium tracking-wide overflow-hidden shadow-lg shadow-monte-black/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:bg-monte-gold"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                Send Inquiry
                                                <MoveRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </button>

                                        <p className="text-center text-xs text-monte-text-caption flex items-center justify-center gap-2 opacity-60">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
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
