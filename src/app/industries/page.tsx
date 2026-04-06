import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { industries } from "@/data/industries";
import {
  HiCpuChip,
  HiCog6Tooth,
  HiHeart,
  HiBanknotes,
  HiBuildingOffice2,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TechCompass serves IT & Technology, Engineering, Healthcare IT, Finance & Accounting, and Administrative sectors with specialized staffing solutions.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCpuChip,
  HiCog6Tooth,
  HiHeart,
  HiBanknotes,
  HiBuildingOffice2,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep domain expertise across key verticals enables us to deliver candidates who truly understand your business."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Specialized Industry Expertise"
            subtitle="Our recruiters have hands-on experience in each industry vertical, ensuring candidates who bring both technical skills and domain knowledge."
          />

          <div className="space-y-16">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon];
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {IconComponent && (
                        <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-navy-500 font-heading">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-navy-500 font-heading mb-4">
                        Key Areas
                      </h4>
                      <div className="space-y-2">
                        {industry.roles.map((role) => (
                          <div
                            key={role}
                            className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg"
                          >
                            <div className="w-2 h-2 bg-brand-green rounded-full" />
                            <span className="text-sm text-gray-700">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-heading mb-4">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our staffing expertise extends beyond listed industries. Contact us
              to discuss your specific requirements and how we can help.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
