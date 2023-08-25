import { createContext, useEffect, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";
import { AUTH_TOKEN } from "../api/constants/constants";

export const AppContext = createContext<ContextTypes>({
  scrollY: NaN,
  isAuthenticated: false,
  setIsAuthenticated: () => true,
  scrollPositionTop: () => null,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState(0);

  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        scrollY,
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
