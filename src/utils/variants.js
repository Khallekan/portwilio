const mainAppVariant = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      // type: "tween",
      // stiffness: 30,
      duration: 0.2,
      delayChildren: 0.5,
    },
  },
  exit: {
    y: "-100vw",
  },
};

const routesVariantDesktop = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: 100,
  },
};

export { mainAppVariant, routesVariantDesktop };
