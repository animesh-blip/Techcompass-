"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqs } from "@/data/faq";
import { HiChevronDown } from "react-icons/hi2";
import { clsx } from "clsx";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-navy-500 font-heading pr-4">
          {question}
        </span>
        <HiChevronDown
          className={clsx(
            "w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
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

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Common Questions"
            subtitle="Everything you need to know about working with TechCompass."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-500 font-heading mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              ready to help with any questions about our staffing services.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Our Team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
