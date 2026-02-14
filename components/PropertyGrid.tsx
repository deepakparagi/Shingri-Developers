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
        <section className="bg-monte-white py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1800px] mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
