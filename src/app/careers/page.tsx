import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiBuildingOffice,
  HiCurrencyDollar,
  HiArrowTrendingUp,
  HiClipboardDocumentList,
  HiMagnifyingGlass,
  HiBriefcase,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join leading US companies through TechCompass Services. We connect skilled professionals in IT, Engineering, and Business roles with exciting career opportunities across the nation.",
};

const benefits = [
  {
    icon: HiBuildingOffice,
    title: "Top US Employers",
    description:
      "Access positions with Fortune 500 companies, innovative startups, and leading enterprises across the United States.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: HiCurrencyDollar,
    title: "Competitive Compensation",
    description:
      "W2 positions with benefits or competitive C2C rates. We negotiate the best possible packages for our consultants.",
    gradient: "from-brand-green to-emerald-500",
  },
  {
    icon: HiArrowTrendingUp,
    title: "Career Growth",
    description:
      "Long-term assignments, contract-to-hire opportunities, and a dedicated recruiter supporting your career journey every step of the way.",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const categories = [
  { icon: HiClipboardDocumentList, title: "IT & Software", count: "Coming Soon" },
  { icon: HiMagnifyingGlass, title: "Data & Analytics", count: "Coming Soon" },
  { icon: HiBriefcase, title: "Engineering", count: "Coming Soon" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Career Opportunities"
        subtitle="We are always looking for talented professionals to join our network. Explore opportunities with leading US companies through TechCompass."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Why Join */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern pointer-events-none" />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeading
              title="Why Work With TechCompass?"
              subtitle="We are more than a staffing agency — we are your career partner."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <ScrollReveal key={item.title} variant="scale" delay={index * 120}>
                <div className="group bg-white p-8 rounded-2xl shadow-sm hover-lift hover-glow text-center h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-500 font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Job Board Placeholder */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Open Positions"
              subtitle="Our job board is being set up. In the meantime, send us your resume and we will match you with the right opportunity."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((cat, index) => (
              <ScrollReveal key={cat.title} delay={index * 100}>
                <div className="p-8 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 text-center hover:border-brand-green/30 transition-all duration-300">
                  <cat.icon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-500 font-heading mb-2">
                    {cat.title}
                  </h3>
                  <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full">
                    {cat.count}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-10 shadow-xl">
                <svg
                  className="w-16 h-16 text-brand-green mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-white font-heading mb-3">
                  Submit Your Resume
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Don&apos;t wait for the perfect listing. Send us your resume and
                  our recruiters will proactively match you with opportunities that
                  fit your skills and career goals.
                </p>
                <Button href="/contact" variant="secondary" size="lg" className="hover-glow">
                  Send Us Your Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
