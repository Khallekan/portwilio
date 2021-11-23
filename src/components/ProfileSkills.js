import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { DiCss3, DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiJavascript } from "react-icons/si";
import { useGlobalContext } from "../context";

const skills = [
  {
    name: `HTML`,
    icon: <AiFillHtml5 />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container html-logo`,
  },
  {
    name: `CSS`,
    icon: <DiCss3 />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container css-logo`,
  },
  {
    name: `JavaScript`,
    icon: <SiJavascript />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container js-logo`,
  },
  {
    name: `SCSS`,
    icon: <DiSass />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container scss-logo`,
  },
  {
    name: `React`,
    icon: <FaReact />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container react-logo `,
  },
  {
    name: `Tailwind`,
    icon: <SiTailwindcss />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container tailwind-logo`,
  },
  {
    name: "Git",
    icon: <BsGithub />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container`,
  },
  {
    name: `Bootstrap`,
    icon: <SiBootstrap />,
    classNameLogo: `skill-logo `,
    className: `skills-item_container bootstrap-logo`,
  },
];

const ProfileSkills = () => {
  let { theme } = useGlobalContext();

  return (
    <div className={`skills-container`}>
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
    </div>
  );
};

export default ProfileSkills;
