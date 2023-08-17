import { useContext } from "react";
import { AppContext } from "../../../../context/ContextProvider";
import { MenuProps } from "antd";
import { AUTH_TOKEN } from "../../../../api/constants/constants";

export const useDropDown = () => {
  const { setIsAuthenticated, scrollPositionTop } = useContext(AppContext);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "3") {
      localStorage.removeItem(AUTH_TOKEN);
      setIsAuthenticated(true);
      scrollPositionTop();
    }
  };

  return {
    onClick,
  };
};
