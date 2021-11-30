import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Button = ({ className, children, ...rest }) => {
  let { buttonTheme } = useGlobalContext();
  const [colorTheme, setColorTheme] = useState(``);

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

  return (
    <button className={`${colorTheme} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
