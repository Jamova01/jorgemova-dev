import React from "react";

export const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-lg md:text-xl font-bold text-primary ${className}`}
    {...props}
  />
));
