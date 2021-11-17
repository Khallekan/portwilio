import ProfileMain from "../components/ProfileMain";
// import useWindowDimensions from "../utils/hooks";
const Profile = () => {
  return (
    <div className={`mainapp-content_container`}>
      <section className='section1'>
        <ProfileMain />
      </section>
      <section className='section2'>something2</section>
    </div>
  );
};

export default Profile;
