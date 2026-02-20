"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export default function NotificationIsland() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        const hideTimer = setTimeout(() => setIsVisible(false), 8000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed top-28 md:top-32 left-1/2 -translate-x-1/2 z-[110] pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="pointer-events-auto"
                    >
                        <div className="bg-black/90 text-white backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                            <div className="w-6 h-6 rounded-full bg-monte-gold flex items-center justify-center">
                                <Info size={14} className="text-black" />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                                New Opportunities in Business Bay
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
