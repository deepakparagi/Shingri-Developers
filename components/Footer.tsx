"use client";

import { ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-monte-black text-white pt-16 md:pt-24 pb-12 px-4 md:px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 mb-24">

                {/* Brand Column */}
                <div>
                    <div className="relative h-20 w-48 mb-6">
                        <Image
                            src="/images/logo.png"
                            alt="SHINGRI Developers"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-white/60 mb-6 max-w-xs">
                        Redefining luxury living in India. Exclusive properties for the discerning investor.
                    </p>
                </div>
                {/* Lead Gen Form */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 md:mb-12 leading-none">
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
                    }} className="flex flex-col gap-8 max-w-md">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40 text-white"
                        />
                        <div className="flex gap-8">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="bg-transparent border-b border-white/20 py-4 w-full focus:outline-none focus:border-white transition-colors placeholder:text-white/40 text-white"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                required
                                className="bg-transparent border-b border-white/20 py-4 w-full focus:outline-none focus:border-white transition-colors placeholder:text-white/40 text-white"
                            />
                        </div>
                        <button type="submit" className="self-start px-8 py-3 bg-white text-monte-black rounded-full mt-4 font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer">
                            Send Request <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

                {/* Map */}
                <div className="lg:w-1/2 h-80 lg:h-auto rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
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

            </div>

            <div className="h-[1px] w-full bg-white/10 mb-12" />

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/20 pt-12">
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-serif mb-2">Navigation</h4>
                    <Link href="/" className="text-sm hover:text-white/80 transition-colors">Home</Link>
                    <Link href="/projects" className="text-sm hover:text-white/80 transition-colors">Projects</Link>
                    <Link href="/about" className="text-sm hover:text-white/80 transition-colors">About Us</Link>
                    <Link href="/contact" className="text-sm hover:text-white/80 transition-colors">Contact</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-serif mb-2">Our Projects</h4>
                    <Link href="/projects" className="text-sm hover:text-white/80 transition-colors">Ongoing</Link>
                    <Link href="/projects" className="text-sm hover:text-white/80 transition-colors">Upcoming</Link>
                    <Link href="/projects" className="text-sm hover:text-white/80 transition-colors">Completed</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-serif mb-2">Visit Us</h4>
                    <p className="text-sm text-white/60">
                        Tarnal Pete, Subhas Road,<br />
                        Betageri-Gadag, 582102
                    </p>
                    <a href="tel:+918762891055" className="text-sm text-white/60 hover:text-white transition-colors">+91 87628 91055</a>
                    <a href="mailto:adityashingri7@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">adityashingri7@gmail.com</a>
                </div>


            </div>


            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-white/40">
                <p>© 2024 SHINGRI Developers. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
