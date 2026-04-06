import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  HiShieldCheck,
  HiBolt,
  HiStar,
  HiEye,
  HiGlobeAmericas,
  HiUserGroup,
  HiRocketLaunch,
  HiLightBulb,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechCompass Services — a leading US IT staffing firm dedicated to connecting businesses with top talent through integrity, speed, and quality.",
};

const coreValues = [
  {
    icon: HiShieldCheck,
    title: "Integrity",
    description:
      "We believe in transparent communication and ethical business practices. Every interaction is built on trust and honesty.",
  },
  {
    icon: HiBolt,
    title: "Speed",
    description:
      "In staffing, timing is everything. Our streamlined processes ensure rapid candidate submissions without compromising quality.",
  },
  {
    icon: HiStar,
    title: "Quality",
    description:
      "We never cut corners on candidate screening. Our multi-layered assessment ensures every professional we present exceeds expectations.",
  },
  {
    icon: HiEye,
    title: "Transparency",
    description:
      "Clients and candidates always know where they stand. We provide full visibility into our processes, timelines, and candidate pipelines.",
  },
];

const deliverySteps = [
  {
    icon: HiGlobeAmericas,
    title: "US-Based Client Relationships",
    description:
      "Our account management team works directly with US clients to understand their unique staffing needs, company culture, and technical requirements.",
  },
  {
    icon: HiUserGroup,
    title: "India-Based Recruiting Engine",
    description:
      "Our dedicated recruiting teams in Bengaluru and Jaipur operate on an extended cycle, providing 24-hour sourcing coverage and a vast talent network.",
  },
  {
    icon: HiRocketLaunch,
    title: "Rapid Fulfillment",
    description:
      "The combination of US client expertise and India-based sourcing power enables us to deliver qualified candidates within 24-48 hours of receiving a requirement.",
  },
  {
    icon: HiLightBulb,
    title: "Continuous Optimization",
    description:
      "We constantly refine our processes based on client feedback, market trends, and performance metrics to improve our delivery outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About TechCompass Services"
        subtitle="A dedicated US staffing partner built on expertise, speed, and unwavering commitment to quality."
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />

      {/* Company Overview */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Who We Are"
              subtitle="TechCompass Services is a specialized US IT staffing and workforce solutions company that connects businesses with exceptional talent across technology, engineering, and professional domains."
            />
            <div className="prose max-w-none text-gray-600 space-y-4">
              <p>
                Founded with a mission to bridge the gap between top talent and
                leading organizations, TechCompass has grown into a trusted
                staffing partner for businesses ranging from innovative startups
                to Fortune 500 enterprises across the United States.
              </p>
              <p>
                Our team of experienced recruiters combines deep industry
                knowledge with cutting-edge sourcing techniques to identify,
                assess, and deliver professionals who not only meet technical
                requirements but also align with your organizational culture and
                long-term goals.
              </p>
              <p>
                With offices in Bengaluru and Jaipur, our recruiting operations
                provide an around-the-clock sourcing advantage, enabling us to
                deliver candidates faster than traditional staffing models.
                Whether you need a single specialist or an entire project team,
                TechCompass is your compass to the right talent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-green">
              <h3 className="text-2xl font-bold text-navy-500 font-heading mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower US businesses with the right talent at the right time
                by delivering fast, compliant, and quality-driven staffing
                solutions. We are committed to being the staffing partner that
                organizations trust for their most critical hiring needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-navy-500">
              <h3 className="text-2xl font-bold text-navy-500 font-heading mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a premier US staffing firm known for
                exceptional candidate quality, rapid fulfillment, and long-term
                client partnerships. We envision a workforce ecosystem where
                every placement creates lasting value for both businesses and
                professionals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every decision, every placement, and every partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="flex gap-5 p-6 rounded-xl bg-gray-50">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-brand-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-500 font-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery Model */}
      <section className="py-20 gradient-navy">
        <Container>
          <SectionHeading
            title="Our Delivery Model"
            subtitle="A unique US-India delivery model that combines local market expertise with global sourcing capabilities."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverySteps.map((step) => (
              <div
                key={step.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-500 font-heading mb-4">
              Partner with TechCompass
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our staffing expertise can help you build
              high-performing teams. Let&apos;s start a conversation today.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
