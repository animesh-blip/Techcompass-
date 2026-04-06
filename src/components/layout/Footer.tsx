import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS, OFFICES } from "@/lib/constants";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";

const serviceLinks = [
  { label: "IT Staffing", href: "/services#it-staffing" },
  { label: "Engineering Staffing", href: "/services#engineering-staffing" },
  { label: "Professional Staffing", href: "/services#professional-staffing" },
  { label: "Contract Staffing", href: "/services#contract-staffing" },
  { label: "Contract-to-Hire", href: "/services#contract-to-hire" },
  { label: "Direct Hire", href: "/services#direct-hire" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-800 text-gray-300 overflow-hidden">
      {/* Gradient divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo variant="stacked" light />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              A reliable, fast, and quality-driven staffing partner specializing
              in IT, Engineering, and Professional staffing for US businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm group">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green/30 transition-colors">
                  <HiEnvelope className="w-4 h-4 text-brand-green" />
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm group">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green/30 transition-colors">
                  <HiPhone className="w-4 h-4 text-brand-green" />
                </div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-green transition-colors animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6 text-lg">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-green transition-colors animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6 text-lg">
              Our Offices
            </h3>
            {OFFICES.map((office) => (
              <div key={office.city} className="mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiMapPin className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      {office.city}
                    </p>
                    {office.address.map((line, i) => (
                      <p key={i} className="text-xs leading-relaxed text-gray-400">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-navy-600/50">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.fullName} All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/faq"
                className="hover:text-brand-green transition-colors"
              >
                FAQ
              </Link>
              <span className="text-navy-600">|</span>
              <Link
                href="/contact"
                className="hover:text-brand-green transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
