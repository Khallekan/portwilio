import React from "react";
import { experience } from "../utils/sidebar";
import { useThemeBorder } from "../utils/hooks";
import { motion } from "framer-motion";
import { routesVariantDesktop } from "../utils/variants";
const ProfileExperience = () => {
  const { border } = useThemeBorder();
  return (
    <motion.div
      className={`profile-experience`}
      variants={routesVariantDesktop}
      animate='visible'
      initial='hidden'
      exit='exit'
    >
      {experience.map(
        ({ organization, position, duration, activities }, index) => {
          return (
            <section
              key={index}
              className={`profile-experience_container ${border}`}
            >
              <div className={`profile-experience_header`}>
                <h3 className={`profile-experience_org`}>{organization}</h3>
                <h4 className={`profile-experience_position`}>{position}</h4>
              </div>
              <h5 className={`profile-experience_duration`}>{duration}</h5>
              <ul className={`profile-experience_activities`}>
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className={`profile-experience_activities-item`}
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </section>
          );
        }
      )}
    </motion.div>
  );
};

export default ProfileExperience;
