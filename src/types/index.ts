export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  subscribedToUsers: IUser[];
  subscribers: IUser[];
  likedVideos: IVideo[];
  videos: IVideo[]
}

export interface IVideo {
    
}
