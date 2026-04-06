"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiComputerDesktop,
  HiWrenchScrewdriver,
  HiBriefcase,
  HiDocumentText,
  HiArrowPath,
  HiUserPlus,
  HiArrowRight,
} from "react-icons/hi2";

const services = [
  {
    icon: HiComputerDesktop,
    title: "IT Staffing",
    description:
      "Software engineers, cloud architects, data scientists, and cybersecurity experts for your technology initiatives.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Engineering Staffing",
    description:
      "Skilled mechanical, electrical, civil, and systems engineers for complex technical projects.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: HiBriefcase,
    title: "Professional Staffing",
    description:
      "Business analysts, project managers, and operational professionals to drive organizational success.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: HiDocumentText,
    title: "Contract Staffing",
    description:
      "Flexible W2 and C2C engagements for project-based needs with full compliance management.",
    gradient: "from-brand-green to-emerald-500",
  },
  {
    icon: HiArrowPath,
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before committing to a permanent hire, reducing risk significantly.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: HiUserPlus,
    title: "Direct Hire",
    description:
      "Full-cycle permanent placement services from sourcing through onboarding.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Comprehensive Staffing Solutions"
            subtitle="From contract engagements to permanent placements, we offer flexible staffing models tailored to your business needs."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} variant="scale" delay={index * 80}>
              <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover-lift overflow-hidden h-full">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />

                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-500 font-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-green text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                  Learn more <HiArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/services">Explore All Services</Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
