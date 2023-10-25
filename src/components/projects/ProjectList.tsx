import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ProjectsNavProps, ProjectsDataProps } from "./model";
import ProjectItem from "./ProjectItem";
import { api } from "../../api/api";

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

function ProjectList() {
  const [filter, setFilter] = useState<ProjectsNavProps>({ name: "All" });
  const [projects, setProjects] = useState<ProjectsDataProps[]>([]);
  const [active, setActive] = useState<number>(0);

  const fetchPorjects = async () => {
    try {
      const data = await api.getProjectsData();
      setProjects(data);
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  const fetchFilteredPorjects = async (category: string) => {
    try {
      const data = await api.getFilteredProjectsData(category);
      setProjects(data);
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  useEffect(() => {
    if (filter.name === "All") {
      fetchPorjects();
    } else {
      fetchFilteredPorjects(filter.name);
    }
  }, [filter]);

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
            title={item.title}
            category={item.category}
            period={item.period}
            description={item.description}
            stack={item.stack}
            image_tag={item.image_tag}
          />
        ))}
      </div>
      <Toaster />
    </>
  );
}

export default ProjectList;
