import { Heading } from "@/components/atoms/Heading";
import { ProjectsList } from "@/components/molecules/ProjectsList/indext";
import { projectsData } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-14 px-8">
      <Heading level={2} className="capitalize text-center">
        projects
      </Heading>
      <ProjectsList data={projectsData} />
    </section>
  );
};
