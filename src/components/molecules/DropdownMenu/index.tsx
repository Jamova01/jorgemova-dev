import { NavigationLink } from "@/types/types";
import { NavMenu } from "../NavMenu";

interface DropdownMenuProps {
  isOpen: boolean;
  items: NavigationLink[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  items,
}) => (
  <div
    className={`absolute w-full top-20 right-0 left-0 bg-popover opacity-80 shadow-md rounded-lg transition-transform transform ${
      isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
    } md:hidden`}
  >
    <NavMenu items={items} className="p-4" orientation="vertical" />
  </div>
);
