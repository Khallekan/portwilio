import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const BackButton = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    return navigate(-1);
  };

  return <BiArrowBack onClick={handleNavigate} />;
};

export default BackButton;
