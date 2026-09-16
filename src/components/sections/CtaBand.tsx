import React from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBand({
  title = "Ready to build your next breakthrough product?",
  subtitle = "Whether you have an early concept or need senior engineering power to scale your existing platform, we are ready to partner with you.",
}: CtaBandProps) {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow and subtle dot grid */}
      <div
        className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kick Off Your Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              href="/services"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-slate-900/60 border-slate-700 text-white hover:bg-slate-800"
            >
              Explore our services
            </Button>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            Average response time: under 24 business hours • Direct architect consultation
          </p>
        </div>
      </Container>
    </section>
  );
}
