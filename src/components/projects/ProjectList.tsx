import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ProjectsNavProps, ProjectsDataProps } from "./model";
import ProjectItem from "./ProjectItem";
// import { api } from "../../api/api";

import KOR from "../../translate/kor.json";
import { projectData } from "./data";
import { TranslationProps } from "../../interface/interface";

const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web",
  },
  {
    name: "Cloud",
  },
  {
    name: "ML",
  },
  {
    name: "Design",
  },
];

function ProjectList({ language }: TranslationProps) {
  const [filter, setFilter] = useState<ProjectsNavProps>({ name: "All" });
  const [projects, setProjects] = useState<ProjectsDataProps[]>([]);
  const [active, setActive] = useState<number>(0);

  const fetchPorjects = async () => {
    try {
      // const data = await api.getProjectsData();
      const data = projectData;
      setProjects(data);
    } catch (error: any) {
      toast.error(`Projects: ${error.message}`);
    }
  };

  const fetchFilteredPorjects = async (category: string) => {
    try {
      // const data = await api.getFilteredProjectsData(category);
      const data = projectData.filter((item) => item.category === category);
      setProjects(data);
    } catch (error: any) {
      toast.error(`Projects: ${error.message}`);
    }
  };

  useEffect(() => {
    if (filter.name === "All") {
      fetchPorjects();
    } else {
      fetchFilteredPorjects(filter.name);
    }
  }, [filter.name]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    setFilter({ name: target.innerText || "All" });
    setActive(index);
  };

  return (
    <>
      <div className="project__filters">
        {projectsNav.map((item: ProjectsNavProps, index: number) => (
          <span
            key={index}
            className={`${
              active === index ? "active-project" : ""
            } project__item`}
            onClick={(e) => handleClick(e, index)}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects?.map((item: ProjectsDataProps, index: number) => (
          <ProjectItem
            key={index}
            id={item.id}
            title={
              language === "KOR" ? KOR.Projects[item.id].title : item.title
            }
            period={
              language === "KOR" ? KOR.Projects[item.id].period : item.period
            }
            description={
              language === "KOR"
                ? KOR.Projects[item.id].description
                : item.description
            }
            stack={item.stack}
            link={item.link}
            linkName={item.linkName}
            image_tag={
              language === "KOR"
                ? KOR.Projects[item.id].image_tag
                : item.image_tag
            }
          />
        ))}
      </div>
      <Toaster />
    </>
  );
}

export default ProjectList;
