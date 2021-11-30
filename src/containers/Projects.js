import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/sidebar";
import { useThemeBorder } from "../utils/hooks";

const Projects = () => {
  const { dispatch, buttonTheme } = useGlobalContext();
  const [divideTheme, setDivideTheme] = useState(``);
  const { border } = useThemeBorder();

  const handleButtonTheme = useCallback(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setDivideTheme(`divide-lightBlue`);
      case `YELLOW`:
        return setDivideTheme(`divide-yellowTheme`);
      case `PINK`:
        return setDivideTheme(`divide-pinkTheme`);
      case `PURPLE`:
        return setDivideTheme(`divide-purpleTheme`);
      case `ORANGE`:
        return setDivideTheme(`divide-orangeTheme`);
      case `GREEN`:
        return setDivideTheme(`divide-greenTheme`);
      default:
        return setDivideTheme(`divide-lightBlue`);
    }
  }, [buttonTheme, setDivideTheme]);

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return (
    <div className={`mainapp-content_container`}>
      <section className={`section1 project-container ${divideTheme}`}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </section>
      <section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </div>
  );
};

export default Projects;
