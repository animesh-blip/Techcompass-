import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "TechCompass Services - US IT Staffing & Workforce Solutions",
    template: "%s | TechCompass Services",
  },
  description:
    "TechCompass Services is a leading US IT staffing company providing top talent in IT, Engineering, and Professional staffing. W2, C2C, Contract, Contract-to-Hire, and Direct Hire solutions.",
  keywords: [
    "US IT staffing",
    "IT staffing company",
    "contract staffing",
    "W2 staffing",
    "C2C staffing",
    "workforce solutions",
    "tech recruitment",
    "engineering staffing",
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
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
