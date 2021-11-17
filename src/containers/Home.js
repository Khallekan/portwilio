import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
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
          <motion.p class={`mainapp_home_desc`}>
            I am an entusiastic frontend developer with close to two (2) year's
            worth of experience building scalable and user-friendly web
            applications using various technologies. I have experience working
            on open source projects and can work in a group comfortably.
          </motion.p>
          <Button>{`<Contact Me />`}</Button>
        </motion.div>
      </motion.section>
      <motion.section className={`section2`}>
        {/* <motion.div className={`home-img`}>
          <motion.img src={profileImage} alt={`Lekan Isaac`} />
        </motion.div> */}
      </motion.section>
    </motion.div>
  );
};

export default Home;
