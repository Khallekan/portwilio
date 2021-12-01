import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { useGlobalContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";
import Onboarding from "../containers/Onboarding";
import { routes } from "../utils/sidebar";
import "../styles/App.css";

const textValues = JSON.parse(sessionStorage.getItem("reloadOnboarding")) || {
  first: true,
  second: false,
  third: false,
};

const App = () => {
  let element = useRoutes(routes);
  const { theme } = useGlobalContext();
  const [bgTheme, setBgTheme] = useState(``);
  const [text, setText] = useState(textValues);
  sessionStorage.setItem(`reloadOnboarding`, JSON.stringify(text));

  const { first, second, third } = text;

  useEffect(() => {
    switch (theme) {
      case "LIGHT":
        setBgTheme(`lightTheme`);
        break;
      case "DIM":
        setBgTheme(`dimTheme`);
        break;
      case "DARK":
        setBgTheme(`darkTheme`);
        break;
      default:
        setBgTheme(`lightTheme`);
    }
  }, [theme]);

  return (
    <motion.div className={`app-wrapper ${bgTheme}`}>
      <AnimatePresence exitBeforeEnter>
        {first || second || third ? (
          <Onboarding setText={setText} text={text} />
        ) : (
          element
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default App;
