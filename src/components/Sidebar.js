import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import { items } from "../utils/sidebar";
import "../styles/Sidebar.css";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  let { justIcons } = useGlobalContext();

  return (
    <aside className={`sidebar`}>
      <nav className={`sidebar_nav`}>
        <div className={`sidebar_logo_container`}>
          <Link to={`/home`} className={`sidebar_logo`}>
            <AiOutlineTwitter />
          </Link>
        </div>
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
