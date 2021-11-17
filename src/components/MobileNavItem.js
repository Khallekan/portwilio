import React from "react";
import { Link, useLocation, matchRoutes } from "react-router-dom";
import { routes } from "../utils/sidebar";

const MobileNavItem = ({
  to,
  icon,
  activeIcon,
  className,
  activeClassName,
}) => {
  let location = useLocation();
  let routeMatches = matchRoutes(routes, location);
  let isActive = routeMatches.some((match) => match.pathname === to);
  let classNames = isActive ? `${className} ${activeClassName}` : className;

  return (
    <Link to={to} className={classNames}>
      {isActive ? activeIcon : icon}
    </Link>
  );
};

export default MobileNavItem;
