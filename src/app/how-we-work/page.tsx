import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  HiClipboardDocumentList,
  HiMagnifyingGlass,
  HiAcademicCap,
  HiPaperAirplane,
  HiChatBubbleLeftRight,
  HiRocketLaunch,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Discover TechCompass's proven 6-step hiring process — from requirement understanding to onboarding, emphasizing speed, quality, and compliance.",
};

const steps = [
  {
    number: "01",
    icon: HiClipboardDocumentList,
    title: "Requirement Understanding",
    description:
      "We start by deeply understanding your hiring needs — the role, technical requirements, team dynamics, company culture, and project timelines. Our dedicated account manager works closely with your hiring team to capture every detail that matters.",
    highlights: [
      "Detailed job requirement analysis",
      "Technical skill mapping",
      "Culture fit assessment criteria",
      "Timeline and priority alignment",
    ],
  },
  {
    number: "02",
    icon: HiMagnifyingGlass,
    title: "Sourcing & Screening",
    description:
      "Our recruiters leverage our proprietary database, job boards, professional networks, and referral channels to build a targeted candidate pipeline. Every candidate undergoes initial screening for experience, skills, and availability.",
    highlights: [
      "Multi-channel sourcing strategy",
      "Database of 50,000+ pre-screened professionals",
      "Active and passive candidate outreach",
      "Availability and interest verification",
    ],
  },
  {
    number: "03",
    icon: HiAcademicCap,
    title: "Technical Validation",
    description:
      "Qualified candidates go through rigorous technical evaluation. For IT roles, this includes coding assessments, system design discussions, and domain-specific knowledge tests conducted by our in-house technical team.",
    highlights: [
      "Hands-on technical assessments",
      "Domain expertise evaluation",
      "Communication and soft skills review",
      "Background and reference pre-checks",
    ],
  },
  {
    number: "04",
    icon: HiPaperAirplane,
    title: "Client Submission",
    description:
      "We present a shortlist of 3-5 highly qualified candidates with detailed profiles, assessment summaries, and our recommendations. Each submission includes the candidate's technical strengths, experience highlights, and availability timeline.",
    highlights: [
      "Curated shortlist of top candidates",
      "Detailed candidate profiles and summaries",
      "Skill-match scoring against requirements",
      "24-48 hour submission turnaround",
    ],
  },
  {
    number: "05",
    icon: HiChatBubbleLeftRight,
    title: "Interview Coordination",
    description:
      "We manage the entire interview process — scheduling, preparation, feedback collection, and follow-up. Our team ensures smooth communication between all parties and provides candidates with interview preparation support.",
    highlights: [
      "End-to-end interview scheduling",
      "Candidate interview preparation",
      "Real-time feedback coordination",
      "Offer negotiation support",
    ],
  },
  {
    number: "06",
    icon: HiRocketLaunch,
    title: "Onboarding & Support",
    description:
      "Once selected, we handle all onboarding logistics including paperwork, compliance documentation, and orientation support. Our relationship continues post-placement with regular check-ins to ensure success.",
    highlights: [
      "Seamless onboarding process",
      "Compliance and documentation management",
      "Post-placement check-ins",
      "Ongoing performance support",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        subtitle="A proven, streamlined hiring process designed for speed, quality, and a seamless experience for both clients and candidates."
        breadcrumbs={[{ label: "How We Work", href: "/how-we-work" }]}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Our 6-Step Hiring Process"
            subtitle="From understanding your requirements to onboarding the right talent — every step is optimized for efficiency and quality."
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className="lg:col-span-1 flex lg:justify-center">
                  <span className="text-5xl font-bold text-brand-green/20 font-heading">
                    {step.number}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-500 font-heading">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-3">
                      {step.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="lg:col-span-12">
                    <div className="border-b border-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Turnaround Emphasis */}
      <section className="py-20 gradient-navy">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-heading mb-6">
              Speed Without Compromise
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our average time-to-submit is 24-48 hours for qualified candidates.
              With a dedicated recruiting team and a database of 50,000+
              pre-screened professionals, we fill positions faster than industry
              averages — without cutting corners on quality or compliance.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-4xl font-bold text-brand-green font-heading">
                  24-48h
                </p>
                <p className="text-gray-400 text-sm mt-1">Time to Submit</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-green font-heading">
                  3-5
                </p>
                <p className="text-gray-400 text-sm mt-1">Candidates per Role</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-green font-heading">
                  95%
                </p>
                <p className="text-gray-400 text-sm mt-1">Interview-to-Offer Rate</p>
              </div>
            </div>
            <Button href="/contact" variant="secondary" size="lg">
              Start Hiring Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
