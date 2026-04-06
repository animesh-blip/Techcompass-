import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS, OFFICES } from "@/lib/constants";
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
} from "react-icons/hi2";

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
    <footer className="bg-navy-800 text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo light />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A reliable, fast, and quality-driven staffing partner specializing
              in IT, Engineering, and Professional staffing for US businesses.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <HiEnvelope className="w-4 h-4 text-brand-green" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                {COMPANY.email}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <HiPhone className="w-4 h-4 text-brand-green" />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                {COMPANY.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-6">Our Offices</h3>
            {OFFICES.map((office) => (
              <div key={office.city} className="mb-6">
                <div className="flex items-start space-x-2">
                  <HiMapPin className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">{office.city}</p>
                    {office.address.map((line, i) => (
                      <p key={i} className="text-xs leading-relaxed">
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

      <div className="border-t border-navy-600">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} {COMPANY.fullName} All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/faq" className="hover:text-brand-green transition-colors">
                FAQ
              </Link>
              <span className="text-navy-600">|</span>
              <Link href="/contact" className="hover:text-brand-green transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
