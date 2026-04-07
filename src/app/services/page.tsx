import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staffingServices, hiringModels } from "@/data/services";
import {
  HiComputerDesktop,
  HiWrenchScrewdriver,
  HiBriefcase,
  HiDocumentText,
  HiArrowPath,
  HiUserPlus,
  HiCheckCircle,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Services",
  description:
    "TechCompass offers comprehensive staffing services including IT, Engineering, and Professional Staffing with flexible models — Contract, Contract-to-Hire, and Direct Hire solutions.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiComputerDesktop,
  HiWrenchScrewdriver,
  HiBriefcase,
  HiDocumentText,
  HiArrowPath,
  HiUserPlus,
};

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-orange-500 to-amber-500",
  "from-purple-500 to-indigo-500",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive staffing solutions tailored to your business needs. From contract engagements to permanent placements, we have you covered."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      {/* Staffing Types */}
      {staffingServices.map((service, index) => {
        const IconComponent = iconMap[service.icon];
        const gradient = gradients[index % gradients.length];
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 relative overflow-hidden ${index % 2 === 1 ? "bg-gray-50" : ""}`}
          >
            {index % 2 === 1 && (
              <div className="absolute inset-0 dot-pattern pointer-events-none" />
            )}
            <Container className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <ScrollReveal variant={index % 2 === 0 ? "left" : "right"}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      {IconComponent && (
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      )}
                      <h2 className="text-3xl font-bold text-navy-500 font-heading">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                    <h3 className="font-bold text-navy-500 font-heading mb-4 text-lg">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <HiCheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant={index % 2 === 0 ? "right" : "left"}>
                  <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-white font-bold font-heading mb-6 text-lg">
                      Roles We Fill
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {service.roles.map((role) => (
                        <span
                          key={role}
                          className="px-4 py-2 glass-card text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Hiring Models */}
      <section className="py-24 gradient-navy relative overflow-hidden" id="hiring-models">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              title="Hiring Models"
              subtitle="Choose the engagement model that best fits your hiring needs and business objectives."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiringModels.map((model, index) => {
              const IconComponent = iconMap[model.icon];
              return (
                <ScrollReveal key={model.title} delay={index * 120}>
                  <div className="glass-card p-8 hover-lift transition-all duration-300 h-full">
                    {IconComponent && (
                      <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-5 shadow-lg">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white font-heading mb-3">
                      {model.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-500 font-heading mb-4">
                Need Help Choosing the Right Model?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Our staffing experts will help you determine the best engagement
                model based on your project scope, timeline, and budget.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="hover-glow">
                Talk to an Expert
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
