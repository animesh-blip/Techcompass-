import Link from "next/link";
import Container from "./Container";
import FloatingShapes from "./FloatingShapes";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative gradient-navy py-24 md:py-32 overflow-hidden">
      <FloatingShapes variant="dark" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {breadcrumbs && (
          <nav className="mb-6 animate-fade-in" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-gray-600">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-brand-green font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}
      </Container>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 48C1248 37.3 1344 26.7 1392 21.3L1440 16V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
