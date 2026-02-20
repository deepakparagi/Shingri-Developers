"use client";

import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

import { allProjects } from "@/data/projects";

// ── Entrance Constants — Standardized ────────────────────────────
const containerVars = staggerContainer(0.1, 0.2);
const itemVars = fadeUp;

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
