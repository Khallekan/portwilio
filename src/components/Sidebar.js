import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import { items } from "../utils/sidebar";
import "../styles/Sidebar.css";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  let { justIcons } = useGlobalContext();
  const { theme } = useGlobalContext();
  const [logoTheme, setLogoTheme] = useState(``);

  const getTheme = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setLogoTheme(`sidebar_logo_light`);
      case `DARK`:
        return setLogoTheme(`sidebar_logo_dark`);
      case `DIM`:
        return setLogoTheme(`sidebar_logo_dim`);
      default:
        return setLogoTheme(`sidebar_logo_light`);
    }
  }, [theme, setLogoTheme]);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <aside className={`sidebar`}>
      <nav className={`sidebar_nav`}>
        <Link to={`/`} className={`sidebar_logo_container ${logoTheme}`}>
          <AiOutlineTwitter />
        </Link>
        <ul className={`sidebar_nav_ul`}>
          {items.map(({ name, icon, activeIcon }, index) => {
            return (
              <SideBarItem
                name={name}
                icon={icon}
                activeIcon={activeIcon}
                key={index}
                to={`/${name.toLowerCase()}`}
                className={`sidebar_item`}
                classNameChildren={`${
                  justIcons ? `sidebar_item_children` : `sidebar_item_children2`
                }`}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
