import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useGlobalContext } from "../context";

const BackButton = () => {
  const [hoverItem, setHover] = useState(``);
  let { theme } = useGlobalContext();
  let navigate = useNavigate();

  const handleHoverItem = useCallback(() => {
    switch (theme) {
      case `LIGHT`:
        return setHover(`sidebar_item_light`);
      case `DARK`:
        return setHover(`sidebar_item_dark`);
      case `DIM`:
        return setHover(`sidebar_item_dim`);
      default:
        return setHover(`sidebar_item_light`);
    }
  }, [theme, setHover]);

  useEffect(() => {
    handleHoverItem();
  }, [theme, handleHoverItem]);

  const handleNavigate = () => {
    return navigate(-1);
  };

  return (
    <div className={`${hoverItem} backButton`} onClick={handleNavigate}>
      <BiArrowBack />
    </div>
  );
};

export default BackButton;
