import React from "react";

/**
 * HeroVisual — right-column placeholder for the hero section.
 *
 * Swap the inner content here when a real device mockup, screenshot, or
 * illustration is ready. The outer sizing / aspect-ratio shell should stay
 * intact so the two-column layout doesn't shift.
 */
export default function HeroVisual() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[320px] lg:min-h-0">
      <div
        className="
          relative w-full
          aspect-[4/5] max-w-[420px] lg:max-w-none
          rounded-2xl border-2 border-dashed border-slate-300
          bg-slate-50/60 backdrop-blur-sm
          flex flex-col items-center justify-center gap-3
          shadow-sm
        "
      >
        {/* Corner accent lines for a 'frame' feel */}
        <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400 rounded-tl-md" aria-hidden="true" />
        <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-emerald-400 rounded-tr-md" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-emerald-400 rounded-bl-md" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-emerald-400 rounded-br-md" aria-hidden="true" />

        {/* Placeholder icon */}
        <svg
          className="w-10 h-10 text-slate-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.25}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>

        {/* Label */}
        <p className="text-sm font-medium text-slate-400 text-center px-6 leading-snug">
          Product mockup / screenshot
        </p>
        <p className="text-xs text-slate-300 text-center px-8">
          Replace with &lt;HeroVisual /&gt; content
        </p>
      </div>
    </div>
  );
}
