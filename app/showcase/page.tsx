"use client";

import ShowcaseHero from "@/components/showcase/ShowcaseHero";
import ShowcaseTabs from "@/components/showcase/ShowcaseTabs";
import ProductGallery from "@/components/showcase/ProductGallery";
import PerformanceSection from "@/components/showcase/PerformanceSection";
import ShowcaseFeatures from "@/components/showcase/ShowcaseFeatures";

export default function ShowcasePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-black overflow-x-hidden selection:bg-blue-500 selection:text-white">
            <ShowcaseHero />
            <ShowcaseFeatures />
            <ShowcaseTabs />
            <PerformanceSection />
            <ProductGallery />
        </main>
    );
}
