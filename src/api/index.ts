import axios from "axios";

export const fetcher = axios.create({
  baseURL: "/", // proxy in package.json
});

fetcher.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
