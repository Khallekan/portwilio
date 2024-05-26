import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";
const ProjectCard = (project) => {
  const { theme, buttonTheme } = useGlobalContext();
  const [colorTheme, setColorTheme] = useState(``);
  const [hoverTheme, setHoverTheme] = useState(``);

  const handleHoverTheme = useCallback(() => {
    switch (theme) {
      case `DARK`:
        return setHoverTheme(`button-dark`);
      case `DIM`:
        return setHoverTheme(`button-dim`);
      case `LIGHT`:
        return setHoverTheme(`button-light`);
      default:
        return setHoverTheme(`button-light`);
    }
  }, [theme]);

  const handleButtonTheme = useCallback(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setColorTheme(`button-lightBlue`);
      case `YELLOW`:
        return setColorTheme(`button-yellow`);
      case `PINK`:
        return setColorTheme(`button-pink`);
      case `PURPLE`:
        return setColorTheme(`button-purple`);
      case `ORANGE`:
        return setColorTheme(`button-orange`);
      case `GREEN`:
        return setColorTheme(`button-green`);
      default:
        return setColorTheme(`button-lightBlue`);
    }
  }, [buttonTheme, setColorTheme]);

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  useEffect(() => {
    handleHoverTheme();
  }, [theme, handleHoverTheme]);

  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopenener noreferrer">
        <img src={project.img} alt={project.title} className={``} />
      </a>
      <div className="project-card_info">
        <h3 className="project-card_title">{project.title}</h3>
        <p className="project-card_description">{project.description}</p>
        <div className="project-card_tech">{project.tech.join(", ")}</div>

        <div className="project-card_links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${colorTheme} ${hoverTheme} project-card_link`}
            >
              Github
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colorTheme} ${hoverTheme} project-card_link`}
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
