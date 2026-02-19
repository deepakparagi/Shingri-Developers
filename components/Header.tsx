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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) setIsSearchOpen(false);
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery(""); // Reset search logic when opening
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
    const isHomePage = pathname === "/";

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-all duration-500 text-monte-charcoal",
                scrolled || !isHomePage
                    ? "bg-monte-ivory/80 backdrop-blur-xl border-b border-monte-border shadow-sm"
                    : "bg-gradient-to-b from-monte-beige/90 via-monte-beige/50 to-transparent"
            )}>
                <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-8 ml-1">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 flex-shrink-0">
                            <div className="relative h-12 w-28 md:h-16 md:w-40 transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/logo.png"
                                    alt="SHINGRI Developers"
                                    fill
                                    className="object-contain object-left drop-shadow-sm filter invert brightness-0 contrast-125"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 mr-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group overflow-hidden">
                                <Link href={link.href} className="text-sm tracking-[0.2em] text-monte-charcoal/80 hover:text-monte-charcoal transition-colors uppercase relative font-medium py-2 block">
                                    <span className="relative z-10">{link.label}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-monte-gold transform scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6 z-50 flex-shrink-0 text-monte-charcoal">
                        <button
                            onClick={toggleSearch}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-monte-charcoal/5 rounded-full transition-colors"
                            aria-label="Search"
                        >
                            <Search size={22} strokeWidth={1.5} />
                        </button>

                        <button onClick={toggleMenu} className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-monte-charcoal/5 rounded-full transition-colors md:hidden" aria-label="Menu">
                            {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                        </button>
                    </div>
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
                        className="fixed inset-0 z-[95] bg-monte-ivory/95 backdrop-blur-3xl pt-32 px-8 lg:px-24 overflow-y-auto border-t border-monte-border"
                    >
                        <button
                            onClick={toggleSearch}
                            className="absolute top-8 right-8 p-2 rounded-full hover:bg-monte-charcoal/5 transition-colors text-monte-charcoal"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="max-w-4xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search by name, location or status..."
                                className="w-full bg-transparent border-b border-monte-border text-xl sm:text-3xl md:text-5xl font-serif text-monte-charcoal placeholder:text-monte-charcoal/30 py-4 focus:outline-none focus:border-monte-gold transition-colors mb-10"
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
                                        className="group flex gap-4 items-center p-4 rounded-2xl hover:bg-white/60 transition-all border border-transparent hover:border-monte-border/50"
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
                                            <h3 className="text-lg font-serif mb-0.5 group-hover:text-monte-gold transition-colors text-monte-charcoal truncate">{project.title}</h3>
                                            <p className="text-monte-taupe text-sm mb-1.5 truncate">{project.location}</p>
                                            <div className="flex items-center gap-2 text-xs text-monte-charcoal/60 uppercase tracking-widest">
                                                <span>{project.status}</span>
                                                <span>•</span>
                                                <span className="text-monte-gold font-medium">{project.price}</span>
                                            </div>
                                        </div>
                                        <ArrowRight size={18} className="text-monte-gold opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                                    </Link>
                                ))}
                                {filteredProjects.length === 0 && (
                                    <div className="col-span-full text-center text-monte-taupe py-12">
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
                        className="fixed inset-0 bg-monte-beige/95 backdrop-blur-3xl text-monte-charcoal flex flex-col justify-center items-center z-[90] md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-3xl font-serif tracking-wide hover:text-monte-gold transition-colors"
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
