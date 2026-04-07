"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  HiStar,
  HiDocumentText,
  HiArrowPath,
  HiShieldCheck,
  HiClock,
  HiArrowUturnLeft,
} from "react-icons/hi2";

// ── Types ─────────────────────────────────────────────────
interface SiteContent {
  hero: { badge: string; title: string; titleHighlight: string; subtitle: string; stats: { value: string; label: string }[] };
  about: { shortDescription: string; fullDescription: string[]; mission: string; vision: string };
  contact: { email: string; phone: string; offices: { city: string; address: string[] }[] };
  services: { id: string; title: string; description: string; benefits: string[]; roles: string[] }[];
  industries: { id: string; title: string; description: string; areas: string[] }[];
  faqs: { question: string; answer: string }[];
  whyChooseUs: { title: string; description: string }[];
  engagementModels: { title: string; description: string; tag: string; featured: boolean }[];
  hiringProcess: { title: string; description: string; highlights: string[] }[];
  coreValues: { title: string; description: string }[];
  processStats: { value: string; label: string }[];
}

type SectionKey = keyof typeof sectionMeta;

const sectionMeta = {
  hero: { label: "Home / Hero", icon: HiHome },
  about: { label: "About Us", icon: HiInformationCircle },
  contact: { label: "Contact Info", icon: HiEnvelope },
  services: { label: "Services", icon: HiBriefcase },
  industries: { label: "Industries", icon: HiBuildingOffice2 },
  whyChooseUs: { label: "Why Choose Us", icon: HiStar },
  engagementModels: { label: "Engagement Models", icon: HiDocumentText },
  hiringProcess: { label: "Hiring Process", icon: HiArrowPath },
  coreValues: { label: "Core Values", icon: HiShieldCheck },
  faqs: { label: "FAQs", icon: HiQuestionMarkCircle },
};

const sectionKeys = Object.keys(sectionMeta) as SectionKey[];

// ── Login ─────────────────────────────────────────────────
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
        setError(data.error || "Incorrect password.");
      }
    } catch {
      setError("Connection error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-900 text-base"
            placeholder="Enter password"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <HiExclamationTriangle className="w-4 h-4 flex-shrink-0" /> {error}
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

// ── Reusable Fields ───────────────────────────────────────
function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {children} <span className="text-red-400">*</span>
    </label>
  );
}

function TextField({ label, value, onChange, multiline, placeholder, required, type }: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; placeholder?: string; required?: boolean; type?: string;
}) {
  const LabelComp = required ? RequiredLabel : ({ children }: { children: React.ReactNode }) => (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">{children}</label>
  );
  const isEmpty = required && value.trim() === "";
  return (
    <div className="mb-4">
      <LabelComp>{label}</LabelComp>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} placeholder={placeholder}
          className={clsx("w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-y text-gray-900 text-base", isEmpty ? "border-red-300 bg-red-50/50" : "border-gray-200")} />
      ) : (
        <input type={type || "text"} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
          className={clsx("w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-gray-900 text-base", isEmpty ? "border-red-300 bg-red-50/50" : "border-gray-200")} />
      )}
      {isEmpty && <p className="text-red-400 text-xs mt-1">{label} is required</p>}
    </div>
  );
}

function ListField({ label, items, onChange, placeholder }: {
  label: string; items: string[]; onChange: (items: string[]) => void; placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input type="text" value={item} onChange={(e) => { const u = [...items]; u[i] = e.target.value; onChange(u); }}
              placeholder={placeholder} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-gray-900 text-sm" />
            <button onClick={() => onChange(items.filter((_, idx) => idx !== i))} className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition" title="Remove">
              <HiTrash className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => onChange([...items, ""])} className="mt-2 text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium">
        <HiPlus className="w-4 h-4" /> Add Item
      </button>
    </div>
  );
}

// ── Card Wrapper for Array Editors ────────────────────────
function ArrayEditor<T extends Record<string, unknown>>({ title, description, data, onChange, renderItem, newItem, itemLabel }: {
  title: string; description: string; data: T[]; onChange: (d: T[]) => void;
  renderItem: (item: T, i: number, update: (item: T) => void) => React.ReactNode;
  newItem: () => T; itemLabel: (item: T, i: number) => string;
}) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-6">{description}</p>
      {data.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
          <button onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium text-gray-900">{itemLabel(item, i)}</span>
            </div>
            <span className="text-gray-400 text-sm">{expanded === i ? "Collapse" : "Edit"}</span>
          </button>
          {expanded === i && (
            <div className="p-4 pt-0 border-t border-gray-100">
              {renderItem(item, i, (updated) => { const d = [...data]; d[i] = updated; onChange(d); })}
              <button onClick={() => { onChange(data.filter((_, idx) => idx !== i)); setExpanded(null); }}
                className="mt-2 text-sm text-red-500 hover:text-red-700 flex items-center gap-1">
                <HiTrash className="w-4 h-4" /> Remove
              </button>
            </div>
          )}
        </div>
      ))}
      <button onClick={() => { onChange([...data, newItem()]); setExpanded(data.length); }}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium">
        <HiPlus className="w-4 h-4" /> Add {title.replace(/s$/, "")}
      </button>
    </div>
  );
}

// ── Section Editors ───────────────────────────────────────
function HeroEditor({ data, onChange }: { data: SiteContent["hero"]; onChange: (d: SiteContent["hero"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">Hero Section</h3>
      <p className="text-sm text-gray-500 mb-6">The main banner at the top of the homepage.</p>
      <TextField label="Badge Text" value={data.badge} onChange={(v) => onChange({ ...data, badge: v })} required />
      <TextField label="Title (before highlight)" value={data.title} onChange={(v) => onChange({ ...data, title: v })} required />
      <TextField label="Highlighted Text (green)" value={data.titleHighlight} onChange={(v) => onChange({ ...data, titleHighlight: v })} required />
      <TextField label="Subtitle" value={data.subtitle} onChange={(v) => onChange({ ...data, subtitle: v })} multiline required />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Statistics</h4>
      {data.stats.map((stat, i) => (
        <div key={i} className="grid grid-cols-2 gap-3 mb-2">
          <TextField label={`Value ${i + 1}`} value={stat.value} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], value: v }; onChange({ ...data, stats: s }); }} />
          <TextField label={`Label ${i + 1}`} value={stat.label} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], label: v }; onChange({ ...data, stats: s }); }} />
        </div>
      ))}
    </div>
  );
}

function AboutEditor({ data, onChange }: { data: SiteContent["about"]; onChange: (d: SiteContent["about"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">About Us</h3>
      <p className="text-sm text-gray-500 mb-6">Company description shown on the About page and homepage.</p>
      <TextField label="Short Description" value={data.shortDescription} onChange={(v) => onChange({ ...data, shortDescription: v })} multiline required />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Full Description Paragraphs</h4>
      {data.fullDescription.map((para, i) => (
        <div key={i} className="flex items-start gap-2 mb-3">
          <textarea value={para} onChange={(e) => { const u = [...data.fullDescription]; u[i] = e.target.value; onChange({ ...data, fullDescription: u }); }}
            rows={3} className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition resize-y text-gray-900 text-sm" />
          <button onClick={() => onChange({ ...data, fullDescription: data.fullDescription.filter((_, idx) => idx !== i) })}
            className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition mt-1"><HiTrash className="w-4 h-4" /></button>
        </div>
      ))}
      <button onClick={() => onChange({ ...data, fullDescription: [...data.fullDescription, ""] })}
        className="mb-6 text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"><HiPlus className="w-4 h-4" /> Add Paragraph</button>
      <TextField label="Mission Statement" value={data.mission} onChange={(v) => onChange({ ...data, mission: v })} multiline required />
      <TextField label="Vision Statement" value={data.vision} onChange={(v) => onChange({ ...data, vision: v })} multiline required />
    </div>
  );
}

function ContactEditor({ data, onChange }: { data: SiteContent["contact"]; onChange: (d: SiteContent["contact"]) => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">Contact Information</h3>
      <p className="text-sm text-gray-500 mb-6">Email, phone, and office addresses shown across the website.</p>
      <TextField label="Email Address" value={data.email} onChange={(v) => onChange({ ...data, email: v })} required type="email" />
      <TextField label="Phone Number" value={data.phone} onChange={(v) => onChange({ ...data, phone: v })} required type="tel" />
      <h4 className="text-sm font-bold text-gray-700 mt-6 mb-3">Office Locations</h4>
      {data.offices.map((office, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 mb-4">
          <TextField label="City" value={office.city} onChange={(v) => { const o = [...data.offices]; o[i] = { ...o[i], city: v }; onChange({ ...data, offices: o }); }} required />
          <ListField label="Address Lines" items={office.address} onChange={(addr) => { const o = [...data.offices]; o[i] = { ...o[i], address: addr }; onChange({ ...data, offices: o }); }} />
          <button onClick={() => onChange({ ...data, offices: data.offices.filter((_, idx) => idx !== i) })}
            className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"><HiTrash className="w-4 h-4" /> Remove Office</button>
        </div>
      ))}
      <button onClick={() => onChange({ ...data, offices: [...data.offices, { city: "", address: [""] }] })}
        className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium"><HiPlus className="w-4 h-4" /> Add Office</button>
    </div>
  );
}

function ServicesEditor({ data, onChange }: { data: SiteContent["services"]; onChange: (d: SiteContent["services"]) => void }) {
  return (
    <ArrayEditor title="Services" description="Staffing service categories shown on the Services page."
      data={data} onChange={onChange} itemLabel={(s, i) => s.title || `Service ${i + 1}`}
      newItem={() => ({ id: `service-${Date.now()}`, title: "", description: "", benefits: [""], roles: [""] })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
          <ListField label="Benefits" items={item.benefits} onChange={(b) => update({ ...item, benefits: b })} placeholder="Benefit" />
          <ListField label="Roles We Fill" items={item.roles} onChange={(r) => update({ ...item, roles: r })} placeholder="Role title" />
        </>
      )} />
  );
}

function IndustriesEditor({ data, onChange }: { data: SiteContent["industries"]; onChange: (d: SiteContent["industries"]) => void }) {
  return (
    <ArrayEditor title="Industries" description="Industry verticals shown on the Industries page."
      data={data} onChange={onChange} itemLabel={(ind, i) => ind.title || `Industry ${i + 1}`}
      newItem={() => ({ id: `industry-${Date.now()}`, title: "", description: "", areas: [""] })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
          <ListField label="Focus Areas" items={item.areas} onChange={(a) => update({ ...item, areas: a })} placeholder="Area name" />
        </>
      )} />
  );
}

function WhyChooseUsEditor({ data, onChange }: { data: SiteContent["whyChooseUs"]; onChange: (d: SiteContent["whyChooseUs"]) => void }) {
  return (
    <ArrayEditor title="Why Choose Us" description="Key differentiators shown on the homepage."
      data={data} onChange={onChange} itemLabel={(r, i) => r.title || `Reason ${i + 1}`}
      newItem={() => ({ title: "", description: "" })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
        </>
      )} />
  );
}

function EngagementModelsEditor({ data, onChange }: { data: SiteContent["engagementModels"]; onChange: (d: SiteContent["engagementModels"]) => void }) {
  return (
    <ArrayEditor title="Engagement Models" description="Client engagement types shown on the homepage."
      data={data} onChange={onChange} itemLabel={(m, i) => m.title || `Model ${i + 1}`}
      newItem={() => ({ title: "", description: "", tag: "", featured: false })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
          <TextField label="Tag Label" value={item.tag} onChange={(v) => update({ ...item, tag: v })} placeholder="e.g. Most Popular" />
          <div className="mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className={clsx("relative w-11 h-6 rounded-full transition-colors", item.featured ? "bg-emerald-500" : "bg-gray-300")}
                onClick={() => update({ ...item, featured: !item.featured })}>
                <div className={clsx("absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform", item.featured ? "translate-x-[22px]" : "translate-x-0.5")} />
              </div>
              <span className="text-sm font-medium text-gray-700">Featured (highlighted card)</span>
            </label>
          </div>
        </>
      )} />
  );
}

function HiringProcessEditor({ data, onChange }: { data: SiteContent["hiringProcess"]; onChange: (d: SiteContent["hiringProcess"]) => void }) {
  return (
    <ArrayEditor title="Hiring Process" description="Step-by-step hiring process on the How We Work page."
      data={data} onChange={onChange} itemLabel={(s, i) => s.title || `Step ${i + 1}`}
      newItem={() => ({ title: "", description: "", highlights: [""] })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
          <ListField label="Highlights" items={item.highlights} onChange={(h) => update({ ...item, highlights: h })} placeholder="Key point" />
        </>
      )} />
  );
}

function CoreValuesEditor({ data, onChange }: { data: SiteContent["coreValues"]; onChange: (d: SiteContent["coreValues"]) => void }) {
  return (
    <ArrayEditor title="Core Values" description="Company values shown on the About page."
      data={data} onChange={onChange} itemLabel={(v, i) => v.title || `Value ${i + 1}`}
      newItem={() => ({ title: "", description: "" })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} required />
          <TextField label="Description" value={item.description} onChange={(v) => update({ ...item, description: v })} multiline required />
        </>
      )} />
  );
}

function FAQEditor({ data, onChange }: { data: SiteContent["faqs"]; onChange: (d: SiteContent["faqs"]) => void }) {
  return (
    <ArrayEditor title="FAQs" description="Frequently asked questions on the FAQ page."
      data={data} onChange={onChange} itemLabel={(f, i) => f.question || `FAQ ${i + 1}`}
      newItem={() => ({ question: "", answer: "" })}
      renderItem={(item, _i, update) => (
        <>
          <TextField label="Question" value={item.question} onChange={(v) => update({ ...item, question: v })} required />
          <TextField label="Answer" value={item.answer} onChange={(v) => update({ ...item, answer: v })} multiline required />
        </>
      )} />
  );
}

// ── Backup Restore Modal ──────────────────────────────────
function BackupModal({ token, onRestore, onClose }: { token: string; onRestore: () => void; onClose: () => void }) {
  const [backups, setBackups] = useState<{ filename: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/content/backups", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json()).then(setBackups).catch(() => {}).finally(() => setLoading(false));
  }, [token]);

  const restore = async (filename: string) => {
    if (!confirm(`Restore backup from ${filename}? Current content will be backed up first.`)) return;
    setRestoring(filename);
    try {
      const res = await fetch("/api/content/backups", {
        method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ filename }),
      });
      if (res.ok) { onRestore(); onClose(); } else { alert("Failed to restore."); }
    } catch { alert("Network error."); }
    setRestoring(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Restore from backup">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Restore from Backup</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">✕</button>
        </div>
        {loading ? <p className="text-gray-500 text-sm py-8 text-center">Loading backups...</p> : backups.length === 0 ? (
          <p className="text-gray-500 text-sm py-8 text-center">No backups available yet. Backups are created automatically each time you save.</p>
        ) : (
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {backups.map((b) => (
              <div key={b.filename} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3">
                  <HiClock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700 font-mono">{b.label}</span>
                </div>
                <button onClick={() => restore(b.filename)} disabled={restoring !== null}
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium disabled:opacity-50">
                  {restoring === b.filename ? "Restoring..." : "Restore"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Admin Panel ──────────────────────────────────────
function AdminPanel({ token }: { token: string }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [savedContent, setSavedContent] = useState("");
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ state: "idle" | "success" | "error"; message?: string }>({ state: "idle" });
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBackups, setShowBackups] = useState(false);
  const [sessionMinutes, setSessionMinutes] = useState(0);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const hasUnsavedChanges = content ? JSON.stringify(content) !== savedContent : false;

  const loadContent = useCallback(async () => {
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      setContent(data);
      setSavedContent(JSON.stringify(data));
    } catch { /* handled by loading state */ }
    setLoading(false);
  }, []);

  useEffect(() => { loadContent(); }, [loadContent]);

  // Beforeunload warning
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => { if (hasUnsavedChanges) e.preventDefault(); };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [hasUnsavedChanges]);

  // Ctrl+S / Cmd+S to save
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  // Session timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionMinutes((m) => {
        const next = m + 1;
        if (next === 55) alert("Your session will expire in 5 minutes. Please save your work.");
        if (next >= 60) {
          sessionStorage.removeItem("admin_token");
          window.location.reload();
        }
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = async () => {
    if (!content || saving) return;
    setSaving(true);
    setSaveStatus({ state: "idle" });
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (res.ok) {
        setSavedContent(JSON.stringify(content));
        setSaveStatus({ state: "success" });
        if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = setTimeout(() => setSaveStatus({ state: "idle" }), 3000);
      } else if (res.status === 401) {
        setSaveStatus({ state: "error", message: "Session expired. Please log in again." });
        setTimeout(() => { sessionStorage.removeItem("admin_token"); window.location.reload(); }, 2000);
      } else {
        setSaveStatus({ state: "error", message: data.error || "Save failed." });
      }
    } catch {
      setSaveStatus({ state: "error", message: "Network error. Check your connection." });
    }
    setSaving(false);
  };

  const handleLogout = () => {
    if (hasUnsavedChanges && !window.confirm("You have unsaved changes. Are you sure you want to logout?")) return;
    sessionStorage.removeItem("admin_token");
    window.location.reload();
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="flex items-center gap-3 text-gray-500"><HiArrowPath className="w-5 h-5 animate-spin" /> Loading content...</div></div>;
  if (!content) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><p className="text-red-500 mb-4">Failed to load content.</p><button onClick={loadContent} className="text-emerald-600 font-medium">Retry</button></div></div>;

  const renderEditor = () => {
    switch (activeSection) {
      case "hero": return <HeroEditor data={content.hero} onChange={(d) => setContent({ ...content, hero: d })} />;
      case "about": return <AboutEditor data={content.about} onChange={(d) => setContent({ ...content, about: d })} />;
      case "contact": return <ContactEditor data={content.contact} onChange={(d) => setContent({ ...content, contact: d })} />;
      case "services": return <ServicesEditor data={content.services} onChange={(d) => setContent({ ...content, services: d })} />;
      case "industries": return <IndustriesEditor data={content.industries} onChange={(d) => setContent({ ...content, industries: d })} />;
      case "whyChooseUs": return <WhyChooseUsEditor data={content.whyChooseUs || []} onChange={(d) => setContent({ ...content, whyChooseUs: d })} />;
      case "engagementModels": return <EngagementModelsEditor data={content.engagementModels || []} onChange={(d) => setContent({ ...content, engagementModels: d })} />;
      case "hiringProcess": return <HiringProcessEditor data={content.hiringProcess || []} onChange={(d) => setContent({ ...content, hiringProcess: d })} />;
      case "coreValues": return <CoreValuesEditor data={content.coreValues || []} onChange={(d) => setContent({ ...content, coreValues: d })} />;
      case "faqs": return <FAQEditor data={content.faqs} onChange={(d) => setContent({ ...content, faqs: d })} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showBackups && <BackupModal token={token} onRestore={loadContent} onClose={() => setShowBackups(false)} />}

      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-3 text-gray-500 hover:bg-gray-100 rounded-lg" aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <HiPencilSquare className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline">TechCompass Admin</span>
            {hasUnsavedChanges && <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium hidden sm:inline">Unsaved</span>}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => setShowBackups(true)} className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 px-2 sm:px-3 py-2 hover:bg-gray-100 rounded-lg transition" title="Restore backup">
            <HiArrowUturnLeft className="w-4 h-4" /><span className="hidden sm:inline">Backups</span>
          </button>
          <a href="/" target="_blank" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 px-2 sm:px-3 py-2 hover:bg-gray-100 rounded-lg transition">
            <HiEye className="w-4 h-4" /><span className="hidden sm:inline">View Site</span>
          </a>
          <button onClick={handleSave} disabled={saving}
            className={clsx("px-4 sm:px-5 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2",
              saveStatus.state === "success" ? "bg-emerald-100 text-emerald-700" :
              saveStatus.state === "error" ? "bg-red-100 text-red-700 cursor-pointer" :
              "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700")}>
            {saving ? "Saving..." : saveStatus.state === "success" ? <><HiCheck className="w-4 h-4" /> Saved!</> :
              saveStatus.state === "error" ? <><HiExclamationTriangle className="w-4 h-4" /> Retry</> : <>Save <span className="hidden sm:inline text-white/60 text-xs ml-1">⌘S</span></>}
          </button>
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition" title="Logout">
            <HiArrowRightOnRectangle className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Error banner */}
      {saveStatus.state === "error" && saveStatus.message && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3 flex items-center justify-between">
          <p className="text-red-700 text-sm flex items-center gap-2"><HiExclamationTriangle className="w-4 h-4" /> {saveStatus.message}</p>
          <button onClick={handleSave} className="text-red-700 text-sm font-medium hover:underline">Retry</button>
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside className={clsx("fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-64 bg-white border-r border-gray-200 z-40 transition-transform lg:translate-x-0 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
          <nav className="p-3 space-y-0.5">
            {sectionKeys.map((key) => {
              const { label, icon: Icon } = sectionMeta[key];
              return (
                <button key={key} onClick={() => { setActiveSection(key); setSidebarOpen(false); }}
                  className={clsx("w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all text-sm font-medium",
                    activeSection === key ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
                  <Icon className="w-5 h-5 flex-shrink-0" />{label}
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-100 mt-2">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <HiClock className="w-3.5 h-3.5" /> Session: {sessionMinutes}m / 60m
            </div>
            <p className="text-xs text-gray-400">Press <kbd className="bg-gray-100 px-1 rounded text-gray-500">⌘S</kbd> to save. Changes go live after saving.</p>
          </div>
        </aside>

        {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_token");
    if (stored) setToken(stored);
  }, []);
  if (!token) return <LoginScreen onLogin={setToken} />;
  return <AdminPanel token={token} />;
}
