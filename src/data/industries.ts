export interface Industry {
  id: string;
  title: string;
  description: string;
  roles: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    id: "it-technology",
    title: "IT & Technology",
    description:
      "Powering innovation in the tech sector with software developers, cloud engineers, data scientists, and cybersecurity experts. We support startups to Fortune 500 companies in building world-class technology teams.",
    roles: [
      "Software Development",
      "Cloud Computing",
      "Data Science & AI",
      "Cybersecurity",
      "ERP & CRM",
    ],
    icon: "HiCpuChip",
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Delivering specialized engineering talent for manufacturing, construction, aerospace, and energy sectors. Our engineers bring technical excellence and project delivery experience.",
    roles: [
      "Mechanical Design",
      "Electrical Systems",
      "Civil Infrastructure",
      "Aerospace",
      "Energy & Utilities",
    ],
    icon: "HiCog6Tooth",
  },
  {
    id: "healthcare-it",
    title: "Healthcare IT",
    description:
      "Supporting digital health transformation with EHR specialists, health informatics professionals, and compliance-focused IT talent who understand HIPAA and healthcare workflows.",
    roles: [
      "EHR Implementation",
      "Health Informatics",
      "Clinical Systems",
      "HIPAA Compliance",
      "Telehealth Solutions",
    ],
    icon: "HiHeart",
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description:
      "Providing skilled finance and accounting professionals who bring analytical rigor and regulatory knowledge to banking, insurance, and financial services organizations.",
    roles: [
      "Financial Analysis",
      "Risk Management",
      "Regulatory Compliance",
      "Accounting Operations",
      "FinTech Solutions",
    ],
    icon: "HiBanknotes",
  },
  {
    id: "administrative-professional",
    title: "Administrative & Professional",
    description:
      "Connecting organizations with skilled administrative and business professionals who enhance operational efficiency and support organizational growth.",
    roles: [
      "Executive Assistance",
      "Office Management",
      "Human Resources",
      "Operations Support",
      "Customer Service",
    ],
    icon: "HiBuildingOffice2",
  },
];
