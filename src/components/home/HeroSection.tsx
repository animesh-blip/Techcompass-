import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-800 min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green rounded-full blur-[120px] opacity-20" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-brand-green/20 rounded-full mb-6">
            <span className="text-brand-green-light text-sm font-semibold tracking-wide">
              US IT Staffing & Workforce Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
            Connecting Top Talent with{" "}
            <span className="text-brand-green">Leading US Companies</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Your trusted staffing partner for IT, Engineering, and Professional
            talent. We deliver pre-vetted, high-quality candidates with speed
            and precision across all 50 states.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Hire Talent
            </Button>
            <Button href="/careers" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-500">
              Find Jobs
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Placements" },
              { number: "150+", label: "Active Clients" },
              { number: "24-48h", label: "Avg. Turnaround" },
              { number: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-brand-green font-heading">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
