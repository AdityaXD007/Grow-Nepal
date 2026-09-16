export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Smartphone" | "Globe" | "Cpu" | "LifeBuoy" | "ShieldCheck" | "Zap";
  inclusions: string[];
  techStack: string[];
  approachNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: string;
  category: "Mobile App" | "Web Application" | "IT Consulting" | "Cloud Infrastructure";
  tag: string;
  shortDescription: string;
  fullDescription: string;
  outcomes: string[];
  techStack: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  avatarPlaceholder: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: "UserCheck" | "Layers" | "Compass" | "Sparkles" | "TrendingUp";
}

export interface CompanyStat {
  label: string;
  value: string;
  helperText?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  valueProposition: string;
  mission: string;
  vision: string;
  foundingStory: {
    lead: string;
    paragraphs: string[];
  };
  principles: {
    title: string;
    description: string;
  }[];
  stats: CompanyStat[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    availability: string;
    address: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
