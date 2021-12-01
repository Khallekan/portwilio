import React from "react";
import {
  Link,
  useLocation,
  matchRoutes,
  useResolvedPath,
} from "react-router-dom";
import { routes } from "../utils/sidebar";

const MobileNavItem = ({
  to,
  icon,
  activeIcon,
  className,
  activeClassName,
  exact,
}) => {
  let location = useLocation();
  let resolvedPath = useResolvedPath(to);
  let routeMatches = matchRoutes(routes, resolvedPath);

  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedPath.pathname;
  }
  if (!exact) {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedPath.pathname
    );
  }
  let classNames = isActive ? `${className} ${activeClassName}` : className;

  return (
    <Link to={to} className={classNames}>
      {isActive ? activeIcon : icon}
    </Link>
  );
};

export default MobileNavItem;
