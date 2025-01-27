import { SocialNetwork } from "@/types/types";
import Link from "next/link";

interface SocialNetworkItemProps {
  network: SocialNetwork;
}

export const SocialNetworkItem: React.FC<SocialNetworkItemProps> = ({
  network,
}) => {
  return (
    <li>
      <Link
        href={`${network.url}`}
        className={`flex items-center justify-center gap-2 px-2 md:px-4 py-1
          md:py-2 border hover:border-primary text-sm lg:text-lg
          hover:text-primary font-bold rounded-lg`}
      >
        <span className="text-sm md:lg">{network.icon}</span>
        {network.name && network.name}
      </Link>
    </li>
  );
};
