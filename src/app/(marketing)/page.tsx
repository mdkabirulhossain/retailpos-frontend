import FAQSection from "@/src/components/marketing/faqSection/FAQSection";
import FeatureSlider from "@/src/components/marketing/featureSlider/FeatureSlider";
import Hero from "@/src/components/marketing/hero/Hero";
import PlatFormSlider from "@/src/components/marketing/platFormSlider/platFormSlider";
import PricingSection from "@/src/components/marketing/PriceSection/PricingSection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureSlider />
      <PlatFormSlider />
      <PricingSection />
      <FAQSection />
    </>
  );
}
