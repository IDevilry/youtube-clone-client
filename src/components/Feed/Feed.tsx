import { useState, type FC } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar, VideosList } from "..";

const Feed: FC = () => {
  const [selectedCategory, setCategory] = useState<string>("Главная");

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        height: "90vh",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "100%" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </Box>
      <Box width="100%">
        <VideosList category={selectedCategory} />
      </Box>
    </Stack>
  );
};

export default Feed;
