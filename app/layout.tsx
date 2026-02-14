import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

import Loader from "@/components/Loader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        cormorant.variable,
        inter.variable
      )}>
        <Loader />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
