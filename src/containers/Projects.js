import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Projects = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return <div>Projects</div>;
};

export default Projects;
