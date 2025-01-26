"use client";
import Image from "next/image";
import { Heading, Text, Badge } from "@/components/atoms";
import { Tabs, SocialNetworks, Timeline } from "@/components/molecules";
import { educationData } from "@/data/education_data";
import { timelineData } from "@/data/experiences_data";
import {
  FaGraduationCap,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
} from "react-icons/fa";

const socialNetworksData = [
  { id: 1, name: "GitHub", icon: <FaGithub /> },
  { id: 2, name: "LinkedIn", icon: <FaLinkedin /> },
  { id: 3, name: "Email", icon: <FaEnvelope /> },
];

const tabs = [
  {
    id: "education",
    label: (
      <p className="flex items-center gap-2 font-bold">
        <FaGraduationCap className="text-sm md:text-xl" />
        Education
      </p>
    ),
    content: <Timeline data={educationData} />,
  },
  {
    id: "experience",
    label: (
      <p className="flex items-center gap-2 font-bold">
        <FaLaptopCode className="text-sm md:text-xl" />
        Experience
      </p>
    ),
    content: <Timeline data={timelineData} />,
  },
];

export const AboutMeSection = () => (
  <section id="about" className="flex flex-col gap-14 px-8">
    <Heading level={2} className="text-center capitalize text-3xl font-bold">
      About Me
    </Heading>

    <div className="max-w-4xl lg:mx-auto shadow-md rounded-lg flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <ProfileSection />
        <IntroductionSection />
      </div>
      <div className="mt-6">
        <Tabs tabs={tabs} />
      </div>
    </div>
  </section>
);

const ProfileSection = () => (
  <div className="flex flex-col items-center lg:w-2/5 gap-8">
    <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-[#e63946] via-[#1a1a1a] to-[#141414]">
      <Image
        src="/images/profile_without_bg.png"
        alt="profile avatar"
        width={180}
        height={180}
        className="object-cover"
      />
    </div>
    <ul className="flex gap-4">
      {["🇪🇦 ES", "🇺🇲 EN", "🇧🇷 PT"].map((lang, index) => (
        <li key={index}>
          <Badge variant="secondary">{lang}</Badge>
        </li>
      ))}
    </ul>
  </div>
);

const IntroductionSection = () => (
  <div className="flex flex-col gap-6 justify-between lg:w-3/5">
    <div>
      <Text className="text-justify text-card-foreground leading-relaxed">
        Software developer with over 3 years of experience creating innovative
        digital solutions.
      </Text>
      <Text className="text-justify text-card-foreground leading-relaxed">
        I’m passionate about learning <span className="font-semibold">📚</span>,
        immersing myself in music <span className="font-semibold">🎶</span>,
        savoring coffee <span className="font-semibold">☕</span>, and exploring
        the world <span className="font-semibold">✈️</span>. I excel at turning
        creative ideas into meaningful and efficient solutions that empower
        businesses.
      </Text>
    </div>
    <SocialNetworks data={socialNetworksData} />
  </div>
);
