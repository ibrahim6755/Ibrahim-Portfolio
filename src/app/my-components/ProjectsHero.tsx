import { Hero } from "@/components/hero";

function ProjectHero() {
  return (
    <Hero
      title="Projects"
      subtitle="Transform your workflow with intelligent automation. Simple, powerful, and reliable."
      titleClassName="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
      subtitleClassName="text-base sm:text-lg md:text-xl max-w-[600px] text-center"
      actionsClassName="mt-8"
      aria-label="Projects Hero Section"
    />
  );
}

export { ProjectHero };
