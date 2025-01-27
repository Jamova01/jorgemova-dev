import Image from "next/image";
import Link from "next/link";
import { Badge, Heading } from "@/components/atoms";
import { Project } from "@/types/types";

import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard: React.FC<Project> = ({
  image,
  title,
  technologies,
  deploy,
  github,
}) => {
  return (
    <div
      className="relative flex flex-col rounded-xl overflow-hidden shadow-md transition-shadow duration-300 
                 min-w-80 sm:max-w-[452px] md:max-w-[480px] lg:max-w-[500px] 
                 bg-card text-card-foreground hover:shadow-lg hover:shadow-primary"
    >
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={`${title} preview`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <Link href={deploy}>
          <span className="absolute flex justify-center items-center p-3 rounded-full bg-muted text-muted-foreground hover:text-secondary-foreground transition-all duration-300 right-3 top-3 shadow-md">
            <FaExternalLinkAlt />
          </span>
        </Link>

        <ul className="absolute bottom-2 left-2 flex gap-1">
          {technologies.map((tech, index) => (
            <li key={index + 1}>
              <Badge
                variant="secondary"
                className="text-xs bg-secondary text-secondary-foreground"
              >
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <Heading level={5} className="text-card-foreground">
          {title}
        </Heading>
        <div className="flex justify-end">
          <Link href={github}>
            <p className="text-sm font-bold text-muted-foreground hover:text-primary underline transition duration-300">
              View Code
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
