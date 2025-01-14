"use client";
import React, { useState } from "react";
import { Button } from "@/components/atoms";
import { DropdownMenu, NavMenu, Logo } from "@/components/molecules";
import { MdClose, MdMenu } from "react-icons/md";
import { NavigationLink } from "@/types/types";

interface NavbarProps {
  items: NavigationLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 bg-popover">
      <Logo />
      <Button
        onClick={() => setToggle(!toggle)}
        variant="icon"
        icon={toggle ? <MdClose /> : <MdMenu />}
        className="md:hidden"
      />
      <DropdownMenu isOpen={toggle} items={items} />
      <NavMenu
        items={items}
        className="hidden md:flex md:gap-8"
        orientation="horizontal"
      />
    </nav>
  );
};
