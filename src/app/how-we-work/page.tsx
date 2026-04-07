"use client";

import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FloatingShapes from "@/components/ui/FloatingShapes";
import {
  HiClipboardDocumentList,
  HiMagnifyingGlass,
  HiAcademicCap,
  HiPaperAirplane,
  HiChatBubbleLeftRight,
  HiRocketLaunch,
} from "react-icons/hi2";

const steps = [
  {
    number: "01",
    icon: HiClipboardDocumentList,
    title: "Requirement Understanding",
    description:
      "We start by deeply understanding your hiring needs — the role, technical requirements, team dynamics, company culture, and project timelines. Our dedicated account manager works closely with your hiring team to capture every detail.",
    highlights: [
      "Detailed job requirement analysis",
      "Technical skill mapping",
      "Culture fit assessment criteria",
      "Timeline and priority alignment",
    ],
    gradient: "from-blue-500 to-indigo-500",
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
    gradient: "from-cyan-500 to-blue-500",
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
    gradient: "from-purple-500 to-violet-500",
  },
  {
    number: "04",
    icon: HiPaperAirplane,
    title: "Client Submission",
    description:
      "We present a shortlist of 3-5 highly qualified candidates with detailed profiles, assessment summaries, and our recommendations. Each submission includes the candidate's strengths, experience highlights, and availability.",
    highlights: [
      "Curated shortlist of top candidates",
      "Detailed candidate profiles and summaries",
      "Skill-match scoring against requirements",
      "24-48 hour submission turnaround",
    ],
    gradient: "from-brand-green to-emerald-500",
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
    gradient: "from-amber-500 to-orange-500",
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
    gradient: "from-rose-500 to-pink-500",
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

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Our 6-Step Hiring Process"
              subtitle="From understanding your requirements to onboarding the right talent — every step is optimized for efficiency and quality."
            />
          </ScrollReveal>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-green via-navy-300 to-brand-green opacity-20" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                    {/* Step number */}
                    <div className="lg:col-span-1 flex lg:justify-center relative z-10">
                      <span className="text-6xl font-bold gradient-text font-heading opacity-60">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-500 font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="lg:col-span-5">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <ul className="space-y-3">
                          {step.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <FloatingShapes variant="dark" />
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
                Speed Without Compromise
              </h2>
              <p className="text-gray-300 mb-12 leading-relaxed text-lg">
                Our average time-to-submit is 24-48 hours for qualified
                candidates. With a dedicated recruiting team and a database of
                50,000+ pre-screened professionals, we fill positions faster than
                industry averages — without cutting corners on quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading">
                    24-48h
                  </p>
                  <p className="text-gray-400 text-sm mt-2">Time to Submit</p>
                </div>
                <div className="glass-card p-6">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading">
                    3-5
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Candidates per Role
                  </p>
                </div>
                <div className="glass-card p-6">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading">
                    <AnimatedCounter target={95} suffix="%" />
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Interview-to-Offer
                  </p>
                </div>
              </div>
              <Button href="/contact" variant="secondary" size="lg" className="hover-glow">
                Start Hiring Now
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
