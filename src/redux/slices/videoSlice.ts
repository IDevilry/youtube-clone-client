import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideo } from "../../types";
import { getSubsVideos, getVideos } from "../asyncThunks/getVideos";
import { fetcher } from "../../api";

interface VideoState {
  videos: IVideo[];
  subs: IVideo[];
  loading: boolean;
  error: boolean;
}

const initialState: VideoState = {
  videos: [],
  subs: [],
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    like(state, action: PayloadAction<IVideo>) {
      const video = state.videos.find(
        (video) => video._id === action.payload._id
      );
      if (!video) return;

      video.likes += 1;

      fetcher.patch(`videos/like/${video._id}`);
    },
    dislike(state, action: PayloadAction<IVideo>) {
      const video = state.videos.find(
        (video) => video._id === action.payload._id
      );

      if (!video) return;
      video.likes -= 1;

      fetcher.patch(`videos/dislike/${video._id}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.videos = action.payload;
    });
    builder.addCase(getVideos.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getSubsVideos.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getSubsVideos.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.subs = action.payload;
    });
    builder.addCase(getSubsVideos.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export default videoSlice.reducer;
export const { like, dislike } = videoSlice.actions;
