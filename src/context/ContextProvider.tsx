// contextProvider.tsx

import { createContext, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";

// Use the ContextTypes interface as the type for AppContext
export const AppContext = createContext<ContextTypes>({
  user: { username: "", password: "" },
  authUser: () => {},
  setUser: () => {},
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const authUser = () => {
    console.log(user);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        authUser,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
