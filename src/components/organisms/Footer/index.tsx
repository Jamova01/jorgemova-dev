import { Heading, Text } from "@/components/atoms";
import { SocialNetworks } from "@/components/molecules";
import { FaInstagram, FaMedium, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { FaX } from "react-icons/fa6";

const socialNetworksData = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/jorgemova_dev/",
  },
  { id: 2, icon: <FaX />, url: "https://x.com/jorgemova01" },
  { id: 3, icon: <FaMedium />, url: "https://medium.com/@jorgemova01" },
];

const navigationLinks = [
  { id: 1, label: "About", url: "#about" },
  { id: 2, label: "Projects", url: "#projects" },
  { id: 3, label: "Contact", url: "#contact" },
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
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>
                  <Text className="text-sm md:text-lg hover:text-primary">
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
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
