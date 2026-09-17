import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import HeroVideoBackground from "./HeroVideoBackground";
import HeroVisual from "./HeroVisual";
import RotatingText from "../ui/RotatingText";

const ROTATING_PHRASES = [
  "Software Solutions",
  "SEO",
  "Digital Marketing",
  "Branding",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-white min-h-[620px] flex items-center">
      {/* Background Video & Contrast Overlay — unchanged */}
      <HeroVideoBackground />

      <Container className="relative z-10 w-full">
        {/* ── Two-column grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN: text content ──────────────────────────────── */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center mb-6">
              <Badge variant="emerald" dot size="md" className="shadow-sm">
                Full-Stack Mobile, Web & Cloud Engineering
              </Badge>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              <span className="inline">We build </span>
              <span className="inline text-emerald-600 underline decoration-emerald-200 decoration-wavy decoration-2 whitespace-nowrap">
                <RotatingText words={ROTATING_PHRASES} />
              </span>
              <br />
              <span>that scale.</span>
            </h1>


            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              From first line of code to full-scale launch Grow Nepal builds the software and strategy behind growing businesses.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Start a project
              </Button>
              <Button
                href="/work"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                See our work
              </Button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: visual placeholder ───────────────────────── */}
          <HeroVisual />
        </div>

        {/* ── Trust points / Value anchors — full-width below both columns */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Execution
              </span>
            </div>
            <p className="text-sm font-bold text-slate-900">Founder-Led Sprints</p>
            <p className="text-xs text-slate-500">Direct architect oversight</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Speed
              </span>
            </div>
            <p className="text-sm font-bold text-slate-900">Modern Tech Stacks</p>
            <p className="text-xs text-slate-500">Next.js & React Native</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Ownership
              </span>
            </div>
            <p className="text-sm font-bold text-slate-900">100% Code IP</p>
            <p className="text-xs text-slate-500">Your repos, your cloud</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Value
              </span>
            </div>
            <p className="text-sm font-bold text-slate-900">Cost-Competitive</p>
            <p className="text-xs text-slate-500">Global scale from Nepal</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

