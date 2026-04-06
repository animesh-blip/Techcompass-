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
            title="What Our Clients Say"
            subtitle="Trusted by hiring managers, MSPs, and enterprise clients across the United States."
          />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto text-center mb-12">
            {/* Large decorative quote */}
            <div className="relative inline-block mb-8">
              <svg
                className="w-24 h-24 text-brand-green/20 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-xl text-gray-500 italic leading-relaxed mb-8">
              Real stories from real partners — coming soon.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              We are gathering testimonials from our valued clients to share their
              experiences working with TechCompass Services.
            </p>
          </div>
        </ScrollReveal>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-8 rounded-2xl border-2 border-dashed border-gray-200 bg-white/50 text-center transition-all duration-300 hover:border-brand-green/30 h-full">
                <HiChatBubbleBottomCenterText className="w-10 h-10 text-gray-200 mx-auto mb-4" />
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-3/4 mx-auto" />
                  <div className="h-3 bg-gray-100 rounded-full w-full mx-auto" />
                  <div className="h-3 bg-gray-100 rounded-full w-2/3 mx-auto" />
                </div>
                <div className="mt-6 space-y-2">
                  <div className="h-3 bg-gray-100 rounded-full w-1/3 mx-auto" />
                  <div className="h-2 bg-gray-50 rounded-full w-1/4 mx-auto" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              Want to share your experience working with us?
            </p>
            <Button href="/contact" variant="outline" size="sm">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
