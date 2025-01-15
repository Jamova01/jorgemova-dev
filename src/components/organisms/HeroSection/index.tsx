"use client";

import { Heading, Text, Button } from "@/components/atoms";
import { FaArrowCircleDown } from "react-icons/fa";
import Link from "next/link";

/**
 * Downloads a file when triggered
 */
const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/files/Dev_Fullstack-Jorge_Armando_Morales.pdf";
  link.download = "Dev_Fullstack-Jorge_Armando_Morales.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const HeroSection = () => {
  return (
    <section className="flex flex-col px-8 pt-20 pb-8 gap-8">
      <header className="flex flex-col gap-5">
        <Heading level={1} className="text-start sm:text-center">
          <span className="inline-block animate-wave origin-emoji">👋</span>
          Hello, I'm{" "}
          <span className="block sm:inline-flex text-primary">
            Jorge Morales
          </span>
        </Heading>
        <Heading level={2} className="text-start sm:text-center">
          Frontend & Backend Developer crafting scalable solutions.
        </Heading>
      </header>

      <article className="flex flex-col md:max-w-[500px] md:mx-auto">
        <Text className="leading-relaxed text-justify sm:text-center">
          {`Colombian 🇨🇴 developer with 3+ years of experience in React ⚛️, Python 🐍, and Node.js. Passionate about creating impactful digital\u00A0solutions.`}
        </Text>
      </article>

      <div
        role="group"
        aria-label="Hero actions"
        className="flex flex-col md:flex-row md:justify-center gap-5"
      >
        <Link href="#contact" legacyBehavior>
          <Button variant="primary" className="justify-center capitalize">
            Get in Touch
          </Button>
        </Link>
        <Button
          onClick={handleDownloadCV}
          variant="outline"
          icon={<FaArrowCircleDown />}
          className="justify-center"
        >
          Download My CV
        </Button>
      </div>
    </section>
  );
};
