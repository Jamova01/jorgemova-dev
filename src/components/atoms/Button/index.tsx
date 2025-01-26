interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "icon" | "cta-gradient";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "secondary",
  onClick,
  disabled = false,
  icon,
  className,
}) => {
  const variantStyles = {
    primary:
      "text-lg font-bold bg-primary text-foreground hover:opacity-80 transition-all",
    secondary:
      "text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all",
    outline:
      "text-lg font-bold border-2 border-primary-foreground hover:border-primary text-primary-foreground bg-transparent hover:text-primary transition-all",
    icon: "focus:outline-none hover:text-primary transition-all",
    "cta-gradient":
      "text-lg font-bold text-primary-foreground bg-gradient-to-r from-[#e63946] via-[#9b59b6] to-[#3498db] hover:opacity-90 transition-all shadow-lg hover:shadow-xl rounded-full px-6 py-3",
  };

  const buttonClasses = `flex items-center px-4 py-2 rounded-full text-base ${
    variantStyles[variant]
  } ${className ?? ""}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses.trim()}
      aria-label={children ? undefined : "icon button"}
    >
      {icon && <span className={children ? "mr-2" : "text-4xl"}>{icon}</span>}
      {children}
    </button>
  );
};
