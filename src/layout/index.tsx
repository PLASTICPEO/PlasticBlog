import { ReactNode } from "react";
import Header from "../components/header";
import TopContent from "../components/topContent";

const DefaultLayout: React.FC<{
  children: ReactNode;
  withTopContent?: boolean;
  isWhite?: boolean;
}> = ({ children, withTopContent, isWhite }) => {
  return (
    <div>
      <div>
        <Header isWhite={isWhite} />
        <TopContent withTopContent={withTopContent} />
      </div>

      <div>{children}</div>
    </div>
  );
};
export default DefaultLayout;
