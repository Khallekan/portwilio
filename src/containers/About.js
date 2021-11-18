import React, { useEffect } from "react";
// import { useMatch, Route, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const About = () => {
  // const { path, url } = useMatch();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, []);
  return <></>;
};

export default About;
