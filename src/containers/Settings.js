import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";

const Settings = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return (
    <div className={`mainapp-content_container`}>
      <section className='section1 flex items-center justify-center'>
        SETTINGS COMING SOON ...
      </section>
      <section className='section2 mainapp_home_container'>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </div>
  );
};

export default Settings;
