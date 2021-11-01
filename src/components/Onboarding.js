import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Redirect } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  onboardingVariant,
} from "../utils/onboardingVariants";
import "../styles/Onboarding.css";

const Onboarding = ({ text, setText }) => {
  sessionStorage.setItem("reloadOnboarding", JSON.stringify(text));
  const { first, second, third, fourth } = text;
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
        setText({ ...text, third: false, fourth: true });
      }, 3000);
    if (text.fourth)
      setTimeout(() => {
        setText({ ...text, fourth: false });
      }, 3000);
  }, [text]);

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
          <motion.span key={`first`} variants={firstVariant}>
            Hello there!
          </motion.span>
        )}
        {second && (
          <motion.span key={`second`} variants={secondVariant}>
            Welcome to Khallekan's Portfolio!
          </motion.span>
        )}
        {third && (
          <motion.span key={`third`} variants={thirdVariant}>
            Modelled after...
          </motion.span>
        )}
        {fourth && (
          <motion.span key={`fourth`} variants={fourthVariant}>
            <AiOutlineTwitter className={`inline text-7xl`} />
          </motion.span>
        )}
      </AnimatePresence>
      {!first && !second && !third && !fourth && <Redirect to={`/home`} />}
    </motion.div>
  );
};

export default Onboarding;
