import { Skill } from "@/types/types";
import { FaCheck } from "react-icons/fa";

export const SkillBadge: React.FC<Skill> = ({ name }) => {
  return (
    <div className="flex gap-2 px-4 py-2 items-center w-full md:min-w-52 md:max-w-52 bg-muted rounded-lg shadow-sm">
      <div className="flex justify-self-start">
        <span>
          <FaCheck />
        </span>
      </div>

      <p className="text-sm md:text-xl font-semibold text-secondary-foreground">{name}</p>
    </div>
  );
};
