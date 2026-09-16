import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyGrowNepal from "@/components/sections/WhyGrowNepal";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyGrowNepal />
      <FeaturedWork />
      <CtaBand
        title="Have an application idea or need to scale existing software?"
        subtitle="Let's build something extraordinary together. Talk directly with our founding engineering team today."
      />
    </>
  );
}
