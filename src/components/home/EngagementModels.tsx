"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const models = [
  {
    title: "W2 Employment",
    description:
      "Consultants on our payroll with full tax compliance, benefits eligibility, and workers compensation coverage.",
    tag: "Most Popular",
    featured: true,
  },
  {
    title: "Corp-to-Corp (C2C)",
    description:
      "For independent contractors working through their own corporation. Flexible arrangements with streamlined onboarding.",
    tag: "Flexible",
    featured: false,
  },
  {
    title: "Contract",
    description:
      "Time-bound engagements for project-specific needs. Scale up or down based on business demands.",
    tag: "Scalable",
    featured: false,
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate consultants on the job before making a permanent offer. Minimize hiring risk with a try-before-you-buy approach.",
    tag: "Low Risk",
    featured: false,
  },
  {
    title: "Full-Time / Direct Hire",
    description:
      "End-to-end permanent placement services. We find, screen, and present the best candidates for your team.",
    tag: "Permanent",
    featured: false,
  },
];

export default function EngagementModels() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Client Engagement Models"
            subtitle="Flexible staffing arrangements designed to meet your specific business requirements and preferences."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <ScrollReveal key={model.title} delay={index * 100}>
              <div
                className={`relative p-8 rounded-2xl hover-lift transition-all duration-500 h-full ${
                  model.featured
                    ? "bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-xl"
                    : "bg-white border border-gray-100 hover:border-brand-green/30"
                }`}
              >
                {/* Step number */}
                <span
                  className={`absolute top-4 right-4 text-5xl font-bold font-heading ${
                    model.featured ? "text-white/10" : "text-gray-100"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-5 ${
                    model.featured
                      ? "bg-brand-green text-white shimmer"
                      : "bg-brand-green/10 text-brand-green"
                  }`}
                >
                  {model.tag}
                </span>
                <h3
                  className={`text-xl font-bold font-heading mb-3 ${
                    model.featured ? "text-white" : "text-navy-500"
                  }`}
                >
                  {model.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    model.featured ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {model.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
