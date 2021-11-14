import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { useGlobalContext } from "../context";
import useWindowDimensions from "../utils/hooks";
import "../styles/Main.css";

const Main = () => {
  const { dispatch, mobileDevice } = useGlobalContext();
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
    <section className={`mainapp`}>
      {mobileDevice ? <MobileNav /> : <Sidebar />}
      <Outlet />
    </section>
  );
};

export default Main;
