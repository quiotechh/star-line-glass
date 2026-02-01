import AboutSection from "@/components/AboutSection";
import CredibilitySection from "@/components/CredibilitySection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ProductsOverview from "@/components/ProductsOverview";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white font-sans">
      <HeroSection />
      <CredibilitySection />
      <ProductsOverview />
      <WhyChooseUs />
      <AboutSection />
      <CTASection />
    </div>
  );
}