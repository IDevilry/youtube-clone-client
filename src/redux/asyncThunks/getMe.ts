import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMe } from "../../api/fetchMe";
import { type IUser } from "../../types";

export const getMe = createAsyncThunk<IUser | null>("user/getMe", async () => {
  if (localStorage.getItem("token")) {
    return await fetchMe();
  }
  return null;
});
