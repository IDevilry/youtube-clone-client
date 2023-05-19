import { fetcher } from ".";
import { IUser } from "../types";

export const fetchMe = async () => {
  const res = await fetcher.get<IUser>("/users/me");
  return res.data;
};
