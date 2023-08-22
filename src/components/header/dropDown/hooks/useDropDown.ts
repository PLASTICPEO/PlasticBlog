import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/ContextProvider";
import { MenuProps } from "antd";
import { AUTH_TOKEN } from "../../../../api/constants/constants";
import api from "../../../../api/api";

export const useDropDown = () => {
  const { setIsAuthenticated, scrollPositionTop, isAuthenticated } =
    useContext(AppContext);
  const [userProfileRoute, setUserProfileRoute] = useState("");

  useEffect(() => {
    const userIdentity = localStorage.getItem("user");
    if (userIdentity) {
      api.get("/user").then((res: any) => {
        const userProfile = res.data.find(
          (user: any) => user.id === Number(userIdentity)
        );
        setUserProfileRoute(userProfile.fullName);
      });
    }
  }, []);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "3":
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem("user");
        setIsAuthenticated(true);
        scrollPositionTop();
        break;
      case "1":
        const userIdentity = localStorage.getItem("user");
        api.get("/user").then((res: any) => {
          const userProfile = res.data.find(
            (user: any) => user.id === Number(userIdentity)
          );
          setUserProfileRoute(userProfile.fullName);
        });
        break;
      default:
        console.log("check");
    }
  };

  return {
    onClick,
    userProfileRoute,
  };
};
