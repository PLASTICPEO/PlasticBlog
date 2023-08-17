import { ReactNode } from "react";

export interface ModalTypes {
  title?: string;
  authPerson?: () => void;
  personAuth?: { username: string; password: string };
  personRegister?: { username: string; email: string; password: string };
  buttonValue?: string;
  children: ReactNode;
  triggerProps?: any;
  as?: string;
  ref?: any;
}
