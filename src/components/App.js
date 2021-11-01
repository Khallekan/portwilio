import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Redirect, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../containers/Home";
import Onboarding from "./Onboarding";
import "../styles/App.css";

const textValues = sessionStorage.getItem("reloadOnboarding") || {
  first: true,
  second: false,
  third: false,
  fourth: false,
};

const App = () => {
  const { theme } = useGlobalContext();
  const [bgTheme, setBgTheme] = useState(``);
  const [text, setText] = useState(textValues);

  const { first, second, third, fourth } = text;
  const location = useLocation();

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
    <div className={`app-wrapper ${bgTheme}`}>
      <AnimatePresence>
        {(first || second || third || fourth) && (
          <Onboarding key={`onboarding`} text={text} setText={setText} />
        )}
        {!first && !second && !third && !fourth && (
          <Route exact to={`/home`} component={Home} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
