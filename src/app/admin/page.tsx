"use client";

import { useState, useEffect, useCallback } from "react";
import { clsx } from "clsx";
import {
  HiHome,
  HiInformationCircle,
  HiEnvelope,
  HiBriefcase,
  HiBuildingOffice2,
  HiQuestionMarkCircle,
  HiArrowRightOnRectangle,
  HiCheck,
  HiExclamationTriangle,
  HiPencilSquare,
  HiPlus,
  HiTrash,
  HiEye,
} from "react-icons/hi2";

interface SiteContent {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  about: {
    shortDescription: string;
    fullDescription: string[];
    mission: string;
    vision: string;
  };
  contact: {
    email: string;
    phone: string;
    offices: { city: string; address: string[] }[];
  };
  services: {
    id: string;
    title: string;
    description: string;
    benefits: string[];
    roles: string[];
  }[];
  industries: {
    id: string;
    title: string;
    description: string;
    areas: string[];
  }[];
  faqs: { question: string; answer: string }[];
}

type SectionKey = "hero" | "about" | "contact" | "services" | "industries" | "faqs";

const sections: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "hero", label: "Home / Hero", icon: HiHome },
  { key: "about", label: "About Us", icon: HiInformationCircle },
  { key: "contact", label: "Contact Info", icon: HiEnvelope },
  { key: "services", label: "Services", icon: HiBriefcase },
  { key: "industries", label: "Industries", icon: HiBuildingOffice2 },
  { key: "faqs", label: "FAQs", icon: HiQuestionMarkCircle },
];

// ── Login Screen ──────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("admin_token", data.token);
        onLogin(data.token);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HiPencilSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">TechCompass Admin</h1>
          <p className="text-gray-500 mt-1">Enter your password to manage website content</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-900"
            placeholder="Enter password"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <HiExclamationTriangle className="w-4 h-4" /> {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Field Components ──────────────────────────────────────
function TextField({
  label,
  value,
  onChange,
  multiline,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-y text-gray-900"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-900"
        />
      )}
    </div>
  );
}

function ListField({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = e.target.value;
                onChange(updated);
              }}
              placeholder={placeholder}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-900 text-sm"
            />
            <button
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
              title="Remove"
            >
              <HiTrash className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => onChange([...items, ""])}
        className="mt-2 text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add Item
      </button>
    </div>
  );
}

// ── Section Editors ───────────────────────────────────────
function HeroEditor({ data, onChange }: { data: SiteContent["hero"]; onChange: (d: SiteContent["hero"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Hero Section</h3>
      <p className="text-sm text-gray-500 mb-6">This is the main banner at the top of the homepage.</p>
      <TextField label="Badge Text" value={data.badge} onChange={(v) => onChange({ ...data, badge: v })} />
      <TextField label="Title (before highlight)" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <TextField label="Highlighted Text (green)" value={data.titleHighlight} onChange={(v) => onChange({ ...data, titleHighlight: v })} />
      <TextField label="Subtitle" value={data.subtitle} onChange={(v) => onChange({ ...data, subtitle: v })} multiline />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Statistics</h4>
      {data.stats.map((stat, i) => (
        <div key={i} className="grid grid-cols-2 gap-3 mb-2">
          <TextField
            label={`Stat ${i + 1} Value`}
            value={stat.value}
            onChange={(v) => {
              const stats = [...data.stats];
              stats[i] = { ...stats[i], value: v };
              onChange({ ...data, stats });
            }}
          />
          <TextField
            label={`Stat ${i + 1} Label`}
            value={stat.label}
            onChange={(v) => {
              const stats = [...data.stats];
              stats[i] = { ...stats[i], label: v };
              onChange({ ...data, stats });
            }}
          />
        </div>
      ))}
    </div>
  );
}

function AboutEditor({ data, onChange }: { data: SiteContent["about"]; onChange: (d: SiteContent["about"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">About Us</h3>
      <p className="text-sm text-gray-500 mb-6">Company description, mission, and vision shown on the About page and homepage.</p>
      <TextField label="Short Description (Homepage)" value={data.shortDescription} onChange={(v) => onChange({ ...data, shortDescription: v })} multiline />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Full Description Paragraphs</h4>
      {data.fullDescription.map((para, i) => (
        <div key={i} className="mb-3">
          <div className="flex items-start gap-2">
            <textarea
              value={para}
              onChange={(e) => {
                const updated = [...data.fullDescription];
                updated[i] = e.target.value;
                onChange({ ...data, fullDescription: updated });
              }}
              rows={3}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-y text-gray-900 text-sm"
            />
            <button
              onClick={() => onChange({ ...data, fullDescription: data.fullDescription.filter((_, idx) => idx !== i) })}
              className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition mt-1"
            >
              <HiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => onChange({ ...data, fullDescription: [...data.fullDescription, ""] })}
        className="mb-6 text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add Paragraph
      </button>
      <TextField label="Mission Statement" value={data.mission} onChange={(v) => onChange({ ...data, mission: v })} multiline />
      <TextField label="Vision Statement" value={data.vision} onChange={(v) => onChange({ ...data, vision: v })} multiline />
    </div>
  );
}

function ContactEditor({ data, onChange }: { data: SiteContent["contact"]; onChange: (d: SiteContent["contact"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
      <p className="text-sm text-gray-500 mb-6">Email, phone number, and office addresses shown on the Contact page and footer.</p>
      <TextField label="Email Address" value={data.email} onChange={(v) => onChange({ ...data, email: v })} />
      <TextField label="Phone Number" value={data.phone} onChange={(v) => onChange({ ...data, phone: v })} />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Office Locations</h4>
      {data.offices.map((office, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 mb-4">
          <TextField
            label="City"
            value={office.city}
            onChange={(v) => {
              const offices = [...data.offices];
              offices[i] = { ...offices[i], city: v };
              onChange({ ...data, offices });
            }}
          />
          <ListField
            label="Address Lines"
            items={office.address}
            onChange={(addr) => {
              const offices = [...data.offices];
              offices[i] = { ...offices[i], address: addr };
              onChange({ ...data, offices });
            }}
          />
        </div>
      ))}
      <button
        onClick={() => onChange({ ...data, offices: [...data.offices, { city: "", address: [""] }] })}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add Office
      </button>
    </div>
  );
}

function ServicesEditor({ data, onChange }: { data: SiteContent["services"]; onChange: (d: SiteContent["services"]) => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
      <p className="text-sm text-gray-500 mb-6">Staffing service categories shown on the Services page.</p>
      {data.map((service, i) => (
        <div key={i} className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-900">{service.title || `Service ${i + 1}`}</span>
            <span className="text-gray-400 text-sm">{expanded === i ? "Collapse" : "Edit"}</span>
          </button>
          {expanded === i && (
            <div className="p-4 pt-0 border-t border-gray-100">
              <TextField label="Title" value={service.title} onChange={(v) => { const s = [...data]; s[i] = { ...s[i], title: v }; onChange(s); }} />
              <TextField label="Description" value={service.description} onChange={(v) => { const s = [...data]; s[i] = { ...s[i], description: v }; onChange(s); }} multiline />
              <ListField label="Benefits" items={service.benefits} onChange={(b) => { const s = [...data]; s[i] = { ...s[i], benefits: b }; onChange(s); }} placeholder="Benefit" />
              <ListField label="Roles We Fill" items={service.roles} onChange={(r) => { const s = [...data]; s[i] = { ...s[i], roles: r }; onChange(s); }} placeholder="Role title" />
              <button
                onClick={() => onChange(data.filter((_, idx) => idx !== i))}
                className="mt-2 text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <HiTrash className="w-4 h-4" /> Remove Service
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => onChange([...data, { id: `service-${Date.now()}`, title: "", description: "", benefits: [""], roles: [""] }])}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add Service
      </button>
    </div>
  );
}

function IndustriesEditor({ data, onChange }: { data: SiteContent["industries"]; onChange: (d: SiteContent["industries"]) => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Industries</h3>
      <p className="text-sm text-gray-500 mb-6">Industry verticals shown on the Industries page.</p>
      {data.map((ind, i) => (
        <div key={i} className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-900">{ind.title || `Industry ${i + 1}`}</span>
            <span className="text-gray-400 text-sm">{expanded === i ? "Collapse" : "Edit"}</span>
          </button>
          {expanded === i && (
            <div className="p-4 pt-0 border-t border-gray-100">
              <TextField label="Title" value={ind.title} onChange={(v) => { const d = [...data]; d[i] = { ...d[i], title: v }; onChange(d); }} />
              <TextField label="Description" value={ind.description} onChange={(v) => { const d = [...data]; d[i] = { ...d[i], description: v }; onChange(d); }} multiline />
              <ListField label="Focus Areas" items={ind.areas} onChange={(a) => { const d = [...data]; d[i] = { ...d[i], areas: a }; onChange(d); }} placeholder="Area name" />
              <button
                onClick={() => onChange(data.filter((_, idx) => idx !== i))}
                className="mt-2 text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <HiTrash className="w-4 h-4" /> Remove Industry
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => onChange([...data, { id: `industry-${Date.now()}`, title: "", description: "", areas: [""] }])}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add Industry
      </button>
    </div>
  );
}

function FAQEditor({ data, onChange }: { data: SiteContent["faqs"]; onChange: (d: SiteContent["faqs"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">FAQs</h3>
      <p className="text-sm text-gray-500 mb-6">Frequently asked questions shown on the FAQ page.</p>
      {data.map((faq, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="text-xs font-medium text-gray-400 mt-1">Q{i + 1}</span>
            <button
              onClick={() => onChange(data.filter((_, idx) => idx !== i))}
              className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <HiTrash className="w-4 h-4" />
            </button>
          </div>
          <TextField label="Question" value={faq.question} onChange={(v) => { const f = [...data]; f[i] = { ...f[i], question: v }; onChange(f); }} />
          <TextField label="Answer" value={faq.answer} onChange={(v) => { const f = [...data]; f[i] = { ...f[i], answer: v }; onChange(f); }} multiline />
        </div>
      ))}
      <button
        onClick={() => onChange([...data, { question: "", answer: "" }])}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"
      >
        <HiPlus className="w-4 h-4" /> Add FAQ
      </button>
    </div>
  );
}

// ── Main Admin Panel ──────────────────────────────────────
function AdminPanel({ token }: { token: string }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadContent = useCallback(async () => {
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      setContent(data);
    } catch {
      console.error("Failed to load content");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const handleSave = async () => {
    if (!content) return;
    setSaving(true);
    setSaveStatus("idle");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    } catch {
      setSaveStatus("error");
    }
    setSaving(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading content...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Failed to load content. Please refresh.</div>
      </div>
    );
  }

  const renderEditor = () => {
    switch (activeSection) {
      case "hero":
        return <HeroEditor data={content.hero} onChange={(d) => setContent({ ...content, hero: d })} />;
      case "about":
        return <AboutEditor data={content.about} onChange={(d) => setContent({ ...content, about: d })} />;
      case "contact":
        return <ContactEditor data={content.contact} onChange={(d) => setContent({ ...content, contact: d })} />;
      case "services":
        return <ServicesEditor data={content.services} onChange={(d) => setContent({ ...content, services: d })} />;
      case "industries":
        return <IndustriesEditor data={content.industries} onChange={(d) => setContent({ ...content, industries: d })} />;
      case "faqs":
        return <FAQEditor data={content.faqs} onChange={(d) => setContent({ ...content, faqs: d })} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <HiPencilSquare className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline">TechCompass Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition"
          >
            <HiEye className="w-4 h-4" /> View Site
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className={clsx(
              "px-5 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2",
              saveStatus === "success"
                ? "bg-emerald-100 text-emerald-700"
                : saveStatus === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
            )}
          >
            {saving ? (
              "Saving..."
            ) : saveStatus === "success" ? (
              <><HiCheck className="w-4 h-4" /> Saved!</>
            ) : saveStatus === "error" ? (
              <><HiExclamationTriangle className="w-4 h-4" /> Error</>
            ) : (
              "Save Changes"
            )}
          </button>
          <button
            onClick={handleLogout}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
            title="Logout"
          >
            <HiArrowRightOnRectangle className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={clsx(
            "fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-64 bg-white border-r border-gray-200 z-40 transition-transform lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="p-4 space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.key}
                  onClick={() => {
                    setActiveSection(section.key);
                    setSidebarOpen(false);
                  }}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all text-sm font-medium",
                    activeSection === section.key
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {section.label}
                </button>
              );
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              Changes are saved to the server when you click &quot;Save Changes&quot;.
              You may need to refresh the website to see updates.
            </p>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
}

// ── Root Component ────────────────────────────────────────
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_token");
    if (stored) setToken(stored);
  }, []);

  if (!token) return <LoginScreen onLogin={setToken} />;
  return <AdminPanel token={token} />;
}
