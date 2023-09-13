import { Tooltip } from 'react-tooltip';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiReact,
  SiAdobephotoshop,
  SiGithub,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

function Tools({ isEnglish }) {
  const tools = [
    <SiHtml5 color="#e44d26" data-tooltip-id="tools" data-tooltip-content="HTML5" />,
    <SiCss3 color="#2465F1" data-tooltip-id="tools" data-tooltip-content="CSS3" />,
    <SiJavascript color="#EFD81D" data-tooltip-id="tools" data-tooltip-content="JavaScript" />,
    <SiTypescript color="#2F74C0" data-tooltip-id="tools" data-tooltip-content="TypeScript" />,
    <SiReact color="#5ED3F3" data-tooltip-id="tools" data-tooltip-content="React" />,
    <SiRedux color="#593D88" data-tooltip-id="tools" data-tooltip-content="Redux Toolkit" />,
    <SiFigma color="#0AC97F" data-tooltip-id="tools" data-tooltip-content="Figma" />,
    <SiAdobephotoshop color="#2FA3F7" data-tooltip-id="tools" data-tooltip-content="Photoshop" />,
    <SiGithub color="#ffffff" data-tooltip-id="tools" data-tooltip-content="Github" />,
    <SiBootstrap color="#8812FE" data-tooltip-id="tools" data-tooltip-content="Bootstrap" />,
    <SiTailwindcss color="#36B7F0" data-tooltip-id="tools" data-tooltip-content="Tailwind" />,
    <SiVisualstudiocode color="#2F74C0" data-tooltip-id="tools" data-tooltip-content="VSCode" />,
  ];

  const toolsHeader = isEnglish
    ? 'Front-end tools I am comfortable with:'
    : 'Инструменты, которыми я часто пользуюсь:';
  const moreSpan = isEnglish ? '(more coming up...)' : '(продолжение следует...!)';

  return (
    <section className="tools-section">
      <h2 className="tools-header-text">{toolsHeader}</h2>
      <div className="tools">
        {tools.map((tool, index) => {
          return (
            <div key={index} className="tool">
              {tool}
            </div>
          );
        })}
      </div>
      <span className="more">{moreSpan}</span>
      <Tooltip id="tools" />
    </section>
  );
}

export default Tools;
