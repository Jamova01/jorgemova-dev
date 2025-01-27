import { UrlObject } from "url";

export type SocialNetwork = {
  id?: number;
  name?: string;
  icon?: React.ReactNode;
};

export type Skill = {
  id?: number;
  name: string;
};

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type Experience = {
  id: number;
  title: string;
  time: string;
  description: string;
};

export type NavigationLink = {
  id: number;
  label: string;
  href: string | UrlObject;
};

export type Tab = {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
};
