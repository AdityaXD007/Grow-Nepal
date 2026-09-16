import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Cpu,
  LifeBuoy,
  ArrowRight,
  Check,
} from "lucide-react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { servicesData } from "@/lib/data/services";

export default function ServicesOverview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case "LifeBuoy":
        return <LifeBuoy className="w-6 h-6 text-emerald-600" />;
      default:
        return <Globe className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <Section variant="muted" id="services">
      <Container>
        <SectionHeader
          eyebrow="Our Expertise"
          title="Engineered for Scalability & Impact"
          subtitle="From initial MVP architecture to high-concurrency cloud production, we build robust digital solutions tailored to your growth goals."
          action={
            <Button
              href="/services"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore all services in detail
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Card
              key={service.id}
              hoverEffect
              className="flex flex-col justify-between border-slate-200/80 hover:border-emerald-500/40 bg-white"
            >
              <div>
                {/* Icon header */}
                <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-6">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.inclusions.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] font-mono text-slate-400">
                  0{index + 1}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
