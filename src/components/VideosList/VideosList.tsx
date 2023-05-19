import { type FC } from "react";
import { type IVideosListProps } from "./VideosList.props";

import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/typedRedux";
import { selectAllVideos } from "../../redux/selectors";

import VideoCard from "../VideoCard/VideoCard";

const VideosList: FC<IVideosListProps> = ({ category }) => {
  const { videos, subs } = useAppSelector(selectAllVideos());

  return (
    <Box padding="20px">
      <Typography variant="h4">{category}</Typography>
      {category === "Главная"
        ? videos.length
          ? videos.map((video) => <VideoCard key={video._id} video={video} />)
          : null
        : subs.length
        ? subs.map((sub) => <VideoCard key={sub._id} video={sub} />)
        : null}
    </Box>
  );
};

export default VideosList;
