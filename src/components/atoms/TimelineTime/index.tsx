import { Badge } from "@/components/atoms/Badge";

export const TimelineTime = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      variant={variant}
      className="left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-bold uppercase sm:absolute sm:mb-0"
    >
      {props.children}
    </Badge>
  );
};
