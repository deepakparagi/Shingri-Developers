import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

import Loader from "@/components/Loader";

import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";

// Headings / Display Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Body Font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
        playfair.variable,
        dmSans.variable
      )}>
        <ScrollProgress />
        <Loader />
        <Header />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
