"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { clsx } from "clsx";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-brand-green/10"
          : "bg-white/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo variant="horizontal" />

          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 animated-underline",
                  pathname === link.href
                    ? "text-brand-green font-semibold"
                    : "text-navy-500 hover:text-brand-green"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/contact"
              variant="secondary"
              size="sm"
              className="ml-4 animate-pulse-glow"
            >
              Get Started
            </Button>
          </nav>

          <button
            className="lg:hidden p-3 text-navy-500 hover:text-brand-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 bg-white/95 backdrop-blur-md border-t">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                pathname === link.href
                  ? "text-brand-green bg-green-50"
                  : "text-navy-500 hover:bg-gray-50 hover:text-brand-green"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="w-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
