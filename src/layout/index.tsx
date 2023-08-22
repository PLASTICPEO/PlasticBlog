import { ReactNode } from "react";
import Header from "../components/header";

const DefaultLayout: React.FC<{
  children: ReactNode;
  isColor?: string;
}> = ({ children, isColor }) => {
  return (
    <div>
      <div>
        <Header isColor={isColor} />
      </div>

      <div>{children}</div>
    </div>
  );
};
export default DefaultLayout;
