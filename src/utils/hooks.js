import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../context";
import { useLocation } from "react-router";
import { routes } from "./sidebar";

// GET WINDOW DIMENSIONS

const getWindowsDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimesions, setWindowDimensions] = useState(
    getWindowsDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowsDimensions());
    };
    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);
  return windowDimesions;
};

// CHANGE BORDER WITH THEME

const useThemeBorder = () => {
  const [border, setBorder] = useState(``);
  const { theme } = useGlobalContext();

  const handleBorderTheme = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setBorder(`border-lightBorder`);
      case `DARK`:
        return setBorder(`border-darkModeBorder`);
      case `DIM`:
        return setBorder(`border-dimBorder`);
      default:
        return setBorder(`border-lightBorder`);
    }
  }, [theme, setBorder]);

  useEffect(() => {
    handleBorderTheme();
  }, [theme, handleBorderTheme]);
  return { border };
};

const useAnimatedRoutes = () => {
  const [animatedRoutes, setAnimatedRoutes] = useState(routes);
  const location = useLocation();

  useEffect(() => {
    setAnimatedRoutes((oldRoutes) => {
      let newRoutes = oldRoutes.map((route) => {
        return {
          ...route,
          location: location.pathname,
          key: location.pathname,
        };
      });
      return newRoutes;
    });
  }, [location]);

  return animatedRoutes;
};

export { useThemeBorder, useAnimatedRoutes };

export default useWindowDimensions;
