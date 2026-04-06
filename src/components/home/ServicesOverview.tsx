import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  HiComputerDesktop,
  HiWrenchScrewdriver,
  HiBriefcase,
  HiDocumentText,
  HiArrowPath,
  HiUserPlus,
} from "react-icons/hi2";

const services = [
  {
    icon: HiComputerDesktop,
    title: "IT Staffing",
    description: "Software engineers, cloud architects, data scientists, and cybersecurity experts for your technology initiatives.",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Engineering Staffing",
    description: "Skilled mechanical, electrical, civil, and systems engineers for complex technical projects.",
  },
  {
    icon: HiBriefcase,
    title: "Professional Staffing",
    description: "Business analysts, project managers, and operational professionals to drive organizational success.",
  },
  {
    icon: HiDocumentText,
    title: "Contract Staffing",
    description: "Flexible W2 and C2C engagements for project-based needs with full compliance management.",
  },
  {
    icon: HiArrowPath,
    title: "Contract-to-Hire",
    description: "Evaluate talent on the job before committing to a permanent hire, reducing risk significantly.",
  },
  {
    icon: HiUserPlus,
    title: "Direct Hire",
    description: "Full-cycle permanent placement services from sourcing through onboarding.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Comprehensive Staffing Solutions"
          subtitle="From contract engagements to permanent placements, we offer flexible staffing models tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-brand-green hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-500 group-hover:bg-brand-green rounded-lg flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-500 font-heading mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/services">Explore All Services</Button>
        </div>
      </Container>
    </section>
  );
}
