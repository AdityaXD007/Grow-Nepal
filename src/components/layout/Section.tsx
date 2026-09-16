import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "muted" | "dark" | "pattern";
  padding?: "none" | "sm" | "default" | "lg";
}

export default function Section({
  children,
  id,
  className = "",
  variant = "default",
  padding = "default",
}: SectionProps) {
  const variantClasses = {
    default: "bg-white text-slate-900",
    muted: "bg-slate-50/80 text-slate-900 border-y border-slate-100",
    dark: "bg-slate-950 text-white",
    pattern: "bg-white text-slate-900 bg-grid-pattern",
  };

  const paddingClasses = {
    none: "",
    sm: "py-10 md:py-16",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={`relative ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
