import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Button = ({ className, children, ...rest }) => {
  let { buttonTheme } = useGlobalContext();
  const [theme, setTheme] = useState(``);

  const handleButtonTheme = useCallback(() => {
    switch (buttonTheme) {
      case `BLUE`:
        return setTheme(`button-lightBlue`);
      case `YELLOW`:
        return setTheme(`button-yellow`);
      case `PINK`:
        return setTheme(`button-pink`);
      case `PURPLE`:
        return setTheme(`button-purple`);
      case `ORANGE`:
        return setTheme(`button-orange`);
      case `GREEN`:
        return setTheme(`button-green`);
      default:
        return setTheme(`button-lightBlue`);
    }
  }, [buttonTheme, setTheme]);

  useEffect(() => {
    handleButtonTheme();
  }, [buttonTheme, handleButtonTheme]);

  return (
    <button className={`${theme} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
