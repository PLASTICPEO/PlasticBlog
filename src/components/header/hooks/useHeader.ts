import { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";
import { setToken } from "../../../api/api";

import api from "../../../api/api";

interface LoginRefElement {
  closeModal: () => void;
}

export const useHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

  const loginRef = useRef<LoginRefElement | null>(null);

  const handleLogin = (values: any) => {
    const loginObj: any = { email: values.Email, password: values.password };

    api.post("api/auth/login", loginObj).then((response: any) => {
      if (response.data.accessToken) {
        setToken("Bearer", response.data.accessToken);
        localStorage.setItem("user", response.data.id);
        loginRef.current?.closeModal();
        setIsAuthenticated(false);
      }
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
  };
};
