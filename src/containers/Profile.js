import { useEffect } from "react";
import ProfileMain from "../components/ProfileMain";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import { useGlobalContext } from "../context";
import { useThemeBorder } from "../utils/hooks";
import { routesVariantDesktop } from "../utils/variants";

const Profile = () => {
  const { dispatch, mobileDevice } = useGlobalContext();
  const { border } = useThemeBorder();
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
      animate='visible'
      initial='hidden'
      exit='exit'
    >
      <section className='section1'>
        <ProfileMain />
      </section>
      <section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </motion.div>
  );
};

export default Profile;
