import { promises as fs } from "fs";
import path from "path";

const CONTENT_FILE = path.join(process.cwd(), "content", "site-content.json");

export interface SiteContent {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  about: {
    shortDescription: string;
    fullDescription: string[];
    mission: string;
    vision: string;
  };
  contact: {
    email: string;
    phone: string;
    offices: { city: string; address: string[] }[];
  };
  services: {
    id: string;
    title: string;
    description: string;
    benefits: string[];
    roles: string[];
  }[];
  industries: {
    id: string;
    title: string;
    description: string;
    areas: string[];
  }[];
  faqs: { question: string; answer: string }[];
}

export async function getSiteContent(): Promise<SiteContent> {
  const data = await fs.readFile(CONTENT_FILE, "utf-8");
  return JSON.parse(data);
}
