import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
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
      "We submit qualified candidates within 24-48 hours. Our proactive sourcing and ready bench ensure minimal time-to-fill.",
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
      "Every client gets a dedicated account team — recruiter, account manager, and compliance specialist working in sync.",
  },
  {
    icon: HiChartBar,
    title: "Proven Track Record",
    description:
      "98% client retention rate with 500+ successful placements across Fortune 500 companies and growing enterprises.",
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
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose TechCompass?"
          subtitle="We combine speed, quality, and compliance to deliver staffing solutions that exceed expectations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-brand-green" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-500 font-heading mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
