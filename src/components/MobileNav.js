import { items } from "../utils/mobilenav";
import MobileNavItem from "./MobileNavItem";
import "../styles/MobileNav.css";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";

const MobileNav = () => {
  let { theme } = useGlobalContext();
  const [bgTheme, setBgTheme] = useState(``);

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

  return (
    <div className={`mobile-nav ${bgTheme}`}>
      {items.map(({ name, ...rest }, index) => {
        return (
          <MobileNavItem
            key={index}
            to={`/${name.toLowerCase()}`}
            {...rest}
            className={`mobile-nav_item`}
            activeClassName={`mobile_nav_item-active`}
          />
        );
      })}
    </div>
  );
};

export default MobileNav;
