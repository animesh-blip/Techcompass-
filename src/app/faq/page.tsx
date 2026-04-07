import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/faq";
import FAQItem from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about TechCompass staffing services, W2/C2C engagement models, candidate quality, compliance, and hiring process.",
};

function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our staffing services, engagement models, and hiring process."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern pointer-events-none" />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeading
              title="Common Questions"
              subtitle="Everything you need to know about working with TechCompass."
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gray-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-500 font-heading mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Can&apos;t find the answer you&apos;re looking for? Our team is
                ready to help with any questions about our staffing services.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="hover-glow">
                Contact Our Team
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
