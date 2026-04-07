"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY, OFFICES } from "@/lib/constants";
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane } from "react-icons/hi2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a staffing need or want to learn more? We would love to hear from you. Reach out and let's start a conversation."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal variant="left">
              <div>
                <h2 className="text-2xl font-bold text-navy-500 font-heading mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form below and our team will get back to you within
                  24 hours.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                    <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <HiPaperAirplane className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-500 font-heading mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. Our team will respond within 24
                      business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="text-base w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent focus:shadow-[0_0_20px_rgba(124,179,66,0.15)] outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="text-base w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent focus:shadow-[0_0_20px_rgba(124,179,66,0.15)] outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="text-base w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent focus:shadow-[0_0_20px_rgba(124,179,66,0.15)] outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="text-base w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent focus:shadow-[0_0_20px_rgba(124,179,66,0.15)] outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="text-base w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent focus:shadow-[0_0_20px_rgba(124,179,66,0.15)] outline-none transition-all resize-none"
                        placeholder="Tell us about your staffing needs..."
                      />
                    </div>
                    <Button type="submit" variant="secondary" size="lg" className="hover-glow">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal variant="right">
              <div>
                <h2 className="text-2xl font-bold text-navy-500 font-heading mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                      <HiEnvelope className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-500 mb-1">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-gray-600 hover:text-brand-green transition-colors text-lg"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                      <HiPhone className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-500 mb-1">Phone</p>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-gray-600 hover:text-brand-green transition-colors text-lg"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-500 font-heading mb-6">
                  Our Offices
                </h3>

                <div className="space-y-4">
                  {OFFICES.map((office) => (
                    <div
                      key={office.city}
                      className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover-lift transition-all"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <HiMapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-navy-500 mb-2">
                          {office.city} Office
                        </p>
                        {office.address.map((line, i) => (
                          <p key={i} className="text-sm text-gray-600">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
