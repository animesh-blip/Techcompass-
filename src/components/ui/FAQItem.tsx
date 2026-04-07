"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { HiChevronDown } from "react-icons/hi2";
import { clsx } from "clsx";

export default function FAQItem({
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
          aria-expanded={isOpen}
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
