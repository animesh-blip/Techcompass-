export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Java Developer",
    location: "Remote (US)",
    type: "Contract",
    experience: "8+ years",
    description:
      "Looking for a Senior Java Developer with strong experience in microservices architecture, Spring Boot, and cloud platforms (AWS/Azure).",
    skills: ["Java", "Spring Boot", "AWS", "Microservices", "REST APIs"],
  },
  {
    id: "2",
    title: "SAP FICO Consultant",
    location: "New York, NY",
    type: "Contract-to-Hire",
    experience: "6+ years",
    description:
      "Seeking an SAP FICO Consultant for a large-scale S/4HANA migration project with a Fortune 500 client.",
    skills: ["SAP FICO", "S/4HANA", "SAP ECC", "Financial Accounting", "Migration"],
  },
  {
    id: "3",
    title: "Cloud Solutions Architect",
    location: "San Francisco, CA",
    type: "Full-Time",
    experience: "10+ years",
    description:
      "Enterprise client seeking a Cloud Solutions Architect to design and implement multi-cloud strategies across AWS and Azure environments.",
    skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Solution Architecture"],
  },
  {
    id: "4",
    title: "Data Engineer",
    location: "Remote (US)",
    type: "Contract",
    experience: "5+ years",
    description:
      "Data Engineer needed for building scalable data pipelines and analytics platforms using modern data stack technologies.",
    skills: ["Python", "Spark", "Snowflake", "Airflow", "SQL"],
  },
  {
    id: "5",
    title: "Scrum Master",
    location: "Chicago, IL",
    type: "Contract-to-Hire",
    experience: "4+ years",
    description:
      "Certified Scrum Master to lead agile transformation for a large banking client with multiple development teams.",
    skills: ["Scrum", "SAFe", "Jira", "Agile Coaching", "Stakeholder Management"],
  },
  {
    id: "6",
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-Time",
    experience: "5+ years",
    description:
      "DevOps Engineer to build and maintain CI/CD pipelines, containerized environments, and infrastructure as code.",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
  },
];
