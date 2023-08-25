// context.types.ts
import { ReactNode, SetStateAction, Dispatch } from "react";

export interface ContextTypes {
  scrollY: number;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  scrollPositionTop: () => void;
}

export interface ContextProviderTypes {
  children: ReactNode;
}
