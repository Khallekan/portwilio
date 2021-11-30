import { useEffect } from "react";
import ProfileMain from "../components/ProfileMain";
import Socials from "../components/Socials";
import { useGlobalContext } from "../context";
import { useThemeBorder } from "../utils/hooks";

const Profile = () => {
  const { dispatch } = useGlobalContext();
  const { border } = useThemeBorder();
  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return (
    <div className={`mainapp-content_container`}>
      <section className='section1'>
        <ProfileMain />
      </section>
      <section className={`section2 mainapp_home_container ${border}`}>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </div>
  );
};

export default Profile;
