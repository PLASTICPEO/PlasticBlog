import { createContext, useEffect, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";
import { AUTH_TOKEN } from "../api/constants/constants";

export const AppContext = createContext<ContextTypes>({
  isAuthenticated: false,
  setIsAuthenticated: () => true,
  scrollPositionTop: () => null,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        scrollPositionTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
