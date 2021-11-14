import React, { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  firstVariant,
  secondVariant,
  thirdVariant,
  onboardingVariant,
} from "../utils/onboardingVariants";
import "../styles/Onboarding.css";

const Onboarding = ({ text, setText }) => {
  sessionStorage.setItem("reloadOnboarding", JSON.stringify(text));
  const { first, second, third } = text;
  let navigate = useNavigate();

  const handleRedirectHome = useCallback(() => {
    return navigate(`/home`);
  }, [navigate]);

  useEffect(() => {
    if (text.first)
      return setTimeout(() => {
        setText({ ...text, first: false, second: true });
      }, 3000);
    if (text.second)
      return setTimeout(() => {
        setText({ ...text, second: false, third: true });
      }, 3000);
    if (text.third)
      return setTimeout(() => {
        handleRedirectHome();
        setText({ ...text, third: false });
      }, 3000);
  }, [text, handleRedirectHome, setText]);

  return (
    <motion.div
      variants={onboardingVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className={`onboarding-wrapper`}
    >
      <AnimatePresence exitBeforeEnter>
        {first && (
          <motion.span
            key={`first`}
            variants={firstVariant}
            className={`text-center`}
          >
            Hello there! <br />
            Welcome to Khallekan's Portfolio!
          </motion.span>
        )}
        {second && (
          <motion.span key={`third`} variants={secondVariant}>
            Modelled after...
          </motion.span>
        )}
        {third && (
          <motion.span key={`fourth`} variants={thirdVariant}>
            <AiOutlineTwitter className={`inline text-7xl`} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Onboarding;
