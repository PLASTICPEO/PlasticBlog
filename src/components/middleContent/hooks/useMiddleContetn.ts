import api from "../../../api/api";
import { useEffect, useState } from "react";

export const useMiddleContent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api
      .get("https://64e4dcf9c55563802913dd97.mockapi.io/api/blogs")
      .then((response: any) => setBlogs(response.data));
  }, []);

  return { blogs };
};
