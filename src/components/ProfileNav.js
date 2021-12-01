import React, { useState } from "react";
import { profileNav } from "../utils/sidebar";
import ProfileNavItem from "./ProfileNavItem";
import { useThemeBorder } from "../utils/hooks";

const ProfileNav = () => {
  const [navItems] = useState(profileNav);
  const { border } = useThemeBorder();

  return (
    <div className={`profile-nav ${border}`}>
      {navItems.map((navItem, index) => {
        return <ProfileNavItem {...navItem} key={index} exact={true} />;
      })}
    </div>
  );
};

export default ProfileNav;
