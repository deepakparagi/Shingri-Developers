"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Check, Star, Award, Users, Building2, MapPin } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-monte-white min-h-screen">


            {/* Hero Section */}
            <section className="pt-48 md:pt-64 pb-32 px-4 md:px-8 lg:px-24 flex flex-col items-center text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="overflow-hidden pb-4 md:pb-8 -mb-4 md:-mb-8">
                        <motion.h1
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        ease: [0.33, 1, 0.68, 1],
                                        duration: 1.2
                                    }
                                }
                            }}
                            className="text-6xl sm:text-8xl md:text-9xl font-serif text-monte-black leading-tight tracking-tight"
                        >
                            Building Legacy
                        </motion.h1>
                    </div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }
                        }}
                        className="mt-2 md:mt-4"
                    >
                        <span className="text-2xl md:text-4xl italic text-gray-400 font-serif tracking-wide block">Since 1995</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* Sustainability & Innovation - Replaces Founder Spotlight */}
            <section className="px-4 md:px-8 lg:px-24 pb-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
                            alt="Sustainable Architecture"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block">Our Commitment</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-monte-black mb-6">Sustainability & Innovation</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At SHINGRI Developers, we recognize that the future of real estate lies in harmony with nature. Our projects are designed with a deep commitment to environmental stewardship, integrating renewable energy, rainwater harvesting, and green spaces into the very fabric of our communities.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We leverage cutting-edge construction technologies to minimize our carbon footprint while maximizing durability and comfort. From smart home automation to eco-friendly materials, every decision is made to ensure a healthier planet for generations to come.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-monte-black/5 rounded-full text-monte-black"><Building2 size={24} /></div>
                                <span className="font-medium">Green Certified</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-monte-black/5 rounded-full text-monte-black"><Users size={24} /></div>
                                <span className="font-medium">Community Centric</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Expanding Horizons (Gadag, Hubli, Dharwad) */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-black text-white">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="md:w-1/2">
                        <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block">Our Footprint</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Expanding Horizons</h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            From our roots in Belgaum, we are actively expanding our legacy across North Karnataka. We are bringing SHINGRI's signature blend of luxury and community living to new cities, creating landmarks that redefine the skyline.
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
                                whileHover={{ y: -5 }}
                                className="bg-white/10 border border-white/20 p-6 rounded-xl text-center backdrop-blur-sm hover:bg-white/20 transition-all cursor-default"
                            >
                                <div className="w-12 h-12 bg-monte-gold rounded-full flex items-center justify-center mx-auto mb-4 text-monte-black">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-serif mb-2">{loc.city}</h3>
                                <p className="text-xs text-white/60 uppercase tracking-wide">{loc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
                            alt="Community Impact"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end text-white">
                            <h3 className="text-3xl font-serif mb-2">Building Communities</h3>
                            <p className="text-white/80">More than just homes, we build safe havens for families to grow.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">Social Responsibility</span>
                        <h2 className="text-4xl font-serif text-monte-black mb-6">Impact Beyond Construction</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We believe that a developer's responsibility extends beyond the boundary walls of their projects. Through various initiatives, we contribute to local infrastructure development, support educational programs, and ensure that our growth translates into prosperity for the entire region.
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                            <div>
                                <h4 className="text-4xl font-serif text-monte-black">500+</h4>
                                <p className="text-sm text-gray-500 mt-1">Families Housed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif text-monte-black">20+</h4>
                                <p className="text-sm text-gray-500 mt-1">Acres Developed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif text-monte-black">10k+</h4>
                                <p className="text-sm text-gray-500 mt-1">Trees Planted</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif text-monte-black">3</h4>
                                <p className="text-sm text-gray-500 mt-1">Upcoming Townships</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-black text-white text-center">
                <h2 className="text-4xl font-serif mb-12">Awards & Recognition</h2>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                    {[
                        { icon: Award, title: "Best Luxury Developer", year: "2023" },
                        { icon: Star, title: "Excellence in Design", year: "2024" },
                        { icon: Users, title: "Customer Choice Award", year: "2022" },
                        { icon: Building2, title: "Green Building Certification", year: "IGBC Gold" }
                    ].map((award, i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-monte-gold">
                                <award.icon size={40} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">{award.title}</h3>
                                <p className="text-white/60">{award.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-gray-50">
                <h2 className="text-4xl font-serif text-center text-monte-black mb-16">Client Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        { text: "Investing with Shingri Developers was the best decision for my portfolio. Their attention to detail and commitment to timelines is unmatched in the region.", author: "Dr. Rajesh Patil", role: "Cardiologist" },
                        { text: "The Royal Enclave is truly a masterpiece. Living here feels like a perpetual vacation. The amenities are world-class and the community is vibrant.", author: "Sneha Kulkarni", role: "Software Architect" }
                    ].map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                            <div className="text-monte-gold mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" className="inline-block mr-1" />)}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-serif text-lg text-monte-black">{review.author}</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
