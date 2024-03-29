import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import Button from "../components/Button";
import useWindowDimensions, { useThemeBorder } from "../utils/hooks";
import { useGlobalContext } from "../context";
import { routesVariantDesktop } from "../utils/variants";

const Home = () => {
  let profileImage = `https://res.cloudinary.com/duziwvlis/image/upload/v1637014374/IMG-20210403-WA0090_eeimaw.jpg`;
  let { width } = useWindowDimensions();
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
      <motion.section className={`section1 no-scrollbar mainapp_home`}>
        <motion.header className={`mainapp_home_container mainapp_home-header`}>
          <motion.div className={`mainapp_home-header_img`}>
            <motion.img src={profileImage} alt={`Lekan Isaac`} />
          </motion.div>
          <motion.div className={`mainapp_home-header_intro`}>
            <motion.span className={`mainapp_home-header_intro_greet`}>
              Hello There!
            </motion.span>
            <motion.span className={`mainapp_home-header_intro_name`}>
              I'm{" "}
              <motion.span className={`mainapp_home-header_intro_name_text`}>
                OLALEKAN ISAAC.
              </motion.span>
            </motion.span>
          </motion.div>
        </motion.header>
        <motion.div className={`mainapp_home_container`}>
          <motion.p className={`mainapp_home_desc`}>
            I am a self taught, enthusiastic fullstack engineer with close to
            three (3) year's worth of experience building scalable and
            user-friendly web applications using various technologies. I have
            experience working on open source projects and can work in a group
            comfortably. <br />I am a firm beliver in the mobile first approach
            to web development. I am a quick learner and I am always willing to
            learn new technologies to further my knowledge. <br />
            <strong>
              <i>YOU</i>
            </strong>{" "}
            might be my employer.
          </motion.p>
          <motion.div className={`mainapp_home-contact`}>
            {width < 768 && (
              <Button
                className={`mainapp_home-contact-btn`}
                onClick={() =>
                  dispatch({ type: `HANDLE_MODAL`, payload: true })
                }
              >{`<Contact Me /> `}</Button>
            )}
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </motion.section>
    </motion.div>
  );
};

export default Home;
