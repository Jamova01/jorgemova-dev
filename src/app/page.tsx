import {
  HeroSection,
  AboutMeSection,
  ContactSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/organisms";

export default function Page() {
  return (
    <div className="flex flex-col gap-20 min-h-screen scroll-smooth">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
