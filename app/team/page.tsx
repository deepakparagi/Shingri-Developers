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
        <main className="bg-monte-white min-h-screen">

            {/* Hero Section */}
            <section className="pt-28 md:pt-48 pb-12 md:pb-24 px-4 md:px-8 lg:px-24 bg-monte-black text-white text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 md:mb-6"
                >
                    Meet the Visionaries
                </motion.h1>
                <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                    The minds and hands crafting the future of luxury living in India.
                </p>
            </section>

            {/* Founder Spotlight */}
            <section className="py-12 md:py-24 px-4 md:px-8 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
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
                        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-2 block">Managing Director</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-monte-black mb-4 md:mb-6">Aditya Shingri</h2>
                        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                            &quot;Real estate is not just about land and concrete; it&apos;s about creating ecosystems where families thrive and legacies are built. My vision for SHINGRI Developers is to bring world-class living standards to our roots, blending global design with local sensibilities.&quot;
                        </p>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                            With over a decade of experience in urban planning and luxury development, Aditya leads with a philosophy of &apos;Quality First&apos;, ensuring that every project stands as a landmark of excellence.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-monte-black hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-monte-black hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="mailto:adityashingri7@gmail.com" className="p-2 border border-gray-300 rounded-full hover:bg-monte-black hover:text-white transition-colors"><Mail size={20} /></a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Grid */}
            <section className="py-12 md:py-24 px-4 md:px-8 lg:px-24 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-monte-black mb-8 md:mb-16">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            <div className="relative h-64 w-64 md:h-80 md:w-full mb-6 rounded-full md:rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mx-auto">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-monte-black mb-1">{member.name}</h3>
                            <p className="text-xs md:text-sm uppercase tracking-widest text-monte-gold mb-4">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
