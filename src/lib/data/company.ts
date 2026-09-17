import { CompanyInfo, Differentiator, NavLink } from "./types";

export const companyData: CompanyInfo = {
  name: "Grow Nepal",
  tagline: "Engineering Scalable Digital Solutions",
  valueProposition: "We build mobile & web apps and IT solutions that scale.",
  mission:
    "To empower forward-thinking startups and global enterprises by engineering high-performance software, intuitive mobile experiences, and resilient cloud architectures — crafted with precision from Nepal.",
  vision:
    "To establish Nepal as a premier global hub for elite software engineering and modern digital craftsmanship.",
  foundingStory: {
    lead: "Born out of a conviction that great engineering thrives on focus, ownership, and direct collaboration.",
    paragraphs: [
      "Grow Nepal was founded by hands-on software architects who spent years building scalable digital platforms for both regional leaders and international clients.",
      "Traditional IT agencies often drown projects in layers of non-technical management, bloated delivery cycles, and disjointed handoffs. We built Grow Nepal with a radically different philosophy: lean, founder-led execution, modern technical standards, and ruthless attention to performance and user experience.",
      "Today, we partner directly with ambitious founders, growing businesses, and modern enterprises to transform complex product visions into rock-solid mobile apps, web applications, and resilient cloud systems that scale effortlessly.",
    ],
  },
  principles: [
    {
      title: "Founder-Led Craftsmanship",
      description:
        "Senior architects and engineers lead every project from day zero. No inexperienced handoffs or junior junior-dev proxy teams.",
    },
    {
      title: "Production-Grade Tech Stacks",
      description:
        "We build exclusively with battle-tested, modern technologies (Next.js, TypeScript, React Native, Node.js, Cloud-native architectures) designed for long-term maintainability.",
    },
    {
      title: "Radical Transparency",
      description:
        "Clear sprints, shared repos, open communication channels, and predictable timelines. You always know what is being built, how it works, and when it ships.",
    },
    {
      title: "Global Standards, Nepal Advantage",
      description:
        "World-class software engineering delivered with the high efficiency and cost-competitiveness of Nepal's finest technical talent.",
    },
  ],
  stats: [
    { label: "Engineering Experience", value: "8+ Yrs", helperText: "Senior leadership background" },
    { label: "Target Uptime & Reliability", value: "99.9%", helperText: "Production standard" },
    { label: "Code Ownership", value: "100%", helperText: "Client owns IP and repos" },
    { label: "Timezone Agility", value: "24/7", helperText: "Overlapping global delivery" },
  ],
  contact: {
    email: "grownepal8848@gmail.com",
    phone: "+977 985-6078155",
    whatsapp: "+977 985-6078155",
    location: "Pokhara, Nepal",
    availability: "Always open",
    address: "Grow Nepal, Lakeside, Pokhara, Nepal, 33700",
  },
  socials: {
    github: "https://github.com/grow-nepal",
    linkedin: "https://linkedin.com/company/grow-nepal",
    facebook: "https://www.facebook.com/grownepaltechnologies/?rdid=Y0TozrcYxanO44lC",
  },
};

export const differentiators: Differentiator[] = [
  {
    id: "founder-led",
    title: "Founder-Led Engineering",
    description:
      "Direct collaboration with senior engineers who understand architecture, business trade-offs, and product strategy — never passed to anonymous junior teams.",
    iconName: "UserCheck",
  },
  {
    id: "modern-stack",
    title: "Modern & Resilient Stack",
    description:
      "We build with TypeScript, Next.js, React Native, and cloud-native infrastructure, ensuring high performance, low maintenance overhead, and rapid scaling.",
    iconName: "Layers",
  },
  {
    id: "nepal-advantage",
    title: "Nepal-Based / Cost-Competitive",
    description:
      "Get Silicon Valley calibre execution at high capital efficiency, enabling you to build faster and stretch your product runway further.",
    iconName: "TrendingUp",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
