import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EngagementModels from "@/components/home/EngagementModels";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "TechCompass Services - US Staffing & Workforce Solutions",
  description:
    "TechCompass Services connects businesses with top IT, Engineering, and Professional talent across all 50 US states. W2, C2C, Contract, Contract-to-Hire, and Direct Hire solutions.",
};

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
