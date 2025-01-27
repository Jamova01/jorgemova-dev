import { Project } from "@/types/types";
import { ProjectCard } from "../ProjectCard";

interface Projects {
  data: Project[];
}

export const ProjectsList: React.FC<Projects> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
      {data.map(
        ({ id, image, title, description, technologies, github, deploy }) => (
          <ProjectCard
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            technologies={technologies}
            github={github}
            deploy={deploy}
          />
        )
      )}
    </div>
  );
};
