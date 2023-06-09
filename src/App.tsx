import { useEffect, type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Channel, Feed, Search, Video } from "./pages";
import { Navbar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./hooks/typedRedux";
import { getMe } from "./redux/asyncThunks/getMe";
import { getVideos } from "./redux/asyncThunks/getVideos";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box sx={{ backgroundColor: "#e3e3e3" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/seach/:term" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

