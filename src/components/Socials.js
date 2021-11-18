import { useCallback, useState, useEffect } from "react";
import { socialLinks } from "../utils/sidebar";
import { MdOutlineComputer } from "react-icons/md";
import { useGlobalContext } from "../context";
import useWindowsDimension from "../utils/hooks";
import Button from "./Button";

const Socials = ({
  className,
  isButtonVisible = true,
  isTextVisible = false,
}) => {
  let { width } = useWindowsDimension();
  const { theme, buttonTheme, dispatch } = useGlobalContext();
  const [socials, setSocials] = useState(socialLinks);
  const [hoverTheme, setHoverTheme] = useState(``);

  const handleModalOpen = () => {
    return dispatch({ type: "HANDLE_MODAL", payload: true });
  };

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
  }, [theme]);

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

  const handleMouseOver = useCallback(
    (app) => {
      setSocials((prevState) => {
        return prevState.map((social) => {
          if (social.app === app) {
            return {
              ...social,
              isTooltipVisible: true,
            };
          }
          return social;
        });
      });
    },
    [setSocials]
  );

  const handleMouseOut = useCallback(
    (app) => {
      setSocials((prevState) => {
        return prevState.map((social) => {
          if (social.app === app) {
            return {
              ...social,
              isTooltipVisible: false,
            };
          }
          return social;
        });
      });
    },
    [setSocials]
  );

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  return (
    <div className={`socials`}>
      {isButtonVisible && (
        <Button className={`socials_button`} onClick={handleModalOpen}>
          {width > 1030 ? `<Contact Me />` : <MdOutlineComputer />}
        </Button>
      )}
      <div className={`${className}`}>
        {socials.map(
          ({ url, element, classNames, app, isTooltipVisible }, index) => {
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
              <a
                href={url}
                target={`_blank`}
                className={newClassname}
                key={index}
                onMouseOver={() => handleMouseOver(app)}
                onFocus={() => handleMouseOver(app)}
                onMouseOut={() => handleMouseOut(app)}
                onBlur={() => handleMouseOut(app)}
              >
                {isTextVisible && <span className={`social-name`}>{app}</span>}{" "}
                {element}
                {isTooltipVisible && (
                  <span className={`social-tooltip`}>{app}</span>
                )}
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Socials;
