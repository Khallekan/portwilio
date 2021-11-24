import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = JSON.parse(localStorage.getItem("settings")) || {
  theme: "LIGHT",
  justIcons: false,
  mobileDevice: null,
  buttonTheme: "BLUE",
  isContactModalOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  localStorage.setItem(`settings`, JSON.stringify(state));
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const globalContext = useContext(AppContext);
  return globalContext;
};

export { AppContext, AppProvider, useGlobalContext };
