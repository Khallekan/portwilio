import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Settings = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return <div>Settings</div>;
};

export default Settings;
