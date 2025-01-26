interface BagdeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

export const Badge: React.FC<BagdeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const badgeStyles = {
    default:
      "inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold",
    secondary:
      "inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-bold",
    destructive:
      "inline-flex items-center px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold",
    outline:
      "inline-flex items-center px-3 py-1 rounded-full border border-border text-foreground text-sm font-bold",
  };

  return (
    <span className={`${badgeStyles[variant]} ${className ?? ""}`}>
      {children}
    </span>
  );
};
