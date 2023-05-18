import axios from "axios";

const token = localStorage.getItem("token");

export const fetcher = axios.create({
  baseURL: "/", // proxy in package.json
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
