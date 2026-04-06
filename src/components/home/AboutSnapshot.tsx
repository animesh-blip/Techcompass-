import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { HiShieldCheck, HiBolt, HiStar, HiEye } from "react-icons/hi2";

const values = [
  {
    icon: HiShieldCheck,
    title: "Integrity",
    description: "Transparent processes and honest communication at every step.",
  },
  {
    icon: HiBolt,
    title: "Speed",
    description: "24-48 hour candidate submissions with rapid fulfillment cycles.",
  },
  {
    icon: HiStar,
    title: "Quality",
    description: "Rigorous screening ensures only top-tier talent reaches you.",
  },
  {
    icon: HiEye,
    title: "Transparency",
    description: "Full visibility into our sourcing process and candidate pipeline.",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Your Trusted Staffing Partner"
          subtitle="TechCompass Services is a specialized US IT staffing firm dedicated to connecting businesses with exceptional talent. With deep industry expertise and a commitment to quality, we help organizations build high-performing teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="font-semibold text-navy-500 font-heading mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/about" variant="outline">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
