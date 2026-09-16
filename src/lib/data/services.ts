import { ServiceItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "mobile-app-development",
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps built for fluid user experiences, instant responsiveness, and seamless offline functionality.",
    fullDescription:
      "We design and engineer high-performance mobile applications for iOS and Android. Whether you are launching a greenfield consumer app or modernizing an enterprise workflow, we deliver clean architectures, native-grade gesture handling, robust offline syncing, and end-to-end App Store and Play Store compliance.",
    iconName: "Smartphone",
    inclusions: [
      "Cross-platform iOS & Android engineering (React Native / Flutter)",
      "Native module integrations (biometrics, camera, Bluetooth, GPS)",
      "Offline-first synchronization and local database caching",
      "Real-time notifications, deep linking, and in-app purchases",
      "Automated CI/CD pipelines for TestFlight & Google Play Console releases",
      "Performance profiling, battery drain optimization, and crash diagnostics",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Swift / Kotlin",
      "Expo",
      "SQLite / WatermelonDB",
      "Firebase / Supabase",
    ],
    approachNote:
      "We adopt a single-codebase, dual-platform strategy whenever suitable to cut development and maintenance costs by 40%, while writing custom native bridges whenever raw platform performance is non-negotiable.",
  },
  {
    id: "web-app-development",
    slug: "web-apps",
    title: "Web Application Development",
    shortDescription:
      "Scalable, high-velocity web applications, SaaS platforms, and digital portals engineered with modern frameworks and robust backend APIs.",
    fullDescription:
      "We craft fast, search-optimized, and resilient web platforms designed to handle complex business logic and massive concurrent user traffic. From enterprise dashboards to multi-tenant SaaS products, our solutions emphasize sub-second page loads, accessible UI systems, and zero-downtime deployments.",
    iconName: "Globe",
    inclusions: [
      "Modern full-stack web applications with Next.js, React, and TypeScript",
      "Scalable RESTful & GraphQL API design with Node.js and Go",
      "Relational & document database architecture (PostgreSQL, Redis, MongoDB)",
      "Role-based access control (RBAC), multi-tenancy, and secure SSO auth",
      "Payment gateway integrations (Stripe, Khalti, eSewa, regional gateways)",
      "Server-side rendering (SSR), edge caching, and Core Web Vitals optimization",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Prisma / Drizzle",
      "Tailwind CSS",
    ],
    approachNote:
      "We leverage modular component systems, strict TypeScript typing across frontend and backend boundaries, and automated test coverage to guarantee long-term stability and rapid feature iteration.",
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Services & Cloud Consulting",
    shortDescription:
      "Strategic technical advisory, cloud infrastructure modernization, DevOps pipelines, and enterprise security hardening.",
    fullDescription:
      "Navigating technology decisions requires deep systems expertise. We partner with leadership teams to audit existing legacy codebases, design cloud-native migrations, optimize cloud expenditure, and establish bulletproof DevOps automation to keep your engineering velocity unblocked.",
    iconName: "Cpu",
    inclusions: [
      "Cloud architecture design and migration (AWS, Google Cloud, Azure)",
      "Containerization and orchestration using Docker and Kubernetes",
      "Automated CI/CD workflows, automated testing, and zero-downtime rollouts",
      "Infrastructure-as-Code (Terraform) and FinOps cloud cost optimization",
      "Technical debt audits, security vulnerability scans, and code reviews",
      "Technology stack selection, scalability planning, and architectural roadmaps",
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Datadog / Prometheus",
    ],
    approachNote:
      "We prioritize pragmatic, right-sized cloud solutions over over-engineered microservices. We build what your product needs to thrive today with clear upgrade paths for tomorrow.",
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Growth Support",
    shortDescription:
      "Proactive system health monitoring, SLA-backed bug resolution, security patch management, and continuous feature expansion.",
    fullDescription:
      "Launching your product is only milestone one. Grow Nepal provides comprehensive post-launch support and continuous engineering retention to ensure your applications stay fast, secure, and compatible with evolving OS updates and third-party API changes.",
    iconName: "LifeBuoy",
    inclusions: [
      "24/7 uptime tracking, log aggregation, and real-time alert triage",
      "Scheduled dependency updates, security patching, and vulnerability remediation",
      "Quarterly performance reviews and database index optimization",
      "Dedicated monthly engineering sprint hours for feature enhancements",
      "iOS and Android annual OS compatibility migrations",
      "Direct Slack/Discord access to our core engineering team",
    ],
    techStack: [
      "Sentry",
      "LogRocket",
      "UptimeRobot",
      "Dependabot",
      "GitHub CI/CD",
      "AWS CloudWatch",
    ],
    approachNote:
      "Our support agreements are transparent and flexible — structured as dedicated monthly retainers so you always have a dependable engineering partner without the overhead of full-time in-house hires.",
  },
];
