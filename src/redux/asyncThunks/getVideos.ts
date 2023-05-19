import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "../../api";
import { type IVideo } from "../../types";

export const getVideos = createAsyncThunk<IVideo[]>(
  "videos/getVideos",
  async () => {
    const res = await fetcher.get<IVideo[]>("/videos");
    return res.data;
  }
);

export const getSubsVideos = createAsyncThunk<IVideo[]>(
  "videos/getSubsVideos",
  async () => {
    const res = await fetcher.get<IVideo[]>("/videos/subs");
    return res.data;
  }
);
