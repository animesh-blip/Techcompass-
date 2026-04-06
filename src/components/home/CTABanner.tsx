"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { CircuitPattern } from "@/components/ui/TechPattern";

export default function CTABanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-navy-600 via-navy-500 to-navy-800 bg-200% animate-gradient-shift overflow-hidden">
      <FloatingShapes variant="dark" />
      <CircuitPattern className="left-0 bottom-0 w-[400px] h-[400px] text-brand-green opacity-15 hidden lg:block" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 leading-tight">
              Ready to Build Your{" "}
              <span className="gradient-text">Dream Team</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you need one specialist or an entire project team,
              TechCompass delivers the right talent, fast. Let&apos;s discuss
              your staffing needs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="hover-glow text-lg"
              >
                Contact Us Today
              </Button>
              <Button
                href="/how-we-work"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-navy-500 backdrop-blur-sm text-lg"
              >
                See How We Work
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
