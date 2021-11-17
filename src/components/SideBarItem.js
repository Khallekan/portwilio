import React, { useCallback, useEffect, useState } from "react";
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
  const [hoverItem, setHover] = useState(`initialState`);
  let location = useLocation();
  let routeMatches = matchRoutes(routes, location);
  let { justIcons, theme } = useGlobalContext();
  let isActive = routeMatches.some((match) => match.pathname === to);

  const handleHoverItem = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setHover(`sidebar_item_light`);
      case `DARK`:
        return setHover(`sidebar_item_dark`);
      case `DIM`:
        return setHover(`sidebar_item_dim`);
      default:
        return setHover(`sidebar_item_light`);
    }
  }, [theme, setHover]);

  useEffect(() => {
    handleHoverItem();
  }, [theme, handleHoverItem]);

  return (
    <Link to={to} className={`${classNameChildren} ${className} ${hoverItem}`}>
      <span className={`sidebar-item_icon`}>
        {isActive ? activeIcon : icon}
      </span>{" "}
      {!justIcons && (
        <span
          className={
            isActive ? `sidebar-item_name_active` : `sidebar-item_name`
          }
        >
          {name}
        </span>
      )}
    </Link>
  );
};

export default SideBarItem;
