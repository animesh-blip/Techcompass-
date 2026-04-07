import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: {
    default: "TechCompass Services - US Staffing & Workforce Solutions",
    template: "%s | TechCompass Services",
  },
  description:
    "TechCompass Services is a leading US staffing company specializing in IT, Engineering, and Professional talent. W2, C2C, Contract, Contract-to-Hire, and Direct Hire workforce solutions.",
  keywords: [
    "US staffing company",
    "IT staffing",
    "engineering staffing",
    "professional staffing",
    "contract staffing",
    "W2 staffing",
    "C2C staffing",
    "workforce solutions",
    "tech recruitment",
    "staffing agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="font-body antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
