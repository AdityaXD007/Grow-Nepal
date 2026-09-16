import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "slate" | "dark" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "emerald",
  size = "md",
  dot = false,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    dark: "bg-slate-900 text-slate-200 border-slate-800",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs sm:text-sm px-3 py-1 font-medium",
  };

  const dotColors = {
    emerald: "bg-emerald-500",
    slate: "bg-slate-500",
    dark: "bg-emerald-400",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full animate-pulse ${dotColors[variant]}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
