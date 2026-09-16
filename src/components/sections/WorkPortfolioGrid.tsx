"use client";

import React, { useState } from "react";
import { TrendingUp, CheckCircle2, ShieldCheck, Filter } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ProjectItem } from "@/lib/data/types";

interface WorkPortfolioGridProps {
  projects: ProjectItem[];
}

export default function WorkPortfolioGrid({ projects }: WorkPortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Mobile App", "Web Application"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
          <Filter className="w-3.5 h-3.5 text-emerald-600" />
          <span>Filter:</span>
        </div>
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === filter
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-700/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {filter === "All" ? "All Case Studies" : filter + "s"}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <Card
            key={project.id}
            hoverEffect
            className="flex flex-col justify-between bg-white border-slate-200/90 shadow-sm animate-in fade-in zoom-in-95 duration-200"
          >
            <div>
              {/* Visual Header Mockup */}
              <div className="h-48 w-full rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 flex flex-col justify-between mb-6 relative overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <Badge variant="dark" size="sm">
                    {project.tag}
                  </Badge>
                  <span className="text-xs font-mono text-emerald-400">
                    Case Study 0{idx + 1}
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    {project.clientType}
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>

                <div
                  className="absolute -right-8 -bottom-8 w-36 h-36 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {project.shortDescription}
              </p>

              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              {/* Measurable Outcomes */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Key Outcomes</span>
                </h3>
                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, oIdx) => (
                    <li
                      key={oIdx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack pills */}
              <div className="mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
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
            </div>

            {/* Footer status notice */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production Deployed</span>
              </span>
              <span className="font-mono text-[10px]">Grow Nepal Verified</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
