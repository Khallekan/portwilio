import React from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
import { routes } from "../utils/sidebar";
const SideBarItem = ({
  to,
  className,
  classNameChildren,
  icon,
  name,
  activeIcon,
}) => {
  let location = useLocation();
  let routeMatches = matchRoutes(routes, location);
  let { justIcons } = useGlobalContext();
  let isActive = routeMatches.some((match) => match.pathname === to);
  return (
    <Link to={to} className={`${classNameChildren} ${className}`}>
      <span className={`sidebar-item_icon`}>
        {isActive ? activeIcon : icon}
      </span>{" "}
      {!justIcons && <span className={`sidebar-item_name`}>{name}</span>}
    </Link>
  );
};

export default SideBarItem;
