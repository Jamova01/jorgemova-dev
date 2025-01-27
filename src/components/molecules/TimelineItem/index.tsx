import { TimelineTime } from "@/components/atoms/TimelineTime";
import { TimelineTitle } from "@/components/atoms/TimelineTitle";
import { TimelineDescription } from "@/components/atoms/TimelineDescription";
import { TimelineHeader } from "@/components/molecules/TimelineHeader";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
  className,
}) => {
  return (
    <article className={`relative pb-8 pl-8 sm:pl-44 ${className ?? ""}`}>
      <TimelineHeader>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle>{title}</TimelineTitle>
      </TimelineHeader>
      <TimelineDescription
        text={description}
        className="text-sm md:text-lg leading-relaxed"
      />
    </article>
  );
};
