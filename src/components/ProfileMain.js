import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import BackButton from "./BackButton";
import Button from "./Button";
import { Outlet } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import ProfileNav from "./ProfileNav";

const ProfileMain = () => {
  const { theme, dispatch } = useGlobalContext();
  const [borderColor, setBorderColor] = useState(``);

  useEffect(() => {
    switch (theme) {
      case `DARK`:
        return setBorderColor(`border-dark`);
      case `DIM`:
        return setBorderColor(`border-dim`);
      case `LIGHT`:
        return setBorderColor(`border-light`);
      default:
        break;
    }
  }, [theme, setBorderColor]);

  const handleModalOpen = () => {
    return dispatch({ type: "HANDLE_MODAL", payload: true });
  };

  return (
    <div className='profile-main'>
      <div className={`profile-main_nav profile-main_container`}>
        <BackButton />
        <div className={`profile-main_nav-text`}>
          <p className={`profile-main_nav-text-name`}>Oke Olalekan Isaac</p>
          <p className={`profile-main_nav-text-role`}>Frontend Developer</p>
        </div>
      </div>
      <div className={`profile-main-content`}>
        <div className={`profile-main-content_header`}>
          <div className={`profile-main-content_header-images`}>
            <div className={`profile-main-content_header-images_header`}>
              <img
                src={`https://res.cloudinary.com/duziwvlis/image/upload/v1637328268/final_6197a1ededc441013b604439_244259_io3ilq.png`}
                alt='header'
              />
            </div>
            <div
              className={`profile-main-content_header-images_profile ${borderColor}`}
            >
              <img
                src='https://res.cloudinary.com/duziwvlis/image/upload/v1637014374/IMG-20210403-WA0090_eeimaw.jpg'
                alt='profile'
              />
            </div>
          </div>
          <div className={`profile-main-content_header-main`}>
            <Button
              className={`profile-main-content_button`}
              onClick={handleModalOpen}
            >
              {`Hire Me!`}
            </Button>
            <p className={`profile-main-content_header-info`}>
              <span className={`profile-main-content_header-info_name`}>
                Olalekan Isaac
              </span>
              <span className={`profile-main-content_header-info_nickname`}>
                @Khallekan
              </span>
            </p>
            <p className={`profile-main-content_header-info_desc`}>
              A Biochemist by formal education. An aspiring fullstack developer
              with current focus on the frontend aspect. I am open to in-person
              or remote internships or jobs.
            </p>
            <p className={`profile-main-content_header-info_location`}>
              <MdLocationPin /> Lagos, Nigeria
            </p>
          </div>
          <ProfileNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
