import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import { items } from "../utils/sidebar";
import "../styles/Sidebar.css";
import { useGlobalContext } from "../context";
import { useThemeBorder } from "../utils/hooks";

const Sidebar = () => {
  let { justIcons, theme } = useGlobalContext();
  const [logoTheme, setLogoTheme] = useState(``);
  const [bgTheme, setBgTheme] = useState(``);
  const { border } = useThemeBorder();

  const getTheme = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        setBgTheme(`lightTheme`);
        return setLogoTheme(`sidebar_logo_light`);
      case `DARK`:
        setBgTheme(`darkTheme`);
        return setLogoTheme(`sidebar_logo_dark`);
      case `DIM`:
        setBgTheme(`dimTheme`);
        return setLogoTheme(`sidebar_logo_dim`);
      default:
        setBgTheme(`lightTheme`);
        return setLogoTheme(`sidebar_logo_light`);
    }
  }, [theme, setLogoTheme]);

  useEffect(() => {
    switch (theme) {
      case "LIGHT":
        setBgTheme(`lightTheme`);
        break;
      case "DIM":
        setBgTheme(`dimTheme`);
        break;
      case "DARK":
        setBgTheme(`darkTheme`);
        break;
      default:
        setBgTheme(`lightTheme`);
    }
  }, [theme]);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <aside className={`sidebar ${border} ${bgTheme}`}>
      <nav className={`sidebar_nav`}>
        <Link to={``} className={`sidebar_logo_container ${logoTheme}`}>
          <AiOutlineTwitter />
        </Link>
        <ul className={`sidebar_nav_ul`}>
          {items.map(({ name, icon, activeIcon, to }, index) => {
            return (
              <SideBarItem
                name={name}
                icon={icon}
                activeIcon={activeIcon}
                key={index}
                to={to}
                exact={true}
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
