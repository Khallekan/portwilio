import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const settingsItems = {
  buttonThemeItems: [
    { className: `settings-buttonTheme button-lightBlue`, name: `BLUE` },
    { className: `settings-buttonTheme button-yellow`, name: `YELLOW` },
    { className: `settings-buttonTheme button-pink`, name: `PINK` },
    { className: `settings-buttonTheme button-purple`, name: `PURPLE` },
    { className: `settings-buttonTheme button-orange`, name: `ORANGE` },
    { className: `settings-buttonTheme button-green`, name: `GREEN` },
  ],
  bgThemeItems: [
    { className: `settings-bgTheme settings-lightbtn`, name: `LIGHT` },
    { className: `settings-bgTheme settings-dimbtn`, name: `DIM` },
    { className: `settings-bgTheme settings-darkbtn`, name: `DARK` },
  ],
};

const Settings = () => {
  const { dispatch, buttonTheme, theme } = useGlobalContext();
  const [borderColor, setBorderColor] = useState({ border: ``, text: `` });
  useEffect(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setBorderColor({
          border: `settingsButton-lightBlue`,
          text: `settings-btn-active-lightBlue`,
        });
      case `YELLOW`:
        return setBorderColor({
          border: `settingsButton-yellow`,
          text: `settings-btn-active-yellow`,
        });
      case `PINK`:
        return setBorderColor({
          border: `settingsButton-pink`,
          text: `settings-btn-active-pink`,
        });
      case `PURPLE`:
        return setBorderColor({
          border: `settingsButton-purple`,
          text: `settings-btn-active-purple`,
        });
      case `ORANGE`:
        return setBorderColor({
          border: `settingsButton-orange`,
          text: `settings-btn-active-orange`,
        });
      case `GREEN`:
        return setBorderColor({
          border: `settingsButton-green`,
          text: `settings-btn-active-green`,
        });
      default:
        return setBorderColor({
          border: `settingsButton-lightBlue`,
          text: `settings-btn-active-lightBlue`,
        });
    }
  }, [buttonTheme, setBorderColor]);

  let { buttonThemeItems, bgThemeItems } = settingsItems;
  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return (
    <div className={`mainapp-content_container`}>
      <section className='section1 settings-main'>
        <div className={`settings-group`}>
          <h2 className={`settings-group_header`}>Color</h2>
          <div className={`settings-buttonTheme_container`}>
            {buttonThemeItems.map(({ className, name }, index) => {
              let isActive = false;
              if (buttonTheme === name) isActive = true;
              return (
                <button
                  key={index}
                  className={className}
                  onClick={() =>
                    dispatch({ type: `HANDLE_BUTTON_THEME`, payload: name })
                  }
                >
                  {" "}
                  {isActive && <AiOutlineCheck />}
                </button>
              );
            })}
          </div>
        </div>
        <div className={`settings-group`}>
          <h2 className={`settings-group_header`}>Background</h2>
          <div className='settings-buttonTheme_container'>
            {bgThemeItems.map(({ className, name }, index) => {
              let isActive = false;
              if (theme === name) isActive = true;
              return (
                <button
                  key={index}
                  className={`${className} ${
                    isActive ? borderColor.border : ``
                  }`}
                  onClick={() =>
                    dispatch({ type: `HANDLE_BACKGROUND`, payload: name })
                  }
                >
                  {isActive ? (
                    <span className={borderColor.text}>
                      <IoMdRadioButtonOn />
                    </span>
                  ) : (
                    <span className={`settings-btn-inactive`}>
                      <IoMdRadioButtonOff />
                    </span>
                  )}
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <section className='section2 mainapp_home_container'>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </div>
  );
};

export default Settings;
