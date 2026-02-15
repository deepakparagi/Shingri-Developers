"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

// Placeholder colors acting as "images" for now
const products = [
    { id: 1, name: "Silver", color: "#e3e4e5" },
    { id: 2, name: "Space Black", color: "#2e2c2e" },
    { id: 3, name: "Starlight", color: "#f0f1ec" },
];

export default function ProductGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(1);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setZoom(1); // Reset zoom on slide change
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
        setZoom(1);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Take a closer look.</h2>

                <div className="relative h-[500px] flex items-center justify-center bg-gray-50 rounded-3xl overflow-hidden">

                    {/* Main Product Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, scale: zoom }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20%] shadow-2xl relative flex items-center justify-center bg-gradient-to-br from-white to-gray-200"
                            style={{ backgroundColor: products[currentIndex].color }}
                        >
                            <span className="text-2xl font-bold text-gray-400 opacity-50">{products[currentIndex].name}</span>
                            {/* Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50 rounded-[20%]" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-gray-200/50 backdrop-blur-md hover:bg-gray-300 transition-colors flex items-center justify-center pointer-events-auto shadow-sm group"
                        >
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-gray-200/50 backdrop-blur-md hover:bg-gray-300 transition-colors flex items-center justify-center pointer-events-auto shadow-sm group"
                        >
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Zoom Controls */}
                    <div className="absolute bottom-8 right-8 flex gap-2">
                        <button
                            onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all"
                        >
                            <Minus size={18} />
                        </button>
                        <button
                            onClick={() => setZoom(Math.min(2, zoom + 0.2))}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all"
                        >
                            <Plus size={18} />
                        </button>
                    </div>

                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-8 gap-4">
                    {products.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => { setCurrentIndex(i); setZoom(1); }}
                            className={`w-4 h-4 rounded-full transition-all duration-300 border border-gray-300 ${currentIndex === i ? "scale-125 shadow-md" : "opacity-50 hover:opacity-100"}`}
                            style={{ backgroundColor: p.color }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
