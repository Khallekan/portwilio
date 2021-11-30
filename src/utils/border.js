import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../context";

const useThemeBorder = () => {
  const [border, setBorder] = useState(``);
  const { theme } = useGlobalContext();

  const handleBorderTheme = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setBorder(`border-lightBorder`);
      case `DARK`:
        return setBorder(`border-darkModeBorder`);
      case `DIM`:
        return setBorder(`border-dimBorder`);
      default:
        return setBorder(`border-lightBorder`);
    }
  }, [theme, setBorder]);

  useEffect(() => {
    handleBorderTheme();
  }, [theme, handleBorderTheme]);

  console.log(border);

  return { border };
};

export default useThemeBorder;
