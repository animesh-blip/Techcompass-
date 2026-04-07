"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiClock,
  HiCheckBadge,
  HiShieldCheck,
  HiUserGroup,
  HiChartBar,
  HiGlobeAmericas,
} from "react-icons/hi2";

const reasons = [
  {
    icon: HiClock,
    title: "Rapid Turnaround",
    description:
      "Qualified profiles submitted within hours, not days. Our proactive sourcing and ready bench minimize time-to-fill.",
  },
  {
    icon: HiCheckBadge,
    title: "Quality First",
    description:
      "Multi-layered screening including technical assessments, behavioral interviews, and reference verification ensures top-tier talent.",
  },
  {
    icon: HiShieldCheck,
    title: "Full Compliance",
    description:
      "Comprehensive compliance management covering I-9, E-Verify, background checks, and all federal and state regulations.",
  },
  {
    icon: HiUserGroup,
    title: "Dedicated Team",
    description:
      "Every client gets a dedicated account team working in sync — recruiter, account manager, and compliance specialist.",
  },
  {
    icon: HiChartBar,
    title: "Proven Track Record",
    description:
      "High client retention and hundreds of successful placements across Fortune 500 companies and growing enterprises.",
  },
  {
    icon: HiGlobeAmericas,
    title: "Nationwide Coverage",
    description:
      "Staffing solutions across all 50 US states with expertise in both on-site and remote workforce deployment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            title="Why Choose TechCompass?"
            subtitle="We combine speed, quality, and compliance to deliver staffing solutions that exceed expectations."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 100}>
              <div className="group flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover-lift transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <span className="block text-3xl font-bold gradient-text font-heading mb-2 opacity-40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:shadow-lg transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-navy-500 font-heading mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
