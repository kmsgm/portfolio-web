import ProjectList from "./ProjectList";
import "./Projects.css";
import { TranslationProps } from "../../interface/interface";

function Projects({ language }: TranslationProps) {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I did</span>

      <ProjectList language={language} />
    </section>
  );
}

export default Projects;
