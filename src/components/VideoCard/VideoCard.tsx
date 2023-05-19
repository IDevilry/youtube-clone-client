import { useState, type FC } from "react";
import { VideoCardProps } from "./VideoCard.props";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { dislike, like } from "../../redux/slices/videoSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/typedRedux";
import { selectCurrentUser } from "../../redux/selectors";
import { addLikedVideo, removeLikedVideo } from "../../redux/slices/userSlice";
import { type IVideo } from "../../types";

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectCurrentUser());
  const [isLiked, setIsLiked] = useState<boolean>(
    currentUser?.likedVideos.includes(video._id as unknown as IVideo)
      ? true
      : false
  );

  const handeLike = () => {
    dispatch(like(video));
    dispatch(addLikedVideo(video));
    setIsLiked(true);
  };

  const handeDislike = () => {
    dispatch(dislike(video));
    dispatch(removeLikedVideo(video));
    setIsLiked(false);
  };

  return (
    <Grid sx={{ marginTop: "10px" }} container width="50%" spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={<Avatar src={video.user.profileImage}></Avatar>}
            title={
              <Typography variant="h6" color="CaptionText">
                {video.user.name}
              </Typography>
            }
            subheader={
              video.user.subscribers
                ? video.user.subscribers
                : "Нет ни одного подписчика"
            }
          />
          <CardMedia
            component="img"
            image={video.thumbnail}
            alt={video.title}
            sx={{
              objectFit: "cover",
            }}
          />
          <CardContent>
            <Typography
              sx={{ marginBottom: "10px" }}
              variant="h5"
              color="CaptionText"
            >
              {video.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={isLiked ? handeDislike : handeLike}
                disabled={!currentUser}
              >
                <ThumbUpIcon sx={{ marginRight: "10px" }} />
                {video.likes}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VideoCard;
