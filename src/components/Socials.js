import { useCallback, useState, useEffect } from "react";
import {
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { useGlobalContext } from "../context";

const socialLinks = [
  {
    app: `github`,
    classNames: `social-container`,
    element: <BsGithub />,
    url: `https://github.com/Khallekan`,
  },
  {
    app: `email`,
    classNames: `social-container mail`,
    element: <IoMailSharp />,
    url: `mailto:okeolalekanisaac@gmail.com`,
  },
  {
    app: `phone`,
    classNames: `social-container telephone`,
    element: <BsTelephoneFill />,
    url: `tel:+2348179459363`,
  },
  {
    app: `twitter`,
    classNames: `social-container twitter`,
    element: <BsTwitter />,
    url: `https://twitter.com/Khallekan`,
  },
  {
    app: `linkedin`,
    classNames: `social-container linkedin`,
    element: <BsLinkedin />,
    url: `http://www.linkedin.com/in/oke-olalekan-100`,
  },
];

const Socials = ({ className }) => {
  const { theme, buttonTheme } = useGlobalContext();
  const [socials] = useState(socialLinks);
  const [hoverTheme, setHoverTheme] = useState(``);

  const handleGithubTheme = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return "github-light";
      case `DARK`:
        return `github-dark`;
      case `DIM`:
        return `github-dark`;
      default:
        return `github-light`;
    }
  }, [theme, socials]);

  const handleButtonTheme = useCallback(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setHoverTheme(`hoverTheme-lightBlue`);
      case `YELLOW`:
        return setHoverTheme(`hoverTheme-yellow`);
      case `PINK`:
        return setHoverTheme(`hoverTheme-pink`);
      case `PURPLE`:
        return setHoverTheme(`hoverTheme-purple`);
      case `ORANGE`:
        return setHoverTheme(`hoverTheme-orange`);
      case `GREEN`:
        return setHoverTheme(`hoverTheme-green`);
      default:
        return setHoverTheme(`hoverTheme-lightBlue`);
    }
  }, [buttonTheme, setHoverTheme]);

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  return (
    <div className={className}>
      {socials.map(({ url, element, classNames, app }, index) => {
        let newClassname;
        if (app === `github`) {
          newClassname = `${classNames} ${handleGithubTheme()}`;
        }
        if (app !== `github` && app !== `linkedin` && app !== `twitter`) {
          newClassname = `${classNames} ${hoverTheme}`;
        }
        if (app === `twitter` || app === `linkedin`) {
          newClassname = `${classNames}`;
        }
        return (
          <a href={url} className={newClassname} key={index}>
            {element}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
