import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Whether you need one specialist or an entire project team, TechCompass
            delivers the right talent, fast. Let&apos;s discuss your staffing needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us Today
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-500">
              See How We Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
