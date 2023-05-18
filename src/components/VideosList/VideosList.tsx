import { type FC } from "react";
import { type IVideosListProps } from "./VideosList.props";

const VideosList: FC<IVideosListProps> = ({ category }) => {
  return <div>{category}</div>;
};

export default VideosList;
