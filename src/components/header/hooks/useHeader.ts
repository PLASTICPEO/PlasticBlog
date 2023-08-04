import { useState, useEffect } from "react";
import { Form, Modal } from "antd";
import { setToken } from "../../../api/api";
import api from "../../../api/api";

export const useHeader = () => {
  const [form] = Form.useForm();
  const [scrollY, setScrollY] = useState(0);
  const [requestToken, setRequestToken] = useState(null);
  const [userInfo, setUserInfo] = useState<{
    name: string;
    username: string;
    age: string | number;
  }>({ name: "", username: "", age: "" });

  const handleLogin = (values: any) => {
    api
      .get("/users")
      .then((response: any) => {
        const getToken = response.data.find(
          (resUser: any) =>
            values.Email === resUser.user &&
            values.password === resUser.password
        );

        setRequestToken(getToken.accessToken);
        setToken("Bearer", getToken.accessToken);
        if (getToken.accessToken) {
          api
            .get("/usersInfo")
            .then((response: any) => {
              const getUserInfo = response.data.find(
                (resUser: any) =>
                  resUser.Identification === getToken.accessToken
              );
              setUserInfo(getUserInfo);
              form.resetFields();
            })
            .catch(() => setUserInfo({ name: "", username: "", age: "" }));
        }
      })
      .catch(() => setRequestToken(null));
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
    form,
    scrollY,
    requestToken,
    userInfo,
    handleLogin,
  };
};
