"use client";
import React, { useEffect, useState } from "react";
import { Button, Heading } from "@/components/atoms";
import { DropdownMenu, NavMenu } from "@/components/molecules";
import { MdClose, MdMenu } from "react-icons/md";
import { NavigationLink } from "@/types/types";

interface NavbarProps {
  items: NavigationLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleCloseMenu = () => {
    setToggle(false);
  };

  return (
    <nav
      className={`relative flex items-center justify-between px-8 py-4 bg-popover
        transform transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }
        `}
    >
      <Heading level={3}>JorgeDev</Heading>
      <Button
        onClick={() => setToggle(!toggle)}
        variant="icon"
        icon={toggle ? <MdClose /> : <MdMenu />}
        className="md:hidden border rounded-lg hover:border-primary"
      />
      <DropdownMenu
        isOpen={toggle}
        items={items}
        onItemClick={handleCloseMenu}
      />
      <NavMenu
        items={items}
        className="hidden md:flex md:gap-8"
        orientation="horizontal"
      />
    </nav>
  );
};
