"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white font-medium">

            {/* ── TOP SECTION ── */}
            <div className="container-global py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                >
                    {/* Left: Heading + Form */}
                    <div className="flex flex-col gap-8">
                        {/* Logo */}
                        <div className="relative h-14 w-32">
                            <Image
                                src="/images/logo.png"
                                alt="SHINGRI Developers"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif !text-white leading-tight">
                            Build Your Future<br />With Us
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get("name");
                                const email = formData.get("email");
                                const phone = formData.get("phone");
                                const message = `New Inquiry.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`;
                                window.open(`https://wa.me/918762891055?text=${message}`, "_blank");
                            }}
                            className="flex flex-col gap-5 max-w-md"
                        >
                            <div className="border-b border-white/20">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="bg-transparent w-full py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="border-b border-white/20">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="bg-transparent w-full py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="border-b border-white/20">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        required
                                        className="bg-transparent w-full py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mt-1">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2 bg-white text-black px-7 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-white/90 transition-colors"
                                >
                                    Send Request <ArrowRight size={15} />
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Map */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-72 lg:h-full min-h-[300px]">
                        <iframe
                            src="https://maps.google.com/maps?q=Tarnal%20Pete%2C%20Subhas%20Road%2C%20Betageri-Gadag%20582102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>
            </div>

            {/* ── BOTTOM SECTION: 4-column nav ── */}
            <div className="border-t border-white/10">
                <div className="container-global py-10 md:py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {/* Tagline col */}
                        <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
                            <p className="text-sm font-bold font-serif !text-white leading-relaxed uppercase tracking-widest">
                                SHINGRI Developers
                            </p>
                            <p className="text-sm font-semibold !text-white leading-relaxed">
                                Building tomorrow's landmarks today. Smart properties with strong investment returns across India.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-sm font-bold font-serif !text-white uppercase tracking-widest mb-1">Navigation</h4>
                            <Link href="/" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Home</Link>
                            <Link href="/projects" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Projects</Link>
                            <Link href="/about" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">About Us</Link>
                            <Link href="/contact" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Contact</Link>
                        </div>

                        {/* Projects */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-sm font-bold font-serif !text-white uppercase tracking-widest mb-1">Projects</h4>
                            <Link href="/projects" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Ongoing</Link>
                            <Link href="/projects" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Upcoming</Link>
                            <Link href="/projects" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">Completed</Link>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-sm font-bold font-serif !text-white uppercase tracking-widest mb-1">Contact Us</h4>
                            <p className="text-sm font-semibold !text-white leading-relaxed">
                                Tarnal Pete, Subhas Road,<br />Betageri-Gadag 582102
                            </p>
                            <a href="tel:+918762891055" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">+91 87628 91055</a>
                            <a href="mailto:adityashingri7@gmail.com" className="text-sm font-semibold !text-white hover:text-white/70 transition-colors">adityashingri7@gmail.com</a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                        <p>© 2026 SHINGRI Developers. All rights reserved.</p>
                        <p>
                            Developed by{" "}
                            <a
                                href="https://deepakparagi.github.io/Deepak-Paragi-Portfolio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
                            >
                                Deepak Paragi
                            </a>
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
