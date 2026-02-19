import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

import Loader from "@/components/Loader";

import Header from "@/components/Header";

// Headings / Display Font -> Mapped to --font-serif for compatibility with existing classes
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

// Body Font -> Mapped to --font-sans
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHINGRI Developers",
  description: "Ultra-Luxury Real Estate & Investment in Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-monte-white font-sans antialiased text-monte-black overflow-x-hidden", // Prevent horizontal overflow
        inter.variable,
        manrope.variable
      )}>
        <Loader />
        <Header />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
