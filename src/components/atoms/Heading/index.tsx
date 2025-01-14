import { JSX } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyle = "font-bold";
  const sizeMap = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  return (
    <Tag className={`${baseStyle} ${sizeMap[level]} ${className ?? ""}`}>
      {children}
    </Tag>
  );
};
