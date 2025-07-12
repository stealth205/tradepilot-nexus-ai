import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AISection from "@/components/sections/AISection";
import TelegramSection from "@/components/sections/TelegramSection";
import PricingSection from "@/components/sections/PricingSection";
import SecuritySection from "@/components/sections/SecuritySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <AISection />
      <TelegramSection />
      <PricingSection />
      <SecuritySection />
      <FooterSection />
    </div>
  );
};

export default Index;
