import React from "react";
import { UserCheck, Layers, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { differentiators } from "@/lib/data/company";

export default function WhyGrowNepal() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-emerald-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <Section variant="default" id="why-us">
      <Container>
        <SectionHeader
          eyebrow="Why Grow Nepal"
          title="Engineered Differently From Day Zero"
          subtitle="We eliminate agency bloat and replace it with direct senior ownership, modern engineering rigor, and cost-efficient global delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={item.id}
              hoverEffect
              padding="lg"
              className="bg-slate-50/50 border-slate-200/80 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-slate-200">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Standard across all engagements</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
