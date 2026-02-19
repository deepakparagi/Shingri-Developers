"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Check, Star, Award, Users, Building2, MapPin } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-monte-beige min-h-screen">


            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-24 md:pb-32 px-4 md:px-8 lg:px-24 flex flex-col items-center text-center">
                <div className="max-w-screen-2xl mx-auto w-full flex flex-col items-center">
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
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-monte-charcoal leading-tight tracking-tight"
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
                            <span className="text-2xl md:text-4xl italic text-monte-gold/80 font-serif tracking-wide block">Since 1995</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Sustainability & Innovation - Replaces Founder Spotlight */}
            <section className="px-4 md:px-8 lg:px-24 pb-24">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl shadow-monte-charcoal/5"
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
                            <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">Our Commitment</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-monte-charcoal mb-6">Sustainability & Innovation</h2>
                            <p className="text-lg text-monte-taupe mb-6 leading-relaxed">
                                At SHINGRI Developers, we recognize that the future of real estate lies in harmony with nature. Our projects are designed with a deep commitment to environmental stewardship, integrating renewable energy, rainwater harvesting, and green spaces into the very fabric of our communities.
                            </p>
                            <p className="text-lg text-monte-taupe mb-8 leading-relaxed">
                                We leverage cutting-edge construction technologies to minimize our carbon footprint while maximizing durability and comfort. From smart home automation to eco-friendly materials, every decision is made to ensure a healthier planet for generations to come.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-monte-sand rounded-full text-monte-charcoal"><Building2 size={24} /></div>
                                    <span className="font-medium text-monte-charcoal">Green Certified</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-monte-sand rounded-full text-monte-charcoal"><Users size={24} /></div>
                                    <span className="font-medium text-monte-charcoal">Community Centric</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expanding Horizons (Gadag, Hubli, Dharwad) */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-ivory text-monte-charcoal">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div className="md:w-1/2">
                            <span className="text-sm uppercase tracking-widest text-monte-gold mb-2 block font-bold">Our Footprint</span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-monte-charcoal">Expanding Horizons</h2>
                            <p className="text-monte-taupe text-lg leading-relaxed">
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
                                    className="bg-monte-beige border border-monte-border p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all cursor-default"
                                >
                                    <div className="w-12 h-12 bg-monte-gold rounded-full flex items-center justify-center mx-auto mb-4 text-monte-charcoal">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-xl font-serif mb-2 text-monte-charcoal">{loc.city}</h3>
                                    <p className="text-xs text-monte-taupe uppercase tracking-wide">{loc.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-beige">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
                                alt="Community Impact"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-monte-charcoal/80 to-transparent p-8 flex flex-col justify-end text-white">
                                <h3 className="text-3xl font-serif mb-2">Building Communities</h3>
                                <p className="text-white/90">More than just homes, we build safe havens for families to grow.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-sm uppercase tracking-widest text-monte-taupe mb-2 block font-bold">Social Responsibility</span>
                            <h2 className="text-4xl font-serif text-monte-charcoal mb-6">Impact Beyond Construction</h2>
                            <p className="text-lg text-monte-taupe mb-6 leading-relaxed">
                                We believe that a developer's responsibility extends beyond the boundary walls of their projects. Through various initiatives, we contribute to local infrastructure development, support educational programs, and ensure that our growth translates into prosperity for the entire region.
                            </p>
                            <div className="grid grid-cols-2 gap-8 border-t border-monte-border pt-8">
                                {[
                                    { val: "500+", label: "Families Housed" },
                                    { val: "20+", label: "Acres Developed" },
                                    { val: "10k+", label: "Trees Planted" },
                                    { val: "3", label: "Upcoming Townships" },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <h4 className="text-4xl font-serif text-monte-charcoal">{stat.val}</h4>
                                        <p className="text-sm text-monte-taupe mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-ivory text-monte-charcoal text-center border-t border-monte-border/20">
                <h2 className="text-4xl font-serif mb-12 text-monte-charcoal">Awards & Recognition</h2>
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                    {[
                        { icon: Award, title: "Best Luxury Developer", year: "2023" },
                        { icon: Star, title: "Excellence in Design", year: "2024" },
                        { icon: Users, title: "Customer Choice Award", year: "2022" },
                        { icon: Building2, title: "Green Building Certification", year: "IGBC Gold" }
                    ].map((award, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 group w-36 sm:w-auto">
                            <div className="w-20 h-20 bg-monte-sand rounded-full flex items-center justify-center text-monte-gold group-hover:bg-monte-gold group-hover:text-monte-charcoal transition-colors duration-500">
                                <award.icon size={40} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-monte-charcoal">{award.title}</h3>
                                <p className="text-monte-taupe">{award.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 px-4 md:px-8 lg:px-24 bg-monte-beige border-t border-monte-border/20">
                <h2 className="text-4xl font-serif text-center text-monte-charcoal mb-16">Client Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        { text: "Investing with Shingri Developers was the best decision for my portfolio. Their attention to detail and commitment to timelines is unmatched in the region.", author: "Dr. Rajesh Patil", role: "Cardiologist" },
                        { text: "The Royal Enclave is truly a masterpiece. Living here feels like a perpetual vacation. The amenities are world-class and the community is vibrant.", author: "Sneha Kulkarni", role: "Software Architect" }
                    ].map((review, i) => (
                        <div key={i} className="bg-monte-ivory p-8 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative border border-monte-border/30">
                            <div className="text-monte-gold mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" className="inline-block mr-1" />)}
                            </div>
                            <p className="text-monte-charcoal italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-serif text-lg text-monte-charcoal">{review.author}</h4>
                                <p className="text-sm text-monte-taupe uppercase tracking-widest">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
