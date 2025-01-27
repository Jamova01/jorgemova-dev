import { Skill } from "@/types/types";
import { SkillBadge } from "@/components/atoms/SkillBadge";

interface SkillsProps {
  data: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {data.map(({ id, name }) => (
        <li key={id} className="flex justify-center">
          <SkillBadge name={name} />
        </li>
      ))}
    </ul>
  );
};
