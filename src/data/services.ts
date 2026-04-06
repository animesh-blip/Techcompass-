export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  roles: string[];
  icon: string;
}

export const staffingServices: Service[] = [
  {
    id: "it-staffing",
    title: "IT Staffing",
    description:
      "We connect businesses with top-tier IT professionals who drive digital transformation. From cloud architects to full-stack developers, our extensive talent network ensures you get the right technical expertise for your projects.",
    benefits: [
      "Access to pre-vetted IT professionals",
      "Rapid fulfillment within 24-48 hours",
      "Technical skill validation by industry experts",
      "Scalable teams for project-based needs",
    ],
    roles: [
      "Software Engineers",
      "Cloud Architects",
      "DevOps Engineers",
      "Data Engineers",
      "SAP Consultants",
      "Cybersecurity Analysts",
      "Full-Stack Developers",
      "QA Engineers",
    ],
    icon: "HiComputerDesktop",
  },
  {
    id: "engineering-staffing",
    title: "Engineering Staffing",
    description:
      "Our engineering staffing solutions provide skilled professionals for complex technical projects. We understand the nuances of engineering disciplines and match candidates who bring both expertise and innovation to your team.",
    benefits: [
      "Specialized engineering talent pipeline",
      "Domain-specific screening processes",
      "Compliance with industry certifications",
      "Flexible engagement models",
    ],
    roles: [
      "Mechanical Engineers",
      "Electrical Engineers",
      "Systems Engineers",
      "Project Engineers",
      "Civil Engineers",
      "Industrial Engineers",
      "Manufacturing Engineers",
    ],
    icon: "HiWrenchScrewdriver",
  },
  {
    id: "professional-staffing",
    title: "Professional Staffing",
    description:
      "Beyond technology and engineering, we provide qualified professionals across business functions. Our professional staffing division covers administrative, financial, and operational roles that keep organizations running smoothly.",
    benefits: [
      "Comprehensive candidate assessment",
      "Cultural fit evaluation",
      "Background verification included",
      "Quick ramp-up capability",
    ],
    roles: [
      "Business Analysts",
      "Project Managers",
      "Scrum Masters",
      "Data Analysts",
      "Financial Analysts",
      "HR Specialists",
      "Technical Writers",
    ],
    icon: "HiBriefcase",
  },
];

export const hiringModels = [
  {
    title: "Contract Staffing",
    description:
      "Flexible workforce solutions for project-based needs. Engage skilled professionals on W2 or C2C basis with full compliance management.",
    icon: "HiDocumentText",
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before making a permanent commitment. Reduce hiring risk while ensuring cultural and technical fit.",
    icon: "HiArrowPath",
  },
  {
    title: "Direct Hire",
    description:
      "Full-cycle permanent placement services. We handle sourcing, screening, and presenting top candidates for your full-time positions.",
    icon: "HiUserPlus",
  },
];
