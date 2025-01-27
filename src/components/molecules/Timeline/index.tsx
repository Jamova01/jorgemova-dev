import { TimelineItem } from "@/components/molecules/TimelineItem";
import { Experience } from "@/types/types";

interface TimelineProps {
  data: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="flex flex-col max-w-[500px] mx-auto">
      {data.map(({ id, time, title, description }) => (
        <TimelineItem
          key={id}
          time={time}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
