import { ReactNode } from "react";

export interface ContextTypes {
    open: boolean;
    showModal: () => void;
    hideModal: () => void;
}

  export interface ContextProviderTypes {
    children: ReactNode;
}