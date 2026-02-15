"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { allProjects } from "@/data/projects";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery(""); // Reset search logic when opening
            setFilteredProjects(allProjects);
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
    const isHomePage = pathname === "/";

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 md:py-6 transition-all duration-300 text-white",
                scrolled || !isHomePage
                    ? "bg-[#121212]/80 backdrop-blur-md py-3 md:py-4 border-b border-white/10"
                    : "bg-gradient-to-b from-neutral-900/90 via-neutral-900/60 to-transparent pt-6 md:pt-8"
            )}>
                <div className="flex items-center justify-between gap-8 ml-1">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex-shrink-0">
                        <div className="relative h-12 w-28 md:h-16 md:w-40 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/logo.png"
                                alt="SHINGRI Developers"
                                fill
                                className="object-contain object-left drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] filter brightness-110 contrast-125"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 mr-8">
                    {navLinks.map((link) => (
                        <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={link.href} className="text-sm tracking-widest hover:text-gray-300 transition-colors uppercase relative group drop-shadow-md font-medium">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="flex items-center gap-6 z-50 flex-shrink-0">
                    <button
                        onClick={toggleSearch}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Search"
                    >
                        <Search size={24} strokeWidth={1.5} />
                    </button>

                    <button onClick={toggleMenu} className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden" aria-label="Menu">
                        {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-monte-black/80 backdrop-blur-3xl pt-32 px-8 lg:px-24 overflow-y-auto border-t border-white/10"
                    >
                        <button
                            onClick={toggleSearch}
                            className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="max-w-4xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search projects by name, location, or status..."
                                className="w-full bg-transparent border-b border-white/20 text-3xl md:text-5xl font-serif text-white placeholder:text-white/20 py-4 focus:outline-none focus:border-white transition-colors mb-12"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
                                {filteredProjects.map((project, index) => (
                                    <Link
                                        key={index}
                                        href={`/projects/${project.slug}`}
                                        onClick={toggleSearch}
                                        className="group flex gap-6 items-center p-4 rounded-2xl hover:bg-white/5 transition-all"
                                    >
                                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif mb-1 group-hover:text-monte-gold transition-colors text-white">{project.title}</h3>
                                            <p className="text-white/60 text-sm mb-2">{project.location}</p>
                                            <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
                                                <span>{project.status}</span>
                                                <span>•</span>
                                                <span>{project.price}</span>
                                            </div>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                                            <ArrowRight size={20} className="text-white/60" />
                                        </div>
                                    </Link>
                                ))}
                                {filteredProjects.length === 0 && (
                                    <div className="col-span-full text-center text-white/40 py-12">
                                        No projects found matching &quot;{searchQuery}&quot;
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-monte-black/95 backdrop-blur-3xl text-white flex flex-col justify-center items-center z-40 md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-3xl font-serif tracking-wide hover:text-gray-300 transition-colors"
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
