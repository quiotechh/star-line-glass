import AboutSection from "@/components/AboutSection";
import CredibilitySection from "@/components/CredibilitySection";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <HeroSection />
    <CredibilitySection />
    <AboutSection />
    </div>
  );
}