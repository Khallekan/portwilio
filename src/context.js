import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  theme: "DARK",
  justIcons: false,
  mobileDevice: null,
  buttonTheme: "BLUE",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
