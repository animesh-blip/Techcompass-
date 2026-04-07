import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/ui/FloatingShapes";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-600 via-navy-500 to-navy-800">
      <FloatingShapes variant="hero" />
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <Container className="relative z-10 text-center py-20">
        <p className="text-8xl md:text-9xl font-bold gradient-text font-heading mb-4">404</p>
        <h1 className="text-2xl md:text-4xl font-bold text-white font-heading mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 text-lg max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-navy-500">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
