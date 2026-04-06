import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const models = [
  {
    title: "W2 Employment",
    description: "Consultants on our payroll with full tax compliance, benefits eligibility, and workers compensation coverage.",
    tag: "Most Popular",
  },
  {
    title: "Corp-to-Corp (C2C)",
    description: "For independent contractors working through their own corporation. Flexible arrangements with streamlined onboarding.",
    tag: "Flexible",
  },
  {
    title: "Contract",
    description: "Time-bound engagements for project-specific needs. Scale up or down based on business demands.",
    tag: "Scalable",
  },
  {
    title: "Contract-to-Hire",
    description: "Evaluate consultants on the job before making a permanent offer. Minimize hiring risk with a try-before-you-buy approach.",
    tag: "Low Risk",
  },
  {
    title: "Full-Time / Direct Hire",
    description: "End-to-end permanent placement services. We find, screen, and present the best candidates for your team.",
    tag: "Permanent",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Client Engagement Models"
          subtitle="Flexible staffing arrangements designed to meet your specific business requirements and preferences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div
              key={model.title}
              className={`relative p-6 rounded-xl border-2 border-gray-100 hover:border-brand-green transition-colors ${
                index === 0 ? "lg:col-span-1 bg-navy-500 text-white border-navy-500" : "bg-white"
              }`}
            >
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                  index === 0
                    ? "bg-brand-green text-white"
                    : "bg-brand-green/10 text-brand-green"
                }`}
              >
                {model.tag}
              </span>
              <h3
                className={`text-lg font-semibold font-heading mb-2 ${
                  index === 0 ? "text-white" : "text-navy-500"
                }`}
              >
                {model.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  index === 0 ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
