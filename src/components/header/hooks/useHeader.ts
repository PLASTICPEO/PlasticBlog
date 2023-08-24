import { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";
import { setToken } from "../../../api/api";
import { message } from "antd";

import api from "../../../api/api";

interface LoginRefElement {
  closeModal: () => void;
}

export const useHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

  const loginRef = useRef<LoginRefElement | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const success = (e: any) => {
    messageApi.open({
      type: "success",
      content: `${e} You have successfully authenticated !`,
    });
  };

  const error = (e: any) => {
    messageApi.open({
      type: "error",
      content: `${e}`,
    });
  };

  const handleLogin = (values: any) => {
    const loginObj: any = { email: values.Email, password: values.password };

    api
      .post("/auth/login", loginObj)
      .then((response: any) => {
        if (response.data.accessToken) {
          setToken("Bearer", response.data.accessToken);
          localStorage.setItem("user", response.data.id);

          const emailParts = loginObj.email.split("@");
          const domain = emailParts[0];

          success(domain);
          loginRef.current?.closeModal();
          setIsAuthenticated(false);

          // Return a cleanup function within useEffect to clear the timeout
        }
      })
      .catch((e: any) => {
        error(e.response.data.message);
        console.log(e);
      });
  };

  const handleRegister = (values: any) => {
    const registerObj: any = {
      fullName: values.fullName,
      email: values.Email,
      password: values.password,
    };

    api.post("api/user/create", registerObj).then((response: any) => {
      if (response.data) {
        loginRef.current?.closeModal();
      }
    });
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
    handleLogin,
    handleRegister,
    isAuthenticated,
    contextHolder,
  };
};
