import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import WorkPortfolioGrid from "@/components/sections/WorkPortfolioGrid";
import { projectsData } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore case studies and sample projects engineered by Grow Nepal across mobile apps, web applications, and enterprise cloud solutions.",
};

export default function WorkPage() {
  return (
    <>
      {/* Work Page Header */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="emerald" dot size="md" className="mb-4">
              Featured Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Proven Engineering, Measurable Outcomes
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Here is a curated showcase of digital applications and systems we have
              engineered. Each project highlights our commitment to high reliability,
              thoughtful UX, and clean architecture.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <Section variant="default" padding="lg">
        <Container>
          <WorkPortfolioGrid projects={projectsData} />

          {/* Confidentiality Notice Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Looking for specific sector references?
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Many of our client platforms are governed by strict NDAs. We are happy to walk
              through sanitized code architectures, design systems, and live staging demos in an initial call.
            </p>
            <Button href="/contact" variant="outline" size="sm">
              Request Technical Portfolio Call
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to build your company's next success story?"
        subtitle="Bring us your specifications or concept, and let's craft something remarkable."
      />
    </>
  );
}
