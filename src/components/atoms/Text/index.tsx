interface Text {
  children: string;
  className?: React.ReactNode;
}

export const Text: React.FC<Text> = ({ children, className }) => {
  const baseStyle = "text-lg";

  return <p className={`${baseStyle} ${className ?? ""}`}>{children}</p>;
};
