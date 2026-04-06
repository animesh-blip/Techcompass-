import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
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
    "Explore TechCompass staffing services — IT Staffing, Engineering Staffing, Professional Staffing, Contract, Contract-to-Hire, and Direct Hire solutions.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiComputerDesktop,
  HiWrenchScrewdriver,
  HiBriefcase,
  HiDocumentText,
  HiArrowPath,
  HiUserPlus,
};

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
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${index % 2 === 1 ? "bg-gray-50" : ""}`}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {IconComponent && (
                      <div className="w-14 h-14 bg-brand-green rounded-lg flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <h2 className="text-3xl font-bold text-navy-500 font-heading">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-semibold text-navy-500 font-heading mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <HiCheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy-500 rounded-xl p-8">
                  <h3 className="text-white font-semibold font-heading mb-4">
                    Roles We Fill
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-full border border-white/20"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Hiring Models */}
      <section className="py-20 gradient-navy" id="hiring-models">
        <Container>
          <SectionHeading
            title="Hiring Models"
            subtitle="Choose the engagement model that best fits your hiring needs and business objectives."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiringModels.map((model) => {
              const IconComponent = iconMap[model.icon];
              return (
                <div
                  key={model.title}
                  id={model.title.toLowerCase().replace(/\s+/g, "-")}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
                >
                  {IconComponent && (
                    <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white font-heading mb-3">
                    {model.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {model.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-500 font-heading mb-4">
              Need Help Choosing the Right Model?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our staffing experts will help you determine the best engagement
              model based on your project scope, timeline, and budget.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to an Expert
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
