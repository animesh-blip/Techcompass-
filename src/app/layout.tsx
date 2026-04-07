import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.techcompassservices.com";

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
    "contract to hire",
    "direct hire",
    "US talent acquisition",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TechCompass Services",
    title: "TechCompass Services - US Staffing & Workforce Solutions",
    description: "Connecting businesses with top IT, Engineering, and Professional talent across all 50 US states. W2, C2C, Contract, Contract-to-Hire, and Direct Hire solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCompass Services - US Staffing & Workforce Solutions",
    description: "Connecting businesses with top IT, Engineering, and Professional talent across all 50 US states.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechCompass Services Pvt. Ltd.",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-horizontal.svg`,
    description: "US staffing company specializing in IT, Engineering, and Professional talent solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@techcompassservices.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [],
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="font-body antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
