import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import { projectsData } from "@/lib/data/projects";

export default function FeaturedWork() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <Section variant="muted" id="work-preview">
      <Container>
        <SectionHeader
          eyebrow="Recent Work"
          title="Selected Case Studies"
          subtitle="Explore some of the high-velocity mobile apps and web platforms we have engineered for our partners."
          action={
            <Button
              href="/work"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View all projects
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              hoverEffect
              className="flex flex-col justify-between bg-white border-slate-200/90 group"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className="h-44 w-full rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 flex flex-col justify-between mb-6 relative overflow-hidden border border-slate-800">
                  <div className="flex items-center justify-between z-10">
                    <Badge variant="dark" size="sm">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.clientType}
                    </span>
                  </div>

                  <div className="z-10">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Production Verified</span>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {project.title}
                    </h4>
                  </div>

                  {/* Geometric background mesh */}
                  <div
                    className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/work"
                  className="text-xs font-semibold text-slate-900 group-hover:text-emerald-600 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore project details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
