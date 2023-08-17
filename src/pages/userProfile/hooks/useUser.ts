import { useEffect, useState } from "react";
import api from "../../../api/api";

export const useUser = () => {
  const userId = localStorage.getItem("user");
  const [userInfo, setUserInfo] = useState<{
    id: number;
    fullName: string;
    email: string;
  }>({
    id: NaN,
    fullName: "",
    email: "",
  });

  useEffect(() => {
    api.get(`/user/${userId}`).then((res: any) => setUserInfo(res.data));
  }, []);

  return {
    userInfo,
  };
};
