import { SocialNetwork } from "@/types/types";
import { SocialNetworkItem } from "@/components/atoms/SocialNetworkItem";

interface SocialNetworksProps {
  data: SocialNetwork[];
}

/**
 * SocialNetworks is a molecule that groups a set of buttons
 * representing social networks. Each button displays an icon
 * and a label based on the provided data.
 *
 * @param data - An array of social network objects, where each object
 *               includes an id, name, and icon.
 * @returns A flex container rendering the social network buttons.
 */

export const SocialNetworks: React.FC<SocialNetworksProps> = ({ data }) => {
  return (
    <ul className="flex justify-center gap-4 lg:gap-6">
      {data.map((network) => (
        <SocialNetworkItem key={network.id} network={network} />
      ))}
    </ul>
  );
};
