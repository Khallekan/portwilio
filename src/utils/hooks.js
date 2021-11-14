import { useState, useEffect } from "react";

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

export default useWindowDimensions;
