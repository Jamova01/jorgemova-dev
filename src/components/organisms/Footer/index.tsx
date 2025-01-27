import { Heading, Text } from "@/components/atoms";
import { SocialNetworks } from "@/components/molecules";
import { FaInstagram, FaMedium, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socialNetworksData = [
  { id: 1, icon: <FaInstagram /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaMedium /> },
];

export const Footer = () => {
  return (
    <footer className="">
      <div className="container flex flex-col gap-8 px-8 py-14">
        <div className="flex flex-col gap-4">
          <Heading level={2} className="text-center">
            JorgeDev
          </Heading>
          <ul className="flex gap-4 justify-center">
            <li>
              <Link href="#">
                <Text className="text-sm md:text-lg hover:text-primary">
                  About
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text className="text-sm md:text-lg hover:text-primary">
                  Projects
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text className="text-sm md:text-lg hover:text-primary">
                  Contact
                </Text>
              </Link>
            </li>
          </ul>
          <SocialNetworks data={socialNetworksData} />
        </div>

        <Text className="text-sm md:text-lg text-center">
          © {new Date().getFullYear()} JorgeDev. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
