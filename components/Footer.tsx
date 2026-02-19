"use client";

import { ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-monte-ivory text-monte-charcoal pt-16 md:pt-24 pb-12 px-4 md:px-8 lg:px-24 overflow-hidden border-t border-monte-border/30">
            <div className="max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24"
                >

                    {/* Brand Column */}
                    <div>
                        <div className="relative h-20 w-48 mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="SHINGRI Developers"
                                fill
                                className="object-contain object-left filter invert brightness-0 contrast-125"
                            />
                        </div>
                        <p className="text-monte-taupe mb-6 max-w-xs leading-relaxed">
                            Redefining luxury living in India. Exclusive properties for the discerning investor.
                        </p>
                    </div>
                    {/* Lead Gen Form */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 md:mb-12 leading-none text-monte-charcoal">
                            Build Your Future <br /> With Us
                        </h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const name = formData.get('name');
                            const email = formData.get('email');
                            const phone = formData.get('phone');
                            const message = `New Inquiry.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`;
                            window.open(`https://wa.me/918762891055?text=${message}`, '_blank');
                        }} className="flex flex-col gap-6 max-w-md">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="bg-monte-beige/50 border-b border-monte-border py-4 px-2 focus:outline-none focus:border-monte-gold focus:bg-monte-beige transition-colors placeholder:text-monte-taupe/50 text-monte-charcoal w-full h-12"
                            />
                            <div className="flex flex-col sm:flex-row gap-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="bg-monte-beige/50 border-b border-monte-border py-4 px-2 w-full h-12 focus:outline-none focus:border-monte-gold focus:bg-monte-beige transition-colors placeholder:text-monte-taupe/50 text-monte-charcoal"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                    className="bg-monte-beige/50 border-b border-monte-border py-4 px-2 w-full h-12 focus:outline-none focus:border-monte-gold focus:bg-monte-beige transition-colors placeholder:text-monte-taupe/50 text-monte-charcoal"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="self-start px-8 py-4 bg-monte-gold text-monte-charcoal rounded-full mt-6 font-medium hover:bg-monte-gold-hover transition-colors flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md w-full sm:w-auto justify-center sm:justify-start"
                            >
                                Send Request <ArrowRight size={18} />
                            </motion.button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-monte-border/20 shadow-inner">
                        <iframe
                            src="https://maps.google.com/maps?q=Tarnal%20Pete%2C%20Subhas%20Road%2C%20Betageri-Gadag%20582102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </motion.div>


                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-monte-border/30 pt-12">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-serif mb-2 text-monte-charcoal">Navigation</h4>
                        <Link href="/" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Home</Link>
                        <Link href="/projects" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Projects</Link>
                        <Link href="/about" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">About Us</Link>
                        <Link href="/contact" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-serif mb-2 text-monte-charcoal">Our Projects</h4>
                        <Link href="/projects" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Ongoing</Link>
                        <Link href="/projects" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Upcoming</Link>
                        <Link href="/projects" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">Completed</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-serif mb-2 text-monte-charcoal">Visit Us</h4>
                        <p className="text-sm text-monte-taupe leading-relaxed">
                            Tarnal Pete, Subhas Road,<br />
                            Betageri-Gadag, 582102
                        </p>
                        <a href="tel:+918762891055" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">+91 87628 91055</a>
                        <a href="mailto:adityashingri7@gmail.com" className="text-sm text-monte-taupe hover:text-monte-gold transition-colors">adityashingri7@gmail.com</a>
                    </div>


                </div>


                <div className="mt-12 pt-8 border-t border-monte-border/30 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-sm text-monte-taupe/60">
                    <p>© 2026 SHINGRI Developers. All rights reserved.</p>
                    <a
                        href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-monte-gold transition-colors duration-300"
                    >
                        Developed by <span className="font-medium text-monte-taupe/80 hover:text-monte-gold">Deepak Paragi</span>
                    </a>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-monte-charcoal transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-monte-charcoal transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
