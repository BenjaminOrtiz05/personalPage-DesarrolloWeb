export type NavItem = {
  id: string;
  name: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl: string;
};

export type SocialMedia = {
  name: string;
  url: string;
  icon: JSX.Element;
};