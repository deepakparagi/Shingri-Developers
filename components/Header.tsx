"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { allProjects } from "@/data/projects";
import Image from "next/image";
import { EASE, APPLE_EASE, DUR, magneticHover, APPLE_SPRING_STIFF } from "@/lib/motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) setIsSearchOpen(false);
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery("");
            setFilteredProjects(allProjects);
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredProjects(allProjects);
        } else {
            const query = searchQuery.toLowerCase();
            const results = allProjects.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.location.toLowerCase().includes(query) ||
                project.status.toLowerCase().includes(query)
            );
            setFilteredProjects(results);
        }
    }, [searchQuery]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/team", label: "Team" },
        { href: "/contact", label: "Contact" },
    ];

    const pathname = usePathname();

    // Always use the dark glassmorphic look when scrolled or on other pages
    // On Home top (not scrolled), it can be more transparent or same style.
    // User requested "dark black or grey transparent glassmore effect".
    // Let's make it consistent.

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-110%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.45, ease: APPLE_EASE }}
                className={cn(
                    "fixed top-0 left-0 w-full z-[1000] py-3 md:py-4",
                    scrolled
                        ? "glass-dark shadow-[0_4px_32px_rgba(0,0,0,0.55)]"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                {/* Global Container for Alignment */}
                <div className="container-global flex justify-between items-center relative">
                    <div className="flex items-center justify-between gap-8 ml-1">
                        {/* Logo */}
                        {/* Logo — Enhanced for Brand Prominence */}
                        <motion.div {...magneticHover}>
                            <Link href="/" className="relative z-50 flex-shrink-0">
                                <div className="relative h-12 w-36 md:h-16 md:w-48 transition-all duration-300">
                                    <Image
                                        src="/images/logo.png"
                                        alt="SHINGRI Developers"
                                        fill
                                        className="object-contain object-left brightness-110 drop-shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                                        priority
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link, i) => {
                            const isActive = pathname === link.href;
                            return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium tracking-[0.15em] text-white hover:text-monte-gold transition-colors duration-300 uppercase relative group py-1"
                                    >
                                        {link.label}
                                        {/* Animated underline — expands from center */}
                                        <motion.span
                                            className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-monte-gold origin-center"
                                            initial={{ scaleX: isActive ? 1 : 0 }}
                                            animate={{ scaleX: isActive ? 1 : 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.4, ease: APPLE_EASE }}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4 md:gap-6 z-50 flex-shrink-0 text-white">
                        <button
                            onClick={toggleSearch}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                            aria-label={isSearchOpen ? "Close search" : "Open search"}
                        >
                            {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
                        </button>

                        <button onClick={toggleMenu} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors md:hidden" aria-label="Menu">
                            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Search Overlay - Full Screen Dark Glass */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[1100] bg-black/95 backdrop-blur-3xl pt-32 px-4 md:px-8 lg:px-24 overflow-y-auto"
                    >
                        <button
                            onClick={toggleSearch}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="max-w-4xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent border-b border-white/20 text-2xl md:text-5xl font-serif !text-white placeholder:!text-white py-4 focus:outline-none focus:border-monte-gold transition-colors mb-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-24">
                                {filteredProjects.map((project, index) => (
                                    <Link
                                        key={index}
                                        href={`/projects/${project.slug}`}
                                        onClick={toggleSearch}
                                        className="group flex gap-4 items-center p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                                    >
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-serif mb-0.5 group-hover:text-monte-gold transition-colors !text-white truncate">{project.title}</h3>
                                            <p className="!text-white text-sm mb-1.5 truncate">{project.location}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay - Dark Theme */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.35, ease: EASE }}
                        // Full screen, dark background
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl text-white flex flex-col justify-center items-center z-[1100] md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-4xl font-serif tracking-wide hover:text-monte-gold transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
