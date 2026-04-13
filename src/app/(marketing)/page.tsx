import FeatureSlider from "@/src/components/marketing/featureSlider/FeatureSlider";
import Hero from "@/src/components/marketing/hero/Hero";
import PlatFormSlider from "@/src/components/marketing/platFormSlider/platFormSlider";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureSlider />
      <PlatFormSlider />
      {/* Additional sections such as Features, Testimonials, etc. would go here */}
    </>
  );
}
