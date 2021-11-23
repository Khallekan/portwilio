import React from "react";

const experience = [
  {
    organization: `Developer Students Club.`,
    position: `Intern`,
    duration: `Sept 2020 - Dec 2020`,
    activities: [
      `Built frontend applications by converting UI/UX designs to fully scalable, interactive and responsive websites.`,
    ],
  },
  {
    organization: `Zuri Training.`,
    position: `Intern`,
    duration: `March 2021 - July 2021`,
    activities: [
      `Built a full stack web application in a team using HTML, CSS, JavaScript`,
      `Collaborated with various developers and designers to build and deploy a fully functional application.`,
    ],
  },
  {
    organization: `HNG Internship 8 - Operated by Zuri.`,
    position: `Intern`,
    duration: `August 2021 - September 2021`,
    activities: [
      `Contributed to an open source project to facilitate the communication between a large amount of users.`,
    ],
  },
  {
    organization: `Freelance`,
    position: `Frontend Developer`,
    duration: `April 2020 - Present`,
    activities: [
      `Implemented websites, frontend applications and landing pages from concept using React.js, SCSS, bootstrap.`,
      `Collaborated with various developers and designers to build and deploy responsive and interactive websites with a mobile first approach.`,
    ],
  },
];

const ProfileExperience = () => {
  return (
    <div className={`profile-experience`}>
      {experience.map(
        ({ organization, position, duration, activities }, index) => {
          return (
            <section key={index} className={`profile-experience_container`}>
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
    </div>
  );
};

export default ProfileExperience;
