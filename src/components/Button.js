import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Button = ({ className, children, ...rest }) => {
  let { buttonTheme, theme } = useGlobalContext();
  const [colorTheme, setColorTheme] = useState(``);
  const [hoverTheme, setHoverTheme] = useState(``);

  const handleHoverTheme = useCallback(() => {
    switch (theme) {
      case `DARK`:
        return setHoverTheme(`button-dark`);
      case `DIM`:
        return setHoverTheme(`button-dim`);
      case `LIGHT`:
        return setHoverTheme(`button-light`);
      default:
        return setHoverTheme(`button-light`);
    }
  }, [theme]);

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
    handleHoverTheme();
  }, [theme, handleHoverTheme]);

  return (
    <button className={`${colorTheme} ${hoverTheme} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
