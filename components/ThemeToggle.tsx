"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <div className="w-5 h-5" />
            </div>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="group relative w-10 h-10 rounded-full border border-white/20 hover:border-white transition-colors bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="relative z-10 text-white group-hover:text-white transition-colors">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>

            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
        </button>
    );
}
