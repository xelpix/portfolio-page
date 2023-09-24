import ProjectSegment from './ProjectSegment';

function Projects({ isEnglish }) {
  return (
    <section className="projects-section">
      <ProjectSegment isEnglish={isEnglish} title="TYPESCRIPT" type="typescript" />
      <ProjectSegment isEnglish={isEnglish} title="REACT" type="react" />
      <ProjectSegment isEnglish={isEnglish} title="VANILLA JS" type="vanilla" />
    </section>
  );
}

export default Projects;
