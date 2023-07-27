import { ReactNode } from "react";

export interface ContextTypes {
  user: {
    username: string;
    password: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{ username: string; password: string }>
  >;
  authUser: () => void;
}

export interface ContextProviderTypes {
  children: ReactNode;
}
