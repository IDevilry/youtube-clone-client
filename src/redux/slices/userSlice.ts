import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideo, type IUser } from "../../types";
import { IAuthResponse } from "../../components/AuthModal/AuthModal.types";
import { getMe } from "../asyncThunks/getMe";

interface UserState {
  currentUser: IUser | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IAuthResponse>) => {
      localStorage.setItem("token", action.payload.access_token);
      state.currentUser = action.payload.user;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.currentUser = null;
    },
    addLikedVideo: (state, action: PayloadAction<IVideo>) => {
      state.currentUser?.likedVideos.push(action.payload);
    },
    removeLikedVideo: (state, action: PayloadAction<IVideo>) => {
      if (!state.currentUser) return;

      state.currentUser.likedVideos = state.currentUser?.likedVideos.filter(
        (video) => video._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { logout, setCurrentUser, addLikedVideo, removeLikedVideo } = userSlice.actions;
export default userSlice.reducer;
