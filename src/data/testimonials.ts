export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Richardson",
    title: "VP of Engineering",
    company: "A Leading FinTech Company",
    quote:
      "TechCompass has been our go-to staffing partner for over two years. Their ability to deliver qualified candidates within 48 hours is remarkable. The quality of their technical screening is among the best we have seen.",
  },
  {
    name: "Sarah Chen",
    title: "Director of IT",
    company: "A Fortune 500 Healthcare Organization",
    quote:
      "We needed 15 EHR specialists for a tight-deadline implementation. TechCompass delivered all positions within three weeks, and every single consultant met our technical and compliance requirements.",
  },
  {
    name: "David Martinez",
    title: "Program Manager",
    company: "A Top-Tier MSP",
    quote:
      "What sets TechCompass apart is their understanding of VMS workflows and compliance requirements. They integrate seamlessly with our processes and consistently rank among our top-performing vendors.",
  },
  {
    name: "Jennifer Okafor",
    title: "CTO",
    company: "A Mid-Size SaaS Company",
    quote:
      "TechCompass helped us scale our engineering team from 20 to 50 in just four months. Their contract-to-hire model minimized our risk while ensuring we brought on the right permanent talent.",
  },
];
