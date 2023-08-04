import axios from "axios";
import { AUTH_TOKEN } from "./constants/constants";

const token = localStorage.getItem(AUTH_TOKEN);
const baseUrl = import.meta.env.VITE_BASE_URL;
const headers: any = {};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosParams = {
  baseURL: baseUrl,
  headers,
};

const axiosInstance = axios.create(axiosParams);

export const setToken = (tokenType: any, token: string) => {
  localStorage.setItem(AUTH_TOKEN, token);
  axiosInstance.defaults.headers.Authorization = `${tokenType} ${token}`;
};

const api = (http: any) => ({
  get: (url: any) => http.get(url),
  post: (url: string, body: string, config: any) =>
    http.post(url, body, config),
});

export default api(axiosInstance);
