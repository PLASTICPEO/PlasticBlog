import { ReactNode } from "react";

export interface ContextTypes {
  close: boolean;
  closeModal: () => void;
}

export interface ContextProviderTypes {
  children: ReactNode;
}
