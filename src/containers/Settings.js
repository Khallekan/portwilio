import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";
import BackButton from "../components/BackButton";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { settingsItems } from "../utils/sidebar";
import { useThemeBorder } from "../utils/hooks";
import { motion } from "framer-motion";
import { routesVariantDesktop } from "../utils/variants";
const Settings = () => {
  const { dispatch, buttonTheme, theme, mobileDevice } = useGlobalContext();
  const [borderColor, setBorderColor] = useState({ border: ``, text: `` });
  const { border } = useThemeBorder();

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
      <section className="section1 no-scrollbar settings-main">
        <div className={`profile-main_nav profile-main_container ${border}`}>
          <BackButton />
          <div className={`profile-main_nav-text`}>
            <p className={`profile-main_nav-text-name`}>Oke Olalekan Isaac</p>
            <p className={`profile-main_nav-text-role`}>Frontend Developer</p>
          </div>
        </div>
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
                  {isActive && <AiOutlineCheck />}
                </button>
              );
            })}
          </div>
        </div>
        <div className={`settings-group`}>
          <h2 className={`settings-group_header`}>Background</h2>
          <div className="settings-buttonTheme_container-theme">
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
      <section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </motion.div>
  );
};

export default Settings;
