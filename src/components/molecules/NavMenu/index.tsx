import Link from "next/link";
import { Text } from "@/components/atoms";
import { NavigationLink } from "@/types/types";

interface NavMenuProps {
  items: NavigationLink[];
  className: string;
  orientation?: "horizontal" | "vertical";
  onItemClick?: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  items,
  className,
  orientation = "horizontal",
  onItemClick,
}) => {
  return (
    <ul
      className={`${className} ${
        orientation === "vertical"
          ? "flex-col items-center justify-center"
          : "flex-row"
      } flex gap-4`}
    >
      {items?.map(({ id, label, href }) => (
        <li key={id}>
          <Link href={href} onClick={onItemClick}>
            <Text className="text-xl font-bold capitalize hover:text-primary">
              {label}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};
