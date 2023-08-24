import { ReactNode } from "react";
import Header from "../components/header/index";

const DefaultLayout: React.FC<{
  children: ReactNode;
  dictatedColor?: string;
  isWhite?: boolean;
}> = ({ children, dictatedColor, isWhite }) => {
  return (
    <div>
      <div>
        <Header dictatedColor={dictatedColor} isWhite={isWhite} />
      </div>

      <div>{children}</div>
    </div>
  );
};
export default DefaultLayout;
