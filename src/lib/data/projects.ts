import { ProjectItem } from "./types";

export const projectsData: ProjectItem[] = [
  {
    id: "finpulse-mobile",
    title: "FinPulse Mobile",
    clientType: "FinTech Startup",
    category: "Mobile App",
    tag: "Mobile App",
    shortDescription:
      "A next-generation personal finance and multi-currency digital wallet app with offline ledger sync and biometric security.",
    fullDescription:
      "Engineered an intuitive consumer mobile application featuring sub-100ms transaction reconciliation, biometric authentication, recurring expense forecasts, and seamless bank sync for emerging market users with intermittent connectivity.",
    outcomes: [
      "99.98% offline transaction sync accuracy without data conflict",
      "4.8/5.0 average app store rating across 50,000+ active users",
      "Sub-200ms cold start time on both iOS and low-spec Android devices",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "WatermelonDB"],
    featured: true,
  },
  {
    id: "omnilogistics-cloud",
    title: "OmniLogistics Platform",
    clientType: "Supply Chain Enterprise",
    category: "Web Application",
    tag: "Web App",
    shortDescription:
      "An enterprise-scale fleet dispatch and supply chain dashboard handling real-time telemetry, driver routing, and automated invoicing.",
    fullDescription:
      "Designed and deployed a high-concurrency web application for a cross-border logistics provider. Replaced legacy manual paper manifests with automated multi-stop route optimization, geofenced driver alerts, and client self-service portals.",
    outcomes: [
      "Reduced average dispatch planning time from 3 hours to 18 minutes",
      "Supports 12,000+ daily live tracking pings per minute with zero latency lag",
      "Cut fleet fuel overhead by 16% through algorithmic routing",
    ],
    techStack: ["Next.js", "TypeScript", "Go API", "Redis", "Tailwind CSS", "AWS ECS"],
    featured: true,
  },
  {
    id: "careflow-health",
    title: "CareFlow Telehealth",
    clientType: "Healthcare Network",
    category: "Mobile App",
    tag: "Mobile & Web",
    shortDescription:
      "A HIPAA-compliant clinical scheduling, telemedicine video consult, and electronic health record portal for healthcare providers.",
    fullDescription:
      "Developed an end-to-end patient engagement platform uniting a responsive web portal for doctors and administrators with native mobile apps for patients. Features WebRTC video calls, prescription dispatch, and digital lab results.",
    outcomes: [
      "Completed HIPAA and regional health data privacy security audit on first attempt",
      "Enabled over 35,000 virtual consultations in the first 6 months",
      "Cut appointment no-show rates by 42% via automated WhatsApp reminders",
    ],
    techStack: ["React Native", "Next.js", "WebRTC", "PostgreSQL", "Tailwind CSS", "Docker"],
    featured: true,
  },
];
