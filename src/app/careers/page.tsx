"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { jobs } from "@/data/jobs";
import {
  HiMapPin,
  HiBriefcase,
  HiClock,
  HiArrowUpTray,
  HiCheckCircle,
  HiMagnifyingGlass,
} from "react-icons/hi2";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [resumeSubmitted, setResumeSubmitted] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  const jobTypes = ["All", ...Array.from(new Set(jobs.map((j) => j.type)))];

  return (
    <>
      <PageHero
        title="Career Opportunities"
        subtitle="Join leading US companies through TechCompass. We connect skilled IT professionals with exciting opportunities across the nation."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Why Join */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top US Employers",
                description:
                  "Access positions with Fortune 500 companies, innovative startups, and everything in between.",
              },
              {
                title: "Competitive Compensation",
                description:
                  "W2 positions with benefits or competitive C2C rates. We negotiate the best packages for our consultants.",
              },
              {
                title: "Career Growth",
                description:
                  "Long-term assignments, contract-to-hire opportunities, and a dedicated recruiter supporting your career journey.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <h3 className="text-lg font-semibold text-navy-500 font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Open Positions"
            subtitle="Browse our current opportunities. New positions are added daily."
          />

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === type
                      ? "bg-navy-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4 mb-12">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <p className="text-gray-500">
                  No positions match your search. Try different keywords or
                  filters.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 border border-gray-200 rounded-xl hover:border-brand-green hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-500 font-heading">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <HiMapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiBriefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiClock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-brand-green/10 text-brand-green-dark text-xs rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button href="/contact" variant="outline" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </Container>
      </section>

      {/* Resume Upload */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Submit Your Resume"
              subtitle="Don't see the right position? Submit your resume and our recruiters will match you with upcoming opportunities."
            />

            {resumeSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <HiCheckCircle className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-500 font-heading mb-2">
                  Resume Received!
                </h3>
                <p className="text-gray-600">
                  Our recruiting team will review your profile and reach out when
                  a matching opportunity is available.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 mb-6 cursor-pointer hover:border-brand-green transition-colors"
                  onClick={() => setResumeSubmitted(true)}
                >
                  <HiArrowUpTray className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-1">
                    Click to upload your resume
                  </p>
                  <p className="text-sm text-gray-400">
                    PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={() => setResumeSubmitted(true)}
                >
                  Submit Resume
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
