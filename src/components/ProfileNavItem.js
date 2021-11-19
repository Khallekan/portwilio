import { useState, useCallback, useEffect } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { routes } from "../utils/sidebar";
import { useGlobalContext } from "../context";
const ProfileNavItem = ({ activeIcon, icon, to, title }) => {
  const [hoverItem, setHover] = useState(``);
  const [colorTheme, setColorTheme] = useState(``);
  let location = useLocation();
  let routeMatches = matchRoutes(routes, location);
  let isActive = routeMatches.some((match) => match.pathname === to);
  let { theme, buttonTheme } = useGlobalContext();

  const handleHoverItem = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setHover(`profile_nav_light`);
      case `DARK`:
        return setHover(`profile_nav_dark`);
      case `DIM`:
        return setHover(`profile_nav_dim`);
      default:
        return setHover(`profile_nav_light`);
    }
  }, [theme, setHover]);

  const handleButtonTheme = useCallback(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setColorTheme(`button-lightBlue`);
      case `YELLOW`:
        return setColorTheme(`button-yellow`);
      case `PINK`:
        return setColorTheme(`button-pink`);
      case `PURPLE`:
        return setColorTheme(`button-purple`);
      case `ORANGE`:
        return setColorTheme(`button-orange`);
      case `GREEN`:
        return setColorTheme(`button-green`);
      default:
        return setColorTheme(`button-lightBlue`);
    }
  }, [buttonTheme, setColorTheme]);

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  useEffect(() => {
    handleHoverItem();
  }, [theme, handleHoverItem]);

  return (
    <Link to={to} className={`${hoverItem} profile-nav-item`}>
      <div className={`profile-nav-item_main`}>
        {isActive ? activeIcon : icon} {title}
        {isActive && (
          <span className={`${colorTheme} profile-nav-item_active`}></span>
        )}
      </div>
    </Link>
  );
};

export default ProfileNavItem;
