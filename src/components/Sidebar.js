import React from "react";
import { useRouteMatch } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import { items } from "../utils/sidebar";
import "../styles/Sidebar.css";
const Sidebar = () => {
  const { url } = useRouteMatch();
  return (
    <aside className={`sidebar`}>
      <nav className={`sidebar_nav`}>
        <div className={`sidebar_logo_container`}>
          <SideBarItem to={`${url}home`} className={`sidebar_logo`}>
            <AiOutlineTwitter />
          </SideBarItem>
        </div>
        <ul className={`sidebar_nav_ul`}>
          {items.map(({ name, icon }, index) => {
            return (
              <SideBarItem
                key={index}
                to={`${url}${name.toLowerCase()}`}
                className={`sidebar_item`}
                classNameChildren={`sidebar_item_children`}
              >
                <span className={`sidebar-item_icon`}>{icon}</span>{" "}
                <span className={`sidebar-item_name`}>{name}</span>
              </SideBarItem>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
