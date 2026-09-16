import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Cpu,
  LifeBuoy,
  CheckCircle2,
  Code,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldAlert,
  Zap,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CtaBand from "@/components/sections/CtaBand";
import { servicesData } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our core IT services: Mobile App Development, Modern Web Applications, Cloud Infrastructure & IT Consulting, and Maintenance Support.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case "Globe":
        return <Globe className="w-8 h-8 text-emerald-600" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-emerald-600" />;
      case "LifeBuoy":
        return <LifeBuoy className="w-8 h-8 text-emerald-600" />;
      default:
        return <Globe className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <>
      {/* Services Header */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="emerald" dot size="md" className="mb-4">
              Comprehensive IT Capabilities
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Services Built for High Performance and Scale
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We design, develop, and maintain digital products with a singular focus:
              engineering excellence that solves real business bottlenecks and scales effortlessly.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detailed List */}
      <Section variant="default" padding="lg">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Title & Overview (lg:span 5) */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-emerald-600 font-semibold uppercase tracking-wider">
                          Service Line 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                        <Code className="w-4 h-4 text-emerald-600" />
                        <span>Our Architectural Approach</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.approachNote}
                      </p>
                    </div>

                    <Button
                      href="/contact"
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Discuss this service
                    </Button>
                  </div>

                  {/* Right Column: Inclusions & Tech Stack (lg:span 7) */}
                  <div className="lg:col-span-7 bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>What's Included</span>
                    </h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                      {service.inclusions.map((inclusion, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="slate"
                            size="sm"
                            className="bg-white border-slate-200 text-slate-800"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Process Section */}
      <Section variant="muted" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="emerald" dot size="md" className="mb-3">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our 4-Stage Delivery Blueprint
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Predictable, agile, and transparent execution from discovery to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white p-6 border-slate-200">
              <span className="text-3xl font-black text-emerald-600 font-mono mb-3 block">01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery & Scope</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We align on product objectives, target users, technical constraints, and deliver an exact roadmap with sprint breakdowns.
              </p>
            </Card>

            <Card className="bg-white p-6 border-slate-200">
              <span className="text-3xl font-black text-emerald-600 font-mono mb-3 block">02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">System Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Data modeling, API contracts, design systems, and cloud infrastructure setup built for scale and long-term maintainability.
              </p>
            </Card>

            <Card className="bg-white p-6 border-slate-200">
              <span className="text-3xl font-black text-emerald-600 font-mono mb-3 block">03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agile Sprints</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bi-weekly development cycles with interactive staging previews. Direct engineer communications via Slack and shared repos.
              </p>
            </Card>

            <Card className="bg-white p-6 border-slate-200">
              <span className="text-3xl font-black text-emerald-600 font-mono mb-3 block">04</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Launch & Scale</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated CI/CD deployment, load testing, App Store / Play Store submission, and post-launch SLA monitoring.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to discuss your project requirements?"
        subtitle="Schedule an initial technical scoping session with our lead architects today."
      />
    </>
  );
}
