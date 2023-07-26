import { createContext, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";

export const AppContext = createContext<ContextTypes>({
  open: false,
  showModal: () => {},
  hideModal: () => {},
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        open,
        showModal,
        hideModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
