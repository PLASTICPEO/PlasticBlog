import { ReactNode } from "react";

export interface ModalTypes {
  buttonValue?: string;
  children: ReactNode;
  triggerProps?: any;
  as?: string;
}
