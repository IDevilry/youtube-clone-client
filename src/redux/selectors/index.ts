import { RootState } from "../store";

export const selectCurrentUser = () => (state: RootState) => state.user;

export const selectAllVideos = () => (state: RootState) => state.videos;