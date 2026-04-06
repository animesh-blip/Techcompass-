"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { NetworkNodes } from "@/components/ui/TechPattern";
import {
  HiCpuChip,
  HiCog6Tooth,
  HiBanknotes,
  HiBuildingOffice2,
} from "react-icons/hi2";

const industries = [
  { icon: HiCpuChip, title: "IT & Technology", color: "from-blue-500 to-cyan-500" },
  { icon: HiCog6Tooth, title: "Engineering", color: "from-orange-500 to-amber-500" },
  { icon: HiBanknotes, title: "Finance & Accounting", color: "from-emerald-500 to-green-500" },
  { icon: HiBuildingOffice2, title: "Administrative", color: "from-purple-500 to-indigo-500" },
];

export default function IndustriesPreview() {
  return (
    <section className="relative py-24 gradient-navy overflow-hidden">
      <FloatingShapes variant="dark" />
      <NetworkNodes className="left-0 top-0 w-[420px] h-[340px] text-brand-green opacity-30 hidden lg:block" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Industries We Serve"
            subtitle="Deep domain expertise across key industry verticals enables us to deliver candidates who understand your business."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} variant="scale" delay={index * 120}>
              <div className="group glass-card p-8 text-center hover-lift cursor-pointer transition-all duration-500">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {industry.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button
              href="/industries"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-navy-500 backdrop-blur-sm"
            >
              View All Industries
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
