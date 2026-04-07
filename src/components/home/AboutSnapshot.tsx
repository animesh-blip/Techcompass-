"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiShieldCheck, HiBolt, HiStar, HiEye } from "react-icons/hi2";

const values = [
  {
    icon: HiShieldCheck,
    title: "Integrity",
    description:
      "Transparent processes and honest communication at every step of the journey.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HiBolt,
    title: "Speed",
    description:
      "24-48 hour candidate submissions with rapid fulfillment cycles.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: HiStar,
    title: "Quality",
    description:
      "Rigorous screening ensures only top-tier talent reaches you.",
    color: "from-brand-green to-emerald-500",
  },
  {
    icon: HiEye,
    title: "Transparency",
    description:
      "Full visibility into our sourcing process and candidate pipeline.",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            title="Your Trusted Staffing Partner"
            subtitle="TechCompass Services is a specialized US staffing firm dedicated to connecting businesses with exceptional IT, Engineering, and Professional talent. With deep industry expertise and a commitment to quality, we help organizations build high-performing teams."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} variant="scale" delay={index * 100}>
              <div className="group glass-card-light p-6 hover-lift hover-glow text-center h-full">
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-500 font-heading mb-2 text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
