const onboardingVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
  exit: {
    y: "-100vw",
  },
};
const firstVariant = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    y: "100vw",
  },
};
const secondVariant = {
  hidden: { y: "-100vw" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  exit: {
    y: "-100vw",
  },
};
const fourthVariant = {
  hidden: { y: "100vw" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    x: "-100vw",
  },
};
const thirdVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    y: "-100vw",
  },
};

export {
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  onboardingVariant,
};
