import React from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ children, to, className, classNameChildren }) => {
  return (
    <div className={className}>
      <Link to={to} className={classNameChildren}>
        {children}
      </Link>
    </div>
  );
};

export default SideBarItem;
