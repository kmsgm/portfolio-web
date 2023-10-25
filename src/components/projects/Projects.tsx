import ProjectList from './ProjectList';
import './Projects.css';

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I did</span>

      <ProjectList />
    </section>
  );
}

export default Projects;
