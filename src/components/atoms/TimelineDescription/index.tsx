import { Text } from "@/components/atoms/Text";

interface TimelineDescriptionProps {
  text: string;
  className?: string;
}

export const TimelineDescription: React.FC<TimelineDescriptionProps> = ({
  text,
  className,
}) => <Text className={`${className ?? ""}`}>{text}</Text>;
