import { ReactNode } from "react";

export interface ModalTypes {
  title: string;
  children: ReactNode;
  triggerProps?: any;
  as?: string;
}
