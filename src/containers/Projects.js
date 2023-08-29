import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import { routesVariantDesktop } from "../utils/variants";
import ProjectCard from "../components/ProjectCard";
import BackButton from "../components/BackButton";
import { projects } from "../utils/sidebar";
import { useThemeBorder } from "../utils/hooks";

const Projects = () => {
  const { dispatch, buttonTheme, mobileDevice } = useGlobalContext();
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
    <motion.div
      className={`${
        mobileDevice
          ? "mainapp-content_container-mobile"
          : "mainapp-content_container"
      }`}
      variants={routesVariantDesktop}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <section className={`section1 no-scrollbar project-container`}>
        <div className={`profile-main_nav profile-main_container ${border}`}>
          <BackButton />
          <div className={`profile-main_nav-text`}>
            <p className={`profile-main_nav-text-name`}>Oke Olalekan Isaac</p>
            <p className={`profile-main_nav-text-role`}>Frontend Developer</p>
          </div>
        </div>
        <div className={`project-wrapper ${divideTheme}`}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </section>
      <section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </motion.div>
  );
};

export default Projects;
