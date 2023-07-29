import React, { createContext, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";

import { useUserData } from "../api/api";

export const AppContext = createContext<ContextTypes>({
  open: false,
  wrongInput: false,
  onFinish: () => {},
  showModal: () => {},
  hideModal: () => {},
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const { isLoading, error, data } = useUserData(["userData"]);
  const [open, setOpen] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);

  const onFinish = (values: any) => {
    const userPresence = data.find(
      (person: any) =>
        values.Email === person.user && values.password === person.password
    );
    const invalidInpuVtalue = data.find(
      (person: any) =>
        values.Email === person.user || values.password === person.password
    );
    if (userPresence) {
      console.log("ავტორიზაცია წარმატებით გაიარე", userPresence);
      setOpen(false);
    } else {
      console.log("ავტორიზაცია ვერ გაიარე", userPresence);
    }
    if (invalidInpuVtalue && !userPresence) {
      setWrongInput(true);
      const timer = setTimeout(() => {
        setWrongInput(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        wrongInput,
        open,
        onFinish,
        showModal,
        hideModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
