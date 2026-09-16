import type { Metadata } from "next";
import {
  Compass,
  Target,
  Users,
  Sparkles,
  MapPin,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { companyData } from "@/lib/data/company";
import { teamData } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Grow Nepal — our founding story, founder-led engineering team, core principles, and our mission to deliver world-class software from Nepal.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Header */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="emerald" dot size="md" className="mb-4">
              About Grow Nepal
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Senior Engineering Craftsmanship, Directly to You
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We are a new-breed IT and software engineering company based in Kathmandu,
              Nepal. We exist to help ambitious companies build, scale, and maintain
              digital products without the bloat of traditional agencies.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Story Section */}
      <Section variant="default" padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 mb-3 block">
                Our Origins & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why We Founded Grow Nepal
              </h2>

              <p className="text-lg font-semibold text-slate-800 mb-4 leading-relaxed">
                {companyData.foundingStory.lead}
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                {companyData.foundingStory.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Mission & Vision Cards (lg:span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <Card
                hoverEffect
                className="bg-slate-950 text-white border-slate-800 p-8 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">
                  {companyData.mission}
                </p>
                <div
                  className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"
                  aria-hidden="true"
                />
              </Card>

              <Card hoverEffect className="bg-white border-slate-200/90 p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
                  {companyData.vision}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Principles */}
      <Section variant="muted" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Our Values"
            title="Principles That Guide Every Commit"
            subtitle="Software is only as resilient as the discipline and ethics of the team writing it."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.principles.map((principle, idx) => (
              <Card key={idx} padding="lg" className="bg-white border-slate-200">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-mono font-bold text-emerald-600 bg-emerald-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section variant="default" padding="lg" id="team">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="Founder-Led Engineering Team"
            subtitle="Meet the engineers and architects responsible for steering your project from architectural whiteboard to live production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.map((member) => (
              <Card
                key={member.id}
                hoverEffect
                className="bg-white border-slate-200/90 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white flex items-center justify-center font-bold text-xl font-mono shadow-md border border-slate-700">
                      {member.avatarPlaceholder}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-emerald-600 font-semibold">
                        {member.role}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Founding Member</span>
                  <div className="flex items-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Nepal Advantage Callout */}
      <Section variant="muted" padding="lg">
        <Container>
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <Badge variant="emerald" dot size="sm" className="mb-3">
                  Strategic Advantage
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  World-Class Engineering at High Capital Efficiency
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Nepal has emerged as a premier hub for ambitious software engineers who
                  speak fluent English, work across overlapping global time zones, and bring
                  relentless hunger to build world-class products. We pass this efficiency
                  directly to your balance sheet so you can build more with less burn.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fluent English Comms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>UTC+5:45 Timezone Overlap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent Pricing</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <ShieldCheck className="w-10 h-10 text-emerald-600 mb-2" />
                <span className="text-base font-bold text-slate-900 mb-1">
                  100% IP & Repo Ownership
                </span>
                <span className="text-xs text-slate-500 mb-4">
                  All repositories, patents, and assets belong exclusively to you from sprint one.
                </span>
                <Button href="/contact" variant="primary" size="sm">
                  Partner with us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
