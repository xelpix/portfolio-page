function Tools() {
  const tools = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'FIGMA',
    'REACT',
    'PHOTOSHOP',
    'REDUX TOOLKIT',
    'GIT',
    'BOOTSTRAP',
    'REACT-ROUTER',
  ];

  return (
    <section className="tools-section">
      <h2 className="tools-header-text">Front-end tools I am comfortable with:</h2>
      <h3 className="tools-text">
        {tools.map((tool, index) => {
          return (
            <span key={index} className={`tool ${tool}`}>
              {tool}{' '}
            </span>
          );
        })}
        <span className="more">(more coming up...)</span>
      </h3>
    </section>
  );
}

export default Tools;
