import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: "default" | "muted" | "elevated" | "dark" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hoverEffect = false,
  variant = "default",
  padding = "md",
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-sm",
    muted: "bg-slate-50/60 border border-slate-200/60",
    elevated: "bg-white border border-slate-100 shadow-md shadow-slate-200/50",
    dark: "bg-slate-900 border border-slate-800 text-white",
    outline: "bg-transparent border border-slate-200",
  };

  const paddingStyles = {
    none: "",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-slate-200/60"
    : "";

  return (
    <div
      className={`rounded-2xl overflow-hidden ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
