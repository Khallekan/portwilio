import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { useGlobalContext } from "../context";
import Onboarding from "../containers/Onboarding";
import { routes } from "../utils/sidebar";
import "../styles/App.css";

const textValues = sessionStorage.getItem("reloadOnboarding") || {
  first: true,
  second: false,
  third: false,
};

const App = () => {
  let element = useRoutes(routes);
  const { theme } = useGlobalContext();
  const [bgTheme, setBgTheme] = useState(``);
  const [text, setText] = useState(textValues);

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
    <div className={`app-wrapper ${bgTheme}`}>
      {first || second || third ? (
        <Onboarding text={text} setText={setText} />
      ) : (
        element
      )}
    </div>
  );
};

export default App;
