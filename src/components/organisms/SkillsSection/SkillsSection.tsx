import { Heading } from "@/components/atoms/Heading";
import { Skills } from "@/components/molecules/Skills";
import { backendTechData, frontendTechData } from "@/data/technologies";

export const SkillsSection = () => {
  return (
    <section className="flex flex-col gap-14 px-8">
      <Heading level={2} className="capitalize text-center">
        my skills
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5 justify-center p-8 bg-popover rounded-lg shadow-muted shadow-md">
          <Heading level={4} className="capitalize text-center text-primary">
            frontend development
          </Heading>
          <Skills data={frontendTechData} />
        </div>

        <div className="flex flex-col gap-5 justify-center p-8 bg-popover rounded-lg shadow-muted shadow-md">
          <Heading level={4} className="capitalize text-center text-primary">
            Backend development
          </Heading>
          <Skills data={backendTechData} />
        </div>
      </div>
    </section>
  );
};
