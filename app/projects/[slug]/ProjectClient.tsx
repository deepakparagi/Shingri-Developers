"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";

export default function ProjectClient({ slug }: { slug: string }) {
    const project = allProjects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-monte-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors underline">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-monte-white min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={20} /> Back to Projects
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 !text-white">{project.title}</h1>
                        <div className="flex items-center gap-2 text-xl md:text-2xl !text-white/90">
                            <MapPin size={24} />
                            {project.location}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview & Key Stats */}
            <section className="py-24 px-4 md:px-8 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-serif text-monte-black mb-8">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            {project.description}
                        </p>

                        <h3 className="text-2xl font-serif text-monte-black mb-6">Amenities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.amenities?.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-6 h-6 rounded-full bg-monte-black/5 flex items-center justify-center text-monte-black">
                                        <Check size={14} />
                                    </span>
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-100 sticky top-32">
                            <div className="space-y-8">
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                    <p className="text-2xl font-serif text-monte-black">{project.status}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Price</p>
                                    <p className="text-2xl font-serif text-monte-black">{project.price}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Configuration</p>
                                    <p className="text-2xl font-serif text-monte-black">{project.beds} Beds</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Area</p>
                                    <p className="text-2xl font-serif text-monte-black">{project.area}</p>
                                </div>
                                <div className="pt-8 border-t border-gray-100">
                                    <Link href="/contact" className="block w-full py-4 bg-monte-black text-white text-center rounded-full hover:bg-black/90 transition-colors uppercase tracking-widest text-sm">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white px-4 md:px-8 lg:px-24">
                <h2 className="text-3xl font-serif text-monte-black mb-12">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery?.map((img, index) => (
                        <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                            <Image
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
