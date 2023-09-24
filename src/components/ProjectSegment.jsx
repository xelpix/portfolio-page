import { projects } from '../data';

function ProjectSegment({ title, type, isEnglish }) {
  const reactProjects = projects.filter((project) => {
    return project.type === type;
  });

  const titleText = isEnglish ? 'PROJECTS' : 'ПРОЕКТЫ';
  const viewText = isEnglish ? 'view' : 'показать';

  return (
    <div className="project-segment-wrapper">
      <h2 className="projects-section-title">
        <span className={`${type}-highlight`}>{title}</span> {titleText}
      </h2>
      <div className="projects-section-wrapper">
        {reactProjects.map((project, id) => {
          return (
            <div key={id} className="single-project-wrapper">
              <p className="single-project-title">{project.title}</p>
              <a href={project.demoLink} target="_blank">
                <div className="single-project-image-wrapper">
                  <img className="single-project-image" src={project.projectImage} alt="" />
                </div>
              </a>
              <p className="single-project-view">
                {viewText} {` `}
                <a href={project.demoLink} target="_blank" className="single-project-link">
                  demo
                </a>
                /
                <a href={project.githubLink} target="_blank" className="single-project-link">
                  github
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProjectSegment;
