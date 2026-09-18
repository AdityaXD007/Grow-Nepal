import React from "react";
import Image from "next/image";

/**
 * HeroVisual — right-column placeholder for the hero section.
 *
 * Swap the inner content here when a real device mockup, screenshot, or
 * illustration is ready. The outer sizing / aspect-ratio shell should stay
 * intact so the two-column layout doesn't shift.
 */
export default function HeroVisual() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[320px] lg:min-h-0 relative">
      <div
        className="
          relative w-full
          aspect-square max-w-[460px] lg:max-w-[540px] mx-auto
          rounded-2xl border border-slate-200/60
          bg-white/40 backdrop-blur-md
          shadow-xl shadow-emerald-900/5
          overflow-hidden
        "
      >
        <Image
          src="/images/hero-mockup.jpg"
          alt="Modern SaaS Dashboard Mockup"
          fill
          sizes="(max-width: 768px) 100vw, 540px"
          className="object-cover object-center"
          priority
        />
        
        {/* Subtle inner shadow overlay to blend with the white frame */}
        <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-2xl pointer-events-none" />
      </div>
      
      {/* Decorative floating accent element */}
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none z-[-1]" />
    </div>
  );
}
