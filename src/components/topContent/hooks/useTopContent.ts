import { useContext, useRef } from "react";
import { AppContext } from "../../../context/ContextProvider";
import api from "../../../api/api";
import { setToken } from "../../../api/api";

interface LoginRefElement {
  closeModal: () => void;
  openModal: () => void;
}

export const useTopContetn = () => {
  const loginRef = useRef<LoginRefElement | null>(null);
  const { setIsAuthenticated } = useContext(AppContext);

  const handleLogin = (values: any) => {
    const loginObj: any = { email: values.Email, password: values.password };

    api.post("api/auth/login", loginObj).then((response: any) => {
      if (response.data.accessToken) {
        setToken("Bearer", response.data.accessToken);
        localStorage.setItem("user", response.data.id);
        loginRef.current?.closeModal();
        setIsAuthenticated(false);
        api.get("/user").then((res: any) => console.log(res, "checkk"));
      }
    });
  };

  return {
    loginRef,
    handleLogin,
  };
};
