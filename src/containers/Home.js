import React from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Socials from "../components/Socials";
import Button from "../components/Button";
const Home = () => {
  let profileImage = `https://res.cloudinary.com/duziwvlis/image/upload/v1637014374/IMG-20210403-WA0090_eeimaw.jpg`;

  return (
    <motion.div className={`mainapp-content_container`}>
      <motion.section className={`section1 mainapp_home`}>
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
            I am an entusiastic frontend developer with close to two (2) year's
            worth of experience building scalable and user-friendly web
            applications using various technologies. I have experience working
            on open source projects and can work in a group comfortably.
          </motion.p>
          <motion.div className={`mainapp-home_socials`}></motion.div>
          {/* <Button>{`<Contact Me /> `}</Button> */}
        </motion.div>
      </motion.section>
      <motion.section className={`section2 mainapp_home_container`}>
        <Routes>
          <Route
            index
            element={<Socials className={`mainapp_home-socials`} />}
          />
        </Routes>
      </motion.section>
    </motion.div>
  );
};

export default Home;
