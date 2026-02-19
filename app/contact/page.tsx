"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { MoveRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass = `
    w-full bg-white border border-[#DDD8CF] rounded-2xl px-5 py-4
    text-[#1A1A1A] placeholder:text-[#9E9890] text-base
    focus:outline-none focus:border-[#C6A75E] focus:ring-4 focus:ring-[#C6A75E]/10
    transition-all duration-300 shadow-sm hover:border-[#9E9890]
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
        <main className="bg-monte-beige min-h-screen">

            <section className="pt-32 md:pt-48 pb-16 px-4 md:px-8 lg:px-24">
                <div className="max-w-screen-2xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20"
                    >
                        <span className="text-xs uppercase tracking-[0.25em] text-monte-gold font-bold mb-3 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-monte-charcoal leading-tight">
                            Let&apos;s Build<br />
                            <span className="italic text-monte-charcoal/60">Something Together</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                        {/* Left — Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="lg:col-span-2 space-y-10"
                        >
                            <p className="text-lg text-monte-taupe leading-relaxed">
                                Interested in our properties? Our sales team is ready for a private consultation — in person or online.
                            </p>

                            <div className="space-y-8">
                                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-5">
                                        <div className="w-11 h-11 rounded-2xl bg-monte-sand flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Icon size={18} className="text-monte-gold" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-monte-taupe/60 font-bold mb-1">{label}</p>
                                            {href ? (
                                                <a href={href} className="text-monte-charcoal hover:text-monte-gold transition-colors text-base leading-snug">
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-monte-charcoal text-base leading-snug">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative quote */}
                            <div className="border-l-2 border-monte-gold pl-6 py-2">
                                <p className="font-serif text-xl text-monte-charcoal/70 italic leading-relaxed">
                                    &ldquo;Every great home begins with a single conversation.&rdquo;
                                </p>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-[#F7F5F0] border border-[#DDD8CF]/50 rounded-[32px] p-8 md:p-12 shadow-xl shadow-black/5">

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center py-16 text-center gap-5"
                                        >
                                            <CheckCircle2 size={56} className="text-monte-gold" strokeWidth={1.5} />
                                            <h3 className="text-3xl font-serif text-monte-charcoal">Message Sent!</h3>
                                            <p className="text-monte-taupe max-w-xs">We&apos;ve received your inquiry and will be in touch shortly.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onSubmit={handleSubmit}
                                            className="flex flex-col gap-5"
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[10px] uppercase tracking-[0.2em] text-monte-taupe/70 font-bold pl-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Rahul Sharma"
                                                        className={inputClass}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[10px] uppercase tracking-[0.2em] text-monte-taupe/70 font-bold pl-1">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="+91 98765 43210"
                                                        className={inputClass}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-monte-taupe/70 font-bold pl-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="rahul@example.com"
                                                    className={inputClass}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-monte-taupe/70 font-bold pl-1">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="I am interested in a 3 BHK luxury apartment in Hubli..."
                                                    className={`${inputClass} h-36 resize-none`}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="group mt-2 w-full bg-[#1A1A1A] hover:bg-[#C6A75E] text-white py-5 px-8 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-lg shadow-black/15 hover:shadow-[#C6A75E]/25 hover:-translate-y-0.5 cursor-pointer"
                                            >
                                                <span className="font-medium tracking-wide">Send via WhatsApp</span>
                                                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                                                    <MoveRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </button>

                                            <p className="text-center text-xs text-monte-taupe/50 mt-1">
                                                Your details are kept strictly confidential.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[300px] md:h-[500px] w-full bg-monte-sand/20 relative grayscale hover:grayscale-0 transition-all duration-700 border-t border-monte-border/20">
                <iframe
                    src="https://maps.google.com/maps?q=Tarnal%20Pete%2C%20Subhas%20Road%2C%20Betageri-Gadag%20582102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}
