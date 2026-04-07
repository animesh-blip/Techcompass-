// Lightweight schema validation for site content
// Ensures the admin panel can't save data that would break the site

interface ValidationError {
  path: string;
  message: string;
}

function isString(val: unknown): val is string {
  return typeof val === "string";
}

function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val);
}

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

export function validateSiteContent(data: unknown): { valid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (!isObject(data)) {
    return { valid: false, errors: [{ path: "", message: "Content must be an object" }] };
  }

  // Hero
  if (!isObject(data.hero)) {
    errors.push({ path: "hero", message: "Hero section is required" });
  } else {
    if (!isString(data.hero.badge)) errors.push({ path: "hero.badge", message: "Badge text is required" });
    if (!isString(data.hero.title)) errors.push({ path: "hero.title", message: "Title is required" });
    if (!isString(data.hero.titleHighlight)) errors.push({ path: "hero.titleHighlight", message: "Highlight text is required" });
    if (!isString(data.hero.subtitle)) errors.push({ path: "hero.subtitle", message: "Subtitle is required" });
    if (!isArray(data.hero.stats)) errors.push({ path: "hero.stats", message: "Stats must be an array" });
  }

  // About
  if (!isObject(data.about)) {
    errors.push({ path: "about", message: "About section is required" });
  } else {
    if (!isString(data.about.shortDescription)) errors.push({ path: "about.shortDescription", message: "Short description is required" });
    if (!isArray(data.about.fullDescription)) errors.push({ path: "about.fullDescription", message: "Full description must be an array" });
    if (!isString(data.about.mission)) errors.push({ path: "about.mission", message: "Mission is required" });
    if (!isString(data.about.vision)) errors.push({ path: "about.vision", message: "Vision is required" });
  }

  // Contact
  if (!isObject(data.contact)) {
    errors.push({ path: "contact", message: "Contact section is required" });
  } else {
    if (!isString(data.contact.email)) errors.push({ path: "contact.email", message: "Email is required" });
    if (!isString(data.contact.phone)) errors.push({ path: "contact.phone", message: "Phone is required" });
    if (!isArray(data.contact.offices)) errors.push({ path: "contact.offices", message: "Offices must be an array" });
  }

  // Services
  if (!isArray(data.services)) {
    errors.push({ path: "services", message: "Services must be an array" });
  } else if (data.services.length === 0) {
    errors.push({ path: "services", message: "At least one service is required" });
  } else {
    (data.services as unknown[]).forEach((s, i) => {
      if (!isObject(s)) return errors.push({ path: `services[${i}]`, message: "Service must be an object" });
      if (!isString(s.title) || s.title.trim() === "") errors.push({ path: `services[${i}].title`, message: "Service title is required" });
    });
  }

  // Industries
  if (!isArray(data.industries)) {
    errors.push({ path: "industries", message: "Industries must be an array" });
  } else if (data.industries.length === 0) {
    errors.push({ path: "industries", message: "At least one industry is required" });
  }

  // FAQs
  if (!isArray(data.faqs)) {
    errors.push({ path: "faqs", message: "FAQs must be an array" });
  }

  // Optional sections (can be missing but if present must be arrays)
  if (data.whyChooseUs !== undefined && !isArray(data.whyChooseUs)) {
    errors.push({ path: "whyChooseUs", message: "Why Choose Us must be an array" });
  }
  if (data.engagementModels !== undefined && !isArray(data.engagementModels)) {
    errors.push({ path: "engagementModels", message: "Engagement Models must be an array" });
  }
  if (data.hiringProcess !== undefined && !isArray(data.hiringProcess)) {
    errors.push({ path: "hiringProcess", message: "Hiring Process must be an array" });
  }
  if (data.coreValues !== undefined && !isArray(data.coreValues)) {
    errors.push({ path: "coreValues", message: "Core Values must be an array" });
  }
  if (data.processStats !== undefined && !isArray(data.processStats)) {
    errors.push({ path: "processStats", message: "Process Stats must be an array" });
  }

  // Check for suspiciously large content (potential abuse)
  const jsonStr = JSON.stringify(data);
  if (jsonStr.length > 500000) {
    errors.push({ path: "", message: "Content exceeds maximum size (500KB)" });
  }

  // Check for HTML/script injection in string values
  const htmlPattern = /<script|<iframe|javascript:|on\w+\s*=/i;
  function checkStrings(obj: unknown, path: string) {
    if (isString(obj) && htmlPattern.test(obj)) {
      errors.push({ path, message: "Content contains potentially unsafe HTML" });
    } else if (isArray(obj)) {
      obj.forEach((item, i) => checkStrings(item, `${path}[${i}]`));
    } else if (isObject(obj)) {
      Object.entries(obj).forEach(([key, val]) => checkStrings(val, `${path}.${key}`));
    }
  }
  checkStrings(data, "root");

  return { valid: errors.length === 0, errors };
}
