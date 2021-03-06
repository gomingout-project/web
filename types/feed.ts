export interface IFeed {
  id: number;
  ip: string;
  userId: null | number;
  nickname: string;
  password: string;
  category: string;
  title: string;
  content: string;
  imageURLs: Array<string>;
  likeCount: number;
  commentCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IUser {
  dateOfBirth: string;
  id: string;
  email: string;
  imageUrl: string;
  sex: string;
}

export type FeedListType = {
  content: Array<IFeed>;
}