import { createContext, useEffect, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";

export const AppContext = createContext<ContextTypes>({
  close: false,
  closeModal: () => {},
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [close, setClose] = useState<boolean>(false);

  const closeModal = () => {
    console.log("check");
    setClose(false);
  };

  return (
    <AppContext.Provider value={{ close, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
