import { useState, useEffect, useRef } from "react";
import { setToken } from "../../../api/api";
import api from "../../../api/api";
import { Modal } from "antd";

export const useHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [requestToken, setRequestToken] = useState(null);
  const [userInfo, setUserInfo] = useState<{
    name: string;
    username: string;
    age: string | number;
  }>({ name: "", username: "", age: "" });

  const loginRef = useRef(null);

  const handleLogin = (values: any) => {
    loginRef.current.closeModal();
    // return api
    //   .get("/users")
    //   .then((response: any) => {
    //     const getToken = response.data.find(
    //       (resUser: any) =>
    //         values.Email === resUser.user &&
    //         values.password === resUser.password
    //     );
    //     setRequestToken(getToken.accessToken);
    //     setToken("Bearer", getToken.accessToken);
    //     if (getToken.accessToken) {
    //       api
    //         .get("/usersInfo")
    //         .then((response: any) => {
    //           const getUserInfo = response.data.find(
    //             (resUser: any) =>
    //               resUser.Identification === getToken.accessToken
    //           );
    //           setUserInfo(getUserInfo);
    //         })
    //         .catch(() => setUserInfo({ name: "", username: "", age: "" }));
    //     }
    //   })
    //   .catch(() => setRequestToken(null));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return {
    loginRef,
    scrollY,
    requestToken,
    userInfo,
    handleLogin,
  };
};
