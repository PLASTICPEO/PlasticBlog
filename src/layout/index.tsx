import { ReactNode } from "react";
import Header from "../components/header";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DefaultLayout;
