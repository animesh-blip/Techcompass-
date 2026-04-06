import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/data/industries";
import {
  HiCpuChip,
  HiCog6Tooth,
  HiBanknotes,
  HiBuildingOffice2,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TechCompass serves IT & Technology, Engineering, Finance & Accounting, and Administrative sectors with specialized staffing solutions.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCpuChip,
  HiCog6Tooth,
  HiBanknotes,
  HiBuildingOffice2,
};

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-orange-500 to-amber-500",
  "from-emerald-500 to-green-500",
  "from-purple-500 to-indigo-500",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep domain expertise across key verticals enables us to deliver candidates who truly understand your business."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Specialized Industry Expertise"
              subtitle="Our recruiters have hands-on experience in each industry vertical, ensuring candidates who bring both technical skills and domain knowledge."
            />
          </ScrollReveal>

          <div className="space-y-20">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon];
              const gradient = gradients[index % gradients.length];
              return (
                <div key={industry.id} id={industry.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div
                      className={`lg:col-span-7 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <ScrollReveal variant={index % 2 === 0 ? "left" : "right"}>
                        <div className="flex items-center gap-4 mb-5">
                          {IconComponent && (
                            <div
                              className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                          )}
                          <h3 className="text-2xl md:text-3xl font-bold text-navy-500 font-heading">
                            {industry.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {industry.description}
                        </p>
                      </ScrollReveal>
                    </div>
                    <div
                      className={`lg:col-span-5 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <ScrollReveal variant={index % 2 === 0 ? "right" : "left"}>
                        <div className="bg-gray-50 rounded-2xl p-8">
                          <h4 className="font-bold text-navy-500 font-heading mb-5 text-lg">
                            Key Areas
                          </h4>
                          <div className="space-y-3">
                            {industry.roles.map((role) => (
                              <div
                                key={role}
                                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover-lift transition-all duration-200"
                              >
                                <div className="w-2.5 h-2.5 bg-brand-green rounded-full flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">
                                  {role}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Our staffing expertise extends beyond listed industries. Contact
                us to discuss your specific requirements and how we can help.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="hover-glow">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
