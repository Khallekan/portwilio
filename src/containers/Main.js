import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import ContactModal from "../components/ContactModal";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../context";
import useWindowDimensions from "../utils/hooks";
import { mainAppVariant } from "../utils/variants";

import "../styles/Main.css";

const Main = () => {
  const { dispatch, mobileDevice, isContactModalOpen } = useGlobalContext();
  let { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1280) {
      return dispatch({ type: `RESIZE`, payload: true });
    }
    return dispatch({ type: `RESIZE`, payload: false });
  }, [width, dispatch]);

  useEffect(() => {
    if (width <= 500) {
      return dispatch({ type: `HANDLE_MOBILE`, payload: true });
    }
    return dispatch({ type: `HANDLE_MOBILE`, payload: false });
  }, [width, dispatch]);

  return (
    <motion.section
      className={`mainapp`}
      variants={mainAppVariant}
      exit='exit'
      animate='visible'
      initial='hidden'
    >
      {isContactModalOpen && <ContactModal />}
      {mobileDevice ? <MobileNav /> : <Sidebar />}
      <AnimatePresence exitBeforeEnter>
        <Outlet />
      </AnimatePresence>
    </motion.section>
  );
};

export default Main;
