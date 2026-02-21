"use client";

import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import { APPLE_EASE, APPLE_SPRING, fadeUp, staggerContainer } from "@/lib/motion";

import { allProjects } from "@/data/projects";

// ── Entrance Constants — Standardized ────────────────────────────
const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVars = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...APPLE_SPRING },
    },
};

export default function PropertyGrid() {
    return (
        <section className="bg-white py-16 md:py-24 border-b border-monte-border">
            <div className="container-global">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {allProjects.map((prop, index) => (
                        <motion.div key={index} variants={itemVars}>
                            <PropertyCard property={prop} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
