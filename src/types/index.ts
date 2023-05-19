export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  profileImage: string;
  subscribedToUsers: IUser[];
  subscribers: number;
  likedVideos: IVideo[];
  videos: IVideo[];
}

export interface IVideo {
  _id: string;
  user: IUser;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  views: number;
  tags: string[];
  likes: number;
  dislikes: number;
  createdAt: string;
  comments: IComment[];
}

export interface IComment {
  user: IUser;
  video: IVideo;
  text: string;
}

export interface ICategory {
  category: "Главная" | "Подписки" | string;
}
