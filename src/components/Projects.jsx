import ProjectSegment from './ProjectSegment';

function Projects({ isEnglish }) {
  return (
    <section className="projects-section">
      <ProjectSegment isEnglish={isEnglish} title="VANILLA JS" type="vanilla" />
      <ProjectSegment isEnglish={isEnglish} title="REACT" type="react" />
    </section>
  );
}

export default Projects;
