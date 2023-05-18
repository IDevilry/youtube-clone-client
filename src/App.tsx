import { type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Channel, Feed, Search, Video } from "./pages";
import { Navbar } from "./components";



const App: FC = () => {
  return (
    <BrowserRouter>
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

