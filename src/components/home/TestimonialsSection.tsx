"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            title="Client Success Stories"
            subtitle="Trusted by hiring managers, MSPs, and enterprise clients across the United States."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Trust signals instead of fake testimonials */}
          <ScrollReveal variant="scale">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { metric: "Nationwide", desc: "Staffing coverage across all 50 US states", icon: "🇺🇸" },
                { metric: "All Models", desc: "W2, C2C, Contract-to-Hire, and Direct Hire", icon: "📋" },
                { metric: "3 Verticals", desc: "IT, Engineering, and Professional staffing", icon: "🎯" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 text-center hover-lift transition-all duration-300 shadow-sm">
                  <span className="text-4xl mb-4 block" role="img" aria-hidden="true">{item.icon}</span>
                  <p className="text-xl font-bold text-navy-500 font-heading mb-2">{item.metric}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm">
              <HiChatBubbleBottomCenterText className="w-12 h-12 text-brand-green/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-500 font-heading mb-3">
                Client Testimonials Coming Soon
              </h3>
              <p className="text-gray-500 max-w-lg mx-auto mb-6">
                We&apos;re collecting stories from our valued clients. In the meantime,
                we&apos;d love to show you what we can do for your team.
              </p>
              <Button href="/contact" variant="secondary" size="sm" className="hover-glow">
                Let&apos;s Talk
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
