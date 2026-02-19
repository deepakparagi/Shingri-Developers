import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import TrustSection from "@/components/TrustSection";
import VennDiagram from "@/components/VennDiagram";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-monte-beige">
      <Hero />
      <PropertyGrid />
      <TrustSection />
      <VennDiagram />
      <FeatureGrid />
      <Footer />
    </main>
  );
}
