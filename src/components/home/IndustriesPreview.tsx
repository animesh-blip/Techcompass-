import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  HiCpuChip,
  HiCog6Tooth,
  HiHeart,
  HiBanknotes,
  HiBuildingOffice2,
} from "react-icons/hi2";

const industries = [
  { icon: HiCpuChip, title: "IT & Technology", color: "bg-blue-500" },
  { icon: HiCog6Tooth, title: "Engineering", color: "bg-orange-500" },
  { icon: HiHeart, title: "Healthcare IT", color: "bg-red-500" },
  { icon: HiBanknotes, title: "Finance & Accounting", color: "bg-emerald-500" },
  { icon: HiBuildingOffice2, title: "Administrative", color: "bg-purple-500" },
];

export default function IndustriesPreview() {
  return (
    <section className="py-20 gradient-navy">
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Deep domain expertise across key industry verticals enables us to deliver candidates who understand your business."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <div
                className={`w-14 h-14 ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-medium text-sm">{industry.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/industries" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-500">
            View All Industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
