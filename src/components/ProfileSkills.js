import React from "react";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
import { routesVariantDesktop } from "../utils/variants";
import { skills } from "../utils/sidebar";

const ProfileSkills = () => {
  let { theme } = useGlobalContext();

  return (
    <motion.div
      className={`skills-container`}
      variants={routesVariantDesktop}
      animate='visible'
      initial='hidden'
      exit='exit'
    >
      {skills.map(({ className, classNameLogo, name, icon }, index) => {
        let newClassName = className;
        if (name === `Git`) {
          switch (theme) {
            case `LIGHT`:
              newClassName = `${className} git-skill-light`;
              break;
            case `DARK`:
              newClassName = `${className} git-skill-dark`;
              break;
            case `DIM`:
              newClassName = `${className} git-skill-dark`;
              break;
            default:
              break;
          }
        }

        return (
          <div key={index} className={newClassName}>
            <span className={classNameLogo}>{icon}</span>
            <span>{name}</span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProfileSkills;
