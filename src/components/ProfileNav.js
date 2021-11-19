import React, { useState } from "react";
import { profileNav } from "../utils/sidebar";
import ProfileNavItem from "./ProfileNavItem";

const ProfileNav = () => {
  const [navItems] = useState(profileNav);
  return (
    <div className={`profile-nav`}>
      {navItems.map((navItem, index) => {
        return <ProfileNavItem {...navItem} key={index} />;
      })}
    </div>
  );
};

export default ProfileNav;
