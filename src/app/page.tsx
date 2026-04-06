import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EngagementModels from "@/components/home/EngagementModels";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <ServicesOverview />
      <IndustriesPreview />
      <WhyChooseUs />
      <EngagementModels />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
