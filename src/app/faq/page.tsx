"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/faq";
import { HiChevronDown } from "react-icons/hi2";
import { clsx } from "clsx";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 60}>
      <div
        className={clsx(
          "border rounded-2xl overflow-hidden transition-all duration-300",
          isOpen
            ? "border-brand-green/30 shadow-md bg-white"
            : "border-gray-200 bg-white hover:border-gray-300 hover-lift"
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
        >
          <span className="font-bold text-navy-500 font-heading pr-4 text-lg">
            {question}
          </span>
          <div
            className={clsx(
              "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
              isOpen
                ? "bg-brand-green text-white rotate-180"
                : "bg-gray-100 text-gray-500"
            )}
          >
            <HiChevronDown className="w-5 h-5" />
          </div>
        </button>
        <div
          className={clsx(
            "overflow-hidden transition-all duration-500",
            isOpen ? "max-h-[600px]" : "max-h-0"
          )}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6">
            {answer}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function FAQPage() {
  return (
    <>
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
