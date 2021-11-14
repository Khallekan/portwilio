import { items } from "../utils/mobilenav";
import MobileNavItem from "./MobileNavItem";
import "../styles/MobileNav.css";
const MobileNav = () => {
  return (
    <div className={`mobile-nav`}>
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
