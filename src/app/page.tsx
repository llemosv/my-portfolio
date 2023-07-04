import { SidebarIcons } from '@/components/icons';
import { ContactSection } from '@/components/pages/home/contact-section';
import { ExperienceSection } from '@/components/pages/home/experience-section';
import { HeroSection } from '@/components/pages/home/hero-section';
import { ProjectsSection } from '@/components/pages/home/projects-section';
import { SkillsSection } from '@/components/pages/home/skills-section';
import { PageData } from '@/types/page';
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';

const getPageData = async (): Promise<PageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction1 {
        raw
      }
      introduction2 {
        raw
      }
      introduction3 {
        raw
      }
      softSkills {
        id
        name
        iconSvg
      }
      hardSkills {
        id
        name
        startDate
        iconSvg
      }
      socials {
        id
        name
        iconSvg
        url
      }
      profilePicture {
        url
      }
      projects {
        id
        name
        technologies
        description
        repositoryUrl
        projectImage {
          url
        }
      }
      experiences(orderBy: endDate_DESC) {
        id
        company
        office
        startDate
        endDate
        experienceDescriptions {
          id
          text
        }
      }
    }
  }
  `;

  const revalidateTime = 60 * 60 * 24; // 1 day

  return fetchHygraphQuery(query, revalidateTime);
};

export default async function Home() {
  const { page: pageData } = await getPageData();
  return (
    <>
      <HeroSection homeContent={pageData} />
      <SkillsSection
        softSkills={pageData.softSkills}
        hardSkills={pageData.hardSkills}
      />
      <ProjectsSection projects={pageData.projects} />
      <ExperienceSection experiences={pageData.experiences} />
      <ContactSection />
      <SidebarIcons socialsContent={pageData.socials} />
    </>
  );
}
