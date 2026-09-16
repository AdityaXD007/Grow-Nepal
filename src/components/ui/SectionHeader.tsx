import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      <div
        className={`flex ${
          isCenter ? "justify-center" : "justify-start"
        } items-center mb-3`}
      >
        {eyebrow && (
          <Badge variant="emerald" dot>
            {eyebrow}
          </Badge>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
