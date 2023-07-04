import type { RichTextContent } from '@graphcms/rich-text-types';

type ExperienceDescription = {
  id: string;
  text: string;
};

export type ExperienceType = {
  id: string;
  company: string;
  office: string;
  startDate: string;
  endDate: string | null;
  experienceDescriptions: ExperienceDescription[];
};

export type ProjectType = {
  id: string;
  name: string;
  technologies: string;
  description: string;
  repositoryUrl: string;
  projectImage: {
    url: string;
  };
};

export type SocialsType = {
  id: string;
  name: string;
  iconSvg: string;
  url: string;
};

export type SoftSkillsType = {
  id: string;
  name: string;
  iconSvg: string;
};
export type HardSkillsType = {
  id: string;
  name: string;
  startDate: string;

  iconSvg: string;
};

export type PageInfo = {
  introduction1: {
    raw: RichTextContent;
  };
  introduction2: {
    raw: RichTextContent;
  };
  introduction3: {
    raw: RichTextContent;
  };
  softSkills: SoftSkillsType[];
  hardSkills: HardSkillsType[];
  socials: SocialsType[];
  profilePicture: {
    url: string;
  };
  projects: ProjectType[];
  experiences: ExperienceType[];
};

export type PageData = {
  page: PageInfo;
};
