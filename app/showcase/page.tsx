"use client";

import ShowcaseHero from "@/components/showcase/ShowcaseHero";
import ShowcaseTabs from "@/components/showcase/ShowcaseTabs";
import ProductGallery from "@/components/showcase/ProductGallery";
import PerformanceSection from "@/components/showcase/PerformanceSection";
import ShowcaseFeatures from "@/components/showcase/ShowcaseFeatures";

export default function ShowcasePage() {
    return (
        <main className="min-h-screen bg-monte-beige text-monte-text-primary overflow-x-hidden selection:bg-monte-gold selection:text-white">
            <ShowcaseHero />
            <ShowcaseFeatures />
            <ShowcaseTabs />
            <PerformanceSection />
            <ProductGallery />
        </main>
    );
}
