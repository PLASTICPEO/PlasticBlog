import { ReactNode } from "react";

export interface ContextTypes {
  onFinish: (values: any) => void;
  showModal: () => void;
  hideModal: () => void;
  open: boolean;
  wrongInput: boolean;
}

export interface ContextProviderTypes {
  children: ReactNode;
}
