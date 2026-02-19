"use client";

import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

import { allProjects } from "@/data/projects";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function PropertyGrid() {
    return (
        <section className="bg-white py-16 md:py-24 border-b border-monte-border">
            <div className="container-global">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {allProjects.map((prop, index) => (
                        <motion.div key={index} variants={item}>
                            <PropertyCard property={prop} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
