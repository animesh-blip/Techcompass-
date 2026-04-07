"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FloatingShapes from "@/components/ui/FloatingShapes";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { CompassDecoration, CircuitPattern } from "@/components/ui/TechPattern";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-600 via-navy-500 to-navy-800 bg-200% animate-gradient-shift">
      {/* Background layers */}
      <FloatingShapes variant="hero" />
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      {/* Circuit pattern decoration */}
      <CircuitPattern className="right-0 top-0 w-[500px] h-[500px] text-brand-green opacity-20 hidden lg:block" />

      {/* Compass decoration */}
      <CompassDecoration className="right-10 bottom-20 w-[350px] h-[350px] text-brand-green animate-spin-slow hidden lg:block" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2.5 glass-card mb-8 opacity-0 animate-fade-in-down">
            <div className="w-2 h-2 bg-brand-green rounded-full mr-3 animate-pulse" />
            <span className="text-brand-green-light text-sm font-semibold tracking-wide">
              US Staffing & Workforce Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white font-heading leading-tight mb-8 opacity-0 animate-fade-in-up animation-delay-200">
            Connecting Top Talent
            <br />
            with{" "}
            <span className="gradient-text">
              Leading US Companies
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            Your trusted staffing partner for IT, Engineering, and Professional
            talent. Pre-vetted, high-quality candidates delivered with speed and
            precision across all 50 states.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 opacity-0 animate-fade-in-up animation-delay-500">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="hover-glow text-lg"
            >
              Hire Talent
            </Button>
            <Button
              href="/careers"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-navy-500 backdrop-blur-sm text-lg"
            >
              Find Jobs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up animation-delay-700">
            {[
              { label: "Placements", custom: "Hundreds" },
              { target: 150, suffix: "+", label: "Active Clients" },
              { label: "Avg. Turnaround", custom: "24-48h" },
              { target: 98, suffix: "%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text font-heading">
                  {stat.custom ? (
                    stat.custom
                  ) : (
                    <AnimatedCounter
                      target={stat.target!}
                      suffix={stat.suffix}
                    />
                  )}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0 100L60 88C120 76 240 52 360 44C480 36 600 44 720 52C840 60 960 68 1080 64C1200 60 1320 44 1380 36L1440 28V100H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
