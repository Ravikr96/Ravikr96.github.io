export const site = {
  name: "Ravi Kumar",
  title: "Senior Data & AI Engineer",
  tagline:
    "I design production-grade GenAI systems, Agentic AI workflows, and cloud-native data platforms that scale across enterprise.",
  email: "ravikr.ai@outlook.com",
  phone: "+91 9980914850",
  location: "Bangalore, India",
  availability: "Available for hire & freelance",
  resumeUrl: "/Ravi_Kumar_AI.pdf",
  links: {
    github: "https://github.com/Ravikr96",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-cs/",
    email: "mailto:ravikr.ai@outlook.com",
  },
  stats: [
    { value: "7+", label: "Years experience" },
    { value: "50%", label: "Faster onboarding (RAG)" },
    { value: "60%", label: "Engineering effort saved" },
    { value: "3", label: "Enterprise domains" },
  ],
} as const;

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export const heroRoles = [
  "Senior Data & AI Engineer",
  "GenAI Platform Architect",
  "Agentic AI Specialist",
  "LLMOps Engineer",
] as const;
