import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ZocketZero",
  DESCRIPTION: "A blog related to programming, computers, and more.",
  EMAIL: "zocketzero@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A blog related to programming, computers, and more.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "X (formerly Twitter)",
  //   HREF: "https://twitter.com/boogerbuttcheek",
  // },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ZocketZero",
  },
  {
    NAME: "Website",
    HREF: "https://nawasan.dev",
  },
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/nawasan/"
  }
];
