import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";

const ContactModal = () => {
  const { theme, dispatch } = useGlobalContext();
  const [bgTheme, setBgTheme] = useState(``);

  const handleModalClose = () => {
    return dispatch({ type: "HANDLE_MODAL", payload: false });
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "contact-modal") {
      handleModalClose();
    }
  };

  useEffect(() => {
    switch (theme) {
      case "LIGHT":
        setBgTheme(`lightTheme`);
        break;
      case "DIM":
        setBgTheme(`dimTheme`);
        break;
      case "DARK":
        setBgTheme(`darkTheme`);
        break;
      default:
        setBgTheme(`lightTheme`);
    }
  }, [theme]);

  return (
    <section className={`contact-modal`} onClick={handleOutsideClick}>
      <div className={`${bgTheme} contact-modal_container`}>
        <div className={`contact-modal_close`} onClick={handleModalClose}>
          <AiOutlineClose />
        </div>
        <div className={`contact-modal_prompt`}>Get In Touch 👋🏿</div>
        <Socials isButtonVisible={false} isTextVisible={true} />
      </div>
    </section>
  );
};

export default ContactModal;
